"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const clients = [
  {
    name: "Oliver",
    problems: ["Convulsions", "Itching"],
    image: "/images/client-oliver.png",
    bgColor: "bg-[#e59a2f]",
    cornerColor: "bg-[#d58b20]",
    className: "col-start-1 row-start-1 col-span-1 row-span-1",
    cornerClass: "rounded-br-[120px] md:rounded-br-[140px]",
    imgClass: "w-full h-full absolute bottom-0 right-0 object-contain object-right-bottom group-hover:scale-105",
    review: "Oliver came in with frequent seizures and relentless scratching. After a tailored treatment plan, he's seizure-free and his coat is healthier than ever. We couldn't be happier!",
    stars: 5,
  },
  {
    name: "Buster",
    problems: ["Thirst", "Swelling"],
    image: "/images/client-buster.png",
    bgColor: "bg-[#e695a8]",
    cornerColor: "bg-[#f5ae2a]",
    className: "col-start-2 row-start-1 col-span-1 row-span-1",
    cornerClass: "rounded-br-[120px] md:rounded-br-[140px]",
    imgClass: "w-full h-full absolute bottom-0 right-0 object-contain object-right-bottom group-hover:scale-105",
    review: "Buster drank water non-stop and had a strange lump on his side. The team caught early-stage kidney disease and removed the benign cyst. He's back to chasing balls!",
    stars: 5,
  },
  {
    name: "Sooty",
    problems: ["Convulsions", "Thirst"],
    image: "/images/client-sooty.png",
    bgColor: "bg-[#a4a5b1]",
    cornerColor: "bg-[#f5ae2a]",
    className: "col-start-1 row-start-2 col-span-2 row-span-1",
    cornerClass: "rounded-br-[140px] md:rounded-br-[160px]",
    imgClass: "w-full h-full absolute bottom-0 right-0 object-contain object-right-bottom group-hover:scale-105",
    review: "Sooty had shaking episodes and wouldn't stop drinking. With medication and a new diet, she's completely stable and purring louder than ever. Truly amazing care from the whole team.",
    stars: 5,
  },
  {
    name: "Athena",
    problems: ["Swelling", "Thirst"],
    image: "/images/client-athena.png",
    bgColor: "bg-[#c97f18]",
    cornerColor: "bg-[#f5ae2a]",
    className: "col-start-3 row-start-1 col-span-2 row-span-2",
    cornerClass: "rounded-br-[220px] md:rounded-br-[260px]",
    imgClass: "w-full h-full absolute bottom-0 right-0 object-contain object-right-bottom group-hover:scale-105",
    review: "Athena's leg swelled overnight and she refused to eat. The team worked fast — it was an infection caught just in time. She recovered fully in two weeks. Best vets in London, no question.",
    stars: 5,
  },
  {
    name: "Simba",
    problems: ["Unusual pulling", "Lost weight"],
    image: "/images/client-simba.png",
    bgColor: "bg-[#5bb3db]",
    cornerColor: "bg-[#f5ae2a]",
    className: "col-start-5 row-start-1 col-span-1 row-span-1",
    cornerClass: "rounded-br-[120px] md:rounded-br-[140px]",
    imgClass: "w-full h-full absolute bottom-0 right-0 object-contain object-right-bottom group-hover:scale-105",
    review: "Simba kept pulling on walks and dropped 2 kg in a month. Anxiety-driven weight loss, diagnosed quickly. With a new routine and supplements he's thriving again.",
    stars: 5,
  },
  {
    name: "Aren",
    problems: ["Checkup", "Vaccination"],
    image: "/images/client-aren.png",
    bgColor: "bg-[#78b584]",
    cornerColor: "bg-[#f5ae2a]",
    className: "col-start-6 row-start-1 col-span-1 row-span-1",
    cornerClass: "rounded-br-[120px] md:rounded-br-[140px]",
    imgClass: "w-full h-full absolute bottom-0 right-0 object-contain object-right-bottom -scale-x-100 group-hover:-scale-x-105 group-hover:scale-y-105",
    review: "Aren came for his annual checkup and vaccines. The team was so gentle — he didn't even flinch! Clean bill of health. Happy Paw is the only place we trust for our parrot.",
    stars: 5,
  },
  {
    name: "Bella",
    problems: ["Copious urination", "High fever"],
    image: "/images/client-bella.png",
    bgColor: "bg-[#9a43a8]",
    cornerColor: "bg-[#f5ae2a]",
    className: "col-start-5 row-start-2 col-span-1 row-span-1",
    cornerClass: "rounded-br-[120px] md:rounded-br-[140px]",
    imgClass: "w-full h-full absolute bottom-0 right-0 object-contain object-right-bottom group-hover:scale-105",
    review: "Bella had a raging fever and couldn't stop urinating. Severe UTI caught early. After antibiotics and follow-up care she's fully recovered. Thank you Happy Paw team!",
    stars: 5,
  },
  {
    name: "Krusty",
    problems: ["Dental care", "Diet"],
    image: "/images/client-krusty.png",
    bgColor: "bg-[#e37b66]",
    cornerColor: "bg-[#f5ae2a]",
    className: "col-start-6 row-start-2 col-span-1 row-span-1",
    cornerClass: "rounded-br-[120px] md:rounded-br-[140px]",
    imgClass: "w-full h-full absolute bottom-0 right-0 object-contain object-right-bottom group-hover:scale-105",
    review: "Krusty's teeth were in bad shape and he'd gained too much weight. After a dental cleaning and a custom diet plan he's energetic and loves his new food. Wonderful clinic!",
    stars: 5,
  },
];


