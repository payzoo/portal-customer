
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  isLoaded?: boolean;
}

export function SearchBar({ searchTerm, onSearchChange, isLoaded = false }: SearchBarProps) {
  return (
    <div className={`relative w-full max-w-2xl mx-auto transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="relative">
        <Search 
          className="absolute left-4 lg:left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400 pointer-events-none" 
          aria-hidden="true"
        />
        <input
          type="text"
          placeholder="Rechercher un abonnement..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 lg:pl-14 pr-4 lg:pr-6 py-4 lg:py-5 bg-white/70 backdrop-blur-xl border-0 rounded-2xl lg:rounded-3xl shadow-lg focus:shadow-2xl focus:bg-white/90 transition-all duration-500 outline-none focus:ring-2 focus:ring-blue-500/20 text-base lg:text-lg placeholder:text-gray-400"
          aria-label="Rechercher un abonnement"
        />
      </div>
    </div>
  );
}
