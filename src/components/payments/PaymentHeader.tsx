
import { Wallet, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentHeaderProps {
  onAddPayment: () => void;
  isLoaded: boolean;
}

export function PaymentHeader({ onAddPayment, isLoaded }: PaymentHeaderProps) {
  return (
    <div className={`mb-10 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div className="px-3 py-1.5 bg-emerald-50 rounded-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-semibold text-emerald-700">SÉCURISÉ</span>
              </div>
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Portefeuille
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Gérez vos moyens de paiement en toute sécurité
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            variant="outline"
            className="h-12 px-6 rounded-xl border-gray-200 hover:bg-gray-50"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            Historique
          </Button>
          <Button 
            className="h-12 px-6 bg-black hover:bg-gray-800 text-white rounded-xl"
            onClick={onAddPayment}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
}
