"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { renderRepo, CARD_VARIANTS, projectConfig } from "@/libs/constants";
import { FaArrowUp } from "react-icons/fa";
import { SlideOverlay } from "@/ui/Overlay";
import ImageCarousel from "@/ui/Carousel";
import { Loader } from "@/ui/Loader";

const Projects = () => {
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [slideFrom, setSlideFrom] = useState("right");
  const [selectedProject, setSelectedProject] = useState(null);

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
            .map(({ id, name, description, homepage, html_url }) => ({
              id,
              name,
              description,
              homepage,
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

  function handleCard(card, idx) {
    const position = idx % 2 === 0 ? "right" : "left";
    setSlideFrom(position);
    setOpen(true);
    setSelectedProject(card);
  }

  return (
    <section id="projects" className="w-full mx-auto max-w-6xl">
      <div className="mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
        <h2 className="bg-[#B9FF66] text-2xl md:text-3xl font-bold px-3 py-1 rounded">
          Projects
        </h2>
        <p className="text-gray-900 text-sm md:text-base">
          A collection of things I’ve built, from small experiments to
          full-scale applications
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {repoData.map((card, idx) => {
              const variant = CARD_VARIANTS[idx % CARD_VARIANTS.length];
              const project = projectConfig[card.name];
              return (
                <div
                  key={card.id}
                  onClick={() => handleCard(card, idx)}
                  className={`relative rounded-3xl p-6 md:p-8 min-h-[180px] md:h-48 flex flex-col justify-between cursor-pointer ${variant.cardBg} transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-[#191a23] before:translate-y-2 before:-z-10`}
                >
                  {/* TOP */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-1 flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold leading-tight truncate max-w-full">
                        {project.title.split(" ").map((word, i) => (
                          <span
                            key={i}
                            className={`inline-block rounded-lg p-1 ${variant.titleBg} ${variant.titleText}`}
                          >
                            {word}
                          </span>
                        ))}
                      </h3>
                    </div>

                    <Image
                      src={project?.image || "https://placehold.co/300x350"}
                      alt="Illustration"
                      width={96}
                      height={96}
                      className="object-contain flex-shrink-0 w-16 h-16 md:w-24 md:h-24"
                    />
                  </div>

                  {/* CTA */}
                  <a
                    href={card?.html_url}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center pr-2 gap-2 w-fit font-semibold text-sm md:text-base
    ${variant.ctaText}
    border border-transparent
    rounded-full cursor-pointer
    transition-all duration-300 ease-out
    hover:border-current
  `}
                  >
                    <span
                      className={`
      rounded-full p-2
      ${variant.arrowBg} ${variant.arrowText}
      transition-transform duration-300 ease-out rotate-45
      group-hover:rotate-90
    `}
                    >
                      <FaArrowUp size={14} />
                    </span>
                    <span className="whitespace-nowrap">Learn more</span>
                  </a>
                </div>
              );
            })}
          </div>
        )}
        <SlideOverlay
          open={open}
          onClose={() => setOpen(false)}
          slideFrom={slideFrom}
        >
          {/* Modal content */}
          <div className="relative h-full flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-30 rounded-full bg-white hover:bg-gray-100 p-2 shadow-lg transition-all hover:scale-110 cursor-pointer"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-slate-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              <div className="p-4 md:p-6">
                <ImageCarousel
                  images={
                    projectConfig[selectedProject?.name]?.carouselImages || []
                  }
                />
              </div>
              {/* Content */}
              <div className="space-y-4 md:space-y-6 px-4 md:px-6 pb-4 md:pb-6">
                <div className="space-y-2 md:space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {projectConfig[selectedProject?.name]?.title}
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {selectedProject?.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center w-full gap-2">
                  <a
                    href={selectedProject?.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1"
                  >
                    <button
                      disabled={!selectedProject?.homepage}
                      className={`w-full bg-[#191A23] hover:bg-[#191A23]/90 text-white font-bold py-2.5 md:py-3 px-4 rounded-lg transition text-sm md:text-base ${!selectedProject?.homepage ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      View Project
                    </button>
                  </a>

                  <a
                    href={selectedProject?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1"
                  >
                    <button className="w-full bg-[#191A23] hover:bg-[#191A23]/90 text-white font-bold py-2.5 md:py-3 rounded-lg transition cursor-pointer text-sm md:text-base">
                      Github Repo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SlideOverlay>
      </div>
    </section>
  );
};

export default Projects;
