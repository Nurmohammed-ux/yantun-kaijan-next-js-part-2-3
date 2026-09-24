"use client";
import Image from "next/image";
import { useState } from "react";

const ReviewCard = ({ rev }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(rev.likes?.length || 0);

  const handleLikeClick = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* User Info Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100">
              <Image
                src={rev.photo}
                alt={rev.user}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{rev.user}</h3>
              <span className="text-xs text-gray-400">
                {new Date(rev.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full">
            <span className="text-amber-500 text-sm">★</span>
            <span className="text-sm font-bold text-amber-700">
              {rev.rating}.0
            </span>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          &ldquo;{rev.review}&rdquo;
        </p>
      </div>

      {/* Footer: Interactive Like Button */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
        <button
          onClick={handleLikeClick}
          className={`flex items-center gap-1.5 font-medium px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
            isLiked
              ? "bg-rose-50 text-rose-600 border border-rose-200 font-semibold"
              : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-semibold"
          }`}
        >
          <span className={isLiked ? "scale-110 transition-transform" : ""}>
            {isLiked ? "❤️" : "🤍"}
          </span>
          <span>{likesCount} Likes</span>
        </button>
        <span className="text-gray-400">{rev.email}</span>
      </div>
    </div>
  );
};

export default ReviewCard;