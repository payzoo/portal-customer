
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { X } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-payzoo-green-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-2">
            <div className="relative">
              <div className="w-12 h-12 payzoo-gradient rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-payzoo-green-500 rounded-full animate-pulse-green"></div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Payzoo</h1>
              <p className="text-sm text-payzoo-green-600 font-medium">Simply better</p>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Bienvenue
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Connectez-vous ou créez votre compte<br />
            pour commencer votre expérience
          </p>
        </div>

        {/* Formulaire */}
        <div className="space-y-6">
          {!showEmailTag ? (
            <div className="relative">
              <Input
                type="email"
                placeholder="Votre adresse e-mail"
                value={email}
                onChange={handleEmailChange}
                className="w-full h-14 px-5 text-base border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-payzoo-green-500 focus:border-payzoo-green-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                {isEmailValid && (
                  <div className="w-2 h-2 bg-payzoo-green-500 rounded-full animate-pulse-green"></div>
                )}
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="flex items-center space-x-4 bg-payzoo-green-50 border-2 border-payzoo-green-200 rounded-2xl px-5 py-4">
                <div className="w-10 h-10 payzoo-gradient rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {email.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="text-payzoo-green-800 font-medium text-sm">{email}</p>
                  <p className="text-payzoo-green-600 text-xs">Prêt à continuer</p>
                </div>
                <button 
                  onClick={removeEmailTag}
                  className="text-payzoo-green-600 hover:text-payzoo-green-800 transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          <Button
            onClick={showEmailTag ? handleConnection : handleContinue}
            disabled={!isEmailValid}
            className="w-full h-14 payzoo-gradient hover:opacity-90 text-white rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {showEmailTag ? "Continuer" : "Commencer"}
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center space-y-6">
          <div className="flex justify-center space-x-8 text-xs text-gray-400">
            <a href="#" className="hover:text-payzoo-green-600 transition-colors">Conditions</a>
            <a href="#" className="hover:text-payzoo-green-600 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-payzoo-green-600 transition-colors">Support</a>
          </div>
          <p className="text-xs text-gray-400">© 2024 Payzoo. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
