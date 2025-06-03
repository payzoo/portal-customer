
import { Search, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  isLoaded?: boolean;
  onAddClick?: () => void;
}

export function EmptyState({ isLoaded = false, onAddClick }: EmptyStateProps) {
  return (
    <Card className={`border border-gray-200 bg-white transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <CardContent className="p-16 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
          <Search className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-2xl font-semibold text-black mb-3">Aucun abonnement trouvé</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
          Commencez par ajouter votre premier abonnement pour suivre vos dépenses mensuelles et optimiser votre budget.
        </p>
        {onAddClick && (
          <Button 
            className="bg-black hover:bg-gray-800 text-white h-12 px-8 text-base"
            onClick={onAddClick}
          >
            <Plus className="w-5 h-5 mr-2" />
            Ajouter un abonnement
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
