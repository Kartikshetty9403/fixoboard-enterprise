import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../../data/products";
import {
  ShieldCheck,
  DoorOpen,
  Palette,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const MotionDiv = motion.div as any;

const DoorsApplicationPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-brand-dark text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=2070"
          alt="Modern Door"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <Link
                to="/applications"
                className="hover:text-white transition-colors"
              >
                Applications
              </Link>
              <ChevronRight size={12} />
              <span className="text-white">Doors</span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Residential & Commercial Doors
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-2">
              Entrance
            </h1>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-red leading-tight mb-6">
              Excellence.
            </h1>

            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-10">
              Why settle for wooden doors that rot and warp? WPC doors offer
              lifetime durability with zero maintenance.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "100% Termite Proof",
                "Moisture Guard",
                "No Warping",
                "Zero Maintenance",
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider border bg-white/10 text-white border-white/20"
                >
                  {pill}
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* SECTION 2: BENEFITS + IMAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  Why WPC Doors
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                Total Protection
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-10">
                For Your Entries.
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "100% Termite Proof",
                    desc: "Solid WPC material is naturally repellent to all wood-eating pests.",
                  },
                  {
                    title: "Lifetime Moisture Guard",
                    desc: "Ideal for bathroom doors where water exposure is constant.",
                  },
                  {
                    title: "No Warping or Cracking",
                    desc: "Unlike natural wood, WPC remains dimensionally stable in all seasons.",
                  },
                ].map((benefit, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <ShieldCheck
                      size={20}
                      className="text-brand-blue shrink-0 mt-0.5"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

            {/* Staggered image grid — same pattern as About > Our Story */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=400"
                  className="w-full h-full object-cover"
                  alt="CNC Door"
                />
              </div>
              <div className="rounded-2xl aspect-[3/4] mt-12 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400"
                  className="w-full h-full object-cover"
                  alt="Decorative Finish"
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* SECTION 3: DESIGN OPTIONS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                Design Possibilities
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              From Minimalist
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              To Ornate.
            </h2>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DoorOpen size={24} className="text-brand-blue" />,
                title: "Plain WPC",
                desc: "Sleek, modern, and ready for lamination or paint.",
              },
              {
                icon: <Palette size={24} className="text-brand-blue" />,
                title: "CNC Designed",
                desc: "Deep routing for classical or abstract patterns.",
              },
              {
                icon: <ShieldCheck size={24} className="text-brand-blue" />,
                title: "Decorative Finishes",
                desc: "Industrial foil bonding for wood-like texture.",
              },
            ].map((card, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-display text-xl font-black text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoorsApplicationPage;
