"use client";

import Image from "next/image";
import { useState } from "react";
import { imageCards, workExpArray } from "@/libs/constants";

export default function WorkExperience() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section id="experience" className="w-full mx-auto max-w-7xl">
      <div className="mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
        <h2 className="bg-[#B9FF66] text-2xl md:text-3xl font-bold px-3 py-1 rounded">
          Work Experience
        </h2>
        <p className="text-gray-900 text-sm md:text-base">
          My professional journey and roles throughout my career
        </p>
      </div>

      {/* Content */}
      <div className="bg-[#191a23] px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* LEFT CARD */}
          <div className="lg:w-1/3">
            <div className="text-white text-left lg:text-right">
              <a
                href="https://www.valtech.com/en-in/"
                className="text-lg md:text-xl font-bold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Valtech India
              </a>
              <p className="text-xs md:text-sm mt-1">Sept 2023 - Present</p>
              <p className="text-xs md:text-sm mt-1">Bangalore, India</p>
            </div>

            <div className="relative w-full flex justify-center lg:justify-start mb-4 hidden lg:block">
              <div className="relative inline-flex items-center gap-2">
                <span className="text-white text-sm font-semibold tracking-wide">
                  Hover Me
                </span>

                {/* Curved dashed arrow */}
                <svg
                  width="120"
                  height="60"
                  viewBox="0 0 120 60"
                  fill="none"
                  className="overflow-visible"
                >
                  <path
                    d="M6 30 C 25 25,55 25, 60 80"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                    opacity="0.9"
                  />

                  {/* Arrow head */}
                  <path
                    d="M56 76 L60 84 L64 76"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                </svg>
              </div>
            </div>

            <div className="relative mb-12 md:mb-20 mt-4 overflow-visible">
              <div
                className="relative flex flex-col items-center overflow-visible"
                onMouseLeave={() => setActiveImg(null)}
              >
                {/* Thumbnails */}
                <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 z-10 pb-4">
                  {imageCards.map((card) => {
                    const isActive = activeImg?.src === card.src;

                    return (
                      <div
                        key={card.src}
                        className={`${card.offset} overflow-visible`}
                      >
                        <div
                          onMouseEnter={() => setActiveImg(card)}
                          className={`
                            cursor-pointer bg-white p-2 md:p-3 shadow-xl inline-block
                            w-[140px] sm:w-[160px] md:w-[200px] lg:w-[240px] rounded flex-shrink-0
                            transition-all duration-300 ease-out
                            transform ${card.rotate}
                            lg:hover:-translate-y-3 lg:hover:scale-[1.06]
                            lg:hover:shadow-2xl
                            ${activeImg && !isActive ? "lg:opacity-60" : "opacity-100"}
                          `}
                        >
                          <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-48 bg-slate-100 rounded-sm overflow-hidden">
                            <Image
                              src={card.src}
                              alt={card.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <p className="text-slate-700 text-xs md:text-sm mt-2 text-center italic">
                            {card.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* PREVIEW */}
                <div className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center z-[999] overflow-visible">
                  {activeImg && (
                    <div
                      key={activeImg.src}
                      className="
                        relative w-[320px] h-[240px] md:w-[420px] md:h-[300px] lg:w-[520px] lg:h-[360px]
                        bg-white rounded-lg
                        border border-gray-200
                        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                        transition-all duration-500 ease-out
                        transform
                        scale-100 rotate-0 opacity-100
                      "
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100">
                        <Image
                          src={activeImg.src}
                          alt={activeImg.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Second Work Space */}

            <div className="text-white text-left lg:text-right mt-16 md:mt-20 lg:mt-28 hidden lg:block">
              <span className="text-lg md:text-xl font-bold">
                Zummit Infolabs
              </span>
              <p className="text-xs md:text-sm mt-1">Nov 2022 - Jan 2023</p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1px] bg-gray-300" />

          {/* Experience Points */}
          <div className="lg:flex-1">
            <div className="space-y-6 md:space-y-8 text-white">
              {workExpArray.workArray.map((items,idx) => (
                <div key={items.key}>
                  {/* Mobile Company Header for Second Company */}
                  {idx === 2 && (
                    <div className="text-white text-left mb-6 lg:hidden">
                      <span className="text-lg md:text-xl font-bold">
                        Zummit Infolabs
                      </span>
                      <p className="text-xs md:text-sm mt-1">Nov 2022 - Jan 2023</p>
                    </div>
                  )}
                  
                  <div className={`px-0 md:px-4 lg:px-6 ${idx >= 2 ? "lg:mt-24" : ""}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="text-base md:text-lg font-bold">{items.designation}</h4>
                        <p className="text-xs text-white/70 mt-1">
                          {items.workDates}
                        </p>
                      </div>
                      {items.platform ? (
                        <code className="text-xs md:text-sm">Project: {items.platform}</code>
                      ) : (
                        <></>
                      )}
                    </div>

                    <ul className="mt-3 list-disc pl-5 text-xs md:text-sm space-y-2">
                      {items.bulletPoints.map((workItems) => (
                        <li key={workItems}>{workItems}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap w-full gap-2 mt-4 md:mt-6">
                      {items.techStack.map((techItem) => (
                        <span
                          key={techItem}
                          className="px-2.5 md:px-3 py-1 rounded-full text-xs font-semibold
                 bg-[#b9ff66] text-[#191a23] transition whitespace-nowrap"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
