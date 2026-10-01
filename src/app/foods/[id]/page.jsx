import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

export function generateStaticParams() {
  return [{ id: "52841" }, { id: "52945" }, { id: "53071" }];
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const { details = {} } = await res.json();

  return {
    title: details.title,
  };
}

const getSingleFood = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.details || null;
  } catch (error) {
    console.error("Failed to fetch food details:", error);
    return null;
  }
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food || !food.title) {
    redirect("/foods");
    // return (
    //   <div className="flex flex-col items-center justify-center min-h-[60vh] px-10 text-center">
    //     <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm max-w-md w-full">
    //       <span className="text-6xl mb-3 block">🍽️</span>
    //       <h2 className="text-3xl font-bold text-gray-900 mb-2">
    //         No Food Found
    //       </h2>
    //       <p className="text-base text-gray-500 mb-6">
    //         We couldn&apos;t find the food item you are looking for. It might
    //         have been removed or doesn&apos;t exist.
    //       </p>
    //       <Link
    //         href="/foods"
    //         className="inline-block px-5 py-2.5 bg-indigo-600 text-white font-medium text-sm rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
    //       >
    //         Back to All Foods
    //       </Link>
    //     </div>
    //   </div>
    // );
  }

  return (
    <div className="px-6 py-12">
      {/* Back Button */}
      <Link
        href="/foods"
        className="inline-flex items-center text-lg font-medium text-indigo-600 hover:text-indigo-800 mb-8 transition-colors hover:font-semibold"
      >
        ← Back to All Foods
      </Link>

      <div className="flex flex-col lg:flex-row gap-8 items-center bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
        {/* Food Image Container */}
        <div className="relative w-full lg:w-1/2 h-80 md:h-96 lg:h-120 rounded-xl overflow-hidden shadow-md">
          <Image
            src={food.foodImg}
            alt={food.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Food Information */}
        <div className="flex flex-col lg:w-1/2 justify-between h-full">
          <div>
            {/* Category and Area Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {food.category}
              </span>
              {food.area && (
                <span className="inline-block bg-amber-50 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {food.area} Cuisine
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              {food.title}
            </h1>

            <div className="text-3xl font-bold text-green-600 mb-6">
              ${food.price}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {food.description ||
                "Indulge in this carefully crafted culinary masterpiece, prepared fresh to satisfy your cravings. Rich in flavor and made with premium ingredients."}
            </p>

            {/* Video Tutorial Link if available */}
            {food.video && (
              <div className="mb-6">
                <a
                  href={food.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
                >
                  <span>📺 Watch Video Recipe</span>
                </a>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
            <button className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-xl font-medium shadow-sm hover:bg-indigo-700 transition-colors text-center">
              Add to Cart
            </button>
            <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-xl font-medium shadow-sm hover:bg-green-700 transition-colors text-center">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
