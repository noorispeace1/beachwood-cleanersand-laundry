import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/src/components/ServiceCard";
import HeroVideo from "@/src/components/HeroVideo";
import HomeServices from "@/src/components/HomeServices";
import ScrollReveal from "@/src/components/ScrollReveal";
import { CheckCircle, ShieldCheck, Clock, Award, ArrowRight, Star, ChevronDown, Check } from "lucide-react";

import { servicesData } from "@/src/data/services";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-teal-600" />,
    title: "Eco-Friendly Solvents",
    description: "We use exclusively environmentally safe cleaning solutions that are tough on stains but gentle on the planet and your skin."
  },
  {
    icon: <Clock className="w-10 h-10 text-teal-600" />,
    title: "Fast Turnaround",
    description: "Need it quickly? We offer same-day wash & fold and next-day dry cleaning services to fit your busy schedule."
  },
  {
    icon: <Award className="w-10 h-10 text-teal-600" />,
    title: "Quality Guarantee",
    description: "If you're not 100% satisfied with our cleaning, we'll re-clean your item completely free of charge. No questions asked."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Hero Section Video Banner */}
      <HeroVideo />

      {/* 2. Services Preview with Search (Moved directly below banner) */}
      <HomeServices />

      {/* 3. Features Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left side: Premium Image */}
            <ScrollReveal animation="fade-right" className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 h-[500px] md:h-[600px] w-full border border-white">
                <img 
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Premium dry cleaning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white shadow-lg inline-block">
                    <p className="text-blue-900 font-bold text-xl mb-1">25+ Years</p>
                    <p className="text-slate-600 text-sm">Of Garment Care Excellence</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right side: Content & Cards */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="mb-10 text-center lg:text-left">
                <ScrollReveal animation="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Beachwood?</h2>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={150}>
                  <p className="text-slate-600 text-lg">We combine traditional fabric care techniques with modern, eco-friendly technology to deliver unparalleled results.</p>
                </ScrollReveal>
              </div>
              
              <div className="flex flex-col gap-6">
                {features.map((feature, index) => (
                  <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                      <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>


      {/* 4. How It Works */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-800/50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-900/40 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">Getting your clothes professionally cleaned has never been easier. We handle the heavy lifting.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Schedule", desc: "Book a pickup online or drop off at our LA location." },
              { step: "02", title: "We Collect", desc: "Our professional drivers collect your garments securely." },
              { step: "03", title: "Expert Care", desc: "We inspect, treat, and clean your items with precision." },
              { step: "04", title: "Delivery", desc: "Fresh, crisp clothes delivered right back to your door." }
            ].map((item, i) => (
              <ScrollReveal key={i} animation="zoom-in" delay={i * 200}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-900 flex items-center justify-center text-2xl font-bold text-teal-400 mb-6 border-4 border-blue-950 shadow-xl relative">
                    {item.step}
                    {i !== 3 && <div className="hidden md:block absolute top-1/2 left-full w-full h-[2px] bg-blue-800/50 -z-10"></div>}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-200">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Statistics */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Garments Cleaned", value: "2.5M+" },
              { label: "Happy Customers", value: "15k+" },
              { label: "Years Experience", value: "25" },
              { label: "Eco-Friendly Locations", value: "3" },
            ].map((stat, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-slate-600 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-slate-600 text-lg">Don't just take our word for it. Here's what your neighbors in Los Angeles think about our service.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Local Resident", quote: "Beachwood Cleaners managed to get a red wine stain out of my favorite silk blouse. I thought it was ruined! Absolutely stellar service.", rating: 5 },
              { name: "Michael Chang", role: "Business Executive", quote: "The weekly wash and fold service has completely changed my life. Everything is folded with military precision. Highly recommended.", rating: 5 },
              { name: "Elena Rodriguez", role: "Fashion Designer", quote: "As someone who works with textiles, I am extremely particular about how my clothes are handled. They treat every garment with incredible care.", rating: 5 },
            ].map((review, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 150} className="h-full">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative h-full flex flex-col">
                  <div className="flex space-x-1 mb-6 text-yellow-400">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-700 italic mb-6 flex-grow">"{review.quote}"</p>
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ & Newsletter */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FAQ */}
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                {[
                  { q: "Do you offer free pickup and delivery?", a: "Yes, we offer complimentary pickup and delivery for orders over $35 within a 5-mile radius of our location." },
                  { q: "What is your turnaround time?", a: "Standard dry cleaning takes 48 hours. Wash and fold is available for next-day delivery. Same-day rush service is available for an additional fee." },
                  { q: "Are your cleaning methods safe for pets and children?", a: "Absolutely. We use 100% eco-friendly, non-toxic solvents that leave no harsh chemical residue on your clothes." },
                ].map((faq, i) => (
                  <div key={i} className="border-b border-slate-700 pb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center text-white">
                      <ChevronDown className="w-5 h-5 mr-2 text-teal-400" />
                      {faq.q}
                    </h3>
                    <p className="text-slate-400 pl-7 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
              </div>
            </ScrollReveal>

            {/* Newsletter */}
            <ScrollReveal animation="fade-left" delay={200} className="h-full">
              <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700 flex flex-col justify-center h-full">
                <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
                <p className="text-slate-400 mb-8">Subscribe to get 15% off your first order and receive exclusive monthly offers on premium garment care.</p>
                
                <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-grow px-5 py-4 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-white placeholder-slate-500"
                    required
                  />
                  <button type="button" className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
                <div className="mt-4 flex items-center text-sm text-slate-500">
                  <Check className="w-4 h-4 mr-2 text-teal-500" />
                  We respect your privacy. Unsubscribe at any time.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
}
