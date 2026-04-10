import net from "node:net";
import tls from "node:tls";

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
};

type SendMailOptions = {
  to: string[];
  cc?: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

type SocketLike = net.Socket | tls.TLSSocket;

function readSmtpResponse(socket: SocketLike) {
  return new Promise<{ code: number; message: string }>((resolve, reject) => {
    let buffer = "";

    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
      socket.off("close", onClose);
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const onClose = () => {
      cleanup();
      reject(new Error("SMTP connection closed unexpectedly."));
    };

    const onData = (chunk: Buffer | string) => {
      buffer += chunk.toString();

      const lines = buffer.split("\r\n").filter(Boolean);
      if (lines.length === 0) {
        return;
      }

      const lastLine = lines[lines.length - 1];
      if (!/^\d{3} /.test(lastLine)) {
        return;
      }

      cleanup();
      resolve({
        code: Number(lastLine.slice(0, 3)),
        message: buffer,
      });
    };

    socket.on("data", onData);
    socket.on("error", onError);
    socket.on("close", onClose);
  });
}

async function sendCommand(
  socket: SocketLike,
  command: string,
  expectedCodes: number[],
) {
  socket.write(`${command}\r\n`);
  const response = await readSmtpResponse(socket);

  if (!expectedCodes.includes(response.code)) {
    throw new Error(`SMTP command failed: ${command} :: ${response.message}`);
  }

  return response;
}

async function upgradeToTls(socket: net.Socket, host: string) {
  return new Promise<tls.TLSSocket>((resolve, reject) => {
    const securedSocket = tls.connect(
      {
        socket,
        servername: host,
      },
      () => resolve(securedSocket),
    );

    securedSocket.once("error", reject);
  });
}

function escapeHeaderValue(value: string) {
  return value.replace(/\r?\n/g, " ").trim();
}

function buildMessage(config: SmtpConfig, options: SendMailOptions) {
  const headers = [
    `From: ${escapeHeaderValue(config.from)}`,
    `To: ${options.to.map(escapeHeaderValue).join(", ")}`,
    options.cc?.length ? `Cc: ${options.cc.map(escapeHeaderValue).join(", ")}` : "",
    options.replyTo ? `Reply-To: ${escapeHeaderValue(options.replyTo)}` : "",
    `Subject: ${escapeHeaderValue(options.subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/html; charset="UTF-8"',
  ].filter(Boolean);

  return `${headers.join("\r\n")}\r\n\r\n${options.html}\r\n`;
}

export async function sendMail(config: SmtpConfig, options: SendMailOptions) {
  const allRecipients = [...options.to, ...(options.cc ?? [])];

  const plainSocket = await new Promise<net.Socket>((resolve, reject) => {
    const socket = net.createConnection(
      {
        host: config.host,
        port: config.port,
      },
      () => resolve(socket),
    );

    socket.once("error", reject);
  });

  try {
    const greeting = await readSmtpResponse(plainSocket);
    if (greeting.code !== 220) {
      throw new Error(`SMTP greeting failed: ${greeting.message}`);
    }

    await sendCommand(plainSocket, "EHLO localhost", [250]);
    await sendCommand(plainSocket, "STARTTLS", [220]);

    const secureSocket = await upgradeToTls(plainSocket, config.host);

    try {
      await sendCommand(secureSocket, "EHLO localhost", [250]);
      await sendCommand(secureSocket, "AUTH LOGIN", [334]);
      await sendCommand(
        secureSocket,
        Buffer.from(config.user).toString("base64"),
        [334],
      );
      await sendCommand(
        secureSocket,
        Buffer.from(config.pass).toString("base64"),
        [235],
      );
      await sendCommand(
        secureSocket,
        `MAIL FROM:<${escapeHeaderValue(config.from)}>`,
        [250],
      );

      for (const recipient of allRecipients) {
        await sendCommand(
          secureSocket,
          `RCPT TO:<${escapeHeaderValue(recipient)}>`,
          [250, 251],
        );
      }

      await sendCommand(secureSocket, "DATA", [354]);

      const message = buildMessage(config, options)
        .replace(/\n/g, "\r\n")
        .replace(/^\./gm, "..");

      secureSocket.write(`${message}\r\n.\r\n`);
      const dataResponse = await readSmtpResponse(secureSocket);

      if (dataResponse.code !== 250) {
        throw new Error(`SMTP DATA failed: ${dataResponse.message}`);
      }

      await sendCommand(secureSocket, "QUIT", [221]);
    } finally {
      secureSocket.end();
    }
  } finally {
    plainSocket.end();
  }
}
