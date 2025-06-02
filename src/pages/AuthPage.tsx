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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const { setPendingEmail } = useAuth();

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background with mouse interaction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-muted to-accent/50 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '10%'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-accent/30 to-muted/20 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            right: '15%',
            bottom: '20%'
          }}
        ></div>
      </div>

      <div className={`w-full max-w-sm space-y-12 relative z-10 transform transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Title section with new typography system */}
        <div className="text-center">
          <div className={`transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h1 className="payzoo-h1 mb-4">
              Payzoo
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="payzoo-status-active animate-pulse"></div>
              <p className="payzoo-caption uppercase tracking-wider">SIMPLY BETTER</p>
              <div className="payzoo-status-active animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Dynamic form with new CTA system */}
        <div className={`space-y-8 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          {!showEmailTag ? (
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/10 to-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative payzoo-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-focus-within:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-5 text-muted-foreground w-5 h-5 transition-all duration-300 group-focus-within:text-primary group-focus-within:scale-110" />
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      className="payzoo-input pl-14 pr-14 border-0 bg-transparent focus:ring-0"
                    />
                    <div className={`absolute right-5 transition-all duration-500 ${
                      isEmailValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                    }`}>
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Check className="w-3 h-3 text-primary-foreground" />
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
                <span className="relative flex items-center justify-center">
                  Continuer
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          ) : (
            <div className="space-y-8 payzoo-fade-in">
              <div className="group cursor-pointer">
                <div className="payzoo-card-interactive payzoo-card-content overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-semibold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {email.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <p className="payzoo-body font-medium break-words leading-tight w-full overflow-wrap-anywhere">{email}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="payzoo-status-active animate-pulse"></div>
                        <p className="payzoo-body-sm font-light">Prêt à se connecter</p>
                      </div>
                    </div>
                    <button 
                      onClick={removeEmailTag}
                      className="payzoo-btn-icon hover:rotate-90 flex-shrink-0"
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
                <span className="relative flex items-center justify-center">
                  Se connecter
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          )}
        </div>

        {/* Minimalist footer with new typography */}
        <div className={`text-center space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center">
            <p className="payzoo-body-sm mb-4">
              Pas encore de compte ?{" "}
              <button
                onClick={handleRegisterRedirect}
                className="text-primary font-medium hover:underline transition-all duration-200 payzoo-focus-ring"
              >
                S'inscrire
              </button>
            </p>
          </div>
          <div className="flex justify-center space-x-3">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="payzoo-status-active animate-pulse hover:scale-150 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s' }}
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
