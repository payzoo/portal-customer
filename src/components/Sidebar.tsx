
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
    { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
    { id: "subscriptions", label: "Abonnements", icon: Calendar },
    { id: "payments", label: "Moyens de paiement", icon: CreditCard },
    { id: "addresses", label: "Adresses", icon: MapPin },
    { id: "settings", label: "Paramètres", icon: Settings },
  ];

  return (
    <div className="w-72 bg-white/80 backdrop-blur-sm border-r border-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-8 border-b border-gray-50">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 payzoo-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-payzoo-green-500/20">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-2 h-2 bg-payzoo-green-500 rounded-full animate-pulse-green"></div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-gray-900 text-xl tracking-tight">Payzoo</h2>
            <p className="text-sm text-gray-500 truncate font-medium">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 group ${
                    activeSection === item.id
                      ? "bg-payzoo-green-50/80 text-payzoo-green-700 border border-payzoo-green-100 shadow-sm shadow-payzoo-green-500/10"
                      : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900 hover:shadow-sm"
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-transform duration-300 ${
                    activeSection === item.id ? "scale-110" : "group-hover:scale-105"
                  }`} />
                  <span className="font-medium text-sm tracking-wide">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-gray-50">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-4 px-5 py-4 rounded-2xl text-red-500 hover:bg-red-50/80 hover:text-red-600 transition-all duration-300 group"
        >
          <LogOut className="w-5 h-5 group-hover:scale-105 transition-transform duration-300" />
          <span className="font-medium text-sm tracking-wide">Se déconnecter</span>
        </button>
      </div>
    </div>
  );
};
