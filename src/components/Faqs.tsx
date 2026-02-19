"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/public/faq";
import BlurText from "@/components/BlurText";

export default function Faqs() {
  return (
    <section id="faq" className="relative py-32 bg-[#05010a] overflow-hidden">
      {/* 1. Subtle Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* 2. Header with Text Reveal */}
        <div className="text-center mb-20 space-y-4">
          <BlurText
            text="Common Queries"
            className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic justify-center"
            animateBy="words"
            direction="bottom"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs"
          >
            Everything you need to know about HackHustle
          </motion.p>
        </div>

        {/* 3. High-End Glassmorphic Accordion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group relative bg-white/[0.02] border border-white/10 rounded-3xl px-8 py-2 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05] hover:border-purple-500/30 overflow-hidden"
              >
                {/* Neon Highlight on Hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-white py-6 hover:no-underline transition-colors group-data-[state=open]:text-purple-400">
                  <span className="flex items-center gap-4">
                    <span className="text-sm font-mono text-blue-500 opacity-50">0{index + 1}</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="text-gray-400 text-base md:text-lg leading-relaxed pb-8 pl-10 border-t border-white/5 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}