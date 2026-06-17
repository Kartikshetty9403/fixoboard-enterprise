import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Layers,
  CheckCircle2,
  Sparkles,
  Droplets,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

// WHY: motion.div as any — Framer Motion's TypeScript types sometimes
// conflict with React's. Casting to `any` bypasses that error safely.
const MotionDiv = motion.div as any;

const Panels3DApplicationPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* ============================================================
          SECTION 1: HERO
          - Uses `animate` (not whileInView) because it's already visible on load
          - Dark bg with image overlay — same pattern as About page hero
          - pt-32 pushes content below the fixed navbar
      ============================================================ */}
      <section className="relative min-h-[70vh] flex items-center bg-brand-dark text-white overflow-hidden">
        {/* Background image with overlay */}
        <img
          src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2070"
          alt="3D Wall Panels"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        {/* WHY this gradient: fades the image on the right so text on the left
            stays readable — same trick used in the About hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb — v3 doc pattern for dark hero pages */}
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
              <span className="text-white">3D Wall Panels</span>
            </div>

            {/* Section label — the short colored line + small caps text */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Decorative Wall Elevation
              </span>
            </div>

            {/* Two-line heading — white first line, red second line */}
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-2">
              3D Wall Panels
            </h1>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-red leading-tight mb-6">
              For Modern Interiors.
            </h1>

            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-10">
              Textured, moisture-resistant surfaces that add depth and luxury to
              modern interior wall treatments.
            </p>

            {/* Stat pills — quick trust signals in the hero */}
            <div className="flex flex-wrap gap-3">
              {[
                "Moisture Resistant",
                "Lead-Free",
                "Easy Installation",
                "Washable Surface",
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

      {/* ============================================================
          SECTION 2: FEATURES GRID
          - whileInView (not animate) because it's below the fold
          - stagger animation: each card delays by idx * 0.1
          - brand-blue for icons (alternates from red in hero)
      ============================================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered section label — used when content is center-aligned */}
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
                Why Choose 3D Panels
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Surface That Speaks
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              For Itself.
            </h2>
          </MotionDiv>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers size={24} className="text-brand-blue" />,
                title: "Rich Patterns",
                desc: "Available in wave, brick, and geometric textures that react beautifully to directional lighting.",
              },
              {
                icon: <Droplets size={24} className="text-brand-blue" />,
                title: "Moisture Resistant",
                desc: "Unlike gypsum or wood panels, FixoBoard will not rot or decay in humid environments.",
              },
              {
                icon: <Sparkles size={24} className="text-brand-blue" />,
                title: "Easy Maintenance",
                desc: "Washable surface that remains clean and hygienic for years without special treatment.",
              },
            ].map((card, idx) => (
              // WHY stagger: delay = idx * 0.1 means card 0 animates first,
              // card 1 starts 100ms later, card 2 starts 200ms later.
              // This creates a "cascade" effect that feels natural.
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon badge — brand-blue/10 background with brand-blue icon */}
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

      {/* ============================================================
          SECTION 3: DARK DETAILS SECTION
          - bg-brand-dark (not bg-slate-900 — brand token)
          - Left: checklist. Right: image in a clean frame.
          - CTA uses the primary red button pattern
      ============================================================ */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: text content */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Technical Advantages
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                Built for
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-8">
                Longevity.
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  "Compatible with PU paint and metallic finishes",
                  "Zero shrinkage ensures joint gaps remain invisible",
                  "Lightweight panels for fast wall installation",
                  "Non-toxic and Lead-Free for residential interiors",
                ].map((item, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex gap-4 items-start"
                  >
                    {/* WHY CheckCircle2: the "2" variant has a filled circle
                        which reads better on dark backgrounds */}
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

              {/* Primary CTA — red button, standard pattern */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
              >
                Download Pattern Catalog <ArrowRight size={15} />
              </Link>
            </MotionDiv>

            {/* Right: image */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              {/* WHY relative + the border div: this creates a "depth" effect —
                  the border offset behind the image gives it a layered look
                  without needing a drop shadow (which would look heavy) */}
              <div className="relative">
                <div className="absolute -inset-4 border border-white/10 rounded-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=600"
                  className="relative rounded-2xl w-full h-96 object-cover"
                  alt="3D Panel Sample"
                />
                {/* Floating stat card — the "depth effect" floating card pattern */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 hidden md:block">
                  <div className="border-l-2 border-brand-red pl-4">
                    <span className="block text-2xl font-black font-display text-slate-900">
                      12+
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                      Pattern Designs
                    </span>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Panels3DApplicationPage;
