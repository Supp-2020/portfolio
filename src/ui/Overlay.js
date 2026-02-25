"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function SlideOverlay({ open, onClose, slideFrom, children }) {
  const [render, setRender] = useState(false);
  const [visible, setVisible] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let id;

    if (open) {
      setRender(true);  //
      document.body.style.overflow = 'hidden';
      id = setTimeout(() => setVisible(true), 0);
    } else {
      setVisible(false);
      document.body.style.overflow = '';
      id = setTimeout(() => setRender(false), 600);
    }

    return () => {
      clearTimeout(id);
      document.body.style.overflow = '';
    };
  }, [open]);
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!render) return null;

  const fromRight = slideFrom === "right";

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className={`
          absolute inset-0 bg-black/40
          transition-opacity duration-300
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        onClick={onClose}
      />

      {/* Sliding panel */}
      <div
        className={`
          fixed top-0 h-full w-1/2 bg-white shadow-xl overflow-hidden
          ${fromRight ? "right-0" : "left-0"}
          will-change-transform
          transform transition-transform
          duration-600
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            visible
              ? "translate-x-0"
              : fromRight
                ? "translate-x-full"
                : "-translate-x-full"
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
