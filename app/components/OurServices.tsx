import React from "react";

const SERVICES = [
  {
    title: "Surgery",
    desc: "Planned, urgent and emergency operations for animals of any complexity.\nWhen medicine fails, tests and examinations did not give an accurate result, or the pet is in critical condition, surgery can help them.",
    count: "78 services",
    emoji: "🪡",
    emojiClass: "rotate-[12deg] right-4 bottom-4",
    colSpan: "md:col-span-3",
    bg: "bg-[#5BB5E3]",
    textColor: "text-white",
    descColor: "text-white/90",
    countColor: "text-white/60",
    btnBg: "bg-white",
    btnText: "text-gray-900",
    btnLabel: "Read more",
  },
  {
    title: "Therapy",
    desc: "Systematic actions for the treatment and prevention of diseases.\nThe doctor will examine the condition of the pet, conduct the necessary diagnostics, identify pathology, prescribe treatment and, if necessary, refer it to a narrow-profile specialist.",
    count: "124 services",
    emoji: "💊",
    emojiClass: "rotate-[12deg] right-4 bottom-4",
    colSpan: "md:col-span-3",
    bg: "bg-[#5BB5E3]",
    textColor: "text-white",
    descColor: "text-white/90",
    countColor: "text-white/60",
    btnBg: "bg-white",
    btnText: "text-gray-900",
    btnLabel: "Read more",
  },
  {
    title: "Cardiology",
    desc: "Taking care of your pet's cardiovascular system.\nPrevention and treatment...",
    count: "22 services",
    emoji: "🫀",
    emojiClass: "rotate-12 right-2 bottom-4",
    colSpan: "md:col-span-2",
    bg: "bg-[#5BB5E3]",
    textColor: "text-white",
    descColor: "text-white/90",
    countColor: "text-white/60",
    btnBg: "bg-white",
    btnText: "text-gray-900",
    btnLabel: "Read more",
  },
  {
    title: "Diagnostics",
    desc: "Diagnosis of pets is the basis of successful treatment....\n",
    count: "96 services",
    emoji: "🧐",
    emojiClass: "rotate-0 right-4 bottom-4",
    colSpan: "md:col-span-2",
    bg: "bg-[#5BB5E3]",
    textColor: "text-white",
    descColor: "text-white/90",
    countColor: "text-white/60",
    btnBg: "bg-white",
    btnText: "text-gray-900",
    btnLabel: "Read more",
  },
  {
    title: "Make an appointment",
    desc: "A wide range of veterinary services and specialists around the clock.",
    count: "",
    emoji: "✏️",
    emojiClass: "rotate-[12deg] right-4 bottom-4",
    colSpan: "md:col-span-2",
    bg: "bg-amber-400",
    textColor: "text-gray-900",
    descColor: "text-gray-900/90",
    countColor: "text-gray-900/60",
    btnBg: "bg-black",
    btnText: "text-white",
    btnLabel: "Book now",
  },
];

export default function OurServices() {
  return (
    <div id="services" className="px-5 md:px-10 lg:px-20 py-12 lg:py-16 scroll-mt-24">
      <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 lg:mb-10">
        Our services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
        {SERVICES.map((service, idx) => (
          <div
            key={idx}
            className={`${service.bg} ${service.colSpan} rounded-3xl p-6 lg:p-8 flex flex-col relative overflow-hidden group min-h-[250px]`}
          >
            <h3 className={`text-2xl font-bold ${service.textColor} mb-3`}>
              {service.title}
            </h3>
            
            <p className={`${service.descColor} text-[0.95rem] md:text-base mb-6 whitespace-pre-line leading-relaxed z-10 max-w-[80%] lg:max-w-[70%]`}>
              {service.desc}
            </p>
            
            <div className="flex-1 flex flex-col justify-end z-10 mt-auto">
              {service.count && (
                <p className={`${service.countColor} text-sm mb-4`}>
                  {service.count}
                </p>
              )}
              
              <div>
                <button
                  className={`${service.btnBg} ${service.btnText} font-semibold text-sm px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-sm`}
                >
                  {service.btnLabel}
                </button>
              </div>
            </div>

            {/* Emoji as a placeholder for the 3D icon */}
            <div
              className={`absolute text-7xl md:text-8xl opacity-90 transform group-hover:scale-110 transition-transform duration-300 pointer-events-none select-none ${service.emojiClass}`}
              style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.15))" }}
            >
              {service.emoji}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
