import Image from "next/image";
import React from "react";

const LandingScreen = () => {
  return (
    <section className="min-h-screen">
      <div className="w-full h-full flex items-center gap-5">
        {/* Left Panel */}
        <div className="w-[30%] h-full border border-gray-300 rounded-lg p-4 pl-0">
          <h3 className="bg-[#B9FF66] w-fit text-lg font-bold px-3 py-1 rounded ">
            My Creative Space
          </h3>

          <div className="bg-[#191a23] text-white rounded-2xl shadow-md p-4 border border-gray-100 space-y-4">
            {/* Fake Code Editor Preview */}
            <div className="relative rounded-xl h-48 overflow-hidden">
              <Image
                src="/images/codepen-1.png"
                alt="Code Pen"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Code Experiments
              </h3>
              <p className="text-sm mt-1">
                Smooth UI & micro-motion.
                <br />
                Built with React & CSS.
              </p>

              <a
                href="https://codepen.io/supp-2020"
                target="_blank"
                className="text-xs font-semibold text-[#b9ff66] flex items-center gap-1 mt-3 hover:underline"
              >
                View on CodePen
              </a>
            </div>
          </div>

          <div className="bg-white">
            <h3 className="font-semibold text-gray-800 mb-3">
              My Blogs
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                <span className="text-sm text-gray-700">
                  Dev.to
                </span>
              </div>
            </div>
          </div>

          {/* ================= Featured Projects ================= */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800">Featured Projects</h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition">
                <h4 className="text-sm font-medium text-gray-800">
                  Modern Dashboard UI
                </h4>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition">
                <h4 className="text-sm font-medium text-gray-800">
                  Animated Website
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-[70%] h-full"></div>
      </div>
    </section>
  );
};

export default LandingScreen;
