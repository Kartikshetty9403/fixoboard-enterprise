import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import ProtectedRoute from "../../../components/admin/ProtectedRoute";
import {
  Plus,
  Trash2,
  Edit3,
  Eye,
  EyeOff,
  Save,
  X,
  Upload,
  CheckCircle2,
  AlertCircle,
  Link as LinkIcon,
  Search,
  Globe,
  Languages,
} from "lucide-react";
import { initialNewsItems } from "../../../data/news";
import { NewsItem } from "../../../types/product";

const MotionDiv = motion.div as any;

const AdminNewsPage: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);
  const [activeLang, setActiveLang] = useState<"en" | "hi">("en");
  const [uploadMethod, setUploadMethod] = useState<"file" | "url">("file");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [form, setForm] = useState({
    titleEn: "",
    titleHi: "",
    summaryEn: "",
    summaryHi: "",
    contentEn: "",
    contentHi: "",
    category: "Company" as NewsItem["category"],
    tags: "",
    featuredImage: "",
    isPublished: true,
    metaTitle: "",
    metaDescription: "",
  });

  useEffect(() => {
    const savedNews = localStorage.getItem("fixoboard_news");
    if (savedNews) {
      setItems(JSON.parse(savedNews));
    } else {
      setItems(initialNewsItems);
      localStorage.setItem("fixoboard_news", JSON.stringify(initialNewsItems));
    }
  }, []);

  const saveToStorage = (newItems: NewsItem[]) => {
    localStorage.setItem("fixoboard_news", JSON.stringify(newItems));
    setItems(newItems);
  };

  const showNotify = (type: "success" | "error", msg: string) => {
    setNotification({ type, msg });
    setTimeout(() => setNotification(null), 3000);
  };

  const resetForm = () => {
    setForm({
      titleEn: "",
      titleHi: "",
      summaryEn: "",
      summaryHi: "",
      contentEn: "",
      contentHi: "",
      category: "Company",
      tags: "",
      featuredImage: "",
      isPublished: true,
      metaTitle: "",
      metaDescription: "",
    });
    setEditingItem(null);
    setIsAdding(false);
    setActiveLang("en");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({
          ...prev,
          featuredImage: reader.result as string,
        }));
        showNotify("success", "Featured image processed");
      };
      reader.readAsDataURL(file);
    }
  };

  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.featuredImage) {
      showNotify("error", "Featured image is required");
      return;
    }

    const itemSlug = createSlug(form.titleEn);
    const tagsArray = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);

    const newsData = {
      slug: itemSlug,
      title: { en: form.titleEn, hi: form.titleHi },
      summary: { en: form.summaryEn, hi: form.summaryHi },
      content: { en: form.contentEn, hi: form.contentHi },
      category: form.category,
      tags: tagsArray,
      featuredImage: form.featuredImage,
      isPublished: form.isPublished,
      seo: {
        metaTitle: form.metaTitle || form.titleEn,
        metaDescription: form.metaDescription || form.summaryEn,
      },
    };

    if (editingItem) {
      const updated = items.map((item) =>
        item.id === editingItem.id
          ? {
              ...item,
              ...newsData,
            }
          : item,
      );
      saveToStorage(updated);
      showNotify("success", "Article updated successfully");
    } else {
      const newItem: NewsItem = {
        id: Date.now().toString(),
        publishDate: new Date().toISOString(),
        ...(newsData as any),
      };
      saveToStorage([newItem, ...items]);
      showNotify("success", "New article published");
    }
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this article permanently?")) {
      const updated = items.filter((i) => i.id !== id);
      saveToStorage(updated);
      showNotify("success", "Article removed");
    }
  };

  const startEdit = (item: NewsItem) => {
    setEditingItem(item);
    setForm({
      titleEn: item.title.en,
      titleHi: item.title.hi || "",
      summaryEn: item.summary.en,
      summaryHi: item.summary.hi || "",
      contentEn: item.content.en,
      contentHi: item.content.hi || "",
      category: item.category,
      tags: item.tags.join(", "),
      featuredImage: item.featuredImage,
      isPublished: item.isPublished,
      metaTitle: item.seo?.metaTitle || "",
      metaDescription: item.seo?.metaDescription || "",
    });
    setUploadMethod(item.featuredImage.startsWith("data:") ? "file" : "url");
    setIsAdding(true);
  };

  return (
    <ProtectedRoute>
      <div className="flex bg-slate-50 min-h-screen">
        <AdminSidebar />

        <main className="flex-grow pl-72">
          <div className="p-10 max-w-7xl mx-auto">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h1 className="font-display text-4xl font-black text-slate-900">
                  News Manager
                </h1>
                <p className="text-slate-500 mt-2">
                  Publish announcements and product highlights.
                </p>
              </div>
              <button
                onClick={() => setIsAdding(true)}
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-brand-red/20"
              >
                <Plus size={16} />
                New Article
              </button>
            </header>

            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-full md:w-64 relative aspect-video md:aspect-auto bg-slate-100 shrink-0">
                    <img
                      src={item.featuredImage}
                      alt={item.title.en}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {!item.isPublished && (
                      <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm flex items-center justify-center">
                        <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                          Draft
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-medium text-slate-400">
                          {new Date(item.publishDate).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-black text-slate-900 mb-3 leading-snug">
                        {item.title.en}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {item.summary.en}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <div className="flex gap-3">
                        <button
                          onClick={() => startEdit(item)}
                          className="p-2.5 bg-slate-50 text-slate-500 rounded-xl hover:bg-brand-red/10 hover:text-brand-red transition-colors"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2.5 bg-slate-50 text-slate-500 rounded-xl hover:bg-brand-red/10 hover:text-brand-red transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <Link
                        to={`/news/${item.slug}`}
                        className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                      >
                        <Globe size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {isAdding && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
                    onClick={resetForm}
                  />
                  <MotionDiv
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                  >
                    <div className="p-8 md:p-12">
                      {/* Modal header */}
                      <div className="flex justify-between items-center mb-10">
                        <h2 className="font-display text-2xl font-black text-slate-900">
                          {editingItem ? "Edit Article" : "Article Editor"}
                        </h2>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveLang("en")}
                            className={`px-4 py-2 rounded-xl text-[11px] font-semibold uppercase tracking-wider transition-all ${
                              activeLang === "en"
                                ? "bg-brand-red text-white shadow-lg shadow-brand-red/20"
                                : "bg-slate-100 text-slate-400 hover:text-slate-600"
                            }`}
                          >
                            English
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveLang("hi")}
                            className={`px-4 py-2 rounded-xl text-[11px] font-semibold uppercase tracking-wider transition-all ${
                              activeLang === "hi"
                                ? "bg-brand-dark text-white shadow-lg"
                                : "bg-slate-100 text-slate-400 hover:text-slate-600"
                            }`}
                          >
                            Hindi (हिंदी)
                          </button>
                          <button
                            type="button"
                            onClick={resetForm}
                            className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Featured image */}
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className={`relative border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden aspect-[21/9] ${
                            form.featuredImage
                              ? "border-brand-red bg-brand-red/5"
                              : "border-slate-200 bg-slate-50 hover:border-brand-red/50"
                          }`}
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/*"
                          />
                          {form.featuredImage ? (
                            <img
                              src={form.featuredImage}
                              className="absolute inset-0 w-full h-full object-cover"
                              alt="Preview"
                            />
                          ) : (
                            <>
                              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-red mb-4 shadow-sm">
                                <Upload size={28} />
                              </div>
                              <p className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                                Click to Upload Featured Image
                              </p>
                            </>
                          )}
                        </div>

                        {/* Language-toggled content fields */}
                        {activeLang === "en" ? (
                          <div className="space-y-4">
                            <input
                              required
                              value={form.titleEn}
                              onChange={(e) =>
                                setForm({ ...form, titleEn: e.target.value })
                              }
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                              placeholder="English Title"
                            />
                            <textarea
                              required
                              rows={2}
                              value={form.summaryEn}
                              onChange={(e) =>
                                setForm({ ...form, summaryEn: e.target.value })
                              }
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                              placeholder="English Summary"
                            />
                            <textarea
                              required
                              rows={8}
                              value={form.contentEn}
                              onChange={(e) =>
                                setForm({ ...form, contentEn: e.target.value })
                              }
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                              placeholder="Full Article Body (English)"
                            />
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <input
                              value={form.titleHi}
                              onChange={(e) =>
                                setForm({ ...form, titleHi: e.target.value })
                              }
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                              placeholder="हिंदी शीर्षक (Hindi Title)"
                            />
                            <textarea
                              rows={2}
                              value={form.summaryHi}
                              onChange={(e) =>
                                setForm({ ...form, summaryHi: e.target.value })
                              }
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                              placeholder="हिंदी सारांश (Hindi Summary)"
                            />
                            <textarea
                              rows={8}
                              value={form.contentHi}
                              onChange={(e) =>
                                setForm({ ...form, contentHi: e.target.value })
                              }
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                              placeholder="पूर्ण लेख (Hindi Content)"
                            />
                          </div>
                        )}

                        {/* Category + Publish status */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="relative">
                            <select
                              required
                              value={form.category}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  category: e.target.value as any,
                                })
                              }
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all appearance-none"
                            >
                              <option value="Company">Company Update</option>
                              <option value="Product">Product Launch</option>
                              <option value="Certification">
                                Certification
                              </option>
                              <option value="Event">Event</option>
                              <option value="Press">Press Release</option>
                            </select>
                          </div>
                          <div className="flex gap-4 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 items-center">
                            <label className="flex items-center gap-2.5 cursor-pointer">
                              <input
                                type="radio"
                                checked={form.isPublished}
                                onChange={() =>
                                  setForm({ ...form, isPublished: true })
                                }
                                className="w-4 h-4 accent-brand-red"
                              />
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                                Live
                              </span>
                            </label>
                            <label className="flex items-center gap-2.5 cursor-pointer">
                              <input
                                type="radio"
                                checked={!form.isPublished}
                                onChange={() =>
                                  setForm({ ...form, isPublished: false })
                                }
                                className="w-4 h-4 accent-brand-red"
                              />
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                                Draft
                              </span>
                            </label>
                          </div>
                        </div>

                        {/* SEO Panel */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <h4 className="font-display text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                            <Search size={16} className="text-brand-red" />
                            SEO Management
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <input
                              value={form.metaTitle}
                              onChange={(e) =>
                                setForm({ ...form, metaTitle: e.target.value })
                              }
                              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                              placeholder="Meta Title"
                            />
                            <input
                              value={form.metaDescription}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  metaDescription: e.target.value,
                                })
                              }
                              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                              placeholder="Meta Description"
                            />
                          </div>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-brand-red/20"
                        >
                          Save Article
                          <Save size={16} />
                        </button>
                      </form>
                    </div>
                  </MotionDiv>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {notification && (
                <MotionDiv
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className={`fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl flex items-center gap-3 text-white font-semibold text-sm shadow-2xl z-[100] ${
                    notification.type === "success"
                      ? "bg-brand-blue shadow-brand-blue/20"
                      : "bg-brand-red shadow-brand-red/20"
                  }`}
                >
                  {notification.type === "success" ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  {notification.msg}
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminNewsPage;
