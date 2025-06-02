
import { MapPin, Plus, Home, Building2, Edit, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Addresses() {
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

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-3xl mx-auto p-8">
        {/* Header minimaliste */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light text-gray-900 mb-2">Adresses</h1>
              <p className="text-gray-500 text-sm">Gérez vos adresses de livraison</p>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-normal shadow-sm transition-all duration-200 hover:shadow-md">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </div>

        {/* Liste des adresses épurée */}
        <div className="space-y-4 mb-12">
          {addresses.map((address) => (
            <Card key={address.id} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      {address.type === 'home' ? (
                        <Home className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Building2 className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-gray-900 text-base">{address.name}</h3>
                        {address.isDefault && (
                          <Badge className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full border-0 font-normal">
                            Principal
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-1">{address.street}</p>
                      <p className="text-gray-400 text-xs">{address.city}, {address.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-gray-50 rounded-full">
                      <Edit className="w-4 h-4 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-red-50 hover:text-red-500 rounded-full">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* CTA minimaliste */}
          <Card className="border border-dashed border-gray-200 hover:border-gray-300 transition-all duration-200 bg-transparent cursor-pointer group">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <Plus className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-gray-600 text-sm mb-1">Ajouter une nouvelle adresse</p>
                  <p className="text-gray-400 text-xs">Domicile, bureau ou autre</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions rapides modernisées */}
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900 text-sm mb-4">Actions rapides</h3>
          
          <Button 
            variant="outline" 
            className="w-full justify-start h-14 p-4 border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-200 rounded-2xl bg-white/60 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900 text-sm">Importer depuis Google</p>
                <p className="text-xs text-gray-500">Synchroniser automatiquement vos adresses</p>
              </div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start h-14 p-4 border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-200 rounded-2xl bg-white/60 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900 text-sm">Adresse professionnelle</p>
                <p className="text-xs text-gray-500">Ajouter l'adresse de votre entreprise</p>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
