"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiLinkedin } from "react-icons/fi";

export default function Speaker() {
  return (
    <section
      id="speaker"
      className="relative py-32 bg-[#070b23] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[160px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tight">
            Featured Speaker
          </h2>
          <p className="text-sky-400 uppercase tracking-[0.4em] text-xs font-semibold">
            Inspiring Innovation
          </p>
        </div>

        {/* Speaker Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="
              relative rounded-3xl overflow-hidden
              bg-gradient-to-br from-[#11163a]/80 to-[#0e1335]/80
              backdrop-blur-xl
              border border-violet-400/20
              transition-all duration-500
              hover:shadow-[0_0_50px_rgba(139,92,246,0.3)]
            "
          >
            <div className="flex flex-col md:flex-row items-center">

              {/* Photo */}
              <div className="relative w-full md:w-1/3 h-80 md:h-[400px]">
                <Image
                  src="/speaker.jpg"  // Put image inside public folder
                  alt="Speaker"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-10 md:w-2/3 space-y-6">

                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Rishab Pan
                </h3>

                <p className="text-violet-400 uppercase tracking-widest text-sm">
                  NIT DGP Alumni • Industry Expert
                </p>

                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  A seasoned technology leader with extensive experience in
                  innovation, product development, and large-scale systems.
                  Bringing deep insights into real-world engineering and
                  entrepreneurship.
                </p>

                {/* LinkedIn Button */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="
                    inline-flex items-center gap-3
                    px-6 py-3
                    rounded-full
                    bg-gradient-to-r from-violet-500 to-sky-400
                    text-white font-semibold
                    transition-transform duration-300
                    hover:scale-105
                  "
                >
                  <FiLinkedin size={18} />
                  Connect on LinkedIn
                </a>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}