
import { MapPin, Plus, Home, Building2, Edit, Trash2, User, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  const stats = [
    { label: "Total", value: addresses.length, icon: MapPin, color: "blue" },
    { label: "Principale", value: addresses.filter(a => a.isDefault).length, icon: Home, color: "green" },
    { label: "Bureau", value: addresses.filter(a => a.type === "office").length, icon: Building2, color: "purple" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Header avec animation d'entrée */}
        <div className="mb-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Mes adresses
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Gérez facilement vos adresses de livraison et de facturation avec style
          </p>
        </div>

        {/* Stats avec animations décalées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: "from-blue-500 to-blue-600 bg-blue-50",
              green: "from-emerald-500 to-emerald-600 bg-emerald-50",
              purple: "from-purple-500 to-purple-600 bg-purple-50"
            };
            
            return (
              <Card 
                key={stat.label}
                className="border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 rounded-3xl ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[1]} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[0]} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Liste des adresses avec animations fluides */}
        <div className="space-y-6 mb-16">
          {addresses.map((address, index) => (
            <Card 
              key={address.id} 
              className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={() => setHoveredCard(address.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-0">
                <div className="flex items-center">
                  {/* Indicateur coloré animé */}
                  <div className={`w-1 h-full bg-gradient-to-b transition-all duration-500 ${
                    address.isDefault 
                      ? 'from-emerald-400 to-emerald-600' 
                      : 'from-blue-400 to-blue-600'
                  } ${hoveredCard === address.id ? 'w-2' : 'w-1'}`} />
                  
                  <div className="flex-1 p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-6 flex-1">
                        {/* Icône avec animation */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          address.type === 'home' 
                            ? 'bg-gradient-to-br from-emerald-100 to-emerald-50' 
                            : 'bg-gradient-to-br from-blue-100 to-blue-50'
                        } ${hoveredCard === address.id ? 'scale-110 shadow-lg' : ''}`}>
                          {address.type === 'home' ? (
                            <Home className={`w-7 h-7 transition-colors duration-300 ${
                              address.type === 'home' ? 'text-emerald-600' : 'text-blue-600'
                            }`} />
                          ) : (
                            <Building2 className="w-7 h-7 text-blue-600" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          {/* En-tête avec badge */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-3">
                              <User className="w-5 h-5 text-gray-400" />
                              <h3 className="font-bold text-xl text-gray-900 group-hover:text-gray-800 transition-colors">
                                {address.name}
                              </h3>
                            </div>
                            {address.isDefault && (
                              <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 px-3 py-1 text-xs border-0 rounded-full shadow-lg animate-pulse-green">
                                ✨ Principal
                              </Badge>
                            )}
                          </div>
                          
                          {/* Adresse avec typographie améliorée */}
                          <div className="space-y-2">
                            <p className="text-gray-800 font-medium text-lg leading-relaxed">
                              {address.street}
                            </p>
                            <p className="text-gray-600 text-base">
                              {address.city}, {address.country}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions avec animations fluides */}
                      <div className={`flex items-center gap-2 transition-all duration-300 ${
                        hoveredCard === address.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-12 h-12 p-0 rounded-xl hover:bg-blue-50 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                        >
                          <Edit className="w-5 h-5" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-12 h-12 p-0 rounded-xl hover:bg-red-50 hover:text-red-600 hover:scale-110 transition-all duration-300"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                        <ChevronRight className={`w-6 h-6 text-gray-400 transition-all duration-300 ${
                          hoveredCard === address.id ? 'translate-x-1 text-gray-600' : ''
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA avec design amélioré */}
        <div className="max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Card className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50/50 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white transition-all duration-500 group cursor-pointer overflow-hidden relative">
            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <CardContent className="p-12 text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Plus className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                Nouvelle adresse
              </h3>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                Ajoutez une nouvelle adresse de livraison ou de facturation en quelques clics
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Plus className="w-5 h-5 mr-3" />
                Ajouter une adresse
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
