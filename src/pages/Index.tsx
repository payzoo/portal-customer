
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import { Subscriptions } from "@/components/Subscriptions";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Addresses } from "@/components/Addresses";
import { Settings } from "@/components/Settings";

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
      dashboard: "Activité - Payzoo",
      subscriptions: "Abonnements - Payzoo",
      payments: "Portefeuille - Payzoo",
      addresses: "Adresses - Payzoo",
      settings: "Paramètres - Payzoo",
    };
    
    document.title = titles[activeSection as keyof typeof titles] || "Payzoo";
  }, [activeSection]);

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
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <div className="flex-1 ml-64 bg-background">
        <div className="flex flex-1 flex-col gap-6 p-6 payzoo-fade-in">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
