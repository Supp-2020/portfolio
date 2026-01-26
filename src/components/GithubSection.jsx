"use client";

import { useMemo, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubSection = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  const years = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => currentYear - i);
  }, [currentYear]);

  return (
    <section className="mx-auto max-w-5xl py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="bg-[#B9FF66] text-3xl font-bold px-3 py-1 rounded ">
          GitHub Activity
        </h2>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Year:</span>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-[#F3F3F3] rounded-2xl p-6 overflow-hidden mx-auto">
        <GitHubCalendar
          username="Supp-2020"
          year={year}
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          showWeekdayLabels
          labels={{
            totalCount: "{{count}} contributions in " + year,
          }}
        />
      </div>
    </section>
  );
};

export default GithubSection;
