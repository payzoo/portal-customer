
import { Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubscriptionsHeaderProps {
  isLoaded: boolean;
  onAddClick: () => void;
}

export function SubscriptionsHeader({ isLoaded, onAddClick }: SubscriptionsHeaderProps) {
  return (
    <header className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-black tracking-tight">Abonnements</h1>
          <p className="text-gray-600">Gérez vos abonnements en un coup d'œil</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline"
            size="sm"
            className="border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            <Settings className="w-4 h-4 mr-2" />
            Paramètres
          </Button>
          <Button 
            size="sm"
            className="bg-black hover:bg-gray-800 text-white"
            onClick={onAddClick}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </div>
    </header>
  );
}
