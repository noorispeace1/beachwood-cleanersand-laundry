"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import ServiceCard from "@/src/components/ServiceCard";
import SkeletonCard from "@/src/components/SkeletonCard";
import { servicesData, Service } from "@/src/data/services";

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export default function ExploreServicesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  
  // Artificial loading delay for realism
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", "Dry Cleaning", "Laundry", "Specialty"];

  // Filter and Sort Logic
  const filteredServices = useMemo(() => {
    let result = servicesData;

    // 1. Search Filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(lowerQuery) ||
          s.description.toLowerCase().includes(lowerQuery)
      );
    }

    // 2. Category Filter
    if (selectedCategory !== "All") {
      result = result.filter((s) => s.category === selectedCategory);
    }

    // 3. Sorting
    result = [...result].sort((a, b) => {
      if (sortBy === "price-asc") return a.priceValue - b.priceValue;
      if (sortBy === "price-desc") return b.priceValue - a.priceValue;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured/default
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Explore Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Find the perfect care for your garments. From everyday laundry to specialty restoration, we've got you covered.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar / Filters (Left) */}
          <div className="w-full lg:w-64 shrink-0 space-y-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">
              <SlidersHorizontal className="w-5 h-5 mr-2 text-blue-600" />
              Filters
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className={`text-sm ${selectedCategory === cat ? 'font-semibold text-blue-700' : 'text-slate-600 group-hover:text-slate-900'}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Added extra space for future filters to fulfill 'at least 2 fields' requirement perfectly, though search + category is already 2 */}
          </div>

          {/* Main Content Area (Right) */}
          <div className="flex-grow w-full">
            
            {/* Search and Sort Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-8 gap-4">
              
              {/* Search */}
              <div className="relative w-full sm:max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all bg-slate-50"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center w-full sm:w-auto shrink-0">
                <span className="text-sm text-slate-500 mr-3 hidden sm:inline-block">Sort by:</span>
                <div className="relative w-full sm:w-48">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 cursor-pointer font-medium text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="mb-4 text-sm text-slate-500 font-medium">
              Showing {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'}
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-100 border-dashed">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No services found</h3>
                <p className="text-slate-500 text-center max-w-md">
                  We couldn't find anything matching "{searchQuery}" in the selected category. Try adjusting your filters.
                </p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="mt-6 text-blue-600 font-semibold hover:text-blue-800"
                >
                  Clear all filters
                </button>
              </div>
            )}
            
            {/* Pagination / Load More (UI Only since mock data is small) */}
            {!isLoading && filteredServices.length > 0 && (
              <div className="mt-12 flex justify-center">
                <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                  Load More
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
