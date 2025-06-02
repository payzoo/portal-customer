
import { TrendingUp, Send, Wallet, CreditCard, History, Shield, ArrowUpRight, Plus, Eye, EyeOff, Users, PiggyBank } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Dashboard() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  
  const balance = "2,847.50";
  const stats = [
    { title: "Transactions", value: "23", change: "+15%", isPositive: true, icon: TrendingUp },
    { title: "Économisé", value: "134", currency: "€", change: "+8.1%", isPositive: true, icon: PiggyBank },
  ];

  const recentActivity = [
    { name: "Marie D.", amount: "50.00", time: "1h", type: "transfer", avatar: "MD", color: "bg-blue-500" },
    { name: "Netflix", amount: "15.99", time: "2j", type: "subscription", avatar: "N", color: "bg-red-500" },
    { name: "Jean P.", amount: "25.00", time: "3j", type: "transfer", avatar: "JP", color: "bg-green-500" },
    { name: "Spotify", amount: "9.99", time: "5j", type: "subscription", avatar: "S", color: "bg-emerald-500" },
  ];

  const quickActions = [
    {
      title: "Transfert",
      icon: Send,
      color: "payzoo-gradient",
      textColor: "text-black",
      description: "Envoyer de l'argent"
    },
    {
      title: "Ajouter",
      icon: Plus,
      color: "bg-white/80 backdrop-blur-sm border border-gray-200/50",
      textColor: "text-gray-700",
      description: "Nouvelle carte"
    }
  ];

  const insights = [
    {
      title: "Gestion intelligente",
      description: "Vos dépenses ont diminué de 12% ce mois",
      icon: Wallet,
      color: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Cashback disponible",
      description: "47€ de cashback à récupérer",
      icon: Users,
      color: "from-green-50 to-emerald-50",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header épuré */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-3">
                Salut Housseine ✨
              </h1>
              <p className="text-gray-500 text-lg">
                Votre tableau de bord financier
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Dernière connexion</p>
                <p className="text-sm font-medium text-gray-900">Aujourd'hui, 14:30</p>
              </div>
            </div>
          </div>
        </div>

        {/* Balance Card principale */}
        <Card className="mb-12 border-0 shadow-lg bg-gradient-to-br from-white via-white to-gray-50/30 backdrop-blur-sm">
          <CardContent className="p-10">
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium text-gray-600">Solde disponible</p>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-extralight text-gray-900 tracking-tight">
                    {isBalanceVisible ? `${balance}€` : "••••"}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                    className="text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-full"
                  >
                    {isBalanceVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-3">
                {quickActions.map((action, index) => (
                  <div key={index} className="group">
                    <Button
                      className={`${action.color} ${action.textColor} rounded-2xl px-8 h-14 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <action.icon className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <div className="font-semibold">{action.title}</div>
                        <div className="text-xs opacity-80">{action.description}</div>
                      </div>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats redesignées */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100/80">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-payzoo-green-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <stat.icon className="w-6 h-6 text-payzoo-green-600" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-light text-gray-900">
                          {stat.value}{stat.currency}
                        </span>
                        <span className="text-sm text-payzoo-green-600 font-semibold bg-payzoo-green-50 px-2 py-1 rounded-full">
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Activité récente modernisée */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold text-gray-900">Activité récente</h2>
              <Button variant="ghost" size="sm" className="text-payzoo-green-600 hover:text-payzoo-green-700 hover:bg-payzoo-green-50 rounded-full">
                Tout voir
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-2">
              {recentActivity.map((item, index) => (
                <div key={index} className="group p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/50 hover:border-gray-200/80 hover:bg-white/90 transition-all duration-200 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <span className="text-sm font-bold text-white">{item.avatar}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">-{item.amount}€</span>
                      <div className="w-2 h-2 bg-red-400 rounded-full ml-auto mt-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar modernisée */}
          <div className="space-y-6">
            
            {/* Insights cards */}
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <Card key={index} className={`border-0 bg-gradient-to-br ${insight.color} hover:shadow-lg transition-all duration-200 hover:scale-[1.02]`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm`}>
                        <insight.icon className={`w-6 h-6 ${insight.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{insight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Actions rapides */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Actions rapides</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 border border-gray-200/50 h-14 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
                  <Wallet className="w-5 h-5 mr-4 text-blue-600" />
                  <div className="text-left">
                    <div className="font-semibold">Ajouter paiement</div>
                    <div className="text-xs text-gray-500">Nouvelle méthode</div>
                  </div>
                </Button>
                <Button className="w-full justify-start bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 border border-gray-200/50 h-14 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
                  <CreditCard className="w-5 h-5 mr-4 text-purple-600" />
                  <div className="text-left">
                    <div className="font-semibold">Gérer les cartes</div>
                    <div className="text-xs text-gray-500">3 cartes actives</div>
                  </div>
                </Button>
                <Button className="w-full justify-start bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 border border-gray-200/50 h-14 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
                  <History className="w-5 h-5 mr-4 text-orange-600" />
                  <div className="text-left">
                    <div className="font-semibold">Historique</div>
                    <div className="text-xs text-gray-500">Toutes transactions</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* KYC Card modernisée */}
            <Card className="border-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white overflow-hidden relative group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -ml-10 -mb-10"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-lg">Vérification KYC</span>
                  </div>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Augmentez vos limites de <strong>1K€</strong> à <strong>15K€/mois</strong> en quelques minutes
                  </p>
                  <Button className="bg-white text-indigo-600 hover:bg-gray-50 rounded-2xl px-6 py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-200 group">
                    Commencer maintenant
                    <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
