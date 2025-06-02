
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
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 payzoo-gradient rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-payzoo-green-500 rounded-full animate-pulse-green"></div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-lg">Payzoo</h2>
            <p className="text-sm text-gray-500 truncate max-w-32">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-payzoo-green-50 text-payzoo-green-700 border border-payzoo-green-200 shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Se déconnecter</span>
        </button>
      </div>
    </div>
  );
};
