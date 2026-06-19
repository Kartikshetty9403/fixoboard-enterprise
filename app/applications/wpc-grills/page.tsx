import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Grid,
  CheckCircle2,
  Scissors,
  Paintbrush,
  ChevronRight,
} from "lucide-react";

const MotionDiv = motion.div as any;

const WPCGrillsApplicationPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-brand-dark text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2070"
          alt="WPC Grills"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mb-6">
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
              <span className="text-white">WPC Grills</span>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Decorative CNC Applications
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-2">
              WPC
            </h1>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-red leading-tight mb-6">
              Grills.
            </h1>

            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-10 mx-auto">
              Intricate CNC-cut decorative grills for interior partitions and
              exterior elevation treatments.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Precision CNC Cut",
                "UV Resistant",
                "Lightweight",
                "Direct Finishing",
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

      {/* SECTION 2: FEATURES + IMAGE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  Aesthetic Flexibility
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                Crafted with
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-10">
                Precision.
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Scissors size={20} className="text-brand-blue" />,
                    title: "Precision CNC Cutting",
                    desc: "Easily carve complex geometric or floral patterns with clean edges.",
                  },
                  {
                    icon: (
                      <CheckCircle2 size={20} className="text-brand-blue" />
                    ),
                    title: "Lightweight Structure",
                    desc: "Reduces load on mounting surfaces compared to metal or stone grills.",
                  },
                  {
                    icon: <Paintbrush size={20} className="text-brand-blue" />,
                    title: "Direct Finishing",
                    desc: "Smooth material ready for high-gloss PU paint or natural wood textures.",
                  },
                ].map((item, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-5 items-start"
                  >
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-slate-100 rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800"
                className="relative rounded-2xl w-full h-96 object-cover"
                alt="Decorative Grill"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 hidden md:block">
                <div className="border-l-2 border-brand-red pl-4">
                  <span className="block text-2xl font-black font-display text-slate-900">
                    CNC
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                    Precision Cut
                  </span>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERIOR + EXTERIOR SCOPE */}
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
                Interior & Exterior Scope
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Durable in All
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              Conditions.
            </h2>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Interior Partitions",
                desc: "Create airy, elegant dividers in living rooms or office lobbies that allow light while maintaining privacy.",
              },
              {
                title: "Exterior Elevation",
                desc: "UV-resistant WPC grills designed for duct coverings, balcony privacy screens, and modern architectural façades.",
              },
            ].map((card, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-10 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-0.5 bg-brand-red" />
                  <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                    {idx === 0 ? "Indoor" : "Outdoor"}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-slate-900 mb-4">
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

export default WPCGrillsApplicationPage;
