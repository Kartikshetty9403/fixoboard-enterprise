// Home Page
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Droplets,
  Leaf,
  Flame,
  ArrowRight,
  Award,
  Zap,
  Globe,
  Factory,
  History as HistoryIcon,
  Microscope,
  HardHat,
  Compass,
  Hammer,
  FileDown,
  HeartPulse,
  CheckCircle2,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";
import { useTranslation } from "react-i18next";

const MotionDiv = motion.div as any;

const HomePage: React.FC = () => {
  const { t } = useTranslation("home");
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-brand-dark text-white">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518005020453-1bb7446ef47c?auto=format&fit=crop&q=80&w=2070"
            alt="Advanced Manufacturing"
            className="w-full h-full object-cover opacity-10"
          />
          {/* 
      Two-layer gradient:
      Left side is solid dark (text lives here)
      Right side fades to transparent (image shows through)
    */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40" />

          {/* Subtle blue accent glow — bottom left */}
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-brand-blue/10 blur-[120px] rounded-full" />
        </div>

        {/* Content — pt accounts for navbar (72px) + topbar (36px) */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-24">
          <div className="max-w-3xl">
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Badge — uses brand blue to introduce the red heading */}
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  {t("hero.badge")}
                </span>
              </div>

              {/* 
          Heading hierarchy:
          Line 1 — white, lighter weight = context
          Line 2 — brand-red, heavier = the hero statement
        */}
              <h1 className="font-display mb-6">
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-slate-300 leading-tight">
                  {t("hero.headingLine1")}
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-black text-brand-red leading-tight mt-1">
                  {t("hero.headingLine2")}
                </span>
              </h1>

              {/* Divider line — adds breathing room between heading and body */}
              <div className="w-16 h-[2px] bg-brand-blue mb-8 mt-2" />

              <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl font-normal">
                {t("hero.introPre")}{" "}
                <span className="text-white font-medium border-b border-brand-blue/60">
                  {t("hero.introHighlight")}
                </span>{" "}
                {t("hero.introPost")}
              </p>

              {/* 
          Two CTAs:
          Primary = solid brand-red (main action)
          Secondary = outlined ghost (secondary action)
        */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-brand-red/20 hover:scale-[1.02]"
                >
                  {t("hero.exploreCatalog")}
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-blue hover:text-brand-blue text-slate-300 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all"
                >
                  <FileDown size={16} />
                  {t("common:footer.downloadCatalogue")}
                </a>
              </div>

              {/* Trust signals — quick stats below CTAs */}
              <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
                {[
                  { value: "30+", labelKey: "hero.statYearsLabel" },
                  { value: "Limca", labelKey: "hero.statRecordsLabel" },
                  { value: "SGS", labelKey: "hero.statQualityLabel" },
                ].map((stat) => (
                  <div key={stat.labelKey}>
                    <span className="block text-2xl font-black text-white font-display">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-slate-500 uppercase tracking-widest font-medium">
                      {t(stat.labelKey)}
                    </span>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
            {t("hero.scroll")}
          </span>
          <div className="w-5 h-8 border border-slate-700 rounded-full flex justify-center pt-1.5">
            <div className="w-0.5 h-2 bg-brand-blue rounded-full" />
          </div>
        </div>
      </section>

      {/* 2. BRAND LEGACY & GLOBAL STRENGTH */}
      <section className="bg-white border-b border-slate-100">
        {/* 
    This is a "stats bar" layout — common on industrial/B2B sites.
    Instead of floating cards, we use a horizontal strip divided by borders.
    Much cleaner and takes less vertical space.
  */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-slate-100">
            {[
              {
                icon: <Globe size={20} />,
                stat: "30+",
                titleKey: "legacy.expertiseTitle",
                descKey: "legacy.expertiseDesc",
                color: "text-brand-blue",
                bg: "bg-brand-blue/5",
              },
              {
                icon: <Factory size={20} />,
                stat: "Silvassa",
                titleKey: "legacy.hubTitle",
                descKey: "legacy.hubDesc",
                color: "text-brand-red",
                bg: "bg-brand-red/5",
              },
              {
                icon: <HistoryIcon size={20} />,
                stat: "Limca",
                titleKey: "legacy.recordsTitle",
                descKey: "legacy.recordsDesc",
                color: "text-brand-blue",
                bg: "bg-brand-blue/5",
              },
              {
                icon: <Zap size={20} />,
                stat: "Dubai",
                titleKey: "legacy.globalTitle",
                descKey: "legacy.globalDesc",
                color: "text-brand-red",
                bg: "bg-brand-red/5",
              },
            ].map((item, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group flex flex-col gap-4 px-8 py-10 hover:bg-slate-50 transition-colors duration-200"
              >
                {/* Icon badge */}
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}
                >
                  {item.icon}
                </div>

                {/* Stat — the big number or word */}
                <div>
                  <span
                    className={`block text-2xl font-black font-display ${item.color} leading-none mb-1`}
                  >
                    {item.stat}
                  </span>
                  <span className="block text-sm font-bold text-slate-800">
                    {t(item.titleKey)}
                  </span>
                </div>

                {/* Description — normal case, readable weight */}
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {t(item.descKey)}
                </p>

                {/* Bottom accent line — appears on hover */}
                <div
                  className={`h-0.5 w-0 group-hover:w-8 ${item.color.replace("text-", "bg-")} transition-all duration-300 rounded-full`}
                />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MANUFACTURING EXCELLENCE & R&D */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background text — large faded word behind content */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-100 font-black text-[12rem] leading-none select-none pointer-events-none uppercase tracking-tighter hidden lg:block">
          R&D
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT — text content */}
            <MotionDiv
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  {t("rnd.label")}
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                {t("rnd.headingLine1")}
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-8">
                {t("rnd.headingLine2")}
              </h2>

              <div className="space-y-4 text-slate-500 leading-relaxed mb-10">
                <p>
                  {t("rnd.paragraph1Pre")}{" "}
                  <span className="text-slate-800 font-semibold">
                    {t("rnd.paragraph1Highlight")}
                  </span>
                  {t("rnd.paragraph1Post")}
                </p>
                <p>{t("rnd.paragraph2")}</p>
              </div>

              {/* 
          Stats row — three metrics side by side.
          Each one has: big colored number → small label below.
          The left border adds a visual anchor to each stat.
        */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  {
                    value: "30+",
                    labelKey: "rnd.statYearsLabel",
                    color: "border-brand-red",
                  },
                  {
                    value: "100%",
                    labelKey: "rnd.statQualityLabel",
                    color: "border-brand-blue",
                  },
                  {
                    value: "24/7",
                    labelKey: "rnd.statSupportLabel",
                    color: "border-brand-red",
                  },
                ].map((stat) => (
                  <div
                    key={stat.labelKey}
                    className={`border-l-2 ${stat.color} pl-4`}
                  >
                    <span className="block text-3xl font-black font-display text-slate-900 leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">
                      {t(stat.labelKey)}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-4 transition-all duration-200"
              >
                {t("rnd.ctaLearnFacility")}
                <ArrowRight size={15} />
              </Link>
            </MotionDiv>

            {/* RIGHT — image with floating card */}
            <MotionDiv
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                  alt="R&D Lab"
                  className="w-full h-[480px] object-cover"
                />
                {/* 
            Blue overlay on image — subtle tint that ties the 
            image to the brand without being heavy-handed
          */}
                <div className="absolute inset-0 bg-brand-blue/5" />
              </div>

              {/* 
          Floating info card — positioned bottom-left overlapping the image.
          Uses negative margin trick: -bottom-6 -left-6 pulls it outside
          the image boundary to create a layered depth effect.
        */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 max-w-[220px] hidden md:block">
                <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center mb-3">
                  <Microscope className="text-brand-red" size={20} />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  {t("rnd.floatingCardTitle")}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t("rnd.floatingCardDesc")}
                </p>
              </div>

              {/* 
          Second small badge — top-right corner of image.
          Gives the image area more visual interest.
        */}
              <div className="absolute -top-4 -right-4 bg-brand-blue text-white rounded-2xl px-5 py-3 shadow-lg hidden md:block">
                <span className="text-xs font-bold uppercase tracking-wider">
                  {t("rnd.sgsBadge")}
                </span>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 4. A STEP TOWARDS GREEN REVOLUTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle green tint in background — environmental feel without being loud */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-emerald-50/40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-emerald-500" />
            <span className="text-emerald-600 text-xs font-semibold uppercase tracking-[0.25em]">
              {t("green.label")}
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
                {t("green.headingLine1")} <br />
                <span className="text-emerald-600">
                  {t("green.headingLine2")}
                </span>
              </h2>
              <p className="text-slate-500 leading-relaxed">
                {t("green.intro")}
              </p>
            </div>
          </div>

          {/* 
      Main content grid:
      Left  = quote block + checklist + CTA
      Right = 3 stat cards stacked
    */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT — quote + checklist */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              {/* 
          Decorative leaf — large and faded, sits behind text.
          pointer-events-none means it doesn't block clicks.
          select-none means user can't accidentally select it.
        */}
              <div className="absolute -bottom-4 -right-4 text-emerald-100 pointer-events-none select-none">
                <Leaf size={160} strokeWidth={0.8} />
              </div>

              <div className="relative z-10">
                {/* Pull quote */}
                <div className="border-l-4 border-emerald-500 pl-5 mb-8">
                  <p className="text-lg font-semibold text-slate-800 leading-snug">
                    "{t("green.quote")}"
                  </p>
                </div>

                <div className="space-y-3 text-slate-500 leading-relaxed text-sm mb-8">
                  <p>{t("green.paragraph1")}</p>
                  <p>{t("green.paragraph2")}</p>
                </div>

                {/* Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "green.checklistEnvironment",
                    "green.checklistEmissions",
                    "green.checklistRecyclable",
                    "green.checklistNoHarvest",
                  ].map((itemKey) => (
                    <div key={itemKey} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-emerald-600" />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                        {t(itemKey)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 hover:scale-[1.02]"
                >
                  <Leaf size={15} />
                  {t("green.cta")}
                </Link>
              </div>
            </MotionDiv>

            {/* RIGHT — stat cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  value: "14%",
                  labelKey: "green.statDeforestationLabel",
                  subKey: "green.statDeforestationSub",
                  color: "text-brand-red",
                  border: "border-brand-red/20",
                  bg: "bg-brand-red/5",
                },
                {
                  value: "100%",
                  labelKey: "green.statRecyclableLabel",
                  subKey: "green.statRecyclableSub",
                  color: "text-emerald-600",
                  border: "border-emerald-200",
                  bg: "bg-emerald-50",
                },
                {
                  value: "Zero",
                  labelKey: "green.statEmissionsLabel",
                  subKey: "green.statEmissionsSub",
                  color: "text-brand-blue",
                  border: "border-brand-blue/20",
                  bg: "bg-brand-blue/5",
                },
              ].map((stat, idx) => (
                <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-center gap-6 p-6 rounded-2xl border ${stat.border} ${stat.bg} group hover:shadow-md transition-shadow`}
                >
                  {/* Big stat number */}
                  <span
                    className={`text-4xl font-black font-display ${stat.color} leading-none shrink-0 w-20`}
                  >
                    {stat.value}
                  </span>

                  {/* Divider */}
                  <div className="w-px h-12 bg-slate-200 shrink-0" />

                  {/* Label + description */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 mb-0.5">
                      {t(stat.labelKey)}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {t(stat.subKey)}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY FIXOBOARD? (VALUE PROPOSITION) */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  {t("why.label")}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                {t("why.headingPre")}{" "}
                <span className="text-brand-red">{t("why.headingBrand")}</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t("why.subheading")}
            </p>
          </div>

          {/* 
      Feature grid:
      Mobile  → 1 column (full width cards, easy to read)
      Tablet  → 2 columns
      Desktop → 4 columns
      
      Each card has:
      - Icon with colored background badge
      - Title
      - Description
      - Hover state flips to brand-red background
    */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Droplets size={20} />,
                titleKey: "why.weatherTitle",
                descKey: "why.weatherDesc",
                color: "bg-brand-blue/20 text-brand-blue",
              },
              {
                icon: <Flame size={20} />,
                titleKey: "why.fireTitle",
                descKey: "why.fireDesc",
                color: "bg-brand-red/20 text-brand-red",
              },
              {
                icon: <ShieldCheck size={20} />,
                titleKey: "why.termiteTitle",
                descKey: "why.termiteDesc",
                color: "bg-brand-blue/20 text-brand-blue",
              },
              {
                icon: <HeartPulse size={20} />,
                titleKey: "why.leadFreeTitle",
                descKey: "why.leadFreeDesc",
                color: "bg-brand-red/20 text-brand-red",
              },
              {
                icon: <Zap size={20} />,
                titleKey: "why.mouldableTitle",
                descKey: "why.mouldableDesc",
                color: "bg-brand-blue/20 text-brand-blue",
              },
              {
                icon: <Leaf size={20} />,
                titleKey: "why.recyclableTitle",
                descKey: "why.recyclableDesc",
                color: "bg-emerald-500/20 text-emerald-400",
              },
              {
                icon: <Award size={20} />,
                titleKey: "why.lifetimeTitle",
                descKey: "why.lifetimeDesc",
                color: "bg-brand-red/20 text-brand-red",
              },
              {
                icon: <CheckCircle2 size={20} />,
                titleKey: "why.hygienicTitle",
                descKey: "why.hygienicDesc",
                color: "bg-brand-blue/20 text-brand-blue",
              },
            ].map((feature, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                /*
            group — parent class that child elements react to on hover.
            When this div is hovered, any child with group-hover: classes
            will change their styles automatically.
          */
                className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-brand-red hover:border-brand-red transition-all duration-300 cursor-default"
              >
                {/* 
            Icon badge:
            - Normally shows colored background matching the feature type
            - On hover (group-hover) switches to white/20 so it works on red bg
          */}
                <div
                  className={`
            w-10 h-10 rounded-xl flex items-center justify-center mb-5
            ${feature.color}
            group-hover:bg-white/20 group-hover:text-white
            transition-colors duration-300
          `}
                >
                  {feature.icon}
                </div>

                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  {t(feature.titleKey)}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-red-100 transition-colors duration-300">
                  {t(feature.descKey)}
                </p>

                {/* 
            Bottom right index number — subtle card numbering.
            opacity-0 normally, fades in on hover.
            This is a design detail that adds polish.
          */}
                <span className="absolute bottom-4 right-5 text-[10px] font-black text-white/20 group-hover:text-white/40 transition-colors">
                  0{idx + 1}
                </span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEAD-FREE & INTERNATIONAL QUALITY */}
      <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT — visual stat block */}
            <MotionDiv
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center lg:justify-start"
            >
              {/* 
          Main stat card — dark background with red accent border on left.
          This replaces the circle which didn't scale well on mobile.
        */}
              <div className="relative bg-brand-dark rounded-3xl p-10 w-full max-w-sm">
                {/* Decorative blue glow behind card */}
                <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-1 h-16 bg-brand-red rounded-full shrink-0" />
                    <div>
                      <span className="block text-6xl font-black font-display text-white leading-none mb-1">
                        0%
                      </span>
                      <span className="text-xs text-brand-red font-bold uppercase tracking-widest">
                        Lead Content
                      </span>
                    </div>
                  </div>

                  {/* Three mini stats inside the card */}
                  <div className="space-y-3 border-t border-white/10 pt-6">
                    {[
                      { label: "SGS Laboratory Tested", dot: "bg-brand-blue" },
                      { label: "ISO 9001 Compliance", dot: "bg-brand-red" },
                      { label: "Lead-Free Certified", dot: "bg-emerald-500" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.dot}`}
                        />
                        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 
            Floating checkmark badge — top right corner.
            Positioned outside the card using absolute + negative offset.
          */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
                  <CheckCircle2 className="text-emerald-500" size={22} />
                </div>
              </div>
            </MotionDiv>

            {/* RIGHT — text content */}
            <MotionDiv
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  Certified Quality
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                Lead-Free &
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-6">
                International Quality.
              </h2>

              <p className="text-slate-500 leading-relaxed mb-8">
                Fixoboard PVC/WPC Ply is 100% lead-free and SGS Certified. Our
                thorough in-house testing ensures that every board meets
                international standards for safety, durability, and compliance —
                making it safe for homes, hospitals, and commercial spaces
                alike.
              </p>

              {/* 
          Certification pills — flex-wrap means they wrap to next line
          on small screens instead of overflowing.
        */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  {
                    label: "SGS Laboratory Tested",
                    color:
                      "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
                  },
                  {
                    label: "ISO 9001 Compliance",
                    color: "bg-brand-red/10 text-brand-red border-brand-red/20",
                  },
                  {
                    label: "Lead-Free Certified",
                    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  },
                ].map((pill) => (
                  <div
                    key={pill.label}
                    className={`px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${pill.color}`}
                  >
                    {pill.label}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-4 transition-all duration-200"
              >
                View all certifications
                <ArrowRight size={15} />
              </Link>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 7. PRODUCT FEATURES ENTRY POINT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header — label + title left, CTA button right */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Technical Data
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Product <span className="text-brand-blue">Features.</span>
              </h2>
            </div>

            {/*
        CTA sits right-aligned on desktop via justify-between on parent.
        On mobile it's below the title because flex-col stacks them.
        sm:self-end keeps it bottom-aligned with the title on desktop.
      */}
            <Link
              to="/products/features"
              className="sm:self-end inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-red text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-brand-red/20 hover:scale-[1.02] whitespace-nowrap"
            >
              View All Features
              <ArrowRight size={15} />
            </Link>
          </div>

          {/*
      Product card grid:
      Mobile  → 1 column
      Tablet  → 2 columns
      Desktop → 3 columns
      ProductCard handles its own hover/animation internally.
    */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* Mobile-only bottom CTA — on desktop the top CTA is enough */}
          <div className="mt-10 text-center sm:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
            >
              Browse all products
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. ARCHITECT'S CORNER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/*
      Full-width dark card — common pattern on industrial sites.
      The section's bg is white, the card inside is dark.
      This creates contrast without making the whole page dark.
    */}
          <div className="bg-brand-dark rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* LEFT — text content */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12 lg:p-16 flex flex-col justify-center"
              >
                {/* Section label */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-0.5 bg-brand-red" />
                  <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                    For Professionals
                  </span>
                </div>

                {/* Icon + heading */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Compass className="text-brand-red" size={24} />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight">
                    Architect's Corner.
                  </h2>
                </div>

                <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                  WPC is the definitive next-generation solution for architects.
                  It eliminates the structural and biological problems
                  associated with plywood — enabling quality portfolios that
                  last a lifetime.
                </p>

                {/*
            Feature list — replaces the 2x2 grid of cards.
            On mobile this is easier to read than a cramped 2-col grid.
            Each row has a colored dot, bold title, and muted description.
          */}
                <div className="space-y-4 mb-10">
                  {[
                    {
                      title: "Zero Warp",
                      desc: "Structural stability guaranteed",
                      color: "bg-brand-blue",
                    },
                    {
                      title: "Anti-Pest",
                      desc: "Full biological guard built-in",
                      color: "bg-brand-red",
                    },
                    {
                      title: "Moisture Proof",
                      desc: "Marine grade water resistance",
                      color: "bg-brand-blue",
                    },
                    {
                      title: "Fire Safe",
                      desc: "Class 1 certified, self-extinguishing",
                      color: "bg-emerald-500",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div
                        className={`w-2 h-2 rounded-full shrink-0 ${item.color}`}
                      />
                      <span className="text-sm font-bold text-white w-28 shrink-0">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-500">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/applications/kitchen"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20 w-fit"
                >
                  Explore Applications
                  <ArrowRight size={15} />
                </Link>
              </MotionDiv>

              {/*
          RIGHT — image panel.
          On mobile this stacks below the text.
          On desktop it fills the right half of the card.
          aspect-[4/3] gives it a fixed proportion on mobile.
          lg:aspect-auto + lg:min-h-full fills the full height on desktop.
        */}
              <MotionDiv
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative aspect-[4/3] lg:aspect-auto lg:min-h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800"
                  alt="Architecture and design"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/*
            Dark gradient overlay on image — left side fades to dark
            so the image blends into the text panel on desktop.
          */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-transparent to-transparent lg:block hidden" />
                <div className="absolute inset-0 bg-brand-blue/10" />

                {/* Floating badge over image */}
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Trusted by Architects
                  </span>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CARPENTER'S CORNER */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT — image */}
            <MotionDiv
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800"
                  alt="Carpentry Work"
                  className="w-full h-[420px] object-cover"
                />
                {/* Brand red tint overlay */}
                <div className="absolute inset-0 bg-brand-red/10" />
              </div>

              {/*
          Floating stat card — bottom right corner overlapping image.
          Same depth technique used in section 3.
        */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center">
                    <Hammer className="text-brand-red" size={18} />
                  </div>
                  <div>
                    <span className="block text-sm font-black text-slate-900">
                      Tool Compatible
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wide">
                      All standard hardware
                    </span>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* RIGHT — text content */}
            <MotionDiv
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  For Tradespeople
                </span>
              </div>

              {/* Icon + heading inline */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-dark rounded-2xl flex items-center justify-center shrink-0">
                  <Hammer className="text-white" size={22} />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  Carpenter's Corner.
                </h2>
              </div>

              <p className="text-slate-500 leading-relaxed mb-8">
                Revolutionizing the carpentry industry with materials designed
                for easy assembling, permanent bonding, and faster installation.
                Compatible with all traditional tools and hardware.
              </p>

              {/*
          2-col checklist grid.
          On mobile: grid-cols-1 so each item has full width.
          On sm+: grid-cols-2 for the two-column layout.
          Each item: colored icon circle + label text.
        */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  {
                    label: "High Screw Holding",
                    color: "bg-brand-red/10 text-brand-red",
                  },
                  {
                    label: "Standard Tools Compatible",
                    color: "bg-brand-blue/10 text-brand-blue",
                  },
                  {
                    label: "No Edge Banding Needs",
                    color: "bg-brand-red/10 text-brand-red",
                  },
                  {
                    label: "Faster Project Turnaround",
                    color: "bg-brand-blue/10 text-brand-blue",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100"
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}
                    >
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-red text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:scale-[1.02]"
              >
                Read Tech Guides
                <ArrowRight size={15} />
              </Link>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 10. CONTACT / INQUIRY SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            {/* LEFT — dark info panel */}
            <div className="bg-brand-dark p-8 md:p-12 flex flex-col justify-between">
              <div>
                {/* Label */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-6 h-0.5 bg-brand-red" />
                  <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                    Get In Touch
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                  Drop Us <span className="text-brand-red">a Line.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-10">
                  Our team responds within 24 hours. Reach out for product
                  queries, bulk orders, distributor inquiries, or technical
                  support.
                </p>

                {/* Contact details */}
                <div className="space-y-5 mb-10">
                  {[
                    {
                      icon: <Phone size={16} />,
                      label: "Call Us",
                      value: "+91 99303 49472",
                      href: "tel:+919930349472",
                      color: "bg-brand-red/10 text-brand-red",
                    },
                    {
                      icon: <Mail size={16} />,
                      label: "Email Us",
                      value: "info@fixoboard.com",
                      href: "mailto:info@fixoboard.com",
                      color: "bg-brand-blue/10 text-brand-blue",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Visit Us",
                      value: "Kandivali (West), Mumbai – 400067",
                      href: "#",
                      color: "bg-brand-red/10 text-brand-red",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <span className="block text-[11px] text-slate-500 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </span>
                        <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/*
          Bottom locations strip.
          border-t separates it from contact details above.
        */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-3">
                  Our Locations
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Mumbai", "Dubai", "Silvassa"].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-400 font-medium"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — form panel */}
            <div className="bg-white p-8 md:p-12">
              {formStatus === "success" ? (
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-emerald-600" size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900 mb-2">
                    Message Received!
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </MotionDiv>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-black text-slate-900 mb-1">
                      Send an Inquiry
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      Fill in the form and we'll get back to you.
                    </p>
                  </div>

                  {/*
              Input field styling pattern used consistently:
              - bg-slate-50 default background
              - border border-slate-200 subtle border
              - focus:ring-2 focus:ring-brand-blue blue ring on focus
              - rounded-xl consistent radius
              - outline-none removes browser default outline
            */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
