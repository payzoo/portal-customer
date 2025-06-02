
import { 
  Wallet, 
  TrendingUp, 
  Clock, 
  CreditCard, 
  Plus, 
  ArrowUpRight, 
  ArrowDownLeft,
  DollarSign,
  Users,
  Activity,
  MoreHorizontal,
  Eye,
  EyeOff
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function Dashboard() {
  const [balanceVisible, setBalanceVisible] = useState(true);

  const transactions = [
    {
      id: 1,
      type: "expense",
      merchant: "Netflix",
      amount: "15.99",
      currency: "€",
      date: "Aujourd'hui",
      category: "Divertissement",
      icon: "N",
      color: "bg-red-500"
    },
    {
      id: 2,
      type: "income",
      merchant: "Salaire",
      amount: "3,250.00",
      currency: "€",
      date: "Hier",
      category: "Revenus",
      icon: "S",
      color: "bg-green-500"
    },
    {
      id: 3,
      type: "expense",
      merchant: "Amazon",
      amount: "89.99",
      currency: "€",
      date: "2 juin",
      category: "Shopping",
      icon: "A",
      color: "bg-orange-500"
    }
  ];

  const stats = [
    { label: "Solde total", value: "4,847.32", currency: "€", change: "+12.5%", trend: "up" },
    { label: "Revenus", value: "3,250.00", currency: "€", change: "+8.2%", trend: "up" },
    { label: "Dépenses", value: "1,428.68", currency: "€", change: "-3.1%", trend: "down" }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">Dashboard</h1>
              <p className="text-gray-500 text-sm">Vue d'ensemble de votre activité financière</p>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg">
              <Plus className="w-4 h-4 mr-2" />
              Transaction
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          
          {/* Balance Card */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Solde principal</h3>
                    <p className="text-sm text-gray-500">Compte courant</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="rounded-lg"
                >
                  {balanceVisible ? (
                    <EyeOff className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-500" />
                  )}
                </Button>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl font-semibold text-gray-900 mb-2">
                  {balanceVisible ? "4,847.32 €" : "••••••"}
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">+12.5%</span>
                  <span className="text-sm text-gray-500">par rapport au mois dernier</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50/50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {balanceVisible ? `${stat.value} ${stat.currency}` : "••••"}
                    </div>
                    <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                    <div className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Transactions</p>
                    <p className="text-xs text-gray-500">Ce mois</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">24</div>
                <div className="text-xs text-green-600">+15% vs mois dernier</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Abonnements</p>
                    <p className="text-xs text-gray-500">Actifs</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">3</div>
                <div className="text-xs text-blue-600">Tous à jour</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Cartes</p>
                    <p className="text-xs text-gray-500">Actives</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">2</div>
                <div className="text-xs text-gray-600">Principal + Virtuelle</div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Transactions récentes</h3>
                <Button variant="outline" size="sm" className="rounded-lg text-xs">
                  Voir tout
                </Button>
              </div>
              
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${transaction.color} rounded-lg flex items-center justify-center`}>
                        <span className="text-white font-medium text-sm">{transaction.icon}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{transaction.merchant}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-gray-500">{transaction.category}</p>
                          <span className="text-xs text-gray-300">•</span>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className={`font-semibold text-sm ${
                          transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {transaction.type === 'expense' ? '-' : '+'}
                          {transaction.amount} {transaction.currency}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Actions rapides</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button variant="outline" className="h-auto justify-start text-left p-4 rounded-lg">
                  <div className="flex flex-col items-center text-center w-full">
                    <Plus className="w-5 h-5 text-gray-600 mb-2" />
                    <span className="text-xs text-gray-700">Virement</span>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto justify-start text-left p-4 rounded-lg">
                  <div className="flex flex-col items-center text-center w-full">
                    <CreditCard className="w-5 h-5 text-gray-600 mb-2" />
                    <span className="text-xs text-gray-700">Paiement</span>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto justify-start text-left p-4 rounded-lg">
                  <div className="flex flex-col items-center text-center w-full">
                    <TrendingUp className="w-5 h-5 text-gray-600 mb-2" />
                    <span className="text-xs text-gray-700">Épargne</span>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto justify-start text-left p-4 rounded-lg">
                  <div className="flex flex-col items-center text-center w-full">
                    <Activity className="w-5 h-5 text-gray-600 mb-2" />
                    <span className="text-xs text-gray-700">Analyse</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
