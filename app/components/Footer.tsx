"use client";
import { useState } from "react";
import Image from "next/image";

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconTikTok = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-white px-5 sm:px-10 md:px-16 xl:px-32 pt-10 md:pt-14 pb-8">

      {/* Top row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium text-black leading-tight">
          Taking care of your pet!
        </h2>
        <div className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="Happy Paw"
            width={270}
            height={90}
            className="h-14 md:h-20 w-auto object-contain"
          />
        </div>
      </div>

      {/* Middle row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-10 md:mb-12">
        {/* Socials */}
        <div>
          <p className="text-base text-black mb-3">Waving a paw in</p>
          <div className="flex items-center gap-3">
            {[
              { label: "Instagram", Icon: IconInstagram },
              { label: "TikTok",    Icon: IconTikTok    },
              { label: "Facebook",  Icon: IconFacebook  },
            ].map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-11 h-11 rounded-full bg-[#F9A825] flex items-center justify-center text-black hover:bg-[#e69b1d] transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Mailbox */}
        <div className="w-full sm:w-auto">
          <p className="text-base text-black mb-3">Mailbox</p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-[#F9A825] rounded-full px-5 py-2.5 text-sm outline-none flex-1 sm:flex-none sm:w-64 md:w-72 text-black placeholder-gray-400 min-w-0"
            />
            <button className="bg-[#F9A825] text-black font-semibold px-5 md:px-6 py-2.5 rounded-full text-sm hover:bg-[#e69b1d] transition-colors whitespace-nowrap shrink-0">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500">2025 © Happy Paw</p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-gray-700 hover:underline">Terms of use</a>
          <a href="#" className="text-sm text-gray-700 hover:underline">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
