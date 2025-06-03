
import { CreditCard, Plus, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentEmptyStateProps {
  isLoaded?: boolean;
  onAddPayment?: () => void;
}

export function PaymentEmptyState({ isLoaded = false, onAddPayment }: PaymentEmptyStateProps) {
  return (
    <div className={`text-center py-16 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CreditCard className="w-10 h-10 text-gray-400" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Aucun moyen de paiement
        </h3>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Commencez par ajouter votre premier moyen de paiement pour sécuriser vos transactions.
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={onAddPayment}
            className="h-12 px-6 bg-black hover:bg-gray-800 text-white rounded-xl"
          >
            <Plus className="w-4 h-4 mr-2" />
            Ajouter un moyen de paiement
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4" />
            <span>Données chiffrées et sécurisées</span>
          </div>
        </div>
      </div>
    </div>
  );
}
