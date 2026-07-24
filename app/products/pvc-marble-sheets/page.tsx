import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { products } from "../../../data/products";
import {
  Palette,
  HeartPulse,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const MotionDiv = motion.div as any;

const benefitItems = [
  {
    key: "lightweight",
    titleKey: "pvcMarbleSheets.benefits.items.lightweight.title",
    descKey: "pvcMarbleSheets.benefits.items.lightweight.desc",
  },
  {
    key: "hygienic",
    titleKey: "pvcMarbleSheets.benefits.items.hygienic.title",
    descKey: "pvcMarbleSheets.benefits.items.hygienic.desc",
  },
  {
    key: "quickInstall",
    titleKey: "pvcMarbleSheets.benefits.items.quickInstall.title",
    descKey: "pvcMarbleSheets.benefits.items.quickInstall.desc",
  },
  {
    key: "waterproof",
    titleKey: "pvcMarbleSheets.benefits.items.waterproof.title",
    descKey: "pvcMarbleSheets.benefits.items.waterproof.desc",
  },
];

const PVCMarbleSheetPage: React.FC = () => {
  const { t } = useTranslation("products");
  const product = products.find((p) => p.slug === "pvc-marble-sheets")!;

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
                  {t("shared.breadcrumb.home")}
                </Link>
                <ChevronRight size={12} />
                <Link
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  {t("shared.breadcrumb.products")}
                </Link>
                <ChevronRight size={12} />
                <span className="text-white">
                  {t("pvcMarbleSheets.breadcrumbCurrent")}
                </span>
              </div>

              {/* Section label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  {t("pvcMarbleSheets.sectionLabel")}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
                {t("pvcMarbleSheets.headingLine1")}
              </h1>
              <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
                {t("pvcMarbleSheets.headingLine2")}
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                {t("pvcMarbleSheets.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <Palette size={14} className="text-brand-red" />
                  {t("pvcMarbleSheets.tags.marbleAesthetics")}
                </div>
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <HeartPulse size={14} className="text-brand-red" />
                  {t("pvcMarbleSheets.tags.hygienicFinish")}
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
                  alt="PVC Marble Sheets"
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
            {/* Left — Benefits */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  {t("pvcMarbleSheets.benefits.label")}
                </span>
              </div>

              <h2 className="font-display text-3xl font-black text-slate-900 leading-tight mb-2">
                {t("pvcMarbleSheets.benefits.headingLine1")}
              </h2>
              <h2 className="font-display text-3xl font-black text-brand-blue leading-tight mb-10">
                {t("pvcMarbleSheets.benefits.headingLine2")}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {benefitItems.map((item, idx) => (
                  <MotionDiv
                    key={item.key}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex gap-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-brand-blue mt-1 shrink-0"
                    />
                    <div>
                      <h4 className="font-display font-black text-slate-900 mb-1 text-sm">
                        {t(item.titleKey)}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {t(item.descKey)}
                      </p>
                    </div>
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
                  {t("shared.technicalData.label")}
                </span>
              </div>

              <div className="space-y-5 flex-grow">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="border-b border-white/10 pb-4">
                    <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest block mb-1">
                      {t(`shared.specLabels.${key}`)}
                    </span>
                    <span className="text-white font-semibold text-sm">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Applications pill */}
              <div className="mt-8 bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-5">
                <span className="text-brand-blue text-[10px] font-semibold uppercase tracking-widest block mb-2">
                  {t("pvcMarbleSheets.applications.label")}
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {t("pvcMarbleSheets.applications.text")}
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
              >
                {t("shared.cta.getQuote")} <ArrowRight size={15} />
              </Link>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PVCMarbleSheetPage;
