
import { TrendingUp, Send, Wallet, CreditCard, History, Shield, ArrowUpRight, Plus, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Dashboard() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  
  const balance = "2,847.50";
  const stats = [
    { title: "Transactions ce mois", value: "23", change: "+15%", isPositive: true },
    { title: "Économisé", value: "134", currency: "€", change: "+8.1%", isPositive: true },
  ];

  const recentActivity = [
    { name: "Marie D.", amount: "50.00", time: "1h", type: "transfer", avatar: "MD" },
    { name: "Netflix", amount: "15.99", time: "2j", type: "subscription", avatar: "N" },
    { name: "Jean P.", amount: "25.00", time: "3j", type: "transfer", avatar: "JP" },
  ];

  const quickActions = [
    {
      title: "Transfert",
      icon: Send,
      color: "payzoo-gradient",
      textColor: "text-black"
    },
    {
      title: "Ajouter",
      icon: Plus,
      color: "bg-white border border-gray-200",
      textColor: "text-gray-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Header minimaliste */}
        <div className="mb-12">
          <h1 className="text-2xl font-light text-gray-900 mb-2">
            Salut Housseine 👋
          </h1>
          <p className="text-gray-500">
            Gérez vos paiements en toute simplicité
          </p>
        </div>

        {/* Balance Card - Focus principal */}
        <Card className="mb-8 border-0 shadow-sm bg-gradient-to-br from-white to-gray-50/50">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Solde disponible</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-light text-gray-900">
                    {isBalanceVisible ? `${balance}€` : "••••"}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {isBalanceVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              <div className="flex gap-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    className={`${action.color} ${action.textColor} rounded-full px-6 h-10 font-medium transition-all duration-200 hover:scale-105`}
                  >
                    <action.icon className="w-4 h-4 mr-2" />
                    {action.title}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Stats minimalistes */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-light text-gray-900">
                      {stat.value}{stat.currency}
                    </span>
                    <span className="text-xs text-payzoo-green-600 font-medium">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Activité récente - Plus compact */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">Activité récente</h2>
              <Button variant="ghost" size="sm" className="text-payzoo-green-600 hover:text-payzoo-green-700">
                Tout voir
              </Button>
            </div>
            
            <div className="space-y-3">
              {recentActivity.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-payzoo-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-payzoo-green-700">{item.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  </div>
                  <span className="font-medium text-gray-900">-{item.amount}€</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions et KYC - Plus compact */}
          <div className="space-y-6">
            
            {/* Actions rapides */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-12 rounded-xl">
                  <Wallet className="w-5 h-5 mr-3 text-blue-600" />
                  Ajouter paiement
                </Button>
                <Button className="w-full justify-start bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-12 rounded-xl">
                  <CreditCard className="w-5 h-5 mr-3 text-purple-600" />
                  Gérer les cartes
                </Button>
                <Button className="w-full justify-start bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-12 rounded-xl">
                  <History className="w-5 h-5 mr-3 text-orange-600" />
                  Historique complet
                </Button>
              </div>
            </div>

            {/* KYC Card - Plus moderne */}
            <Card className="border-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">Vérification KYC</span>
                  </div>
                  <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                    Augmentez vos limites de 1K€ à 15K€/mois
                  </p>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-4 py-2 text-sm font-medium">
                    Commencer
                    <ArrowUpRight className="w-4 h-4 ml-1" />
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
