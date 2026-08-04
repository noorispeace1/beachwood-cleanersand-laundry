import Link from "next/link";
import Image from "next/image";
import logo from "@/app/public/logo.png";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8 mt-auto font-sans border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Column 1: Logo, Description & Socials (takes up 4 cols on large screens) */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white rounded-xl p-1.5 shadow-sm inline-block">
                <Image 
                  src={logo} 
                  alt="Beachwood Cleaners Logo"
                  className="h-10 w-auto object-contain bg-transparent"
                />
              </div>
              <h2 className="text-xl font-bold tracking-tight">Beachwood Cleaners</h2>
            </div>
            <p className="text-sm text-blue-100 mb-8 leading-relaxed pr-4">
              We provide the best premium dry cleaning and laundry services in Los Angeles for all garments and fabrics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company (takes 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-6 text-white text-base">Company</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services (takes 6 cols, split internally) */}
          <div className="lg:col-span-6">
            <h4 className="font-semibold mb-6 text-white text-base">Services</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-blue-100">
              <ul className="space-y-4">
                <li><Link href="/services/regular-laundry" className="hover:text-white transition-colors">Regular Laundry (Wash & Fold)</Link></li>
                <li><Link href="/services/shirts" className="hover:text-white transition-colors">Professional Shirts Pressing</Link></li>
                <li><Link href="/services/pants" className="hover:text-white transition-colors">Pants & Jeans Cleaning</Link></li>
                <li><Link href="/services/jackets" className="hover:text-white transition-colors">Jackets & Coats Care</Link></li>
                <li><Link href="/services/suits" className="hover:text-white transition-colors">Premium Suits Dry Cleaning</Link></li>
                <li><Link href="/services/dresses" className="hover:text-white transition-colors">Dresses & Evening Wear</Link></li>
              </ul>
              <ul className="space-y-4">
                <li><Link href="/services/leather-suede" className="hover:text-white transition-colors">Leather & Suede Conditioning</Link></li>
                <li><Link href="/services/wedding-dress" className="hover:text-white transition-colors">Wedding Dress Preservation</Link></li>
                <li><Link href="/services/alterations" className="hover:text-white transition-colors">Expert Alterations</Link></li>
                <li><Link href="/services/bedding" className="hover:text-white transition-colors">Bedding & Comforters</Link></li>
                <li><Link href="/services/rugs" className="hover:text-white transition-colors">Area Rug Cleaning</Link></li>
                <li><Link href="/services/commercial" className="hover:text-white transition-colors">Commercial Laundry Services</Link></li>
              </ul>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
          <p className="mb-4 md:mb-0">
            &copy;{new Date().getFullYear()} Beachwood Cleaners & Laundry. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms And Conditions</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
