
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Phone, User, Check, Sparkles } from "lucide-react";

const countries = [
  { code: "+1", country: "US", flag: "🇺🇸", name: "États-Unis" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "Royaume-Uni" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Allemagne" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italie" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Espagne" },
  { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japon" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "Chine" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "Inde" },
];

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

  const FormField = ({ 
    id, 
    label, 
    type, 
    placeholder, 
    value, 
    onChange, 
    icon: Icon, 
    isValid, 
    isPhone = false
  }: {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: any;
    isValid: boolean;
    isPhone?: boolean;
  }) => (
    <div className="space-y-3">
      <Label htmlFor={id} className="payzoo-body-sm font-medium text-muted-foreground">
        {label}
      </Label>
      <div className="relative">
        {isPhone ? (
          <div className="glass-card hover:glass-card rounded-2xl border border-gray-200/30 backdrop-blur-sm bg-background/60 transition-all duration-300 hover:bg-background/80 hover:border-gray-300/50">
            <div className="flex">
              <div className="flex-shrink-0">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-24 h-14 border-0 bg-transparent focus:ring-0 rounded-l-2xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="z-50 bg-background border border-gray-200/30 shadow-xl">
                    {countries.map((country) => (
                      <SelectItem key={`${country.code}-${country.country}`} value={country.code}>
                        <div className="flex items-center space-x-2">
                          <span>{country.flag}</span>
                          <span className="text-sm">{country.code}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1 relative">
                <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                  className="w-full h-14 pl-12 pr-12 border-0 bg-transparent focus:ring-0 focus:border-0 placeholder:text-muted-foreground/60 text-foreground text-base rounded-l-none rounded-r-2xl"
                />
                <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
                  isValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                }`}>
                  <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-background" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card hover:glass-card rounded-2xl border border-gray-200/30 backdrop-blur-sm bg-background/60 transition-all duration-300 hover:bg-background/80 hover:border-gray-300/50">
            <div className="relative flex items-center">
              <Icon className="absolute left-4 text-muted-foreground w-5 h-5" />
              <Input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full h-14 pl-12 pr-12 border-0 bg-transparent focus:ring-0 focus:border-0 placeholder:text-muted-foreground/60 text-foreground text-base"
              />
              <div className={`absolute right-4 transition-all duration-500 ${
                isValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
              }`}>
                <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-background" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic background elements - style harmonisé avec AuthPage */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div 
          className="absolute w-32 h-32 border border-border/20 rounded-full animate-float"
          style={{
            top: '10%',
            left: '5%',
            animationDelay: '0s',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-24 h-24 border border-border/30 rounded-lg rotate-45 animate-float"
          style={{
            top: '20%',
            right: '8%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        ></div>
        <div 
          className="absolute w-16 h-16 bg-foreground/5 rounded-full animate-float"
          style={{
            bottom: '15%',
            left: '10%',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * -0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-20 h-20 border-2 border-foreground/10 rounded-full animate-float"
          style={{
            bottom: '25%',
            right: '15%',
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.03}px)`
          }}
        ></div>

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className={`w-full max-w-md transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          
          {/* Header - style harmonisé avec AuthPage */}
          <div className="text-center mb-12">
            <div className={`transform transition-all duration-700 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              
              {/* Logo avec éléments animés */}
              <div className="relative mb-8">
                <h1 className="payzoo-page-title relative inline-block">
                  Payzoo
                  <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-foreground/40 animate-pulse" />
                </h1>
              </div>

              {/* Indicateur de statut avec style moderne */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-foreground/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="relative">
                  <p className="payzoo-caption uppercase tracking-[0.2em] font-medium text-muted-foreground">
                    Rejoignez-nous
                  </p>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-px bg-foreground/20"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-foreground/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
              
              <p className="payzoo-subtitle">Créez votre compte et découvrez l'avenir des paiements</p>
            </div>
          </div>

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

            {/* Bouton d'inscription - style harmonisé avec AuthPage */}
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

            {/* Redirection vers la connexion */}
            <div className="text-center">
              <p className="payzoo-body-sm mb-6 text-muted-foreground">
                Déjà membre ?{" "}
                <button
                  onClick={handleLoginRedirect}
                  className="text-foreground font-medium hover:underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 rounded-sm px-1"
                >
                  Se connecter
                </button>
              </p>
            </div>
          </div>

          {/* Footer - style harmonisé avec AuthPage */}
          <div className={`text-center space-y-8 mt-12 transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            
            {/* Indicateurs de statut modernes */}
            <div className="flex justify-center space-x-4">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 bg-foreground/60 rounded-full hover:bg-foreground hover:scale-125 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
            
            <p className="payzoo-caption opacity-50 tracking-wider">© 2024 Payzoo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
