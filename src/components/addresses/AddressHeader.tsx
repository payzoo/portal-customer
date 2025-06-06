
import { MapPin, Plus, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddressHeaderProps {
  onAddAddress: () => void;
  isLoaded: boolean;
}

export function AddressHeader({ onAddAddress, isLoaded }: AddressHeaderProps) {
  return (
    <header className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-600">Smart Location</span>
            </div>
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-2 tracking-tight">Adresses</h1>
            <p className="text-lg text-gray-600 font-medium flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gray-400" />
              Gérez vos adresses en toute simplicité
            </p>
          </div>
        </div>
        
        <Button 
          className="group px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 self-start"
          onClick={onAddAddress}
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          <span className="text-base font-medium">Ajouter</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </Button>
      </div>
    </header>
  );
}
