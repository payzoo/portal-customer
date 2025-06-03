
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
    <div className={`space-y-8 transform transition-all duration-700 ease-out ${
      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`} style={{ transitionDelay: '600ms' }}>
      <div className="space-y-8 animate-fade-in">
        {/* Enhanced email confirmation card */}
        <div className="group cursor-pointer" onClick={onConnection}>
          <div className="glass-card rounded-2xl p-6 border border-gray-300/50 backdrop-blur-sm bg-background/60 hover:shadow-lg hover:shadow-foreground/5">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-foreground rounded-2xl flex items-center justify-center text-background font-semibold text-xl flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                {email.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="payzoo-body font-medium break-words text-foreground">{email}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
                  <p className="payzoo-body-sm text-muted-foreground">Prêt à se connecter</p>
                  <Zap className="w-3 h-3 text-foreground/40" />
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveEmail();
                }}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/50 transition-all duration-200 flex-shrink-0"
                aria-label="Supprimer l'email"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced connection button */}
        <Button
          onClick={onConnection}
          className="w-full h-14 bg-foreground text-background font-medium rounded-2xl transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98] group hover:shadow-lg hover:shadow-foreground/10"
        >
          <span className="mr-2">Se connecter</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default EmailConfirmation;
