"use client";
import { useEffect, useState } from "react";
import ReviewCard from "@/components/cards/ReviewCard";
import Loading from "./loading";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch reviews:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
          Customer Feedback
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2">
          What Our Customers Say
        </h1>
        <p className="text-gray-600 text-lg">
          Real experiences shared by food lovers who dined with us or ordered
          from our kitchen.
        </p>
      </div>

      {/* Loading State */}
      {loading && <Loading />}

      {/* Empty State */}
      {!loading && reviews.length === 0 && (
        <div className="text-center py-12 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <p className="text-gray-500 text-lg">
            No reviews found at the moment.
          </p>
        </div>
      )}

      {/* Reviews Grid */}
      {!loading && reviews.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} rev={rev} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;