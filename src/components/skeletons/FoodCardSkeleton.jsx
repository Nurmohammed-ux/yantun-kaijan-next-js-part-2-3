const FoodCardSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white animate-pulse flex flex-col justify-between">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-200" />

      <div className="p-4 flex flex-col grow justify-between">
        <div>
          {/* Category Skeleton */}
          <div className="w-20 h-3 bg-gray-200 rounded mb-2" />

          {/* Title Skeleton */}
          <div className="w-3/4 h-6 bg-gray-200 rounded mb-4" />

          {/* Price Skeleton */}
          <div className="w-16 h-5 bg-gray-200 rounded mb-2" />
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex-1 h-9 bg-gray-200 rounded-md" />
          <div className="flex-1 h-9 bg-gray-200 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
