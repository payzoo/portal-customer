
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddressSearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterType: string;
  onFilterChange: (value: string) => void;
  isLoaded?: boolean;
}

export function AddressSearchFilter({
  searchTerm,
  onSearchChange,
  filterType,
  onFilterChange,
  isLoaded = false
}: AddressSearchFilterProps) {
  return (
    <section className={`mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex gap-4">
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
          </div>
          <input
            type="text"
            placeholder="Rechercher une adresse..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full h-12 pl-12 pr-4 text-gray-900 placeholder-gray-400 bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900/50 transition-all duration-300"
            aria-label="Rechercher une adresse"
          />
        </div>
        <Select value={filterType} onValueChange={onFilterChange}>
          <SelectTrigger className="w-48 h-12 bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-sm hover:shadow-md focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900/50 transition-all duration-300">
            <SelectValue placeholder="Type d'adresse" />
          </SelectTrigger>
          <SelectContent className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl">
            <SelectItem value="all">Tous types</SelectItem>
            <SelectItem value="home">Domicile</SelectItem>
            <SelectItem value="work">Travail</SelectItem>
            <SelectItem value="other">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
