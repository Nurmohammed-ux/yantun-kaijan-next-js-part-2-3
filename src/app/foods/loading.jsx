import FoodCardSkeleton from "@/components/skeletons/FoodCardSkeleton";

const Loading = () => {
  return (
    <div className="px-6 py-8">
      {/* Optional: Add a title skeleton wrapper if needed */}
      <div className="w-48 h-8 bg-gray-200 rounded mb-6 animate-pulse" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <FoodCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default Loading;