
import { Search, Filter } from "lucide-react";
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
    <section className={`mb-16 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="relative">
          <Search 
            className="absolute left-7 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Rechercher une adresse..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-16 pr-8 py-7 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm focus:shadow-lg focus:border-gray-300 transition-all duration-300 outline-none text-lg placeholder:text-gray-400 font-light"
            aria-label="Rechercher une adresse"
          />
        </div>
        
        <div className="flex justify-center">
          <Select value={filterType} onValueChange={onFilterChange}>
            <SelectTrigger className="w-56 h-14 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm focus:shadow-lg focus:border-gray-300 transition-all duration-300 font-medium">
              <div className="flex items-center gap-3">
                <Filter className="w-4 h-4 text-gray-400" />
                <SelectValue placeholder="Filtrer par type" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-100 rounded-2xl shadow-xl">
              <SelectItem value="all" className="font-medium py-4 hover:bg-gray-50">Tous les types</SelectItem>
              <SelectItem value="home" className="font-medium py-4 hover:bg-gray-50">Domicile</SelectItem>
              <SelectItem value="work" className="font-medium py-4 hover:bg-gray-50">Travail</SelectItem>
              <SelectItem value="other" className="font-medium py-4 hover:bg-gray-50">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
