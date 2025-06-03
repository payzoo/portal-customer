
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Globe, Check } from "lucide-react";

interface LanguagePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LanguagePreferencesModal({ isOpen, onClose }: LanguagePreferencesModalProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("fr");

  const languages = [
    { code: "fr", name: "Français", region: "France" },
    { code: "en", name: "English", region: "United States" },
    { code: "es", name: "Español", region: "España" },
    { code: "de", name: "Deutsch", region: "Deutschland" },
    { code: "it", name: "Italiano", region: "Italia" },
  ];

  const handleSave = () => {
    console.log("Language updated to:", selectedLanguage);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            Préférences de langue
          </DialogTitle>
          <DialogDescription>
            Choisissez votre langue préférée pour l'interface
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <div className="space-y-3">
            {languages.map((language) => (
              <div
                key={language.code}
                onClick={() => setSelectedLanguage(language.code)}
                className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedLanguage === language.code
                    ? 'border-black bg-black/5'
                    : 'border-border hover:border-black/30'
                }`}
              >
                <div>
                  <p className="font-medium text-foreground">{language.name}</p>
                  <p className="text-sm text-muted-foreground">{language.region}</p>
                </div>
                {selectedLanguage === language.code && (
                  <Check className="w-5 h-5 text-black" />
                )}
              </div>
            ))}
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
