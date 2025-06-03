
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PaymentEmptyStateProps {
  isLoaded?: boolean;
}

export function PaymentEmptyState({ isLoaded = false }: PaymentEmptyStateProps) {
  return (
    <Card className={`border-0 bg-white/70 backdrop-blur-xl transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <CardContent className="p-12 lg:p-16 text-center">
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-lg">
          <Search className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400" aria-hidden="true" />
        </div>
        <h3 className="text-xl lg:text-2xl font-light text-gray-900 mb-3 lg:mb-4 tracking-tight">Aucun résultat</h3>
        <p className="text-gray-600 text-base lg:text-lg font-medium max-w-md mx-auto">
          Aucun moyen de paiement ne correspond à vos critères.
        </p>
      </CardContent>
    </Card>
  );
}
