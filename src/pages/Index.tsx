
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { Subscriptions } from "@/components/Subscriptions";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Addresses } from "@/components/Addresses";
import { Settings } from "@/components/Settings";

const Index = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarWidth, setSidebarWidth] = useState("16rem");

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

  // Listen for sidebar state changes
  useEffect(() => {
    const handleSidebarToggle = () => {
      const sidebar = document.querySelector('[class*="w-16"], [class*="w-64"]');
      if (sidebar) {
        const isCollapsed = sidebar.classList.contains('w-16');
        setSidebarWidth(isCollapsed ? '4rem' : '16rem');
      }
    };

    // Initial check
    handleSidebarToggle();

    // Set up observer for sidebar changes
    const observer = new MutationObserver(handleSidebarToggle);
    const sidebar = document.querySelector('.fixed.left-0');
    if (sidebar) {
      observer.observe(sidebar, { attributes: true, attributeFilter: ['class'] });
    }

    return () => observer.disconnect();
  }, []);

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
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main 
        className="flex-1 min-h-screen transition-all duration-300 ease-in-out" 
        style={{ marginLeft: sidebarWidth }}
      >
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
