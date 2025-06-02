
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
    <div className="w-72 bg-white/95 backdrop-blur-xl border-r border-gray-100 min-h-screen flex flex-col">
      {/* Header minimaliste */}
      <div className="px-6 py-8">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 payzoo-gradient rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-semibold text-gray-900 text-xl tracking-tight">Payzoo</h1>
            <p className="text-xs text-gray-400 truncate font-medium mt-0.5">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation épurée */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group relative ${
                    isActive
                      ? "bg-payzoo-green-50 text-payzoo-green-700 shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-payzoo-green-500 rounded-r-full" />
                  )}
                  <Icon className={`w-4 h-4 transition-all duration-200 ${
                    isActive ? "text-payzoo-green-600" : "group-hover:scale-105"
                  }`} />
                  <span className={`font-medium text-sm tracking-wide ${
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

      {/* Footer minimaliste */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
        >
          <LogOut className="w-4 h-4 group-hover:scale-105 transition-transform duration-200" />
          <span className="font-medium text-sm tracking-wide">Déconnexion</span>
        </button>
      </div>
    </div>
  );
};
