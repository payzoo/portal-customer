
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
    <div className="w-64 bg-white/80 backdrop-blur-xl border-r border-gray-100/50 min-h-screen flex flex-col">
      {/* Header ultra-minimaliste */}
      <div className="p-6 border-b border-gray-50">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-8 h-8 payzoo-gradient rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-gray-900 text-lg tracking-tight">Payzoo</h1>
            <p className="text-xs text-gray-400 truncate font-medium">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation ultra-épurée */}
      <nav className="flex-1 p-3">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group relative ${
                    isActive
                      ? "bg-payzoo-green-50 text-payzoo-green-700"
                      : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-all duration-200 ${
                    isActive ? "text-payzoo-green-600" : ""
                  }`} />
                  <span className={`font-medium text-sm ${
                    isActive ? "font-semibold" : ""
                  }`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="absolute right-2 w-1.5 h-1.5 bg-payzoo-green-500 rounded-full" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer épuré */}
      <div className="p-3 border-t border-gray-50">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-red-50/80 hover:text-red-600 transition-all duration-200 group"
        >
          <LogOut className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
          <span className="font-medium text-sm">Déconnexion</span>
        </button>
      </div>
    </div>
  );
};
