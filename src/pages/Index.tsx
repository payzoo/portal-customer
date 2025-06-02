
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import { Subscriptions } from "@/components/Subscriptions";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Addresses } from "@/components/Addresses";
import { Settings } from "@/components/Settings";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Index = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("dashboard");

  // Check if we're returning from subscription details
  useEffect(() => {
    if (location.state?.activeSection) {
      setActiveSection(location.state.activeSection);
    }
  }, [location.state]);

  // Update page title based on active section
  useEffect(() => {
    const titles = {
      dashboard: "Dashboard - Payzoo",
      subscriptions: "Abonnements - Payzoo",
      payments: "Paiements - Payzoo",
      addresses: "Adresses - Payzoo",
      settings: "Paramètres - Payzoo",
    };
    
    document.title = titles[activeSection as keyof typeof titles] || "Payzoo";
  }, [activeSection]);

  const getSectionTitle = () => {
    const titles = {
      dashboard: "Dashboard",
      subscriptions: "Abonnements",
      payments: "Paiements",
      addresses: "Adresses",
      settings: "Paramètres",
    };
    return titles[activeSection as keyof typeof titles] || "Dashboard";
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "subscriptions":
        return <Subscriptions />;
      case "payments":
        return <PaymentMethods />;
      case "addresses":
        return <Addresses />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50/20">
        <AppSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <SidebarInset className="bg-white rounded-tl-2xl shadow-sm border-l border-gray-100">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-gray-50">
            <div className="flex items-center gap-2 px-6">
              <SidebarTrigger className="-ml-1 hover:bg-gray-50 transition-colors rounded-lg" />
              <Separator orientation="vertical" className="mr-2 h-4 bg-gray-200" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#" className="text-gray-400 hover:text-gray-600 text-sm">
                      Payzoo
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-semibold text-gray-900 text-sm">{getSectionTitle()}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6">
            {renderContent()}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
