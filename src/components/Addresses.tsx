
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
import { AddAddressModal } from "@/components/modals/AddAddressModal";

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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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
    const matchesType = filterType === "all" || address.type === filterType;
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

  const handleAddAddress = (newAddress: Address) => {
    setAddresses(prev => [...prev, newAddress]);
    console.log('Nouvelle adresse ajoutée:', newAddress);
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
    <main className="min-h-screen bg-background">
      {/* Floating geometric elements - simplified */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-border/20 rounded-3xl rotate-12 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-border/30 rounded-2xl -rotate-12 animate-[float_8s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-border/25 rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite_4s]" />
        <div className="absolute top-32 right-1/3 w-20 h-20 border border-border/20 rounded-full animate-[float_9s_ease-in-out_infinite_1s] opacity-40" />
      </div>

      <div className="payzoo-page-container relative z-10">
        {/* Header section */}
        <header className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-foreground rounded-xl shadow-sm">
                  <MapPin className="w-6 h-6 text-background" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600">Smart Location</span>
                </div>
              </div>
              <div>
                <h1 className="payzoo-page-title">Adresses</h1>
                <p className="payzoo-subtitle flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Gérez vos adresses en toute simplicité
                </p>
              </div>
            </div>
            
            <Button 
              className="payzoo-btn-primary group"
              onClick={() => setIsAddModalOpen(true)}
            >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              Ajouter
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </header>

        {/* Metrics cards */}
        <section className={`payzoo-grid-4 mb-12 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Card className="payzoo-card-interactive">
            <CardContent className="payzoo-card-compact">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <Sparkles className="w-4 h-4 text-blue-500/60 animate-pulse" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {addresses.length}
              </div>
              <div className="payzoo-caption">Total</div>
            </CardContent>
          </Card>

          <Card className="payzoo-card-interactive">
            <CardContent className="payzoo-card-compact">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-yellow-500/10 rounded-xl">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <Sparkles className="w-4 h-4 text-yellow-500/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {favoriteCount}
              </div>
              <div className="payzoo-caption">Favoris</div>
            </CardContent>
          </Card>

          <Card className="payzoo-card-interactive">
            <CardContent className="payzoo-card-compact">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-500/10 rounded-xl">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <Sparkles className="w-4 h-4 text-green-500/60 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {homeCount}
              </div>
              <div className="payzoo-caption">Domicile</div>
            </CardContent>
          </Card>

          <Card className="payzoo-card-interactive">
            <CardContent className="payzoo-card-compact">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <Sparkles className="w-4 h-4 text-purple-500/60 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {workCount}
              </div>
              <div className="payzoo-caption">Travail</div>
            </CardContent>
          </Card>
        </section>

        {/* Search and filters */}
        <section className={`mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex gap-4">
            <div className="payzoo-input-container flex-1">
              <Search className="payzoo-input-icon" />
              <input
                type="text"
                placeholder="Rechercher une adresse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="payzoo-input-with-icon"
                aria-label="Rechercher une adresse"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48 h-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all duration-300">
                <SelectValue placeholder="Type d'adresse" />
              </SelectTrigger>
              <SelectContent className="bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl">
                <SelectItem value="all">Tous types</SelectItem>
                <SelectItem value="home">Domicile</SelectItem>
                <SelectItem value="work">Travail</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Addresses list */}
        <section className={`space-y-4 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {filteredAddresses.length === 0 ? (
            <Card className="payzoo-card">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-muted-foreground/60" />
                </div>
                <h3 className="payzoo-subsection-title mb-3">Aucun résultat</h3>
                <p className="payzoo-subtitle">
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
                  className="payzoo-card-interactive"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="payzoo-card-compact">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 ${typeInfo.color} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                          <typeInfo.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="payzoo-subsection-title">{address.label}</h3>
                            {address.isDefault && (
                              <Badge className="px-3 py-1 rounded-full text-xs bg-foreground/10 text-foreground border-0">
                                Par défaut
                              </Badge>
                            )}
                            {address.isFavorite && (
                              <Star className="w-4 h-4 text-yellow-500 fill-current animate-pulse" />
                            )}
                          </div>
                          <div className="payzoo-body mb-1">
                            {address.street}, {address.city}
                          </div>
                          <div className="payzoo-body-sm text-muted-foreground">
                            {address.zipCode} • {address.country}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Badge 
                          className={`px-4 py-2 rounded-full text-sm ${typeInfo.bgColor} ${typeInfo.textColor} border-0 transition-transform duration-300 group-hover:scale-105`}
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
                            className="payzoo-btn-icon"
                            aria-label={`Modifier ${address.label}`}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="payzoo-btn-icon"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`Actions pour ${address.label}`}
                              >
                                <MoreVertical className="w-4 h-4" />
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
                                <Edit className="w-4 h-4" />
                                <span>Modifier</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleCopy(address)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 rounded-lg transition-colors duration-200"
                              >
                                <Copy className="w-4 h-4" />
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
        </section>
      </div>

      <AddAddressModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddAddress}
      />
    </main>
  );
}
