
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AddressEmptyStateProps {
  isLoaded?: boolean;
}

export function AddressEmptyState({ isLoaded = false }: AddressEmptyStateProps) {
  return (
    <Card className={`border border-gray-200 bg-white transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <CardContent className="p-12 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
          <Search className="w-8 h-8 text-gray-400" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-light text-black mb-3">Aucun résultat</h3>
        <p className="text-gray-600 text-base font-medium max-w-md mx-auto">
          Aucune adresse ne correspond à vos critères.
        </p>
      </CardContent>
    </Card>
  );
}
