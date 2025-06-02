
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
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-background border-r border-border h-screen fixed left-0 top-0 flex flex-col transition-all duration-300 ease-in-out z-40 shadow-sm`}>
      
      {/* Header with improved contrast */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-sm text-primary-foreground">
              L
            </div>
            <h1 className="lovable-h4 text-foreground">Lovable</h1>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto font-bold text-sm text-primary-foreground">
            L
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="lovable-btn-icon"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Profile section with better contrast */}
      {!isCollapsed && (
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-secondary text-secondary-foreground text-sm font-medium">
                {user ? getUserInitials(user.email) : 'U'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="lovable-body-sm font-medium text-foreground truncate">
                {user ? getDisplayName(user.email) : 'Utilisateur'}
              </p>
              <p className="lovable-caption text-muted-foreground truncate">{user?.email}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation with improved accessibility */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1" role="navigation" aria-label="Main navigation">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-3' : 'px-3'} py-2.5 rounded-lg text-left transition-all duration-200 group lovable-focus-ring ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                  title={isCollapsed ? item.label : undefined}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className={`w-5 h-5 ${isCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
                  {!isCollapsed && (
                    <span className="lovable-body-sm font-medium">{item.label}</span>
                  )}
                  {isActive && !isCollapsed && (
                    <div className="ml-auto lovable-status-active" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer with logout */}
      <div className="p-4 border-t border-border">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center ${isCollapsed ? 'justify-center px-3' : 'px-3'} py-2.5 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200 group lovable-focus-ring`}
          title={isCollapsed ? "Déconnexion" : undefined}
          aria-label="Se déconnecter"
        >
          <LogOut className={`w-5 h-5 ${isCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
          {!isCollapsed && (
            <span className="lovable-body-sm font-medium">Déconnexion</span>
          )}
        </button>
      </div>

      {/* Footer info */}
      {!isCollapsed && (
        <div className="p-4 text-center">
          <p className="lovable-caption text-muted-foreground">
            © 2024 Lovable • Version Pro
          </p>
        </div>
      )}
    </div>
  );
}
