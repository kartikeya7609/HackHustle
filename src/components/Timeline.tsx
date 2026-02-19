"use client";

import { motion } from "framer-motion";
import { timeline } from "@/public/timeline";
import BlurText from "@/components/BlurText";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-[#05010a] flex flex-col items-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <BlurText
            text="Event Roadmap"
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic justify-center"
            animateBy="words"
            direction="bottom"
          />
          <p className="text-blue-400 mt-4 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
            Follow the path of innovation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-[1140px] mx-auto py-4">

          {/* Central Line - Hidden on Mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-600 -translate-x-1/2 hidden md:block" />

          {/* Mobile Line - Left Aligned */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10 md:hidden" />

          <div className="space-y-8 md:space-y-0">
            {timeline.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative w-full md:w-1/2 md:py-8 pl-12 md:pl-0 ${isLeft ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
                >
                  {/* Central Dot - Desktop */}
                  <div className={`
                    absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#05010a] rounded-full border-2 border-purple-600 z-10 hidden md:block
                    ${isLeft ? "-right-[9px]" : "-left-[9px]"}
                  `} />

                  {/* Connector Line - Desktop */}
                  <div className={`
                    absolute top-1/2 -translate-y-1/2 h-[2px] bg-purple-600 w-12 hidden md:block
                    ${isLeft ? "right-[8px]" : "left-[8px]"}
                  `} />

                  {/* Date Tag - Desktop */}
                  <div className={`
                    absolute top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-blue-500 z-20 hidden md:block
                    ${isLeft ? "-right-24" : "-left-24"}
                  `}>
                    {event.date}
                  </div>

                  {/* Mobile Dot */}
                  <div className="absolute left-[21px] top-8 md:hidden w-3 h-3 bg-purple-500 rounded-full border border-black z-20 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

                  {/* Information Card */}
                  <div className={`
                    group relative p-6 md:p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/[0.07] hover:border-purple-500/50
                    rounded-2xl md:rounded-[50px]
                    ${isLeft ? "md:rounded-r-none md:pr-16" : "md:rounded-l-none md:pl-16"}
                  `}>
                    <div className={`flex flex-col ${isLeft ? "items-start" : "md:items-end md:text-right text-left items-start"}`}>
                      {/* Mobile-only Date */}
                      <span className="md:hidden text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest mb-2">
                        {event.date}
                      </span>

                      <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight mb-2 group-hover:text-purple-400 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}