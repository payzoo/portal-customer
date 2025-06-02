
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
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">Adresses</h1>
              <p className="text-gray-500 text-sm">Gérez vos adresses de livraison et de facturation</p>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Adresses enregistrées</p>
                    <p className="text-xs text-gray-500">Total des adresses</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">2</div>
                <div className="text-xs text-blue-600">Toutes vérifiées</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Home className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Adresse principale</p>
                    <p className="text-xs text-gray-500">Adresse par défaut</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">1</div>
                <div className="text-xs text-green-600">Domicile</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Adresse bureau</p>
                    <p className="text-xs text-gray-500">Adresse professionnelle</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">1</div>
                <div className="text-xs text-purple-600">Bureau PayZoo</div>
              </CardContent>
            </Card>
          </div>

          {/* Addresses List */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Mes adresses</h3>
              
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {address.type === 'home' ? (
                          <Home className="w-5 h-5 text-gray-600" />
                        ) : (
                          <Building2 className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-medium text-gray-900 text-sm">{address.name}</h3>
                          {address.isDefault && (
                            <Badge className="bg-green-50 text-green-600 hover:bg-green-50 text-xs border-green-200">
                              Principal
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mb-1">{address.street}</p>
                        <p className="text-xs text-gray-400">{address.city}, {address.country}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg">
                        <Edit className="w-4 h-4 text-gray-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg hover:bg-red-50 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Add Address */}
          <Card className="border-2 border-dashed border-gray-200 bg-white/60 backdrop-blur-sm hover:border-gray-300 hover:bg-white/80 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Plus className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-2">Ajouter une nouvelle adresse</h3>
              <p className="text-gray-500 text-xs mb-6 max-w-sm mx-auto">
                Domicile, bureau ou autre adresse pour vos livraisons et facturations
              </p>
              <Button variant="outline" className="rounded-lg text-xs">
                Ajouter une adresse
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm mb-1">Importer depuis Google</h3>
                    <p className="text-xs text-gray-500">Synchroniser automatiquement vos adresses favorites</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm mb-1">Adresse professionnelle</h3>
                    <p className="text-xs text-gray-500">Ajouter l'adresse de votre entreprise ou bureau</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
