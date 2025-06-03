
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Check } from "lucide-react";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

export function EditProfileModal({ isOpen, onClose, currentData }: EditProfileModalProps) {
  const [firstName, setFirstName] = useState(currentData.firstName);
  const [lastName, setLastName] = useState(currentData.lastName);
  const [email, setEmail] = useState(currentData.email);
  const [phone, setPhone] = useState(currentData.phone);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulation d'une requête API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Profil mis à jour:", { firstName, lastName, email, phone });
    
    setIsLoading(false);
    onClose();
  };

  const hasChanges = 
    firstName !== currentData.firstName ||
    lastName !== currentData.lastName ||
    email !== currentData.email ||
    phone !== currentData.phone;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            Informations personnelles
          </DialogTitle>
          <DialogDescription>
            Modifiez vos informations de profil
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium">
                Prénom
              </Label>
              <Input 
                id="firstName" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Prénom"
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium">
                Nom
              </Label>
              <Input 
                id="lastName" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Nom"
                className="h-10"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Adresse e-mail
            </Label>
            <Input 
              id="email" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@exemple.com"
              className="h-10"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Numéro de téléphone
            </Label>
            <Input 
              id="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+33 1 23 45 67 89"
              className="h-10"
            />
          </div>
          
          <div className="flex gap-3 pt-6">
            <Button 
              variant="outline" 
              onClick={onClose} 
              className="flex-1 h-10"
              disabled={isLoading}
            >
              Annuler
            </Button>
            <Button 
              onClick={handleSave} 
              className="flex-1 h-10 bg-black hover:bg-black/90 text-white"
              disabled={!hasChanges || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enregistrement...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Enregistrer
                </div>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
