
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Check } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo et branding */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 payzoo-gradient rounded-2xl mb-6 shadow-lg">
            <span className="text-white font-bold text-2xl">P</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payzoo</h1>
          <p className="text-payzoo-green-600 font-medium mb-8">Simply better</p>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">Bienvenue</h2>
            <p className="text-gray-500 leading-relaxed">
              Connectez-vous pour gérer vos abonnements en toute simplicité
            </p>
          </div>
        </div>

        {/* Formulaire simplifié */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 space-y-8">
          {!showEmailTag ? (
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full h-14 pl-12 pr-12 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-payzoo-green-500 focus:border-payzoo-green-500 transition-all duration-200 bg-gray-50/50"
                />
                {isEmailValid && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-payzoo-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-payzoo-green-50 border-2 border-payzoo-green-200 rounded-xl px-5 py-4">
                <div className="w-12 h-12 payzoo-gradient rounded-xl flex items-center justify-center text-white font-semibold text-lg">
                  {email.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="text-payzoo-green-800 font-semibold">{email}</p>
                  <p className="text-payzoo-green-600 text-sm">Prêt à continuer</p>
                </div>
                <button 
                  onClick={removeEmailTag}
                  className="text-payzoo-green-600 hover:text-payzoo-green-800 transition-colors p-2 hover:bg-payzoo-green-100 rounded-lg"
                >
                  ×
                </button>
              </div>
            </div>
          )}

          <Button
            onClick={showEmailTag ? handleConnection : handleContinue}
            disabled={!isEmailValid}
            className="w-full h-14 payzoo-gradient hover:opacity-90 text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <span>{showEmailTag ? "Continuer" : "Commencer"}</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Avantages */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-10 h-10 bg-payzoo-green-100 rounded-xl flex items-center justify-center mx-auto">
              <div className="w-4 h-4 bg-payzoo-green-500 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-600 font-medium">Sécurisé</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 bg-payzoo-green-100 rounded-xl flex items-center justify-center mx-auto">
              <div className="w-4 h-4 bg-payzoo-green-500 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-600 font-medium">Simple</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 bg-payzoo-green-100 rounded-xl flex items-center justify-center mx-auto">
              <div className="w-4 h-4 bg-payzoo-green-500 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-600 font-medium">Rapide</p>
          </div>
        </div>

        {/* Footer minimaliste */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-payzoo-green-600 transition-colors">Conditions</a>
            <a href="#" className="hover:text-payzoo-green-600 transition-colors">Confidentialité</a>
          </div>
          <p className="text-xs text-gray-400">© 2024 Payzoo</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
