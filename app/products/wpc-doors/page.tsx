import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../../data/products";
import {
  DoorOpen,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const MotionDiv = motion.div as any;

const WPCDoorPage: React.FC = () => {
  const product = products.find((p) => p.slug === "wpc-doors")!;

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
                <span className="text-white">WPC Solid Doors</span>
              </div>

              {/* Section label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Industrial Products
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
                WPC Solid
              </h1>
              <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
                Doors.
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Plain WPC and CNC-designed doors that are moisture-resistant,
                warp-free, and termite proof. Maintenance-free aesthetic
                solution for modern architecture.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
                >
                  Get Quote <ArrowRight size={15} />
                </Link>
                <button className="inline-flex items-center gap-2 bg-white/10 border border-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all">
                  Catalogue
                </button>
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
                  src="https://images.unsplash.com/photo-1496060875531-64e305199ebf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="WPC Solid Doors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/20" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 hidden md:block">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand-blue" />
                  <span className="font-black text-slate-900 text-sm">
                    Warp-Free for Life
                  </span>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Left — Benefits */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  Technical Benefits
                </span>
              </div>

              <h2 className="font-display text-3xl font-black text-slate-900 leading-tight mb-2">
                Engineered to
              </h2>
              <h2 className="font-display text-3xl font-black text-brand-blue leading-tight mb-10">
                Last.
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Moisture & Damp Proof",
                    desc: "Ideal for bathrooms and balconies where traditional wood doors swell or rot.",
                  },
                  {
                    title: "Warp-Free Construction",
                    desc: "Solid extruded composite material ensures dimensions remain stable for decades.",
                  },
                  {
                    title: "Termite Proof",
                    desc: "Naturally resistant to all biological pests without chemical coating.",
                  },
                  {
                    title: "Design Flexibility",
                    desc: "Easily CNC-machined for decorative patterns or surface treatments.",
                  },
                ].map((item, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-brand-blue shrink-0 mt-0.5"
                    />
                    <div>
                      <h4 className="font-display font-black text-slate-900 mb-1 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* Right — Specifications */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-dark text-white rounded-2xl p-8"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Specifications
                </span>
              </div>

              <div className="space-y-5">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex justify-between border-b border-white/10 pb-4"
                  >
                    <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest">
                      {key}
                    </span>
                    <span className="text-white font-semibold text-sm">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Applications */}
              <div className="mt-8 bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-5">
                <span className="text-brand-blue text-[10px] font-semibold uppercase tracking-widest block mb-4">
                  Core Use Cases
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {product.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-slate-300 text-xs font-semibold"
                    >
                      <ChevronRight size={12} className="text-brand-blue" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
              >
                Request Pricing <ArrowRight size={15} />
              </Link>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WPCDoorPage;
