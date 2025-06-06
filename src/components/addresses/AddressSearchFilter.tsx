
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
    <section className={`mb-8 transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-2xl">
          <Search 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Rechercher une adresse..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl shadow-sm focus:shadow-md focus:border-black transition-all duration-300 outline-none text-base placeholder:text-gray-400"
            aria-label="Rechercher une adresse"
          />
        </div>
        <Select value={filterType} onValueChange={onFilterChange}>
          <SelectTrigger className="w-full sm:w-56 h-14 bg-white border border-gray-200 rounded-xl shadow-sm focus:shadow-md focus:border-black transition-all duration-300 text-base">
            <SelectValue placeholder="Type d'adresse" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-xl">
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
