import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../../data/products";
import { Zap, Package, ChevronRight, ArrowRight } from "lucide-react";

const MotionDiv = motion.div as any;

const PrelaminatePlyPage: React.FC = () => {
  const product = products.find((p) => p.slug === "prelaminate-ply")!;

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="bg-brand-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-6">
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight size={12} />
                <Link
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
                <ChevronRight size={12} />
                <span className="text-white">Prelaminate WPC Ply</span>
              </div>

              {/* Section label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Factory Finished Boards
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
                Prelaminate
              </h1>
              <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
                WPC Ply.
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Ready-to-use boards factory-laminated in multiple shades and
                textures. Eliminates the need for external lamination, saving
                time and labor cost.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <Zap size={14} className="text-brand-red" />
                  Ready-to-Use
                </div>
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <Package size={14} className="text-brand-red" />
                  Scratch Resistant
                </div>
              </div>
            </MotionDiv>

            {/* Image */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src={product.images[0]}
                  alt="Prelaminate WPC Ply"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/20" />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left — Why Choose */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  Key Benefits
                </span>
              </div>

              <h2 className="font-display text-3xl font-black text-slate-900 leading-tight mb-2">
                Why Choose
              </h2>
              <h2 className="font-display text-3xl font-black text-brand-blue leading-tight mb-10">
                Prelaminate?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Cost Efficiency",
                    desc: "Zero labor cost for lamination and zero raw material wastage.",
                  },
                  {
                    title: "Surface Durability",
                    desc: "High-pressure factory bonding ensures no edge delamination over time.",
                  },
                  {
                    title: "Design Consistency",
                    desc: "Uniform shades and patterns across multiple sheets for large projects.",
                  },
                  {
                    title: "Scratch Resistance",
                    desc: "Industrial-grade top coat protects against daily wear and tear.",
                  },
                ].map((item, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand-blue transition-all duration-200"
                  >
                    <div className="w-1 h-6 bg-brand-blue rounded-full mb-4" />
                    <h4 className="font-display font-black text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* Right — Technical Data */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-dark text-white rounded-2xl p-8 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Technical Data
                </span>
              </div>

              <div className="space-y-5 flex-grow">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="border-b border-white/10 pb-4">
                    <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest block mb-1">
                      {key}
                    </span>
                    <span className="text-white font-semibold text-sm">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
              >
                Request Shades <ArrowRight size={15} />
              </Link>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrelaminatePlyPage;
