import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { products } from "../../../data/products";
import {
  Construction,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const MotionDiv = motion.div as any;

const benefitItems = [
  {
    key: "noCracking",
    titleKey: "wpcDoorFrames.benefits.items.noCracking.title",
    descKey: "wpcDoorFrames.benefits.items.noCracking.desc",
  },
  {
    key: "paintable",
    titleKey: "wpcDoorFrames.benefits.items.paintable.title",
    descKey: "wpcDoorFrames.benefits.items.paintable.desc",
  },
  {
    key: "zeroMaintenance",
    titleKey: "wpcDoorFrames.benefits.items.zeroMaintenance.title",
    descKey: "wpcDoorFrames.benefits.items.zeroMaintenance.desc",
  },
  {
    key: "screwRetention",
    titleKey: "wpcDoorFrames.benefits.items.screwRetention.title",
    descKey: "wpcDoorFrames.benefits.items.screwRetention.desc",
  },
];

const WPCDoorFramePage: React.FC = () => {
  const { t } = useTranslation("products");
  const product = products.find((p) => p.slug === "wpc-door-frames")!;

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
                  {t("wpcDoorFrames.breadcrumbCurrent")}
                </span>
              </div>

              {/* Section label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  {t("wpcDoorFrames.sectionLabel")}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
                {t("wpcDoorFrames.headingLine1")}
              </h1>
              <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
                {t("wpcDoorFrames.headingLine2")}
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                {t("wpcDoorFrames.description")}
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <ShieldCheck size={14} className="text-brand-red" />
                  {t("wpcDoorFrames.tags.highStability")}
                </div>
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <Construction size={14} className="text-brand-red" />
                  {t("wpcDoorFrames.tags.easyInstallation")}
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
                  alt="WPC Door Frames"
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
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left — Technical Data */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-brand-dark text-white rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-6 h-0.5 bg-brand-red" />
                  <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                    {t("shared.technicalData.label")}
                  </span>
                </div>

                <div className="space-y-5">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div
                      key={key}
                      className="flex justify-between border-b border-white/10 pb-4"
                    >
                      <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest">
                        {t(`shared.specLabels.${key}`)}
                      </span>
                      <span className="text-white font-semibold text-sm">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 w-full bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
                >
                  {t("shared.cta.requestPricing")} <ArrowRight size={15} />
                </Link>
              </div>
            </MotionDiv>

            {/* Right — Benefits */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                  {t("wpcDoorFrames.benefits.label")}
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                {t("wpcDoorFrames.benefits.headingLine1")}
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-blue leading-tight mb-10">
                {t("wpcDoorFrames.benefits.headingLine2")}
              </h2>

              <div className="space-y-6">
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
                      className="text-brand-blue shrink-0 mt-1"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default WPCDoorFramePage;