function ClientCard({ client }: { client: typeof clients[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${client.className} relative cursor-pointer`}
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT */}
        <div
          className={`absolute inset-0 rounded-[2.5rem] overflow-hidden ${client.cornerColor} group shadow-sm`}
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" } as React.CSSProperties}
        >
          <div className={`relative flex flex-col w-full h-full ${client.bgColor} ${client.cornerClass} overflow-hidden`}>
            <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex flex-col pointer-events-none">
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 drop-shadow-sm">
                {client.name}
              </h3>
              <div className="flex flex-col items-start gap-1.5 sm:gap-2">
                {client.problems.map((problem) => (
                  <span key={problem} className="bg-white/40 backdrop-blur-md text-gray-900 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-bold shadow-sm">
                    {problem}
                  </span>
                ))}
              </div>
            </div>
            <Image
              src={client.image}
              alt={client.name}
              fill
              unoptimized
              className={`${client.imgClass} transition-transform duration-500 pointer-events-none`}
            />
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-white p-5 sm:p-7 flex flex-col justify-between shadow-sm"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" } as React.CSSProperties}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{client.name}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{client.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurClients() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
    }
  };

  return (
    <div id="reviews" className="px-5 md:px-10 lg:px-20 py-12 lg:py-16 bg-white overflow-hidden scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 lg:mb-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight tracking-tight mb-4">
            Our clients
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Here you can read stories of the pets that we have treated, their
            initial problems and how we could make their lives happy again.
          </p>
        </div>

        <div className="relative w-60 h-20 shrink-0 self-center md:self-end mt-2 md:mt-0 hidden md:block">
          <svg viewBox="0 0 300 100" fill="none" className="w-full h-full text-black">
            <path d="M 75,15 A 35,35 0 0,0 75,85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <path d="M 225,15 A 35,35 0 0,1 225,85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <g><g transform="translate(105, 50) rotate(-90) scale(2.2) translate(-12, -12)">
              <path d="M8.5 7c-1.38 0-2.5-1.12-2.5-2.5S7.12 2 8.5 2 11 3.12 11 4.5 9.88 7 8.5 7zm7 0c-1.38 0-2.5-1.12-2.5-2.5S14.12 2 15.5 2 18 3.12 18 4.5 16.88 7 15.5 7zM5 10.5C5 9.12 3.88 8 2.5 8S0 9.12 0 10.5 1.12 13 2.5 13 5 11.88 5 10.5zm16.5-2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM12 11c-3.15 0-5.83 2.15-6.66 5.09-.23.82.02 1.7.67 2.29l1.62 1.48c.84.77 2.05 1.14 3.2 1.14h2.35c1.15 0 2.36-.37 3.2-1.14l1.62-1.48c.64-.59.9-1.47.67-2.29C17.83 13.15 15.15 11 12 11z" fill="currentColor" />
            </g></g>
            <g><g transform="translate(195, 50) rotate(90) scale(2.2) translate(-12, -12)">
              <path d="M8.5 7c-1.38 0-2.5-1.12-2.5-2.5S7.12 2 8.5 2 11 3.12 11 4.5 9.88 7 8.5 7zm7 0c-1.38 0-2.5-1.12-2.5-2.5S14.12 2 15.5 2 18 3.12 18 4.5 16.88 7 15.5 7zM5 10.5C5 9.12 3.88 8 2.5 8S0 9.12 0 10.5 1.12 13 2.5 13 5 11.88 5 10.5zm16.5-2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM12 11c-3.15 0-5.83 2.15-6.66 5.09-.23.82.02 1.7.67 2.29l1.62 1.48c.84.77 2.05 1.14 3.2 1.14h2.35c1.15 0 2.36-.37 3.2-1.14l1.62-1.48c.64-.59.9-1.47.67-2.29C17.83 13.15 15.15 11 12 11z" fill="currentColor" />
            </g></g>
          </svg>
          <div className="absolute inset-0 flex">
            <button onClick={() => scroll("left")} className="flex-1 rounded-l-full focus:outline-none hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer" aria-label="Scroll left" />
            <button onClick={() => scroll("right")} className="flex-1 rounded-r-full focus:outline-none hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer" aria-label="Scroll right" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-12 pt-4 -mx-5 px-5 md:-mx-10 md:px-10 lg:-mx-20 lg:px-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="grid grid-cols-[repeat(6,210px)] sm:grid-cols-[repeat(6,260px)] md:grid-cols-[repeat(6,320px)] grid-rows-[210px_210px] sm:grid-rows-[260px_260px] md:grid-rows-[320px_320px] gap-4 sm:gap-5 md:gap-6 w-max mx-auto md:mx-0">
            {clients.map((client, i) => (
              <ClientCard key={i} client={client} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar{display:none}`}} />
    </div>
  );
}
