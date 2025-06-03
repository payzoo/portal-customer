
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

  const validateName = (name: string) => {
    return name.trim().length >= 2;
  };

  useEffect(() => {
    const isValid = validateEmail(email) && validatePhone(phone) && validateName(firstName) && validateName(lastName);
    setIsFormValid(isValid);
  }, [email, phone, firstName, lastName]);

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

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className={`w-full max-w-sm transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>

          {/* Formulaire d'inscription */}
          <div className={`space-y-4 transform transition-all duration-500 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            
            <div className="grid grid-cols-2 gap-3">
              <FormField
                id="firstName"
                label="Prénom"
                type="text"
                placeholder="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                icon={User}
                isValid={validateName(firstName)}
              />

              <FormField
                id="lastName"
                label="Nom"
                type="text"
                placeholder="Nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                icon={User}
                isValid={validateName(lastName)}
              />
            </div>

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
              placeholder="Votre numéro"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              icon={Phone}
              isValid={validatePhone(phone)}
              isPhone={true}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
            />

            {/* Conditions d'utilisation */}
            <div className="py-3">
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                En continuant, vous acceptez nos{" "}
                <button className="text-foreground hover:underline transition-colors">
                  Conditions d'utilisation
                </button>{" "}
                et notre{" "}
                <button className="text-foreground hover:underline transition-colors">
                  Politique de confidentialité
                </button>.
              </p>
            </div>

            {/* Bouton d'inscription */}
            <Button
              onClick={handleRegister}
              disabled={!isFormValid}
              className={`w-full h-12 bg-foreground text-background font-medium rounded-xl transition-all duration-200 hover:bg-foreground/90 active:scale-[0.98] group ${
                !isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'
              }`}
            >
              <span className="mr-2">Créer mon compte</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
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
