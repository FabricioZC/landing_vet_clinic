"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About us",  href: "#about"    },
  { label: "Services",  href: "#services"  },
  { label: "Reviews",   href: "#reviews"   },
  { label: "Contacts",  href: "#contacts"  },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="w-full px-5 md:px-10 lg:px-20 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/images/logo.png" alt="Happy Paw" width={200} height={68} className="h-16 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7 bg-white rounded-full shadow-md px-5 lg:px-7 py-2.5">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium cursor-pointer bg-transparent border-none"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contacts")}
            className="bg-amber-400 text-gray-900 text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-500 active:scale-95 transition-all ml-2"
          >
            Book now
          </button>
        </nav>

        {/* Right: address — desktop only */}
        <div className="hidden lg:block text-right leading-5 shrink-0">
          <p className="text-sm font-semibold text-gray-700">The Mall, St John&apos;s Rd, London</p>
          <p className="text-sm font-semibold text-gray-700">Mon-Fri: 9:00 – 20:00</p>
        </div>

        {/* Mobile: Book now + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => scrollTo("#contacts")}
            className="bg-amber-400 text-gray-900 text-xs font-semibold px-4 py-2 rounded-full hover:bg-amber-500 active:scale-95 transition-all"
          >
            Book now
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <span className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-800 transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => { scrollTo(href); setOpen(false); }}
              className="w-full text-left text-base text-gray-700 hover:text-gray-900 font-medium py-3 border-b border-gray-100 last:border-none transition-colors bg-transparent"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
