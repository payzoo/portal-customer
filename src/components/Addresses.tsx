
import { MapPin, Plus, Home, Building2, Edit, Trash2, MoreHorizontal, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function Addresses() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Header épuré */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Adresses
            </h1>
          </div>
          <p className="text-slate-600 text-sm">
            Gérez vos adresses de livraison et de facturation
          </p>
        </div>

        {/* Statistiques minimalistes */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 mb-1">
              {addresses.length}
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">
              Total
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 mb-1">
              {addresses.filter(a => a.isDefault).length}
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">
              Principale
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 mb-1">
              {addresses.filter(a => a.type === "office").length}
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">
              Bureau
            </div>
          </div>
        </div>

        {/* Liste des adresses minimaliste */}
        <div className="space-y-4 mb-8">
          {addresses.map((address) => (
            <Card 
              key={address.id} 
              className="border border-slate-200 hover:border-slate-300 transition-all duration-200 group"
              onMouseEnter={() => setHoveredCard(address.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    {/* Icône simple */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      address.type === 'home' 
                        ? 'bg-slate-100' 
                        : 'bg-blue-50'
                    }`}>
                      {address.type === 'home' ? (
                        <Home className={`w-5 h-5 ${
                          address.type === 'home' ? 'text-slate-600' : 'text-blue-600'
                        }`} />
                      ) : (
                        <Building2 className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      {/* En-tête avec nom et badge */}
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-slate-900">
                          {address.name}
                        </h3>
                        {address.isDefault && (
                          <Badge className="bg-slate-900 text-white hover:bg-slate-900 px-2 py-0.5 text-xs rounded-md">
                            <Star className="w-3 h-3 mr-1" />
                            Principal
                          </Badge>
                        )}
                      </div>
                      
                      {/* Adresse */}
                      <div className="space-y-1">
                        <p className="text-slate-700 text-sm">
                          {address.street}
                        </p>
                        <p className="text-slate-500 text-sm">
                          {address.city}, {address.country}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className={`flex items-center transition-opacity duration-200 ${
                    hoveredCard === address.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-8 h-8 p-0 rounded-lg hover:bg-slate-100"
                        >
                          <MoreHorizontal className="w-4 h-4 text-slate-400" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="end" 
                        className="w-48 bg-white border border-slate-200 rounded-lg shadow-lg"
                      >
                        <DropdownMenuItem 
                          onClick={() => handleEdit(address.id)}
                          className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 rounded-md"
                        >
                          <Edit className="w-4 h-4 text-slate-500" />
                          <span>Modifier</span>
                        </DropdownMenuItem>
                        {!address.isDefault && (
                          <DropdownMenuItem 
                            onClick={() => handleSetDefault(address.id)}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 rounded-md"
                          >
                            <Star className="w-4 h-4 text-slate-500" />
                            <span>Définir par défaut</span>
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator className="my-1 bg-slate-200" />
                        <DropdownMenuItem 
                          onClick={() => handleDelete(address.id)}
                          className="flex items-center gap-2 px-3 py-2 hover:bg-red-50 rounded-md text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Supprimer</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA minimaliste */}
        <Card className="border-2 border-dashed border-slate-200 hover:border-slate-300 transition-colors cursor-pointer group">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              {/* Icône */}
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-slate-200 transition-colors">
                <Plus className="w-6 h-6 text-slate-600" />
              </div>

              {/* Contenu */}
              <div className="space-y-2">
                <h3 className="font-medium text-slate-900">
                  Ajouter une adresse
                </h3>
                <p className="text-slate-500 text-sm">
                  Nouvelle adresse de livraison ou de facturation
                </p>
              </div>

              {/* Bouton */}
              <Button className="bg-slate-900 text-white rounded-lg px-6 py-2 hover:bg-slate-800 transition-colors">
                Commencer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
