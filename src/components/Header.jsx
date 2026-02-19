"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const rightNavItems = [
    { label: "Work Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact" },
    { label: "About Me", href: "#" },
  ];

  return (
    <header className="w-full bg-stone-100">
      <nav className="w-full flex items-center justify-between py-4 px-4 md:px-8 lg:px-16">
        {/* Left logo */}
        <Link href="#" className="text-xl md:text-2xl font-bold text-slate-800">
          Supreet.js
        </Link>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-slate-800 p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Right navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {rightNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              scroll={true}
              className={`${
                item.label === "About Me"
                  ? "px-3 py-2 rounded-md text-xs font-semibold bg-[#b9ff66] text-[#191a23] transition whitespace-nowrap"
                  : "text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-t border-stone-200">
          <div className="flex flex-col py-4 px-4 space-y-3">
            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                scroll={true}
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  item.label === "About Me"
                    ? "px-4 py-2 rounded-md text-sm font-semibold bg-[#b9ff66] text-[#191a23] transition w-fit"
                    : "text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors py-2"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
