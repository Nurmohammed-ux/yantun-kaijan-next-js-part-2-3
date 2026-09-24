import ReviewCardSkeleton from "@/components/skeletons/ReviewCardSkeleton";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <ReviewCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default Loading;
