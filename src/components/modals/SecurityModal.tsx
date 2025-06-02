
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Smartphone } from "lucide-react";

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SecurityModal({ isOpen, onClose }: SecurityModalProps) {
  const securityOptions = [
    {
      icon: Lock,
      title: "Changer le mot de passe",
      description: "Modifiez votre mot de passe actuel",
      action: () => console.log("Change password")
    },
    {
      icon: Shield,
      title: "Authentification 2FA",
      description: "Activer la double authentification",
      action: () => console.log("Setup 2FA")
    },
    {
      icon: Smartphone,
      title: "Sessions actives",
      description: "Gérer vos connexions actives",
      action: () => console.log("Manage sessions")
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Sécurité
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3 pt-4">
          {securityOptions.map((option, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start h-auto p-4 hover:bg-gray-50"
              onClick={option.action}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <option.icon className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">{option.title}</p>
                  <p className="text-xs text-gray-500">{option.description}</p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
