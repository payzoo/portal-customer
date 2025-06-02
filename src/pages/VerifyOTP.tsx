
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, Shield, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    if (showSuccess) return <CheckCircle className="w-8 h-8 text-green-500" />;
    if (showError) return <AlertCircle className="w-8 h-8 text-red-500" />;
    return <Shield className="w-8 h-8 text-black" />;
  };

  const getStatusColor = () => {
    if (showSuccess) return "border-green-200 bg-green-50";
    if (showError) return "border-red-200 bg-red-50";
    return "border-gray-200 bg-gray-50";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/20 to-slate-100/30 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/30 rounded-full blur-3xl animate-pulse top-10 left-10" style={{ animationDuration: '4s' }}></div>
        <div className="absolute w-80 h-80 bg-gradient-to-l from-emerald-100/30 to-cyan-100/20 rounded-full blur-3xl animate-pulse right-15 bottom-20" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className={`w-full max-w-md space-y-8 relative z-10 transform transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        
        {/* Header with back button */}
        <div className={`flex items-center justify-between transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          <button 
            onClick={handleBack}
            className="p-3 hover:bg-white/60 rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-sm hover:scale-110 hover:shadow-lg group"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
          </button>
          
          {/* Timer */}
          <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center space-y-8">
          {/* Icon and title */}
          <div className={`transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className={`w-20 h-20 ${getStatusColor()} rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
              showSuccess ? 'animate-bounce' : showError ? 'animate-pulse' : ''
            }`}>
              {getStatusIcon()}
            </div>
            
            <h1 className="text-3xl font-light text-black tracking-tight mb-4">
              Code de vérification
            </h1>
            <div className="space-y-3">
              <p className="text-gray-500 text-base">
                Code envoyé à
              </p>
              <p className="text-black font-medium text-lg">
                {pendingEmail}
              </p>
            </div>
          </div>

          {/* OTP Input */}
          <div className={`flex justify-center transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <InputOTP 
              maxLength={6} 
              value={otp} 
              onChange={setOtp}
              onComplete={handleVerify}
              disabled={isLoading || showSuccess}
            >
              <InputOTPGroup className="gap-3">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot 
                    key={index}
                    index={index} 
                    className={`w-14 h-14 text-xl border-2 rounded-xl transition-all duration-300 ${
                      showError 
                        ? 'border-red-300 bg-red-50' 
                        : showSuccess 
                        ? 'border-green-300 bg-green-50'
                        : 'border-gray-200 bg-white/60 backdrop-blur-sm focus:border-black focus:scale-110'
                    } hover:shadow-lg`} 
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Success/Error messages */}
          {showSuccess && (
            <div className="animate-fade-in bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-700 font-medium">✨ Vérification réussie !</p>
            </div>
          )}

          {showError && (
            <div className="animate-fade-in bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-700 font-medium">❌ Code incorrect, réessayez</p>
            </div>
          )}

          {/* Manual verify button */}
          {otp.length === 6 && !showSuccess && (
            <div className={`transform transition-all duration-500 ease-out ${
              otp.length === 6 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
            }`}>
              <Button
                onClick={handleVerify}
                disabled={isLoading}
                className="relative w-full h-14 bg-black text-white rounded-xl font-medium text-base shadow-xl hover:shadow-2xl disabled:opacity-40 disabled:cursor-not-allowed group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:bg-gray-800"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Vérification...
                    </>
                  ) : (
                    "Vérifier le code"
                  )}
                </span>
              </Button>
            </div>
          )}

          {/* Resend options */}
          <div className={`space-y-6 transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            {timeLeft > 0 ? (
              <p className="text-gray-400 text-sm">
                Vous pourrez renvoyer le code dans {formatTime(timeLeft)}
              </p>
            ) : (
              <button 
                onClick={handleResendCode}
                className="text-black hover:text-gray-600 font-medium text-base transition-all duration-300 hover:scale-105"
              >
                Renvoyer le code
              </button>
            )}
          </div>

          {/* Development note */}
          <div className={`transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '1000ms' }}>
            <div className="bg-blue-50/60 backdrop-blur-sm border border-blue-200/60 rounded-xl p-4">
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
