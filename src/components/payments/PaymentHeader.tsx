
import { Wallet, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentHeaderProps {
  onAddPayment: () => void;
  isLoaded: boolean;
}

export function PaymentHeader({ onAddPayment, isLoaded }: PaymentHeaderProps) {
  return (
    <header className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-800 rounded-3xl flex items-center justify-center shadow-lg">
              <Wallet className="w-7 h-7 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-emerald-700 tracking-wide">SÉCURISÉ</span>
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl lg:text-6xl font-extralight text-black tracking-tight">
              Portefeuille
            </h1>
            <p className="text-xl text-gray-600 font-normal max-w-lg">
              Gérez tous vos moyens de paiement en toute simplicité
            </p>
          </div>
        </div>
        
        <Button 
          className="group px-8 py-4 h-auto bg-black hover:bg-gray-900 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          onClick={onAddPayment}
        >
          <Plus className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-300" />
          <span className="text-base font-medium">Nouveau moyen</span>
        </Button>
      </div>
    </header>
  );
}
