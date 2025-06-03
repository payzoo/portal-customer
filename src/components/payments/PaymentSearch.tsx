
import { Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PaymentSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterType: string;
  onFilterChange: (value: string) => void;
  isLoaded?: boolean;
}

export function PaymentSearch({ 
  searchTerm, 
  onSearchChange, 
  filterType, 
  onFilterChange,
  isLoaded = false 
}: PaymentSearchProps) {
  return (
    <section className={`mb-10 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search 
            className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Rechercher un moyen de paiement..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white border-0 rounded-3xl focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 text-base placeholder:text-gray-400 shadow-lg hover:shadow-xl"
            aria-label="Rechercher un moyen de paiement"
          />
        </div>
        <div className="relative lg:w-64">
          <Filter className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
          <Select value={filterType} onValueChange={onFilterChange}>
            <SelectTrigger className="w-full pl-14 pr-6 py-5 h-auto bg-white border-0 rounded-3xl focus:ring-2 focus:ring-black transition-all duration-300 text-base shadow-lg hover:shadow-xl">
              <SelectValue placeholder="Filtrer par type" />
            </SelectTrigger>
            <SelectContent className="bg-white border-0 rounded-2xl shadow-2xl">
              <SelectItem value="all">Tous types</SelectItem>
              <SelectItem value="visa">Visa</SelectItem>
              <SelectItem value="mastercard">Mastercard</SelectItem>
              <SelectItem value="paypal">PayPal</SelectItem>
              <SelectItem value="other">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
