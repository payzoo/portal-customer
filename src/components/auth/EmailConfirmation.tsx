
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

interface EmailConfirmationProps {
  email: string;
  onConnection: () => void;
  onRemoveEmail: () => void;
  isLoaded: boolean;
}

const EmailConfirmation = ({ email, onConnection, onRemoveEmail, isLoaded }: EmailConfirmationProps) => {
  return (
    <div className={`space-y-6 transform transition-all duration-500 ease-out ${
      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`} style={{ transitionDelay: '400ms' }}>
      
      {/* Carte de confirmation email améliorée */}
      <div className="group cursor-pointer" onClick={onConnection}>
        <div className="border border-input rounded-xl p-4 bg-background hover:border-foreground/20 transition-all duration-200 hover:shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center text-background font-semibold text-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              {email.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground break-words">{email}</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm text-muted-foreground">Prêt à se connecter</p>
                <Zap className="w-3 h-3 text-foreground/40" />
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onRemoveEmail();
              }}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 flex-shrink-0"
              aria-label="Supprimer l'email"
            >
              ×
            </button>
          </div>
        </div>
      </div>

      {/* Bouton de connexion cohérent */}
      <Button
        onClick={onConnection}
        className="w-full h-12 bg-foreground text-background font-medium rounded-xl transition-all duration-200 hover:bg-foreground/90 active:scale-[0.98] group"
      >
        <span className="mr-2">Se connecter</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default EmailConfirmation;
