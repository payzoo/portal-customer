
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
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header minimal */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-light text-gray-900">Adresses</h1>
              <p className="text-sm text-gray-500 mt-1">Gérez vos adresses de facturation et livraison</p>
            </div>
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 text-sm font-medium rounded-lg transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Nouvelle adresse
            </Button>
          </div>
        </div>

        {/* Liste des adresses */}
        <div className="space-y-3">
          {addresses.map((address) => (
            <Card key={address.id} className="border border-gray-100 hover:border-gray-200 transition-colors bg-white rounded-xl overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                      {address.type === 'home' ? (
                        <Home className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Building2 className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-gray-900">{address.name}</span>
                        {address.isDefault && (
                          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 px-2 py-0.5 text-xs rounded-md border-0">
                            Par défaut
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{address.street}</p>
                      <p className="text-xs text-gray-400">{address.city}, {address.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-50">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* CTA pour ajouter une adresse */}
          <Card className="border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors bg-gray-50/30 rounded-xl group cursor-pointer">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <Plus className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-900 text-sm">Ajouter une adresse</h3>
                  <p className="text-xs text-gray-500">Facturation ou livraison</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions rapides minimalistes */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="font-medium text-gray-900 text-sm mb-6">Actions rapides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="justify-start h-auto p-4 rounded-xl border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 text-sm">Importer depuis Google</p>
                  <p className="text-xs text-gray-500">Synchroniser vos adresses</p>
                </div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="justify-start h-auto p-4 rounded-xl border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <Building2 className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 text-sm">Adresse professionnelle</p>
                  <p className="text-xs text-gray-500">Ajouter votre entreprise</p>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
