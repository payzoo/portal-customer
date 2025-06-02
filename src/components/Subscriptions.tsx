
import { Building2, Plus, Clock, CheckCircle2, Pause, Calendar, MoreVertical, TrendingUp, CreditCard } from "lucide-react";
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
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header - Ultra minimal */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">
                Abonnements
              </h1>
              <p className="text-gray-500 text-lg font-light">
                Gérez vos services actifs
              </p>
            </div>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 font-medium transition-all duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </div>

        {/* Stats - Clean overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group">
            <div className="text-3xl font-light text-gray-900 mb-1">
              {totalMonthly.toFixed(2)}<span className="text-lg text-gray-400">€/mois</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">Total mensuel</div>
            <div className="text-xs text-green-600 font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              3 actifs
            </div>
          </div>

          <div className="group">
            <div className="text-3xl font-light text-gray-900 mb-1">
              15<span className="text-lg text-gray-400"> Juin</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">Prochain paiement</div>
            <div className="text-xs text-blue-600 font-medium">
              StackBlitz Pro
            </div>
          </div>

          <div className="group">
            <div className="text-3xl font-light text-gray-900 mb-1">
              3<span className="text-lg text-gray-400"> services</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">Abonnements</div>
            <div className="text-xs text-gray-600 font-medium">
              2 actifs, 1 en pause
            </div>
          </div>
        </div>

        {/* Subscriptions - Minimal cards */}
        <div className="space-y-4 mb-16">
          {subscriptions.map((subscription) => (
            <Card key={subscription.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${subscription.color} rounded-xl flex items-center justify-center shadow-sm`}>
                      <span className="font-semibold text-white text-lg">{subscription.logo}</span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-gray-900">{subscription.name}</h3>
                      <p className="text-sm text-gray-500">{subscription.plan}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 text-lg">
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
                        className={`px-3 py-1 rounded-full text-xs font-medium border-0 ${
                          subscription.status === 'active' 
                            ? 'bg-green-50 text-green-700' 
                            : 'bg-yellow-50 text-yellow-700'
                        }`}
                      >
                        {subscription.status === 'active' ? (
                          <>
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Actif
                          </>
                        ) : (
                          <>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                            Pause
                          </>
                        )}
                      </Badge>
                      
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg hover:bg-gray-50">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add new subscription - Minimal CTA */}
        <div className="border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center hover:border-gray-300 transition-colors">
          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <h3 className="font-medium text-gray-900 mb-2">Nouveau service</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Connectez un nouvel abonnement pour un suivi centralisé
          </p>
          <Button variant="outline" className="rounded-full px-6 py-2 font-medium border-gray-200 hover:bg-gray-50">
            Ajouter un abonnement
          </Button>
        </div>

        {/* Quick actions */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="rounded-full px-4 py-2 text-gray-600 hover:bg-gray-50">
              <CreditCard className="w-4 h-4 mr-2" />
              Méthodes de paiement
            </Button>
            <Button variant="ghost" className="rounded-full px-4 py-2 text-gray-600 hover:bg-gray-50">
              <Calendar className="w-4 h-4 mr-2" />
              Calendrier des paiements
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
