
import { CreditCard, Plus, MoreVertical, Wallet, TrendingDown, Eye, EyeOff, Settings, Edit, Trash2, Shield, ArrowUpRight, CheckCircle2, Clock, DollarSign, Activity, Star, Target, Brain } from "lucide-react";
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
      case "active": return "bg-green-100 text-green-700 border-green-200";
      case "pending": return "bg-orange-100 text-orange-700 border-orange-200";
      case "blocked": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
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

  const quickActions = [
    {
      id: 1,
      title: "Ajouter une carte",
      description: "Nouvelle carte bancaire",
      icon: CreditCard,
      bgColor: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Compte bancaire",
      description: "Connecter votre banque",
      icon: Wallet,
      bgColor: "from-green-50 to-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      title: "Paramètres sécurité",
      description: "Gérer la protection",
      icon: Shield,
      bgColor: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="payzoo-page-container">
        
        {/* Header simplifié */}
        <div className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-foreground rounded-lg">
                  <Wallet className="w-5 h-5 text-background" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-600">Smart Finance</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">Portefeuille</h1>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Gérez vos moyens de paiement et suivez vos dépenses
                </p>
              </div>
            </div>
            
            <Button className="bg-foreground hover:bg-foreground/90 text-background">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Statistiques du portefeuille */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-md transition-all">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="w-8 h-8"
                >
                  {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </Button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Solde total</p>
                <p className="text-xl font-bold text-foreground">
                  {balanceVisible ? `${walletStats.totalBalance.toFixed(2)} €` : "••••••"}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-md transition-all">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-blue-600" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Dépenses du mois</p>
                <p className="text-xl font-bold text-foreground">{walletStats.monthlySpending.toFixed(2)} €</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-md transition-all">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                </div>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Cartes actives</p>
                <p className="text-xl font-bold text-foreground">{walletStats.activeCards}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-md transition-all">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <Activity className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">En attente</p>
                <p className="text-xl font-bold text-foreground">{walletStats.pendingTransactions}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des moyens de paiement */}
        <div className={`space-y-4 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Moyens de paiement</h2>
            <Badge variant="secondary" className="bg-muted text-muted-foreground">
              {paymentMethods.length} méthodes
            </Badge>
          </div>

          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <Card 
                key={method.id} 
                className={`border-0 bg-gradient-to-r from-background to-muted/20 hover:shadow-md transition-all ${method.isDefault ? 'ring-1 ring-foreground/20' : ''}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${method.brand === 'Visa' ? 'bg-blue-100' : method.brand === 'Mastercard' ? 'bg-red-100' : 'bg-gray-100'}`}>
                        {getCardIcon(method.brand)}
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-foreground">{method.name}</h3>
                          {method.isDefault && (
                            <Badge className="bg-foreground text-background text-xs px-2 py-0.5">
                              <Star className="w-3 h-3 mr-1" />
                              Principale
                            </Badge>
                          )}
                          <Badge className={`text-xs px-2 py-0.5 ${getStatusColor(method.status)}`}>
                            {getStatusText(method.status)}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
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
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Voir les détails
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Modifier
                        </DropdownMenuItem>
                        {!method.isDefault && (
                          <DropdownMenuItem>
                            <Star className="w-4 h-4 mr-2" />
                            Définir par défaut
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Settings className="w-4 h-4 mr-2" />
                          Paramètres
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
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

        {/* Actions rapides simplifiées */}
        <div className={`mt-12 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-1">Actions rapides</h3>
            <p className="text-sm text-muted-foreground">Ajoutez facilement de nouveaux moyens de paiement</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <Card 
                key={action.id}
                className="border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-md transition-all cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 bg-gradient-to-br ${action.bgColor} rounded-lg flex items-center justify-center`}>
                        <action.icon className={`w-6 h-6 ${action.iconColor}`} />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{action.title}</h4>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Info sécurité */}
          <div className="mt-6 p-3 bg-muted/30 rounded-lg border border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Toutes vos données sont protégées par un chiffrement de niveau bancaire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
