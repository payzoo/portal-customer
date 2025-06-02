
import { Building2, MoreHorizontal, Plus, Clock, CheckCircle2, Pause, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Subscriptions() {
  const subscriptions = [
    {
      id: 1,
      name: "StackBlitz Inc",
      plan: "Pro",
      amount: "50.00",
      currency: "$US",
      status: "active",
      nextBilling: "15 Juin 2025",
      logo: "S",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "OpenAI LLC",
      plan: "Plus",
      amount: "20.00",
      currency: "$US",
      status: "active",
      nextBilling: "22 Juin 2025",
      logo: "O",
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "GAIFM",
      plan: "Premium",
      amount: "1793.967",
      currency: "CFA",
      status: "paused",
      nextBilling: "28 Juin 2025",
      logo: "G",
      color: "bg-purple-500"
    },
  ];

  const stats = [
    { title: "Total mensuel", value: "2,163.97", currency: "$", subtitle: "3 abonnements actifs", icon: Building2 },
    { title: "Économies", value: "47.50", currency: "$", subtitle: "↓ 12% vs mois dernier", icon: CheckCircle2 },
    { title: "Prochaine facture", value: "15 Juin", subtitle: "StackBlitz Inc - 50.00 $", icon: Calendar },
  ];

  return (
    <div className="p-8 space-y-8 bg-gray-50/30 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Abonnements</h1>
          <p className="text-gray-600 text-lg">Gérez vos services et abonnements</p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200">
          <Plus className="w-5 h-5 mr-2" />
          Nouvel abonnement
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <stat.icon className="h-6 w-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                    {stat.currency && <span className="text-lg font-semibold text-gray-700">{stat.currency}</span>}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">{stat.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Subscriptions List */}
      <div className="space-y-4">
        {subscriptions.map((subscription) => (
          <Card key={subscription.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${subscription.color} rounded-xl flex items-center justify-center shadow-sm`}>
                    <span className="font-bold text-white text-lg">{subscription.logo}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{subscription.name}</h3>
                    <p className="text-gray-500">{subscription.plan}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-gray-900">{subscription.amount}</span>
                      <span className="text-sm text-gray-600">{subscription.currency}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      Prochain: {subscription.nextBilling}
                    </div>
                  </div>
                  
                  <Badge 
                    variant={subscription.status === 'active' ? 'default' : 'secondary'}
                    className={`px-3 py-1 rounded-full font-medium ${
                      subscription.status === 'active' 
                        ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                        : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                    }`}
                  >
                    {subscription.status === 'active' ? (
                      <><CheckCircle2 className="w-3 h-3 mr-1" />Actif</>
                    ) : (
                      <><Pause className="w-3 h-3 mr-1" />En pause</>
                    )}
                  </Badge>
                  
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Subscription CTA */}
      <Card className="border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors bg-white">
        <CardContent className="p-8">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-lg">Ajouter un nouvel abonnement</h3>
              <p className="text-gray-500">Connectez un nouveau service à votre compte PayZoo</p>
            </div>
            <Button variant="outline" className="px-6 py-2 rounded-lg">
              Ajouter un abonnement
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
