import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-3 bg-[#121212] border border-slate-800/80 rounded-2xl px-3.5 py-2 shadow-xl group cursor-pointer hover:border-slate-700 transition">
      
      {/* Left: Scaled-down Burger Graphic */}
      <div className="relative w-9 h-9 flex flex-col items-center justify-center space-y-0.5 shrink-0">
        <div className="w-9 h-2 bg-amber-500 rounded-full rotate-[-10deg] shadow-xs"></div>
        <div className="w-11 h-1 bg-green-600 rounded-full"></div>
        <div className="w-10 h-1 bg-red-500 rounded-full rotate-[5deg]"></div>
        <div className="w-11 h-2 bg-amber-900 rounded-full shadow-xs"></div>
        <div className="w-9 h-2 bg-amber-500 rounded-full rotate-10 shadow-xs"></div>
      </div>

      {/* Right: Compact Text & Chef Hat */}
      <div className="flex flex-col relative shrink-0">
        
        {/* Chef Hat & Fork Icon Positioned Top-Right */}
        <div className="absolute -top-2 -right-1 flex items-end">
          <svg className="w-9 h-6 text-amber-400" viewBox="0 0 100 80" fill="currentColor">
            {/* Chef Hat Outline */}
            <path d="M30 40 C10 40 5 20 25 15 C30 5 60 5 65 15 C85 15 90 35 75 40 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            {/* Fork Prongs & Handle */}
            <rect x="68" y="38" width="4" height="20" rx="2" />
            <path d="M65 38 H75 V44 H65 Z" />
          </svg>
        </div>

        {/* Subtitle */}
        <span className="text-[9px] font-extrabold tracking-[0.25em] text-white uppercase leading-none">
          YANTUN
        </span>

        {/* Main Title */}
        <span className="text-sm sm:text-base font-black tracking-wide text-white uppercase leading-tight">
          KHAIJAN
        </span>

        {/* Underline Decoration */}
        <div className="flex items-center gap-1 pt-0.5">
          <div className="w-16 h-0.5 bg-amber-500 rounded-full"></div>
          <div className="w-2 h-0.5 bg-amber-500 rounded-full"></div>
        </div>
      </div>

    </Link>
  );
};

export default Logo;