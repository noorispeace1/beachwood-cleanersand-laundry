"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Droplets, Wind, ShieldCheck } from "lucide-react";

export default function HeroVideo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const tips = [
    { icon: <Wind className="w-5 h-5 text-teal-400" />, text: "Wash in cold water to prevent shrinking" },
    { icon: <Droplets className="w-5 h-5 text-blue-400" />, text: "Treat stains immediately before they set" },
    { icon: <ShieldCheck className="w-5 h-5 text-teal-400" />, text: "Unbutton shirts before washing" },
    { icon: <Sparkles className="w-5 h-5 text-blue-400" />, text: "Air dry to significantly extend fabric life" },
  ];

  return (
    <div className="relative w-full min-h-[600px] md:h-[750px] overflow-hidden flex items-center">
      {/* Background Video from public folder */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/api/video"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Elegant Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mt-10 md:mt-0">
        
        {/* Left Side: Main Call to Action (Animated) */}
        <div 
          className={`flex-1 w-full max-w-2xl transform transition-all duration-1000 ease-out ${isMounted ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} text-center md:text-left`}
        >
          <div className="inline-flex items-center space-x-2 bg-teal-500/20 backdrop-blur-md border border-teal-500/30 rounded-full px-4 py-2 mb-6 text-teal-300 text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4" />
            <span>Premium Laundry Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight tracking-tight">
            Impeccable Care For <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Your Best Shirts
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 drop-shadow-md max-w-xl font-light leading-relaxed mx-auto md:mx-0">
            Experience the ultimate freshness. Our expert cleaning keeps your shirts crisp, bright, and perfectly pressed every single time.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/services"
              className="flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-colors shadow-lg shadow-teal-500/30"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl transition-colors shadow-lg"
            >
              Book a Pickup
            </Link>
          </div>
        </div>

        {/* Right Side: Pro Tips Glass Card (Animated) */}
        <div 
          className={`w-full md:w-80 lg:w-96 transform transition-all duration-1000 delay-300 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
            {/* Glossy reflection effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
              Pro Shirt Tips
            </h3>
            <p className="text-blue-200 text-sm mb-6">Keep your fabrics looking brand new</p>
            
            <ul className="space-y-5">
              {tips.map((tip, idx) => (
                <li key={idx} className="flex items-start space-x-4 group/item">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg border border-white/10 group-hover/item:bg-white/20 transition-colors">
                    {tip.icon}
                  </div>
                  <span className="text-blue-50 text-sm font-medium leading-snug">
                    {tip.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
