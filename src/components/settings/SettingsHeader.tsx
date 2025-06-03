
import { User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SettingsHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  isLoaded: boolean;
}

export function SettingsHeader({ searchTerm, onSearchChange, isLoaded }: SettingsHeaderProps) {
  return (
    <div className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-sm">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-black mb-1">Paramètres</h1>
            <p className="text-sm text-gray-600">
              Gérez votre compte et personnalisez votre expérience
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Rechercher dans les paramètres..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-11 bg-white border border-gray-200 focus:border-black focus:ring-0 transition-colors"
        />
      </div>
    </div>
  );
}
