
import { Package, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  isLoaded?: boolean;
  onAddClick?: () => void;
}

export function EmptyState({ isLoaded = false, onAddClick }: EmptyStateProps) {
  return (
    <Card className={`border border-gray-200 bg-white transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <CardContent className="p-12 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">Aucun abonnement</h3>
        <p className="text-gray-600 mb-6 max-w-sm mx-auto text-sm">
          Commencez par ajouter votre premier abonnement pour suivre vos dépenses.
        </p>
        {onAddClick && (
          <Button 
            className="bg-black hover:bg-gray-800 text-white"
            onClick={onAddClick}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ajouter un abonnement
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
