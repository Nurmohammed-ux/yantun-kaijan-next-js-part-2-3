const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm animate-pulse flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div className="space-y-2">
              <div className="w-28 h-4 bg-gray-200 rounded" />
              <div className="w-20 h-3 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="w-12 h-6 bg-gray-200 rounded-full" />
        </div>
        <div className="space-y-2 mb-6">
          <div className="w-full h-4 bg-gray-200 rounded" />
          <div className="w-5/6 h-4 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="w-20 h-7 bg-gray-200 rounded-lg" />
        <div className="w-32 h-3 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;