
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PaymentSearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterType: string;
  onFilterChange: (value: string) => void;
  isLoaded?: boolean;
}

export function PaymentSearchFilter({ 
  searchTerm, 
  onSearchChange, 
  filterType, 
  onFilterChange,
  isLoaded = false 
}: PaymentSearchFilterProps) {
  return (
    <section className={`mb-6 lg:mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-2xl">
          <Search 
            className="absolute left-4 lg:left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400 pointer-events-none" 
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Rechercher un moyen de paiement..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 lg:pl-14 pr-4 lg:pr-6 py-4 lg:py-5 bg-white/70 backdrop-blur-xl border-0 rounded-2xl lg:rounded-3xl shadow-lg focus:shadow-2xl focus:bg-white/90 transition-all duration-500 outline-none focus:ring-2 focus:ring-blue-500/20 text-base lg:text-lg placeholder:text-gray-400"
            aria-label="Rechercher un moyen de paiement"
          />
        </div>
        <Select value={filterType} onValueChange={onFilterChange}>
          <SelectTrigger className="w-full sm:w-56 h-14 lg:h-16 bg-white/70 backdrop-blur-xl border-0 rounded-2xl lg:rounded-3xl shadow-lg focus:shadow-2xl focus:bg-white/90 focus:ring-2 focus:ring-blue-500/20 transition-all duration-500 text-base lg:text-lg">
            <SelectValue placeholder="Type de moyen" />
          </SelectTrigger>
          <SelectContent className="bg-white/95 backdrop-blur-md border-0 rounded-xl lg:rounded-2xl shadow-2xl">
            <SelectItem value="all">Tous types</SelectItem>
            <SelectItem value="visa">Visa</SelectItem>
            <SelectItem value="mastercard">Mastercard</SelectItem>
            <SelectItem value="paypal">PayPal</SelectItem>
            <SelectItem value="other">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
