
import { Building2, Plus, Clock, TrendingUp, CreditCard, Calendar, MoreVertical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Subscriptions() {
  const subscriptions = [
    {
      id: 1,
      name: "StackBlitz Inc",
      plan: "Pro",
      amount: "50.00",
      currency: "$",
      status: "active",
      nextBilling: "15 Juin 2025",
      logo: "S",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "OpenAI LLC",
      plan: "Plus",
      amount: "20.00",
      currency: "$",
      status: "active",
      nextBilling: "22 Juin 2025",
      logo: "O",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      id: 3,
      name: "GAIFM",
      plan: "Premium",
      amount: "1,793.97",
      currency: "€",
      status: "paused",
      nextBilling: "28 Juin 2025",
      logo: "G",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
  ];

  const totalMonthly = subscriptions
    .filter(sub => sub.status === 'active')
    .reduce((sum, sub) => sum + parseFloat(sub.amount.replace(',', '')), 0);

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header - Ultra minimal */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900 tracking-tight">
                Abonnements
              </h1>
              <p className="text-gray-500 text-base mt-2 font-light">
                Gérez vos services en toute simplicité
              </p>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-2xl px-8 py-3 font-medium shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Plus className="w-4 h-4 mr-2" />
              Nouveau
            </Button>
          </div>
        </div>

        {/* Stats - Elegant cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:border-gray-200/80 transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">
              {totalMonthly.toFixed(2)}€
            </div>
            <div className="text-sm text-gray-500 font-light">Total mensuel</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:border-gray-200/80 transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">
              15 Juin
            </div>
            <div className="text-sm text-gray-500 font-light">Prochain paiement</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:border-gray-200/80 transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Building2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">
              3
            </div>
            <div className="text-sm text-gray-500 font-light">Services actifs</div>
          </div>
        </div>

        {/* Subscriptions - Premium cards */}
        <div className="space-y-4 mb-16">
          {subscriptions.map((subscription) => (
            <Card key={subscription.id} className="border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 ${subscription.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <span className="font-medium text-white text-xl">{subscription.logo}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-xl mb-1">{subscription.name}</h3>
                      <p className="text-gray-500 font-light">{subscription.plan}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <div className="font-light text-gray-900 text-2xl">
                        {subscription.amount} {subscription.currency}
                      </div>
                      <div className="text-sm text-gray-400 flex items-center gap-2 justify-end mt-2">
                        <Clock className="w-3 h-3" />
                        {subscription.nextBilling}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <Badge 
                        variant="secondary"
                        className={`px-6 py-2.5 rounded-2xl text-sm font-light border-0 ${
                          subscription.status === 'active' 
                            ? 'bg-green-50 text-green-600' 
                            : 'bg-yellow-50 text-yellow-600'
                        }`}
                      >
                        {subscription.status === 'active' ? (
                          <>
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                            Actif
                          </>
                        ) : (
                          <>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                            Pause
                          </>
                        )}
                      </Badge>
                      
                      <Button variant="ghost" size="sm" className="w-12 h-12 p-0 rounded-2xl hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <MoreVertical className="w-5 h-5 text-gray-400" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add subscription - Minimalist CTA */}
        <div className="bg-white/60 backdrop-blur-sm border-2 border-dashed border-gray-200/80 rounded-3xl p-20 text-center hover:border-gray-300/80 hover:bg-white/80 transition-all duration-500 group cursor-pointer">
          <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-110">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="font-medium text-gray-900 text-xl mb-3">Ajouter un service</h3>
          <p className="text-gray-500 text-base mb-10 max-w-md mx-auto font-light leading-relaxed">
            Connectez facilement un nouvel abonnement pour centraliser votre gestion
          </p>
          <Button variant="outline" className="rounded-2xl px-10 py-4 font-medium border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300">
            Connecter un abonnement
          </Button>
        </div>

        {/* Quick actions - Subtle footer */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-100/50">
            <Button variant="ghost" className="rounded-xl px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm font-light transition-all duration-200">
              <CreditCard className="w-4 h-4 mr-2" />
              Paiements
            </Button>
            <div className="w-px h-6 bg-gray-200"></div>
            <Button variant="ghost" className="rounded-xl px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm font-light transition-all duration-200">
              <Calendar className="w-4 h-4 mr-2" />
              Planning
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
