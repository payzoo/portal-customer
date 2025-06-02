
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Check, Sparkles, Zap } from "lucide-react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showEmailTag, setShowEmailTag] = useState(false);
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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const valid = validateEmail(newEmail);
    setIsEmailValid(valid);
    
    if (valid && !showEmailTag) {
      setShowEmailTag(true);
    }
  };

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

  const removeEmailTag = () => {
    setShowEmailTag(false);
    setEmail("");
    setIsEmailValid(false);
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

      <div className={`w-full max-w-sm space-y-10 relative z-10 transform transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Dynamic logo */}
        <div className="text-center">
          <div className={`relative w-20 h-20 mx-auto mb-8 transform transition-all duration-700 ease-out group cursor-pointer ${
            isLoaded ? 'scale-100 rotate-0' : 'scale-0 rotate-12'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
            </div>
            <div className="relative w-full h-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl tracking-tight">P</span>
              <Zap className="w-4 h-4 text-yellow-300 absolute top-2 right-2 animate-pulse" />
            </div>
          </div>
          
          <div className={`transform transition-all duration-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h1 className="text-5xl font-light text-gray-900 tracking-tight mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Payzoo
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="text-sm text-gray-500 font-medium tracking-wider">SIMPLY BETTER</p>
              <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Dynamic form */}
        <div className={`space-y-8 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          {!showEmailTag ? (
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-focus-within:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-5 text-gray-400 w-5 h-5 transition-all duration-300 group-focus-within:text-blue-500 group-focus-within:scale-110" />
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full h-16 pl-14 pr-14 border-0 bg-transparent text-lg placeholder:text-gray-400 focus:ring-0 focus:outline-none font-light"
                    />
                    <div className={`absolute right-5 transition-all duration-500 ${
                      isEmailValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
                    }`}>
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button
                onClick={handleContinue}
                disabled={!isEmailValid}
                className={`relative w-full h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-2xl font-medium text-lg shadow-xl hover:shadow-2xl disabled:opacity-40 disabled:cursor-not-allowed group overflow-hidden transition-all duration-300 ${
                  isEmailValid ? 'hover:scale-[1.02] hover:-translate-y-1' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center font-light tracking-wide">
                  Continuer
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <div className="group cursor-pointer">
                <div className="relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-semibold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {email.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium text-lg truncate">{email}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <p className="text-gray-500 text-sm font-light">Prêt à se connecter</p>
                      </div>
                    </div>
                    <button 
                      onClick={removeEmailTag}
                      className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-white/60 rounded-full transition-all duration-200 hover:scale-110 hover:rotate-90"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleConnection}
                className="relative w-full h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-2xl font-medium text-lg shadow-xl hover:shadow-2xl group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center font-light tracking-wide">
                  Se connecter
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          )}
        </div>

        {/* Minimalist footer */}
        <div className={`text-center space-y-6 transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="flex justify-center space-x-3">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse hover:scale-150 transition-all duration-300 cursor-pointer"
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

export default AuthPage;
