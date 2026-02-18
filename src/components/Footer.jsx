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
      className="bg-[#191A23] rounded-t-4xl text-white mt-16 mx-16"
    >
      <div className="px-16 pt-12 pb-8">
        {/* Main footer content */}
        <div className="flex mb-6">
          {/* Left section - Logo and contact */}
          <div className="basis-[30%] space-y-4">
            <h2 className="text-2xl font-bold mb-6">Supreet.js</h2>

            <div className="">
              <span className="inline-block text-lime-300 text-md font-bold rounded mb-4">
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
          </div>

          {/* Mid Section - Navigation Links */}
          <div className="basis-[40%] space-y-6">
            <div className="max-w-xl mx-auto">
              <div className="flex gap-8 flex-wrap">
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
                        className="text-gray-400 hover:text-white transition text-sm"
                      >
                        {item.label}
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-8">
                <span className="text-lime-300 text-md font-bold mb-3 inline-block">
                  References & Inspirations
                </span>

                <ul className="columns-2 gap-8 text-sm text-gray-400">
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
          <div className="basis-[30%] flex flex-col items-end gap-5">
            <a
              href="https://drive.google.com/file/d/1RJcKiHYFWaumhtogmwruFS70duLdlLXx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b9ff66] flex items-center gap-2 hover:bg-lime-200 text-slate-900 font-bold px-6 py-2 rounded transition cursor-pointer"
            >
              View Resume
            </a>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
