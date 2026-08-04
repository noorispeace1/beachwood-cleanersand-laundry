"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Clock, MapPin, CheckCircle, ArrowLeft, ShieldCheck, Truck, Zap } from "lucide-react";
import { servicesData } from "@/src/data/services";
import ServiceCard from "@/src/components/ServiceCard";

// Using Next.js 15+ async params standard
export default function ServiceDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the promise using React.use()
  const unwrappedParams = use(params);
  const service = servicesData.find(s => s.id === unwrappedParams.id);
  
  if (!service) {
    notFound();
  }

  // Find related items (same category, exclude current)
  const relatedItems = servicesData
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 4);

  // Mock multiple images for the gallery
  const galleryImages = [
    service.image,
    "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626806787426-5910811b6325?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582735689369-4fe89b711333?q=80&w=2070&auto=format&fit=crop"
  ];
  
  const [mainImage, setMainImage] = useState(galleryImages[0]);

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-8">
          <Link href="/services" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Left: Media Gallery */}
            <div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/50">
              <div className="aspect-w-4 aspect-h-3 w-full rounded-xl overflow-hidden mb-4 bg-slate-200">
                <img 
                  src={mainImage} 
                  alt={service.title} 
                  className="w-full h-[400px] object-cover transition-all duration-300"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {galleryImages.map((img, index) => (
                  <button 
                    key={index} 
                    onClick={() => setMainImage(img)}
                    className={`relative h-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${mainImage === img ? 'border-blue-600 ring-2 ring-blue-600/20' : 'border-transparent hover:border-slate-300'}`}
                  >
                    <img src={img} alt={`Gallery thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Key Info & Specifications */}
            <div className="p-6 sm:p-10 flex flex-col">
              <div className="mb-2 inline-flex">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  {service.category}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{service.title}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <span className="ml-2 text-slate-700 font-bold text-lg">{service.rating}</span>
                  <span className="ml-1 text-slate-400 text-sm">(124 reviews)</span>
                </div>
              </div>

              <div className="text-4xl font-extrabold text-blue-600 mb-8 pb-8 border-b border-slate-100">
                {service.price}
                <span className="text-lg font-normal text-slate-500 ml-2">base price</span>
              </div>

              <div className="space-y-6 mb-8 flex-grow">
                <h3 className="text-lg font-bold text-slate-900">Specifications & Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Turnaround Time</p>
                      <p className="text-sm text-slate-600">{service.timeframe}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheck className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Care Type</p>
                      <p className="text-sm text-slate-600">Eco-friendly / Gentle</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Truck className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Delivery</p>
                      <p className="text-sm text-slate-600">Free pickup over $35</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Rush Order</p>
                      <p className="text-sm text-slate-600">Available (+20% fee)</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-600/20 flex justify-center items-center">
                Add to Order
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Description & Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          
          {/* Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Service Overview</h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="text-lg leading-relaxed mb-6">{service.description}</p>
                <p className="mb-6">
                  Our professional {service.title.toLowerCase()} is designed to give your garments the ultimate care they deserve. We understand that every fabric is unique, which is why our experts carefully inspect each item before beginning the cleaning process.
                </p>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {['Pre-cleaning inspection and stain identification', 'Premium, eco-friendly solvent treatment', 'Hand-finishing and pressing', 'Final quality check and custom packaging'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews Summary */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Customer Reviews</h2>
              <div className="flex items-center mb-6">
                <div className="text-5xl font-extrabold text-slate-900 mr-4">{service.rating}</div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-sm text-slate-500">Based on 124 reviews</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "John D.", comment: "Incredible service. My clothes look brand new." },
                  { name: "Emily S.", comment: "Fast turnaround and very professional." },
                  { name: "Robert P.", comment: "The only cleaners I trust with my expensive items." }
                ].map((review, i) => (
                  <div key={i} className="border-t border-slate-100 pt-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-slate-900">{review.name}</span>
                      <div className="flex text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 italic">"{review.comment}"</p>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-2 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                Read All Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Related Items Section */}
        {relatedItems.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedItems.map((item) => (
                <ServiceCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
