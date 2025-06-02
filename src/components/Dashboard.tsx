
import { Building2, CreditCard, MapPin, Bell, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  const recentTransactions = [
    { id: 1, name: "StackBlitz Inc", amount: "50.00 $US", type: "subscription", date: "Aujourd'hui", status: "success" },
    { id: 2, name: "OpenAI LLC", amount: "20.00 $US", type: "subscription", date: "Hier", status: "success" },
    { id: 3, name: "GAIFM", amount: "1793.967 CFA", type: "payment", date: "Il y a 2 jours", status: "pending" },
  ];

  const stats = [
    { title: "Solde", value: "2,847.32", currency: "$", icon: DollarSign, change: "+12.3%", trend: "up" },
    { title: "Transactions", value: "47", icon: TrendingUp, change: "+8.1%", trend: "up" },
    { title: "Abonnements", value: "12", icon: Building2, change: "+2", trend: "up" },
    { title: "Cartes", value: "3", icon: CreditCard, change: "0", trend: "neutral" },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Dashboard</h1>
            <p className="text-gray-500">Bienvenue sur PayZoo</p>
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Nouvelle transaction
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border border-gray-100 hover:border-gray-200 transition-colors bg-white">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className="h-5 w-5 text-gray-400" />
                  <div className={`text-xs font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 
                    'text-gray-500'
                  }`}>
                    {stat.change}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.title}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-semibold text-gray-900">{stat.value}</span>
                    {stat.currency && <span className="text-sm text-gray-600">{stat.currency}</span>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Transactions */}
        <Card className="border border-gray-100 bg-white">
          <CardHeader className="pb-4 border-b border-gray-50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">Activité récente</CardTitle>
                <p className="text-sm text-gray-500 mt-1">Vos dernières transactions</p>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                Voir tout
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                      {transaction.type === 'subscription' ? (
                        <Building2 className="h-4 w-4 text-gray-600" />
                      ) : (
                        <CreditCard className="h-4 w-4 text-gray-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{transaction.name}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <p className="font-medium text-gray-900 text-sm">{transaction.amount}</p>
                    <div className={`w-2 h-2 rounded-full ${
                      transaction.status === 'success' ? 'bg-green-400' : 
                      transaction.status === 'pending' ? 'bg-yellow-400' : 'bg-red-400'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border border-gray-100 hover:border-gray-200 transition-colors bg-white cursor-pointer">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Ajouter une carte</p>
                  <p className="text-xs text-gray-500">Nouveau moyen de paiement</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 hover:border-gray-200 transition-colors bg-white cursor-pointer">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <MapPin className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Nouvelle adresse</p>
                  <p className="text-xs text-gray-500">Facturation ou livraison</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 hover:border-gray-200 transition-colors bg-white cursor-pointer">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Bell className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Notifications</p>
                  <p className="text-xs text-gray-500">Gérer les alertes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
