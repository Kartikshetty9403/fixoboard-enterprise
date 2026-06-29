import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Send,
  ChevronRight,
  CheckCircle2,
  ClipboardList,
  ChevronDown,
  ShieldCheck,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Award,
  Globe,
  Factory,
  History as HistoryIcon,
} from "lucide-react";

const MotionDiv = motion.div as any;

const GetQuotePage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-40 pb-32 bg-brand-dark overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070"
            alt=""
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <span className="text-white">Get Quote</span>
            </div>

            {/* Section label */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Request a Quote
              </span>
              <div className="w-6 h-0.5 bg-brand-red" />
            </div>

            {/* Two-line heading */}
            <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
              Pricing Tailored to
            </h1>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
              Your Requirement.
            </h1>

            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              Share your product needs and application details. Our team will
              get back to you with the most suitable solution and
              project-specific pricing.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* ── SECTION 2: TRUST STRIP ── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock size={18} />, text: "24hr Response" },
              { icon: <ShieldCheck size={18} />, text: "SGS Tested Products" },
              { icon: <Award size={18} />, text: "Project Pricing Support" },
              { icon: <CheckCircle2 size={18} />, text: "Application Advice" },
            ].map((item, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="w-9 h-9 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red shrink-0">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 leading-tight">
                  {item.text}
                </span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: QUOTE REQUEST FORM ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Get Started
              </span>
              <div className="w-6 h-0.5 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Tell Us Your
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-6">
              Requirement.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Fill in the form below and our technical sales team will prepare a
              customised quote for your project.
            </p>
          </MotionDiv>

          {/* Form card */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm">
              {/* Success state */}
              {formStatus === "success" ? (
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-500" size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900 mb-2">
                    Quote Requested!
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
                    Thank you for your interest in Fixoboard. Our technical
                    sales team will review your requirement and contact you
                    within 24 hours.
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-4 transition-all duration-200"
                  >
                    Continue Browsing Products <ArrowRight size={15} />
                  </Link>
                </MotionDiv>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="First Last"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                           transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your business name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                           transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                           transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                           transition-all"
                    />
                  </div>

                  {/* Product Category */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Product Category *
                    </label>
                    <div className="relative">
                      <select
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                             transition-all appearance-none pr-10 text-slate-700"
                      >
                        <option value="">Select Category</option>
                        <option value="pvc-wpc-ply">PVC / WPC Ply</option>
                        <option value="wpc-door">WPC Door</option>
                        <option value="prelaminate-ply">Prelaminate Ply</option>
                        <option value="wpc-door-frames">WPC Door Frames</option>
                        <option value="pvc-marble-sheets">
                          PVC Marble Sheets
                        </option>
                      </select>
                      <ChevronDown
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        size={16}
                      />
                    </div>
                  </div>

                  {/* Application */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Application *
                    </label>
                    <div className="relative">
                      <select
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                             transition-all appearance-none pr-10 text-slate-700"
                      >
                        <option value="">Select Application</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="wardrobe">Wardrobe & Cabinet</option>
                        <option value="office">Office</option>
                        <option value="grills">WPC Grills</option>
                        <option value="3d-panels">3D Wall Panels</option>
                        <option value="shuttering">
                          Shuttering & Centering
                        </option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        size={16}
                      />
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Quantity Requirement
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 100 Sheets / 20 Doors"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                           transition-all"
                    />
                  </div>

                  {/* Thickness */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Thickness / Size (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 18mm, 8x4ft"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                           transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Project Message / Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us more about your project timeline, location, or any specific requirements..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                           transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark
                           disabled:opacity-50 disabled:cursor-not-allowed
                           text-white px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-wider
                           transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
                    >
                      {formStatus === "submitting" ? (
                        "Processing..."
                      ) : (
                        <>
                          Request Quote <Send size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* ── SECTION 4: WHAT HAPPENS NEXT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                Our Process
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              What Happens After
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              You Submit?
            </h2>
          </MotionDiv>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ClipboardList size={28} />,
                step: "01",
                title: "Internal Review",
                desc: "Our team reviews your specific material requirements and project scope.",
              },
              {
                icon: <Factory size={28} />,
                step: "02",
                title: "Suitability Check",
                desc: "We ensure the chosen specs and grade match your application perfectly.",
              },
              {
                icon: <ShieldCheck size={28} />,
                step: "03",
                title: "Pricing Draft",
                desc: "We calculate bulk and project pricing based on quantity and availability.",
              },
              {
                icon: <Phone size={28} />,
                step: "04",
                title: "Direct Contact",
                desc: "A technical sales expert reaches out with the final tailored offer.",
              },
            ].map((item, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div
                  className="p-8 bg-slate-50 rounded-2xl border border-slate-100
                          hover:shadow-lg hover:border-brand-blue/20
                          transition-all duration-300 h-full"
                >
                  {/* Step number */}
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-red mb-4 block">
                    Step {item.step}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center
                            text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white
                            transition-all duration-300"
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <h3 className="font-display text-lg font-black text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: NEED IMMEDIATE ASSISTANCE ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Contact Us
              </span>
              <div className="w-6 h-0.5 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Need Immediate
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
              Assistance?
            </h2>
          </MotionDiv>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
            {/* Phone */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full md:w-auto"
            >
              <a
                href="tel:+919930349472"
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100
                     shadow-sm hover:shadow-lg hover:border-brand-blue/20
                     transition-all duration-300 group w-full md:w-auto"
              >
                <div
                  className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center
                          text-brand-blue group-hover:bg-brand-blue group-hover:text-white
                          transition-all duration-300 shrink-0"
                >
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-1">
                    Call Technical Sales
                  </span>
                  <span className="font-display font-black text-slate-900 text-lg">
                    +91 99303 49472
                  </span>
                </div>
              </a>
            </MotionDiv>

            {/* Divider */}
            <span className="text-slate-300 font-semibold hidden md:block">
              or
            </span>

            {/* Email */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-auto"
            >
              <a
                href="mailto:info@fixoboard.com"
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100
                     shadow-sm hover:shadow-lg hover:border-brand-blue/20
                     transition-all duration-300 group w-full md:w-auto"
              >
                <div
                  className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center
                          text-brand-red group-hover:bg-brand-red group-hover:text-white
                          transition-all duration-300 shrink-0"
                >
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-1">
                    Direct Email
                  </span>
                  <span className="font-display font-black text-slate-900 text-lg">
                    info@fixoboard.com
                  </span>
                </div>
              </a>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TRUST SIGNAL STRIP ── */}
      <section className="py-12 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-between items-center gap-8
                 opacity-50 grayscale hover:grayscale-0 hover:opacity-100
                 transition-all duration-700"
          >
            {[
              { icon: <CheckCircle2 size={16} />, text: "SGS Certified" },
              { icon: <CheckCircle2 size={16} />, text: "100% Lead-Free" },
              { icon: <Globe size={16} />, text: "Pan-India Distribution" },
              { icon: <HistoryIcon size={16} />, text: "30+ Years Legacy" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white">
                <span className="text-brand-red">{item.icon}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                  {item.text}
                </span>
              </div>
            ))}
          </MotionDiv>
        </div>
      </section>
    </div>
  );
};

export default GetQuotePage;
