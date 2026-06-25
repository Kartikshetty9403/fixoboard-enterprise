import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  ArrowLeft,
  Tag,
  Share2,
  Clock,
  Newspaper,
} from "lucide-react";
import { initialNewsItems } from "../../../data/news";
import { NewsItem } from "../../../types/product";

const MotionDiv = motion.div as any;

const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<NewsItem | null>(null);
  const [related, setRelated] = useState<NewsItem[]>([]);

  useEffect(() => {
    const savedNews = localStorage.getItem("fixoboard_news");
    const allItems: NewsItem[] = savedNews
      ? JSON.parse(savedNews)
      : initialNewsItems;

    const found = allItems.find((n) => n.slug === slug && n.isPublished);
    if (!found) {
      navigate("/news");
      return;
    }

    setItem(found);
    setRelated(
      allItems
        .filter(
          (n) =>
            n.id !== found.id && n.isPublished && n.category === found.category,
        )
        .slice(0, 2),
    );

    // Update Meta Data
    if (found.seo) {
      document.title = `${found.seo.metaTitle} | Fixoboard News`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", found.seo.metaDescription);
    }

    return () => {
      document.title = "FixoBoard | Advanced PVC/WPC Solutions";
    };
  }, [slug, navigate]);

  if (!item) return null;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER / BREADCRUMB */}
      <section className="bg-brand-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={item.featuredImage}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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
              <Link to="/news" className="hover:text-white transition-colors">
                News
              </Link>
              <ChevronRight size={12} />
              <span className="text-white truncate max-w-[200px]">
                {item.title.en}
              </span>
            </div>

            {/* Section label */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                {item.category}
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              {item.title.en}
            </h1>

            {/* Meta row — date + read time */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar size={13} className="text-brand-blue" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {formatDate(item.publishDate)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-brand-blue" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  3 Min Read
                </span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* ARTICLE SUMMARY */}
      <section className="pt-16 pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-brand-blue pl-8"
          >
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              {item.summary.en}
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl aspect-[21/9]"
          >
            <img
              src={item.featuredImage}
              alt={item.title.en}
              className="w-full h-full object-cover"
            />
          </MotionDiv>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Body text */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-700 leading-relaxed space-y-8 text-lg font-medium mb-16"
          >
            {item.content.en.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </MotionDiv>

          {/* Tags + Share */}
          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-wider border bg-brand-blue/10 text-brand-blue border-brand-blue/20"
                >
                  <Tag size={11} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share button */}
            <button className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-red text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg">
              <Share2 size={15} />
              Share Article
            </button>
          </div>
        </div>
      </section>

      {/* RELATED NEWS */}
      {related.length > 0 && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-0.5 bg-brand-red" />
                  <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                    Fresh from Fixoboard
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                  Related
                </h2>
                <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight">
                  News.
                </h2>
              </div>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-4 transition-all duration-200"
              >
                View All Updates <ArrowLeft size={14} className="rotate-180" />
              </Link>
            </div>

            {/* Related cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((item, idx) => (
                <MotionDiv
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Link
                    to={`/news/${item.slug}`}
                    className="group flex gap-6 bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 block"
                  >
                    <div className="w-32 aspect-square rounded-xl overflow-hidden shrink-0">
                      <img
                        src={item.featuredImage}
                        alt={item.title.en}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-semibold text-brand-blue uppercase tracking-wider mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-display font-black text-slate-900 text-lg leading-tight mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                        {item.title.en}
                      </h3>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        {formatDate(item.publishDate)}
                      </p>
                    </div>
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-dark rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full" />

            <div className="relative z-10">
              {/* Label */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-brand-red" />
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em]">
                  Stay Connected
                </span>
                <div className="w-6 h-0.5 bg-brand-red" />
              </div>

              {/* Heading */}
              <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                Stay Ahead with
              </h2>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-red leading-tight mb-6">
                Industrial Updates.
              </h2>

              <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed mb-10">
                Get in touch with our technical team or request pricing for your
                next project.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
                >
                  Contact Technical Team{" "}
                  <ArrowLeft size={15} className="rotate-180" />
                </Link>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <Newspaper size={15} />
                  All News Updates
                </Link>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
};

export default NewsDetailPage;
