
import { useState } from "react";
import { 
  LayoutDashboard, 
  CreditCard, 
  MapPin, 
  Settings, 
  Calendar,
  LogOut,
  User
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
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "subscriptions", label: "Abonnements", icon: Calendar },
    { id: "payments", label: "Paiements", icon: CreditCard },
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
    <Sidebar variant="inset" className="border-r border-gray-100" style={{ backgroundColor: 'white' }}>
      <SidebarHeader className="border-b border-gray-50 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex aspect-square size-10 items-center justify-center rounded-xl" style={{ backgroundColor: '#B4DE00' }}>
            <span className="text-sm font-bold text-black">P</span>
          </div>
          <div className="grid flex-1 text-left leading-tight">
            <span className="truncate font-semibold text-gray-900 text-lg">Payzoo</span>
            <span className="truncate text-xs text-gray-400">Gestion d'abonnements</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4 py-6" style={{ backgroundColor: 'white' }}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => onSectionChange(item.id)}
                    isActive={activeSection === item.id}
                    tooltip={item.label}
                    className={`
                      h-12 px-4 rounded-xl transition-all duration-200 group text-sm font-medium
                      ${activeSection === item.id 
                        ? 'text-black shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                    style={{
                      backgroundColor: activeSection === item.id ? '#B4DE00' : 'transparent'
                    }}
                  >
                    <item.icon className="size-5 transition-transform group-hover:scale-105" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-50 p-4" style={{ backgroundColor: 'white' }}>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50/80">
              <Avatar className="size-9 ring-2 ring-white shadow-sm">
                <AvatarFallback className="text-xs font-semibold bg-gray-100 text-gray-700">
                  {user ? getUserInitials(user.email) : 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left leading-tight min-w-0">
                <span className="truncate font-semibold text-sm text-gray-900">
                  {user ? getDisplayName(user.email) : 'Utilisateur'}
                </span>
                <span className="truncate text-xs text-gray-400">
                  {user?.email}
                </span>
              </div>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={handleLogout} 
              className="h-11 px-4 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group mt-2"
            >
              <LogOut className="size-4 transition-transform group-hover:scale-105" />
              <span className="font-medium text-sm">Déconnexion</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
