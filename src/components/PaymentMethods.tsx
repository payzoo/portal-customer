
import { CreditCard, Plus, MoreVertical, Wallet, TrendingUp, TrendingDown, Eye, EyeOff, Settings, Edit, Trash2, Shield, Zap, Sparkles, ArrowUpRight, CheckCircle2, AlertCircle, Clock, DollarSign, Activity, Star, Target, Brain, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

export function PaymentMethods() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const paymentMethods = [
    {
      id: 1,
      type: "card",
      name: "Carte principale",
      last4: "4242",
      brand: "Visa",
      isDefault: true,
      expiryMonth: 12,
      expiryYear: 2026,
      status: "active",
      transactions: 28,
      spending: 1247.50
    },
    {
      id: 2,
      type: "card",
      name: "Carte pro",
      last4: "8888",
      brand: "Mastercard",
      isDefault: false,
      expiryMonth: 8,
      expiryYear: 2025,
      status: "active",
      transactions: 15,
      spending: 892.30
    },
    {
      id: 3,
      type: "bank",
      name: "Compte Crédit Agricole",
      last4: "1234",
      brand: "bank",
      isDefault: false,
      status: "pending",
      transactions: 5,
      spending: 245.80
    }
  ];

  const walletStats = {
    totalBalance: 2847.60,
    monthlySpending: 2385.60,
    activeCards: 2,
    pendingTransactions: 3
  };

  const getCardIcon = (brand: string) => {
    if (brand === "bank") return <Wallet className="w-5 h-5" />;
    return <CreditCard className="w-5 h-5" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500/10 text-green-700 border-green-200";
      case "pending": return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "blocked": return "bg-red-500/10 text-red-700 border-red-200";
      default: return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "Active";
      case "pending": return "En attente";
      case "blocked": return "Bloquée";
      default: return "Inconnue";
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Geometric floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-tr from-muted/20 to-muted/5 rounded-full blur-2xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-foreground/5 rotate-45 blur-xl animate-pulse" />
      </div>

      <div className="relative z-10 payzoo-page-container">
        {/* Enhanced header */}
        <div className={`flex items-center justify-between mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-foreground to-foreground/80 rounded-xl flex items-center justify-center">
                <Wallet className="w-5 h-5 text-background" />
              </div>
              <div>
                <h1 className="payzoo-page-title flex items-center gap-3">
                  Portefeuille
                  <Sparkles className="w-6 h-6 text-foreground/60 animate-pulse" />
                </h1>
                <p className="payzoo-subtitle">Gérez vos moyens de paiement et suivez vos dépenses</p>
              </div>
            </div>
          </div>
          
          {/* Modern CTA */}
          <Button className="group bg-foreground hover:bg-foreground/90 text-background px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-0">
            <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Ajouter
          </Button>
        </div>

        {/* Wallet overview cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '100ms' }}>
          <Card className="group payzoo-card border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="payzoo-card-content">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="w-8 h-8 hover:bg-muted/50"
                >
                  {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </Button>
              </div>
              <div className="space-y-2">
                <p className="payzoo-body-sm text-muted-foreground">Solde total</p>
                <p className="text-2xl font-bold text-foreground">
                  {balanceVisible ? `${walletStats.totalBalance.toFixed(2)} €` : "••••••"}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group payzoo-card border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="payzoo-card-content">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-blue-600" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="space-y-2">
                <p className="payzoo-body-sm text-muted-foreground">Dépenses du mois</p>
                <p className="text-2xl font-bold text-foreground">{walletStats.monthlySpending.toFixed(2)} €</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group payzoo-card border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="payzoo-card-content">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                </div>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </div>
              <div className="space-y-2">
                <p className="payzoo-body-sm text-muted-foreground">Cartes actives</p>
                <p className="text-2xl font-bold text-foreground">{walletStats.activeCards}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group payzoo-card border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="payzoo-card-content">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/10 to-orange-600/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <Activity className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="space-y-2">
                <p className="payzoo-body-sm text-muted-foreground">En attente</p>
                <p className="text-2xl font-bold text-foreground">{walletStats.pendingTransactions}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment methods list */}
        <div className={`space-y-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between">
            <h2 className="payzoo-section-title">Moyens de paiement</h2>
            <Badge variant="secondary" className="bg-muted/50 text-muted-foreground border-0">
              {paymentMethods.length} méthodes
            </Badge>
          </div>

          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <Card 
                key={method.id} 
                className={`group payzoo-card-interactive border-0 bg-gradient-to-r from-background to-muted/10 hover:shadow-lg transition-all duration-500 hover:scale-[1.01] ${method.isDefault ? 'ring-2 ring-foreground/10' : ''}`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="payzoo-card-content">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${method.brand === 'Visa' ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/20' : method.brand === 'Mastercard' ? 'bg-gradient-to-br from-red-500/10 to-red-600/20' : 'bg-gradient-to-br from-gray-500/10 to-gray-600/20'}`}>
                        {getCardIcon(method.brand)}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="payzoo-subsection-title">{method.name}</h3>
                          {method.isDefault && (
                            <Badge className="bg-foreground text-background hover:bg-foreground/90 border-0 text-xs px-2 py-0.5">
                              <Star className="w-3 h-3 mr-1" />
                              Principale
                            </Badge>
                          )}
                          <Badge className={`border text-xs px-2 py-0.5 ${getStatusColor(method.status)}`}>
                            {getStatusText(method.status)}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            •••• {method.last4}
                          </span>
                          {method.type === "card" && (
                            <span>{method.expiryMonth}/{method.expiryYear}</span>
                          )}
                          <span className="flex items-center gap-1">
                            <Activity className="w-3 h-3" />
                            {method.transactions} transactions
                          </span>
                          <span className="flex items-center gap-1 font-medium">
                            <DollarSign className="w-3 h-3" />
                            {method.spending.toFixed(2)} €
                          </span>
                        </div>
                      </div>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56 bg-background border border-border">
                        <DropdownMenuItem className="flex items-center gap-2 hover:bg-muted cursor-pointer">
                          <Eye className="w-4 h-4" />
                          Voir les détails
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 hover:bg-muted cursor-pointer">
                          <Edit className="w-4 h-4" />
                          Modifier
                        </DropdownMenuItem>
                        {!method.isDefault && (
                          <DropdownMenuItem className="flex items-center gap-2 hover:bg-muted cursor-pointer">
                            <Star className="w-4 h-4" />
                            Définir par défaut
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center gap-2 hover:bg-muted cursor-pointer">
                          <Settings className="w-4 h-4" />
                          Paramètres
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 text-red-600 hover:bg-red-50 cursor-pointer">
                          <Trash2 className="w-4 h-4" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className={`mt-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '400ms' }}>
          <h3 className="payzoo-subsection-title mb-6">Actions rapides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="group payzoo-card-interactive border-0 bg-gradient-to-br from-background to-blue-50/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardContent className="payzoo-card-compact text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Ajouter une carte</h4>
                <p className="text-sm text-muted-foreground">Connectez une nouvelle carte bancaire</p>
              </CardContent>
            </Card>

            <Card className="group payzoo-card-interactive border-0 bg-gradient-to-br from-background to-green-50/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardContent className="payzoo-card-compact text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Compte bancaire</h4>
                <p className="text-sm text-muted-foreground">Connectez votre compte bancaire</p>
              </CardContent>
            </Card>

            <Card className="group payzoo-card-interactive border-0 bg-gradient-to-br from-background to-purple-50/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardContent className="payzoo-card-compact text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Sécurité</h4>
                <p className="text-sm text-muted-foreground">Gérez la sécurité de vos paiements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
