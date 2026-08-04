"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import ServiceCard from "@/src/components/ServiceCard";
import ScrollReveal from "@/src/components/ScrollReveal";
import { servicesData } from "@/src/data/services";

export default function HomeServices() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    let filtered = servicesData;
    
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchQuery]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal animation="fade-right" className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
            <p className="text-slate-600 text-lg max-w-2xl">
              From everyday laundry to delicate couture, we have a specialized cleaning process for every garment.
            </p>
          </ScrollReveal>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 items-center">
            <ScrollReveal animation="fade-left" delay={200} className="w-full md:w-80 lg:w-96 flex flex-col gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search services..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm text-slate-900 placeholder-slate-400"
                />
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              </div>
              
              <Link href="/services" className="hidden lg:flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors shrink-0">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 perspective-1000">
          {filteredServices.slice(0, 4).map((service, index) => (
            <ScrollReveal key={service.id} animation="fade-up" delay={index * 100}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
        
        {/* No Results Fallback */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No services found for "{searchQuery}".</p>
          </div>
        )}
        
        {/* Mobile View All Button */}
        <div className="mt-10 text-center lg:hidden">
          <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 w-full transition-colors">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
