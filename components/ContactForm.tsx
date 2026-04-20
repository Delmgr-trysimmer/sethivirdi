"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
        },
      ) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
    onRecaptchaLoaded?: () => void;
  }
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormProps = {
  formType?: "contact" | "appointment";
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactForm({ formType = "contact" }: ContactFormProps) {
  const router = useRouter();
  const recaptchaRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [captchaToken, setCaptchaToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const renderCaptcha = () => {
      if (
        !siteKey ||
        !recaptchaRef.current ||
        !window.grecaptcha ||
        widgetIdRef.current !== null
      ) {
        return;
      }

      widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: siteKey,
        callback: (token: string) => {
          setCaptchaToken(token);
          setStatusMessage("");
        },
        "expired-callback": () => {
          setCaptchaToken("");
          setStatusMessage("reCAPTCHA expired. Please verify again.");
        },
      });
    };

    window.onRecaptchaLoaded = renderCaptcha;
    renderCaptcha();

    return () => {
      delete window.onRecaptchaLoaded;
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!captchaToken) {
      setStatusMessage("Please complete the reCAPTCHA before submitting.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          formType,
          recaptchaToken: captchaToken,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit the form.");
      }

      setFormState(initialFormState);
      setCaptchaToken("");

      if (widgetIdRef.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetIdRef.current);
      }

      router.push("/thankyou");
    } catch (error) {
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[8px] border border-[#d9d9d9] bg-white p-5 shadow-sm md:p-6">
      {siteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit`}
          strategy="afterInteractive"
        />
      ) : null}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={(event) =>
            setFormState((current) => ({ ...current, name: event.target.value }))
          }
          className="h-12 w-full border border-transparent bg-[#efefef] px-4 text-[18px] outline-none focus:border-[#b4b4b4]"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={(event) =>
            setFormState((current) => ({ ...current, email: event.target.value }))
          }
          className="h-12 w-full border border-transparent bg-[#efefef] px-4 text-[18px] outline-none focus:border-[#b4b4b4]"
          required
        />
        <input
          type="tel"
          placeholder="Telephone"
          value={formState.phone}
          onChange={(event) =>
            setFormState((current) => ({ ...current, phone: event.target.value }))
          }
          className="h-12 w-full border border-transparent bg-[#efefef] px-4 text-[18px] outline-none focus:border-[#b4b4b4]"
          required
        />
        <textarea
          placeholder="Message"
          rows={5}
          value={formState.message}
          onChange={(event) =>
            setFormState((current) => ({ ...current, message: event.target.value }))
          }
          className="w-full resize-none border border-transparent bg-[#efefef] px-4 py-3 text-[18px] outline-none focus:border-[#b4b4b4]"
          required
        />

        <div className="overflow-x-auto">
          {siteKey ? (
            <div ref={recaptchaRef} />
          ) : (
            <p className="text-sm text-[#b42318]">
              Missing `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` environment variable.
            </p>
          )}
        </div>

        {statusMessage ? (
          <p className="text-sm text-[#b42318]">{statusMessage}</p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[#213666] px-9 py-3 text-[18px] font-medium text-white transition-colors hover:bg-[#1a2d55] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
