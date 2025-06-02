
import { MapPin, Plus, Home, Building2, Edit, Trash2, User } from "lucide-react";
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
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Header épuré */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-light text-gray-900 mb-3 tracking-tight">
            Mes adresses
          </h1>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Gérez facilement vos adresses de livraison et de facturation
          </p>
        </div>

        {/* Stats minimalistes */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-7 h-7 text-blue-600" />
            </div>
            <div className="text-2xl font-medium text-gray-900 mb-1">2</div>
            <div className="text-sm text-gray-500">Adresses</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Home className="w-7 h-7 text-green-600" />
            </div>
            <div className="text-2xl font-medium text-gray-900 mb-1">1</div>
            <div className="text-sm text-gray-500">Principale</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Building2 className="w-7 h-7 text-purple-600" />
            </div>
            <div className="text-2xl font-medium text-gray-900 mb-1">1</div>
            <div className="text-sm text-gray-500">Bureau</div>
          </div>
        </div>

        {/* Liste des adresses simplifiée */}
        <div className="space-y-4 mb-12">
          {addresses.map((address) => (
            <Card key={address.id} className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-200 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {address.type === 'home' ? (
                        <Home className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Building2 className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <h3 className="font-medium text-gray-900">{address.name}</h3>
                        </div>
                        {address.isDefault && (
                          <Badge className="bg-green-50 text-green-700 hover:bg-green-50 px-2 py-1 text-xs border-0 rounded-full">
                            Principal
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-700 text-sm">{address.street}</p>
                        <p className="text-gray-500 text-sm">{address.city}, {address.country}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button variant="ghost" size="sm" className="w-9 h-9 p-0 rounded-lg hover:bg-gray-100">
                      <Edit className="w-4 h-4 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-9 h-9 p-0 rounded-lg hover:bg-red-50 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA minimaliste */}
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-dashed border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50 transition-all duration-200 group cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <Plus className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Nouvelle adresse</h3>
              <p className="text-gray-500 text-sm mb-6">
                Ajoutez une adresse de livraison ou de facturation
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6 text-sm">
                <Plus className="w-4 h-4 mr-2" />
                Ajouter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
