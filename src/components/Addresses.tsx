
import { MapPin, Plus, Home, Building2, Edit, Trash2, MoreHorizontal, Star, Search, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function Addresses() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const addresses = [
    {
      id: 1,
      name: "Housseine Dao",
      type: "home",
      street: "Avenue Royale Abdiran O",
      city: "Paris",
      country: "France",
      isDefault: true
    },
    {
      id: 2,
      name: "PayZoo Office",
      type: "office",
      street: "15 Rue de la Tech",
      city: "Lyon",
      country: "France",
      isDefault: false
    }
  ];

  const filteredAddresses = addresses.filter(addr => {
    const matchesSearch = addr.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         addr.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         addr.street.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || addr.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const totalAddresses = addresses.length;
  const defaultCount = addresses.filter(a => a.isDefault).length;
  const homeCount = addresses.filter(a => a.type === "home").length;
  const officeCount = addresses.filter(a => a.type === "office").length;

  const handleEdit = (id: number) => {
    console.log(`Modifier l'adresse ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Supprimer l'adresse ${id}`);
  };

  const handleSetDefault = (id: number) => {
    console.log(`Définir comme adresse par défaut ${id}`);
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
                placeholder="Rechercher..."
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
                <SelectItem value="all">Toutes</SelectItem>
                <SelectItem value="home">Domicile</SelectItem>
                <SelectItem value="office">Bureau</SelectItem>
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
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {totalAddresses}
                </div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {defaultCount}
                </div>
                <div className="text-sm text-gray-500">Principale</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
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
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {officeCount}
                </div>
                <div className="text-sm text-gray-500">Bureau</div>
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
            filteredAddresses.map((address) => (
              <Card 
                key={address.id} 
                className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredCard(address.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        address.type === 'home' 
                          ? 'bg-green-500' 
                          : 'bg-purple-500'
                      }`}>
                        {address.type === 'home' ? (
                          <Home className="w-5 h-5 text-white" />
                        ) : (
                          <Building2 className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg mb-1">{address.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>{address.street}</span>
                          <span>•</span>
                          <span>{address.city}, {address.country}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="font-medium text-gray-900 text-lg mb-1">
                          {address.type === 'home' ? 'Domicile' : 'Bureau'}
                        </div>
                        <div className="text-xs text-gray-400">
                          {address.isDefault ? 'Adresse principale' : 'Adresse secondaire'}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {address.isDefault && (
                          <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50 px-3 py-1 rounded-lg text-xs border-0">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            Principal
                          </Badge>
                        )}
                        
                        <div className={`flex items-center gap-1 transition-opacity duration-200 ${
                          hoveredCard === address.id ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="w-8 h-8 p-0 rounded-lg"
                              >
                                <MoreHorizontal className="w-4 h-4 text-gray-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                              align="end" 
                              className="w-48 bg-white border-0 rounded-xl shadow-lg"
                            >
                              <DropdownMenuItem 
                                onClick={() => handleEdit(address.id)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                              >
                                <Edit className="w-4 h-4 text-gray-500" />
                                <span>Modifier</span>
                              </DropdownMenuItem>
                              {!address.isDefault && (
                                <DropdownMenuItem 
                                  onClick={() => handleSetDefault(address.id)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                                >
                                  <Star className="w-4 h-4 text-gray-500" />
                                  <span>Définir par défaut</span>
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                onClick={() => handleDelete(address.id)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-red-50 rounded-lg text-red-600"
                              >
                                <Trash2 className="w-4 h-4" />
                                <span>Supprimer</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* CTA pour ajouter une adresse - Version minimaliste améliorée */}
        <Card className="border-2 border-dashed border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer group">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              {/* Icône */}
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-gray-200 transition-all duration-300">
                <Plus className="w-8 h-8 text-gray-600" />
              </div>

              {/* Contenu */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-gray-900">
                  Ajouter une adresse
                </h3>
                <p className="text-gray-500 text-lg">
                  Nouvelle adresse de livraison ou de facturation
                </p>
              </div>

              {/* Bouton */}
              <Button className="bg-gray-900 text-white rounded-xl px-8 py-3 hover:bg-gray-800 transition-all duration-300 text-base font-medium">
                Commencer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
