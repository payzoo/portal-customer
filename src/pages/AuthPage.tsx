
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Check } from "lucide-react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showEmailTag, setShowEmailTag] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const { setPendingEmail } = useAuth();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const valid = validateEmail(newEmail);
    setIsEmailValid(valid);
    
    if (valid && !showEmailTag) {
      setShowEmailTag(true);
    }
  };

  const handleContinue = () => {
    if (isEmailValid) {
      setPendingEmail(email);
      navigate("/verify-otp");
    }
  };

  const handleConnection = () => {
    if (showEmailTag) {
      setPendingEmail(email);
      navigate("/verify-otp");
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const removeEmailTag = () => {
    setShowEmailTag(false);
    setEmail("");
    setIsEmailValid(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute w-96 h-96 bg-foreground rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-80 h-80 bg-foreground rounded-full blur-3xl right-15 bottom-20"></div>
      </div>

      <div className={`w-full max-w-md space-y-12 relative z-10 transform transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        
        {/* Header with brand identity */}
        <div className="text-center">
          <div className={`transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h1 className="payzoo-page-title mb-6">Payzoo</h1>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="payzoo-status-active"></div>
              <p className="payzoo-caption uppercase tracking-wider font-medium text-muted-foreground">GESTION SIMPLIFIÉE</p>
              <div className="payzoo-status-active"></div>
            </div>
            <p className="payzoo-subtitle">Connectez-vous à votre espace personnel</p>
          </div>
        </div>

        {/* Form section */}
        <div className={`space-y-8 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          {!showEmailTag ? (
            <div className="space-y-8">
              {/* Email input field */}
              <div className="payzoo-input-container">
                <div className="payzoo-card">
                  <div className="relative payzoo-card-compact">
                    <Mail className="payzoo-input-icon" />
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      className="payzoo-input-with-icon border-0 bg-transparent focus:ring-0 focus:border-0 placeholder:text-muted-foreground"
                    />
                    <div className={`payzoo-input-action transition-all duration-500 ${
                      isEmailValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                    }`}>
                      <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-background" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button
                onClick={handleContinue}
                disabled={!isEmailValid}
                className={`payzoo-btn-primary w-full ${!isEmailValid ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                Continuer
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <div className="space-y-8 payzoo-fade-in">
              {/* Email confirmation card */}
              <div className="group cursor-pointer">
                <div className="payzoo-card-interactive payzoo-card-content">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-foreground rounded-2xl flex items-center justify-center text-background font-semibold text-xl flex-shrink-0">
                      {email.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="payzoo-body font-medium break-words text-foreground">{email}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="payzoo-status-active"></div>
                        <p className="payzoo-body-sm text-muted-foreground">Prêt à se connecter</p>
                      </div>
                    </div>
                    <button 
                      onClick={removeEmailTag}
                      className="payzoo-btn-icon flex-shrink-0"
                      aria-label="Supprimer l'email"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleConnection}
                className="payzoo-btn-primary w-full"
              >
                Se connecter
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`text-center space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center">
            <p className="payzoo-body-sm mb-4 text-muted-foreground">
              Pas encore de compte ?{" "}
              <button
                onClick={handleRegisterRedirect}
                className="text-foreground font-medium hover:underline transition-all duration-200 payzoo-focus-ring"
              >
                S'inscrire
              </button>
            </p>
          </div>
          <div className="flex justify-center space-x-3">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="payzoo-status-active hover:scale-150 transition-all duration-300 cursor-pointer"
              ></div>
            ))}
          </div>
          <p className="payzoo-caption opacity-60">© 2024 Payzoo</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
