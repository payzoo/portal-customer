
import { TrendingUp, Send, Calendar, Target, Plus, Eye, EyeOff, PiggyBank, TrendingDown, Coffee, ShoppingBag, Car, Home, ArrowUpRight, Shield } from "lucide-react";
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
    { name: "Alimentation", amount: 487.20, percentage: 26, color: "bg-slate-600", icon: Coffee, trend: "+12%" },
    { name: "Transport", amount: 356.80, percentage: 19, color: "bg-slate-700", icon: Car, trend: "-8%" },
    { name: "Shopping", amount: 298.45, percentage: 16, color: "bg-slate-500", icon: ShoppingBag, trend: "+5%" },
    { name: "Logement", amount: 705.05, percentage: 38, color: "bg-black", icon: Home, trend: "0%" },
  ];

  const insights = [
    {
      title: "Économies potentielles",
      description: "89€ d'économies possibles ce mois",
      icon: PiggyBank,
      value: "89€",
      color: "text-green-600"
    },
    {
      title: "Tendance positive",
      description: "Transport: -18% vs mois dernier",
      icon: TrendingDown,
      value: "-18%",
      color: "text-blue-600"
    },
    {
      title: "Objectif atteint",
      description: "Budget respecté à 74%",
      icon: Target,
      value: "74%",
      color: "text-purple-600"
    }
  ];

  const recentTransactions = [
    { name: "Carrefour", amount: "45.67", time: "2h", category: "Alimentation", icon: Coffee },
    { name: "Spotify", amount: "9.99", time: "1j", category: "Divertissement", icon: Target },
    { name: "Uber", amount: "23.40", time: "2j", category: "Transport", icon: Car },
    { name: "Amazon", amount: "67.89", time: "3j", category: "Shopping", icon: ShoppingBag },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        
        {/* Header épuré */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-light text-black tracking-tight">
              Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Décembre 2024
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-black text-white hover:bg-gray-800 h-10 px-6 text-sm font-medium">
              <Send className="w-4 h-4 mr-2" />
              Nouvelle transaction
            </Button>
            <Button variant="outline" className="h-10 px-6 text-sm font-medium">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter budget
            </Button>
          </div>
        </div>

        {/* Budget Overview - Version minimaliste */}
        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">Budget mensuel</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAnalyticsVisible(!isAnalyticsVisible)}
                className="text-gray-400 hover:text-gray-600"
              >
                {isAnalyticsVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            
            {isAnalyticsVisible && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl font-light text-black">
                      {currentSpent.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                    </span>
                    <span className="text-gray-400">/ {monthlyBudget.toLocaleString('fr-FR')}€</span>
                  </div>
                  <Progress value={spentPercentage} className="h-1.5 bg-gray-100" />
                </div>
                <div className="flex items-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Reste {(monthlyBudget - currentSpent).toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>{spentPercentage.toFixed(0)}% utilisé</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-12 gap-8">
          
          {/* Section principale */}
          <div className="col-span-8 space-y-8">
            
            {/* Catégories - Design épuré */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-light text-black">Dépenses par catégorie</h2>
                <Button variant="ghost" className="text-gray-500 hover:text-black text-sm">
                  Voir détails
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {expenseCategories.map((category) => (
                  <Card key={category.name} className="border border-gray-200 hover:border-gray-300 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          category.trend.startsWith('+') ? 'bg-red-50 text-red-600' : 
                          category.trend.startsWith('-') ? 'bg-green-50 text-green-600' : 
                          'bg-gray-50 text-gray-600'
                        }`}>
                          {category.trend}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">{category.name}</p>
                          <p className="text-xl font-light text-black">{category.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</p>
                        </div>
                        <div className="space-y-2">
                          <Progress value={category.percentage} className="h-1 bg-gray-100" />
                          <p className="text-xs text-gray-400">{category.percentage}% du budget</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Transactions récentes - Design simplifié */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-light text-black">Transactions récentes</h2>
                <Button variant="ghost" className="text-gray-500 hover:text-black text-sm">
                  Tout voir
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="space-y-1">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <transaction.icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">{transaction.name}</p>
                        <p className="text-xs text-gray-500">{transaction.category} • {transaction.time}</p>
                      </div>
                    </div>
                    <span className="font-medium text-black text-sm">-{transaction.amount}€</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar insights - Design minimal */}
          <div className="col-span-4 space-y-8">
            
            {/* Insights */}
            <div>
              <h3 className="text-lg font-light text-black mb-6">Insights</h3>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <insight.icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-black text-sm">{insight.title}</h4>
                          <span className={`text-sm font-medium ${insight.color}`}>{insight.value}</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{insight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions rapides */}
            <div>
              <h3 className="text-lg font-light text-black mb-6">Actions rapides</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start p-4 h-auto border-gray-200 hover:border-gray-300">
                  <TrendingUp className="w-4 h-4 mr-3 text-gray-600" />
                  <div className="text-left">
                    <div className="font-medium text-black text-sm">Analyser dépenses</div>
                    <div className="text-xs text-gray-500">Rapport détaillé</div>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start p-4 h-auto border-gray-200 hover:border-gray-300">
                  <Target className="w-4 h-4 mr-3 text-gray-600" />
                  <div className="text-left">
                    <div className="font-medium text-black text-sm">Définir objectifs</div>
                    <div className="text-xs text-gray-500">Budget personnalisé</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* CTA minimaliste */}
            <Card className="border-0 bg-black text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">Optimisation IA</span>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Optimisez vos finances avec notre IA
                </p>
                <Button className="bg-white text-black hover:bg-gray-100 text-sm font-medium w-full">
                  Activer l'IA
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
