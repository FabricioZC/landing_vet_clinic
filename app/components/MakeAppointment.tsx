"use client";
import Image from "next/image";
import { useState } from "react";

export default function MakeAppointment() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contacts" className="px-5 md:px-10 xl:px-20 pb-12 md:pb-16 -mt-8 md:-mt-16 scroll-mt-24">
      <div className="relative bg-[#F9A825] rounded-[28px] md:rounded-[40px] overflow-hidden px-5 sm:px-8 py-10 md:py-14">

        {/* Title row */}
        <div className="flex items-center justify-center gap-3 md:gap-5 mb-3 relative z-10 flex-wrap">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black text-center">
            Make an appointment
          </h2>
          <Image
            src="/images/11c.png"
            alt="Cat"
            width={120}
            height={130}
            className="object-contain flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
            unoptimized
          />
        </div>

        {/* Subtitle */}
        <p className="text-center text-black text-sm md:text-base mb-8 md:mb-10 relative z-10 px-2">
          The administrator will contact you shortly to confirm the
          <br className="hidden sm:block" />{" "}
          time and day of consultation.
        </p>

        {/* Form */}
        <form
          className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col gap-4 md:gap-5 relative z-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-black font-semibold mb-1 text-sm">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl px-4 py-3 bg-white outline-none text-black text-sm md:text-base"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-1 text-sm">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl px-4 py-3 bg-white outline-none text-black text-sm md:text-base"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-1 text-sm">Ph. number</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-xl px-4 py-3 bg-white outline-none text-black text-sm md:text-base"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 flex-shrink-0 cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-black leading-snug cursor-pointer">
              By clicking the &ldquo;Enter&rdquo; button, you accept the terms of
              personal data processing
            </label>
          </div>

          <div className="flex justify-center mt-1">
            <button
              type="submit"
              className="bg-black text-white px-8 md:px-10 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-gray-800 transition-colors"
            >
              Book now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
