"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { features } from '../public/features';
import BlurText from "@/components/BlurText";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  // Improved Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smoother parallax for the background atmosphere
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1.2]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 md:py-40 bg-[#05010a] z-20 overflow-hidden" // Higher Z-index to prevent Hero bleed
    >
      {/* 1. Dynamic Background Atmosphere */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, #9d50bb 0%, transparent 70%)",
          scale: backgroundScale,
          opacity: backgroundOpacity,
        }}
      />

      {/* Subtle Grid overlay to maintain consistency with Hero */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* 2. Header with Text Reveal */}
        <div className="text-center mb-20 md:mb-32">
          <BlurText
            text="The Spirit of HackHustle"
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 justify-center"
            animateBy="words"
            direction="bottom"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-2xl font-light leading-relaxed">
              HackHustle isn't just a competition; it's a <span className="text-white font-medium">24-hour reality distortion field</span> where the brightest minds converge to build the future.
            </p>
          </motion.div>
        </div>

        {/* 3. Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Spotlight Position
  const mouseX = useSpring(0, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 30 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group relative p-10 rounded-[32px] bg-white/[0.01] border border-white/5 backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-purple-500/40"
    >
      {/* Dynamic Spotlight Glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.12), transparent 80%)`
          ),
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-8 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-500 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          <feature.icon className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
          {feature.title}
        </h3>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
          {feature.description}
        </p>
      </div>

      {/* Index Badge */}
      <div className="absolute bottom-6 right-8">
        <span className="font-mono text-[10px] font-black text-white/10 group-hover:text-purple-500/40 transition-colors tracking-widest uppercase">
          Module_0{index + 1}
        </span>
      </div>
    </motion.div>
  );
}