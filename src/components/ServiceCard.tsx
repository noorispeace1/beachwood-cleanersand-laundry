"use client";

import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import { Star, Clock, MapPin } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  timeframe: string;
  location?: string;
}

export default function ServiceCard({
  id,
  title,
  description,
  image,
  price,
  rating,
  timeframe,
  location = "All Locations",
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-12 to 12 degrees max)
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="w-full h-full relative"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-full transition-transform ease-out relative z-10"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.03 : 1})`,
          transitionDuration: isHovered ? "50ms" : "600ms",
          boxShadow: isHovered ? "0 25px 30px -5px rgb(0 0 0 / 0.15), 0 -10px 15px -3px rgb(0 0 0 / 0.05)" : "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Dynamic 3D Glare Effect */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${rotation.y * 3 + 50}% ${-rotation.x * 3 + 50}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0
          }}
        />

        {/* Image Container */}
        <div 
          className="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-100"
          style={{ transform: "translateZ(30px)" }} // Pops out in 3D
        >
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          <div 
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-bold text-blue-700 shadow-sm transition-transform duration-300"
            style={{ transform: `translateZ(${isHovered ? '50px' : '0px'})` }} // Pops out further
          >
            {price}
          </div>
        </div>

        {/* Content Container */}
        <div 
          className="flex flex-col flex-grow p-5"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{title}</h3>
            <div className="flex items-center space-x-1 text-yellow-500 shrink-0">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium text-slate-700">{rating}</span>
            </div>
          </div>
          
          <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-col space-y-2 mb-6">
            <div className="flex items-center text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5 mr-1.5 shrink-0 text-teal-500" />
              <span className="truncate">{timeframe}</span>
            </div>
            <div className="flex items-center text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0 text-teal-500" />
              <span className="truncate">{location}</span>
            </div>
          </div>

          {/* Action Button */}
          <div 
            className="mt-auto pt-4 border-t border-slate-100"
            style={{ transform: `translateZ(${isHovered ? '40px' : '0px'})` }}
          >
            <Link 
              href={`/services/${id}`}
              className="flex items-center justify-center w-full py-2.5 px-4 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-lg font-bold transition-colors duration-200"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
