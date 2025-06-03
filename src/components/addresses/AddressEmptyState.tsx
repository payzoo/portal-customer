
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AddressEmptyStateProps {
  isLoaded?: boolean;
}

export function AddressEmptyState({ isLoaded = false }: AddressEmptyStateProps) {
  return (
    <Card className={`border-0 bg-white/70 backdrop-blur-xl transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <CardContent className="p-16 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Search className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">Aucun résultat</h3>
        <p className="text-gray-600 text-lg font-medium">
          Aucune adresse ne correspond à vos critères.
        </p>
      </CardContent>
    </Card>
  );
}
