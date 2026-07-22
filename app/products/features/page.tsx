import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  Droplets,
  Flame,
  HeartPulse,
  Sun,
  Hammer,
  Microscope,
  Leaf,
  Zap,
} from "lucide-react";
import ProductComparisonTable from "../../../components/product/ProductComparisonTable";

const MotionDiv = motion.div as any;

const ProductFeaturesPage: React.FC = () => {
  const { t } = useTranslation("products");
  const featureGroups = [
    {
      key: "coreResilience",
      titleKey: "features.groups.coreResilience.title",
      features: [
        {
          key: "termiteProof",
          icon: <ShieldCheck />,
          titleKey: "features.groups.coreResilience.termiteProof.title",
          descKey: "features.groups.coreResilience.termiteProof.desc",
        },
        {
          key: "waterProof",
          icon: <Droplets />,
          titleKey: "features.groups.coreResilience.waterProof.title",
          descKey: "features.groups.coreResilience.waterProof.desc",
        },
        {
          key: "fireResistant",
          icon: <Flame />,
          titleKey: "features.groups.coreResilience.fireResistant.title",
          descKey: "features.groups.coreResilience.fireResistant.desc",
        },
      ],
    },
    {
      key: "healthSafety",
      titleKey: "features.groups.healthSafety.title",
      features: [
        {
          key: "leadFree",
          icon: <HeartPulse />,
          titleKey: "features.groups.healthSafety.leadFree.title",
          descKey: "features.groups.healthSafety.leadFree.desc",
        },
        {
          key: "nonToxic",
          icon: <Leaf />,
          titleKey: "features.groups.healthSafety.nonToxic.title",
          descKey: "features.groups.healthSafety.nonToxic.desc",
        },
        {
          key: "antiBacterial",
          icon: <Microscope />,
          titleKey: "features.groups.healthSafety.antiBacterial.title",
          descKey: "features.groups.healthSafety.antiBacterial.desc",
        },
      ],
    },
    {
      key: "industrialPerformance",
      titleKey: "features.groups.industrialPerformance.title",
      features: [
        {
          key: "uvChemical",
          icon: <Sun />,
          titleKey: "features.groups.industrialPerformance.uvChemical.title",
          descKey: "features.groups.industrialPerformance.uvChemical.desc",
        },
        {
          key: "noShrinkage",
          icon: <Zap />,
          titleKey: "features.groups.industrialPerformance.noShrinkage.title",
          descKey: "features.groups.industrialPerformance.noShrinkage.desc",
        },
        {
          key: "carpenterFriendly",
          icon: <Hammer />,
          titleKey:
            "features.groups.industrialPerformance.carpenterFriendly.title",
          descKey:
            "features.groups.industrialPerformance.carpenterFriendly.desc",
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-brand-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                {t("features.label")}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
              {t("features.headingLine1")}
            </h1>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
              {t("features.headingLine2")}
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              {t("features.description")}
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* ── FEATURE GROUPS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {featureGroups.map((group, gIdx) => (
              <div key={group.key}>
                {/* Group heading — uses section label pattern */}
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-6 h-0.5 bg-brand-blue" />
                  <h2 className="font-display text-xl font-black text-slate-900 uppercase tracking-widest text-sm">
                    {t(group.titleKey)}
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                  {group.features.map((feature, fIdx) => (
                    <MotionDiv
                      key={feature.key}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: fIdx * 0.1 }}
                      className="group"
                    >
                      {/* Icon badge — brand-blue, flips on hover */}
                      <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-200">
                        {React.cloneElement(
                          feature.icon as React.ReactElement<any>,
                          { size: 28 },
                        )}
                      </div>

                      <h4 className="font-display text-lg font-black text-slate-900 mb-3">
                        {t(feature.titleKey)}
                      </h4>
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {t(feature.descKey)}
                      </p>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-brand-blue" />
            <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
              {t("features.comparison.label")}
            </span>
            <div className="w-6 h-0.5 bg-brand-blue" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight text-center mb-2">
            {t("features.comparison.headingLine1")}
          </h2>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-blue leading-tight text-center mb-16">
            {t("features.comparison.headingLine2")}
          </h2>

          <ProductComparisonTable />
        </div>
      </section>
    </div>
  );
};

export default ProductFeaturesPage;
