
import { Building2, CreditCard, MapPin, Bell, TrendingUp, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  const recentTransactions = [
    { id: 1, name: "StackBiltz Inc", amount: "50.00 $US", type: "subscription", date: "Aujourd'hui" },
    { id: 2, name: "OpenAI LLC", amount: "20.00 $US", type: "subscription", date: "Hier" },
    { id: 3, name: "GAIFM", amount: "1793.967 CFA", type: "payment", date: "Il y a 2 jours" },
    { id: 4, name: "OpenAI LLC", amount: "20.00 $US", type: "subscription", date: "Il y a 3 jours" },
  ];

  const stats = [
    { title: "Solde total", value: "2,847.32 $", icon: DollarSign, change: "+12.3%" },
    { title: "Transactions ce mois", value: "47", icon: TrendingUp, change: "+8.1%" },
    { title: "Abonnements actifs", value: "12", icon: Building2, change: "+2" },
    { title: "Cartes liées", value: "3", icon: CreditCard, change: "0" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <Button className="bg-green-500 hover:bg-green-600">
          Nouvelle transaction
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Transactions récentes</CardTitle>
            <Button variant="outline" size="sm">Voir tout</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    {transaction.type === 'subscription' ? (
                      <Building2 className="h-5 w-5 text-gray-600" />
                    ) : (
                      <CreditCard className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{transaction.amount}</p>
                  <p className="text-sm text-gray-500 capitalize">{transaction.type}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
