"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useCardHint } from "./useCardHint";

const signs = [
  { id: 1, title: 'Convulsions', image: '/images/1c.png', info: 'If your cat experiences sudden seizures or convulsions, contact a vet immediately.' },
  { id: 2, title: 'Itching', image: '/images/2c.png', info: 'Constant scratching or over-grooming might indicate fleas, allergies, or infections.' },
  { id: 3, title: 'Thirst', image: '/images/3c.png', info: 'If the animal cannot quench its thirst and constantly asks to drink, make an appointment with an endocrinologist.' },
  { id: 4, title: 'Swelling', image: '/images/4c.png', info: 'Any unusual swelling or lumps should be checked by a veterinarian.' },
  { id: 5, title: 'Swallowed a foreign object', image: '/images/5c.png', info: 'If you suspect your cat swallowed something it shouldn\'t have, seek emergency care.' },
  { id: 6, title: 'Copious urination', image: '/images/6c.png', info: 'Frequent urination can be a sign of kidney issues, diabetes, or urinary tract infections.' },
  { id: 7, title: 'High fever', image: '/images/7c.png', info: 'A high body temperature is a clear sign of illness or infection requiring attention.' },
  { id: 8, title: 'Lost weight', image: '/images/8c.png', info: 'Sudden or unexplained weight loss can indicate an underlying medical condition.' },
  { id: 9, title: 'Apathy', image: '/images/9c.png', info: 'A sudden loss of interest in play, food, or interaction can be a serious warning sign.' },
  { id: 10, title: 'Rapid pulse', image: '/images/10c.png', info: 'An unusually fast heart rate at rest might indicate cardiovascular distress or pain.' },
];

const dogSigns = [
  { id: 1, title: 'Swallowed a foreign object', image: '/images/1d.png', info: 'If you suspect your dog swallowed something it shouldn\'t have, seek emergency care.' },
  { id: 2, title: 'High temperature', image: '/images/2d.png', info: 'Temperature above 39 in dogs, a reason to consult a therapist' },
  { id: 3, title: 'Copious urination', image: '/images/3d.png', info: 'Frequent urination can be a sign of kidney issues, diabetes, or urinary tract infections.' },
  { id: 4, title: 'Lost weight', image: '/images/4d.png', info: 'Sudden or unexplained weight loss can indicate an underlying medical condition.' },
  { id: 5, title: 'Apathy', image: '/images/5d.png', info: 'A sudden loss of interest in play, food, or interaction can be a serious warning sign.' },
  { id: 6, title: 'Rapid pulse', image: '/images/6d.png', info: 'An unusually fast heart rate at rest might indicate cardiovascular distress or pain.' },
];

