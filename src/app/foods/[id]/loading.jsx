const Loading = () => {
  return (
    <div className="px-6 py-12 animate-pulse">
      {/* Back Button Skeleton */}
      <div className="w-32 h-4 bg-gray-200 rounded mb-8" />

      <div className="flex flex-col lg:flex-row gap-8 items-center bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
        {/* Food Image Skeleton */}
        <div className="w-full lg:w-1/2 h-80 md:h-96 bg-gray-200 rounded-xl" />

        {/* Food Information Skeleton */}
        <div className="flex flex-col lg:w-1/2 w-full justify-between h-full">
          <div>
            {/* Badges Skeleton */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-20 h-6 bg-gray-200 rounded-full" />
              <div className="w-24 h-6 bg-gray-200 rounded-full" />
            </div>

            {/* Title Skeleton */}
            <div className="w-3/4 h-10 bg-gray-200 rounded mb-4" />

            {/* Price Skeleton */}
            <div className="w-24 h-8 bg-gray-200 rounded mb-6" />

            {/* Description Skeleton */}
            <div className="space-y-3 mb-6">
              <div className="w-full h-4 bg-gray-200 rounded" />
              <div className="w-5/6 h-4 bg-gray-200 rounded" />
              <div className="w-4/6 h-4 bg-gray-200 rounded" />
            </div>

            {/* Video Link Skeleton */}
            <div className="w-40 h-10 bg-gray-200 rounded-lg mb-6" />
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
            <div className="flex-1 h-12 bg-gray-200 rounded-xl" />
            <div className="flex-1 h-12 bg-gray-200 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;