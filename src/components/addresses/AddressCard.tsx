
import { Star, Edit, MoreVertical, Copy, Archive, Trash2, Home, Building2, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface Address {
  id: number;
  label: string;
  street: string;
  city: string;
  zipCode: string;
  country: string;
  type: "home" | "work" | "other";
  isDefault: boolean;
  isFavorite: boolean;
}

interface AddressCardProps {
  address: Address;
  index: number;
  onEdit: (address: Address) => void;
  onCopy: (address: Address) => void;
  onToggleFavorite: (address: Address) => void;
  onArchive: (address: Address) => void;
  onDelete: (address: Address) => void;
}

export function AddressCard({
  address,
  index,
  onEdit,
  onCopy,
  onToggleFavorite,
  onArchive,
  onDelete
}: AddressCardProps) {
  const getTypeInfo = (type: Address["type"]) => {
    switch (type) {
      case "home":
        return {
          label: "Domicile",
          icon: Home,
          color: "bg-gray-100",
        };
      case "work":
        return {
          label: "Travail",
          icon: Building2,
          color: "bg-gray-100",
        };
      case "other":
        return {
          label: "Autre",
          icon: MapPin,
          color: "bg-gray-100",
        };
      default:
        return {
          label: "Inconnu",
          icon: MapPin,
          color: "bg-gray-100",
        };
    }
  };

  const typeInfo = getTypeInfo(address.type);

  return (
    <Card 
      className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl max-w-md mx-auto"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <div className={`w-16 h-16 ${typeInfo.color} rounded-2xl flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110`}>
            <typeInfo.icon className="w-8 h-8 text-gray-600" />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <h3 className="text-xl font-bold text-black tracking-tight">{address.label}</h3>
              {address.isFavorite && (
                <Star className="w-5 h-5 text-black fill-current" />
              )}
            </div>
            
            {address.isDefault && (
              <Badge className="px-4 py-1 rounded-full text-xs bg-black text-white border-0 font-bold tracking-wide">
                PAR DÉFAUT
              </Badge>
            )}
            
            <div className="space-y-2">
              <div className="text-gray-800 font-semibold">
                {address.street}
              </div>
              <div className="text-gray-600 font-medium">
                {address.city}, {address.zipCode}
              </div>
              <div className="text-gray-500 text-sm font-medium">
                {address.country}
              </div>
            </div>
            
            <Badge 
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-50 text-gray-700 border-0"
            >
              {typeInfo.label}
            </Badge>
          </div>
          
          <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={(e) => {
                e.stopPropagation();
                onEdit(address);
              }}
              className="h-10 w-10 rounded-full hover:bg-gray-50 transition-all duration-300"
              aria-label={`Modifier ${address.label}`}
            >
              <Edit className="w-4 h-4" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-10 w-10 rounded-full hover:bg-gray-50 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Actions pour ${address.label}`}
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 bg-white border border-gray-100 rounded-2xl shadow-xl p-3"
              >
                <DropdownMenuItem 
                  onClick={() => onEdit(address)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer font-medium"
                >
                  <Edit className="w-4 h-4" />
                  <span>Modifier</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => onCopy(address)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer font-medium"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copier</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => onToggleFavorite(address)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer font-medium"
                >
                  <Star className={`w-4 h-4 ${address.isFavorite ? 'text-black fill-current' : 'text-gray-400'}`} />
                  <span>{address.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="mx-2 my-2" />
                <DropdownMenuItem 
                  onClick={() => onArchive(address)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer font-medium"
                >
                  <Archive className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">Archiver</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => onDelete(address)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-xl transition-colors duration-200 cursor-pointer font-medium"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                  <span className="text-red-600">Supprimer</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
