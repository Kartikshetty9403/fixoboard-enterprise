import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Maximize2, X, ChevronLeft } from "lucide-react";
import { initialGalleryItems } from "../../data/gallery";
import { GalleryItem } from "../../types/product";

const MotionDiv = motion.div as any;

const GalleryPage: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const savedItems = localStorage.getItem("fixoboard_gallery");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      setItems(initialGalleryItems);
    }
  }, []);

  const filteredItems = items.filter(
    (item) => item.isActive && (filter === "All" || item.category === filter),
  );

  const categories = [
    "All",
    "Product",
    "Application",
    "Manufacturing",
    "Installation",
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredItems.length) % filteredItems.length,
      );
    }
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup — restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-brand-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
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
              <span className="text-white">Gallery</span>
            </div>

            {/* Section label */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-[0.25em]">
                Visual Showcase
              </span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>

            {/* Two-line heading */}
            <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-2">
              Our Work in
            </h1>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-red leading-tight mb-6">
              Every Detail.
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A visual showcase of Fixoboard products, applications, and
              industrial installations across the globe.
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
                {cat === "All" ? "All Visuals" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <MotionDiv
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer"
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title.en}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border bg-brand-blue/20 text-brand-blue border-brand-blue/30 self-start mb-3">
                        {item.category}
                      </span>
                      <h3 className="font-display font-black text-white text-lg leading-tight mb-4">
                        {item.title.en}
                      </h3>
                      <div className="w-9 h-9 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-white">
                        <Maximize2 size={16} />
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
                <Maximize2 size={28} />
              </div>
              <h3 className="font-display font-black text-slate-900 text-xl mb-2">
                No Visuals Found.
              </h3>
              <p className="text-slate-500 text-sm">
                Gallery will be updated soon with new project highlights.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage !== null && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>

            {/* Image container */}
            <div
              className="relative w-full max-w-5xl flex items-center justify-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev button */}
              <button
                className="hidden md:flex w-12 h-12 items-center justify-center text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all shrink-0"
                onClick={handlePrev}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image */}
              <MotionDiv
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="flex-1 max-h-[70vh] flex items-center justify-center"
              >
                <img
                  src={filteredItems[selectedImage].imageUrl}
                  alt={filteredItems[selectedImage].title.en}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                />
              </MotionDiv>

              {/* Next button */}
              <button
                className="hidden md:flex w-12 h-12 items-center justify-center text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all shrink-0"
                onClick={handleNext}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Caption */}
            <div
              className="mt-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border bg-brand-blue/20 text-brand-blue border-brand-blue/30 inline-block mb-4">
                {filteredItems[selectedImage].category}
              </span>
              <h2 className="font-display font-black text-white text-2xl md:text-3xl">
                {filteredItems[selectedImage].title.en}
              </h2>
            </div>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span className="text-slate-500 text-xs font-semibold">
                {selectedImage + 1} / {filteredItems.length}
              </span>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
