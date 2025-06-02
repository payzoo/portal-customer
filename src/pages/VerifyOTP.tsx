
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, Smartphone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { verifyOTP, pendingEmail } = useAuth();
  const { toast } = useToast();

  const handleVerify = async () => {
    if (otp.length === 6) {
      setIsLoading(true);
      
      setTimeout(() => {
        const success = verifyOTP(otp);
        if (success) {
          toast({
            title: "Connexion réussie",
            description: "Bienvenue sur Payzoo !",
          });
          navigate("/");
        } else {
          toast({
            title: "Code incorrect",
            description: "Veuillez vérifier le code et réessayer.",
            variant: "destructive",
          });
        }
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleBack = () => {
    navigate("/auth");
  };

  const handleResendCode = () => {
    toast({
      title: "Code renvoyé",
      description: "Un nouveau code a été envoyé.",
    });
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
            <p className="text-xl text-payzoo-green-700 font-medium">Simply better</p>
          </div>
          
          <div className="space-y-6 max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800">
              Sécurité maximale
            </h2>
            <p className="text-gray-600 leading-relaxed">
              La vérification en deux étapes protège votre compte contre tout accès non autorisé.
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

          {/* Header avec bouton retour */}
          <div className="flex items-center justify-between mb-16">
            <button 
              onClick={handleBack}
              className="p-4 hover:bg-gray-50 rounded-2xl transition-colors border border-gray-200"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Contenu principal */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-payzoo-green-50 border border-payzoo-green-200 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Smartphone className="w-10 h-10 text-payzoo-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Code de vérification
            </h1>
            <div className="space-y-4">
              <p className="text-gray-500 text-lg leading-relaxed">
                Nous avons envoyé un code à 6 chiffres à
              </p>
              <p className="text-payzoo-green-700 font-semibold text-lg">
                {pendingEmail}
              </p>
            </div>
          </div>

          {/* Input OTP */}
          <div className="flex justify-center mb-12">
            <InputOTP 
              maxLength={6} 
              value={otp} 
              onChange={setOtp}
              onComplete={handleVerify}
            >
              <InputOTPGroup className="gap-4">
                <InputOTPSlot index={0} className="w-16 h-16 text-xl border-2 border-gray-200 rounded-2xl focus:border-payzoo-green-500 transition-colors" />
                <InputOTPSlot index={1} className="w-16 h-16 text-xl border-2 border-gray-200 rounded-2xl focus:border-payzoo-green-500 transition-colors" />
                <InputOTPSlot index={2} className="w-16 h-16 text-xl border-2 border-gray-200 rounded-2xl focus:border-payzoo-green-500 transition-colors" />
                <InputOTPSlot index={3} className="w-16 h-16 text-xl border-2 border-gray-200 rounded-2xl focus:border-payzoo-green-500 transition-colors" />
                <InputOTPSlot index={4} className="w-16 h-16 text-xl border-2 border-gray-200 rounded-2xl focus:border-payzoo-green-500 transition-colors" />
                <InputOTPSlot index={5} className="w-16 h-16 text-xl border-2 border-gray-200 rounded-2xl focus:border-payzoo-green-500 transition-colors" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Bouton de vérification manuel */}
          {otp.length === 6 && (
            <Button
              onClick={handleVerify}
              disabled={isLoading}
              className="w-full h-16 payzoo-gradient hover:opacity-90 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
            >
              {isLoading ? "Vérification..." : "Vérifier le code"}
            </Button>
          )}

          {/* Options de renvoi */}
          <div className="text-center space-y-8">
            <button 
              onClick={handleResendCode}
              className="text-payzoo-green-600 hover:text-payzoo-green-800 font-medium text-lg transition-colors"
            >
              Renvoyer le code
            </button>
            
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Clock className="w-5 h-5" />
              <span className="text-base">Code valide pendant 10 minutes</span>
            </div>
          </div>

          {/* Note pour développement */}
          <div className="mt-16 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
            <p className="text-blue-700 text-center font-medium">
              <strong>Code de test :</strong> 123456
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
