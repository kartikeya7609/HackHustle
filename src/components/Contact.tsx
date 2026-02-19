"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import BlurText from "@/components/BlurText";

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-[#05010a] overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <BlurText
                        text="Get In Touch"
                        delay={100}
                        animateBy="words"
                        direction="bottom"
                        className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter justify-center"
                    />
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Have a question about HackHustle? Reach out to our organizers.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
                    {/* 1. Info Cards (Left Side) */}
                    <div className="lg:col-span-2 space-y-6">
                        <ContactInfoCard
                            icon={<MapPin className="w-6 h-6" />}
                            title="Location"
                            details={["Mahatma Gandhi Rd, A-Zone", "NIT Durgapur, WB 713209"]}
                            delay={0.1}
                        />
                        <ContactInfoCard
                            icon={<Mail className="w-6 h-6" />}
                            title="Email"
                            details={["info@hackhustle.com", "support@hackhustle.com"]}
                            delay={0.2}
                        />
                        <ContactInfoCard
                            icon={<Phone className="w-6 h-6" />}
                            title="Phone"
                            details={["+91 9883862688", "+91 7376554328"]}
                            delay={0.3}
                        />
                    </div>

                    {/* 2. Advanced Form (Right Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 p-8 md:p-10 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <FloatingInput label="Name" type="text" placeholder="John Doe" />
                                <FloatingInput label="Email" type="email" placeholder="john@example.com" />
                            </div>
                            <FloatingInput label="Subject" type="text" placeholder="How can we help?" />
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-blue-400">Message</label>
                                <Textarea
                                    placeholder="Tell us everything..."
                                    className="min-h-[160px] bg-white/5 border-white/10 rounded-2xl focus:ring-purple-500 focus:border-purple-500 transition-all text-white placeholder:text-gray-600"
                                />
                            </div>
                            <Button className="w-full h-14 bg-white text-black hover:bg-purple-600 hover:text-white rounded-2xl font-bold text-lg transition-all group">
                                Send Message
                                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* --- Helper Components --- */

function ContactInfoCard({ icon, title, details, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
            className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all flex items-start gap-5"
        >
            <div className="p-4 rounded-2xl bg-purple-600/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg">
                {icon}
            </div>
            <div>
                <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                {details.map((line: string, i: number) => (
                    <p key={i} className="text-gray-400 text-sm">{line}</p>
                ))}
            </div>
        </motion.div>
    );
}

function FloatingInput({ label, ...props }: any) {
    return (
        <div className="space-y-2 flex flex-col">
            <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-400 ml-1">
                {label}
            </label>
            <Input
                {...props}
                className="h-12 bg-white/5 border-white/10 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition-all text-white placeholder:text-gray-600"
            />
        </div>
    );
}
