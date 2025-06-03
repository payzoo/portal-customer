
import { useState, ReactNode } from "react";
import { AppSidebar } from "@/components/AppSidebar";

interface MainLayoutProps {
  children: ReactNode;
  initialSection?: string;
}

export const MainLayout = ({ children, initialSection = "dashboard" }: MainLayoutProps) => {
  const [activeSection, setActiveSection] = useState(initialSection);

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
