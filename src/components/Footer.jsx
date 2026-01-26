"use client";

import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const socialIcons = [
  {
    key: "LinkedIn",
    icon: <GrLinkedin />,
    href: "https://www.linkedin.com/in/supreetpradhan/",
  },
  { key: "GitHub", icon: <BsGithub />, href: "https://github.com/Supp-2020" },
];
const funWebsites = [
  {
    key: "Swap Window",
    href: "https://www.window-swap.com/Window",
    emoji: "🙂",
  },
  {
    key: "Bruno Simon Portfolio",
    href: "https://bruno-simon.com/",
    emoji: "🚗",
  },
];

const navLinks = [
  { label: "Work Experience", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "About Me", href: "#", isAboutMe: true },
];

const Footer = () => {
  return (
    <footer className="bg-[#191A23] rounded-t-4xl text-white mt-16 mx-16">
      <div className="px-16 pt-12 pb-8">
        {/* Main footer content */}
        <div className="flex items-start justify-between mb-6">
          {/* Left section - Logo and contact */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Supreet.js</h2>

            <div className="">
              <span className="inline-block bg-[#b9ff66] text-slate-900 text-xs font-bold px-3 py-1 rounded mb-4">
                Contact me
              </span>
              <div className="space-y-1 text-sm text-gray-300">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:supkpradhan@gmail.com"
                    className="underline hover:text-gray-200"
                  >
                    supkpradhan@gmail.com
                  </a>
                </p>
                <p>Location: Bangalore, India</p>
              </div>
            </div>

            {/* Navigation links */}
            <div className="flex gap-8">
              {navLinks.map((item) => (
                <React.Fragment key={item.label}>
                  {item?.isAboutMe ? (
                    <a
                      href={item.href}
                      className="inline-block bg-[#b9ff66] text-slate-900 hover:bg-lime-200  text-xs font-bold px-3 py-1 rounded"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition text-sm"
                    >
                      {item.label}
                    </a>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              {socialIcons.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right section - Download Resume */}
          <div className="flex flex-col items-end gap-6">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "resume.pdf";
                link.click();
              }}
              className="bg-[#b9ff66] hover:bg-lime-200 text-slate-900 font-bold px-8 py-3 rounded transition cursor-pointer"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex items-center justify-between text-xs text-gray-400">
          <div className=" flex items-center gap-8">
            <code>Fun Websites: </code>
            {funWebsites.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <code>
                  {item.key} {item.emoji}
                </code>
              </a>
            ))}
          </div>
          <code>Last Updated : 25/01/2026</code>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
