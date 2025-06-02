
import { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  CreditCard, 
  MapPin, 
  Settings, 
  Calendar,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Zap
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleLogout = () => {
    logout();
    toast({
      title: "À bientôt !",
      description: "Vous avez été déconnecté avec succès.",
    });
    navigate("/auth");
  };

  const menuItems = [
    { id: "dashboard", label: "Activité", icon: LayoutDashboard, color: "from-blue-500 to-cyan-500" },
    { id: "subscriptions", label: "Abonnements", icon: Calendar, color: "from-purple-500 to-pink-500" },
    { id: "payments", label: "Portefeuille", icon: CreditCard, color: "from-green-500 to-emerald-500" },
    { id: "addresses", label: "Adresses", icon: MapPin, color: "from-orange-500 to-red-500" },
    { id: "settings", label: "Paramètres", icon: Settings, color: "from-gray-500 to-slate-600" },
  ];

  const logoutItem = {
    id: "logout",
    label: "Déconnexion",
    icon: LogOut,
    color: "from-red-500 to-red-600",
    action: handleLogout
  };

  const getUserInitials = (email: string) => {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + (name.charAt(1) || '').toUpperCase();
  };

  const getDisplayName = (email: string) => {
    return email.split('@')[0];
  };

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-72'} bg-gradient-to-b from-background via-background to-muted/20 border-r border-border/50 h-screen fixed left-0 top-0 flex flex-col transition-all duration-500 ease-out z-40 shadow-2xl backdrop-blur-xl`}>
      
      {/* Header with futuristic branding */}
      <div className="flex items-center justify-between p-6 border-b border-border/30">
        {!isCollapsed && (
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-foreground to-foreground/80 rounded-xl flex items-center justify-center font-bold text-lg text-background shadow-lg">
                P
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground tracking-tight">Payzoo</h1>
              <div className="flex items-center space-x-1 mt-1">
                <Zap className="h-3 w-3 text-yellow-500" />
                <span className="text-xs text-muted-foreground font-medium">Pro</span>
              </div>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="relative mx-auto">
            <div className="w-10 h-10 bg-gradient-to-br from-foreground to-foreground/80 rounded-xl flex items-center justify-center font-bold text-lg text-background shadow-lg">
              P
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Profile section with glass morphism effect */}
      {!isCollapsed && (
        <div className="p-6 border-b border-border/30">
          <div className="bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm rounded-2xl p-4 border border-border/20 hover:border-border/40 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="w-12 h-12 ring-2 ring-foreground/10 ring-offset-2 ring-offset-background">
                  <AvatarFallback className="bg-gradient-to-br from-foreground to-foreground/80 text-background text-sm font-bold">
                    {user ? getUserInitials(user.email) : 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-foreground truncate">
                  {user ? getDisplayName(user.email) : 'Utilisateur'}
                </p>
                <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation with enhanced animations */}
      <nav className="flex-1 p-4 space-y-2">
        <ul className="space-y-2" role="navigation" aria-label="Main navigation">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;
            return (
              <li key={item.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in">
                <button
                  onClick={() => onSectionChange(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-full group relative flex items-center ${isCollapsed ? 'justify-center px-3' : 'px-4'} py-4 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] ${
                    isActive
                      ? "bg-gradient-to-r from-foreground to-foreground/90 text-background shadow-lg scale-[1.02]"
                      : "text-muted-foreground hover:bg-gradient-to-r hover:from-muted/50 hover:to-muted/30 hover:text-foreground"
                  }`}
                  title={isCollapsed ? item.label : undefined}
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* Animated background gradient */}
                  {(isActive || isHovered) && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 rounded-xl transition-opacity duration-300`} />
                  )}
                  
                  {/* Icon with enhanced styling */}
                  <div className={`relative z-10 ${isCollapsed ? '' : 'mr-4'} flex-shrink-0`}>
                    <Icon className={`w-5 h-5 transition-all duration-300 ${
                      isActive ? 'text-background' : 'text-inherit group-hover:scale-110'
                    }`} />
                    {(isActive || isHovered) && !isCollapsed && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-lg blur-sm transition-opacity duration-300`} />
                    )}
                  </div>
                  
                  {/* Label with smooth transitions */}
                  {!isCollapsed && (
                    <span className="relative z-10 text-sm font-medium transition-all duration-300">
                      {item.label}
                    </span>
                  )}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute right-4 w-2 h-2 bg-background rounded-full animate-pulse" />
                  )}
                  
                  {/* Hover effect */}
                  {isHovered && !isActive && (
                    <div className="absolute right-4 w-1 h-1 bg-foreground rounded-full animate-ping" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer with logout button using same styling */}
      <div className="p-4 space-y-4 border-t border-border/30">
        <li className="animate-fade-in" style={{ animationDelay: `${menuItems.length * 100}ms` }}>
          <button
            onClick={logoutItem.action}
            onMouseEnter={() => setHoveredItem(logoutItem.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`w-full group relative flex items-center ${isCollapsed ? 'justify-center px-3' : 'px-4'} py-4 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] text-muted-foreground hover:bg-gradient-to-r hover:from-muted/50 hover:to-muted/30 hover:text-foreground`}
            title={isCollapsed ? logoutItem.label : undefined}
            aria-label="Se déconnecter"
          >
            {/* Animated background gradient */}
            {hoveredItem === logoutItem.id && (
              <div className={`absolute inset-0 bg-gradient-to-r ${logoutItem.color} opacity-10 rounded-xl transition-opacity duration-300`} />
            )}
            
            {/* Icon with enhanced styling */}
            <div className={`relative z-10 ${isCollapsed ? '' : 'mr-4'} flex-shrink-0`}>
              <LogOut className="w-5 h-5 transition-all duration-300 text-inherit group-hover:scale-110" />
              {hoveredItem === logoutItem.id && !isCollapsed && (
                <div className={`absolute inset-0 bg-gradient-to-r ${logoutItem.color} opacity-20 rounded-lg blur-sm transition-opacity duration-300`} />
              )}
            </div>
            
            {/* Label with smooth transitions */}
            {!isCollapsed && (
              <span className="relative z-10 text-sm font-medium transition-all duration-300">
                {logoutItem.label}
              </span>
            )}
            
            {/* Hover effect */}
            {hoveredItem === logoutItem.id && (
              <div className="absolute right-4 w-1 h-1 bg-foreground rounded-full animate-ping" />
            )}
          </button>
        </li>

        {/* Footer info with startup vibe */}
        {!isCollapsed && (
          <div className="text-center">
            <div className="bg-gradient-to-r from-muted/30 to-muted/20 rounded-lg p-3 border border-border/20">
              <p className="text-xs text-muted-foreground font-medium">
                © 2024 Payzoo
              </p>
              <div className="flex items-center justify-center space-x-1 mt-1">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Version Pro</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
