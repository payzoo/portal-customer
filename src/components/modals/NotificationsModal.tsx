
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, Check } from "lucide-react";

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationsModal({ isOpen, onClose }: NotificationsModalProps) {
  const [notifications, setNotifications] = useState({
    transactions: true,
    security: true,
    subscriptions: false,
    marketing: false,
    push: true,
    email: true,
    sms: false,
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    console.log("Notifications updated:", notifications);
    onClose();
  };

  const notificationCategories = [
    {
      title: "Types de notifications",
      items: [
        { key: "transactions" as const, label: "Transactions", description: "Notifications de paiements et transferts" },
        { key: "security" as const, label: "Sécurité", description: "Alertes de sécurité et connexions" },
        { key: "subscriptions" as const, label: "Abonnements", description: "Renouvellements et échéances" },
        { key: "marketing" as const, label: "Marketing", description: "Offres promotionnelles et nouveautés" },
      ]
    },
    {
      title: "Canaux de notification",
      items: [
        { key: "push" as const, label: "Notifications push", description: "Dans l'application mobile" },
        { key: "email" as const, label: "E-mail", description: "Notifications par e-mail" },
        { key: "sms" as const, label: "SMS", description: "Messages texte" },
      ]
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </div>
            Notifications
          </DialogTitle>
          <DialogDescription>
            Gérez vos préférences de notifications
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 pt-4 max-h-96 overflow-y-auto">
          {notificationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3">
              <h4 className="font-medium text-foreground">{category.title}</h4>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch
                      checked={notifications[item.key]}
                      onCheckedChange={() => handleToggle(item.key)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          
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
