
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">link</span>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Bienvenue sur Link
          </h1>
          <p className="text-gray-600">
            Connectez-vous ou inscrivez-vous pour démarrer.
          </p>
        </div>

        {/* Formulaire */}
        <div className="space-y-4">
          {!showEmailTag ? (
            <Input
              type="email"
              placeholder="Adresse e-mail"
              value={email}
              onChange={handleEmailChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          ) : (
            <div className="relative">
              <div className="flex items-center space-x-2 bg-green-100 border border-green-300 rounded-lg px-4 py-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  D
                </div>
                <span className="text-green-700 flex-1">{email}</span>
                <button 
                  onClick={removeEmailTag}
                  className="text-green-600 hover:text-green-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          <Button
            onClick={showEmailTag ? handleConnection : handleContinue}
            disabled={!isEmailValid}
            className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium"
          >
            {showEmailTag ? "Connexion" : "Continuer"}
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">Aide</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">Conditions</a>
            <a href="#" className="hover:text-gray-700">Confidentialité</a>
            <a href="#" className="hover:text-gray-700">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
