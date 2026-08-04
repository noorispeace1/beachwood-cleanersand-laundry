export default function SkeletonCard() {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-full animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 sm:h-56 bg-slate-200"></div>

      {/* Content Skeleton */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="h-6 bg-slate-200 rounded w-2/3"></div>
          <div className="h-5 bg-slate-200 rounded w-10"></div>
        </div>
        
        <div className="space-y-2 mb-6 flex-grow">
          <div className="h-4 bg-slate-200 rounded w-full"></div>
          <div className="h-4 bg-slate-200 rounded w-4/5"></div>
        </div>

        {/* Meta Info Skeleton */}
        <div className="flex flex-col space-y-3 mb-6">
          <div className="h-3 bg-slate-200 rounded w-1/2"></div>
          <div className="h-3 bg-slate-200 rounded w-2/5"></div>
        </div>

        {/* Action Button Skeleton */}
        <div className="mt-auto pt-4 border-t border-slate-100">
          <div className="h-10 bg-slate-200 rounded-lg w-full"></div>
        </div>
      </div>
    </div>
  );
}
