// context/TransitionContext.tsx
"use client"
import React, { createContext, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionType } from "../types/TransitionTypes";

gsap.registerPlugin(ScrollTrigger);

// Define types for the context
interface TransitionContextType {
  applyTransition: (el: HTMLElement, transitionType?:TransitionType) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

// TransitionProvider Component
export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const applyTransition = (el: HTMLElement, transitionType = TransitionType.Fade) => {
    // Apply default transition (fade animation)
    if (transitionType === TransitionType.Fade) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 20%", scrub: true } }
      );
    }

    // Add different animations based on transitionType
    else if (transitionType === TransitionType.Scale) {
      gsap.fromTo(
        el,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 20%", scrub: true } }
      );
    }

    else if (transitionType === TransitionType.Rotate) {
      gsap.fromTo(
        el,
        { rotation: -45, opacity: 0 },
        { rotation: 0, opacity: 1, duration: 2, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 20%", scrub: true } }
      );
    }

    else if (transitionType === TransitionType.Slide) {
      gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 20%", scrub: true } }
      );
    }
    else if (transitionType === TransitionType.Flip) {
  gsap.fromTo(
    el,
    { rotationY: 180, opacity: 0 }, // Start with a 180-degree flip
    {
      rotationY: 0, // Flip back to normal
      opacity: 1,
      duration: 1.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
}
else if (transitionType === TransitionType.Wave) {
  gsap.fromTo(
    el,
    { opacity: 0, y: 100, scale: 0.5 }, // Start with scaling and bottom offset
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 2,
      ease: "bounce.out", // Bouncing effect
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
}
else if (transitionType === TransitionType.Scramble) {
  gsap.fromTo(
    el,
    { opacity: 0, textShadow: "0px 0px 5px rgba(255, 255, 255, 0.4)" }, // Start with no opacity and a mild text shadow
    {
      opacity: 1,
      textShadow: "0px 0px 20px rgba(255, 0, 0, 1)", // Glowing effect for text
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
}
else if (transitionType === TransitionType.ZoomBlur) {
  gsap.fromTo(
    el,
    { scale: 1.5, opacity: 0, filter: "blur(10px)" }, // Start scaled and blurred
    {
      scale: 1, // Zoom in to normal size
      opacity: 1,
      filter: "blur(0px)", // Remove the blur
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
}
else if (transitionType === TransitionType.Carousel3D) {
  gsap.fromTo(
    el,
    { rotationX: 90, opacity: 0 }, // Start with a 3D rotation
    {
      rotationX: 0, // Rotate back to the normal state
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
}

else if (transitionType === TransitionType.Particles) {
  gsap.fromTo(
    el,
    { opacity: 0, scale: 0.5, filter: "blur(20px)" }, // Start with smoke-like blur
    {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 2.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
}

else if (transitionType === TransitionType.Swing) {
  gsap.fromTo(
    el,
    { rotation: -30, opacity: 0 }, // Start with a slight swing
    {
      rotation: 0, // Swing back to normal position
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
}

else if (transitionType === TransitionType.Firefly) {
  gsap.fromTo(
    el,
    { opacity: 0, scale: 0.8, filter: "blur(2px)" }, // Start soft and blurry
    {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)", // Focus the element
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
}
  };

  return (
    <TransitionContext.Provider value={{ applyTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

// Custom hook to use the context
export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};