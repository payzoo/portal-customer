import { useState } from "react";
import { 
  MapPin, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Star,
  Home,
  Building2,
  Briefcase,
  Heart,
  Eye,
  EyeOff,
  Copy,
  Archive,
  Settings
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

export function Addresses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      label: "Domicile",
      street: "123 Rue de la Paix",
      city: "Paris",
      zipCode: "75001",
      country: "France",
      type: "home",
      isDefault: true,
      isFavorite: true,
    },
    {
      id: 2,
      label: "Bureau",
      street: "456 Avenue des Champs-Élysées",
      city: "Paris",
      zipCode: "75008",
      country: "France",
      type: "work",
      isDefault: false,
      isFavorite: false,
    },
    {
      id: 3,
      label: "Autre Adresse",
      street: "789 Boulevard Saint-Germain",
      city: "Paris",
      zipCode: "75006",
      country: "France",
      type: "other",
      isDefault: false,
      isFavorite: false,
    },
  ]);

  const filteredAddresses = addresses.filter((address) => {
    const matchesSearch =
      address.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      address.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
      address.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      filterType === "all" || address.type === filterType;
    return matchesSearch && matchesType;
  });

  const favoriteCount = addresses.filter((address) => address.isFavorite).length;
  const homeCount = addresses.filter((address) => address.type === "home").length;
  const workCount = addresses.filter((address) => address.type === "work").length;

  const getTypeInfo = (type: Address["type"]) => {
    switch (type) {
      case "home":
        return {
          label: "Domicile",
          icon: Home,
          color: "bg-blue-500",
          bgColor: "bg-blue-50",
          textColor: "text-blue-600",
        };
      case "work":
        return {
          label: "Travail",
          icon: Building2,
          color: "bg-purple-500",
          bgColor: "bg-purple-50",
          textColor: "text-purple-600",
        };
      case "other":
        return {
          label: "Autre",
          icon: MapPin,
          color: "bg-gray-500",
          bgColor: "bg-gray-50",
          textColor: "text-gray-600",
        };
      default:
        return {
          label: "Inconnu",
          icon: MapPin,
          color: "bg-gray-500",
          bgColor: "bg-gray-50",
          textColor: "text-gray-600",
        };
    }
  };

  const handleEdit = (address: Address) => {
    console.log(`Modifier l'adresse ${address.label}`);
  };

  const handleCopy = (address: Address) => {
    console.log(`Copier l'adresse ${address.label}`);
  };

  const handleToggleFavorite = (address: Address) => {
    console.log(
      `Basculer le statut favori pour l'adresse ${address.label}`
    );
  };

  const handleArchive = (address: Address) => {
    console.log(`Archiver l'adresse ${address.label}`);
  };

  const handleDelete = (address: Address) => {
    console.log(`Supprimer l'adresse ${address.label}`);
  };

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Header minimaliste */}
        <div className="mb-10">
          <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
            Adresses
          </h1>
          <p className="text-gray-600 text-lg font-light">
            Gérez vos adresses facilement
          </p>
        </div>

        {/* Barre de recherche et filtres épurés */}
        <div className="mb-8">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une adresse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-0 rounded-2xl shadow-sm focus:shadow-md focus:outline-none transition-all duration-300 text-gray-900"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48 bg-white border-0 rounded-2xl shadow-sm h-14 focus:shadow-md transition-all duration-300">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className="bg-white border-0 rounded-xl shadow-lg">
                <SelectItem value="all">Tous types</SelectItem>
                <SelectItem value="home">Domicile</SelectItem>
                <SelectItem value="work">Travail</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Métriques essentielles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {addresses.length}
                </div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {favoriteCount}
                </div>
                <div className="text-sm text-gray-500">Favorites</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {homeCount}
                </div>
                <div className="text-sm text-gray-500">Domicile</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {workCount}
                </div>
                <div className="text-sm text-gray-500">Travail</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des adresses épurée */}
        <div className="space-y-3 mb-12">
          {filteredAddresses.length === 0 ? (
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-12 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Aucun résultat</h3>
                <p className="text-gray-500 text-sm">
                  Aucune adresse ne correspond à vos critères.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredAddresses.map((address) => {
              const typeInfo = getTypeInfo(address.type);
              
              return (
                <Card 
                  key={address.id} 
                  className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${typeInfo.color} rounded-xl flex items-center justify-center`}>
                          <typeInfo.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-medium text-gray-900 text-lg">{address.label}</h3>
                            {address.isDefault && (
                              <Badge className="px-2 py-1 rounded-md text-xs bg-blue-50 text-blue-600 border-0">
                                Par défaut
                              </Badge>
                            )}
                            {address.isFavorite && (
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            )}
                          </div>
                          <div className="text-gray-600 text-sm mb-1">
                            {address.street}, {address.city}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {address.zipCode} • {address.country}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Badge 
                          className={`px-3 py-1 rounded-lg text-xs ${typeInfo.bgColor} ${typeInfo.textColor} border-0`}
                        >
                          {typeInfo.label}
                        </Badge>
                        
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(address);
                            }}
                            className="w-8 h-8 p-0 rounded-lg"
                          >
                            <Settings className="w-4 h-4 text-gray-400" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="w-8 h-8 p-0 rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MoreVertical className="w-4 h-4 text-gray-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                              align="end" 
                              className="w-48 bg-white border-0 rounded-xl shadow-lg"
                            >
                              <DropdownMenuItem 
                                onClick={() => handleEdit(address)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                              >
                                <Edit className="w-4 h-4 text-gray-500" />
                                <span>Modifier</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleCopy(address)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                              >
                                <Copy className="w-4 h-4 text-gray-500" />
                                <span>Copier</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleToggleFavorite(address)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                              >
                                <Star className={`w-4 h-4 ${address.isFavorite ? 'text-yellow-500 fill-current' : 'text-gray-500'}`} />
                                <span>{address.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                onClick={() => handleArchive(address)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                              >
                                <Archive className="w-4 h-4 text-yellow-500" />
                                <span className="text-yellow-600">Archiver</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDelete(address)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-red-50 rounded-lg"
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
            })
          )}
        </div>

        {/* Ajouter une adresse - Version minimaliste */}
        <Card className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ajouter une adresse
              </h3>
              <p className="text-gray-500 text-sm max-w-md">
                Créez une nouvelle adresse pour simplifier vos commandes futures
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
