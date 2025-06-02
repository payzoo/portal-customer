
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, Smartphone, Mail } from "lucide-react";
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
      
      // Simulation d'un délai de vérification
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
    <div className="min-h-screen bg-gradient-to-br from-payzoo-green-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header avec bouton retour */}
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={handleBack}
            className="p-3 hover:bg-white/60 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-8 h-8 payzoo-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-payzoo-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Smartphone className="w-8 h-8 text-payzoo-green-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Code de vérification
          </h1>
          <div className="space-y-2">
            <p className="text-gray-600 text-sm">
              Nous avons envoyé un code à 6 chiffres à
            </p>
            <p className="text-payzoo-green-700 font-semibold text-sm">
              {pendingEmail}
            </p>
          </div>
        </div>

        {/* Input OTP */}
        <div className="flex justify-center mb-8">
          <InputOTP 
            maxLength={6} 
            value={otp} 
            onChange={setOtp}
            onComplete={handleVerify}
          >
            <InputOTPGroup className="gap-3">
              <InputOTPSlot index={0} className="w-12 h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-payzoo-green-500 transition-colors" />
              <InputOTPSlot index={1} className="w-12 h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-payzoo-green-500 transition-colors" />
              <InputOTPSlot index={2} className="w-12 h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-payzoo-green-500 transition-colors" />
              <InputOTPSlot index={3} className="w-12 h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-payzoo-green-500 transition-colors" />
              <InputOTPSlot index={4} className="w-12 h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-payzoo-green-500 transition-colors" />
              <InputOTPSlot index={5} className="w-12 h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-payzoo-green-500 transition-colors" />
            </InputOTPGroup>
          </InputOTP>
        </div>

        {/* Options de renvoi */}
        <div className="text-center space-y-4 mb-8">
          <button 
            onClick={handleResendCode}
            className="text-payzoo-green-600 hover:text-payzoo-green-800 font-medium text-sm transition-colors"
          >
            Renvoyer le code
          </button>
          
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs">
            <Mail className="w-4 h-4" />
            <span>Code valide pendant 10 minutes</span>
          </div>
        </div>

        {/* Bouton de vérification manuel */}
        {otp.length === 6 && (
          <Button
            onClick={handleVerify}
            disabled={isLoading}
            className="w-full h-14 payzoo-gradient hover:opacity-90 text-white rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {isLoading ? "Vérification..." : "Vérifier"}
          </Button>
        )}

        {/* Note pour développement */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm text-blue-700 text-center">
            <strong>Code de test :</strong> 123456
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
