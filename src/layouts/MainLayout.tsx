
import { useState, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";

interface MainLayoutProps {
  children: ReactNode | (({ activeSection, onSectionChange }: { activeSection: string; onSectionChange: (section: string) => void }) => ReactNode);
  initialSection?: string;
}

export const MainLayout = ({ children, initialSection }: MainLayoutProps) => {
  const location = useLocation();
  
  // Déterminer la section active basée sur l'URL
  const getSectionFromPath = (pathname: string) => {
    if (pathname.startsWith('/subscription/')) {
      return 'subscriptions';
    }
    return initialSection || 'dashboard';
  };

  const [activeSection, setActiveSection] = useState(() => getSectionFromPath(location.pathname));

  // Mettre à jour la section active quand l'URL change
  useEffect(() => {
    const newSection = getSectionFromPath(location.pathname);
    setActiveSection(newSection);
  }, [location.pathname]);

  // Gérer le state passé par navigation
  useEffect(() => {
    if (location.state?.activeSection) {
      setActiveSection(location.state.activeSection);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-background via-background to-muted/5">
      <AppSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <div className="flex-1 ml-72 bg-transparent">
        {typeof children === 'function' ? children({ activeSection, onSectionChange: setActiveSection }) : children}
      </div>
    </div>
  );
};

export default MainLayout;
