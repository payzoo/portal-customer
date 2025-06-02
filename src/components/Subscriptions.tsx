
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Header - Ultra clean */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                Abonnements
              </h1>
              <p className="text-gray-600 text-sm">
                Gérez vos services actifs
              </p>
            </div>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-xl px-6 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </div>

        {/* Stats - Minimal overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-lg">
                3 actifs
              </div>
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">
              {totalMonthly.toFixed(2)}€
            </div>
            <div className="text-sm text-gray-500">Total mensuel</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-xs text-blue-600 font-medium">StackBlitz</div>
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">
              15 Juin
            </div>
            <div className="text-sm text-gray-500">Prochain paiement</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-xs text-gray-600 font-medium">2 actifs, 1 pause</div>
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">
              3
            </div>
            <div className="text-sm text-gray-500">Services</div>
          </div>
        </div>

        {/* Subscriptions - Clean cards */}
        <div className="space-y-3 mb-12">
          {subscriptions.map((subscription) => (
            <Card key={subscription.id} className="border-0 bg-white hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${subscription.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                      <span className="font-semibold text-white text-lg">{subscription.logo}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{subscription.name}</h3>
                      <p className="text-sm text-gray-500">{subscription.plan}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 text-xl">
                        {subscription.amount} {subscription.currency}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center gap-1 justify-end mt-1">
                        <Clock className="w-3 h-3" />
                        {subscription.nextBilling}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant="secondary"
                        className={`px-4 py-2 rounded-xl text-xs font-medium border-0 ${
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
                      
                      <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-xl hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add new subscription - Elegant CTA */}
        <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-16 text-center hover:border-gray-300 hover:bg-gray-50/50 transition-all group cursor-pointer">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors">
            <Plus className="w-6 h-6 text-gray-500" />
          </div>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">Nouveau service</h3>
          <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
            Connectez un nouvel abonnement pour un suivi centralisé
          </p>
          <Button variant="outline" className="rounded-xl px-8 py-3 font-medium border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all">
            Ajouter un abonnement
          </Button>
        </div>

        {/* Quick actions - Minimal footer */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="rounded-xl px-5 py-2.5 text-gray-600 hover:bg-white hover:text-gray-900 text-sm font-medium transition-all">
              <CreditCard className="w-4 h-4 mr-2" />
              Moyens de paiement
            </Button>
            <div className="w-px h-4 bg-gray-300"></div>
            <Button variant="ghost" className="rounded-xl px-5 py-2.5 text-gray-600 hover:bg-white hover:text-gray-900 text-sm font-medium transition-all">
              <Calendar className="w-4 h-4 mr-2" />
              Calendrier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
