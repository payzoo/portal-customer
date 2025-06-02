
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header harmonisé */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900 tracking-tight">
                Adresses
              </h1>
              <p className="text-gray-500 text-base mt-2 font-light">
                Gérez vos adresses de livraison et de facturation
              </p>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-2xl px-8 py-3 font-medium shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </div>

        {/* Stats - Style moderne unifié */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:border-gray-200/80 transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">2</div>
            <div className="text-sm text-gray-500 font-light">Adresses enregistrées</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:border-gray-200/80 transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Home className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">1</div>
            <div className="text-sm text-gray-500 font-light">Adresse principale</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:border-gray-200/80 transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Building2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">1</div>
            <div className="text-sm text-gray-500 font-light">Adresse bureau</div>
          </div>
        </div>

        {/* Liste des adresses - Style harmonisé */}
        <div className="space-y-4 mb-16">
          {addresses.map((address) => (
            <Card key={address.id} className="border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      {address.type === 'home' ? (
                        <Home className="w-6 h-6 text-gray-600" />
                      ) : (
                        <Building2 className="w-6 h-6 text-gray-600" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-medium text-gray-900 text-xl">{address.name}</h3>
                        {address.isDefault && (
                          <Badge className="bg-green-50 text-green-600 hover:bg-green-50 px-4 py-2 rounded-2xl text-sm border-0 font-light">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                            Principal
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-base font-light mb-1">{address.street}</p>
                      <p className="text-gray-400 text-sm font-light">{address.city}, {address.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-gray-50 rounded-2xl">
                      <Edit className="w-5 h-5 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-red-50 hover:text-red-500 rounded-2xl">
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA et actions rapides - Style modernisé */}
        <div className="space-y-8">
          {/* CTA principal */}
          <div className="bg-white/60 backdrop-blur-sm border-2 border-dashed border-gray-200/80 rounded-3xl p-20 text-center hover:border-gray-300/80 hover:bg-white/80 transition-all duration-500 group cursor-pointer">
            <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-110">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 text-xl mb-3">Ajouter une nouvelle adresse</h3>
            <p className="text-gray-500 text-base mb-10 max-w-md mx-auto font-light leading-relaxed">
              Domicile, bureau ou autre adresse pour vos livraisons et facturations
            </p>
            <Button variant="outline" className="rounded-2xl px-10 py-4 font-medium border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              Ajouter une adresse
            </Button>
          </div>

          {/* Actions rapides */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl transition-all duration-300 rounded-3xl group cursor-pointer hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-lg mb-2">Importer depuis Google</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">Synchroniser automatiquement vos adresses favorites</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl transition-all duration-300 rounded-3xl group cursor-pointer hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-purple-50 rounded-3xl flex items-center justify-center group-hover:bg-purple-100 transition-all duration-300 group-hover:scale-110">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-lg mb-2">Adresse professionnelle</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">Ajouter l'adresse de votre entreprise ou bureau</p>
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
