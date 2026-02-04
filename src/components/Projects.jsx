"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { renderRepo, CARD_VARIANTS } from "@/libs/constants";
import { FaArrowUp, FaSpinner } from "react-icons/fa";

const Loader = ({ size = 24, className = "" }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <FaSpinner
        size={size}
        className={`animate-spin text-gray-600 ${className}`}
        aria-label="Loading"
      />
    </div>
  );
};

const Projects = () => {
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/githubRepo")
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;

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
      })
      .catch(() => {
        if (isMounted) setError(true);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  /* Images from https://icons8.com/illustrations/style--scribbles/free--y */
  const projectConfig = {
    "autodev-iq": {
      title: "AutoDev IQ",
      image: "/assets/scribbles-scribbles-32.svg",
    },
    "blog-project-VUE": {
      title: "Blog Creator Application",
      image: "/assets/scribbles-scribbles-35.svg",
    },
    "lynx-pinterest": {
      title: "Pinterest Layout with Lynx",
      image: "/assets/scribbles-scribbles-47.svg",
    },
    "password-validation": {
      title: "Form Validator",
      image: "/assets/scribbles-scribbles-43.svg",
    },
    "todo-list": {
      title: "Todo List",
      image: "/assets/scribbles-scribbles-80.svg",
    },
  };

  return (
    <section className="w-full mx-auto max-w-6xl mt-24">
      <div className="mb-8 flex items-center gap-8">
        <h2 className="bg-[#B9FF66] text-3xl font-bold px-3 py-1 rounded">
          Projects
        </h2>
        <p className="text-gray-900">
          My professional journey and roles throughout my career
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <div className="h-48 flex items-center justify-center">
            <Loader size={32} />
          </div>
        ) : error ? (
          <div className="h-48 flex flex-col items-center justify-center">
            <h3 className="text-center text-gray-700 mt-12">
              Error in fetching projects from GitHub!!
            </h3>

            <Image
              src="/assets/404-error.svg"
              alt="Error"
              width={240}
              height={240}
              className="object-contain"
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-8">
            {repoData.map((card, idx) => {
              const variant = CARD_VARIANTS[idx % CARD_VARIANTS.length];
              const project = projectConfig[card.name];
              return (
                <div
                  key={card.id}
                  className={`relative rounded-3xl p-8 h-48 flex flex-col justify-between cursor-pointer ${variant.cardBg} transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-[#191a23] before:translate-y-2 before:-z-10`}
                >
                  {/* TOP */}
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold leading-tight max-w-xs">
                      {project.title.split(" ").map((word, i) => (
                        <span
                          key={i}
                          className={`inline-block rounded-lg p-1 ${variant.titleBg} ${variant.titleText}`}
                        >
                          {word}
                        </span>
                      ))}
                    </h3>

                    <Image
                      src={project.image}
                      alt={project.title}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>

                  {/* CTA */}
                  <button
                    className={`flex items-center gap-2 w-fit font-semibold ${variant.ctaText}`}
                  >
                    <span
                      className={`rounded-full p-2 ${variant.arrowBg} ${variant.arrowText}`}
                    >
                      <FaArrowUp size={14} className="rotate-65" />
                    </span>
                    Learn more
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
