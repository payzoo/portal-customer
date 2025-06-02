
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

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

  // Fonction pour obtenir les initiales de l'utilisateur
  const getUserInitials = (email: string) => {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + (name.charAt(1) || '').toUpperCase();
  };

  // Fonction pour obtenir le nom d'affichage
  const getDisplayName = (email: string) => {
    return email.split('@')[0];
  };

  const legalLinks = [
    { label: "Aide", href: "#" },
    { label: "Conditions", href: "#" },
    { label: "Confidentialité", href: "#" },
    { label: "Cookies", href: "#" },
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-100 min-h-screen flex flex-col">
      {/* Header moderne */}
      <div className="p-8 border-b border-gray-50">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 payzoo-gradient rounded-3xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-gray-900 text-2xl tracking-tight">Payzoo</h1>
            <p className="text-sm text-gray-500 font-medium mt-1">Gestion simplifiée</p>
          </div>
        </div>
      </div>

      {/* Section utilisateur */}
      <div className="p-6 border-b border-gray-50">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-payzoo-green-100 text-payzoo-green-700 font-semibold text-base">
              {user ? getUserInitials(user.email) : 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-base truncate">
              {user ? getDisplayName(user.email) : 'Utilisateur'}
            </h3>
            <p className="text-sm text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation moderne */}
      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-left transition-all duration-300 group relative ${
                    isActive
                      ? "bg-payzoo-green-50 text-payzoo-green-700 shadow-sm border border-payzoo-green-100"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? "text-payzoo-green-600" : "group-hover:scale-110"
                  }`} />
                  <span className={`font-semibold text-base ${
                    isActive ? "text-payzoo-green-800" : ""
                  }`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="absolute right-4 w-2 h-2 bg-payzoo-green-500 rounded-full animate-pulse" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Liens légaux */}
      <div className="p-6 border-t border-gray-50">
        <div className="grid grid-cols-2 gap-2">
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer moderne */}
      <div className="p-6 border-t border-gray-50">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-300 group hover:shadow-sm border border-transparent hover:border-red-100"
        >
          <LogOut className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
          <span className="font-semibold text-base">Déconnexion</span>
        </button>
      </div>
    </div>
  );
};
