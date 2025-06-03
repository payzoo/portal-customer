
import { MapPin, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddressHeaderProps {
  onAddAddress: () => void;
  isLoaded: boolean;
}

export function AddressHeader({ onAddAddress, isLoaded }: AddressHeaderProps) {
  return (
    <header className={`mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-gray-700 tracking-wide">
            SMART LOCATION
          </span>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-6xl lg:text-7xl font-extralight text-black tracking-tight">
            Adresses
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Gérez vos adresses avec simplicité et élégance
          </p>
        </div>
        
        <Button 
          className="h-12 px-8 bg-black hover:bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={onAddAddress}
        >
          <Plus className="w-4 h-4 mr-2" />
          <span className="font-medium">Nouvelle adresse</span>
        </Button>
      </div>
    </header>
  );
}
