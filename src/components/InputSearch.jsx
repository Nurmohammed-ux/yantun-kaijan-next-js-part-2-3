"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState } from "react";

const InputSearch = ({ onSearch }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Create new URLSearchParams object from current params
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    // Update the URL without reloading the page using startTransition
    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  const handleClear = () => {
    setSearchTerm("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Search Icon */}
      <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
        🔍
      </span>

      {/* Input Field */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for delicious foods, categories..."
        className="w-full pl-11 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
      />

      {/* Clear Button (appears when typing) */}
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 hover:text-gray-600 transition-colors"
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default InputSearch;
