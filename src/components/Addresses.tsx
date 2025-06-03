
import { useState, useEffect } from "react";
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
  Archive,
  Brain,
  ArrowUpRight,
  Sparkles
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
  const [isLoaded, setIsLoaded] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  const handleEdit = (address: Address) => {
    console.log(`Modifier l'adresse ${address.label}`);
  };

  const handleCopy = (address: Address) => {
    console.log(`Copier l'adresse ${address.label}`);
  };

  const handleToggleFavorite = (address: Address) => {
    console.log(`Basculer le statut favori pour l'adresse ${address.label}`);
  };

  const handleArchive = (address: Address) => {
    console.log(`Archiver l'adresse ${address.label}`);
  };

  const handleDelete = (address: Address) => {
    console.log(`Supprimer l'adresse ${address.label}`);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-border/20 rounded-3xl rotate-12 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-border/30 rounded-2xl -rotate-12 animate-[float_8s_ease-in-out_infinite] opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-border/25 rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-32 right-1/3 w-20 h-20 border border-border/20 rounded-full animate-[float_9s_ease-in-out_infinite] opacity-40" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="payzoo-page-container relative z-10">
        
        {/* Modern header section - identical to other pages */}
        <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-foreground rounded-xl shadow-sm">
                  <MapPin className="w-6 h-6 text-background" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">Smart Location</span>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Adresses</h1>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Gérez vos adresses en toute simplicité
                </p>
              </div>
            </div>
            
            {/* Minimal modern CTA */}
            <Button 
              className="group bg-foreground hover:bg-foreground/90 text-background px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-0"
            >
              <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              Ajouter
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Enhanced metrics cards */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <Sparkles className="w-4 h-4 text-blue-500/60 animate-pulse" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {addresses.length}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Total</div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-yellow-500/10 rounded-xl group-hover:bg-yellow-500/20 transition-colors duration-300">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <Sparkles className="w-4 h-4 text-yellow-500/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {favoriteCount}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Favoris</div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors duration-300">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <Sparkles className="w-4 h-4 text-green-500/60 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {homeCount}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Domicile</div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <Sparkles className="w-4 h-4 text-purple-500/60 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {workCount}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Travail</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modern search and filters */}
        <div className={`mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une adresse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl h-12 focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all duration-300">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className="bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl">
                <SelectItem value="all">Tous types</SelectItem>
                <SelectItem value="home">Domicile</SelectItem>
                <SelectItem value="work">Travail</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Enhanced addresses list */}
        <div className={`space-y-4 mb-12 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {filteredAddresses.length === 0 ? (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-muted-foreground/60" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Aucun résultat</h3>
                <p className="text-muted-foreground">
                  Aucune adresse ne correspond à vos critères.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredAddresses.map((address, index) => {
              const typeInfo = getTypeInfo(address.type);
              
              return (
                <Card 
                  key={address.id} 
                  className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 ${typeInfo.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <typeInfo.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors duration-300">{address.label}</h3>
                            {address.isDefault && (
                              <Badge className="px-3 py-1 rounded-full text-xs bg-foreground/10 text-foreground border-0">
                                Par défaut
                              </Badge>
                            )}
                            {address.isFavorite && (
                              <Star className="w-4 h-4 text-yellow-500 fill-current animate-pulse" />
                            )}
                          </div>
                          <div className="text-foreground/80 mb-1 font-medium">
                            {address.street}, {address.city}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {address.zipCode} • {address.country}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Badge 
                          className={`px-4 py-2 rounded-full text-sm ${typeInfo.bgColor} ${typeInfo.textColor} border-0 group-hover:scale-105 transition-transform duration-300`}
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
                            className="w-9 h-9 p-0 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                          >
                            <Edit className="w-4 h-4 text-muted-foreground" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="w-9 h-9 p-0 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MoreVertical className="w-4 h-4 text-muted-foreground" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                              align="end" 
                              className="w-48 bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl"
                            >
                              <DropdownMenuItem 
                                onClick={() => handleEdit(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 rounded-lg transition-colors duration-200"
                              >
                                <Edit className="w-4 h-4 text-muted-foreground" />
                                <span>Modifier</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleCopy(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 rounded-lg transition-colors duration-200"
                              >
                                <Copy className="w-4 h-4 text-muted-foreground" />
                                <span>Copier</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleToggleFavorite(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 rounded-lg transition-colors duration-200"
                              >
                                <Star className={`w-4 h-4 ${address.isFavorite ? 'text-yellow-500 fill-current' : 'text-muted-foreground'}`} />
                                <span>{address.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                onClick={() => handleArchive(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-yellow-50 rounded-lg transition-colors duration-200"
                              >
                                <Archive className="w-4 h-4 text-yellow-500" />
                                <span className="text-yellow-600">Archiver</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDelete(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-lg transition-colors duration-200"
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

        {/* Modern CTA for adding address */}
        <Card 
          className={`group border-2 border-dashed border-border/50 bg-card/30 hover:border-foreground/30 hover:bg-card/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ animationDelay: '500ms' }}
        >
          <CardContent className="p-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-foreground/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-foreground/20 group-hover:scale-110 transition-all duration-300">
                <Plus className="w-8 h-8 text-foreground group-hover:rotate-90 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-foreground/90 transition-colors duration-300">
                Ajouter une adresse
              </h3>
              <p className="text-muted-foreground max-w-md group-hover:text-foreground/70 transition-colors duration-300">
                Créez une nouvelle adresse pour simplifier vos commandes
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
