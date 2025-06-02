
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { X, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-white flex">
      {/* Section gauche - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-payzoo-green-50 via-payzoo-green-100 to-payzoo-green-200 flex-col justify-center items-center p-12 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-payzoo-green-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-white/30 rounded-full blur-2xl"></div>
        
        <div className="text-center relative z-10">
          <div className="mb-8">
            <div className="w-20 h-20 payzoo-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-white font-bold text-3xl">P</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Payzoo</h1>
            <p className="text-xl text-payzoo-green-700 font-medium mb-8">Simply better</p>
          </div>
          
          <div className="space-y-6 max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800">
              Gérez vos abonnements en toute simplicité
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Centralisez, organisez et optimisez tous vos abonnements numériques en un seul endroit.
            </p>
          </div>
        </div>
      </div>

      {/* Section droite - Formulaire */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="lg:hidden text-center mb-16">
            <div className="w-16 h-16 payzoo-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white font-bold text-2xl">P</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payzoo</h1>
            <p className="text-payzoo-green-600 font-medium">Simply better</p>
          </div>

          {/* Titre principal */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bienvenue
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Connectez-vous pour accéder à votre espace personnel et gérer vos abonnements
            </p>
          </div>

          {/* Formulaire */}
          <div className="space-y-10">
            {!showEmailTag ? (
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-4">
                  Adresse e-mail
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full h-16 px-5 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-payzoo-green-500 focus:border-payzoo-green-500 transition-all duration-300 bg-gray-50/50 placeholder:text-gray-400"
                  />
                  {isEmailValid && (
                    <div className="absolute inset-y-0 right-5 flex items-center">
                      <div className="w-2.5 h-2.5 bg-payzoo-green-500 rounded-full animate-pulse-green"></div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Compte sélectionné
                </label>
                <div className="relative">
                  <div className="flex items-center space-x-5 bg-payzoo-green-50 border-2 border-payzoo-green-200 rounded-2xl px-6 py-5">
                    <div className="w-14 h-14 payzoo-gradient rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-sm">
                      {email.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="text-payzoo-green-800 font-semibold text-lg">{email}</p>
                      <p className="text-payzoo-green-600 text-sm">Prêt à continuer</p>
                    </div>
                    <button 
                      onClick={removeEmailTag}
                      className="text-payzoo-green-600 hover:text-payzoo-green-800 transition-colors p-3 hover:bg-payzoo-green-100 rounded-xl"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={showEmailTag ? handleConnection : handleContinue}
              disabled={!isEmailValid}
              className="w-full h-16 payzoo-gradient hover:opacity-90 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <span>{showEmailTag ? "Continuer" : "Commencer"}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center space-y-8">
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-payzoo-green-600 transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-payzoo-green-600 transition-colors">Confidentialité</a>
            </div>
            <p className="text-xs text-gray-400">© 2024 Payzoo. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
