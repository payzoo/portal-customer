
import { MapPin, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AddressEmptyStateProps {
  isLoaded?: boolean;
  onAddAddress?: () => void;
}

export function AddressEmptyState({ isLoaded = false, onAddAddress }: AddressEmptyStateProps) {
  return (
    <Card className={`border-0 bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl transition-all duration-700 delay-500 max-w-2xl mx-auto ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <CardContent className="p-20 text-center">
        <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-10">
          <MapPin className="w-12 h-12 text-gray-400" aria-hidden="true" />
        </div>
        
        <h3 className="text-3xl font-bold text-black mb-6 tracking-tight">
          Aucune adresse trouvée
        </h3>
        
        <p className="text-gray-600 text-xl font-light max-w-lg mx-auto mb-10 leading-relaxed">
          Aucune adresse ne correspond à vos critères de recherche.
        </p>

        {onAddAddress && (
          <Button 
            onClick={onAddAddress}
            className="h-14 px-10 bg-black hover:bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Plus className="w-5 h-5 mr-3" />
            <span className="font-medium">Ajouter une adresse</span>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
