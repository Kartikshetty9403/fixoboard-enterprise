import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../../data/products";
import ProductCard from "../../../components/product/ProductCard";
import { CheckCircle2, Bed, Bath, Hotel, ChevronRight } from "lucide-react";

const MotionDiv = motion.div as any;

const WardrobeApplicationPage: React.FC = () => {
  const recommended = products.filter((p) =>
    ["pvc-wpc-ply", "prelaminate-ply"].includes(p.slug),
  );

  return (
    <div className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-brand-dark text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=2070"
          alt="Wardrobe"
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
              <span className="text-white">Wardrobe</span>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Living & Commercial Storage
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-2">
              Wardrobes &
            </h1>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-red leading-tight mb-6">
              Cabinets.
            </h1>

            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-10 mx-auto">
              Stable, swell-proof, and aesthetic storage solutions for
              residential and high-traffic commercial projects.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "No Swelling",
                "Lead-Free",
                "High Screw Holding",
                "Clean Finishes",
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

      {/* SECTION 2: USE CASES GRID */}
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
                Where It's Used
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Storage for Every
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              Space.
            </h2>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bed size={24} className="text-brand-blue" />,
                title: "Bedrooms",
                desc: "Sleek, no-maintenance wardrobes that maintain structural integrity for life.",
              },
              {
                icon: <Bath size={24} className="text-brand-blue" />,
                title: "Bathrooms",
                desc: "Moisture-proof cabinets that will not swell or delaminate under damp conditions.",
              },
              {
                icon: <Hotel size={24} className="text-brand-blue" />,
                title: "Hotels",
                desc: "High-durability storage units designed for heavy use and long-term ROI.",
              },
            ].map((useCase, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                  {useCase.icon}
                </div>
                <h3 className="font-display text-xl font-black text-slate-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {useCase.desc}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY FIXOBOARD + PRODUCTS */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: checklist */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Why FixoBoard
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                Built to Last
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-10">
                A Lifetime.
              </h2>

              <div className="space-y-4">
                {[
                  "No Swelling: Impervious to ambient humidity and direct moisture.",
                  "Lead Free: Non-toxic storage for personal items and clothing.",
                  "High Screw Holding: Hinges and hardware remain secure after years of use.",
                  "Clean Finishes: Smooth factory-bonded prelaminated surfaces.",
                ].map((item, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex gap-4 items-start p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-brand-blue shrink-0 mt-0.5"
                    />
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

            {/* Right: product cards */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {recommended.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WardrobeApplicationPage;