export default function SignsToVet() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dogScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const dogScroll = (direction: "left" | "right") => {
    if (dogScrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      dogScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="px-5 md:px-10 xl:px-20 pt-0 xl:pt-4 pb-32 xl:pb-48 bg-white overflow-visible">
      <div className="bg-[#EAEAEA] rounded-[40px] pt-12 xl:pt-20 pb-36 xl:pb-52 px-6 xl:px-16 relative">

        {/* --- CATS SECTION --- */}
        <div className="relative overflow-visible">
          {/* Header section with big number, cat, and text */}
          <div className="flex flex-col xl:flex-row justify-between relative z-10">

            {/* Big number */}
            <div className="text-[200px] sm:text-[280px] xl:text-[400px] leading-[0.75] font-bold text-black tracking-[-0.05em] -ml-2 xl:-ml-6 z-0 pointer-events-none">
              10
            </div>

            {/* Right side text and arrows */}
            <div className="xl:w-1/2 flex flex-col justify-start xl:justify-center items-end text-right z-20 mt-6 xl:mt-0">
              <h2 className="text-3xl sm:text-4xl xl:text-[44px] font-medium text-black leading-[1.2] mb-8 max-w-[400px]">
                - signs that it is worth contacting a veterinarian!
              </h2>

              {/* Nav Arrows */}
              <div className="relative w-40 sm:w-48 h-12 sm:h-16 shrink-0">
                <svg viewBox="0 0 300 100" fill="none" className="w-full h-full text-black">
                  <path d="M 75,15 A 35,35 0 0,0 75,85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 225,15 A 35,35 0 0,1 225,85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <g className="transition-transform duration-300 origin-[35%_50%] group-hover/left:scale-110">
                    <g transform="translate(105, 50) rotate(-90) scale(2.2) translate(-12, -12)">
                      <path d="M8.5 7c-1.38 0-2.5-1.12-2.5-2.5S7.12 2 8.5 2 11 3.12 11 4.5 9.88 7 8.5 7zm7 0c-1.38 0-2.5-1.12-2.5-2.5S14.12 2 15.5 2 18 3.12 18 4.5 16.88 7 15.5 7zM5 10.5C5 9.12 3.88 8 2.5 8S0 9.12 0 10.5 1.12 13 2.5 13 5 11.88 5 10.5zm16.5-2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM12 11c-3.15 0-5.83 2.15-6.66 5.09-.23.82.02 1.7.67 2.29l1.62 1.48c.84.77 2.05 1.14 3.2 1.14h2.35c1.15 0 2.36-.37 3.2-1.14l1.62-1.48c.64-.59.9-1.47.67-2.29C17.83 13.15 15.15 11 12 11z" fill="currentColor" />
                    </g>
                  </g>
                  <g className="transition-transform duration-300 origin-[65%_50%] group-hover/right:scale-110">
                    <g transform="translate(195, 50) rotate(90) scale(2.2) translate(-12, -12)">
                      <path d="M8.5 7c-1.38 0-2.5-1.12-2.5-2.5S7.12 2 8.5 2 11 3.12 11 4.5 9.88 7 8.5 7zm7 0c-1.38 0-2.5-1.12-2.5-2.5S14.12 2 15.5 2 18 3.12 18 4.5 16.88 7 15.5 7zM5 10.5C5 9.12 3.88 8 2.5 8S0 9.12 0 10.5 1.12 13 2.5 13 5 11.88 5 10.5zm16.5-2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM12 11c-3.15 0-5.83 2.15-6.66 5.09-.23.82.02 1.7.67 2.29l1.62 1.48c.84.77 2.05 1.14 3.2 1.14h2.35c1.15 0 2.36-.37 3.2-1.14l1.62-1.48c.64-.59.9-1.47.67-2.29C17.83 13.15 15.15 11 12 11z" fill="currentColor" />
                    </g>
                  </g>
                </svg>
                <div className="absolute inset-0 flex">
                  <button onClick={() => scroll("left")} className="flex-1 rounded-l-full group/left focus:outline-none hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer" aria-label="Scroll left" />
                  <button onClick={() => scroll("right")} className="flex-1 rounded-r-full group/right focus:outline-none hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer" aria-label="Scroll right" />
                </div>
              </div>
            </div>
          </div>

          {/* The Cat Image — desktop only */}
          <div className="hidden xl:block absolute left-1/2 top-[-40px] -translate-x-[45%] w-[900px] z-10 pointer-events-none">
            <Image src="/images/big-cat.webp" alt="Big cat" width={1000} height={1000} className="w-full h-auto object-contain" unoptimized />
          </div>

          {/* Cats Cards Carousel — full-bleed, over gray box */}
          <div ref={scrollRef} className="relative z-20 overflow-x-auto hide-scrollbar xl:mt-8 -mx-[44px] md:-mx-16 xl:-mx-36" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-4 md:gap-5 snap-x snap-mandatory pb-8 pt-4 px-[44px] md:px-16 xl:px-36">
              {signs.map((sign, i) => (
                <SignCard key={sign.id} sign={sign} isHint={i === 0} />
              ))}
            </div>
          </div>
        </div>

        {/* --- DOGS SECTION --- */}
        <div className="mt-8 sm:mt-10 xl:mt-40 relative flex flex-col min-h-0 xl:min-h-[600px]">

          {/* Header section with big text and right text */}
          <div className="flex flex-col xl:flex-row justify-between relative z-10">

            {/* Big text "Do not" */}
            <div className="text-[80px] sm:text-[120px] md:text-[180px] xl:text-[280px] leading-[0.8] font-bold text-black tracking-[-0.05em] -ml-2 xl:-ml-6 z-0 pointer-events-none whitespace-nowrap">
              Do not
            </div>

            {/* Right side text only */}
            <div className="xl:w-1/2 flex flex-col justify-start xl:justify-center items-end text-right z-20 mt-6 sm:mt-10 xl:mt-0">
              <h2 className="text-2xl sm:text-3xl xl:text-[44px] font-medium text-black leading-[1.2] mb-6 sm:mb-8 max-w-[500px]">
                forget to take your pet to check - this is important!
              </h2>
            </div>
          </div>

          {/* The Dog Image — desktop only */}
          <div className="hidden xl:block absolute left-[40%] top-[300px] -translate-x-1/2 w-[1050px] z-10 pointer-events-none">
            <Image src="/images/big-dog.png" alt="Big dog" width={1200} height={600} className="w-full h-auto object-contain" unoptimized />
          </div>

          {/* Nav Arrows — pinned to dog image bottom via mt-auto */}
          <div className="flex justify-end mt-auto relative z-20 pb-4">
            <div className="relative w-40 sm:w-48 h-12 sm:h-16 shrink-0">
              <svg viewBox="0 0 300 100" fill="none" className="w-full h-full text-black">
                <path d="M 75,15 A 35,35 0 0,0 75,85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <path d="M 225,15 A 35,35 0 0,1 225,85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <g className="transition-transform duration-300 origin-[35%_50%] group-hover/left:scale-110">
                  <g transform="translate(105, 50) rotate(-90) scale(2.2) translate(-12, -12)">
                    <path d="M8.5 7c-1.38 0-2.5-1.12-2.5-2.5S7.12 2 8.5 2 11 3.12 11 4.5 9.88 7 8.5 7zm7 0c-1.38 0-2.5-1.12-2.5-2.5S14.12 2 15.5 2 18 3.12 18 4.5 16.88 7 15.5 7zM5 10.5C5 9.12 3.88 8 2.5 8S0 9.12 0 10.5 1.12 13 2.5 13 5 11.88 5 10.5zm16.5-2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM12 11c-3.15 0-5.83 2.15-6.66 5.09-.23.82.02 1.7.67 2.29l1.62 1.48c.84.77 2.05 1.14 3.2 1.14h2.35c1.15 0 2.36-.37 3.2-1.14l1.62-1.48c.64-.59.9-1.47.67-2.29C17.83 13.15 15.15 11 12 11z" fill="currentColor" />
                  </g>
                </g>
                <g className="transition-transform duration-300 origin-[65%_50%] group-hover/right:scale-110">
                  <g transform="translate(195, 50) rotate(90) scale(2.2) translate(-12, -12)">
                    <path d="M8.5 7c-1.38 0-2.5-1.12-2.5-2.5S7.12 2 8.5 2 11 3.12 11 4.5 9.88 7 8.5 7zm7 0c-1.38 0-2.5-1.12-2.5-2.5S14.12 2 15.5 2 18 3.12 18 4.5 16.88 7 15.5 7zM5 10.5C5 9.12 3.88 8 2.5 8S0 9.12 0 10.5 1.12 13 2.5 13 5 11.88 5 10.5zm16.5-2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM12 11c-3.15 0-5.83 2.15-6.66 5.09-.23.82.02 1.7.67 2.29l1.62 1.48c.84.77 2.05 1.14 3.2 1.14h2.35c1.15 0 2.36-.37 3.2-1.14l1.62-1.48c.64-.59.9-1.47.67-2.29C17.83 13.15 15.15 11 12 11z" fill="currentColor" />
                  </g>
                </g>
              </svg>
              <div className="absolute inset-0 flex">
                <button onClick={() => dogScroll("left")} className="flex-1 rounded-l-full group/left focus:outline-none hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer" aria-label="Scroll left" />
                <button onClick={() => dogScroll("right")} className="flex-1 rounded-r-full group/right focus:outline-none hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer" aria-label="Scroll right" />
              </div>
            </div>
          </div>
        </div>

        {/* Dogs Cards Carousel — full-bleed, over gray box */}
        <div ref={dogScrollRef} className="relative z-20 overflow-x-auto hide-scrollbar -mt-8 -mb-[160px] xl:-mb-[224px] -mx-[44px] md:-mx-16 xl:-mx-36" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-4 md:gap-5 snap-x snap-mandatory py-16 px-[44px] md:px-16 xl:px-36">
            {dogSigns.map((sign, i) => (
              <DogSignCard key={sign.id} sign={sign} isHint={i === 0} />
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes cardPeek {
          0%   { transform: rotateY(0deg); }
          30%  { transform: rotateY(38deg); }
          55%  { transform: rotateY(38deg); }
          100% { transform: rotateY(0deg); }
        }
        .card-peek { animation: cardPeek 1.0s cubic-bezier(0.4,0,0.2,1) 1 both; }
      `}} />
    </div>
  );
}

function SignCard({ sign, isHint }: { sign: typeof signs[0]; isHint?: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { hinting, cardRef, innerRef, stopHint } = useCardHint(!!isHint, isFlipped);

  return (
    <div
      ref={cardRef}
      className="group w-[260px] md:w-[280px] h-[360px] md:h-[380px] shrink-0 snap-center cursor-pointer relative z-10 hover:z-20"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => { stopHint(); setIsFlipped(true); }}
      onMouseLeave={() => { stopHint(); setIsFlipped(false); }}
      onClick={() => { stopHint(); setIsFlipped(f => !f); }}
    >
      <div
        ref={innerRef}
        className={`relative w-full h-full ${hinting ? "card-peek" : "transition-transform duration-700"}`}
        style={{ transformStyle: 'preserve-3d', ...(hinting ? {} : { transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }) }}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-[#D48B1B] rounded-[30px] p-6 md:p-8 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
          <h3 className="text-xl md:text-2xl font-medium text-white relative z-10">
            {sign.title}
          </h3>
          <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
            <Image src={sign.image} alt={sign.title} width={240} height={240} className="object-contain w-[85%] h-auto" unoptimized />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white rounded-[30px] p-6 md:p-8 flex flex-col justify-between shadow-md" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-black mb-4">
              {sign.title}
            </h3>
            <p className="text-black text-[15px] leading-relaxed">
              {sign.info}
            </p>
          </div>
          <button
            className="bg-[#f5ae2a] text-black font-semibold py-3 px-6 rounded-full w-max text-sm hover:bg-[#e69b1d] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

function DogSignCard({ sign, isHint }: { sign: typeof dogSigns[0]; isHint?: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { hinting, cardRef, innerRef, stopHint } = useCardHint(!!isHint, isFlipped);

  return (
    <div
      ref={cardRef}
      className="group w-[260px] md:w-[280px] h-[360px] md:h-[380px] shrink-0 snap-center cursor-pointer relative z-10 hover:z-20"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => { stopHint(); setIsFlipped(true); }}
      onMouseLeave={() => { stopHint(); setIsFlipped(false); }}
      onClick={() => { stopHint(); setIsFlipped(f => !f); }}
    >
      <div
        ref={innerRef}
        className={`relative w-full h-full ${hinting ? "card-peek" : "transition-transform duration-700"}`}
        style={{ transformStyle: 'preserve-3d', ...(hinting ? {} : { transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }) }}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-[#67B2D2] rounded-[30px] p-6 md:p-8 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
          <h3 className="text-xl md:text-2xl font-medium text-white relative z-10">
            {sign.title}
          </h3>
          <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
            <Image src={sign.image} alt={sign.title} width={240} height={240} className="object-contain w-[85%] h-auto" unoptimized />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white rounded-[30px] p-6 md:p-8 flex flex-col justify-between" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-black mb-4">
              {sign.title}
            </h3>
            <p className="text-black text-[15px] leading-relaxed">
              {sign.info}
            </p>
          </div>
          <button
            className="bg-[#67B2D2] text-white font-semibold py-3 px-6 rounded-full w-max text-sm hover:bg-[#5aa4c2] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Booking
          </button>
        </div>
      </div>
    </div>
  );
}
