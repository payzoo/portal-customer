
import { useState } from "react";
import { 
  LayoutDashboard, 
  CreditCard, 
  MapPin, 
  Settings, 
  Calendar,
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    toast({
      title: "À bientôt !",
      description: "Vous avez été déconnecté avec succès.",
    });
    navigate("/auth");
  };

  const menuItems = [
    { id: "dashboard", label: "Activité", icon: LayoutDashboard },
    { id: "subscriptions", label: "Abonnements", icon: Calendar },
    { id: "payments", label: "Portefeuille", icon: CreditCard },
    { id: "addresses", label: "Adresses", icon: MapPin },
    { id: "settings", label: "Paramètres", icon: Settings },
  ];

  const getUserInitials = (email: string) => {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + (name.charAt(1) || '').toUpperCase();
  };

  const getDisplayName = (email: string) => {
    return email.split('@')[0];
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-100 h-screen fixed left-0 top-0 flex flex-col transition-all duration-300 ease-in-out z-40 shadow-sm`}>
      {/* Header avec logo Payzoo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 payzoo-primary-bg rounded-lg flex items-center justify-center font-bold text-sm payzoo-secondary-text">
              P
            </div>
            <h1 className="font-semibold payzoo-secondary-text text-lg">Payzoo</h1>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 payzoo-primary-bg rounded-lg flex items-center justify-center mx-auto font-bold text-sm payzoo-secondary-text">
            P
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8 text-gray-400 hover:text-gray-600 payzoo-focus"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Profile section */}
      {!isCollapsed && (
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-gray-100 payzoo-secondary-text text-sm font-medium">
                {user ? getUserInitials(user.email) : 'U'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium payzoo-secondary-text truncate">
                {user ? getDisplayName(user.email) : 'Utilisateur'}
              </p>
              <p className="text-xs payzoo-text-muted truncate">{user?.email}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-3' : 'px-3'} py-2.5 rounded-lg text-left transition-all duration-200 group payzoo-focus ${
                    isActive
                      ? "payzoo-primary-bg payzoo-secondary-text shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className={`w-5 h-5 ${isCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
                  {!isCollapsed && (
                    <span className="font-medium text-sm">{item.label}</span>
                  )}
                  {isActive && !isCollapsed && (
                    <div className="ml-auto w-1.5 h-1.5 bg-black rounded-full opacity-80" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer avec déconnexion */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center ${isCollapsed ? 'justify-center px-3' : 'px-3'} py-2.5 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group payzoo-focus`}
          title={isCollapsed ? "Déconnexion" : undefined}
        >
          <LogOut className={`w-5 h-5 ${isCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
          {!isCollapsed && (
            <span className="font-medium text-sm">Déconnexion</span>
          )}
        </button>
      </div>

      {/* Footer minimaliste */}
      {!isCollapsed && (
        <div className="p-4 text-center">
          <p className="text-xs payzoo-text-muted">
            © 2024 Payzoo • Version Pro
          </p>
        </div>
      )}
    </div>
  );
}
