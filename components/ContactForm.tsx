import React from "react";


const ContactForm = () => {
  return (
    <div className="rounded-[8px] bg-white border border-[#d9d9d9] shadow-sm p-5 md:p-6">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full h-12 bg-[#efefef] px-4 text-[18px] outline-none border border-transparent focus:border-[#b4b4b4]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full h-12 bg-[#efefef] px-4 text-[18px] outline-none border border-transparent focus:border-[#b4b4b4]"
        />
        <input
          type="tel"
          placeholder="Telephone"
          className="w-full h-12 bg-[#efefef] px-4 text-[18px] outline-none border border-transparent focus:border-[#b4b4b4]"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full bg-[#efefef] px-4 py-3 text-[18px] outline-none border border-transparent focus:border-[#b4b4b4] resize-none"
        />

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[#213666] px-9 py-3 text-[18px] font-medium text-white hover:bg-[#1a2d55] transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
