import Image from "next/image";
import Link from "next/link";
import CartButton from "../buttons/CartButton";

const FoodCard = ({ food, priority = false }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow flex flex-col justify-between">
      {/* Next.js Optimized Image */}
      <div className="relative w-full h-64">
        <Image 
          src={food.foodImg} 
          alt={food.title} 
          fill
          priority={priority} // <-- Added priority prop here
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover" 
        />
      </div>

      <div className="p-4 flex flex-col grow justify-between">
        <div>
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            {food.category}
          </span>
          <h3 className="text-lg font-bold text-gray-800 mt-1 truncate">
            {food.title}
          </h3>
          <span className="text-xl font-bold text-green-600 mt-2 block">
            ${food.price}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-4">
          <Link 
            href={`/foods/${food.id}`} 
            className="flex-1 text-center border border-indigo-600 text-indigo-600 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-50 transition-colors"
          >
            View Details
          </Link>
          <CartButton food={food} />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;