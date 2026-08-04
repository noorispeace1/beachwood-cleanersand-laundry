"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sliderImages = [
  "https://loremflickr.com/1920/1080/washingmachine",
  "https://loremflickr.com/1920/1080/ironing",
  "https://loremflickr.com/1920/1080/laundromat",
];

const dynamicTexts = [
  "Premium Dry Cleaning.",
  "Wash & Fold Laundry.",
  "Professional Ironing.",
  "Leather & Suede Care."
];

export default function HeroSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Image Slider Effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(imageInterval);
  }, []);

  // Text Typing/Morphing Effect
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image Slider with Overlay */}
      {sliderImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={img}
            alt={`Laundry service background ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      ))}
      <div className="absolute inset-0 z-0 bg-gray-900/65 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-4 rounded-full bg-blue-600/30 text-blue-100 border border-blue-400/30 text-sm font-semibold tracking-wider mb-6 shadow-sm backdrop-blur-md">
          Voted #1 Cleaners in Los Angeles
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] flex flex-col justify-center">
          <span>Immaculate Clothes.</span>
          {/* Animated Text Effect */}
          <span 
            key={currentTextIndex}
            className="text-teal-400 mt-2 block animate-in slide-in-from-bottom-5 fade-in duration-700 ease-out fill-mode-both"
          >
            {dynamicTexts[currentTextIndex]}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Experience premium dry cleaning and laundry services delivered with uncompromising quality and environmental care.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/services" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-900/30 flex items-center group">
            Explore Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-bold text-lg transition-all backdrop-blur-sm hover:shadow-lg">
            Schedule Pickup
          </Link>
        </div>
      </div>
      
      {/* Slider Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-teal-400 w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
