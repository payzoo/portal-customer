
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
          color: "bg-blue-500",
          bgColor: "bg-blue-50",
          textColor: "text-blue-700",
        };
      case "work":
        return {
          label: "Travail",
          icon: Building2,
          color: "bg-purple-500",
          bgColor: "bg-purple-50",
          textColor: "text-purple-700",
        };
      case "other":
        return {
          label: "Autre",
          icon: MapPin,
          color: "bg-green-500",
          bgColor: "bg-green-50",
          textColor: "text-green-700",
        };
      default:
        return {
          label: "Inconnu",
          icon: MapPin,
          color: "bg-gray-500",
          bgColor: "bg-gray-50",
          textColor: "text-gray-700",
        };
    }
  };

  const typeInfo = getTypeInfo(address.type);

  return (
    <Card 
      className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-xl hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 flex-1">
            <div className={`w-14 h-14 ${typeInfo.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
              <typeInfo.icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-4 mb-3">
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{address.label}</h3>
                {address.isDefault && (
                  <Badge className="px-3 py-1 rounded-full text-xs bg-gray-900/10 text-gray-900 border-0 font-medium">
                    Par défaut
                  </Badge>
                )}
                {address.isFavorite && (
                  <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse" />
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
          
          <div className="flex items-center gap-4">
            <Badge 
              className={`px-4 py-2 rounded-full text-sm font-medium ${typeInfo.bgColor} ${typeInfo.textColor} border-0 shadow-sm group-hover:scale-105 transition-transform duration-300`}
            >
              {typeInfo.label}
            </Badge>
            
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(address);
                }}
                className="h-10 w-10 rounded-xl hover:bg-gray-100/80 hover:scale-110 transition-all duration-300"
                aria-label={`Modifier ${address.label}`}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-10 w-10 rounded-xl hover:bg-gray-100/80 hover:scale-110 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Actions pour ${address.label}`}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-48 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl"
                >
                  <DropdownMenuItem 
                    onClick={() => onEdit(address)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50/80 rounded-xl transition-colors duration-200 m-1"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Modifier</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onCopy(address)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50/80 rounded-xl transition-colors duration-200 m-1"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copier</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onToggleFavorite(address)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50/80 rounded-xl transition-colors duration-200 m-1"
                  >
                    <Star className={`w-4 h-4 ${address.isFavorite ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
                    <span>{address.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="mx-2" />
                  <DropdownMenuItem 
                    onClick={() => onArchive(address)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-yellow-50/80 rounded-xl transition-colors duration-200 m-1"
                  >
                    <Archive className="w-4 h-4 text-yellow-600" />
                    <span className="text-yellow-700">Archiver</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onDelete(address)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-red-50/80 rounded-xl transition-colors duration-200 m-1"
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
