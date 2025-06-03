
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Dashboard } from "@/components/Dashboard";
import { Subscriptions } from "@/components/Subscriptions";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Addresses } from "@/components/Addresses";
import { Settings } from "@/components/Settings";

interface IndexProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Index = ({ activeSection, onSectionChange }: IndexProps) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.activeSection) {
      onSectionChange(location.state.activeSection);
    }
  }, [location.state, onSectionChange]);

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
    <div className="flex flex-1 flex-col gap-6 p-8 payzoo-fade-in">
      {renderContent()}
    </div>
  );
};

export default Index;
