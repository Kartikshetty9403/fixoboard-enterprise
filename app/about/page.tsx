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
import { useTranslation, Trans } from "react-i18next";

const MotionDiv = motion.div as any;

const AboutPage: React.FC = () => {
  const { t } = useTranslation("about");
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
                {t("common:nav.home")}
              </Link>
              <ChevronRight size={12} />
              <span className="text-white">{t("hero.breadcrumb")}</span>
            </nav>

            {/* Section label — matches homepage pattern */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                {t("hero.label")}
              </span>
            </div>

            {/* Two-line heading */}
            <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-2">
              {t("hero.headingLine1")}
            </h1>
            <h1 className="font-display text-4xl md:text-6xl font-black text-brand-red leading-tight mb-8">
              {t("hero.headingLine2")}
            </h1>

            {/* Subline */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mb-12">
              {t("hero.subline")}
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-3 rounded-full">
                <span className="font-display font-black text-white text-sm">
                  30+
                </span>
                <span className="text-slate-300 text-xs uppercase tracking-widest">
                  {t("hero.pillYearsLabel")}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-3 rounded-full">
                <span className="font-display font-black text-brand-red text-sm">
                  Limca
                </span>
                <span className="text-slate-300 text-xs uppercase tracking-widest">
                  {t("hero.pillRecordLabel")}
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
                  {t("story.label")}
                </span>
              </div>

              {/* Two-line heading */}
              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                {t("story.headingLine1")}
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-8">
                {t("story.headingLine2")}
              </h2>

              {/* Body text */}
              <div className="space-y-6 text-base text-slate-600 leading-relaxed">
                <p>
                  <Trans
                    i18nKey="story.paragraph1"
                    components={{
                      strong1: <strong className="text-slate-900" />,
                      strong2: <strong className="text-brand-blue" />,
                    }}
                  />
                </p>
                <p>
                  <Trans
                    i18nKey="story.paragraph2"
                    components={{
                      strong: (
                        <strong className="text-slate-900 border-b-2 border-brand-red" />
                      ),
                    }}
                  />
                </p>
              </div>

              {/* Stats — left border pattern from design system */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-l-2 border-brand-red pl-4">
                  <span className="block text-3xl font-black font-display text-slate-900">
                    30+
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                    {t("story.stat1Label")}
                  </span>
                </div>
                <div className="border-l-2 border-brand-blue pl-4">
                  <span className="block text-3xl font-black font-display text-slate-900">
                    Limca
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                    {t("story.stat2Label")}
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
                      {t("story.since1994Title")}
                    </h4>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wide leading-relaxed">
                      {t("story.since1994Desc")}
                    </p>
                  </div>
                </div>

                {/* Right column — pushed down for stagger effect */}
                <div className="space-y-4 pt-12">
                  <div className="bg-brand-blue p-8 rounded-3xl text-white shadow-xl shadow-brand-blue/20">
                    <Globe className="mb-4" size={32} />
                    <h4 className="font-display font-black text-sm mb-2">
                      {t("story.dubaiTitle")}
                    </h4>
                    <p className="text-[11px] text-blue-100 uppercase tracking-wide leading-relaxed">
                      {t("story.dubaiDesc")}
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
                {t("manufacturing.label")}
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              {t("manufacturing.headingLine1")}
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-blue leading-tight">
              {t("manufacturing.headingLine2")}
            </h2>
          </MotionDiv>

          {/* Capability cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                key: "silvassa",
                icon: <Factory size={32} className="text-brand-blue" />,
                titleKey: "manufacturing.capability.silvassaTitle",
                descKey: "manufacturing.capability.silvassaDesc",
              },
              {
                key: "quality",
                icon: <ShieldCheck size={32} className="text-brand-red" />,
                titleKey: "manufacturing.capability.qualityTitle",
                descKey: "manufacturing.capability.qualityDesc",
              },
              {
                key: "delivery",
                icon: <Clock size={32} className="text-brand-blue" />,
                titleKey: "manufacturing.capability.deliveryTitle",
                descKey: "manufacturing.capability.deliveryDesc",
              },
            ].map((item, idx) => (
              <MotionDiv
                key={item.key}
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
                  {t(item.titleKey)}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t(item.descKey)}
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
                      {t("manufacturing.rnd.badgeTitle")}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                      {t("manufacturing.rnd.badgeSub")}
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
                  {t("manufacturing.rnd.label")}
                </span>
              </div>
              <h3 className="font-display text-3xl font-black text-slate-900 leading-tight mb-2">
                {t("manufacturing.rnd.headingLine1")}
              </h3>
              <h3 className="font-display text-3xl font-black text-brand-red leading-tight mb-6">
                {t("manufacturing.rnd.headingLine2")}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {t("manufacturing.rnd.paragraph")}
              </p>

              {/* Checklist */}
              <div className="space-y-4">
                {[
                  {
                    key: "evolution",
                    labelKey: "manufacturing.rnd.checklist1",
                  },
                  {
                    key: "customization",
                    labelKey: "manufacturing.rnd.checklist2",
                  },
                  {
                    key: "synthesis",
                    labelKey: "manufacturing.rnd.checklist3",
                  },
                ].map((item) => (
                  <div key={item.key} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                      <Zap size={11} className="text-brand-red" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {t(item.labelKey)}
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
                {t("mission.label")}
              </span>
              <div className="w-6 h-0.5 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-2">
              {t("mission.headingLine1")}
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              {t("mission.headingLine2")}
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
                {t("mission.missionTitle")}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t("mission.missionParagraph")}
              </p>
              <div className="space-y-3">
                {[
                  { key: "quality", labelKey: "mission.missionPoint1" },
                  { key: "accessible", labelKey: "mission.missionPoint2" },
                  { key: "experience", labelKey: "mission.missionPoint3" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                    <span className="text-slate-400 text-sm">
                      {t(item.labelKey)}
                    </span>
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
                {t("mission.visionTitle")}
              </h3>
              <blockquote className="text-slate-300 leading-relaxed mb-6 border-l-2 border-brand-blue pl-4 italic">
                "
                <Trans
                  i18nKey="mission.visionQuote"
                  components={{
                    em: (
                      <span className="text-brand-blue not-italic font-semibold" />
                    ),
                  }}
                />
                "
              </blockquote>
              <div className="space-y-3">
                {[
                  { key: "leadMarket", labelKey: "mission.visionPoint1" },
                  { key: "fullSolution", labelKey: "mission.visionPoint2" },
                  { key: "largestProducer", labelKey: "mission.visionPoint3" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                    <span className="text-slate-400 text-sm">
                      {t(item.labelKey)}
                    </span>
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
              { key: "leadMarket", labelKey: "mission.pill1" },
              { key: "fullSolution", labelKey: "mission.pill2" },
              { key: "largestProducer", labelKey: "mission.pill3" },
            ].map((pill) => (
              <span
                key={pill.key}
                className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-[11px] font-semibold uppercase tracking-widest text-slate-300"
              >
                {t(pill.labelKey)}
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
                {t("milestones.label")}
              </span>
              <div className="w-6 h-0.5 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              {t("milestones.headingLine1")}
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              {t("milestones.headingLine2")}
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
                  key: "founded",
                  year: "1994",
                  titleKey: "milestones.founded.title",
                  descKey: "milestones.founded.desc",
                  color: "red" as const,
                },
                {
                  key: "silvassa",
                  year: "2000",
                  titleKey: "milestones.silvassa.title",
                  descKey: "milestones.silvassa.desc",
                  color: "blue" as const,
                },
                {
                  key: "limca",
                  year: "2008",
                  titleKey: "milestones.limca.title",
                  descKey: "milestones.limca.desc",
                  color: "red" as const,
                },
                {
                  key: "dubai",
                  year: "2012",
                  titleKey: "milestones.dubai.title",
                  descKey: "milestones.dubai.desc",
                  color: "blue" as const,
                },
                {
                  key: "sgs",
                  year: "2018",
                  titleKey: "milestones.sgs.title",
                  descKey: "milestones.sgs.desc",
                  color: "red" as const,
                },
                {
                  key: "wpc",
                  year: "2024",
                  titleKey: "milestones.wpc.title",
                  descKey: "milestones.wpc.desc",
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
                        {t(item.titleKey)}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {t(item.descKey)}
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
                  {t("green.label")}
                </span>
              </div>

              {/* Two-line heading */}
              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                {t("green.headingLine1")}
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-green-600 leading-tight mb-10">
                {t("green.headingLine2")}
              </h2>

              {/* Two point blocks */}
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-green-600 shrink-0 border border-green-100">
                    <span className="font-display text-lg font-black">14%</span>
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-base mb-2">
                      {t("green.crisisTitle")}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t("green.crisisDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl shadow-lg shadow-green-200 flex items-center justify-center text-white shrink-0">
                    <Leaf size={28} />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-base mb-2">
                      {t("green.alternativeTitle")}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t("green.alternativeDesc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12">
                <p className="font-display font-black text-2xl text-slate-900 mb-6">
                  <Trans
                    i18nKey="green.ctaText"
                    components={{
                      brand: (
                        <span className="text-green-600 underline decoration-green-300 underline-offset-4" />
                      ),
                    }}
                  />
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-dark hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  {t("green.ctaButton")} <ArrowRight size={15} />
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
                  {t("green.badgeLabel")}
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {t("green.badgeDesc")}
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA + PRODUCT LINKS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA Band */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-dark rounded-3xl px-10 py-16 mb-16 relative overflow-hidden"
          >
            {/* Decorative background text */}
            <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none">
              <span className="font-display font-black text-white/[0.03] text-[12vw] uppercase leading-none pr-8">
                Fixoboard
              </span>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-0.5 bg-brand-red" />
                  <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                    {t("ctaBand.label")}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                  {t("ctaBand.headingLine1")}
                </h2>
                <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
                  {t("ctaBand.headingLine2")}
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
                >
                  {t("ctaBand.quoteButton")} <ArrowRight size={15} />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200"
                >
                  {t("ctaBand.productsButton")} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </MotionDiv>

          {/* Product quick links */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                {t("ctaBand.navLabel")}
              </span>
            </div>
            <h3 className="font-display text-2xl font-black text-slate-900 mb-8">
              {t("ctaBand.navHeading")}
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  key: "pvcWpcPly",
                  labelKey: "ctaBand.linkPvcWpcPly",
                  path: "/products/pvc-wpc-ply",
                },
                {
                  key: "wpcDoor",
                  labelKey: "ctaBand.linkWpcDoor",
                  path: "/products/wpc-doors",
                },
                {
                  key: "prelaminatePly",
                  labelKey: "ctaBand.linkPrelaminatePly",
                  path: "/products/prelaminate-ply",
                },
                {
                  key: "wpcDoorFrames",
                  labelKey: "ctaBand.linkWpcDoorFrames",
                  path: "/products/wpc-door-frames",
                },
                {
                  key: "pvcMarbleSheets",
                  labelKey: "ctaBand.linkPvcMarbleSheets",
                  path: "/products/pvc-marble-sheets",
                },
              ].map((link, idx) => (
                <MotionDiv
                  key={link.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="group flex flex-col p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-brand-blue hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 text-slate-300 group-hover:text-brand-blue transition-colors shadow-sm">
                      <ChevronRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </div>
                    <span className="font-display font-black text-xs text-slate-500 group-hover:text-slate-900 transition-colors leading-snug">
                      {t(link.labelKey)}
                    </span>
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                {t("contactInfo.label")}
              </span>
            </div>
            <h2 className="font-display text-2xl font-black text-slate-900">
              {t("contactInfo.heading")}
            </h2>
          </MotionDiv>

          {/* Contact items */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                key: "address",
                icon: <MapPin size={22} />,
                labelKey: "contactInfo.addressLabel",
                content: (
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Sejal Encasa, Office No. 4A, 4th Floor,
                    <br />
                    S.V. Road, Kandivali (West),
                    <br />
                    Mumbai – 400067, MH, India.
                  </p>
                ),
              },
              {
                key: "phone",
                icon: <Phone size={22} />,
                labelKey: "contactInfo.phoneLabel",
                content: (
                  <div className="space-y-1">
                    <a
                      href="tel:+919930349472"
                      className="block text-slate-500 text-sm hover:text-brand-blue transition-colors"
                    >
                      +91 99303 49472
                    </a>

                    <a
                      href="tel:+919930349421"
                      className="block text-slate-500 text-sm hover:text-brand-blue transition-colors"
                    >
                      +91 99303 49421
                    </a>
                  </div>
                ),
              },
              {
                key: "email",
                icon: <Mail size={22} />,
                labelKey: "contactInfo.emailLabel",
                content: (
                  <a
                    href="mailto:info@fixoboard.com"
                    className="text-slate-500 text-sm hover:text-brand-blue transition-colors"
                  >
                    info@fixoboard.com
                  </a>
                ),
              },
            ].map((item, idx) => (
              <MotionDiv
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex gap-5"
              >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-blue shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-black text-slate-900 text-sm mb-2">
                    {t(item.labelKey)}
                  </h4>
                  {item.content}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
