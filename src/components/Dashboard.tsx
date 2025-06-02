
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
    { name: "Alimentation", amount: 487.20, percentage: 26, color: "bg-foreground", icon: Coffee, trend: "+12%" },
    { name: "Transport", amount: 356.80, percentage: 19, color: "bg-muted-foreground", icon: Car, trend: "-8%" },
    { name: "Shopping", amount: 298.45, percentage: 16, color: "bg-muted-foreground", icon: ShoppingBag, trend: "+5%" },
    { name: "Logement", amount: 705.05, percentage: 38, color: "bg-foreground", icon: Home, trend: "0%" },
  ];

  const insights = [
    {
      title: "Économies potentielles",
      description: "89€ d'économies possibles ce mois",
      icon: PiggyBank,
      value: "89€",
      color: "text-foreground"
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
    <div className="min-h-screen bg-background">
      <div className="lovable-page-container">
        
        {/* Header with consistent typography */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="lovable-page-title">Activité</h1>
            <p className="lovable-subtitle flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Décembre 2024
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="lovable-btn-primary">
              <Send className="w-4 h-4 mr-2" />
              Nouvelle transaction
            </Button>
            <Button className="lovable-btn-secondary">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter budget
            </Button>
          </div>
        </div>

        {/* Budget Overview with consistent card sizing */}
        <Card className="lovable-card mb-12">
          <CardContent className="lovable-card-content">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="lovable-status-active"></div>
                <span className="lovable-body-sm font-medium">Budget mensuel</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAnalyticsVisible(!isAnalyticsVisible)}
                className="lovable-btn-ghost"
                aria-label={isAnalyticsVisible ? "Masquer les données" : "Afficher les données"}
              >
                {isAnalyticsVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            
            {isAnalyticsVisible && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="lovable-page-title text-foreground">
                      {currentSpent.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                    </span>
                    <span className="lovable-subtitle">/ {monthlyBudget.toLocaleString('fr-FR')}€</span>
                  </div>
                  <Progress value={spentPercentage} className="h-1.5 bg-muted" />
                </div>
                <div className="flex items-center gap-8 lovable-body-sm text-muted-foreground">
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

        <div className="lovable-grid-3 gap-12">
          
          {/* Main section */}
          <div className="col-span-2 lovable-section">
            
            {/* Categories with consistent card sizing */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="lovable-section-title">Dépenses par catégorie</h2>
                <Button className="lovable-btn-ghost">
                  Voir détails
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="lovable-grid-2">
                {expenseCategories.map((category) => (
                  <Card key={category.name} className="lovable-card-interactive">
                    <CardContent className="lovable-card-content">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-background" />
                        </div>
                        <span className={`lovable-caption font-medium px-2 py-1 rounded-full ${
                          category.trend.startsWith('+') ? 'bg-red-50 text-red-600' : 
                          category.trend.startsWith('-') ? 'bg-green-50 text-green-600' : 
                          'bg-muted text-foreground'
                        }`}>
                          {category.trend}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="lovable-body-sm text-muted-foreground">{category.name}</p>
                          <p className="lovable-subsection-title text-foreground">{category.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</p>
                        </div>
                        <div className="space-y-2">
                          <Progress value={category.percentage} className="h-1 bg-muted" />
                          <p className="lovable-caption text-muted-foreground">{category.percentage}% du budget</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent transactions */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="lovable-section-title">Transactions récentes</h2>
                <Button className="lovable-btn-ghost">
                  Tout voir
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="space-y-1">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-muted rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                        <transaction.icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="lovable-body-sm font-medium text-foreground">{transaction.name}</p>
                        <p className="lovable-caption text-muted-foreground">{transaction.category} • {transaction.time}</p>
                      </div>
                    </div>
                    <span className="lovable-body-sm font-medium text-foreground">-{transaction.amount}€</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar insights */}
          <div className="col-span-1 lovable-section">
            
            {/* Insights with consistent card sizing */}
            <div>
              <h3 className="lovable-subsection-title">Insights</h3>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="lovable-metric-card">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <insight.icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="lovable-body-sm font-medium text-foreground">{insight.title}</h4>
                          <span className={`lovable-body-sm font-medium ${insight.color}`}>{insight.value}</span>
                        </div>
                        <p className="lovable-caption text-muted-foreground leading-relaxed">{insight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div>
              <h3 className="lovable-subsection-title">Actions rapides</h3>
              <div className="space-y-2">
                <Button className="lovable-btn-secondary w-full justify-start lovable-card-content h-auto">
                  <TrendingUp className="w-4 h-4 mr-3 text-muted-foreground" />
                  <div className="text-left">
                    <div className="lovable-body-sm font-medium text-foreground">Analyser dépenses</div>
                    <div className="lovable-caption text-muted-foreground">Rapport détaillé</div>
                  </div>
                </Button>
                <Button className="lovable-btn-secondary w-full justify-start lovable-card-content h-auto">
                  <Target className="w-4 h-4 mr-3 text-muted-foreground" />
                  <div className="text-left">
                    <div className="lovable-body-sm font-medium text-foreground">Définir objectifs</div>
                    <div className="lovable-caption text-muted-foreground">Budget personnalisé</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Main CTA */}
            <Card className="border-0 bg-foreground text-background">
              <CardContent className="lovable-card-content">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="lovable-body-sm font-medium">Optimisation IA</span>
                </div>
                <p className="text-background/80 mb-4 lovable-body-sm leading-relaxed">
                  Optimisez vos finances avec notre IA
                </p>
                <Button className="lovable-btn-accent w-full bg-background text-foreground hover:bg-background/90">
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
