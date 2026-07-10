import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  User,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";

const MotionDiv = motion.div as any;

const AdminLoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If already logged in, redirect to dashboard
    if (localStorage.getItem("fixoboard_admin_token")) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError("Invalid industrial credentials. Access denied.");
        setIsLoading(false);
        return;
      }

      localStorage.setItem("fixoboard_admin_token", data.token);
      const origin = (location.state as any)?.from || "/admin/dashboard";
      navigate(origin);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[450px] relative z-10"
      >
        <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-red-500/10">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-red-600 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-red-600/20">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <h1 className="text-white text-3xl font-black uppercase tracking-tighter italic">
              Fixoboard CMS
            </h1>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-3">
              Authorized Access Only
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                Admin Username
              </label>
              <div className="relative group">
                <User
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-600 transition-colors"
                  size={20}
                />
                <input
                  autoFocus
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-800/50 border border-white/5 text-white rounded-2xl p-5 pl-14 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium"
                  placeholder="admin"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                Secure Password
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-600 transition-colors"
                  size={20}
                />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-800/50 border border-white/5 text-white rounded-2xl p-5 pl-14 pr-14 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <MotionDiv
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl flex items-center gap-3 text-xs font-bold"
              >
                <AlertCircle size={18} />
                {error}
              </MotionDiv>
            )}

            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-red-600/20 uppercase tracking-[0.2em] text-xs transition-all active:scale-95"
            >
              {isLoading ? "Verifying..." : "Authenticate Access"}
            </button>
          </form>

          <div className="mt-12 pt-10 border-t border-white/5 text-center">
            <p className="text-slate-600 text-[9px] font-bold uppercase tracking-widest">
              Secured by Atlantic Polymers Industrial Firewall
            </p>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default AdminLoginPage;
