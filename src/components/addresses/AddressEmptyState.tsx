
import { MapPin, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AddressEmptyStateProps {
  isLoaded?: boolean;
  onAddAddress?: () => void;
}

export function AddressEmptyState({ isLoaded = false, onAddAddress }: AddressEmptyStateProps) {
  return (
    <Card className={`border-0 bg-white shadow-sm rounded-3xl transition-all duration-700 delay-500 max-w-md mx-auto ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <CardContent className="p-16 text-center">
        <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <MapPin className="w-10 h-10 text-gray-400" aria-hidden="true" />
        </div>
        
        <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
          Aucune adresse trouvée
        </h3>
        
        <p className="text-gray-600 text-lg font-light max-w-sm mx-auto mb-8 leading-relaxed">
          Aucune adresse ne correspond à vos critères de recherche.
        </p>

        {onAddAddress && (
          <Button 
            onClick={onAddAddress}
            className="h-12 px-8 bg-black hover:bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Plus className="w-4 h-4 mr-2" />
            <span className="font-medium">Ajouter une adresse</span>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
