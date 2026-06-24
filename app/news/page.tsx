import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Calendar,
  ArrowRight,
  Tag,
  Newspaper,
} from "lucide-react";
import { initialNewsItems } from "../../data/news";
import { NewsItem } from "../../types/product";

const MotionDiv = motion.div as any;

const NewsListingPage: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const savedNews = localStorage.getItem("fixoboard_news");
    if (savedNews) {
      setItems(JSON.parse(savedNews));
    } else {
      setItems(initialNewsItems);
    }
  }, []);

  const filteredItems = items.filter(
    (item) =>
      item.isPublished && (filter === "All" || item.category === filter),
  );

  const categories = [
    "All",
    "Company",
    "Product",
    "Certification",
    "Event",
    "Press",
  ];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-brand-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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
              <span className="text-white">News</span>
            </div>

            {/* Section label */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                Latest Updates
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>

            {/* Two-line heading */}
            <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
              News &
            </h1>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
              Updates.
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Latest announcements, product launches, and industrial
              achievements from Fixoboard.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* FILTER CHIPS */}
      <section className="sticky top-28 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider border transition-all duration-200 ${
                  filter === cat
                    ? "bg-brand-blue text-white border-brand-blue shadow-lg"
                    : "bg-white text-slate-500 border-slate-200 hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {cat === "All" ? "All Updates" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <MotionDiv
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    {/* Image */}
                    <Link
                      to={`/news/${item.slug}`}
                      className="relative aspect-[16/10] overflow-hidden"
                    >
                      <img
                        src={item.featuredImage}
                        alt={item.title.en}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border bg-brand-blue/20 text-brand-blue border-brand-blue/30 backdrop-blur">
                          {item.category}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-slate-400 mb-4">
                        <Calendar size={13} className="text-brand-blue" />
                        <span className="text-[11px] font-semibold uppercase tracking-wider">
                          {formatDate(item.publishDate)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-black text-slate-900 text-xl leading-tight mb-3 group-hover:text-brand-blue transition-colors">
                        <Link to={`/news/${item.slug}`}>{item.title.en}</Link>
                      </h3>

                      {/* Summary */}
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {item.summary.en}
                      </p>

                      {/* Footer */}
                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex gap-2">
                          {item.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/news/${item.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-4 transition-all duration-200"
                        >
                          Read More <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            /* Empty state */
            <div className="py-32 text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Newspaper size={28} />
              </div>
              <h3 className="font-display font-black text-slate-900 text-xl mb-2">
                No Updates Found.
              </h3>
              <p className="text-slate-500 text-sm">
                Stay tuned for the latest industrial highlights from Fixoboard.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsListingPage;
