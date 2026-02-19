"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import Antigravity from "@/components/Antigravity";

// Assets
import ieeesb_logo_theme from "@/public/ieeesb_logo_theme.svg";
import ieeeCs from "@/public/ieee-cs-logo.webp";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const typeref = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const typed = new Typed(typeref.current, {
      strings: [
        "Innovate. Create. Conquer.",
        "Win Awesome Prizes",
        "7 March - 9 March",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      cursorChar: "_",
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] w-full flex flex-col justify-between bg-[#05010a] overflow-hidden"
    >
      {/* 1. Background Layer (Untouched logic, improved z-index) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <Antigravity count={80} magnetRadius={200} color="#9d50bb" autoAnimate particleShape="capsule" />
        <div className="absolute bottom-0 h-64 w-full bg-gradient-to-t from-[#05010a] to-transparent z-[1]" />
      </div>

      {/* 2. Top Navigation Spacer (Consistent height) */}
      <header className="relative z-20 h-20 md:h-28 flex-shrink-0" />

      {/* 3. Main Content (Center) */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            style={{ y, opacity }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">Applications Open</span>
            </motion.div>

            {/* Title Section - Scaled for 100vh - Responsive Typography */}
            <div className="relative mb-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter text-white flex flex-wrap justify-center">
                HACK<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">HUSTLE</span>
              </h1>
              {/* Year Badge - Responsive Positioning */}
              <div className="absolute -top-2 -right-4 md:-top-4 md:-right-10 rotate-12">
                <span className="bg-purple-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-purple-400/50 shadow-xl">
                  2025
                </span>
              </div>
            </div>

            {/* Subtitle - Responsive Text Size */}
            <div className="flex items-center gap-2 mb-8 text-blue-300/60 font-mono text-xs sm:text-sm md:text-lg h-6">
              <Terminal size={14} className="text-purple-500 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <span ref={typeref} />
            </div>

            {/* Countdown - Compacted & Scaled for Mobile */}
            <div className="w-full max-w-2xl mb-10 transform scale-75 sm:scale-90 md:scale-100 origin-center">
              <Countdown targetDate="2025-03-08T18:00:00Z" />
            </div>

            {/* CTA Buttons - Responsive Layout */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-8 sm:px-0">
              <Button size="lg" className="h-12 sm:h-14 px-8 rounded-xl bg-white text-black hover:bg-purple-600 hover:text-white transition-all font-bold group w-full sm:w-auto text-sm sm:text-base">
                Secure Your Spot <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 sm:h-14 px-8 rounded-xl border-white/10 bg-white/5 backdrop-blur-md text-white w-full sm:w-auto text-sm sm:text-base hover:bg-white/10">
                View Tracks
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Footer Meta & Logos (Bottom) - Responsive Layout */}
      <footer className="relative z-20 w-full p-4 sm:p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        {/* Left Side: Meta - Hidden on very small screens, shown on lg */}
        <div className="hidden lg:flex gap-8">
          {[
            { label: "Location", val: "Innovation Hub" },
            { label: "Prize", val: "$10k+" },
          ].map((item, i) => (
            <div key={i} className="border-l border-purple-500/30 pl-4">
              <p className="text-[9px] uppercase tracking-widest text-gray-500">{item.label}</p>
              <p className="text-xs font-mono text-white">{item.val}</p>
            </div>
          ))}
        </div>

        {/* Center/Right alignment for mobile: Logos */}
        <div className="flex items-center gap-4 sm:gap-6 px-4 py-2 sm:px-5 sm:py-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-xl scale-90 sm:scale-100">
          <Image src={ieeesb_logo_theme} alt="IEEE SB" className="h-5 sm:h-6 md:h-8 w-auto opacity-70" />
          <div className="h-3 sm:h-4 w-[1px] bg-white/10" />
          <Image src={ieeeCs} alt="IEEE CS" className="h-5 sm:h-6 md:h-8 w-auto opacity-70" />
        </div>
      </footer>
    </section>
  );
}