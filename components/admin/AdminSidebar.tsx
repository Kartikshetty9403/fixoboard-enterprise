import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Image as ImageIcon,
  Newspaper,
  LogOut,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    { name: "Gallery", icon: <ImageIcon size={20} />, path: "/admin/gallery" },
    {
      name: "News & Updates",
      icon: <Newspaper size={20} />,
      path: "/admin/news",
    },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem("fixoboard_admin_auth");
    navigate("/admin/login");
  };

  return (
    <div className="w-72 bg-brand-dark min-h-screen flex flex-col fixed left-0 top-0 text-white z-50">
      <div className="p-8 border-b border-white/10">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center shadow-lg shadow-brand-red/20 group-hover:scale-110 transition-transform">
            <span className="font-display font-black text-xl">F</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-black leading-none">
              ADMIN <span className="text-brand-red">CMS</span>
            </span>
            <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest mt-1">
              Fixoboard Identity
            </span>
          </div>
        </Link>
      </div>

      <nav className="flex-grow p-6 space-y-2">
        <div className="pb-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500 px-4">
          Core Modules
        </div>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${
                isActive
                  ? "bg-brand-red text-white shadow-xl shadow-brand-red/20"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
              <ChevronRight
                size={14}
                className={`opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? "opacity-100" : ""}`}
              />
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-white/10 space-y-4">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 text-slate-400 hover:text-brand-red transition-colors text-sm font-semibold"
        >
          <ExternalLink size={20} />
          View Live Site
        </a>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 p-4 text-brand-red hover:bg-brand-red/10 rounded-2xl transition-all text-sm font-semibold"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>

      <div className="p-8 text-center border-t border-white/10 bg-white/5">
        <div className="flex items-center justify-center gap-2 text-slate-500 mb-1">
          <ShieldCheck size={12} />
          <span className="text-[10px] font-semibold uppercase tracking-wider">
            Secure Session
          </span>
        </div>
        <p className="text-[10px] text-slate-600">FixoBoard CMS v2.1.0</p>
      </div>
    </div>
  );
};

export default AdminSidebar;
