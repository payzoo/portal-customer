
import { TrendingUp, Send, CreditCard, History, Shield, ArrowUpRight, Plus, Eye, EyeOff, Users, PiggyBank, TrendingDown, Calendar, Target, Coffee, ShoppingBag, Car, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export function Dashboard() {
  const [isAnalyticsVisible, setIsAnalyticsVisible] = useState(true);
  
  const monthlyBudget = 2500;
  const currentSpent = 1847.50;
  const spentPercentage = (currentSpent / monthlyBudget) * 100;

  const expenseCategories = [
    { name: "Alimentation", amount: 487.20, percentage: 26, color: "bg-blue-500", icon: Coffee, trend: "+12%" },
    { name: "Transport", amount: 356.80, percentage: 19, color: "bg-green-500", icon: Car, trend: "-8%" },
    { name: "Shopping", amount: 298.45, percentage: 16, color: "bg-purple-500", icon: ShoppingBag, trend: "+5%" },
    { name: "Logement", amount: 705.05, percentage: 38, color: "bg-orange-500", icon: Home, trend: "0%" },
  ];

  const insights = [
    {
      title: "Économies potentielles",
      description: "Vous pourriez économiser 89€ ce mois en optimisant vos dépenses alimentaires",
      icon: PiggyBank,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      value: "89€"
    },
    {
      title: "Tendance positive",
      description: "Vos dépenses transport ont diminué de 18% par rapport au mois dernier",
      icon: TrendingDown,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      value: "-18%"
    },
    {
      title: "Objectif atteint",
      description: "Félicitations ! Vous respectez votre budget mensuel",
      icon: Target,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      value: "74%"
    }
  ];

  const recentTransactions = [
    { name: "Carrefour", amount: "45.67", time: "2h", category: "Alimentation", icon: Coffee, color: "bg-blue-500" },
    { name: "Spotify", amount: "9.99", time: "1j", category: "Divertissement", icon: Users, color: "bg-green-500" },
    { name: "Uber", amount: "23.40", time: "2j", category: "Transport", icon: Car, color: "bg-orange-500" },
    { name: "Amazon", amount: "67.89", time: "3j", category: "Shopping", icon: ShoppingBag, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        
        {/* Header avec animation */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-extralight text-black mb-2 tracking-tight">
                Synthèse financière
              </h1>
              <p className="text-xl text-gray-600 font-light flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Décembre 2024
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-black text-white rounded-full px-8 h-12 font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <Send className="w-5 h-5 mr-3" />
                Nouvelle transaction
              </Button>
              <Button variant="outline" className="bg-white border-gray-200 text-gray-700 rounded-full px-8 h-12 font-medium hover:bg-gray-50 transition-all duration-300">
                <Plus className="w-5 h-5 mr-3" />
                Ajouter budget
              </Button>
            </div>
          </div>
        </div>

        {/* Budget Overview Card */}
        <Card className="mb-12 border-0 shadow-xl bg-gradient-to-r from-black to-gray-800 text-white overflow-hidden relative animate-scale-in">
          <CardContent className="p-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <p className="text-gray-300 font-medium">Budget mensuel</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsAnalyticsVisible(!isAnalyticsVisible)}
                      className="text-gray-300 hover:text-white hover:bg-white/10 rounded-full p-2 ml-auto"
                    >
                      {isAnalyticsVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                  {isAnalyticsVisible && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <div className="flex items-baseline gap-4 mb-3">
                          <span className="text-5xl font-extralight tracking-tight">
                            {currentSpent.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                          </span>
                          <span className="text-gray-300">/ {monthlyBudget.toLocaleString('fr-FR')}€</span>
                        </div>
                        <Progress 
                          value={spentPercentage} 
                          className="h-2 bg-white/20"
                        />
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-green-400">Reste {(monthlyBudget - currentSpent).toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-blue-400" />
                          <span className="text-blue-400">{spentPercentage.toFixed(0)}% utilisé</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-12 gap-8">
          
          {/* Analyse des dépenses */}
          <div className="col-span-8 space-y-8">
            
            {/* Catégories principales */}
            <div className="animate-slide-in-right">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-light text-black">Dépenses par catégorie</h2>
                <Button variant="ghost" className="text-gray-500 hover:text-black text-sm font-medium">
                  Voir détails
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {expenseCategories.map((category, index) => (
                  <Card key={category.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          category.trend.startsWith('+') ? 'bg-red-50 text-red-600' : 
                          category.trend.startsWith('-') ? 'bg-green-50 text-green-600' : 
                          'bg-gray-50 text-gray-600'
                        }`}>
                          {category.trend}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{category.name}</p>
                          <p className="text-2xl font-light text-black">{category.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</p>
                        </div>
                        <Progress value={category.percentage} className="h-2" />
                        <p className="text-xs text-gray-500">{category.percentage}% du budget</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Transactions récentes */}
            <div className="animate-slide-in-right" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-light text-black">Activité récente</h2>
                <Button variant="ghost" className="text-gray-500 hover:text-black text-sm font-medium">
                  Tout voir
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="space-y-2">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="p-5 bg-white hover:bg-gray-50/80 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-md animate-fade-in" style={{ animationDelay: `${300 + index * 100}ms` }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 ${transaction.color} rounded-xl flex items-center justify-center`}>
                          <transaction.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-black">{transaction.name}</p>
                          <p className="text-sm text-gray-500">{transaction.category} • {transaction.time}</p>
                        </div>
                      </div>
                      <span className="font-medium text-black">-{transaction.amount}€</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar insights */}
          <div className="col-span-4 space-y-8">
            
            {/* Insights intelligents */}
            <div className="animate-slide-in-right" style={{ animationDelay: '400ms' }}>
              <h3 className="text-xl font-light text-black mb-6">Insights personnalisés</h3>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <Card key={index} className={`border ${insight.color} hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in`} style={{ animationDelay: `${500 + index * 100}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center border-2 ${insight.color.includes('green') ? 'border-green-200' : insight.color.includes('blue') ? 'border-blue-200' : 'border-purple-200'}`}>
                          <insight.icon className={`w-6 h-6 ${insight.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-black">{insight.title}</h4>
                            <span className={`text-lg font-bold ${insight.iconColor}`}>{insight.value}</span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{insight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Actions rapides */}
            <div className="animate-slide-in-right" style={{ animationDelay: '600ms' }}>
              <h3 className="text-xl font-light text-black mb-6">Actions rapides</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start h-auto p-5 border-gray-200 hover:bg-gray-50 hover:border-black text-left transition-all duration-300">
                  <TrendingUp className="w-5 h-5 mr-4 text-black" />
                  <div>
                    <div className="font-medium text-black">Analyser mes dépenses</div>
                    <div className="text-sm text-gray-500">Rapport détaillé</div>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start h-auto p-5 border-gray-200 hover:bg-gray-50 hover:border-black text-left transition-all duration-300">
                  <Target className="w-5 h-5 mr-4 text-black" />
                  <div>
                    <div className="font-medium text-black">Définir objectifs</div>
                    <div className="text-sm text-gray-500">Budget personnalisé</div>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start h-auto p-5 border-gray-200 hover:bg-gray-50 hover:border-black text-left transition-all duration-300">
                  <History className="w-5 h-5 mr-4 text-black" />
                  <div>
                    <div className="font-medium text-black">Historique complet</div>
                    <div className="text-sm text-gray-500">Toutes transactions</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* CTA Card améliorée */}
            <Card className="border-0 bg-gradient-to-br from-black to-gray-800 text-white overflow-hidden relative animate-scale-in" style={{ animationDelay: '700ms' }}>
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    <span className="font-semibold">Optimisation IA</span>
                  </div>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    Laissez notre IA analyser vos habitudes et vous proposer des optimisations personnalisées
                  </p>
                  <Button className="bg-white text-black hover:bg-gray-100 rounded-xl px-6 py-3 font-medium text-sm transition-all duration-300 hover:scale-105">
                    Activer l'IA
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
