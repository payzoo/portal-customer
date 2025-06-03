
import { Package, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  isLoaded?: boolean;
  onAddClick?: () => void;
}

export function EmptyState({ isLoaded = false, onAddClick }: EmptyStateProps) {
  return (
    <div className={`transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Card className="border border-gray-100 bg-white">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Package className="w-8 h-8 text-gray-400" />
          </div>
          
          <div className="space-y-2 mb-8">
            <h3 className="text-lg font-semibold text-gray-900">Aucun abonnement</h3>
            <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed">
              Commencez par ajouter votre premier abonnement pour suivre vos dépenses mensuelles.
            </p>
          </div>
          
          {onAddClick && (
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-6 py-2.5 text-sm font-medium"
              onClick={onAddClick}
            >
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un abonnement
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
