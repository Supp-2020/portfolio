"use client";
import React, { useEffect, useState } from "react";
import { renderRepo } from "@/libs/constants";
import { FaArrowUp } from "react-icons/fa";

const Projects = () => {
  const [repoData, setRepoData] = useState([]);
  useEffect(() => {
    fetch("/api/githubRepo")
      .then((res) => res.json())
      .then((data) => {
        setRepoData(
          data
            .filter(({ name }) => renderRepo.includes(name))
            .map(({ id, name, description, homepage, topics, html_url }) => ({
              id,
              name,
              description,
              homepage,
              topics,
              html_url,
            })),
        );
      });
  }, []);

  const bgColors = ["bg-[#f3f3f3]", "bg-[#b9ff66]", "bg-[#191a23]"];

  const titleMap = {
    "autodev-iq": "AutoDev IQ",
    "blog-project-VUE": "Blog Creator Application",
    "lynx-pinterest": "Pinterest Layout with Lynx",
    "password-validation": "Form Validator",
    "todo-list": "Todo List",
  };

  return (
    <section className="w-full">
      <div className="mb-8 flex items-center gap-8">
        <h2 className="bg-[#B9FF66] text-3xl font-bold px-3 py-1 rounded">
          Projects
        </h2>
        <p className="text-gray-900">
          My professional journey and roles throughout my career
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {repoData.map((card, idx) => {
            const isDark = idx % bgColors.length === 2;
            return (
              <div
                key={card.id}
                className={`rounded-3xl p-8 h-48 flex flex-col justify-between ${bgColors[idx % bgColors.length]}`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold leading-tight max-w-xs">
                    {titleMap[card.name].split(" ").map((word, i) => (
                      <span
                        key={i}
                        className="inline-block mb-2 rounded bg-[#B9FF66] px-2 py-1"
                      >
                        {word}
                      </span>
                    ))}
                  </h3>

                  {/* Illustration placeholder */}
                  <div className="w-24 h-24 flex-shrink-0 opacity-70">
                    illustration
                  </div>
                </div>

                {/* CTA */}
                <button
                  className={`flex items-center gap-2 w-fit font-semibold ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  <span
                    className={`rounded-full p-2 ${
                      isDark ? "bg-white text-black" : "bg-black text-white"
                    }`}
                  >
                    <FaArrowUp
                      size={14}
                      className={`rotate-65 ${isDark ? "text-black" : "text-[#B9FF66]"}`}
                    />
                  </span>
                  Learn more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
