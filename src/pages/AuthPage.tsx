
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Check, Sparkles } from "lucide-react";

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

  const removeEmailTag = () => {
    setShowEmailTag(false);
    setEmail("");
    setIsEmailValid(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-payzoo-green-50/20 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-payzoo-green-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-payzoo-green-50/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-payzoo-green-50/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={`w-full max-w-xs space-y-8 relative z-10 transform transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Logo avec animation */}
        <div className="text-center">
          <div className={`w-16 h-16 payzoo-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-all duration-700 ease-out hover:scale-110 hover:rotate-3 hover:shadow-xl ${
            isLoaded ? 'scale-100 rotate-0' : 'scale-0 rotate-12'
          }`} style={{ transitionDelay: '200ms' }}>
            <span className="text-white font-bold text-xl">P</span>
            <Sparkles className="w-3 h-3 text-white/70 absolute top-1 right-1 animate-pulse" />
          </div>
          <div className={`transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h1 className="text-4xl font-extralight text-gray-900 tracking-wide mb-2">Payzoo</h1>
            <p className="text-sm text-payzoo-green-600 font-medium tracking-widest uppercase">Simply better</p>
          </div>
        </div>

        {/* Formulaire avec animations */}
        <div className={`space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          {!showEmailTag ? (
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-payzoo-green-500/20 to-payzoo-green-400/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-payzoo-green-500 group-focus-within:scale-110" />
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full h-14 pl-12 pr-12 border-2 border-gray-100 rounded-2xl focus:ring-0 focus:border-payzoo-green-400 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg placeholder:text-gray-400 hover:border-gray-200 focus:bg-white group"
                  />
                  <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
                    isEmailValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                  }`}>
                    <div className="w-8 h-8 bg-payzoo-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <Button
                onClick={handleContinue}
                disabled={!isEmailValid}
                className={`w-full h-14 payzoo-gradient text-white rounded-2xl font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed group relative overflow-hidden transition-all duration-300 ${
                  isEmailValid ? 'hover:scale-[1.02] hover:-translate-y-0.5' : ''
                }`}
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative flex items-center justify-center">
                  Continuer
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="group">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-payzoo-green-50/30 rounded-2xl px-5 py-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
                  <div className="w-12 h-12 payzoo-gradient rounded-xl flex items-center justify-center text-white font-semibold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                    {email.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-medium truncate">{email}</p>
                    <p className="text-gray-500 text-sm">Prêt à se connecter</p>
                  </div>
                  <button 
                    onClick={removeEmailTag}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-white rounded-full transition-all duration-200 hover:scale-110"
                  >
                    ×
                  </button>
                </div>
              </div>

              <Button
                onClick={handleConnection}
                className="w-full h-14 payzoo-gradient text-white rounded-2xl font-medium text-lg shadow-lg hover:shadow-xl group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative flex items-center justify-center">
                  Se connecter
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          )}
        </div>

        {/* Footer avec animation */}
        <div className={`text-center space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-payzoo-green-500 rounded-full animate-pulse hover:scale-150 transition-transform duration-200 cursor-pointer"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
          <p className="text-xs text-gray-400 font-light tracking-wide">© 2024 Payzoo • Simply better</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
