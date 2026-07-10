import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("fixoboard_admin_token");

      if (!token) {
        navigate("/admin/login", { state: { from: location.pathname } });
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/admin/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          localStorage.removeItem("fixoboard_admin_token");
          navigate("/admin/login", { state: { from: location.pathname } });
          return;
        }

        setIsChecking(false);
      } catch (err) {
        localStorage.removeItem("fixoboard_admin_token");
        navigate("/admin/login", { state: { from: location.pathname } });
      }
    };

    verifyToken();
  }, [navigate, location]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
