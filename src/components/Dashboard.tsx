
import { TrendingUp, DollarSign, Target, Users, Plus, ArrowUpRight, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  const stats = [
    { title: "Revenus", value: "2,847", currency: "$", change: "+12.3%", isPositive: true },
    { title: "Clients", value: "1.2k", change: "+5.2%", isPositive: true },
    { title: "Croissance", value: "23%", change: "+15%", isPositive: true },
    { title: "Taux conversion", value: "3.4%", change: "+8.1%", isPositive: true },
  ];

  const recentActivity = [
    { name: "StackBlitz Inc", amount: "50.00", time: "2min" },
    { name: "OpenAI LLC", amount: "20.00", time: "1h" },
    { name: "GAIFM", amount: "1,793.97", time: "3h" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header - Ultra minimal */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">
                Bonjour Housseine
              </h1>
              <p className="text-gray-500 text-lg font-light">
                Voici votre activité aujourd'hui
              </p>
            </div>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 font-medium transition-all duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Nouveau
            </Button>
          </div>
        </div>

        {/* Stats - Clean grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl font-light text-gray-900 mb-1">
                {stat.value}<span className="text-lg text-gray-400">{stat.currency}</span>
              </div>
              <div className="text-sm text-gray-500 mb-2">{stat.title}</div>
              <div className="text-xs text-green-600 font-medium">
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Activity Feed - Minimal */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-light text-gray-900">Activité récente</h2>
              <button className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                Tout voir
              </button>
            </div>
            
            <div className="space-y-6">
              {recentActivity.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">{item.name}</div>
                    <div className="text-sm text-gray-400">{item.time}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">+${item.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions - Sidebar */}
          <div>
            <h2 className="text-xl font-light text-gray-900 mb-8">Actions</h2>
            
            <div className="space-y-4">
              <button className="w-full p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-200 text-left group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Zap className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Paiement rapide</div>
                    <div className="text-sm text-gray-500">Nouvelle transaction</div>
                  </div>
                </div>
              </button>

              <button className="w-full p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-200 text-left group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Analytics</div>
                    <div className="text-sm text-gray-500">Voir les rapports</div>
                  </div>
                </div>
              </button>

              <button className="w-full p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-200 text-left group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Users className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Équipe</div>
                    <div className="text-sm text-gray-500">Inviter des membres</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Growth Card */}
            <div className="mt-12 p-8 bg-black text-white rounded-3xl">
              <div className="mb-6">
                <div className="text-2xl font-light mb-2">Prêt à grandir ?</div>
                <div className="text-gray-300 text-sm font-light">
                  Débloquez toutes les fonctionnalités
                </div>
              </div>
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 font-medium">
                Découvrir Pro
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
