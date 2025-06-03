
import { Sparkles } from "lucide-react";

interface HeaderProps {
  isLoaded: boolean;
}

const Header = ({ isLoaded }: HeaderProps) => {
  return (
    <div className="text-center mb-12">
      <div className={`transform transition-all duration-700 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`} style={{ transitionDelay: '400ms' }}>
        
        {/* Logo with animated elements */}
        <div className="relative mb-8">
          <h1 className="payzoo-page-title relative inline-block">
            Payzoo
            <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-foreground/40 animate-pulse" />
          </h1>
        </div>

        {/* Status indicator with modern styling */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-foreground/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="relative">
            <p className="payzoo-caption uppercase tracking-[0.2em] font-medium text-muted-foreground">
              Gestion Simplifiée
            </p>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-px bg-foreground/20"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-foreground/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        <p className="payzoo-subtitle">Connectez-vous à votre espace personnel</p>
      </div>
    </div>
  );
};

export default Header;
