"use client";

import { useEffect, useState } from "react";


const questions = [
  {
    question: `console.log(typeof null);`,
    answer: "object",
    explanation:
      "This is a historical JavaScript bug. null is a primitive, but typeof returns 'object'.",
  },
  {
    question: `console.log([] == false);`,
    answer: "true",
    explanation:
      "Loose equality converts [] → '' → 0 and false → 0. So 0 == 0 → true.",
  },
  {
    question: `console.log(0.1 + 0.2 === 0.3);`,
    answer: "false",
    explanation:
      "Floating point precision causes 0.1 + 0.2 to be slightly greater than 0.3.",
  },
  {
    question: `let x; console.log(x);`,
    answer: "undefined",
    explanation:
      "Variables declared but not assigned default to undefined.",
  },
];

export default function CodeEditor() {
  const [current, setCurrent] = useState(null);
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const random = questions[Math.floor(Math.random() * questions.length)];
    setCurrent(random);
  }, []);

  const handleSubmit = () => {
    if (!current) return;

    const user = answer.trim().toLowerCase();
    const correct = user === current.answer;

    setIsCorrect(correct);
    setRevealed(true);
  };

  if (!current) return null;

  return (
    <aside className="w-full py-24 bg-gradient-to-b from-[#2b2f38] to-[#1e222a] flex justify-center">
      <div className="w-full max-w-5xl rounded-2xl bg-[#1f2430] shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden border border-white/5">

        {/* Header */}
        <div className="px-6 py-4 text-center text-sm tracking-wider text-slate-400 bg-[#222733] border-b border-white/5">
          js-challenge.js
        </div>

        {/* Code Area */}
        <div className="px-10 py-12 min-h-[220px] text-[16px] leading-8 font-mono text-slate-200">
          <pre className="whitespace-pre-wrap text-sky-300">
            {current.question}
          </pre>
        </div>

        {/* Answer Input */}
        <div className="border-t border-white/5 bg-[#1b1f27] px-8 py-6">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
              }
            }}
            placeholder="Type your answer and press Enter..."
            className="w-full h-24 bg-[#1f2430] border border-white/10 rounded-xl p-4 text-sm font-mono text-white focus:outline-none focus:border-sky-400 transition"
          />
        </div>

        {/* Diagnostics Panel */}
        {revealed && (
          <div className="border-t-2 border-red-500 bg-[#1c2028] px-8 py-6 text-sm font-mono">
            {isCorrect ? (
              <p className="text-emerald-400">✔ Correct!</p>
            ) : (
              <p className="text-red-400">
                ✖ Incorrect. Correct answer:{" "}
                <span className="text-white font-semibold">
                  {current.answer}
                </span>
              </p>
            )}

            <p className="mt-3 text-slate-400 text-xs">
              {current.explanation}
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
