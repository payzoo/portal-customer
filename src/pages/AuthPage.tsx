
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute w-96 h-96 bg-primary rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-80 h-80 bg-primary rounded-full blur-3xl right-15 bottom-20"></div>
      </div>

      <div className={`w-full max-w-sm space-y-12 relative z-10 transform transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        
        {/* Header - Clean typography hierarchy */}
        <div className="text-center">
          <div className={`transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h1 className="lovable-h1 mb-4">Lovable</h1>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="lovable-status-active"></div>
              <p className="lovable-caption uppercase tracking-wider font-medium">SIMPLY BETTER</p>
              <div className="lovable-status-active"></div>
            </div>
          </div>
        </div>

        {/* Form section with improved input alignment */}
        <div className={`space-y-8 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          {!showEmailTag ? (
            <div className="space-y-8">
              {/* Fixed input field with proper icon alignment */}
              <div className="relative group">
                <div className="lovable-card">
                  <div className="relative flex items-center p-1">
                    <Mail className="lovable-input-icon" />
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      className="lovable-input-with-icon border-0 bg-transparent focus:ring-0 focus:border-0"
                    />
                    <div className={`absolute right-4 transition-all duration-500 ${
                      isEmailValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                    }`}>
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button
                onClick={handleContinue}
                disabled={!isEmailValid}
                className={`lovable-btn-primary w-full ${!isEmailValid ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                Continuer
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <div className="space-y-8 lovable-fade-in">
              {/* Email tag with proper contrast */}
              <div className="group cursor-pointer">
                <div className="lovable-card-interactive lovable-card-content">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-semibold text-xl flex-shrink-0">
                      {email.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="lovable-body font-medium break-words">{email}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="lovable-status-active"></div>
                        <p className="lovable-body-sm">Prêt à se connecter</p>
                      </div>
                    </div>
                    <button 
                      onClick={removeEmailTag}
                      className="lovable-btn-icon flex-shrink-0"
                      aria-label="Supprimer l'email"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleConnection}
                className="lovable-btn-primary w-full"
              >
                Se connecter
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Footer with proper text hierarchy */}
        <div className={`text-center space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center">
            <p className="lovable-body-sm mb-4">
              Pas encore de compte ?{" "}
              <button
                onClick={handleRegisterRedirect}
                className="text-primary font-medium hover:underline transition-all duration-200 lovable-focus-ring"
              >
                S'inscrire
              </button>
            </p>
          </div>
          <div className="flex justify-center space-x-3">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="lovable-status-active hover:scale-150 transition-all duration-300 cursor-pointer"
              ></div>
            ))}
          </div>
          <p className="lovable-caption opacity-60">© 2024 Lovable</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
