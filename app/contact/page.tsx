import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Briefcase,
  Upload,
  Users,
  Navigation,
  CheckCircle2,
  FileText,
  X,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const MotionDiv = motion.div as any;
const MotionSection = motion.section as any;

const ContactPage: React.FC = () => {
  type FormStatus = "idle" | "submitting" | "success" | "error";

  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [inquiryStatus, setInquiryStatus] = useState<FormStatus>("idle");
  const [inquiryError, setInquiryError] = useState<string | null>(null);

  const [careerData, setCareerData] = useState({
    fullName: "",
    postAppliedFor: "",
    email: "",
    phone: "",
    coverMessage: "",
  });
  const [careerStatus, setCareerStatus] = useState<FormStatus>("idle");
  const [careerError, setCareerError] = useState<string | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleInquiryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInquiryData({ ...inquiryData, [e.target.name]: e.target.value });
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryStatus("submitting");
    setInquiryError(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setInquiryStatus("success");
      setInquiryData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setTimeout(() => setInquiryStatus("idle"), 5000);
    } catch (err: any) {
      setInquiryStatus("error");
      setInquiryError(err.message || "Something went wrong. Please try again.");
    }
  };

  const handleCareerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCareerData({ ...careerData, [e.target.name]: e.target.value });
  };

  const handleCareerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCareerStatus("submitting");
    setCareerError(null);

    try {
      const formData = new FormData();
      formData.append("fullName", careerData.fullName);
      formData.append("postAppliedFor", careerData.postAppliedFor);
      formData.append("email", careerData.email);
      formData.append("phone", careerData.phone);
      formData.append("coverMessage", careerData.coverMessage);
      if (cvFile) formData.append("cv", cvFile);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/careers`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setCareerStatus("success");
      setCareerData({
        fullName: "",
        postAppliedFor: "",
        email: "",
        phone: "",
        coverMessage: "",
      });
      setCvFile(null);
      setFileName(null);
      setTimeout(() => setCareerStatus("idle"), 5000);
    } catch (err: any) {
      setCareerStatus("error");
      setCareerError(err.message || "Something went wrong. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="text-brand-blue" size={22} />,
      title: "Call Us",
      details: ["+91 9930349472", "+91 9930349421"],
      link: "tel:+919930349472",
    },
    {
      icon: <Mail className="text-brand-blue" size={22} />,
      title: "Email Us",
      details: ["info@fixoboard.com"],
      link: "mailto:info@fixoboard.com",
    },
    {
      icon: <MapPin className="text-brand-blue" size={22} />,
      title: "Visit Us",
      details: [
        "Sejal Encasa, Office No. 4A, 4th Floor, S.V. Road, Kandivali (W), Mumbai - 400067",
      ],
      link: "https://maps.google.com/?q=Sejal+Encasa+Kandivali+West+Mumbai",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-40 pb-32 bg-brand-dark overflow-hidden">
        {/* Background image — dim overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2070"
            alt=""
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <span className="text-white">Contact</span>
            </div>

            {/* Section label */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Get In Touch
              </span>
              <div className="w-6 h-0.5 bg-brand-red" />
            </div>

            {/* Two-line heading */}
            <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
              Let's Build Something
            </h1>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
              Sustainable Together.
            </h1>

            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              Whether you're an architect, contractor, or distributor — we're
              here to help. Reach out and our team will get back to you within
              24 hours.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* ── SECTION 2: CONTACT INFO CARDS ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-brand-blue" />
            <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
              Reach Out
            </span>
            <div className="w-6 h-0.5 bg-brand-blue" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight text-center mb-2">
            We're Always
          </h2>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight text-center mb-16">
            Here For You.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm
                     flex flex-col items-center text-center group
                     hover:shadow-lg transition-all duration-300"
              >
                {/* Icon badge */}
                <div
                  className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6
                          group-hover:bg-brand-blue group-hover:[&>*]:text-white transition-all duration-300"
                >
                  {info.icon}
                </div>

                <h3 className="font-display text-lg font-black text-slate-900 mb-4">
                  {info.title}
                </h3>

                <div className="space-y-1">
                  {info.details.map((detail, dIdx) => (
                    <a
                      key={dIdx}
                      href={info.link}
                      className="text-slate-500 text-sm leading-relaxed hover:text-brand-blue transition-colors block"
                    >
                      {detail}
                    </a>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INQUIRY FORM + DISTRIBUTORSHIP SIDEBAR ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
              Inquiries
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
            Request a Quote
          </h2>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-16">
            or Ask Us Anything.
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* ── LEFT: Inquiry Form (spans 2 cols) ── */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
                {/* Icon + title row */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
                    <MessageSquare size={22} />
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900">
                    Inquiry / Quote Request
                  </h3>
                </div>

                {/* Success state */}
                {inquiryStatus === "success" ? (
                  <MotionDiv
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl border border-slate-100 p-12 text-center"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-green-500" size={32} />
                    </div>
                    <h4 className="font-display text-xl font-black text-slate-900 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Your inquiry has been received. Our technical team will
                      contact you within 24 hours.
                    </p>
                  </MotionDiv>
                ) : (
                  <form
                    onSubmit={handleInquirySubmit}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={inquiryData.name}
                        onChange={handleInquiryChange}
                        placeholder="Full Name"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm
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
                        name="email"
                        value={inquiryData.email}
                        onChange={handleInquiryChange}
                        placeholder="email@company.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm
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
                        name="phone"
                        value={inquiryData.phone}
                        onChange={handleInquiryChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                               transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={inquiryData.company}
                        onChange={handleInquiryChange}
                        placeholder="Business Name"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                             transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        name="message"
                        value={inquiryData.message}
                        onChange={handleInquiryChange}
                        placeholder="Describe your project requirements, quantities needed, or any questions..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                             transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 space-y-3">
                      {inquiryStatus === "error" && (
                        <p className="text-brand-red text-sm font-medium">
                          {inquiryError}
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={inquiryStatus === "submitting"}
                        className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white
                         px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-wider
                         transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20
                         disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {inquiryStatus === "submitting"
                          ? "Sending..."
                          : "Submit Inquiry"}{" "}
                        <Send size={15} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </MotionDiv>

            {/* ── RIGHT: Distributorship Sidebar ── */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              {/* Partner card */}
              <div className="bg-brand-dark rounded-2xl p-8 text-white relative overflow-hidden">
                {/* decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-3xl rounded-full pointer-events-none" />

                <div className="relative">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center mb-6">
                    <Users className="text-brand-blue" size={22} />
                  </div>

                  <h3 className="font-display text-xl font-black text-white mb-2">
                    Partner With Us
                  </h3>
                  <p className="font-display text-xl font-black text-brand-red mb-6">
                    Become a Distributor.
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Join India's most innovative PVC/WPC network. We're
                    expanding across 20+ states and seeking committed partners
                    to grow with the Green Revolution.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Industrial Support",
                      "Marketing Collaterals",
                      "Logistics Assistance",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-brand-blue shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white
                         px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider
                         transition-all w-full justify-center"
                  >
                    Apply for Distributorship <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h4 className="font-display text-lg font-black text-slate-900 mb-1">
                  Direct Connect
                </h4>
                <p className="text-slate-500 text-sm mb-6">
                  Need instant technical support? Chat with our team directly.
                </p>

                <a
                  href="https://wa.me/919930349472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white
                       px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider
                       transition-all w-full justify-center shadow-lg shadow-green-600/20"
                >
                  Chat on WhatsApp <ArrowRight size={15} />
                </a>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CAREERS FORM ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16 mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                Careers
              </span>
              <div className="w-6 h-0.5 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Work With
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-6">
              Us.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Join Atlantic Polymers Pvt. Ltd. and be part of the future of
              building materials. We're always looking for driven people who
              want to grow with us.
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
              {/* Icon + title row */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-red/20">
                  <Briefcase size={22} />
                </div>
                <h3 className="font-display text-2xl font-black text-slate-900">
                  Apply Now
                </h3>
              </div>

              {/* Success state */}
              {careerStatus === "success" ? (
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-50 rounded-2xl border border-slate-100 p-12 text-center"
                >
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-brand-blue" size={32} />
                  </div>
                  <h4 className="font-display text-xl font-black text-slate-900 mb-2">
                    Application Sent!
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Our HR team will review your profile and get back to you
                    soon.
                  </p>
                </MotionDiv>
              ) : (
                <form onSubmit={handleCareerSubmit} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="fullName"
                        value={careerData.fullName}
                        onChange={handleCareerChange}
                        placeholder="Your Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                        focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                        transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                        Post Applied For *
                      </label>
                      <input
                        required
                        type="text"
                        name="postAppliedFor"
                        value={careerData.postAppliedFor}
                        onChange={handleCareerChange}
                        placeholder="e.g. Area Sales Manager"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                             transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={careerData.email}
                        onChange={handleCareerChange}
                        placeholder="email@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                             transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={careerData.phone}
                        onChange={handleCareerChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                        focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                        transition-all"
                      />
                    </div>
                  </div>

                  {/* Cover message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Cover Message
                    </label>
                    <textarea
                      rows={4}
                      name="coverMessage"
                      value={careerData.coverMessage}
                      onChange={handleCareerChange}
                      placeholder="Tell us about your experience and why you'd like to join us..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue
                           transition-all resize-none"
                    />
                  </div>

                  {/* File upload */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Upload CV (PDF / DOC)
                    </label>

                    {/* Hidden real input */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />

                    {/* Styled upload area */}
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-200 rounded-2xl p-10
                           flex flex-col items-center justify-center cursor-pointer
                           hover:border-brand-blue hover:bg-brand-blue/5
                           transition-all duration-300 group"
                    >
                      {fileName ? (
                        /* File selected state */
                        <div className="flex items-center gap-3 bg-brand-blue/10 text-brand-blue px-6 py-3 rounded-xl">
                          <FileText size={18} />
                          <span className="font-semibold text-sm">
                            {fileName}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFileName(null);
                            }}
                            className="hover:text-brand-red transition-colors ml-2"
                          >
                            <X size={15} />
                          </button>
                        </div>
                      ) : (
                        /* Empty state */
                        <>
                          <div
                            className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-4
                                    group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-all"
                          >
                            <Upload
                              className="text-slate-400 group-hover:text-brand-blue transition-colors"
                              size={24}
                            />
                          </div>
                          <p className="text-slate-500 text-sm font-medium mb-1">
                            Click to upload your CV
                          </p>
                          <p className="text-slate-400 text-xs">
                            PDF, DOC, or DOCX — max 5MB
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="space-y-3">
                    {careerStatus === "error" && (
                      <p className="text-brand-red text-sm font-medium">
                        {careerError}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={careerStatus === "submitting"}
                      className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-red text-white
                      px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-wider
                      transition-all duration-200 shadow-lg
                      disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {careerStatus === "submitting"
                        ? "Submitting..."
                        : "Submit Application"}{" "}
                      <Briefcase size={15} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* ── SECTION 5: MAP ── */}
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
                Find Us
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
              Come Visit Our
            </h2>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-6">
              Office.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Sejal Encasa, Office No. 4A, 4th Floor, S.V. Road, Kandivali
              (West), Mumbai — 400067.
            </p>
          </MotionDiv>

          {/* Map + info card */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100"
            style={{ height: "500px" }}
          >
            {/* Map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.876442654316!2d72.84439031121307!3d19.200593681944627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b713455160cb%3A0xc4864c3c3a44d03!2sSejal%20Encasa!5e0!3m2!1sen!2sin!4v1710174123456!5m2!1sen!2sin"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating info card — overlaid on top-left of map */}
            <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 max-w-xs">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Navigation className="text-brand-blue" size={18} />
              </div>
              <h4 className="font-display font-black text-slate-900 text-base mb-1">
                Our Office
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                Sejal Encasa, Office No. 4A, 4th Floor, Kandivali (West), Mumbai
                — 400067.
              </p>

              <a
                href="https://maps.app.goo.gl/YourActualLink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-4 transition-all duration-200"
              >
                Get Directions <ArrowRight size={14} />
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
