
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
    <div className={`space-y-6 transform transition-all duration-500 ease-out ${
      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`} style={{ transitionDelay: '400ms' }}>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Adresse email
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <Mail className="w-4 h-4 text-muted-foreground" />
          </div>
          <Input
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={handleEmailChange}
            className="h-12 pl-10 pr-12 border-input rounded-xl bg-background focus:ring-2 focus:ring-foreground/20 transition-all duration-200"
          />
          {isEmailValid && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Button
        onClick={onContinue}
        disabled={!isEmailValid}
        className={`w-full h-12 bg-foreground text-background font-medium rounded-xl transition-all duration-200 group ${
          !isEmailValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-foreground/90 active:scale-[0.98]'
        }`}
      >
        <span className="mr-2">Continuer</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default EmailInput;
