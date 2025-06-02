
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Phone, User, Check } from "lucide-react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const { setPendingEmail } = useAuth();

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/20 to-slate-100/30 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background with mouse interaction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '10%'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-emerald-100/30 to-cyan-100/20 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            right: '15%',
            bottom: '20%'
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-50/10 via-transparent to-transparent rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className={`w-full max-w-md space-y-10 relative z-10 transform transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Header */}
        <div className="text-center">
          <div className={`transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h1 className="text-5xl font-light text-black tracking-tight mb-3">
              Bienvenue sur Payzoo
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-1 h-1 bg-black rounded-full animate-pulse"></div>
              <p className="text-sm text-black font-medium tracking-wider">INSCRIVEZ-VOUS</p>
              <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <p className="text-gray-600 text-sm mt-4">Connectez-vous ou inscrivez-vous pour démarrer.</p>
          </div>
        </div>

        {/* Registration form */}
        <div className={`space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          
          {/* Email field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">Adresse e-mail</Label>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-black/20 via-black/20 to-black/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-focus-within:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center">
                  <Mail className="absolute left-5 text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-black group-focus-within:scale-110" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="dao.hassane@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 pl-14 pr-14 border-0 bg-transparent text-base placeholder:text-gray-400 focus:ring-0 focus:outline-none font-light"
                  />
                  <div className={`absolute right-5 transition-all duration-500 ${
                    validateEmail(email) ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                  }`}>
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Numéro de téléphone portable</Label>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-black/20 via-black/20 to-black/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-focus-within:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center">
                  <div className="absolute left-5 flex items-center space-x-2">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-gray-600 text-sm">+1</span>
                  </div>
                  <Phone className="absolute left-20 text-gray-400 w-4 h-4 transition-all duration-300 group-focus-within:text-black group-focus-within:scale-110" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Numéro de téléphone portable"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-14 pl-28 pr-14 border-0 bg-transparent text-base placeholder:text-gray-400 focus:ring-0 focus:outline-none font-light"
                  />
                  <div className={`absolute right-5 transition-all duration-500 ${
                    validatePhone(phone) ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                  }`}>
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full name field */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Nom complet</Label>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-black/20 via-black/20 to-black/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-focus-within:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center">
                  <User className="absolute left-5 text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-black group-focus-within:scale-110" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Nom complet"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-14 pl-14 pr-14 border-0 bg-transparent text-base placeholder:text-gray-400 focus:ring-0 focus:outline-none font-light"
                  />
                  <div className={`absolute right-5 transition-all duration-500 ${
                    validateFullName(fullName) ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                  }`}>
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              En continuant, vous acceptez les{" "}
              <a href="#" className="underline hover:text-black transition-colors">Conditions</a> et la{" "}
              <a href="#" className="underline hover:text-black transition-colors">Politique de confidentialité</a>.
            </p>
          </div>

          {/* Register button */}
          <Button
            onClick={handleRegister}
            disabled={!isFormValid}
            className={`relative w-full h-16 bg-black text-white rounded-2xl font-medium text-lg shadow-xl hover:shadow-2xl disabled:opacity-40 disabled:cursor-not-allowed group overflow-hidden transition-all duration-300 ${
              isFormValid ? 'hover:scale-[1.02] hover:-translate-y-1 hover:bg-gray-800' : ''
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center justify-center font-light tracking-wide">
              S'inscrire
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>

          {/* Login redirect */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Déjà un compte ?{" "}
              <button
                onClick={handleLoginRedirect}
                className="text-black font-medium hover:underline transition-all duration-200"
              >
                Se connecter
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-6 text-xs text-gray-400">
              <a href="#" className="hover:text-black transition-colors">Aide</a>
              <a href="#" className="hover:text-black transition-colors">Conditions</a>
              <a href="#" className="hover:text-black transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-black transition-colors">Cookies</a>
            </div>
          </div>
          <div className="flex justify-center space-x-3">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 bg-black rounded-full animate-pulse hover:scale-150 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s' }}
              ></div>
            ))}
          </div>
          <p className="text-xs text-gray-400 font-light tracking-wider opacity-60">© 2024 Payzoo</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
