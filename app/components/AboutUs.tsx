import Image from "next/image";

const VALUES = [
  {
    icon: "🫶",
    bg: "bg-rose-100",
    title: "Care",
    desc: "Provide the necessary treatment and care to help your pet recover.",
  },
  {
    icon: "💼",
    bg: "bg-slate-100",
    title: "Professionalism",
    desc: "Provide the necessary treatment and care to help your pet recover.",
  },
  {
    icon: "🧍",
    bg: "bg-amber-100",
    title: "Responsibility",
    desc: "Accurate and timely diagnoses, administering medications and treatments.",
  },
  {
    icon: "👐",
    bg: "bg-sky-100",
    title: "Openness",
    desc: "We are glad to answer any your questions about your pet health.",
  },
];

export default function AboutUs() {
  return (
    <div className="px-5 md:px-10 lg:px-20 pb-8">
      <section
        id="about"
        className="w-full bg-[#111111] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden scroll-mt-24"
      >
        <div className="w-full px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14 grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-8 lg:gap-8 items-stretch">

          {/* Left column */}
          <div className="flex flex-col gap-5 h-full">
            <h2 className="text-4xl md:text-5xl font-medium text-white">About us</h2>

            {/* Card Container */}
            <div className="bg-amber-400 rounded-3xl flex flex-col flex-1 min-h-[500px] lg:min-h-0 relative overflow-hidden">
              {/* White area with concave bottom-right corner */}
              <div className="bg-white flex flex-col flex-1 rounded-br-[100px] lg:rounded-br-[130px] h-full overflow-hidden">
                {/* Image Container */}
                <div className="relative w-full h-[220px] md:h-[270px] shrink-0">
                  <Image
                    src="/images/vet-site.jpg"
                    alt="Happy Paw veterinary clinic"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text and Button Container */}
                <div className="relative px-6 md:px-8 pt-10 pb-12 flex-1 flex flex-col">
                  {/* Show on map button */}
                  <div className="absolute left-6 md:left-8 -top-6">
                    <button className="bg-amber-400 text-gray-900 font-semibold text-sm md:text-base px-6 md:px-8 py-3 rounded-full hover:bg-amber-500 transition-colors shadow-sm">
                      Show on map
                    </button>
                  </div>
                  
                  <p className="text-gray-900 text-base md:text-[1.05rem] leading-[1.65] font-medium mt-1 pr-4 z-10">
                    We are a modern multidisciplinary veterinary hospital with a full
                    range of services: from diagnosis and treatment to medical support
                    of pets of different types, weight and age.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: 2×2 value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pt-[4.25rem] self-stretch" style={{ gridAutoRows: "1fr" }}>
            {VALUES.map(({ icon, bg, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-3xl p-6 lg:p-7 flex flex-col gap-3 h-full items-start"
              >
                <div className={`w-14 h-14 lg:w-16 lg:h-16 ${bg} rounded-2xl flex items-center justify-center text-2xl lg:text-3xl shrink-0`}>
                  {icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg md:text-xl mb-1 md:mb-2">{title}</p>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
