"use client";

import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FaCodepen, FaDev } from "react-icons/fa";
import { funWebsites, references } from "../libs/constants";

const socialIcons = [
  {
    key: "LinkedIn",
    icon: <GrLinkedin />,
    href: "https://www.linkedin.com/in/supreetpradhan/",
  },
  {
    key: "GitHub",
    icon: <BsGithub />,
    href: "https://github.com/Supp-2020",
  },
  {
    key: "CodePen",
    icon: <FaCodepen />,
    href: "https://codepen.io/supp-2020",
  },
  {
    key: "Dev.to",
    icon: <FaDev />,
    href: "https://dev.to/supreet_pradhan",
  },
];

const navLinks = [
  { label: "Work Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
  { label: "About Me", href: "#", isAboutMe: true },
];

const Footer = () => {
  return (
    <footer
      id="footer-section"
      className="bg-[#191A23] md:rounded-t-4xl text-white mt-8 md:mt-16 md:mx-8 lg:mx-16"
    >
      <div className="px-6 md:px-8 lg:px-16 pt-8 md:pt-12 pb-6 md:pb-8">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 mb-6">
          {/* Left section - Logo and contact */}
          <div className="lg:basis-[30%] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Supreet.js</h2>

            <div className="">
              <span className="inline-block text-lime-300 text-sm md:text-md font-bold rounded mb-3 md:mb-4">
                Contact me
              </span>
              <div className="space-y-1 text-xs md:text-sm text-gray-300">
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
          </div>

          {/* Mid Section - Navigation Links */}
          <div className="lg:basis-[40%] space-y-6">
            <div className="lg:max-w-xl lg:mx-auto">
              <div className="flex gap-4 md:gap-8 flex-wrap">
                {navLinks.map((item) => (
                  <React.Fragment key={item.label}>
                    {item?.isAboutMe ? (
                      <a
                        href={item.href}
                        className="inline-block bg-[#b9ff66] text-slate-900 hover:bg-lime-200 text-xs font-bold px-3 py-1 rounded"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-white transition text-xs md:text-sm"
                      >
                        {item.label}
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-6 md:mt-8">
                <span className="text-lime-300 text-sm md:text-md font-bold mb-3 inline-block">
                  References & Inspirations
                </span>

                <ul className="columns-1 sm:columns-2 gap-4 md:gap-8 text-xs md:text-sm text-gray-400">
                  {references.map((ref) => (
                    <li key={ref.key} className="mb-2 break-inside-avoid">
                      <a
                        href={ref.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                      >
                        {ref.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right section - Download Resume */}
          <div className="lg:basis-[30%] flex flex-col items-start lg:items-end gap-4 md:gap-5">
            <a
              href="https://drive.google.com/file/d/1RJcKiHYFWaumhtogmwruFS70duLdlLXx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b9ff66] inline-flex items-center justify-center gap-2 hover:bg-lime-200 text-slate-900 font-bold px-6 py-2 rounded transition cursor-pointer text-sm md:text-base"
            >
              View Resume
            </a>
            <div className="flex gap-4 justify-start lg:justify-end">
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
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-4 md:pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between text-xs text-gray-400">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-8">
            <code className="font-semibold">Fun Websites: </code>
            <div className="flex flex-wrap gap-3 md:gap-8">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
