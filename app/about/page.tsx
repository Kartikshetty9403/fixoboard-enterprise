import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  History as HistoryIcon,
  Factory,
  Globe,
  Leaf,
  CheckCircle2,
  Eye,
  Target,
  Microscope,
  ShieldCheck,
  ChevronRight,
  Clock,
  Zap,
  // Added missing icons for the contact information block
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const MotionDiv = motion.div as any;

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative py-32 bg-brand-dark text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=2070"
            className="w-full h-full object-cover opacity-40"
            alt="Manufacturing facility"
          />
          {/* Gradient overlay so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-10">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <span className="text-white">About</span>
            </nav>

            {/* Section label — matches homepage pattern */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                About Fixoboard
              </span>
            </div>

            {/* Two-line heading */}
            <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-2">
              Three Decades of
            </h1>
            <h1 className="font-display text-4xl md:text-6xl font-black text-brand-red leading-tight mb-8">
              Industrial Excellence.
            </h1>

            {/* Subline */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mb-12">
              Operating under Atlantic Polymers Pvt. Ltd., Fixoboard has become
              India's benchmark for PVC and WPC building materials — engineered
              for professionals who demand lasting quality.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-3 rounded-full">
                <span className="font-display font-black text-white text-sm">
                  30+
                </span>
                <span className="text-slate-300 text-xs uppercase tracking-widest">
                  Years Legacy
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-3 rounded-full">
                <span className="font-display font-black text-brand-red text-sm">
                  Limca
                </span>
                <span className="text-slate-300 text-xs uppercase tracking-widest">
                  Record Holder
                </span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left — Text content */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Our Story
                </span>
              </div>

              {/* Two-line heading */}
              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                A Legacy of
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-8">
                Master Polymers.
              </h2>

              {/* Body text */}
              <div className="space-y-6 text-base text-slate-600 leading-relaxed">
                <p>
                  Operating under the umbrella of{" "}
                  <strong className="text-slate-900">
                    Atlantic Polymers Pvt. Ltd.
                  </strong>
                  , our brand{" "}
                  <strong className="text-brand-blue">Fixoboard</strong> has
                  become synonymous with industrial reliability. With over 30
                  years of history, we are one of India's largest producers and
                  indenting houses for PVC products.
                </p>
                <p>
                  Our inclusion in the{" "}
                  <strong className="text-slate-900 border-b-2 border-brand-red">
                    Limca Book of Indian Records
                  </strong>{" "}
                  stands as an official testament to our achievements in product
                  innovation. From our strategic branch in Dubai to our vast
                  national footprint, we provide global sourcing expertise at an
                  industrial scale.
                </p>
              </div>

              {/* Stats — left border pattern from design system */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-l-2 border-brand-red pl-4">
                  <span className="block text-3xl font-black font-display text-slate-900">
                    30+
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                    Years Industry Legacy
                  </span>
                </div>
                <div className="border-l-2 border-brand-blue pl-4">
                  <span className="block text-3xl font-black font-display text-slate-900">
                    Limca
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                    Record for Achievement
                  </span>
                </div>
              </div>
            </MotionDiv>

            {/* Right — Image grid */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Left column */}
                <div className="space-y-4">
                  <div className="h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                      className="w-full h-full object-cover"
                      alt="Legacy"
                    />
                  </div>
                  <div className="bg-brand-dark p-8 rounded-3xl text-white">
                    <HistoryIcon className="text-brand-red mb-4" size={32} />
                    <h4 className="font-display font-black text-sm mb-2">
                      Since 1994
                    </h4>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wide leading-relaxed">
                      Continuous evolution from polymer indenting to advanced
                      board manufacturing.
                    </p>
                  </div>
                </div>

                {/* Right column — pushed down for stagger effect */}
                <div className="space-y-4 pt-12">
                  <div className="bg-brand-blue p-8 rounded-3xl text-white shadow-xl shadow-brand-blue/20">
                    <Globe className="mb-4" size={32} />
                    <h4 className="font-display font-black text-sm mb-2">
                      Dubai Branch
                    </h4>
                    <p className="text-[11px] text-blue-100 uppercase tracking-wide leading-relaxed">
                      International sourcing and distribution hub connecting
                      global markets.
                    </p>
                  </div>
                  <div className="h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400"
                      alt="Dubai"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* MANUFACTURING & R&D SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
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
                Manufacturing & R&D
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Built at Industrial
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-blue leading-tight">
              Scale & Precision.
            </h2>
          </MotionDiv>

          {/* Capability cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: <Factory size={32} className="text-brand-blue" />,
                title: "Silvassa Facility",
                desc: "High-capacity extrusion plant employing cutting-edge technology for consistent board density and dimensional accuracy.",
              },
              {
                icon: <ShieldCheck size={32} className="text-brand-red" />,
                title: "International Quality",
                desc: "Every production batch adheres to rigorous international standards for thickness, density, and screw retention.",
              },
              {
                icon: <Clock size={32} className="text-brand-blue" />,
                title: "Uninterrupted Delivery",
                desc: "Time-bound schedules and robust logistics ensure your project stays on track without material delays.",
              },
            ].map((item, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="font-display font-black text-slate-900 text-lg mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </MotionDiv>
            ))}
          </div>

          {/* R&D — two column */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — image with floating badge */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-96 object-cover"
                  alt="R&D Laboratory"
                />
              </div>
              {/* Floating badge — depth effect */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                    <Microscope size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <span className="block font-display font-black text-slate-900 text-sm">
                      Active R&D
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                      Continuous Innovation
                    </span>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* Right — R&D content */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Research & Innovation
                </span>
              </div>
              <h3 className="font-display text-3xl font-black text-slate-900 leading-tight mb-2">
                Engineering
              </h3>
              <h3 className="font-display text-3xl font-black text-brand-red leading-tight mb-6">
                The Next Era.
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our dedicated R&D department continuously refines polymer
                composites to develop materials that exceed current industrial
                benchmarks. We don't just supply — we innovate based on
                real-world furniture industry feedback.
              </p>

              {/* Checklist */}
              <div className="space-y-4">
                {[
                  "Continuous product evolution",
                  "Client-centric customization",
                  "Advanced material synthesis",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                      <Zap size={11} className="text-brand-red" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display font-black text-white/[0.03] text-[20vw] uppercase leading-none">
            Vision
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Purpose & Direction
              </span>
              <div className="w-6 h-0.5 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-2">
              What Drives
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              Everything We Do.
            </h2>
          </MotionDiv>

          {/* Mission + Vision cards */}
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 mb-16">
            {/* Mission */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 lg:pr-16"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-8">
                <Target size={28} className="text-brand-red" />
              </div>
              <h3 className="font-display font-black text-white text-2xl mb-4">
                Our Mission
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                To manufacture and deliver world-class PVC and WPC building
                materials that empower architects, carpenters, and builders
                across India — with products that outlast, outperform, and
                out-value every traditional alternative.
              </p>
              <div className="space-y-3">
                {[
                  "Zero-compromise quality standards",
                  "Accessible to every market segment",
                  "Backed by 30+ years of expertise",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                    <span className="text-slate-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </MotionDiv>

            {/* Vision */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 lg:pl-16"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-8">
                <Eye size={28} className="text-brand-blue" />
              </div>
              <h3 className="font-display font-black text-white text-2xl mb-4">
                Our Vision
              </h3>
              <blockquote className="text-slate-300 leading-relaxed mb-6 border-l-2 border-brand-blue pl-4 italic">
                "To dominate the future by replacing every piece of traditional
                plywood, MDF, and particle board with a sustainable,
                industrial-grade composite that delivers{" "}
                <span className="text-brand-blue not-italic font-semibold">
                  lifetime value.
                </span>
                "
              </blockquote>
              <div className="space-y-3">
                {[
                  "Lead the plywood replacement market",
                  "Complete furniture solution provider",
                  "India's largest WPC producer",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                    <span className="text-slate-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>

          {/* Bottom pills */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "Lead Plywood Market",
              "Complete Furniture Solution",
              "Largest WPC Producer",
            ].map((pill, idx) => (
              <span
                key={idx}
                className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-[11px] font-semibold uppercase tracking-widest text-slate-300"
              >
                {pill}
              </span>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* MILESTONES TIMELINE SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Our Journey
              </span>
              <div className="w-6 h-0.5 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Three Decades of
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              Milestones.
            </h2>
          </MotionDiv>

          {/* Timeline */}
          <div className="relative">
            {/* Center spine line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2" />

            {/* Milestone items */}
            <div className="space-y-12">
              {[
                {
                  year: "1994",
                  title: "Founded in Mumbai",
                  desc: "Atlantic Polymers Pvt. Ltd. established in Mumbai as one of India's earliest polymer indenting houses, laying the foundation for three decades of excellence.",
                  color: "red" as const,
                },
                {
                  year: "2000",
                  title: "Silvassa Manufacturing",
                  desc: "Commissioned our state-of-the-art manufacturing facility in Silvassa — marking the shift from indenting to full-scale domestic production.",
                  color: "blue" as const,
                },
                {
                  year: "2008",
                  title: "Limca Book of Records",
                  desc: "Fixoboard entered the Limca Book of Indian Records for achievement in product innovation — a nationally recognised milestone in our industry.",
                  color: "red" as const,
                },
                {
                  year: "2012",
                  title: "Dubai Branch Opened",
                  desc: "Established an international presence with our Dubai branch, enabling global sourcing capabilities and access to international markets.",
                  color: "blue" as const,
                },
                {
                  year: "2018",
                  title: "SGS Certification",
                  desc: "Achieved SGS international quality certification — validating our manufacturing processes against the world's most rigorous industrial standards.",
                  color: "red" as const,
                },
                {
                  year: "2024",
                  title: "WPC Product Range Launch",
                  desc: "Expanded into the WPC segment with doors, door frames, and boards — completing Fixoboard's vision of a full building materials ecosystem.",
                  color: "blue" as const,
                },
              ].map((item, idx) => (
                <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex items-start gap-8 lg:gap-0"
                >
                  {/* Connector dot on the spine */}
                  <div
                    className={`absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-white z-10 mt-6 ${
                      item.color === "red"
                        ? "border-brand-red"
                        : "border-brand-blue"
                    }`}
                  />

                  {/* Mobile layout spacer */}
                  <div className="w-8 shrink-0 lg:hidden" />

                  {/* Card — alternates left/right on desktop */}
                  <div
                    className={`w-full lg:w-1/2 ${
                      idx % 2 === 0
                        ? "lg:pr-16 lg:text-right"
                        : "lg:pl-16 lg:ml-auto"
                    }`}
                  >
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                      {/* Year badge */}
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest mb-3 ${
                          item.color === "red"
                            ? "bg-brand-red/10 text-brand-red"
                            : "bg-brand-blue/10 text-brand-blue"
                        }`}
                      >
                        {item.year}
                      </span>
                      <h4 className="font-display font-black text-slate-900 text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GREEN REVOLUTION SECTION */}
      <section className="py-24 bg-green-50/30 overflow-hidden relative">
        {/* Decorative background text */}
        <div className="absolute -right-20 top-20 text-green-600/5 font-black text-[20vw] leading-none pointer-events-none uppercase select-none">
          Green
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left — text content */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-green-600" />
                <span className="text-green-600 text-xs font-semibold uppercase tracking-[0.25em]">
                  Green Revolution
                </span>
              </div>

              {/* Two-line heading */}
              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                Preservation
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-green-600 leading-tight mb-10">
                Through Engineering.
              </h2>

              {/* Two point blocks */}
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-green-600 shrink-0 border border-green-100">
                    <span className="font-display text-lg font-black">14%</span>
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-base mb-2">
                      The Deforestation Crisis
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Illegal logging contributes to 14% of global ecological
                      damage. Traditional plywood depends on harvesting these
                      vital resources.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl shadow-lg shadow-green-200 flex items-center justify-center text-white shrink-0">
                    <Leaf size={28} />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-base mb-2">
                      The Fixoboard Alternative
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Every board produced is 100% recyclable, zero-emission,
                      and does not harm a single tree. It is the definitive
                      sustainable choice.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12">
                <p className="font-display font-black text-2xl text-slate-900 mb-6">
                  Go Green with{" "}
                  <span className="text-green-600 underline decoration-green-300 underline-offset-4">
                    Fixoboard.
                  </span>
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-dark hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  Join the Movement <ArrowRight size={15} />
                </Link>
              </div>
            </MotionDiv>

            {/* Right — image with floating card */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-[500px] object-cover"
                  alt="Forest environment"
                />
              </div>

              {/* Floating card — depth effect */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-green-100 p-6 hidden md:block max-w-xs">
                <div className="flex items-center gap-2 text-green-600 font-semibold text-xs uppercase tracking-widest mb-3">
                  <CheckCircle2 size={14} />
                  100% Sustainable
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Zero emission production facility powered by ethical energy
                  standards at Silvassa.
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 8. PRODUCT QUICK LINKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] block mb-4 italic">
                Quick Navigation
              </span>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">
                Explore The Range.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "PVC / WPC Ply", path: "/products/pvc-wpc-ply" },
              { name: "WPC Door", path: "/products/wpc-doors" },
              { name: "Prelaminate Ply", path: "/products/prelaminate-ply" },
              { name: "WPC Door Frames", path: "/products/wpc-door-frames" },
              {
                name: "PVC Marble Sheets",
                path: "/products/pvc-marble-sheets",
              },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-blue-600 hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6 text-slate-400 group-hover:text-blue-600 transition-colors">
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
                <span className="font-black uppercase tracking-widest text-[10px] text-slate-500 group-hover:text-slate-900 transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT INFORMATION BLOCK */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">
                  Address
                </h4>
                <p className="text-slate-500 text-xs font-bold leading-relaxed uppercase">
                  Sejal Encasa, Office No. 4A, 4th Floor, S.V. Road, Kandivali
                  (West), Mumbai – 400067, MH, India.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">
                  Phone
                </h4>
                <a
                  href="tel:+919930349472"
                  className="block text-slate-500 text-xs font-bold uppercase hover:text-blue-600 transition-colors mb-1"
                >
                  +91 99303 49472
                </a>
                <a
                  href="tel:+919930349421"
                  className="block text-slate-500 text-xs font-bold uppercase hover:text-blue-600 transition-colors"
                >
                  +91 99303 49421
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">
                  Email
                </h4>
                <a
                  href="mailto:info@fixoboard.com"
                  className="block text-slate-500 text-xs font-bold uppercase hover:text-blue-600 transition-colors"
                >
                  info@fixoboard.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
