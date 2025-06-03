
import { MapPin, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddressHeaderProps {
  onAddAddress: () => void;
  isLoaded: boolean;
}

export function AddressHeader({ onAddAddress, isLoaded }: AddressHeaderProps) {
  return (
    <header className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center shadow-lg">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/30" />
              <span className="text-sm font-semibold text-green-600 tracking-wide uppercase">
                Smart Location
              </span>
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-5xl lg:text-6xl font-extralight text-black tracking-tight leading-none">
              Adresses
            </h1>
            <p className="text-xl text-gray-600 font-medium flex items-center gap-3 max-w-2xl">
              <Sparkles className="w-6 h-6 text-gray-400" />
              Organisez et gérez vos adresses en toute simplicité
            </p>
          </div>
        </div>
        
        <Button 
          className="group h-14 px-8 bg-black hover:bg-gray-900 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 self-start lg:self-end"
          onClick={onAddAddress}
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          <span className="text-lg font-semibold">Nouvelle adresse</span>
        </Button>
      </div>
    </header>
  );
}
