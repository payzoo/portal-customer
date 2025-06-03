
import { Wallet, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentHeaderProps {
  onAddPayment: () => void;
  isLoaded: boolean;
}

export function PaymentHeader({ onAddPayment, isLoaded }: PaymentHeaderProps) {
  return (
    <header className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-600">Sécurisé</span>
            </div>
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-2 tracking-tight">Portefeuille</h1>
            <p className="text-lg text-gray-600 font-medium">
              Gérez vos moyens de paiement en toute sécurité
            </p>
          </div>
        </div>
        
        <Button 
          className="group px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-2xl transition-all duration-300 transform hover:-translate-y-1 self-start lg:self-end"
          onClick={onAddPayment}
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          <span className="text-base font-medium">Ajouter un moyen</span>
        </Button>
      </div>
    </header>
  );
}
