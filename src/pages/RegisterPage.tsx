
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Phone, User, Check, Sparkles } from "lucide-react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setPendingEmail } = useAuth();

  useEffect(() => {
    setIsLoaded(true);
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
    prefix 
  }: {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: any;
    isValid: boolean;
    prefix?: string;
  }) => (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div className="relative group">
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 ${focusedField === id ? 'opacity-100 blur-md' : ''}`}></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-500">
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full transition-transform duration-1000 ${focusedField === id ? 'translate-x-full' : ''}`}></div>
          <div className="relative flex items-center">
            {prefix && (
              <div className="absolute left-4 flex items-center space-x-2 z-10">
                <span className="text-sm">🇺🇸</span>
                <span className="text-gray-600 text-sm">+1</span>
              </div>
            )}
            <Icon className={`absolute ${prefix ? 'left-20' : 'left-4'} text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-blue-500 group-focus-within:scale-110 z-10`} />
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onFocus={() => setFocusedField(id)}
              onBlur={() => setFocusedField(null)}
              className={`w-full h-14 ${prefix ? 'pl-28' : 'pl-14'} pr-14 border-0 bg-transparent text-base placeholder:text-gray-400 focus:ring-0 focus:outline-none font-light`}
            />
            <div className={`absolute right-4 transition-all duration-500 z-10 ${
              isValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
            }`}>
              <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-indigo-400/5 via-transparent to-transparent rounded-full animate-float"></div>
      </div>

      <div className={`w-full max-w-md space-y-8 relative z-10 transform transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Header */}
        <div className="text-center space-y-4">
          <div className={`transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg">
                <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700 tracking-wide">PAYZOO</span>
                <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            <h1 className="text-4xl font-light text-gray-900 tracking-tight mb-2">
              Rejoignez l'innovation
            </h1>
            <p className="text-gray-600 text-base">Créez votre compte et découvrez l'avenir des paiements.</p>
          </div>
        </div>

        {/* Registration form */}
        <div className={`space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          
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
            placeholder="votre.email@exemple.com"
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
            prefix="+1"
          />

          {/* Terms */}
          <div className="text-center py-2">
            <p className="text-xs text-gray-500 leading-relaxed">
              En continuant, vous acceptez nos{" "}
              <button className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors">
                Conditions d'utilisation
              </button>{" "}
              et notre{" "}
              <button className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors">
                Politique de confidentialité
              </button>.
            </p>
          </div>

          {/* Register button */}
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 ${isFormValid ? 'group-hover:opacity-70' : ''}`}></div>
            <Button
              onClick={handleRegister}
              disabled={!isFormValid}
              className={`relative w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium text-base shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:from-gray-400 disabled:to-gray-400 group overflow-hidden transition-all duration-300 ${
                isFormValid ? 'hover:scale-[1.02] hover:-translate-y-1' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative flex items-center justify-center font-medium tracking-wide">
                Créer mon compte
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Login redirect */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Déjà membre ?{" "}
              <button
                onClick={handleLoginRedirect}
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 hover:underline underline-offset-2"
              >
                Se connecter
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center space-y-4 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="flex items-center justify-center space-x-6 text-xs text-gray-400">
            <button className="hover:text-gray-600 transition-colors">Aide</button>
            <button className="hover:text-gray-600 transition-colors">Support</button>
            <button className="hover:text-gray-600 transition-colors">Contact</button>
          </div>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-1 h-1 bg-blue-500 rounded-full animate-pulse hover:scale-150 transition-all duration-300"
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s' }}
              ></div>
            ))}
          </div>
          <p className="text-xs text-gray-400 font-light opacity-60">© 2024 Payzoo - L'avenir des paiements</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
