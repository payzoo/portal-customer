
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

  // Check if we're returning from subscription details
  useEffect(() => {
    if (location.state?.activeSection) {
      setActiveSection(location.state.activeSection);
    }
  }, [location.state]);

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
      <main className="flex-1 min-h-screen">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
