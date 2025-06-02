
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header épuré */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Adresses</h1>
              <p className="text-gray-600 mt-1">Gérez vos adresses facilement</p>
            </div>
            <Button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </div>

        {/* Liste des adresses optimisée */}
        <div className="space-y-3 mb-8">
          {addresses.map((address) => (
            <Card key={address.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      {address.type === 'home' ? (
                        <Home className="w-4 h-4 text-gray-700" />
                      ) : (
                        <Building2 className="w-4 h-4 text-gray-700" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{address.name}</span>
                        {address.isDefault && (
                          <Badge className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full border-0">
                            Principal
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-0.5">{address.street}</p>
                      <p className="text-xs text-gray-500">{address.city}, {address.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100">
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

          {/* CTA simplifié */}
          <Card className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors bg-white cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 text-center">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Plus className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Nouvelle adresse</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions rapides modernes */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Actions rapides</h3>
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start h-12 p-4 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 text-sm">Importer depuis Google</p>
                  <p className="text-xs text-gray-500">Synchroniser automatiquement</p>
                </div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start h-12 p-4 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 rounded-lg">
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
