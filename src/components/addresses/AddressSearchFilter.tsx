
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
    <section className={`mb-10 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative flex-1">
          <Search 
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Rechercher par nom, rue ou ville..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white border-2 border-gray-100 rounded-2xl shadow-sm focus:shadow-lg focus:border-black transition-all duration-300 outline-none text-lg placeholder:text-gray-400 font-medium"
            aria-label="Rechercher une adresse"
          />
        </div>
        
        <div className="lg:w-64">
          <Select value={filterType} onValueChange={onFilterChange}>
            <SelectTrigger className="h-16 bg-white border-2 border-gray-100 rounded-2xl shadow-sm focus:shadow-lg focus:border-black transition-all duration-300 text-lg font-medium">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-gray-400" />
                <SelectValue placeholder="Filtrer par type" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white border-2 border-gray-100 rounded-2xl shadow-xl">
              <SelectItem value="all" className="text-base font-medium py-3">Tous les types</SelectItem>
              <SelectItem value="home" className="text-base font-medium py-3">Domicile</SelectItem>
              <SelectItem value="work" className="text-base font-medium py-3">Travail</SelectItem>
              <SelectItem value="other" className="text-base font-medium py-3">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
