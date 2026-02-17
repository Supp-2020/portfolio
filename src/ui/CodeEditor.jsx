"use client";

import { useEffect, useState } from "react";
import { BiSolidError } from "react-icons/bi";

export default function CodeEditorSection() {
  return (
    <div className="w-full max-w-5xl rounded-2xl bg-[#1f2430] shadow-[0_40px_40px_rgba(0,0,0,0.4)] border border-white/5 overflow-hidden">
      
      {/* Header */}
      <div className="text-center py-4 text-sm tracking-wide text-slate-400 bg-[#222733] border-b border-black/40">
        scope-issue.js
      </div>

      {/* Code Area */}
      <div className="px-10 py-12 font-mono text-[16px] leading-8 text-slate-300">
        <div className="grid grid-cols-[40px_1fr] gap-4">
          
          {/* Line Numbers */}
          <div className="text-slate-500 select-none text-right pr-2 space-y-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>

          {/* Code Content */}
          <div className="space-y-2">
            <div>
              <span className="text-sky-400">console</span>
              <span className="text-white">.</span>
              <span className="text-emerald-400">log</span>
              <span className="text-white">(</span>
              <span className="text-purple-400">myVar</span>
              <span className="text-white">);</span>
              <span className="text-slate-500 ml-2">// ???</span>
            </div>

            <div className="text-slate-500 italic">
              // Temporal Dead Zone extends up to here
            </div>

            <div>
              <span className="text-pink-400">let</span>{" "}
              <span className="text-purple-400">myVar</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-amber-300">'I am now initialized'</span>
              <span className="text-white">;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/40" />

      {/* Diagnostics Panel */}
      <div className="bg-[#1b1f27]">
        
        {/* Diagnostics Header */}
        <div className="px-6 py-3 flex items-center gap-2 text-slate-400 text-sm border-b border-black/40">
          Diagnostics
        </div>

        {/* Error Output */}
        <div className="border-t-2 border-red-500 px-8 py-6 font-mono text-sm bg-[#1c2028]">
          <div className="flex items-center gap-1.5 text-red-400">
            <BiSolidError size={16} />
            <div>
              <span className="font-semibold">[Error]</span> ReferenceError:
              Cannot access 'myVar' before initialization
            </div>
          </div>

          <div className="mt-2 text-slate-500 text-xs">
            at scope-issue.js:1:13
          </div>
        </div>
      </div>
    </div>
  );
}
