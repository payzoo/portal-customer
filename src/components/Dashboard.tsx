
import { TrendingUp, Send, Calendar, Target, Plus, Eye, EyeOff, PiggyBank, TrendingDown, Coffee, ShoppingBag, Car, Home, ArrowUpRight, Shield, Zap, Activity, Sparkles } from "lucide-react";
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
      color: "text-green-600",
      bgColor: "from-green-500/10 to-emerald-500/10",
      pulse: true
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
              <Send className="w-4 h-4 mr-2 text-background relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Nouvelle transaction</span>
            </Button>
            <Button className="payzoo-btn-secondary group">
              <Plus className="w-4 h-4 mr-2 text-foreground group-hover:rotate-90 transition-transform duration-300" />
              Ajouter budget
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
            
            {/* Categories with enhanced animations */}
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '400ms' }}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="payzoo-section-title flex items-center gap-3">
                  Dépenses par catégorie
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                </h2>
                <Button className="payzoo-btn-ghost group">
                  Voir détails
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </div>
              
              <div className="payzoo-grid-2">
                {expenseCategories.map((category, index) => (
                  <Card 
                    key={category.name} 
                    className="payzoo-card-interactive relative overflow-hidden group"
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    <CardContent className="payzoo-card-content relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`payzoo-caption font-medium px-3 py-1.5 rounded-full transition-all duration-300 ${
                          category.isPositive 
                            ? 'bg-green-50 text-green-600 group-hover:bg-green-100' 
                            : 'bg-red-50 text-red-600 group-hover:bg-red-100'
                        }`}>
                          {category.trend}
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="payzoo-body-sm text-muted-foreground">{category.name}</p>
                          <p className="payzoo-subsection-title text-foreground">{category.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</p>
                        </div>
                        <div className="space-y-2">
                          <div className="relative">
                            <Progress 
                              value={hoveredCategory === category.name ? category.percentage + 5 : category.percentage} 
                              className="h-1.5 bg-muted transition-all duration-500" 
                            />
                            {hoveredCategory === category.name && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                            )}
                          </div>
                          <p className="payzoo-caption text-muted-foreground">{category.percentage}% du budget</p>
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

            {/* Quick actions with enhanced styling */}
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1000ms' }}>
              <h3 className="payzoo-subsection-title mb-6">Actions rapides</h3>
              <div className="space-y-3">
                <Button className="payzoo-btn-secondary w-full justify-start payzoo-card-content h-auto group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <TrendingUp className="w-5 h-5 mr-3 text-muted-foreground group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <div className="text-left relative z-10">
                    <div className="payzoo-body-sm font-medium text-foreground">Analyser dépenses</div>
                    <div className="payzoo-caption text-muted-foreground">Rapport détaillé</div>
                  </div>
                </Button>
                <Button className="payzoo-btn-secondary w-full justify-start payzoo-card-content h-auto group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <Target className="w-5 h-5 mr-3 text-muted-foreground group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <div className="text-left relative z-10">
                    <div className="payzoo-body-sm font-medium text-foreground">Définir objectifs</div>
                    <div className="payzoo-caption text-muted-foreground">Budget personnalisé</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Main CTA with futuristic design */}
            <Card className={`border-0 bg-foreground text-background relative overflow-hidden group transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1200ms' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="payzoo-card-content relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 text-background" />
                  </div>
                  <span className="payzoo-body-sm font-medium text-background flex items-center gap-2">
                    Optimisation IA
                    <div className="w-2 h-2 bg-background/60 rounded-full animate-pulse"></div>
                  </span>
                </div>
                <p className="text-background/80 mb-4 payzoo-body-sm leading-relaxed">
                  Optimisez vos finances avec notre IA avancée
                </p>
                <Button className="payzoo-btn-accent w-full bg-background text-foreground hover:bg-background/90 group/btn relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative z-10">Activer l'IA</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 text-foreground relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
