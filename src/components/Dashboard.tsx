
import { TrendingUp, Send, Calendar, Target, Plus, Eye, EyeOff, PiggyBank, TrendingDown, Coffee, ShoppingBag, Car, Home, ArrowUpRight, Shield, Zap, Activity, Sparkles, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export function Dashboard() {
  const [isAnalyticsVisible, setIsAnalyticsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  
  const monthlyBudget = 2500;
  const currentSpent = 1847.50;
  const spentPercentage = (currentSpent / monthlyBudget) * 100;

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setAnimatedProgress(spentPercentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [spentPercentage]);

  const expenseCategories = [
    { name: "Alimentation", amount: 487.20, percentage: 26, color: "from-blue-500 to-cyan-500", icon: Coffee, trend: "+12%", isPositive: false },
    { name: "Transport", amount: 356.80, percentage: 19, color: "from-green-500 to-emerald-500", icon: Car, trend: "-8%", isPositive: true },
    { name: "Shopping", amount: 298.45, percentage: 16, color: "from-purple-500 to-pink-500", icon: ShoppingBag, trend: "+5%", isPositive: false },
    { name: "Logement", amount: 705.05, percentage: 38, color: "from-orange-500 to-red-500", icon: Home, trend: "0%", isPositive: true },
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
    { name: "Carrefour", amount: "45.67", time: "2h", category: "Alimentation", icon: Coffee, color: "from-blue-500 to-cyan-500" },
    { name: "Spotify", amount: "9.99", time: "1j", category: "Divertissement", icon: Target, color: "from-purple-500 to-pink-500" },
    { name: "Uber", amount: "23.40", time: "2j", category: "Transport", icon: Car, color: "from-green-500 to-emerald-500" },
    { name: "Amazon", amount: "67.89", time: "3j", category: "Shopping", icon: ShoppingBag, color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-8">
        
        {/* Header standardisé */}
        <div className={`flex items-center justify-between mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-foreground rounded-xl shadow-sm">
                <Activity className="w-6 h-6 text-background" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-600">Live Analytics</span>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-1">Activité</h1>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Suivez vos finances en temps réel
              </p>
            </div>
          </div>
          <Button className="bg-foreground text-background hover:bg-foreground/90 group">
            <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Ajouter un budget
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Button>
        </div>

        {/* Budget Overview épuré */}
        <Card className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Budget mensuel</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAnalyticsVisible(!isAnalyticsVisible)}
                className="h-8 w-8 p-0"
              >
                {isAnalyticsVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            
            {isAnalyticsVisible && (
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-foreground">
                      {currentSpent.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                    </span>
                    <span className="text-muted-foreground">/ {monthlyBudget.toLocaleString('fr-FR')}€</span>
                  </div>
                  <Progress value={animatedProgress} className="h-2" />
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Section principale */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Catégories de dépenses simplifiées */}
            <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-foreground">Dépenses par catégorie</h2>
                <Button variant="ghost" size="sm">
                  Voir détails
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expenseCategories.map((category, index) => {
                  const Icon = category.icon;
                  const isHovered = hoveredCategory === category.name;
                  return (
                    <Card 
                      key={category.name} 
                      className="transition-all duration-300 hover:shadow-md cursor-pointer border border-border/50 hover:border-border"
                      onMouseEnter={() => setHoveredCategory(category.name)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                            category.isPositive 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {category.trend}
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">{category.name}</p>
                            <p className="text-lg font-semibold text-foreground">
                              {category.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <Progress value={category.percentage} className="h-1.5" />
                            <p className="text-xs text-muted-foreground">
                              {category.percentage}% du budget
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Transactions récentes épurées */}
            <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-foreground">Transactions récentes</h2>
                <Button variant="ghost" size="sm">
                  Tout voir
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="space-y-1">
                {recentTransactions.map((transaction, index) => {
                  const Icon = transaction.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${transaction.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{transaction.name}</p>
                          <p className="text-xs text-muted-foreground">{transaction.category} • {transaction.time}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-foreground">-{transaction.amount}€</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar épurée */}
          <div className="space-y-6">
            
            {/* Insights simplifiés */}
            <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h3 className="text-base font-semibold text-foreground mb-4">Insights</h3>
              <div className="space-y-3">
                {insights.map((insight, index) => {
                  const Icon = insight.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-medium text-foreground">{insight.title}</h4>
                          <span className={`text-sm font-medium ${insight.color}`}>{insight.value}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{insight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions rapides simplifiées */}
            <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h3 className="text-base font-semibold text-foreground mb-4">Actions rapides</h3>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <TrendingUp className="w-5 h-5 mr-3 text-blue-600" />
                  <div className="text-left">
                    <div className="font-medium">Analyser dépenses</div>
                    <div className="text-xs text-muted-foreground">Rapport détaillé avec IA</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <Target className="w-5 h-5 mr-3 text-purple-600" />
                  <div className="text-left">
                    <div className="font-medium">Définir objectifs</div>
                    <div className="text-xs text-muted-foreground">Budget personnalisé</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Optimisation IA épurée */}
            <Card className={`border border-border/50 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-background" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-foreground">Optimisation IA</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Active</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Notre IA analyse vos habitudes financières pour optimiser automatiquement vos économies.
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-muted-foreground">Analyse prédictive</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-muted-foreground">Auto-épargne</span>
                  </div>
                </div>
                
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Activer l'IA
                </Button>
                
                <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Sécurisé & Privé</span>
                  </div>
                  <span>Powered by PayzooAI</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
