
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
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Header minimaliste */}
        <div className="mb-10">
          <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
            Adresses
          </h1>
          <p className="text-gray-600 text-lg font-light">
            Gérez vos adresses de livraison et de facturation
          </p>
        </div>

        {/* Métriques essentielles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">2</div>
                <div className="text-sm text-gray-500">Adresses enregistrées</div>
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
                <div className="text-2xl font-semibold text-gray-900 mb-1">1</div>
                <div className="text-sm text-gray-500">Adresse principale</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">1</div>
                <div className="text-sm text-gray-500">Adresse bureau</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des adresses épurée */}
        <div className="space-y-3 mb-12">
          {addresses.map((address) => (
            <Card key={address.id} className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      {address.type === 'home' ? (
                        <Home className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Building2 className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-medium text-gray-900 text-lg">{address.name}</h3>
                        {address.isDefault && (
                          <Badge className="bg-green-50 text-green-600 hover:bg-green-50 px-3 py-1 rounded-lg text-xs border-0">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                            Principal
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-base mb-1">{address.street}</p>
                      <p className="text-gray-400 text-sm">{address.city}, {address.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg">
                      <Edit className="w-4 h-4 text-gray-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA principal épuré */}
        <Card className="border-2 border-dashed border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group cursor-pointer">
          <CardContent className="p-12 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
              <Plus className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 text-lg mb-2">Ajouter une nouvelle adresse</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Domicile, bureau ou autre adresse pour vos livraisons et facturations
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter une adresse
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
