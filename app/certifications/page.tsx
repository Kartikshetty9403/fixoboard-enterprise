import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  Zap,
  Flame,
  MoveUpRight,
  ChevronDown,
  Microscope,
  Thermometer,
  Activity,
  ArrowRight,
  Layers,
  Download,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const MotionDiv = motion.div as any;

const CertificationsPage: React.FC = () => {
  const [openTest, setOpenTest] = useState<number | null>(0);

  const trustCards = [
    {
      icon: <Activity />,
      title: "Mechanical Strength",
      desc: "High-load performance tested under extreme pressure.",
    },
    {
      icon: <Flame />,
      title: "Fire Safety",
      desc: "Self-extinguishing materials certified for safety.",
    },
    {
      icon: <Zap />,
      title: "Electrical Safety",
      desc: "Excellent dielectric strength for safe installations.",
    },
    {
      icon: <Thermometer />,
      title: "Thermal Stability",
      desc: "Maintains structural integrity in varying temperatures.",
    },
    {
      icon: <Layers />,
      title: "Structural Integrity",
      desc: "Superior density and bonding for long-term use.",
    },
  ];

  const testResults = [
    {
      title: "Impact Strength",
      test: "Charpy Notched Impact Strength Test",
      standard: "ASTM D6110-18",
      result: "16 J/m (Complete break)",
      explanation:
        "Demonstrates the board’s ability to withstand sudden impact without brittle failure, ensuring durability during installation and use.",
    },
    {
      title: "Heat Resistance",
      test: "Deflection Temperature Under Load",
      standard: "ASTM D648-18 (Method B)",
      result: "56.5°C",
      explanation:
        "Confirms thermal stability under load, making the product suitable for kitchens, interiors, and warm environments.",
    },
    {
      title: "Electrical Insulation",
      test: "Dielectric Breakdown Voltage & Strength",
      standard: "ASTM D149-09",
      result: "Voltage: 33.36 kV | Strength: 10.86 kV/mm",
      explanation:
        "Indicates strong electrical insulation properties, enhancing safety in residential and commercial installations.",
    },
    {
      title: "Flexural Properties",
      test: "Flexural Strength & Modulus",
      standard: "ASTM D790-17",
      result: "Strength: 14.5 MPa | Modulus: 1100 MPa",
      explanation:
        "Shows excellent load-bearing capacity and stiffness, ensuring structural reliability under bending stress.",
    },
    {
      title: "Fire Behavior",
      test: "Horizontal Burning Test",
      standard: "ASTM D635-14",
      result: "Rate: 0 mm/min | Classification: HB",
      explanation:
        "Confirms fire resistance and self-extinguishing behavior, significantly improving safety in interior applications.",
    },
    {
      title: "Falling Weight Impact",
      test: "Striker Impacted By A Falling Weight",
      standard: "ASTM D5420-16",
      result: "Mean Failure Energy: 5.9 J",
      explanation:
        "Demonstrates high resistance against sudden heavy impact loads, proving material toughness.",
    },
    {
      title: "Tensile Properties",
      test: "Tensile Modulus & Strength",
      standard: "ASTM D638-14",
      result: "Modulus: 1150 MPa | Strength: 10.5 MPa",
      explanation:
        "Confirms material flexibility and strength balance, preventing cracking and breakage during stress.",
    },
    {
      title: "Screw Withdrawal Resistance",
      test: "Resistance to Screw Withdrawal",
      standard: "ASTM D1037-12",
      result: "Screw Withdrawal Strength: 1027 N",
      explanation:
        "Ensures excellent screw-holding capacity, making the product highly reliable and carpenter-friendly.",
    },
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* 1. HERO SECTION */}
      <section className="bg-brand-dark pt-40 pb-32 relative overflow-hidden">
        {/* Background image overlay — standard pattern */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* animate, not whileInView — hero rule */}
            {/* Breadcrumb — centered */}
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <span className="text-white">Certifications</span>
            </div>

            {/* Section label — centered with lines on both sides */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                Quality Assurance
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>

            {/* Two-line heading — white + red */}
            <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
              Tested. Certified.
            </h1>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
              Trusted Worldwide.
            </h1>

            {/* Supporting paragraph */}
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Fixoboard PVC / WPC products are independently tested by globally
              recognized laboratories to ensure safety, durability, and
              international quality standards.
            </p>

            {/* Stat pills — SGS, ASTM, ISO */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "SGS Certified",
                "ASTM Standards",
                "ISO Compliant",
                "Lead-Free",
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider border bg-brand-blue/10 text-brand-blue border-brand-blue/20"
                >
                  {pill}
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* 2. CERTIFICATION OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header — centered */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                Compliance Overview
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Independently Tested.
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-blue leading-tight">
              Internationally Compliant.
            </h2>
          </div>

          {/* 5 trust cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustCards.map((card, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                  {React.cloneElement(card.icon as React.ReactElement<any>, {
                    size: 22,
                    className: "text-brand-blue",
                  })}
                </div>
                <h3 className="font-display font-black text-slate-900 text-sm mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED CERTIFICATE + ACCORDION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* LEFT — Sticky SGS card */}
            <div className="lg:col-span-1 lg:sticky lg:top-32">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-brand-dark text-white rounded-2xl p-8"
              >
                {/* Section label */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-0.5 bg-brand-blue" />
                  <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                    Primary Report
                  </span>
                </div>

                <h3 className="font-display text-2xl font-black text-white leading-tight mb-8">
                  SGS Test
                  <br />
                  <span className="text-brand-red">Report.</span>
                </h3>

                {/* Report details */}
                <div className="space-y-5 mb-8">
                  {[
                    { label: "Testing Agency", value: "SGS India Pvt. Ltd." },
                    { label: "Report No.", value: "MAN:HL:1048003979" },
                    { label: "Standard", value: "ASTM Standards" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="border-b border-white/10 pb-4"
                    >
                      <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest block mb-1">
                        {item.label}
                      </span>
                      <span className="text-white font-semibold text-sm">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200">
                  <Download size={15} />
                  View Full Report
                </button>
              </MotionDiv>
            </div>

            {/* RIGHT — Accordion */}
            <div className="lg:col-span-2">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-0.5 bg-brand-red" />
                  <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                    Test Results
                  </span>
                </div>
                <h2 className="font-display text-3xl font-black text-slate-900 leading-tight mb-2">
                  Key Performance
                </h2>
                <h2 className="font-display text-3xl font-black text-brand-red leading-tight mb-3">
                  Metrics.
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Independently verified laboratory results for FixoBoard
                  PVC/WPC Ply.
                </p>
              </MotionDiv>

              <div className="space-y-3">
                {testResults.map((item, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      openTest === idx
                        ? "bg-white border-brand-blue shadow-lg"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    {/* Accordion header */}
                    <button
                      onClick={() => setOpenTest(openTest === idx ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            openTest === idx
                              ? "bg-brand-blue text-white"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          <Microscope size={18} />
                        </div>
                        <div>
                          <h4
                            className={`font-display font-black text-sm ${
                              openTest === idx
                                ? "text-brand-blue"
                                : "text-slate-900"
                            }`}
                          >
                            {item.title}
                          </h4>
                          <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                            {item.standard}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openTest === idx
                            ? "rotate-180 text-brand-blue"
                            : "text-slate-300"
                        }`}
                      />
                    </button>

                    {/* Accordion body */}
                    <AnimatePresence>
                      {openTest === idx && (
                        <MotionDiv
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 pt-2 grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue mb-2">
                                Test Result
                              </span>
                              <p className="font-display font-black text-slate-900 text-lg leading-tight">
                                {item.result}
                              </p>
                            </div>
                            <div>
                              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                                What It Means
                              </span>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {item.explanation}
                              </p>
                            </div>
                          </div>
                        </MotionDiv>
                      )}
                    </AnimatePresence>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OTHER CERTIFICATES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                Additional Evidence
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Other Test
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-blue leading-tight">
              Certificates.
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Tensile Strength Report",
                body: "SGS India",
                type: "Mechanical",
              },
              {
                title: "Fire Safety (HB) Report",
                body: "ASTM Labs",
                type: "Safety",
              },
              {
                title: "Lead-Free Validation",
                body: "Third Party QC",
                type: "Health",
              },
              {
                title: "Screw Holding Capacity",
                body: "In-House QC",
                type: "Industrial",
              },
              {
                title: "Electrical Insulation",
                body: "SGS India",
                type: "Safety",
              },
              {
                title: "Heat Deflection (HDT)",
                body: "SGS Labs",
                type: "Thermal",
              },
            ].map((cert, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group p-8 bg-brand-dark rounded-2xl border-b border-white/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                    {cert.type}
                  </span>
                  <FileText
                    className="text-slate-600 group-hover:text-brand-blue transition-colors"
                    size={20}
                  />
                </div>
                <h4 className="font-display font-black text-white text-lg leading-tight mb-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-400 mb-8">
                  Verified by {cert.body}
                </p>
                <div className="flex items-center gap-4">
                  <button className="inline-flex items-center gap-2 text-brand-blue text-xs font-semibold hover:gap-3 transition-all duration-200">
                    View <ExternalLink size={13} />
                  </button>
                  <button className="inline-flex items-center gap-2 text-slate-400 text-xs font-semibold hover:text-white transition-colors">
                    PDF <Download size={13} />
                  </button>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CERTIFICATIONS MATTER */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header — centered */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Why It Matters
              </span>
              <div className="w-6 h-0.5 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-2">
              Why These Certifications
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              Matter.
            </h2>
          </div>

          {/* 4 benefit points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Safer Interiors",
                desc: "Lead-free and fire-resistant certifications ensure a healthy and safe environment for occupants.",
              },
              {
                title: "Longer Lifespan",
                desc: "Mechanical strength tests guarantee that the product won't warp, crack, or rot over decades.",
              },
              {
                title: "Architectural Trust",
                desc: "Standardized data allows architects to specify Fixoboard with scientific confidence.",
              },
              {
                title: "Global Compliance",
                desc: "Our ASTM and SGS testing ensures compatibility with international building codes and standards.",
              },
            ].map((item, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex gap-6 p-8 bg-white/5 rounded-2xl border border-white/10"
              >
                <CheckCircle2
                  className="text-brand-red shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="font-display font-black text-white text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-dark rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
          >
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full" />

            <div className="relative z-10">
              {/* Label */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Get Started
                </span>
                <div className="w-6 h-0.5 bg-brand-red" />
              </div>

              {/* Heading */}
              <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                Ready for Certified,
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-6">
                Future-Ready Materials?
              </h2>

              <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed mb-10">
                Download our full test reports or speak directly with our
                technical team to specify Fixoboard with confidence.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
                >
                  Contact Technical Team <ArrowRight size={15} />
                </Link>
                <button className="inline-flex items-center gap-2 bg-white/10 border border-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all">
                  <Download size={15} />
                  Download All Certificates
                </button>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
