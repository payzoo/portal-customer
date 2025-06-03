
import { MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddressHeaderProps {
  onAddAddress: () => void;
  isLoaded: boolean;
}

export function AddressHeader({ onAddAddress, isLoaded }: AddressHeaderProps) {
  return (
    <header className={`mb-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="text-center space-y-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/5 rounded-full backdrop-blur-sm">
          <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
            <MapPin className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-xs font-bold text-gray-800 tracking-[0.2em] uppercase">
            Smart Location
          </span>
        </div>
        
        <div className="space-y-8">
          <h1 className="text-7xl lg:text-8xl font-extralight text-black tracking-tight leading-none">
            Adresses
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Gérez vos adresses avec simplicité et élégance
          </p>
        </div>
        
        <Button 
          className="h-14 px-10 bg-black hover:bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
          onClick={onAddAddress}
        >
          <Plus className="w-5 h-5 mr-3" />
          Nouvelle adresse
        </Button>
      </div>
    </header>
  );
}
