import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../../data/products";
import ProductCard from "../../../components/product/ProductCard";
import {
  CheckCircle2,
  Droplets,
  ThermometerSun,
  ShieldCheck,
  ChefHat,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const MotionDiv = motion.div as any;

const KitchenApplicationPage: React.FC = () => {
  const recommendedSlugs = ["pvc-wpc-ply", "prelaminate-ply"];
  const recommendedProducts = products.filter((p) =>
    recommendedSlugs.includes(p.slug),
  );

  const swatches = [
    { name: "Pure White", color: "#FFFFFF" },
    { name: "Sleek Grey", color: "#94A3B8" },
    { name: "Modern Oak", color: "#B5A08A" },
    { name: "Ebony Matt", color: "#1E293B" },
  ];

  return (
    <div className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-brand-dark text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070"
          alt="Modern Kitchen"
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
              <span className="text-white">Kitchen</span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Modular Kitchen & Storage
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-2">
              Kitchen
            </h1>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-red leading-tight mb-6">
              Excellence.
            </h1>

            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-10">
              Industrial grade boards designed to withstand moisture, heat, and
              high-frequency usage typical in modern modular kitchen systems.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Moisture Resistant",
                "Heat Tolerant",
                "Hygienic Surface",
                "Anti-Bacterial",
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

      {/* SECTION 2: FEATURES GRID */}
      <section className="py-24 bg-white">
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
                Built for Kitchens
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Engineered for
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              Harsh Conditions.
            </h2>
          </MotionDiv>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets size={24} className="text-brand-blue" />,
                title: "Moisture Resistance",
                desc: "Impervious to steam and water exposure near sinks and appliances.",
              },
              {
                icon: <ShieldCheck size={24} className="text-brand-blue" />,
                title: "Hygienic Finish",
                desc: "Anti-bacterial surface that prevents fungal growth in humid cabinets.",
              },
              {
                icon: <ThermometerSun size={24} className="text-brand-blue" />,
                title: "Heat Tolerance",
                desc: "Stable under ambient kitchen temperatures near ovens and hobs.",
              },
            ].map((card, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group"
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

      {/* SECTION 3: RECOMMENDED PRODUCTS + SWATCHES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left: recommended products */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Recommended Products
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                Best Boards for
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-10">
                Your Kitchen.
              </h2>
              <div className="space-y-6">
                {recommendedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </MotionDiv>

            {/* Right: swatches card */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  Visual Shade Options
                </span>
              </div>
              <h3 className="font-display text-2xl font-black text-slate-900 mb-2">
                Finish Palette
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                For Prelaminate Ply and factory finishes, choose from our
                high-gloss and matt palettes.
              </p>

              <div className="grid grid-cols-2 gap-5 mb-8">
                {swatches.map((s, idx) => (
                  <div key={idx} className="space-y-2">
                    <div
                      className="w-full h-20 rounded-xl border border-slate-200"
                      style={{ backgroundColor: s.color }}
                    />
                    <span className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Secondary CTA button — dark bg, hovers to brand-red */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-red text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg w-full justify-center"
              >
                Request Swatch Catalog <ArrowRight size={15} />
              </Link>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenApplicationPage;
