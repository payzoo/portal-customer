
import { Building2, CreditCard, MapPin, Bell, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  const recentTransactions = [
    { id: 1, name: "StackBlitz Inc", amount: "50.00 $US", type: "subscription", date: "Aujourd'hui", status: "success" },
    { id: 2, name: "OpenAI LLC", amount: "20.00 $US", type: "subscription", date: "Hier", status: "success" },
    { id: 3, name: "GAIFM", amount: "1793.967 CFA", type: "payment", date: "Il y a 2 jours", status: "pending" },
    { id: 4, name: "OpenAI LLC", amount: "20.00 $US", type: "subscription", date: "Il y a 3 jours", status: "success" },
  ];

  const stats = [
    { title: "Solde total", value: "2,847.32", currency: "$", icon: DollarSign, change: "+12.3%", trend: "up" },
    { title: "Transactions", value: "47", subtitle: "ce mois", icon: TrendingUp, change: "+8.1%", trend: "up" },
    { title: "Abonnements", value: "12", subtitle: "actifs", icon: Building2, change: "+2", trend: "up" },
    { title: "Cartes liées", value: "3", subtitle: "vérifiées", icon: CreditCard, change: "0", trend: "neutral" },
  ];

  return (
    <div className="p-8 bg-gray-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de bord</h1>
            <p className="text-gray-600 text-lg">Bienvenue sur votre espace PayZoo</p>
          </div>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200">
            Nouvelle transaction
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <stat.icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    stat.trend === 'up' ? 'bg-green-50 text-green-700' : 
                    stat.trend === 'down' ? 'bg-red-50 text-red-700' : 
                    'bg-gray-50 text-gray-700'
                  }`}>
                    {stat.trend === 'up' && <ArrowUpRight className="h-3 w-3" />}
                    {stat.trend === 'down' && <ArrowDownRight className="h-3 w-3" />}
                    {stat.change}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                    {stat.currency && <span className="text-lg font-semibold text-gray-700">{stat.currency}</span>}
                  </div>
                  {stat.subtitle && <p className="text-xs text-gray-500">{stat.subtitle}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Transactions */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">Transactions récentes</CardTitle>
                <p className="text-gray-500 mt-1">Vos dernières activités financières</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-lg">
                Voir tout
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center">
                      {transaction.type === 'subscription' ? (
                        <Building2 className="h-6 w-6 text-green-600" />
                      ) : (
                        <CreditCard className="h-6 w-6 text-green-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{transaction.name}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <div>
                      <p className="font-semibold text-gray-900">{transaction.amount}</p>
                      <p className="text-sm text-gray-500 capitalize">{transaction.type}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      transaction.status === 'success' ? 'bg-green-500' : 
                      transaction.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
