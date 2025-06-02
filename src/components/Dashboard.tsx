
import { Building2, CreditCard, MapPin, Bell, TrendingUp, DollarSign, ArrowUpRight, Plus, Zap, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Dashboard() {
  const recentTransactions = [
    { id: 1, name: "StackBlitz Inc", amount: "50.00", currency: "$US", type: "subscription", date: "Maintenant", status: "success" },
    { id: 2, name: "OpenAI LLC", amount: "20.00", currency: "$US", type: "subscription", date: "2h", status: "success" },
    { id: 3, name: "GAIFM", amount: "1793.967", currency: "CFA", type: "payment", date: "1j", status: "pending" },
  ];

  const stats = [
    { title: "Solde total", value: "2,847", currency: "$", icon: DollarSign, change: "+12.3%", gradient: "from-emerald-500 to-teal-600" },
    { title: "Transactions", value: "47", icon: TrendingUp, change: "+8.1%", gradient: "from-blue-500 to-indigo-600" },
    { title: "Croissance", value: "23%", icon: Target, change: "+15%", gradient: "from-purple-500 to-pink-600" },
    { title: "Utilisateurs", value: "1.2k", icon: Users, change: "+5.2%", gradient: "from-orange-500 to-red-600" },
  ];

  const quickActions = [
    { 
      title: "Nouvelle transaction", 
      subtitle: "Paiement rapide", 
      icon: Zap, 
      gradient: "from-green-400 to-emerald-500",
      hover: "hover:from-green-500 hover:to-emerald-600"
    },
    { 
      title: "Ajouter une carte", 
      subtitle: "Nouveau moyen", 
      icon: CreditCard, 
      gradient: "from-blue-400 to-indigo-500",
      hover: "hover:from-blue-500 hover:to-indigo-600"
    },
    { 
      title: "Gérer adresses", 
      subtitle: "Livraison & facturation", 
      icon: MapPin, 
      gradient: "from-purple-400 to-pink-500",
      hover: "hover:from-purple-500 hover:to-pink-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-black p-8 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1">
                  ✨ Nouveau
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1">
                  Pro
                </Badge>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Bonjour Housseine 👋
              </h1>
              <p className="text-xl text-gray-300 font-medium">
                Votre écosystème financier évolue
              </p>
            </div>
            <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105">
              <Plus className="w-5 h-5 mr-2" />
              Action rapide
            </Button>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="group border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg`}>
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {stat.change}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                      {stat.currency && <span className="text-sm text-gray-600 font-medium">{stat.currency}</span>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Activity */}
          <Card className="lg:col-span-2 border-0 bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Activité récente</h3>
                  <p className="text-gray-500 text-sm">Flux temps réel</p>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 rounded-xl">
                  Tout voir
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="group flex items-center justify-between p-4 rounded-xl hover:bg-gray-50/80 transition-all duration-200">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-200">
                          {transaction.type === 'subscription' ? (
                            <Building2 className="h-5 w-5 text-gray-600" />
                          ) : (
                            <CreditCard className="h-5 w-5 text-gray-600" />
                          )}
                        </div>
                        <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
                          transaction.status === 'success' ? 'bg-green-400' : 
                          transaction.status === 'pending' ? 'bg-yellow-400' : 'bg-red-400'
                        } border-2 border-white`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{transaction.name}</p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{transaction.amount} {transaction.currency}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {transaction.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Actions rapides</h3>
                <p className="text-gray-500 text-sm">Gagnez en efficacité</p>
              </div>
              
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`w-full p-4 rounded-xl bg-gradient-to-r ${action.gradient} ${action.hover} text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-200">
                        <action.icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">{action.title}</p>
                        <p className="text-sm opacity-90">{action.subtitle}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Mini CTA */}
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Notifications</p>
                    <p className="text-xs text-gray-500">3 nouveaux messages</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <Card className="border-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold">Prêt à passer au niveau supérieur ?</h3>
              <p className="text-green-100 text-lg">Débloquez toutes les fonctionnalités avec PayZoo Pro</p>
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
                Découvrir Pro
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
