import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../../data/products";
import ProductCard from "../../../components/product/ProductCard";
import {
  Briefcase,
  CheckCircle2,
  Zap,
  ShieldAlert,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const MotionDiv = motion.div as any;

const OfficeApplicationPage: React.FC = () => {
  const officeProducts = products.filter((p) =>
    ["pvc-wpc-ply", "prelaminate-ply"].includes(p.slug),
  );

  return (
    <div className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-brand-dark text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070"
          alt="Office"
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
              <span className="text-white">Office</span>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Professional Workspaces
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-2">
              Office
            </h1>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-red leading-tight mb-6">
              Workstations.
            </h1>

            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-10 mx-auto">
              Modular partitions and workstations designed for acoustic
              performance and long-term durability.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Quick Install",
                "Noise Reduction",
                "Lead-Free",
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

      {/* SECTION 2: FEATURES + ADVANTAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: intro + mini cards */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  Corporate Standard
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                Modern Corporate
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-6">
                Standard.
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed mb-10">
                Fixoboard products are increasingly specified for corporate
                fit-outs due to their low maintenance and high dimensional
                stability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Zap size={20} className="text-brand-blue" />,
                    title: "Quick Install",
                    desc: "Easy routing and cutting for modular components.",
                  },
                  {
                    icon: <ShieldAlert size={20} className="text-brand-blue" />,
                    title: "Noise Reduction",
                    desc: "Dense composite material provides better acoustics than thin MDF.",
                  },
                ].map((item, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

            {/* Right: advantages checklist */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Key Advantages
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                Why Architects
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-8">
                Choose Fixoboard.
              </h2>

              <div className="space-y-4">
                {[
                  "Zero maintenance requirements.",
                  "High resistance to daily wear and tear.",
                  "Compatible with advanced cabling and routing.",
                  "Lead-free for a healthy work environment.",
                ].map((adv, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex gap-4 items-start p-5 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-brand-blue shrink-0 mt-0.5"
                    />
                    <span className="text-slate-700 text-sm leading-relaxed">
                      {adv}
                    </span>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* SECTION 3: SUGGESTED PRODUCTS */}
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
                Suggested Materials
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Best Boards for
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              Your Office.
            </h2>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {officeProducts.map((p, idx) => (
              <MotionDiv
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProductCard product={p} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeApplicationPage;
