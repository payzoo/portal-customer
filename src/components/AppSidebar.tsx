
import { useState } from "react";
import { 
  LayoutDashboard, 
  CreditCard, 
  MapPin, 
  Settings, 
  Calendar,
  LogOut,
  User,
  ChevronRight
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
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
    { id: "dashboard", label: "Activité", icon: LayoutDashboard },
    { id: "subscriptions", label: "Abonnements", icon: Calendar },
    { id: "payments", label: "Portefeuille", icon: CreditCard },
    { id: "addresses", label: "Adresses", icon: MapPin },
    { id: "settings", label: "Paramètres", icon: Settings },
  ];

  const getUserInitials = (email: string) => {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase();
  };

  const getDisplayName = (email: string) => {
    return email.split('@')[0];
  };

  return (
    <Sidebar variant="sidebar" className="border-none bg-white shadow-sm">
      <SidebarHeader className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div 
            className="flex aspect-square size-10 items-center justify-center rounded-full text-white font-bold text-sm"
            style={{ backgroundColor: '#B4DE00' }}
          >
            P
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">Payzoo</div>
            <div className="text-xs text-gray-500">Gestion moderne</div>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-white px-3 py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => onSectionChange(item.id)}
                    className={`
                      group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium w-full
                      ${activeSection === item.id 
                        ? 'text-black shadow-sm border-l-4' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent'
                      }
                    `}
                    style={{
                      backgroundColor: activeSection === item.id ? '#B4DE00' : 'transparent',
                      borderLeftColor: activeSection === item.id ? '#9BC500' : 'transparent'
                    }}
                  >
                    <item.icon className="size-4 shrink-0" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {activeSection === item.id && (
                      <ChevronRight className="size-3 opacity-70" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-100 p-4 bg-white">
        <div className="space-y-3">
          {/* Profile Section */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
            <Avatar className="size-8">
              <AvatarFallback 
                className="text-xs font-semibold text-white"
                style={{ backgroundColor: '#B4DE00' }}
              >
                {user ? getUserInitials(user.email) : 'U'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm text-gray-900 truncate">
                {user ? getDisplayName(user.email) : 'Utilisateur'}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {user?.email}
              </div>
            </div>
          </div>
          
          {/* Logout Button */}
          <SidebarMenuButton 
            onClick={handleLogout} 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
          >
            <LogOut className="size-4" />
            <span className="font-medium text-sm">Se déconnecter</span>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  );
}
