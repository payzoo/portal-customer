
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Check, Sparkles } from "lucide-react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showEmailTag, setShowEmailTag] = useState(false);
  const navigate = useNavigate();
  const { setPendingEmail } = useAuth();

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
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        {/* Logo minimaliste */}
        <div className="text-center mb-16">
          <div className="relative inline-flex items-center justify-center w-14 h-14 payzoo-gradient rounded-2xl mb-8 shadow-lg">
            <span className="text-white font-bold text-xl">P</span>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 text-payzoo-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-light text-gray-900 mb-3 tracking-tight">Payzoo</h1>
          <p className="text-payzoo-green-600 font-medium text-lg">Simply better</p>
        </div>

        {/* Message d'accueil épuré */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-3">Bienvenue</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Connectez-vous pour commencer
          </p>
        </div>

        {/* Formulaire ultra-minimaliste */}
        <div className="space-y-8">
          {!showEmailTag ? (
            <div className="space-y-6">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-payzoo-green-500" />
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full h-14 pl-12 pr-12 text-base border-2 border-gray-100 rounded-2xl focus:ring-0 focus:border-payzoo-green-500 transition-all duration-300 bg-gray-50/50 placeholder:text-gray-400 font-light"
                />
                {isEmailValid && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300">
                    <div className="w-6 h-6 bg-payzoo-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
              
              <Button
                onClick={handleContinue}
                disabled={!isEmailValid}
                className="w-full h-14 payzoo-gradient hover:opacity-90 text-white rounded-2xl font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group border-0"
              >
                <span>Continuer</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-gradient-to-r from-payzoo-green-50 to-payzoo-green-100 border border-payzoo-green-200 rounded-2xl px-6 py-5 transition-all duration-300">
                <div className="w-12 h-12 payzoo-gradient rounded-xl flex items-center justify-center text-white font-semibold text-lg shadow-md">
                  {email.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="text-payzoo-green-800 font-medium">{email}</p>
                  <p className="text-payzoo-green-600 text-sm">Prêt à continuer</p>
                </div>
                <button 
                  onClick={removeEmailTag}
                  className="text-payzoo-green-600 hover:text-payzoo-green-800 transition-colors p-2 hover:bg-payzoo-green-200 rounded-xl"
                >
                  ×
                </button>
              </div>

              <Button
                onClick={handleConnection}
                className="w-full h-14 payzoo-gradient hover:opacity-90 text-white rounded-2xl font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
              >
                <span>Se connecter</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          )}
        </div>

        {/* Indicateurs de confiance minimalistes */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-payzoo-green-500 rounded-full"></div>
            <span className="text-sm text-gray-500 font-light">Sécurisé</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-payzoo-green-500 rounded-full"></div>
            <span className="text-sm text-gray-500 font-light">Rapide</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-payzoo-green-500 rounded-full"></div>
            <span className="text-sm text-gray-500 font-light">Simple</span>
          </div>
        </div>

        {/* Footer ultra-minimal */}
        <div className="mt-20 text-center">
          <div className="flex justify-center space-x-6 text-sm text-gray-400 mb-4">
            <a href="#" className="hover:text-payzoo-green-600 transition-colors duration-200">Conditions</a>
            <a href="#" className="hover:text-payzoo-green-600 transition-colors duration-200">Confidentialité</a>
          </div>
          <p className="text-xs text-gray-400 font-light">© 2024 Payzoo</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
