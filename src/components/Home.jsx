import Image from "next/image";
import innovationIcon from "../../public/assets/innovation-animate.svg";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] bg-white">
      <div className="absolute inset-y-0 left-1/2 w-0.5 bg-[#b9ff66] -translate-x-1/2 z-0" />

      <div className="relative z-10 min-h-[calc(100vh-64px)] grid grid-cols-[1fr_auto_1fr] items-center gap-8">
        <aside className="hidden lg:flex justify-end">
          <div className="w-full max-w-sm bg-white/80 border border-gray-200 rounded-2xl p-6">
            <p className="text-sm text-gray-600">
              Available for freelance & full-time roles.
            </p>
            <p className="mt-2 text-lg font-semibold text-gray-900">
              Building clean UI with React + TypeScript.
            </p>
          </div>
        </aside>

        <div className="w-full max-w-2xl bg-white flex flex-col items-center justify-center py-8">
          <div className="relative h-64 w-full">
            <div className="absolute text-center w-full top-0 left-0">
              <h1
                className="text-6xl md:text-7xl font-black leading-none"
                style={{ color: "#4DD0E1" }}
              >
                OPPORTUNE
              </h1>
            </div>

            <div className="absolute text-center w-full top-12 left-0">
              <h2
                className="text-6xl md:text-7xl font-black leading-none"
                style={{ color: "#FFD54F" }}
              >
                RESEARCH
              </h2>
            </div>

            <div className="absolute text-center w-full top-24 left-0">
              <h3
                className="text-6xl md:text-7xl font-black leading-none"
                style={{ color: "#6C63FF" }}
              >
                DESIGN&BUILD
              </h3>
            </div>

            <div className="absolute text-center w-full top-36 left-0">
              <h4
                className="text-6xl md:text-7xl font-black leading-none"
                style={{ color: "#FF5252" }}
              >
                LAUNCH
              </h4>
            </div>

            <div className="absolute text-center w-full top-48 left-0">
              <h5
                className="text-6xl md:text-7xl font-black leading-none"
                style={{ color: "#003A5C" }}
              >
                TEST&LEARN
              </h5>
            </div>
          </div>

          <div className="mt-5 text-center space-y-2">
            <p className="text-base font-semibold text-gray-700">
              {
                "I speak fluent React and design. Bridging the gap between a designer's dream and a browser's reality."
              }
            </p>
            <code className="text-base text-gray-600">
              Frontend Engineer • Animation Enthusiast
            </code>
          </div>
        </div>

        <aside className="hidden lg:flex justify-start self-start pt-6 shrink-0">
          <Image
            priority
            src={innovationIcon}
            alt="innovation-icon"
            width={350}
            height={350}
            className="shrink-0"
          />
        </aside>
      </div>
    </section>
  );
}
