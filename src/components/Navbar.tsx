"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/public/logo.png";
import { User, LogOut, Settings, LayoutDashboard, LogIn } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-xl shadow-sm w-full z-50 sticky top-0 transition-all duration-300 border-b border-slate-100 flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-xs py-2 text-center w-full">
        Taking appointments! — Call us at <a href="tel:+13238287503" className="underline hover:text-teal-300 transition-colors">+13238287503</a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-white rounded-2xl p-1.5 shadow-[0_0_15px_rgba(20,184,166,0.3)] drop-shadow-sm border border-slate-50 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src={logo} 
                  alt="Beachwood Cleaners Logo" 
                  className="h-12 w-auto object-contain bg-transparent"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-slate-900 hidden md:block tracking-tight">
                Beachwood Cleaners
              </span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {routes.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative px-1 py-2 text-base font-medium text-slate-700 transition-colors hover:text-teal-600"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>
            
            {/* User Profile Dropdown */}
            <div className="relative ml-2 sm:ml-6">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-slate-50 transition-colors border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 overflow-hidden shadow-sm"
              >
                <User className="w-5 h-5 text-slate-600" />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50 transform origin-top-right transition-all duration-200 ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">User Profile</p>
                  <p className="text-sm text-gray-500 truncate">user@example.com</p>
                </div>
                <div className="py-1">
                  <Link href="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                  <Link href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Link>
                </div>
                <div className="py-1 border-t border-gray-100">
                  <button 
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign out
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center lg:hidden ml-4">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                  <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 translate-x-3" : ""}`}></span>
                  <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, animated reveal */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`} 
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-inner">
          {routes.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
