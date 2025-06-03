
import { Sparkles } from "lucide-react";

interface HeaderProps {
  isLoaded: boolean;
}

const Header = ({ isLoaded }: HeaderProps) => {
  return (
    <div className="text-center mb-8">
      <div className={`transform transition-all duration-500 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`} style={{ transitionDelay: '200ms' }}>
        
        {/* Logo simplifié et cohérent */}
        <div className="relative mb-6">
          <h1 className="text-3xl font-light text-foreground tracking-tight">
            Payzoo
            <Sparkles className="inline-block ml-2 w-5 h-5 text-foreground/30" />
          </h1>
        </div>

        {/* Section d'en-tête simplifiée */}
        <div className="mb-4">
          <p className="text-xs uppercase tracking-wider font-medium text-muted-foreground mb-2">
            Connexion
          </p>
          <div className="w-8 h-px bg-foreground/20 mx-auto"></div>
        </div>
        
        <p className="text-muted-foreground text-sm">Accédez à votre espace personnel</p>
      </div>
    </div>
  );
};

export default Header;
