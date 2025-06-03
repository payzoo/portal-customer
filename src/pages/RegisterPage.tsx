
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Phone, User } from "lucide-react";
import FormField from "@/components/auth/FormField";
import RegisterHeader from "@/components/auth/RegisterHeader";
import RegisterFooter from "@/components/auth/RegisterFooter";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+33");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const { setPendingEmail } = useAuth();

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    return phone.length >= 10;
  };

  const validateFullName = (name: string) => {
    return name.trim().length >= 2;
  };

  useEffect(() => {
    const isValid = validateEmail(email) && validatePhone(phone) && validateFullName(fullName);
    setIsFormValid(isValid);
  }, [email, phone, fullName]);

  const handleRegister = () => {
    if (isFormValid) {
      setPendingEmail(email);
      navigate("/verify-otp");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <RegisterHeader isLoaded={isLoaded} mousePosition={mousePosition} />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className={`w-full max-w-md transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>

          {/* Formulaire d'inscription */}
          <div className={`space-y-6 transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            
            <FormField
              id="fullName"
              label="Nom complet"
              type="text"
              placeholder="Votre nom complet"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              icon={User}
              isValid={validateFullName(fullName)}
            />

            <FormField
              id="email"
              label="Adresse e-mail"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={Mail}
              isValid={validateEmail(email)}
            />

            <FormField
              id="phone"
              label="Numéro de téléphone"
              type="tel"
              placeholder="Votre numéro de téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              icon={Phone}
              isValid={validatePhone(phone)}
              isPhone={true}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
            />

            {/* Conditions d'utilisation */}
            <div className="text-center py-2">
              <p className="payzoo-body-sm text-muted-foreground leading-relaxed">
                En continuant, vous acceptez nos{" "}
                <button className="text-foreground hover:underline transition-colors underline-offset-2">
                  Conditions d'utilisation
                </button>{" "}
                et notre{" "}
                <button className="text-foreground hover:underline transition-colors underline-offset-2">
                  Politique de confidentialité
                </button>.
              </p>
            </div>

            {/* Bouton d'inscription */}
            <Button
              onClick={handleRegister}
              disabled={!isFormValid}
              className={`w-full h-14 bg-foreground text-background font-medium rounded-2xl transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98] group ${
                !isFormValid ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-foreground/10'
              }`}
            >
              <span className="mr-2">Créer mon compte</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Footer */}
          <RegisterFooter isLoaded={isLoaded} onLoginRedirect={handleLoginRedirect} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
