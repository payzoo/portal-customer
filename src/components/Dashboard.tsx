
import { TrendingUp, DollarSign, Target, Users, Plus, ArrowUpRight, Zap, Send, Wallet, CreditCard, History } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  const stats = [
    { title: "Solde wallet", value: "2,847", currency: "€", change: "+12.3%", isPositive: true },
    { title: "Transactions", value: "156", change: "+5.2%", isPositive: true },
    { title: "Ce mois", value: "23", change: "+15%", isPositive: true },
    { title: "Économisé", value: "134", currency: "€", change: "+8.1%", isPositive: true },
  ];

  const recentActivity = [
    { name: "Transfert → Marie D.", amount: "50.00", time: "1h", type: "transfer" },
    { name: "Abonnement Netflix", amount: "15.99", time: "2j", type: "subscription" },
    { name: "Transfert → Jean P.", amount: "25.00", time: "3j", type: "transfer" },
  ];

  const quickActions = [
    {
      title: "Nouveau transfert",
      description: "Vers un wallet PayZoo",
      icon: Send,
      color: "from-payzoo-green-400 to-payzoo-green-600",
      action: "transfer"
    },
    {
      title: "Ajouter paiement",
      description: "Nouvelle méthode",
      icon: Wallet,
      color: "from-blue-400 to-blue-600",
      action: "payment"
    },
    {
      title: "Gérer cartes",
      description: "Moyens de paiement",
      icon: CreditCard,
      color: "from-purple-400 to-purple-600",
      action: "cards"
    },
    {
      title: "Historique",
      description: "Toutes les transactions",
      icon: History,
      color: "from-orange-400 to-orange-600",
      action: "history"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">
                Salut Housseine ! 👋
              </h1>
              <p className="text-gray-500 text-lg font-light">
                Gérez vos paiements et transferts en toute simplicité
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="payzoo-gradient hover:opacity-90 text-black rounded-full px-6 py-2 font-medium transition-all duration-200 payzoo-glow">
                <Send className="w-4 h-4 mr-2" />
                Transfert
              </Button>
              <Button variant="outline" className="border-payzoo-green-200 text-payzoo-green-700 hover:bg-payzoo-green-50 rounded-full px-6 py-2 font-medium">
                <Plus className="w-4 h-4 mr-2" />
                Ajouter
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl font-light text-gray-900 mb-1">
                {stat.value}<span className="text-lg text-gray-400">{stat.currency}</span>
              </div>
              <div className="text-sm text-gray-500 mb-2">{stat.title}</div>
              <div className="text-xs text-payzoo-green-600 font-medium">
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-light text-gray-900">Activité récente</h2>
              <button className="text-sm text-payzoo-green-600 hover:text-payzoo-green-700 transition-colors font-medium">
                Tout voir
              </button>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-payzoo-green-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      item.type === 'transfer' ? 'bg-payzoo-green-100' :
                      item.type === 'subscription' ? 'bg-blue-100' : 'bg-purple-100'
                    }`}>
                      {item.type === 'transfer' && <Send className="w-5 h-5 text-payzoo-green-600" />}
                      {item.type === 'subscription' && <CreditCard className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">-{item.amount}€</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-light text-gray-900 mb-8">Actions PayZoo</h2>
            
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <button key={index} className="w-full p-6 bg-white hover:bg-gray-50 rounded-2xl transition-all duration-200 text-left group border border-gray-100 hover:border-payzoo-green-200">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">{action.title}</div>
                      <div className="text-sm text-gray-500">{action.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* PayZoo Pro Card */}
            <div className="mt-12 p-8 bg-black text-white rounded-3xl">
              <div className="mb-6">
                <div className="text-2xl font-light mb-2">PayZoo Pro 🚀</div>
                <div className="text-gray-300 text-sm font-light">
                  Débloquez les fonctionnalités premium pour les particuliers
                </div>
              </div>
              <Button className="payzoo-gradient text-black hover:opacity-90 rounded-full px-6 py-2 font-medium">
                Upgrade
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
