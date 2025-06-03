
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
          color: "bg-black",
        };
      case "work":
        return {
          label: "Travail",
          icon: Building2,
          color: "bg-black",
        };
      case "other":
        return {
          label: "Autre",
          icon: MapPin,
          color: "bg-black",
        };
      default:
        return {
          label: "Inconnu",
          icon: MapPin,
          color: "bg-black",
        };
    }
  };

  const typeInfo = getTypeInfo(address.type);

  return (
    <Card 
      className="group relative overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className={`w-12 h-12 ${typeInfo.color} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
              <typeInfo.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-black tracking-tight">{address.label}</h3>
                {address.isDefault && (
                  <Badge className="px-3 py-1 rounded-full text-xs bg-black text-white border-0 font-medium">
                    Par défaut
                  </Badge>
                )}
                {address.isFavorite && (
                  <Star className="w-4 h-4 text-black fill-current" />
                )}
              </div>
              <div className="text-gray-700 font-medium mb-1">
                {address.street}, {address.city}
              </div>
              <div className="text-gray-500 text-sm">
                {address.zipCode} • {address.country}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge 
              className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border-0"
            >
              {typeInfo.label}
            </Badge>
            
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(address);
                }}
                className="h-9 w-9 rounded-xl hover:bg-gray-100 transition-all duration-300"
                aria-label={`Modifier ${address.label}`}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-9 w-9 rounded-xl hover:bg-gray-100 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Actions pour ${address.label}`}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-48 bg-white border border-gray-200 rounded-xl shadow-xl p-2"
                >
                  <DropdownMenuItem 
                    onClick={() => onEdit(address)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Modifier</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onCopy(address)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copier</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onToggleFavorite(address)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <Star className={`w-4 h-4 ${address.isFavorite ? 'text-black fill-current' : 'text-gray-400'}`} />
                    <span>{address.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="mx-2" />
                  <DropdownMenuItem 
                    onClick={() => onArchive(address)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <Archive className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Archiver</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onDelete(address)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                    <span className="text-red-600">Supprimer</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
