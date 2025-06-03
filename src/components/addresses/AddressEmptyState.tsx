
import { MapPin, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AddressEmptyStateProps {
  isLoaded?: boolean;
  onAddAddress?: () => void;
}

export function AddressEmptyState({ isLoaded = false, onAddAddress }: AddressEmptyStateProps) {
  return (
    <Card className={`border-0 bg-white shadow-lg rounded-2xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <CardContent className="p-16 text-center">
        <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <MapPin className="w-12 h-12 text-gray-400" aria-hidden="true" />
        </div>
        
        <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
          Aucune adresse trouvée
        </h3>
        
        <p className="text-gray-600 text-lg font-medium max-w-md mx-auto mb-8 leading-relaxed">
          Aucune adresse ne correspond à vos critères de recherche. Essayez de modifier vos filtres ou ajoutez une nouvelle adresse.
        </p>

        {onAddAddress && (
          <Button 
            onClick={onAddAddress}
            className="h-14 px-8 bg-black hover:bg-gray-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Plus className="w-5 h-5 mr-3" />
            <span className="text-lg font-semibold">Ajouter une adresse</span>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
