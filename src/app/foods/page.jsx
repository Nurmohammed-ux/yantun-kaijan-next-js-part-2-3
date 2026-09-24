import FoodCard from "@/components/cards/FoodCard";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 10 } },
  );
  const data = await res.json();
  return data.foods || [];
};

export const metadata = {
  title: "All Foods",
  description: "All foods we have in Restaurant",
};

const FoodsPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);

  return (
    <div className="px-6 py-8">
      <div className="flex gap-8 lg:gap-125 items-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Explore Foods
        </h1>
        <InputSearch />
      </div>

      <div className="flex flex-row gap-6 items-start">
        {/* Foods Grid */}
        <div className="flex-1">
          {foods.length === 0 ? (
            <p className="text-gray-500">No foods available right now.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foods.map((food, index) => (
                <FoodCard key={food.id} food={food} priority={index < 3} />
              ))}
            </div>
          )}
        </div>

        {/* Redesigned Cart Section Sidebar */}
        <aside className=" bg-white border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900 text-lg flex items-center gap-2">
              <span>🛒</span> Cart Items
            </h2>
          </div>
          <hr className="border-gray-100 mb-4" />
          <CartItems />
        </aside>
      </div>
    </div>
  );
};

export default FoodsPage;
