
import { Search, Filter, SortAsc } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PaymentSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterType: string;
  onFilterChange: (value: string) => void;
  isLoaded: boolean;
}

export function PaymentSearch({
  searchTerm,
  onSearchChange,
  filterType,
  onFilterChange,
  isLoaded
}: PaymentSearchProps) {
  return (
    <div className={`mb-8 transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Rechercher un moyen de paiement..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-11 h-12 bg-white border-gray-200 rounded-xl focus:border-black focus:ring-0"
          />
        </div>
        
        <div className="flex gap-3">
          <Select value={filterType} onValueChange={onFilterChange}>
            <SelectTrigger className="w-[140px] h-12 bg-white border-gray-200 rounded-xl">
              <Filter className="w-4 h-4 mr-2 text-gray-500" />
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous</SelectItem>
              <SelectItem value="visa">Visa</SelectItem>
              <SelectItem value="mastercard">Mastercard</SelectItem>
              <SelectItem value="paypal">PayPal</SelectItem>
              <SelectItem value="other">Autres</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            variant="outline" 
            size="sm"
            className="h-12 px-4 border-gray-200 rounded-xl hover:bg-gray-50"
          >
            <SortAsc className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
