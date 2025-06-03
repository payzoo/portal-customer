
import { Sparkles } from "lucide-react";
import StartupBadge from "./StartupBadge";

interface HeaderProps {
  isLoaded: boolean;
}

const Header = ({ isLoaded }: HeaderProps) => {
  return (
    <div className="text-center mb-8">
      <div className={`transform transition-all duration-500 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`} style={{ transitionDelay: '200ms' }}>
        
        <div className="relative mb-6">
          <h1 className="text-3xl font-light text-foreground tracking-tight bg-gradient-to-r from-foreground via-foreground to-blue-600 bg-clip-text">
            Payzoo
            <Sparkles className="inline-block ml-2 w-5 h-5 text-blue-500 animate-pulse" />
          </h1>
          
          <div className="mt-3">
            <StartupBadge isLoaded={isLoaded} />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs uppercase tracking-wider font-medium text-muted-foreground mb-2 bg-gradient-to-r from-muted-foreground to-blue-600 bg-clip-text">
            Connexion
          </p>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </div>
        
        <p className="text-muted-foreground text-sm">
          Accédez à votre espace{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
            innovant
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
