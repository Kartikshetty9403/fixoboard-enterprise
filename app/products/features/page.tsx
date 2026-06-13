import React from "react";
import { motion } from "framer-motion";
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
  const featureGroups = [
    {
      title: "Core Resilience",
      features: [
        {
          icon: <ShieldCheck />,
          title: "Termite Proof",
          desc: "Naturally resistant to biological decay and all types of pests without toxic chemical treatments.",
        },
        {
          icon: <Droplets />,
          title: "Water Proof",
          desc: "Guarantees zero symptoms of delamination, swelling, or water damage even if submerged.",
        },
        {
          icon: <Flame />,
          title: "Fire Resistant",
          desc: "Self-extinguishing properties that ensure structural safety in high-risk zones like kitchens.",
        },
      ],
    },
    {
      title: "Health & Safety",
      features: [
        {
          icon: <HeartPulse />,
          title: "100% Lead Free",
          desc: "Zero lead content prevents damage to kidneys, liver, and nervous system. Essential for healthcare.",
        },
        {
          icon: <Leaf />,
          title: "Non-Toxic / Zero Emission",
          desc: "VOC-free boards that maintain indoor air quality. 100% recyclable and eco-friendly.",
        },
        {
          icon: <Microscope />,
          title: "Anti-Bacterial",
          desc: "Anti-fungal and hygienic surface that is easy to sanitize, perfect for kitchens and hospitals.",
        },
      ],
    },
    {
      title: "Industrial Performance",
      features: [
        {
          icon: <Sun />,
          title: "UV & Chemical Resistant",
          desc: "Resistant to mild acids, alkalis, and sunlight. Ideal for both interior and exterior use.",
        },
        {
          icon: <Zap />,
          title: "No Shrinkage or Swelling",
          desc: "High dimensional stability ensures boards do not warp or expand under varying weather conditions.",
        },
        {
          icon: <Hammer />,
          title: "Carpenter Friendly",
          desc: "Engineered for superior screw-holding. Compatible with standard woodworking tools.",
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
                Technical Data Hub
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
              Why Choose
            </h1>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
              Fixoboard?
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Industrial performance metrics that explain why Fixoboard is the
              definitive substitute for traditional plywood and MDF.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* ── FEATURE GROUPS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {featureGroups.map((group, gIdx) => (
              <div key={gIdx}>
                {/* Group heading — uses section label pattern */}
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-6 h-0.5 bg-brand-blue" />
                  <h2 className="font-display text-xl font-black text-slate-900 uppercase tracking-widest text-sm">
                    {group.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                  {group.features.map((feature, fIdx) => (
                    <MotionDiv
                      key={fIdx}
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
                        {feature.title}
                      </h4>
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {feature.desc}
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
              Technical Analysis
            </span>
            <div className="w-6 h-0.5 bg-brand-blue" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight text-center mb-2">
            Performance
          </h2>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-blue leading-tight text-center mb-16">
            Comparison.
          </h2>

          <ProductComparisonTable />
        </div>
      </section>
    </div>
  );
};

export default ProductFeaturesPage;
