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

      {/* 4. MANUFACTURING & OPERATIONS */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Manufacturing Excellence
            </span>
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
              Industrial Powerhouse.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Factory size={34} className="text-blue-600" />,
                title: "State-of-the-Art Silvassa",
                desc: "Our high-capacity facility at Silvassa employs cutting-edge extrusion technology for consistent board density.",
              },
              {
                icon: <ShieldCheck size={34} className="text-blue-600" />,
                title: "International Quality",
                desc: "Every production batch adheres to rigorous international quality standards for thickness and screw retention.",
              },
              {
                icon: <Clock size={34} className="text-blue-600" />,
                title: "Uninterrupted Delivery",
                desc: "Time-bound schedules and robust logistics ensure your project stays on track without material delays.",
              },
            ].map((item, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 md:p-7 rounded-[1.75rem] shadow-sm border border-slate-200 hover:shadow-2xl transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg md:text-xl font-black text-slate-900 mb-2 uppercase tracking-tighter italic">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                  {item.desc}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESEARCH & DEVELOPMENT (R&D) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="w-full aspect-square bg-blue-50 rounded-[4rem] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-3xl animate-pulse" />
                <Microscope
                  size={120}
                  className="text-blue-600 relative z-10 opacity-20"
                />
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"
                  className="absolute inset-10 object-cover rounded-[3rem] shadow-2xl z-20"
                  alt="R&D Lab"
                />
              </div>
            </div>
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
                Research & Innovation
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-tight">
                Engineering <br /> The Next Era.
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                Fixoboard is future-ready. Our dedicated R&D department
                continuously refines polymer composites to develop new materials
                that exceed current industrial benchmarks. We don't just
                supply—we innovate based on real-world furniture industry
                feedback.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-slate-900">
                  <Zap size={18} className="text-blue-500" />
                  Continuous Product Evolution
                </div>
                <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-slate-900">
                  <Zap size={18} className="text-blue-500" />
                  Client-Centric Customization
                </div>
                <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-slate-900">
                  <Zap size={18} className="text-blue-500" />
                  Advanced Material Synthesis
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 6. VISION STATEMENT */}
      <section className="py-32 bg-slate-900 text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Eye className="text-blue-500 mx-auto mb-10" size={64} />
          <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8 block">
            Our Vision
          </h2>
          <blockquote className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight mb-12">
            "To dominate the future by replacing every piece of traditional
            plywood, MDF, and particle board with a sustainable,
            industrial-grade composite that delivers{" "}
            <span className="text-blue-500">lifetime value.</span>"
          </blockquote>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest">
              Lead Plywood Market
            </span>
            <span className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest">
              Complete Furniture Solution
            </span>
            <span className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest">
              Largest WPC Producer
            </span>
          </div>
        </div>
      </section>

      {/* 7. A STEP TOWARDS GREEN REVOLUTION */}
      <section className="py-24 bg-green-50/30 overflow-hidden relative">
        <div className="absolute -right-20 top-20 text-green-600/5 font-black text-[20vw] leading-none pointer-events-none uppercase">
          Green
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
                Green Revolution
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-tight">
                Preservation <br /> Through Engineering.
              </h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-green-600 shrink-0">
                    <span className="text-2xl font-black italic">14%</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 uppercase mb-2">
                      The Deforestation Crisis
                    </h4>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                      Illegal logging contributes to 14% of global ecological
                      damage. Traditional plywood depends on harvesting these
                      vital resources.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl shadow-lg flex items-center justify-center text-white shrink-0">
                    <Leaf size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 uppercase mb-2">
                      The Fixoboard Alternative
                    </h4>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                      Every board produced is 100% recyclable, zero-emission,
                      and does not harm a single tree. It is the definitive
                      sustainable choice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-3xl font-black text-green-700 uppercase tracking-tighter mb-8 italic">
                  GO GREEN WITH{" "}
                  <span className="underline decoration-green-300">
                    FIXOBOARD
                  </span>
                </h4>
                <Link
                  to="/contact"
                  className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-green-600 transition-all shadow-xl shadow-slate-200"
                >
                  Join the movement
                </Link>
              </div>
            </MotionDiv>
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                  alt="Environment"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-green-100 max-w-xs">
                <div className="flex items-center gap-3 text-green-600 font-black uppercase tracking-widest text-[10px] mb-4">
                  <CheckCircle2 size={16} />
                  100% Sustainable
                </div>
                <p className="text-slate-500 text-xs font-bold leading-relaxed uppercase">
                  Zero emission production facility powered by ethical energy
                  standards at Silvassa.
                </p>
              </div>
            </div>
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
