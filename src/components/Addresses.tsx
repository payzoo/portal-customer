
import { useState } from "react";
import { 
  MapPin, 
  Plus, 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Star,
  Home,
  Building2,
  Copy,
  Archive
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
          color: "bg-black",
          bgColor: "bg-gray-50",
          textColor: "text-gray-700",
        };
      case "work":
        return {
          label: "Travail",
          icon: Building2,
          color: "bg-black",
          bgColor: "bg-gray-50",
          textColor: "text-gray-700",
        };
      case "other":
        return {
          label: "Autre",
          icon: MapPin,
          color: "bg-black",
          bgColor: "bg-gray-50",
          textColor: "text-gray-700",
        };
      default:
        return {
          label: "Inconnu",
          icon: MapPin,
          color: "bg-black",
          bgColor: "bg-gray-50",
          textColor: "text-gray-700",
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
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8 py-12">
        
        {/* Header ultra-minimaliste */}
        <div className="mb-16">
          <h1 className="text-5xl font-light text-black mb-3 tracking-tight">
            Adresses
          </h1>
          <p className="text-gray-500 text-lg font-light">
            Gérez vos adresses en toute simplicité
          </p>
        </div>

        {/* Métriques essentielles avec design noir */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border border-gray-100 bg-white hover:border-black transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-black mb-2">
                  {addresses.length}
                </div>
                <div className="text-sm text-gray-500 font-medium">Total</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 bg-white hover:border-black transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-black mb-2">
                  {favoriteCount}
                </div>
                <div className="text-sm text-gray-500 font-medium">Favorites</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 bg-white hover:border-black transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-black mb-2">
                  {homeCount}
                </div>
                <div className="text-sm text-gray-500 font-medium">Domicile</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 bg-white hover:border-black transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-black mb-2">
                  {workCount}
                </div>
                <div className="text-sm text-gray-500 font-medium">Travail</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Barre de recherche et filtres ultra-simples */}
        <div className="mb-12">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une adresse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-6 bg-white border border-gray-200 rounded-xl focus:border-black focus:outline-none transition-all duration-300 text-gray-900 text-lg"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48 bg-white border border-gray-200 rounded-xl h-16 focus:border-black transition-all duration-300 text-lg">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-xl">
                <SelectItem value="all">Tous types</SelectItem>
                <SelectItem value="home">Domicile</SelectItem>
                <SelectItem value="work">Travail</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Liste des adresses ultra-épurée */}
        <div className="space-y-4 mb-16">
          {filteredAddresses.length === 0 ? (
            <Card className="border border-gray-100 bg-white">
              <CardContent className="p-16 text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-light text-black mb-3">Aucun résultat</h3>
                <p className="text-gray-500">
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
                  className="border border-gray-100 bg-white hover:border-black transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 ${typeInfo.color} rounded-xl flex items-center justify-center`}>
                          <typeInfo.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-xl font-light text-black">{address.label}</h3>
                            {address.isDefault && (
                              <Badge className="px-3 py-1 rounded-full text-xs bg-black text-white border-0">
                                Par défaut
                              </Badge>
                            )}
                            {address.isFavorite && (
                              <Star className="w-5 h-5 text-black fill-current" />
                            )}
                          </div>
                          <div className="text-gray-600 mb-2 text-lg">
                            {address.street}, {address.city}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {address.zipCode} • {address.country}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Badge 
                          className={`px-4 py-2 rounded-full text-sm ${typeInfo.bgColor} ${typeInfo.textColor} border-0`}
                        >
                          {typeInfo.label}
                        </Badge>
                        
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(address);
                            }}
                            className="w-10 h-10 p-0 rounded-lg hover:bg-gray-50"
                          >
                            <Edit className="w-5 h-5 text-gray-400" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="w-10 h-10 p-0 rounded-lg hover:bg-gray-50"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MoreVertical className="w-5 h-5 text-gray-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                              align="end" 
                              className="w-48 bg-white border border-gray-200 rounded-xl shadow-xl"
                            >
                              <DropdownMenuItem 
                                onClick={() => handleEdit(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                              >
                                <Edit className="w-4 h-4 text-gray-500" />
                                <span>Modifier</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleCopy(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                              >
                                <Copy className="w-4 h-4 text-gray-500" />
                                <span>Copier</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleToggleFavorite(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                              >
                                <Star className={`w-4 h-4 ${address.isFavorite ? 'text-black fill-current' : 'text-gray-500'}`} />
                                <span>{address.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                onClick={() => handleArchive(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-yellow-50 rounded-lg"
                              >
                                <Archive className="w-4 h-4 text-yellow-500" />
                                <span className="text-yellow-600">Archiver</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDelete(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-lg"
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

        {/* Ajouter une adresse - Version ultra-minimaliste */}
        <Card className="border-2 border-dashed border-gray-200 bg-white hover:border-black transition-all duration-300 cursor-pointer group">
          <CardContent className="p-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                <Plus className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">
                Ajouter une adresse
              </h3>
              <p className="text-gray-500 text-lg max-w-md">
                Créez une nouvelle adresse pour simplifier vos commandes
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
