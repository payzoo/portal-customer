
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AnimatedBackground from "@/components/auth/AnimatedBackground";
import StartupElements from "@/components/auth/StartupElements";
import Header from "@/components/auth/Header";
import EmailInput from "@/components/auth/EmailInput";
import EmailConfirmation from "@/components/auth/EmailConfirmation";
import Footer from "@/components/auth/Footer";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showEmailTag, setShowEmailTag] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const { setPendingEmail } = useAuth();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const removeEmailTag = () => {
    setShowEmailTag(false);
    setEmail("");
    setIsEmailValid(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background elements avec startup vibe */}
      <AnimatedBackground />
      <StartupElements isLoaded={isLoaded} />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className={`w-full max-w-md transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          
          {/* Header with startup elements */}
          <Header isLoaded={isLoaded} />

          {/* Form section */}
          {!showEmailTag ? (
            <EmailInput
              email={email}
              setEmail={setEmail}
              isEmailValid={isEmailValid}
              setIsEmailValid={setIsEmailValid}
              setShowEmailTag={setShowEmailTag}
              onContinue={handleContinue}
              isLoaded={isLoaded}
            />
          ) : (
            <EmailConfirmation
              email={email}
              onConnection={handleConnection}
              onRemoveEmail={removeEmailTag}
              isLoaded={isLoaded}
            />
          )}

          {/* Footer with startup messaging */}
          <Footer onRegisterRedirect={handleRegisterRedirect} isLoaded={isLoaded} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
