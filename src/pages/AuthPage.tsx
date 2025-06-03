
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Check, Sparkles, Zap } from "lucide-react";

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
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div 
          className="absolute w-32 h-32 border border-border/20 rounded-full animate-float"
          style={{
            top: '10%',
            left: '5%',
            animationDelay: '0s',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-24 h-24 border border-border/30 rounded-lg rotate-45 animate-float"
          style={{
            top: '20%',
            right: '8%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        ></div>
        <div 
          className="absolute w-16 h-16 bg-foreground/5 rounded-full animate-float"
          style={{
            bottom: '15%',
            left: '10%',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * -0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-20 h-20 border-2 border-foreground/10 rounded-full animate-float"
          style={{
            bottom: '25%',
            right: '15%',
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.03}px)`
          }}
        ></div>

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className={`w-full max-w-md transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          
          {/* Header with modern typography and icons */}
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

          {/* Form section with glassmorphism */}
          <div className={`space-y-8 transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            {!showEmailTag ? (
              <div className="space-y-8">
                {/* Enhanced email input */}
                <div className="relative">
                  <div className="glass-card rounded-2xl p-6 border border-gray-300/50 backdrop-blur-sm bg-background/60">
                    <div className="relative flex items-center">
                      <div className="absolute left-4 z-10">
                        <Mail className="w-5 h-5 text-muted-foreground transition-colors duration-200" />
                      </div>
                      <Input
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full h-12 pl-12 pr-12 bg-transparent border-0 focus:ring-0 focus:border-0 placeholder:text-muted-foreground/60 text-foreground text-base"
                      />
                      <div className={`absolute right-4 transition-all duration-500 ${
                        isEmailValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                      }`}>
                        <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced continue button */}
                <Button
                  onClick={handleContinue}
                  disabled={!isEmailValid}
                  className={`w-full h-14 bg-foreground text-background font-medium rounded-2xl transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98] group ${
                    !isEmailValid ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-foreground/10'
                  }`}
                >
                  <span className="mr-2">Continuer</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            ) : (
              <div className="space-y-8 animate-fade-in">
                {/* Enhanced email confirmation card */}
                <div className="group cursor-pointer" onClick={handleConnection}>
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
                          removeEmailTag();
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
                  onClick={handleConnection}
                  className="w-full h-14 bg-foreground text-background font-medium rounded-2xl transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98] group hover:shadow-lg hover:shadow-foreground/10"
                >
                  <span className="mr-2">Se connecter</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            )}
          </div>

          {/* Footer with modern styling */}
          <div className={`text-center space-y-8 mt-12 transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className="text-center">
              <p className="payzoo-body-sm mb-6 text-muted-foreground">
                Pas encore de compte ?{" "}
                <button
                  onClick={handleRegisterRedirect}
                  className="text-foreground font-medium hover:underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 rounded-sm px-1"
                >
                  S'inscrire
                </button>
              </p>
            </div>
            
            {/* Modern status indicators */}
            <div className="flex justify-center space-x-4">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 bg-foreground/60 rounded-full hover:bg-foreground hover:scale-125 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
            
            <p className="payzoo-caption opacity-50 tracking-wider">© 2024 Payzoo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
