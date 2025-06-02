import { MapPin, Plus, MoreHorizontal, Home, Building2 } from "lucide-react";
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
    <div className="p-8 bg-gray-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Adresses</h1>
            <p className="text-gray-600 text-lg">Gérez vos adresses de facturation et livraison</p>
          </div>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200">
            <Plus className="w-5 h-5 mr-2" />
            Ajouter une adresse
          </Button>
        </div>

        {/* Addresses List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Adresses enregistrées</h2>
          
          {addresses.map((address) => (
            <Card key={address.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center shadow-sm">
                      {address.type === 'home' ? (
                        <Home className="w-7 h-7 text-green-600" />
                      ) : (
                        <Building2 className="w-7 h-7 text-green-600" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-gray-900 text-lg">{address.name}</span>
                        {address.isDefault && (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-1 rounded-full">
                            Par défaut
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-700 font-medium">{address.street}</p>
                      <p className="text-gray-500">{address.city}, {address.country}</p>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add Address CTA */}
          <Card className="border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors bg-white">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center">
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-lg">Ajouter une nouvelle adresse</h3>
                  <p className="text-gray-500">Adresse de facturation ou de livraison</p>
                </div>
                <Button variant="outline" className="px-6 py-2 rounded-lg">
                  Ajouter une adresse
                </Button>
              </div>
            </CardContent>
          </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Actions rapides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Importer depuis Google</p>
                    <p className="text-sm text-gray-500">Synchroniser vos adresses Google</p>
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Building2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Adresse professionnelle</p>
                    <p className="text-sm text-gray-500">Ajouter l'adresse de votre entreprise</p>
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
