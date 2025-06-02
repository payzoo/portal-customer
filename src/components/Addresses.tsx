
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
        
        {/* Header minimaliste avec animation */}
        <div className="mb-10 animate-fade-in">
          <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
            Adresses
          </h1>
          <p className="text-gray-600 text-lg font-light">
            Gérez vos adresses de livraison et facturation
          </p>
        </div>

        {/* Barre de recherche et filtres épurés avec animations */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors duration-200" />
              <input
                type="text"
                placeholder="Rechercher une adresse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-0 rounded-2xl shadow-sm focus:shadow-lg focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-48 bg-white border-0 rounded-2xl shadow-sm h-14 focus:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <SelectValue placeholder="Type d'adresse" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-0 rounded-xl shadow-xl">
                <SelectItem value="all">Toutes les adresses</SelectItem>
                <SelectItem value="home">Domicile</SelectItem>
                <SelectItem value="office">Bureau</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Métriques essentielles avec animations et hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {totalAddresses}
                </div>
                <div className="text-sm text-gray-500 font-medium">Total</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {defaultCount}
                </div>
                <div className="text-sm text-gray-500 font-medium">Principale</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {homeCount}
                </div>
                <div className="text-sm text-gray-500 font-medium">Domicile</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: "0.5s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {officeCount}
                </div>
                <div className="text-sm text-gray-500 font-medium">Bureau</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des adresses épurée avec animations et microinteractions */}
        <div className="space-y-4 mb-12">
          {filteredAddresses.length === 0 ? (
            <Card className="border-0 bg-white shadow-sm animate-fade-in">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Aucune adresse trouvée</h3>
                <p className="text-gray-500 text-base">
                  Aucune adresse ne correspond à vos critères de recherche.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredAddresses.map((address, index) => (
              <Card 
                key={address.id} 
                className="border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(address.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        address.type === 'home' 
                          ? 'bg-gradient-to-br from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700' 
                          : 'bg-gradient-to-br from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700'
                      }`}>
                        {address.type === 'home' ? (
                          <Home className="w-6 h-6 text-white" />
                        ) : (
                          <Building2 className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-xl mb-2 group-hover:text-gray-700 transition-colors duration-200">
                          {address.name}
                        </h3>
                        <div className="flex items-center gap-3 text-gray-500">
                          <span className="text-base">{address.street}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span className="text-base">{address.city}, {address.country}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="font-semibold text-gray-900 text-lg mb-2">
                          {address.type === 'home' ? 'Domicile' : 'Bureau'}
                        </div>
                        <div className="text-sm text-gray-400">
                          {address.isDefault ? 'Adresse principale' : 'Adresse secondaire'}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {address.isDefault && (
                          <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-xl text-sm border-0 font-medium transition-all duration-200">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                            Principal
                          </Badge>
                        )}
                        
                        <div className={`flex items-center gap-2 transition-all duration-300 ${
                          hoveredCard === address.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                        }`}>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="w-10 h-10 p-0 rounded-xl hover:bg-gray-100 transition-all duration-200"
                              >
                                <MoreHorizontal className="w-5 h-5 text-gray-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                              align="end" 
                              className="w-52 bg-white border-0 rounded-2xl shadow-xl animate-scale-in"
                            >
                              <DropdownMenuItem 
                                onClick={() => handleEdit(address.id)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-all duration-200"
                              >
                                <Edit className="w-4 h-4 text-gray-500" />
                                <span className="font-medium">Modifier</span>
                              </DropdownMenuItem>
                              {!address.isDefault && (
                                <DropdownMenuItem 
                                  onClick={() => handleSetDefault(address.id)}
                                  className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-xl transition-all duration-200"
                                >
                                  <Star className="w-4 h-4 text-blue-500" />
                                  <span className="font-medium text-blue-600">Définir par défaut</span>
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator className="my-2" />
                              <DropdownMenuItem 
                                onClick={() => handleDelete(address.id)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-xl transition-all duration-200"
                              >
                                <Trash2 className="w-4 h-4 text-red-500" />
                                <span className="font-medium text-red-600">Supprimer</span>
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

        {/* CTA pour ajouter une adresse - Version minimaliste moderne avec animations */}
        <Card className="border-2 border-dashed border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in" style={{ animationDelay: "1s" }}>
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              {/* Icône animée */}
              <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300">
                <Plus className="w-10 h-10 text-gray-600 group-hover:rotate-90 transition-transform duration-300" />
              </div>

              {/* Contenu */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                  Ajouter une nouvelle adresse
                </h3>
                <p className="text-gray-500 text-lg max-w-md mx-auto">
                  Créez une nouvelle adresse de livraison ou de facturation en quelques clics
                </p>
              </div>

              {/* Bouton */}
              <Button className="bg-gray-900 text-white rounded-2xl px-10 py-4 hover:bg-gray-800 hover:scale-105 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
                Commencer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
