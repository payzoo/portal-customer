
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Check, Sparkles, Zap, Eye, EyeOff, Lock, Shield, Rocket, Star } from "lucide-react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showEmailTag, setShowEmailTag] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setPendingEmail } = useAuth();

  useEffect(() => {
    setIsLoaded(true);
    
    // Track mouse position for dynamic background effects
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-blue-950/30 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Dynamic animated background with mouse interaction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-emerald-500/20 via-cyan-500/30 to-indigo-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: '60%',
            right: '15%',
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className={`w-full max-w-md space-y-8 relative z-10 transform transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        
        {/* Header with enhanced visual hierarchy */}
        <div className="text-center">
          <div className={`transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            {/* Logo with glow effect */}
            <div className="relative mb-8">
              <h1 className="text-5xl font-light text-white tracking-tight leading-tight relative">
                Payzoo
                <div className="absolute inset-0 text-5xl font-light bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
                  Payzoo
                </div>
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-60 animate-pulse"></div>
            </div>
            
            {/* Status indicators with enhanced animation */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-xs uppercase tracking-wider font-medium text-purple-300/80 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                GESTION SIMPLIFIÉE
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
              </div>
            </div>
            <p className="text-lg text-slate-300 mb-2">Connectez-vous à votre espace personnel</p>
            <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Sécurisé et optimisé par IA
              <Rocket className="w-4 h-4" />
            </p>
          </div>
        </div>

        {/* Form section with glassmorphism */}
        <div className={`space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          {!showEmailTag ? (
            <div className="space-y-6">
              {/* Enhanced email input with glassmorphism */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1">
                  <div className="relative p-5">
                    <Mail className="absolute left-8 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors group-hover:text-purple-400" />
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full pl-12 pr-12 bg-transparent border-0 text-white placeholder:text-slate-400 focus:ring-0 focus:border-0 text-lg h-12"
                    />
                    <div className={`absolute right-8 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
                      isEmailValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                    }`}>
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-bounce">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced continue button */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
                <Button
                  onClick={handleContinue}
                  disabled={!isEmailValid}
                  className={`relative w-full h-14 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-medium text-lg shadow-xl transition-all duration-300 border-0 ${
                    !isEmailValid 
                      ? 'opacity-40 cursor-not-allowed' 
                      : 'hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]'
                  }`}
                >
                  <span className="flex items-center justify-center gap-3">
                    Continuer
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              {/* Enhanced email confirmation card */}
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-semibold text-xl flex-shrink-0 shadow-lg">
                        {email.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-lg font-medium break-words text-white">{email}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                          <p className="text-sm text-slate-400">Prêt à se connecter</p>
                          <Star className="w-3 h-3 text-yellow-400 animate-pulse" />
                        </div>
                      </div>
                      <button 
                        onClick={removeEmailTag}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200 flex-shrink-0"
                        aria-label="Supprimer l'email"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced connection button */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
                <Button
                  onClick={handleConnection}
                  className="relative w-full h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl font-medium text-lg shadow-xl hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] transition-all duration-300 border-0"
                >
                  <span className="flex items-center justify-center gap-3">
                    <Lock className="w-5 h-5" />
                    Se connecter
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced footer */}
        <div className={`text-center space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-sm mb-3 text-slate-300">
                Pas encore de compte ?{" "}
                <button
                  onClick={handleRegisterRedirect}
                  className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-medium hover:from-purple-300 hover:to-blue-300 transition-all duration-200 relative group"
                >
                  S'inscrire
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              </p>
            </div>
          </div>
          
          {/* Animated status indicators */}
          <div className="flex justify-center space-x-4">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full hover:scale-150 transition-all duration-300 cursor-pointer animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              ></div>
            ))}
          </div>
          
          <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
            <Shield className="w-3 h-3" />
            © 2024 Payzoo - Sécurisé par IA
            <Sparkles className="w-3 h-3" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
