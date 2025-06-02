
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
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">Abonnements</h1>
              <p className="text-gray-500 text-sm">Gérez vos services en toute simplicité</p>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg">
              <Plus className="w-4 h-4 mr-2" />
              Nouveau
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Total mensuel</p>
                    <p className="text-xs text-gray-500">Dépenses récurrentes</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">{totalMonthly.toFixed(2)}€</div>
                <div className="text-xs text-green-600">+5% vs mois dernier</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Prochain paiement</p>
                    <p className="text-xs text-gray-500">Date la plus proche</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">15 Juin</div>
                <div className="text-xs text-blue-600">StackBlitz Pro</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Services actifs</p>
                    <p className="text-xs text-gray-500">Abonnements en cours</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">3</div>
                <div className="text-xs text-purple-600">2 actifs, 1 en pause</div>
              </CardContent>
            </Card>
          </div>

          {/* Subscriptions List */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Mes abonnements</h3>
              
              <div className="space-y-4">
                {subscriptions.map((subscription) => (
                  <div key={subscription.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${subscription.color} rounded-lg flex items-center justify-center`}>
                        <span className="font-medium text-white text-lg">{subscription.logo}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm mb-1">{subscription.name}</h3>
                        <p className="text-xs text-gray-500">{subscription.plan}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="font-semibold text-gray-900 text-sm mb-1">
                          {subscription.amount} {subscription.currency}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {subscription.nextBilling}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant="secondary"
                          className={`text-xs ${
                            subscription.status === 'active' 
                              ? 'bg-green-50 text-green-600 border-green-200' 
                              : 'bg-yellow-50 text-yellow-600 border-yellow-200'
                          }`}
                        >
                          {subscription.status === 'active' ? 'Actif' : 'Pause'}
                        </Badge>
                        
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Add New Subscription */}
          <Card className="border-2 border-dashed border-gray-200 bg-white/60 backdrop-blur-sm hover:border-gray-300 hover:bg-white/80 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Plus className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-2">Ajouter un service</h3>
              <p className="text-gray-500 text-xs mb-6 max-w-sm mx-auto">
                Connectez facilement un nouvel abonnement pour centraliser votre gestion
              </p>
              <Button variant="outline" className="rounded-lg text-xs">
                Connecter un abonnement
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2 border border-gray-100">
              <Button variant="ghost" className="rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50 text-xs">
                <CreditCard className="w-4 h-4 mr-2" />
                Paiements
              </Button>
              <div className="w-px h-6 bg-gray-200"></div>
              <Button variant="ghost" className="rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50 text-xs">
                <Calendar className="w-4 h-4 mr-2" />
                Planning
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
