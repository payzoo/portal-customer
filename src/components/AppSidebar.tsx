
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
    <Sidebar variant="inset" className="border-r-0 bg-white/50 backdrop-blur-sm">
      <SidebarHeader className="border-b border-gray-100/80 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex aspect-square size-9 items-center justify-center rounded-xl bg-black text-white shadow-sm">
            <span className="text-sm font-bold">P</span>
          </div>
          <div className="grid flex-1 text-left leading-tight">
            <span className="truncate font-semibold text-gray-900 text-base">Payzoo</span>
            <span className="truncate text-xs text-gray-500">Gestion d'abonnements</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => onSectionChange(item.id)}
                    isActive={activeSection === item.id}
                    tooltip={item.label}
                    className={`
                      h-11 px-3 rounded-lg transition-all duration-200 group
                      ${activeSection === item.id 
                        ? 'bg-black text-white shadow-sm hover:bg-gray-900' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    <item.icon className="size-5 transition-transform group-hover:scale-105" />
                    <span className="font-medium text-sm">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="ml-auto size-2 rounded-full bg-white/80" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-100/80 p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50/50">
              <Avatar className="size-8 ring-2 ring-white shadow-sm">
                <AvatarFallback className="text-xs font-medium bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700">
                  {user ? getUserInitials(user.email) : 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left leading-tight min-w-0">
                <span className="truncate font-medium text-sm text-gray-900">
                  {user ? getDisplayName(user.email) : 'Utilisateur'}
                </span>
                <span className="truncate text-xs text-gray-500">
                  {user?.email}
                </span>
              </div>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={handleLogout} 
              className="h-10 px-3 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
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
