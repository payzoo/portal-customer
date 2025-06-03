
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, Shield, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedBackground from "@/components/auth/AnimatedBackground";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const { verifyOTP, pendingEmail } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    setIsLoaded(true);
    
    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVerify = async () => {
    if (otp.length === 6) {
      setIsLoading(true);
      setShowError(false);
      
      setTimeout(() => {
        const success = verifyOTP(otp);
        if (success) {
          setShowSuccess(true);
          setTimeout(() => {
            toast({
              title: "Connexion réussie",
              description: "Bienvenue sur Payzoo !",
            });
            navigate("/");
          }, 1500);
        } else {
          setShowError(true);
          setOtp("");
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
    setTimeLeft(600);
    toast({
      title: "Code renvoyé",
      description: "Un nouveau code a été envoyé.",
    });
  };

  const getStatusIcon = () => {
    if (showSuccess) return <CheckCircle className="w-6 h-6 text-green-500" />;
    if (showError) return <AlertCircle className="w-6 h-6 text-red-500" />;
    return <Shield className="w-6 h-6 text-foreground" />;
  };

  const getStatusColor = () => {
    if (showSuccess) return "border-green-200 bg-green-50/60";
    if (showError) return "border-red-200 bg-red-50/60";
    return "border-border/20 bg-background/60";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      {/* Background simplifié et cohérent */}
      <AnimatedBackground />

      <div className={`w-full max-w-md space-y-8 relative z-10 transform transition-all duration-500 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        
        {/* Header avec bouton retour et timer */}
        <div className={`flex items-center justify-between transform transition-all duration-500 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '100ms' }}>
          <button 
            onClick={handleBack}
            className="p-3 hover:bg-muted/80 rounded-xl transition-all duration-200 border border-border/20 backdrop-blur-sm hover:scale-105 group"
          >
            <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
          
          {/* Timer simplifié */}
          <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-border/20">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="text-center space-y-8">
          {/* Icône et titre */}
          <div className={`transform transition-all duration-500 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className={`w-16 h-16 ${getStatusColor()} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 backdrop-blur-sm ${
              showSuccess ? 'animate-pulse' : showError ? 'animate-pulse' : ''
            }`}>
              {getStatusIcon()}
            </div>
            
            <h1 className="text-2xl font-light text-foreground tracking-tight mb-3">
              Code de vérification
            </h1>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                Code envoyé à
              </p>
              <p className="text-foreground font-medium">
                {pendingEmail}
              </p>
            </div>
          </div>

          {/* Champ OTP */}
          <div className={`flex justify-center transform transition-all duration-500 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <InputOTP 
              maxLength={6} 
              value={otp} 
              onChange={setOtp}
              onComplete={handleVerify}
              disabled={isLoading || showSuccess}
            >
              <InputOTPGroup className="gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot 
                    key={index}
                    index={index} 
                    className={`w-12 h-12 text-lg border-2 rounded-xl transition-all duration-200 ${
                      showError 
                        ? 'border-red-300 bg-red-50/60' 
                        : showSuccess 
                        ? 'border-green-300 bg-green-50/60'
                        : 'border-border bg-background/60 backdrop-blur-sm focus:border-foreground focus:scale-105'
                    } hover:shadow-sm`} 
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Messages de succès/erreur */}
          {showSuccess && (
            <div className="animate-fade-in bg-green-50/80 border border-green-200/60 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-green-700 font-medium">✨ Vérification réussie !</p>
            </div>
          )}

          {showError && (
            <div className="animate-fade-in bg-red-50/80 border border-red-200/60 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-red-700 font-medium">❌ Code incorrect, réessayez</p>
            </div>
          )}

          {/* Bouton de vérification manuelle */}
          {otp.length === 6 && !showSuccess && (
            <div className={`transform transition-all duration-300 ease-out ${
              otp.length === 6 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
            }`}>
              <Button
                onClick={handleVerify}
                disabled={isLoading}
                className="w-full h-12 bg-foreground text-background rounded-xl font-medium transition-all duration-200 hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span className="flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2"></div>
                      Vérification...
                    </>
                  ) : (
                    "Vérifier le code"
                  )}
                </span>
              </Button>
            </div>
          )}

          {/* Options de renvoi */}
          <div className={`space-y-4 transform transition-all duration-500 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            {timeLeft > 0 ? (
              <p className="text-muted-foreground text-sm">
                Vous pourrez renvoyer le code dans {formatTime(timeLeft)}
              </p>
            ) : (
              <button 
                onClick={handleResendCode}
                className="text-foreground hover:text-foreground/80 font-medium transition-all duration-200 hover:scale-105"
              >
                Renvoyer le code
              </button>
            )}
          </div>

          {/* Note de développement */}
          <div className={`transform transition-all duration-500 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '500ms' }}>
            <div className="bg-blue-50/80 backdrop-blur-sm border border-blue-200/60 rounded-xl p-4">
              <p className="text-blue-700 text-sm font-medium">
                💡 <strong>Code de test :</strong> 123456
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
