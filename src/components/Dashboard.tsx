
import { TrendingUp, Send, Calendar, Target, Plus, Eye, EyeOff, PiggyBank, TrendingDown, Coffee, ShoppingBag, Car, Home, ArrowUpRight, Shield, Zap, Activity, Sparkles, Brain, Cpu, Stars } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export function Dashboard() {
  const [isAnalyticsVisible, setIsAnalyticsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);
  
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
      color: "text-green-600",
      bgColor: "from-green-500/10 to-emerald-500/10",
      pulse: false
    },
    {
      title: "Tendance positive",
      description: "Transport: -18% vs mois dernier",
      icon: TrendingDown,
      value: "-18%",
      color: "text-blue-600",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      pulse: false
    },
    {
      title: "Objectif atteint",
      description: "Budget respecté à 74%",
      icon: Target,
      value: "74%",
      color: "text-purple-600",
      bgColor: "from-purple-500/10 to-pink-500/10",
      pulse: false
    }
  ];

  const recentTransactions = [
    { name: "Carrefour", amount: "45.67", time: "2h", category: "Alimentation", icon: Coffee, color: "from-blue-500 to-cyan-500" },
    { name: "Spotify", amount: "9.99", time: "1j", category: "Divertissement", icon: Target, color: "from-purple-500 to-pink-500" },
    { name: "Uber", amount: "23.40", time: "2j", category: "Transport", icon: Car, color: "from-green-500 to-emerald-500" },
    { name: "Amazon", amount: "67.89", time: "3j", category: "Shopping", icon: ShoppingBag, color: "from-orange-500 to-red-500" },
  ];

  const quickActions = [
    {
      id: "analyze",
      title: "Analyser dépenses",
      subtitle: "Rapport détaillé avec IA",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/5 to-cyan-500/5",
      hoverBg: "from-blue-500/10 to-cyan-500/10",
      description: "Analyse intelligente de vos habitudes",
      metrics: "98% de précision"
    },
    {
      id: "goals",
      title: "Définir objectifs",
      subtitle: "Budget personnalisé",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/5 to-pink-500/5",
      hoverBg: "from-purple-500/10 to-pink-500/10",
      description: "Objectifs adaptatifs et intelligents",
      metrics: "5min de config"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="payzoo-page-container">
        
        {/* Header with futuristic elements */}
        <div className={`flex items-center justify-between mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="relative">
            <div className="flex items-center gap-4 mb-2">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <Activity className="w-6 h-6 text-background" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="payzoo-page-title flex items-center gap-3">
                  Activité
                  <Sparkles className="w-8 h-8 text-foreground/60 animate-pulse" />
                </h1>
                <p className="payzoo-subtitle flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  Décembre 2024
                  <span className="px-2 py-1 bg-foreground/5 rounded-full text-xs font-medium">Live</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="payzoo-btn-primary group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              <Plus className="w-4 h-4 mr-2 text-background relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              <span className="relative z-10">Ajouter un budget</span>
            </Button>
          </div>
        </div>

        {/* Budget Overview with futuristic design */}
        <Card className={`payzoo-card mb-12 relative overflow-hidden transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-2xl hover:shadow-foreground/5`} style={{ animationDelay: '200ms' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 via-transparent to-foreground/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <CardContent className="payzoo-card-content relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="payzoo-status-active animate-pulse"></div>
                  <div className="absolute inset-0 payzoo-status-active animate-ping"></div>
                </div>
                <span className="payzoo-body-sm font-medium text-foreground">Budget mensuel</span>
                <div className="px-2 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full">
                  <span className="text-xs font-medium text-green-600">Actif</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAnalyticsVisible(!isAnalyticsVisible)}
                className="payzoo-btn-ghost group"
                aria-label={isAnalyticsVisible ? "Masquer les données" : "Afficher les données"}
              >
                {isAnalyticsVisible ? 
                  <EyeOff className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" /> : 
                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                }
              </Button>
            </div>
            
            {isAnalyticsVisible && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="payzoo-page-title text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                      {currentSpent.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                    </span>
                    <span className="payzoo-subtitle">/ {monthlyBudget.toLocaleString('fr-FR')}€</span>
                    <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full">
                      <Zap className="w-3 h-3 text-blue-600" />
                      <span className="text-xs font-medium text-blue-600">IA Active</span>
                    </div>
                  </div>
                  <div className="relative">
                    <Progress value={animatedProgress} className="h-2 bg-muted transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>
                <div className="flex items-center gap-8 payzoo-body-sm text-muted-foreground">
                  <div className="flex items-center gap-2 group">
                    <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Reste {(monthlyBudget - currentSpent).toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Target className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{spentPercentage.toFixed(0)}% utilisé</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="payzoo-grid-3 gap-12">
          
          {/* Main section */}
          <div className="col-span-2 payzoo-section">
            
            {/* Enhanced categories with futuristic design */}
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '400ms' }}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <h2 className="payzoo-section-title flex items-center gap-3">
                    Dépenses par catégorie
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      <div className="w-1 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                  </h2>
                  <div className="px-3 py-1 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-full border border-foreground/10">
                    <span className="text-xs font-medium text-foreground/70">4 catégories actives</span>
                  </div>
                </div>
                <Button className="payzoo-btn-ghost group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative z-10">Voir détails</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </div>
              
              <div className="payzoo-grid-2">
                {expenseCategories.map((category, index) => (
                  <Card 
                    key={category.name} 
                    className="payzoo-card-interactive relative overflow-hidden group cursor-pointer border-0 bg-gradient-to-br from-card/50 via-card/80 to-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-foreground/10"
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {/* Enhanced background effects */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-1000`}></div>
                    
                    {/* Animated border */}
                    <div className={`absolute inset-0 rounded-xl border border-gradient-to-r ${category.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Floating particles */}
                    {hoveredCategory === category.name && (
                      <>
                        <div className="absolute top-4 right-6 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                        <div className="absolute bottom-6 left-8 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
                        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '800ms' }}></div>
                      </>
                    )}
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-200 transition-transform duration-1500 ease-in-out"></div>
                    
                    <CardContent className="payzoo-card-content relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="relative">
                          {/* Enhanced icon container */}
                          <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/20`}>
                            <category.icon className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          
                          {/* Orbital ring */}
                          <div className={`absolute inset-0 border-2 border-gradient-to-r ${category.color.replace('bg-', 'border-')} rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-spin`} style={{ animationDuration: '8s' }}></div>
                          
                          {/* Status indicator */}
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse">
                            <div className="absolute inset-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Enhanced trend indicator */}
                        <div className={`px-3 py-2 rounded-xl transition-all duration-500 backdrop-blur-sm border ${
                          category.isPositive 
                            ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 text-green-600 group-hover:from-green-500/20 group-hover:to-emerald-500/20' 
                            : 'bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20 text-red-600 group-hover:from-red-500/20 group-hover:to-orange-500/20'
                        }`}>
                          <div className="flex items-center gap-2">
                            {category.isPositive ? (
                              <TrendingDown className="w-3 h-3 animate-pulse" />
                            ) : (
                              <TrendingUp className="w-3 h-3 animate-pulse" />
                            )}
                            <span className="payzoo-caption font-bold">{category.trend}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-5">
                        <div>
                          <p className="payzoo-body-sm text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">{category.name}</p>
                          <p className="payzoo-subsection-title text-foreground group-hover:scale-105 transition-transform duration-300 origin-left">
                            {category.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                          </p>
                        </div>
                        
                        {/* Enhanced progress section */}
                        <div className="space-y-3">
                          <div className="relative overflow-hidden rounded-full">
                            <Progress 
                              value={hoveredCategory === category.name ? Math.min(category.percentage + 8, 100) : category.percentage} 
                              className="h-2 bg-muted/50 transition-all duration-700" 
                            />
                            {hoveredCategory === category.name && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                            )}
                            {/* Progress glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 blur-sm scale-110 transition-opacity duration-500 ${hoveredCategory === category.name ? 'opacity-40' : 'opacity-0'}`}></div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <p className="payzoo-caption text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                              {category.percentage}% du budget
                            </p>
                            
                            {/* Category status */}
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs font-medium text-muted-foreground">Suivi</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced insights on hover */}
                        <div className={`transition-all duration-500 transform ${hoveredCategory === category.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                          <div className="pt-4 border-t border-border/30">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2 text-muted-foreground/70">
                                <Activity className="w-3 h-3" />
                                <span>Activité récente</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Zap className="w-3 h-3 text-blue-500" />
                                <span className="font-medium text-blue-600">Analysé</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent transactions with enhanced styling */}
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '800ms' }}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="payzoo-section-title flex items-center gap-3">
                  Transactions récentes
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-foreground rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-foreground rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-1 h-1 bg-foreground rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </h2>
                <Button className="payzoo-btn-ghost group">
                  Tout voir
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </div>
              
              <div className="space-y-1">
                {recentTransactions.map((transaction, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 hover:bg-muted rounded-xl transition-all duration-300 group hover:scale-[1.01] animate-fade-in"
                    style={{ animationDelay: `${1000 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${transaction.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <transaction.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="payzoo-body-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors duration-300">{transaction.name}</p>
                        <p className="payzoo-caption text-muted-foreground">{transaction.category} • {transaction.time}</p>
                      </div>
                    </div>
                    <span className="payzoo-body-sm font-medium text-foreground group-hover:scale-105 transition-transform duration-300">-{transaction.amount}€</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar insights with futuristic design */}
          <div className="col-span-1 payzoo-section">
            
            {/* Insights with enhanced animations */}
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '600ms' }}>
              <h3 className="payzoo-subsection-title flex items-center gap-2 mb-6">
                Insights
                <Sparkles className="w-4 h-4 text-foreground/60 animate-pulse" />
              </h3>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div 
                    key={index} 
                    className={`payzoo-metric-card relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${insight.pulse ? 'animate-pulse' : ''}`}
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${insight.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="flex items-start gap-3 relative z-10">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <insight.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="payzoo-body-sm font-medium text-foreground">{insight.title}</h4>
                          <span className={`payzoo-body-sm font-medium ${insight.color} group-hover:scale-105 transition-transform duration-300`}>{insight.value}</span>
                        </div>
                        <p className="payzoo-caption text-muted-foreground leading-relaxed">{insight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Quick actions with futuristic design */}
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1000ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="payzoo-subsection-title">Actions rapides</h3>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-foreground/40 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-foreground/60 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                  <div className="w-1 h-1 bg-foreground/80 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                </div>
              </div>
              
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <div
                    key={action.id}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredAction(action.id)}
                    onMouseLeave={() => setHoveredAction(null)}
                    style={{ animationDelay: `${1100 + index * 100}ms` }}
                  >
                    {/* Main button container */}
                    <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 group-hover:border-border group-hover:bg-card/80 group-hover:shadow-lg group-hover:shadow-foreground/5 group-hover:scale-[1.02]">
                      
                      {/* Animated background gradients */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${action.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${action.hoverBg} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out`}></div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-200 transition-transform duration-1000 ease-in-out"></div>
                      
                      {/* Floating particles effect */}
                      {hoveredAction === action.id && (
                        <>
                          <div className="absolute top-2 right-4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                          <div className="absolute bottom-3 left-6 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                          <div className="absolute top-1/2 right-8 w-0.5 h-0.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                        </>
                      )}
                      
                      {/* Content */}
                      <div className="relative z-10 p-5">
                        <div className="flex items-start gap-4">
                          {/* Enhanced icon container */}
                          <div className="relative flex-shrink-0">
                            <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                              <action.icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            
                            {/* Orbital ring effect */}
                            <div className={`absolute inset-0 border border-gradient-to-r ${action.color.replace('bg-', 'border-')} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse`}></div>
                            
                            {/* Status indicator */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse">
                              <div className="absolute inset-0.5 bg-white rounded-full"></div>
                            </div>
                          </div>
                          
                          {/* Text content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="payzoo-body-sm font-medium text-foreground group-hover:text-foreground/90 transition-colors duration-300">
                                  {action.title}
                                </h4>
                                <p className="payzoo-caption text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                                  {action.subtitle}
                                </p>
                              </div>
                              
                              {/* Action indicator */}
                              <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                              </div>
                            </div>
                            
                            {/* Enhanced description with metrics */}
                            <div className="space-y-2">
                              <p className="text-xs text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">
                                {action.description}
                              </p>
                              
                              {/* Metrics bar */}
                              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                <div className="flex items-center gap-1">
                                  <Zap className="w-3 h-3 text-blue-500" />
                                  <span className="text-xs font-medium text-blue-600">{action.metrics}</span>
                                </div>
                                <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
                                  <div className={`h-full bg-gradient-to-r ${action.color} rounded-full transition-all duration-1000 ${hoveredAction === action.id ? 'w-full' : 'w-0'}`}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom enhancement */}
                        <div className="mt-4 pt-3 border-t border-border/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 text-muted-foreground/60">
                              <Activity className="w-3 h-3" />
                              <span>Prêt à utiliser</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-green-600 font-medium">Actif</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Border enhancement */}
                      <div className={`absolute inset-0 rounded-xl border border-gradient-to-r ${action.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main CTA avec design épuré et ergonomique */}
            <Card className={`border border-border/50 bg-gradient-to-br from-card to-card/95 relative overflow-hidden group transition-all duration-500 hover:shadow-lg hover:border-border ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1200ms' }}>
              
              {/* Effet de brillance subtil */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent translate-x-[-100%] group-hover:translate-x-100 transition-transform duration-700 ease-in-out"></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-foreground to-foreground/90 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                      <Brain className="w-6 h-6 text-background" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse opacity-80"></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-base font-semibold text-foreground">
                        Optimisation IA
                      </h4>
                      <div className="px-2 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-500/20">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-medium text-green-600">Active</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-muted-foreground text-xs">
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        <span>98% précision</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        <span>Temps réel</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Notre IA analyse vos habitudes financières pour optimiser automatiquement vos économies.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Analyse prédictive</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Auto-épargne</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 h-11 font-medium">
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Activer l'IA</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </Button>
                
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    <span>Sécurisé & Privé</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>Powered by PayzooAI</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
