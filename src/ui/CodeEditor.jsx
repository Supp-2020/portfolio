"use client";

import { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { jsQuestions } from "../libs/constants";

export default function CodeEditorSection() {
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const currentQuestion = jsQuestions[current];

  const checkAnswer = () => {
    if (input.trim() === currentQuestion.answer) {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  const nextQuestion = () => {
    setInput("");
    setResult(null);
    setCurrent((prev) => (prev + 1) % jsQuestions.length);
  };
  return (
    <div className="w-full max-w-5xl rounded-2xl bg-[#1f2430] shadow-[0_40px_40px_rgba(0,0,0,0.4)] border border-white/5 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm tracking-wide text-slate-400 bg-[#222733] border-b border-black/40">
        {/* Header */}
        <div className="flex items-center gap-2 font-semibold text-slate-300 relative group">
          tricky-js-playground.js
          <div className="relative">
            <BiInfoCircle size={16} className="text-slate-200 cursor-pointer" />

            {/* Tooltip */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 w-64 p-3 text-xs leading-relaxed bg-[#2a2f3a] text-slate-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
              Coercion is my personal favourite in JavaScript — it’s chaotic,
              misunderstood, and incredibly powerful once you truly understand
              it.
              <div className="mt-2 text-slate-400">
                This mini code editor simulates real JS edge cases. Type the
                output, press Enter, and train your mental model.
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-xs sm:text-sm text-slate-400">
            {current + 1} / {jsQuestions.length}
          </span>

          <button
            onClick={() => {
              setCurrent((prev) => Math.max(prev - 1, 0));
              setResult(null);
              setInput("");
            }}
            className="text-xs px-2 sm:px-3 py-1 bg-black/30 rounded-md hover:bg-black/50"
          >
            Prev
          </button>

          <button
            onClick={() => {
              setCurrent((prev) => Math.min(prev + 1, jsQuestions.length - 1));
              setResult(null);
              setInput("");
            }}
            className="text-xs px-2 sm:px-3 py-1 bg-[#b9ff66] text-black rounded-md font-semibold"
          >
            Next
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="px-4 md:px-8 lg:px-10 py-6 md:py-10 lg:py-12 font-mono text-sm md:text-base lg:text-[16px] leading-6 md:leading-8 text-slate-300">
        <div className="grid grid-cols-[30px_1fr] md:grid-cols-[40px_1fr] gap-2 md:gap-4">
          {/* Line Numbers */}
          <div className="text-slate-500 select-none text-right pr-2 space-y-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>

          {/* Code Content */}
          <div className="space-y-2 overflow-x-auto">
            <div className="break-words">{currentQuestion.question}</div>

            <div className="text-slate-500 italic text-xs md:text-sm">{currentQuestion.hint}</div>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
              placeholder="Type the output and press Enter"
              className="bg-transparent border-none outline-none text-amber-300 w-full text-sm md:text-base"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/40" />

      {/* Diagnostics Panel */}
      <div className="bg-[#1b1f27]">
        {/* Diagnostics Header */}
        <div className="px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 text-slate-400 text-xs md:text-sm border-b border-black/40">
          Diagnostics
        </div>

        <div
          className={`border-t-2 ${
            result === "wrong"
              ? "border-red-500"
              : result === "correct"
                ? "border-green-500"
                : "border-black/40"
          } px-4 md:px-6 lg:px-8 py-3 md:py-4 font-mono text-xs md:text-sm bg-[#1c2028] min-h-[100px] md:min-h-[120px] transition-all duration-200`}
        >
          {/* Neutral State */}
          {!result && (
            <div className="text-slate-500">
              Press <span className="text-slate-300 font-semibold">Enter</span>{" "}
              to evaluate your answer.
            </div>
          )}

          {result && (
            <>
              {/* Correct Answer */}
              <div className="mt-2 md:mt-3 text-slate-400 text-xs">
                <span className="text-slate-300 font-semibold">
                  Correct Answer:
                </span>{" "}
                <span className="text-amber-300">
                  {currentQuestion.answer === ""
                    ? "'' (empty string)"
                    : currentQuestion.answer}
                </span>
              </div>

              {/* Explanation */}
              <div className="mt-2 md:mt-3 text-slate-500 text-xs leading-relaxed">
                {currentQuestion.explanation}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
