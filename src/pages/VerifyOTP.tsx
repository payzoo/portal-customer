
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { verifyOTP, pendingEmail } = useAuth();
  const { toast } = useToast();

  const handleVerify = () => {
    if (otp.length === 6) {
      const success = verifyOTP(otp);
      if (success) {
        toast({
          title: "Connexion réussie",
          description: "Vous êtes maintenant connecté.",
        });
        navigate("/");
      } else {
        toast({
          title: "Code incorrect",
          description: "Le code saisi n'est pas valide.",
          variant: "destructive",
        });
      }
    }
  };

  const handleBack = () => {
    navigate("/auth");
  };

  const handleEmailPreference = () => {
    // Simulation du renvoi par email
    toast({
      title: "Code envoyé",
      description: "Un nouveau code a été envoyé par e-mail.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header avec bouton retour */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-sm text-gray-500">Aide</span>
        </div>

        {/* Contenu principal */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Nous venons de vous envoyer un SMS
          </h1>
          <p className="text-gray-600 mb-2">
            Veuillez saisir le code à 6 chiffres envoyé à votre numéro de
          </p>
          <p className="text-gray-600">
            téléphone <span className="font-medium">• • • • • • +94</span> :
          </p>
        </div>

        {/* Input OTP */}
        <div className="flex justify-center mb-8">
          <InputOTP 
            maxLength={6} 
            value={otp} 
            onChange={setOtp}
            onComplete={handleVerify}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} className="w-12 h-12 text-lg border-2" />
              <InputOTPSlot index={1} className="w-12 h-12 text-lg border-2" />
              <InputOTPSlot index={2} className="w-12 h-12 text-lg border-2" />
              <InputOTPSlot index={3} className="w-12 h-12 text-lg border-2" />
              <InputOTPSlot index={4} className="w-12 h-12 text-lg border-2" />
              <InputOTPSlot index={5} className="w-12 h-12 text-lg border-2" />
            </InputOTPGroup>
          </InputOTP>
        </div>

        {/* Option email */}
        <div className="text-center">
          <button 
            onClick={handleEmailPreference}
            className="text-gray-600 hover:text-gray-800 underline text-sm"
          >
            Recevoir plutôt un code par e-mail
          </button>
        </div>

        {/* Note pour développement */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Code de test :</strong> 123456
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
