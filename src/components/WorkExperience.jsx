"use client";

import Image from "next/image";
import { useState } from "react";
import { imageCards, workExpArray } from "@/libs/constants";

export default function WorkExperience() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section className="w-full mx-auto max-w-8xl">
      <div className="mb-8 flex items-center gap-8">
        <h2 className="bg-[#B9FF66] text-3xl font-bold px-3 py-1 rounded">
          Work Experience
        </h2>
        <p className="text-gray-900">
          My professional journey and roles throughout my career
        </p>
      </div>

      {/* Content */}
      <div className="bg-[#191a23] px-8 py-10 rounded-xl">
        <div className="flex flex-col md:flex-row gap-4">
          {/* LEFT CARD */}
          <div className="md:w-1/3">
            <div className="text-white text-right">
              <a
                href="https://www.valtech.com/en-in/"
                className="text-xl font-bold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Valtech India
              </a>
              <p className="text-sm mt-1">Sept 2023 - Present</p>
              <p className="text-sm mt-1">Bangalore, India</p>
            </div>

            <div className="relative w-full flex justify-center lg:justify-start">
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

            <div className="relative mb-20 mt-4 overflow-visible">
              <div
                className="relative flex flex-col items-center overflow-visible"
                onMouseLeave={() => setActiveImg(null)}
              >
                {/* Thumbnails */}
                <div className="flex flex-col sm:flex-row gap-10 sm:gap-6 z-10">
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
                            cursor-pointer bg-white p-3 shadow-xl inline-block
                            w-[220px] sm:w-[240px] rounded
                            transition-all duration-300 ease-out
                            transform ${card.rotate}
                            hover:-translate-y-3 hover:scale-[1.06]
                            hover:shadow-2xl
                            ${activeImg && !isActive ? "opacity-60" : "opacity-100"}
                          `}
                        >
                          <div className="relative w-full h-48 bg-slate-100 rounded-sm overflow-hidden">
                            <Image
                              src={card.src}
                              alt={card.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <p className="text-slate-700 text-sm mt-2 text-center italic">
                            {card.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* PREVIEW */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-[999] overflow-visible">
                  {activeImg && (
                    <div
                      key={activeImg.src}
                      className="
                        relative w-[520px] h-[360px]
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

            <div className="text-white text-right mt-28">
              <span className="text-xl font-bold">
                Zummit Infolabs
              </span>
              <p className="text-sm mt-1">Nov 2022 - Jan 2023</p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] bg-gray-300" />

          {/* Experience Points */}
          <div className="md:flex-1">
            <div className="rounded-2xl px-6 space-y-8 text-white">
              {workExpArray.workArray.map((items,idx) => (
                <div key={items.key}>
                  <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between ${idx >= 2 ? "mt-24" : ""}`}>
                    <div>
                      <h4 className="text-lg font-bold">{items.designation}</h4>
                      <p className="text-xs text-white/70 mt-1">
                        {items.workDates}
                      </p>
                    </div>
                    {items.platform ? (
                      <code className="text-sm">Project: {items.platform}</code>
                    ) : (
                      <></>
                    )}
                  </div>

                  <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
                    {items.bulletPoints.map((workItems) => (
                      <li key={workItems}>{workItems}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap w-full gap-2 mt-6">
                    {items.techStack.map((techItem) => (
                      <span
                        key={techItem}
                        className="px-3 py-1 rounded-full text-xs font-semibold
                 bg-[#b9ff66] text-[#191a23] transition whitespace-nowrap"
                      >
                        {techItem}
                      </span>
                    ))}
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
