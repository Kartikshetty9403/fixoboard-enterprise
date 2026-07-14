import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  FileDown,
  Lock,
  Newspaper,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="assets/logo/fix_logo.svg"
                alt="Fixoboard"
                className="h-9 w-auto"
              />
              <span className="text-xl font-black tracking-tight text-white uppercase">
                FIXO<span className="text-red-600">BOARD</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-8">
              Atlantic Polymers Pvt. Ltd. is a pioneer in PVC manufacturing for
              over three decades. Makers of FixoBoard - India's most trusted
              advanced marine ply.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Products Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/products/pvc-wpc-ply"
                  className="hover:text-red-500 transition-colors"
                >
                  PVC / WPC Ply
                </Link>
              </li>
              <li>
                <Link
                  to="/products/wpc-doors"
                  className="hover:text-red-500 transition-colors"
                >
                  WPC Solid Doors
                </Link>
              </li>
              <li>
                <Link
                  to="/products/prelaminate-ply"
                  className="hover:text-red-500 transition-colors"
                >
                  Prelaminate Ply
                </Link>
              </li>
              <li>
                <Link
                  to="/products/wpc-door-frames"
                  className="hover:text-red-500 transition-colors"
                >
                  WPC Door Frames
                </Link>
              </li>
              <li>
                <Link
                  to="/products/pvc-marble-sheets"
                  className="hover:text-red-500 transition-colors"
                >
                  PVC Marble Sheets
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <a
                  href="#"
                  className="text-red-600 flex items-center gap-2 font-bold hover:text-red-500 transition-colors"
                >
                  <FileDown size={16} />
                  Download Catalogue
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Quick Navigation
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-red-500 transition-colors"
                >
                  Corporate Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className="hover:text-red-500 transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-red-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-red-500 transition-colors"
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <Link
                  to="/applications/kitchen"
                  className="hover:text-red-500 transition-colors"
                >
                  Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-500 transition-colors"
                >
                  Distributorship
                </Link>
              </li>
              <li className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 group">
                  <Lock
                    size={12}
                    className="text-slate-500 group-hover:text-red-500 transition-colors"
                  />
                  <Link
                    to="/admin/dashboard"
                    className="text-slate-500 group-hover:text-red-500 transition-colors font-bold uppercase tracking-widest text-[10px]"
                  >
                    Admin Portal
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Contact Information
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-red-600 shrink-0" />
                <span className="leading-relaxed">
                  Sejal Encasa, Office No. 4A, 4th Floor, S.V. Road, Kandivali
                  (West), Mumbai – 400067, Maharashtra, India.
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-red-600 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919930349472"
                    className="hover:text-white transition-colors"
                  >
                    +91 99303 49472
                  </a>
                  <a
                    href="tel:+919930349421"
                    className="hover:text-white transition-colors"
                  >
                    +91 99303 49421
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-red-600 shrink-0" />
                <a
                  href="mailto:info@fixoboard.com"
                  className="hover:text-white transition-colors"
                >
                  info@fixoboard.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>
            © {currentYear} Fixoboard by Ankita Kumari. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
