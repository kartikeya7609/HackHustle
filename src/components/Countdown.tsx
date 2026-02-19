"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null; // Prevent hydration mismatch

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-3xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="relative group">
          {/* Background Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />

          <div className="relative flex flex-col items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
            {/* Digit Container */}
            <div className="relative h-12 md:h-16 w-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={value}
                  initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-4xl md:text-5xl font-black text-white tabular-nums tracking-tighter"
                >
                  {value.toString().padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Label */}
            <span className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-400/80">
              {unit}
            </span>

            {/* Subtle Inner Glass Reflection */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 pointer-events-none" />
          </div>
        </div>
      ))}
    </div>
  );
}