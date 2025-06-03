
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Check } from "lucide-react";

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  isEmailValid: boolean;
  setIsEmailValid: (valid: boolean) => void;
  setShowEmailTag: (show: boolean) => void;
  onContinue: () => void;
  isLoaded: boolean;
}

const EmailInput = ({ 
  email, 
  setEmail, 
  isEmailValid, 
  setIsEmailValid, 
  setShowEmailTag, 
  onContinue, 
  isLoaded 
}: EmailInputProps) => {
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const valid = validateEmail(newEmail);
    setIsEmailValid(valid);
    
    if (valid && !setShowEmailTag) {
      setShowEmailTag(true);
    }
  };

  return (
    <div className={`space-y-8 transform transition-all duration-700 ease-out ${
      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`} style={{ transitionDelay: '600ms' }}>
      <div className="space-y-8">
        {/* Enhanced email input */}
        <div className="relative">
          <div className="glass-card rounded-2xl p-6 border border-gray-300/80 backdrop-blur-sm bg-background/60">
            <div className="relative flex items-center">
              <div className="absolute left-4 z-10">
                <Mail className="w-5 h-5 text-muted-foreground transition-colors duration-200" />
              </div>
              <Input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={handleEmailChange}
                className="w-full h-12 pl-12 pr-12 bg-transparent border-0 focus:ring-0 focus:border-0 placeholder:text-muted-foreground/60 text-foreground text-base"
              />
              <div className={`absolute right-4 transition-all duration-500 ${
                isEmailValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
              }`}>
                <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-background" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced continue button */}
        <Button
          onClick={onContinue}
          disabled={!isEmailValid}
          className={`w-full h-14 bg-foreground text-background font-medium rounded-2xl transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98] group ${
            !isEmailValid ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-foreground/10'
          }`}
        >
          <span className="mr-2">Continuer</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default EmailInput;
