
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
import { Label } from "@/components/ui/label";

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

  return (
    <div className="w-80 bg-black border-r border-gray-800 h-screen max-h-screen fixed left-0 top-0 flex flex-col overflow-hidden">
      {/* Header moderne avec noir */}
      <div className="p-8 border-b border-gray-800 flex-shrink-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-white rounded-3xl flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-lg">P</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-payzoo-green rounded-full"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-white text-2xl tracking-tight">Payzoo</h1>
            <p className="text-sm text-gray-400 font-medium mt-1">Gestion simplifiée</p>
          </div>
        </div>
      </div>

      {/* Section utilisateur */}
      <div className="p-6 border-b border-gray-800 flex-shrink-0">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-gray-800 text-white font-semibold text-base border border-gray-700">
              {user ? getUserInitials(user.email) : 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white text-base truncate">
              {user ? getDisplayName(user.email) : 'Utilisateur'}
            </h3>
            <p className="text-sm text-gray-400 truncate">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation moderne avec noir */}
      <nav className="flex-1 p-6 overflow-y-auto">
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
                      ? "bg-white text-black shadow-lg border border-gray-200"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white hover:shadow-sm border border-transparent hover:border-gray-700"
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? "text-black" : "group-hover:scale-110"
                  }`} />
                  <span className={`font-semibold text-base ${
                    isActive ? "text-black" : ""
                  }`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="absolute right-4 w-2 h-2 bg-payzoo-green rounded-full animate-pulse" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer moderne - Déconnexion */}
      <div className="p-6 border-t border-gray-800 flex-shrink-0">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-gray-400 hover:bg-red-900 hover:text-red-300 transition-all duration-300 group hover:shadow-sm border border-transparent hover:border-red-800"
        >
          <LogOut className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
          <span className="font-semibold text-base">Déconnexion</span>
        </button>
      </div>

      {/* Liens légaux */}
      <div className="p-6 border-t border-gray-800 flex-shrink-0">
        <div className="space-y-3 text-center">
          <Label className="inline-block bg-gray-800 px-2 py-1 rounded-md text-sm font-medium text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white transition-colors duration-200 border border-gray-700">
            <a href="#" className="block">Aide</a>
          </Label>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200 py-1"
            >
              Conditions
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200 py-1"
            >
              Confidentialité
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200 py-1"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
