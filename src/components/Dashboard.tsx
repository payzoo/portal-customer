
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

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        
        {/* Header minimaliste */}
        <div className="mb-20">
          <h1 className="text-4xl font-extralight text-gray-900 mb-4 tracking-tight">
            Salut Housseine
          </h1>
          <p className="text-lg text-gray-500 font-light">
            Votre aperçu financier
          </p>
        </div>

        {/* Balance Card principale épurée */}
        <Card className="mb-16 border border-gray-100 shadow-sm bg-white">
          <CardContent className="p-12">
            <div className="flex items-center justify-between mb-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm text-gray-600 font-medium">Solde disponible</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-6xl font-extralight text-gray-900 tracking-tight">
                    {isBalanceVisible ? `${balance}€` : "••••"}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                    className="text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full p-3"
                  >
                    {isBalanceVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="payzoo-gradient text-black rounded-full px-8 h-14 font-medium hover:shadow-lg transition-all duration-200">
                  <Send className="w-5 h-5 mr-3" />
                  Transfert
                </Button>
                <Button variant="outline" className="bg-white border-gray-200 text-gray-700 rounded-full px-8 h-14 font-medium hover:bg-gray-50 transition-all duration-200">
                  <Plus className="w-5 h-5 mr-3" />
                  Ajouter
                </Button>
              </div>
            </div>
            
            {/* Stats minimalistes */}
            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-gray-100">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-light text-gray-900">
                        {stat.value}{stat.currency}
                      </span>
                      <span className="text-sm text-green-600 font-medium">
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-12 gap-8">
          
          {/* Activité récente épurée */}
          <div className="col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light text-gray-900">Activité récente</h2>
              <Button variant="ghost" className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                Tout voir
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="space-y-1">
              {recentActivity.map((item, index) => (
                <div key={index} className="p-6 bg-white hover:bg-gray-50/50 rounded-2xl border border-gray-100 transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}>
                        <span className="text-sm font-medium text-white">{item.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.time}</p>
                      </div>
                    </div>
                    <span className="font-medium text-gray-900">-{item.amount}€</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar épurée */}
          <div className="col-span-4 space-y-8">
            
            {/* Insights minimalistes */}
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-6">Aperçus</h3>
              <div className="space-y-4">
                <Card className="border border-gray-100 bg-blue-50/30 hover:bg-blue-50/50 transition-colors duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Gestion intelligente</h4>
                        <p className="text-sm text-gray-600">Vos dépenses ont diminué de 12% ce mois</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-100 bg-green-50/30 hover:bg-green-50/50 transition-colors duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Cashback disponible</h4>
                        <p className="text-sm text-gray-600">47€ de cashback à récupérer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Actions rapides minimalistes */}
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-6">Actions rapides</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start h-auto p-4 border-gray-200 hover:bg-gray-50 text-left">
                  <Wallet className="w-5 h-5 mr-4 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Ajouter paiement</div>
                    <div className="text-sm text-gray-500">Nouvelle méthode</div>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start h-auto p-4 border-gray-200 hover:bg-gray-50 text-left">
                  <CreditCard className="w-5 h-5 mr-4 text-purple-600" />
                  <div>
                    <div className="font-medium text-gray-900">Gérer les cartes</div>
                    <div className="text-sm text-gray-500">3 cartes actives</div>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start h-auto p-4 border-gray-200 hover:bg-gray-50 text-left">
                  <History className="w-5 h-5 mr-4 text-orange-600" />
                  <div>
                    <div className="font-medium text-gray-900">Historique</div>
                    <div className="text-sm text-gray-500">Toutes transactions</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* KYC Card startup */}
            <Card className="border-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Vérification KYC</span>
                  </div>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    Augmentez vos limites de 1K€ à 15K€/mois en quelques minutes
                  </p>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-xl px-6 py-2 font-medium text-sm">
                    Commencer maintenant
                    <ArrowUpRight className="w-4 h-4 ml-2" />
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
