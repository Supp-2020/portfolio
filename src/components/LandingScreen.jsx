import Image from "next/image";
import { FaDev } from "react-icons/fa";

const LandingScreen = () => {
  return (
    <section className="min-h-screen">
      <div className="w-full h-full flex items-center gap-5">
        {/* Left Panel */}
        <div className="w-[30%] h-full p-4 pl-0">
          <h3 className="bg-[#B9FF66] w-fit text-lg font-bold px-3 py-1 rounded ">
            My Creative Space
          </h3>

          <div className="bg-[#191a23] text-white rounded-2xl shadow-md p-4 border border-gray-100 space-y-3 mt-6">
            {/* Fake Code Editor Preview */}
            <div className="relative rounded-xl h-48 overflow-hidden">
              <Image
                src="/images/codepen-1.png"
                alt="Code Pen"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg">Code Pen Creations</h3>
            <p className="text-sm mt-1">
              Tiny bits of code, big ideas.
              <br />
              My digital playground where I turn &quot;what if&quot; into
              interactive reality, one experiment at a time.
            </p>

            <a
              href="https://codepen.io/supp-2020"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#b9ff66] flex items-center gap-1 mt-3 underline"
            >
              View on CodePen
            </a>
          </div>

          <li className="mt-4">
            <a
              href="https://dev.to/supreet_pradhan"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              See My{" "}
              <span className="underline">
                {" "}
                Dev.to
                <FaDev className="inline w-4 h-4" />
              </span>{" "}
              Blog
            </a>
          </li>

          {/* ================= Featured Projects ================= */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 mt-4">Featured Projects</h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl border border-gray-100 p-4">
                <h4 className="text-sm font-medium text-gray-800">
                  AutoDev IQ
                </h4>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-4">
                <h4 className="text-sm font-medium text-gray-800">
                  Blog Creator
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
