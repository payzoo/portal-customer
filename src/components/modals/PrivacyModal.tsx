
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { FileText, Check, Trash2 } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const [privacySettings, setPrivacySettings] = useState({
    dataCollection: true,
    analytics: false,
    personalization: true,
    thirdPartySharing: false,
    profileVisibility: true,
  });

  const handleToggle = (key: keyof typeof privacySettings) => {
    setPrivacySettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    console.log("Privacy settings updated:", privacySettings);
    onClose();
  };

  const privacyOptions = [
    { 
      key: "dataCollection" as const, 
      label: "Collecte de données", 
      description: "Autoriser la collecte de données d'utilisation pour améliorer nos services" 
    },
    { 
      key: "analytics" as const, 
      label: "Analytics", 
      description: "Partager des données analytiques anonymisées" 
    },
    { 
      key: "personalization" as const, 
      label: "Personnalisation", 
      description: "Utiliser vos données pour personnaliser votre expérience" 
    },
    { 
      key: "thirdPartySharing" as const, 
      label: "Partage avec des tiers", 
      description: "Autoriser le partage de données avec des partenaires sélectionnés" 
    },
    { 
      key: "profileVisibility" as const, 
      label: "Visibilité du profil", 
      description: "Rendre votre profil visible aux autres utilisateurs" 
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            Confidentialité
          </DialogTitle>
          <DialogDescription>
            Contrôlez vos paramètres de confidentialité et de données
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          <div className="space-y-3">
            {privacyOptions.map((option) => (
              <div key={option.key} className="flex items-center justify-between p-3 rounded-lg border border-border">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{option.label}</p>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
                <Switch
                  checked={privacySettings[option.key]}
                  onCheckedChange={() => handleToggle(option.key)}
                />
              </div>
            ))}
          </div>

          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-start gap-3">
              <Trash2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-red-900 mb-1">Zone de danger</h4>
                <p className="text-sm text-red-700 mb-3">Supprimer définitivement toutes vos données personnelles</p>
                <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
                  Demander la suppression des données
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 pt-6">
            <Button 
              variant="outline" 
              onClick={onClose} 
              className="flex-1 h-10"
            >
              Annuler
            </Button>
            <Button 
              onClick={handleSave} 
              className="flex-1 h-10 bg-black hover:bg-black/90 text-white"
            >
              <Check className="w-4 h-4 mr-2" />
              Enregistrer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
