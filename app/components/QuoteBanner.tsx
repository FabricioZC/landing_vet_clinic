import Image from "next/image";

export default function QuoteBanner() {
  return (
    <div className="px-5 md:px-10 lg:px-20 pt-8 lg:pt-12 pb-12 lg:pb-16">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden flex items-center justify-center shadow-sm">
        {/* Background Image */}
        <Image
          src="/images/dog-happy.png"
          alt="Happy dog in grass"
          fill
          className="object-cover object-center"
        />
        
        {/* Subtle Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center gap-3 md:gap-8 px-4 w-full max-w-[1200px]">
          {/* Left Quote */}
          <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-gray-900 font-serif font-black text-3xl md:text-5xl leading-none pt-2 md:pt-4 shrink-0 shadow-md">
            &ldquo;
          </div>
          
          {/* Main Text */}
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] text-center leading-tight tracking-tight drop-shadow-lg shrink">
            Giving hearts to animals
          </h2>
          
          {/* Right Quote */}
          <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-gray-900 font-serif font-black text-3xl md:text-5xl leading-none pt-2 md:pt-4 shrink-0 shadow-md">
            &rdquo;
          </div>
        </div>
      </div>
    </div>
  );
}
