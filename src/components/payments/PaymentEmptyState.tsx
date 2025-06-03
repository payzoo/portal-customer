
import { Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PaymentEmptyStateProps {
  isLoaded?: boolean;
}

export function PaymentEmptyState({ isLoaded = false }: PaymentEmptyStateProps) {
  return (
    <Card className={`border-0 bg-white shadow-lg transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <CardContent className="p-16 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Wallet className="w-10 h-10 text-gray-400" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Aucun moyen de paiement</h3>
        <p className="text-gray-600 text-lg font-normal max-w-md mx-auto leading-relaxed">
          Vous n'avez pas encore ajouté de moyen de paiement. Commencez par en ajouter un.
        </p>
      </CardContent>
    </Card>
  );
}
