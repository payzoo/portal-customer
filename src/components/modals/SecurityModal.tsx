
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Smartphone, ChevronRight, ChevronLeft } from "lucide-react";
import { ChangePasswordModal } from "./security/ChangePasswordModal";
import { Setup2FAModal } from "./security/Setup2FAModal";
import { ActiveSessionsModal } from "./security/ActiveSessionsModal";

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SecuritySection = 'main' | 'password' | '2fa' | 'sessions';

export function SecurityModal({ isOpen, onClose }: SecurityModalProps) {
  const [currentSection, setCurrentSection] = useState<SecuritySection>('main');

  const handleBack = () => {
    setCurrentSection('main');
  };

  const handleSectionClose = () => {
    setCurrentSection('main');
  };

  const securityOptions = [
    {
      icon: Lock,
      title: "Changer le mot de passe",
      description: "Modifiez votre mot de passe actuel",
      section: 'password' as SecuritySection
    },
    {
      icon: Shield,
      title: "Authentification 2FA",
      description: "Activer la double authentification",
      section: '2fa' as SecuritySection
    },
    {
      icon: Smartphone,
      title: "Sessions actives",
      description: "Gérer vos connexions actives",
      section: 'sessions' as SecuritySection
    }
  ];

  if (currentSection === 'password') {
    return (
      <ChangePasswordModal 
        isOpen={isOpen} 
        onClose={onClose}
        onBack={handleBack}
      />
    );
  }

  if (currentSection === '2fa') {
    return (
      <Setup2FAModal 
        isOpen={isOpen} 
        onClose={onClose}
        onBack={handleBack}
      />
    );
  }

  if (currentSection === 'sessions') {
    return (
      <ActiveSessionsModal 
        isOpen={isOpen} 
        onClose={onClose}
        onBack={handleBack}
      />
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            Sécurité
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3 pt-4">
          {securityOptions.map((option, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start h-auto p-4 hover:bg-gray-50"
              onClick={() => setCurrentSection(option.section)}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <option.icon className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-medium text-sm">{option.title}</p>
                  <p className="text-xs text-gray-500">{option.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
