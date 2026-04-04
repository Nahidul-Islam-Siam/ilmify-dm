"use client";

import { useEffect, useState } from "react";

export default function MouseCursor() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "text">("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      
      // Check for pointer cursor
      const isPointerElement = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a, button, [role='button'], select, label, [tabindex]") !== null;
      
      // Check for text selection cursor
      const isTextElement =
        target.closest("input, textarea, [contenteditable='true']") !== null ||
        window.getComputedStyle(target).cursor === "text" ||
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA");
      
      if (isPointerElement) {
        setCursorType("pointer");
      } else if (isTextElement) {
        setCursorType("text");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Default cursor (arrow) */}
      <div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: isVisible && cursorType === "default" ? 1 : 0,
          transition: "opacity 150ms ease",
          transform: "translate(2px, 2px)",
        }}
      >
        <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
          <polygon points="2,2 2,20 7,14 10,21 14,19 10,12 16,12" fill="white" stroke="black" strokeWidth="0.8" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Pointer cursor (hand) */}
      <div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: isVisible && cursorType === "pointer" ? 1 : 0,
          transition: "opacity 150ms ease",
          transform: "translate(2px, 2px)",
        }}
      >
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
          <path d="M7,3 C7,2.2 7.7,1.5 8.5,1.5 C9.3,1.5 10,2.2 10,3 L10,10.5 C10.4,9.9 11.1,9.5 11.8,9.5 C12.7,9.5 13.4,10.1 13.6,10.9 C14,10.3 14.7,9.9 15.5,9.9 C16.4,9.9 17.1,10.5 17.3,11.3 C17.7,10.7 18.4,10.3 19.2,10.3 C20.3,10.3 21.2,11.2 21.2,12.3 L21.2,16.2 C21.2,20.6 17.6,24 13.2,24 L11.2,24 C7.9,24 5.2,21.3 5.2,18 L5.2,7 C5.2,6.2 5.9,5.5 6.7,5.5 C7.5,5.5 8.2,6.2 8.2,7 L8.2,10.5 L7,10.5 L7,3 Z" fill="white" stroke="black" strokeWidth="0.8" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Text selection cursor (I-beam) */}
      <div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: isVisible && cursorType === "text" ? 1 : 0,
          transition: "opacity 150ms ease",
          transform: "translate(0px, -8px)",
        }}
      >
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <rect x="5" y="0" width="2" height="20" fill="white" stroke="black" strokeWidth="0.8" />
          <rect x="0" y="2" width="12" height="2" fill="white" stroke="black" strokeWidth="0.8" />
          <rect x="0" y="16" width="12" height="2" fill="white" stroke="black" strokeWidth="0.8" />
        </svg>
      </div>
    </>
  );
}