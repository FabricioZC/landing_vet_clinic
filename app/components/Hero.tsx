import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="w-full flex flex-col xl:flex-row items-center pt-8 pb-0 xl:py-0 xl:min-h-[calc(100vh-120px)] relative z-20 overflow-hidden"
    >
      {/* Left: text content */}
      <div className="flex flex-col items-center text-center xl:items-start xl:text-left gap-6 xl:gap-7 px-5 md:px-12 xl:pl-36 xl:pr-8 py-10 md:py-16 w-full xl:w-[48%] shrink-0 z-10">
        <h1 className="text-5xl md:text-6xl xl:text-[5rem] font-semibold text-gray-900 leading-[1.05] tracking-tight">
          Veterinary{" "}
          <span
            className="inline-flex items-center justify-center w-[4rem] h-[3rem] md:w-[5.5rem] md:h-[4.5rem] xl:w-[6.5rem] xl:h-[5rem] overflow-hidden align-middle shrink-0"
            style={{
              backgroundColor: "#5BB5E3",
              borderRadius: "55% 45% 60% 40% / 40% 55% 45% 60%",
            }}
          >
            <Image
              src="/images/dog.jpg"
              alt="dog"
              width={96}
              height={80}
              className="object-cover w-full h-full"
              style={{ objectPosition: "0% top" }}
            />
          </span>
          <br />
          Clinic in London
        </h1>

        <p className="text-gray-700 text-base leading-relaxed max-w-[360px]">
          The leading clinic in London: top specialists,
          <br className="hidden xl:block" />
          modern equipment, proven medicines.
        </p>

        <button className="bg-amber-400 text-gray-900 font-semibold text-sm px-8 py-3.5 rounded-full w-fit hover:bg-amber-500 active:scale-95 transition-all">
          Book now
        </button>

        {/* Social proof card */}
        <div className="rounded-2xl px-4 pt-3 pb-4 flex flex-col items-center lg:items-start gap-1 w-[260px] mt-4" style={{ backgroundColor: "#5BB5E3" }}>
          <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "2.5/1" }}>
            <Image
              src="/images/reviws-heads.jpg"
              alt="Happy customers"
              fill
              className="object-contain"
            />
          </div>
          <div className="px-1 flex items-baseline gap-2">
            <p className="font-extrabold text-white text-xl">+100</p>
            <p className="text-white/80 text-base font-medium">Reviews</p>
          </div>
        </div>
      </div>

      {/* Right: cat aligned to bottom, resting above next section */}
      <div className="hidden xl:flex w-full xl:flex-1 h-[300px] xl:h-auto xl:self-stretch justify-center xl:justify-end items-end mt-4 xl:mt-0 overflow-hidden pl-5 pr-7 xl:pr-24">
        <div className="relative shrink-0 h-full w-full lg:w-[120%] max-w-[920px]">
          <Image
            src="/images/hero-cat.png"
            alt="Veterinary clinic cat"
            fill
            className="object-contain object-bottom lg:object-right-bottom drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
