
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
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-xs space-y-12">
        {/* Logo ultra-simple */}
        <div className="text-center">
          <div className="w-12 h-12 payzoo-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <h1 className="text-3xl font-light text-gray-900 tracking-tight">Payzoo</h1>
        </div>

        {/* Formulaire minimaliste */}
        <div className="space-y-6">
          {!showEmailTag ? (
            <>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full h-12 pl-10 pr-10 border border-gray-200 rounded-xl focus:ring-0 focus:border-payzoo-green-500 transition-colors bg-white"
                />
                {isEmailValid && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Check className="w-4 h-4 text-payzoo-green-500" />
                  </div>
                )}
              </div>
              
              <Button
                onClick={handleContinue}
                disabled={!isEmailValid}
                className="w-full h-12 payzoo-gradient text-white rounded-xl font-medium disabled:opacity-30 disabled:cursor-not-allowed group"
              >
                Continuer
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </>
          ) : (
            <>
              <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-4 py-4">
                <div className="w-8 h-8 payzoo-gradient rounded-lg flex items-center justify-center text-white font-medium text-sm">
                  {email.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-medium text-sm truncate">{email}</p>
                </div>
                <button 
                  onClick={removeEmailTag}
                  className="text-gray-400 hover:text-gray-600 text-lg font-light"
                >
                  ×
                </button>
              </div>

              <Button
                onClick={handleConnection}
                className="w-full h-12 payzoo-gradient text-white rounded-xl font-medium group"
              >
                Se connecter
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </>
          )}
        </div>

        {/* Footer minimal */}
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1 h-1 bg-payzoo-green-500 rounded-full"></div>
            ))}
          </div>
          <p className="text-xs text-gray-400">© 2024 Payzoo</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
