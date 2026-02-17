import CodeEditor from "@/ui/CodeEditor";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaDev, FaPenNib } from "react-icons/fa";
import { TbCircleArrowDownRightFilled } from "react-icons/tb";

const LandingScreen = () => {
  return (
    <section className="min-h-screen">
      <div className="w-full h-full flex items-center gap-5">
        {/* Left Panel */}
        <div className="w-[30%] h-full p-4 pl-0">
          <h3 className="bg-[#B9FF66] w-fit text-lg font-bold px-3 py-1 rounded ">
            My Creative Space
          </h3>

          <div className="bg-[#191a23] text-white rounded-2xl shadow-md px-6 py-4 border border-gray-100 space-y-2 mt-4">
            {/* Fake Code Editor Preview */}
            <div className="relative rounded-xl h-48 overflow-hidden group">
              <Image
                src="/images/codepen-1.png"
                alt="Code Pen"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
              />
            </div>

            <h5 className="font-semibold text-lg mb-1">Code Pen Creations</h5>
            <p className="text-sm">
              Tiny bits of code, big ideas
              <br />
              My digital playground where I turn &quot;what if&quot; into
              interactive reality
              <a
                href="https://codepen.io/supp-2020"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-xs font-semibold text-[#b9ff66] flex items-center gap-1 underline"
              >
                View on CodePen
              </a>
            </p>
          </div>

          <div className="border-t border-gray-400 my-4" />

          {/* Blogs section */}
          <div className="">
            <h5 className="text-[11px] tracking-widest uppercase text-lime-500 font-medium">
              Blog
            </h5>

            <h5 className="text-lg md:text-xl font-semibold leading-snug">
              Sharing what I learn while building for the web
            </h5>

            <a
              href="https://dev.to/supreet_pradhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium underline"
            >
              Visit my Dev.to
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="border-t border-gray-400 my-4" />

          {/* Featured Projects*/}
          <div>
            <h5 className="text-[11px] tracking-widest uppercase text-lime-500 font-medium">
              Featured Project
            </h5>

            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="group relative flex items-center gap-2 px-4 py-2 bg-gray-200 text-black text-sm font-medium rounded-md hover:bg-gray-300 transition-colors"
              >
                AutoDev IQ
                <TbCircleArrowDownRightFilled className="text-sm" />
              </Link>

              <Link
                href="#projects"
                className="group relative flex items-center gap-2 px-4 py-2 bg-gray-200 text-black text-sm font-medium rounded-md hover:bg-gray-300 transition-colors"
              >
                Blog Creator
                <TbCircleArrowDownRightFilled className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-[70%] h-full flex flex-col gap-8 px-6">
          {/* Intro Section */}
          <div className="max-w-4xl px-6">
            <h2 className="text-[48px] font-extrabold leading-[1.1] tracking-tight text-black">
              I engineer{" "}
              <span className="relative inline-block align-baseline">
                <span className="relative z-10">web experiences</span>
                <span className="absolute left-0 bottom-[6px] w-full h-[12px] bg-[#b9ff66] -z-0"></span>
              </span>
              <br />
              that make and measure{" "}
              <span className="relative inline-block">
                <span className="relative z-10">impact.</span>
                <span className="absolute left-0 -bottom-[6px] w-full h-[4px] bg-red-500"></span>
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Focused on performance, clarity, and creative problem-solving.
            </p>
          </div>
          <CodeEditor />
        </div>
      </div>
    </section>
  );
};

export default LandingScreen;
