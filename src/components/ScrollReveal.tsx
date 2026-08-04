"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({ children, animation = "fade-up", delay = 0, duration = 1000, className = "" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px" } 
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const baseStyles = "transition-all ease-out transform";
  const durationStyle = { transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` };
  
  let animationStyles = "";
  switch (animation) {
    case "fade-up":
      animationStyles = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
      break;
    case "fade-left":
      animationStyles = isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
      break;
    case "fade-right":
      animationStyles = isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12";
      break;
    case "fade-in":
      animationStyles = isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
      break;
    case "zoom-in":
      animationStyles = isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90";
      break;
  }

  return (
    <div
      ref={domRef}
      className={`${baseStyles} ${animationStyles} ${className}`}
      style={durationStyle}
    >
      {children}
    </div>
  );
}
