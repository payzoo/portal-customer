
import { useState } from "react";
import { 
  LayoutDashboard, 
  CreditCard, 
  MapPin, 
  Settings, 
  Calendar,
  LogOut
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "À bientôt !",
      description: "Vous avez été déconnecté avec succès.",
    });
    navigate("/auth");
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "subscriptions", label: "Abonnements", icon: Calendar },
    { id: "payments", label: "Paiements", icon: CreditCard },
    { id: "addresses", label: "Adresses", icon: MapPin },
    { id: "settings", label: "Paramètres", icon: Settings },
  ];

  return (
    <div className="w-80 bg-white/90 backdrop-blur-md border-r border-gray-100/50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-8 py-10">
        <div className="flex items-center space-x-5">
          <div className="relative">
            <div className="w-14 h-14 payzoo-gradient rounded-3xl flex items-center justify-center shadow-xl shadow-payzoo-green-500/25">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-gray-900 text-2xl tracking-tight mb-1">Payzoo</h1>
            <p className="text-sm text-gray-400 truncate font-medium">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-left transition-all duration-300 group relative overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-payzoo-green-50 to-payzoo-green-50/30 text-payzoo-green-700 shadow-sm border border-payzoo-green-100/50"
                      : "text-gray-500 hover:bg-gray-50/60 hover:text-gray-700"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-payzoo-green-500 rounded-r-full" />
                  )}
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? "scale-110 text-payzoo-green-600" : "group-hover:scale-105"
                  }`} />
                  <span className={`font-medium text-sm tracking-wide transition-all duration-300 ${
                    isActive ? "font-semibold" : ""
                  }`}>
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6">
        <div className="border-t border-gray-100/70 pt-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-gray-400 hover:bg-red-50/60 hover:text-red-500 transition-all duration-300 group"
          >
            <LogOut className="w-5 h-5 group-hover:scale-105 transition-transform duration-300" />
            <span className="font-medium text-sm tracking-wide">Déconnexion</span>
          </button>
        </div>
      </div>
    </div>
  );
};
