import { Building2, Plus, Clock, TrendingUp, TrendingDown, CreditCard, Calendar, MoreVertical, Search, Filter, ArrowUpRight, CheckCircle2, Pause, AlertCircle, Eye, EyeOff, BarChart3, DollarSign, Activity, Settings, Edit, Trash2, Copy, Archive, RefreshCw, Sparkles, Zap, Brain, Cpu, Stars, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddSubscriptionCard } from "./AddSubscriptionCard";

export function Subscriptions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAnalytics, setShowAnalytics] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const subscriptions = [
    {
      id: 1,
      name: "StackBlitz Inc",
      plan: "Pro",
      amount: "50.00",
      currency: "$",
      status: "active",
      nextBilling: "15 Juin 2025",
      billingCycle: "mensuel",
      logo: "S",
      color: "bg-gradient-to-br from-foreground to-foreground/80",
      category: "Développement",
      yearlyAmount: 600,
      trend: "+5%",
      description: "Plateforme de développement en ligne"
    },
    {
      id: 2,
      name: "OpenAI LLC",
      plan: "Plus",
      amount: "20.00",
      currency: "$",
      status: "active",
      nextBilling: "22 Juin 2025",
      billingCycle: "mensuel",
      logo: "O",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      category: "IA",
      yearlyAmount: 240,
      trend: "0%",
      description: "Intelligence artificielle avancée"
    },
    {
      id: 3,
      name: "GAIFM",
      plan: "Premium",
      amount: "1,793.97",
      currency: "€",
      status: "paused",
      nextBilling: "28 Juin 2025",
      billingCycle: "annuel",
      logo: "G",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      category: "Finance",
      yearlyAmount: 1793.97,
      trend: "-12%",
      description: "Gestion financière intelligente"
    },
    {
      id: 4,
      name: "Adobe Creative Cloud",
      plan: "Individual",
      amount: "59.99",
      currency: "$",
      status: "active",
      nextBilling: "10 Juillet 2025",
      billingCycle: "mensuel",
      logo: "A",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      category: "Design",
      yearlyAmount: 719.88,
      trend: "+2%",
      description: "Suite créative professionnelle"
    },
    {
      id: 5,
      name: "Netflix",
      plan: "Standard",
      amount: "15.49",
      currency: "€",
      status: "active",
      nextBilling: "03 Juin 2025",
      billingCycle: "mensuel",
      logo: "N",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      category: "Divertissement",
      yearlyAmount: 185.88,
      trend: "+8%",
      description: "Streaming vidéo premium"
    },
    {
      id: 6,
      name: "Spotify Premium",
      plan: "Individual",
      amount: "9.99",
      currency: "€",
      status: "expiring",
      nextBilling: "30 Mai 2025",
      billingCycle: "mensuel",
      logo: "S",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      category: "Divertissement",
      yearlyAmount: 119.88,
      trend: "-5%",
      description: "Musique en streaming illimitée"
    }
  ];

  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         sub.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || sub.status === filterStatus;
    const matchesCategory = selectedCategory === "all" || sub.category === selectedCategory;
    return matchesSearch && matchesFilter && matchesCategory;
  });

  const totalMonthly = subscriptions
    .filter(sub => sub.status === 'active')
    .reduce((sum, sub) => {
      const amount = parseFloat(sub.amount.replace(',', ''));
      return sum + (sub.billingCycle === 'mensuel' ? amount : amount / 12);
    }, 0);

  const totalYearly = subscriptions
    .filter(sub => sub.status === 'active')
    .reduce((sum, sub) => sum + sub.yearlyAmount, 0);

  const activeCount = subscriptions.filter(sub => sub.status === 'active').length;
  const pausedCount = subscriptions.filter(sub => sub.status === 'paused').length;
  const expiringCount = subscriptions.filter(sub => sub.status === 'expiring').length;

  const categories = [...new Set(subscriptions.map(sub => sub.category))];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'active':
        return { 
          icon: CheckCircle2, 
          color: 'text-green-500', 
          bgColor: 'bg-green-50', 
          label: 'Actif',
          dotColor: 'bg-green-500',
          pulse: true
        };
      case 'paused':
        return { 
          icon: Pause, 
          color: 'text-orange-500', 
          bgColor: 'bg-orange-50', 
          label: 'En pause',
          dotColor: 'bg-orange-500',
          pulse: false
        };
      case 'expiring':
        return { 
          icon: AlertCircle, 
          color: 'text-red-500', 
          bgColor: 'bg-red-50', 
          label: 'Expire bientôt',
          dotColor: 'bg-red-500',
          pulse: true
        };
      default:
        return { 
          icon: Clock, 
          color: 'text-muted-foreground', 
          bgColor: 'bg-muted', 
          label: 'Inconnu',
          dotColor: 'bg-muted-foreground',
          pulse: false
        };
    }
  };

  // Handlers for subscription actions
  const handleSettings = (subscription: any) => {
    console.log(`Ouvrir les paramètres pour ${subscription.name}`);
  };

  const handleAnalytics = (subscription: any) => {
    console.log(`Afficher les analyses pour ${subscription.name}`);
  };

  const handleToggleStatus = (subscription: any) => {
    console.log(`Basculer le statut pour ${subscription.name}`);
  };

  const handleEdit = (subscription: any) => {
    console.log(`Modifier l'abonnement ${subscription.name}`);
  };

  const handleDuplicate = (subscription: any) => {
    console.log(`Dupliquer l'abonnement ${subscription.name}`);
  };

  const handleArchive = (subscription: any) => {
    console.log(`Archiver l'abonnement ${subscription.name}`);
  };

  const handleRenew = (subscription: any) => {
    console.log(`Renouveler l'abonnement ${subscription.name}`);
  };

  const handleDelete = (subscription: any) => {
    console.log(`Supprimer l'abonnement ${subscription.name}`);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="payzoo-page-container relative z-10">
        
        {/* Enhanced header with gradient effects */}
        <div className={`mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl">
              <CreditCard className="w-8 h-8 text-background" />
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-500">Smart Management</span>
            </div>
          </div>
          <h1 className="payzoo-page-title bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Abonnements
          </h1>
          <p className="payzoo-subtitle flex items-center gap-2">
            <Brain className="w-4 h-4 text-muted-foreground" />
            Gérez tous vos services en un coup d'œil avec l'IA
          </p>
        </div>

        {/* Enhanced search and filters */}
        <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '200ms' }}>
          <div className="flex gap-4">
            <div className="payzoo-input-container flex-1 max-w-md group">
              <Search className="payzoo-input-icon text-muted-foreground group-focus-within:text-foreground transition-colors" />
              <input
                type="text"
                placeholder="Rechercher par nom ou catégorie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="payzoo-input-with-icon border-0 border-b-2 border-border focus:border-foreground focus:outline-none transition-all duration-300 bg-transparent text-foreground placeholder:text-muted-foreground rounded-none hover:border-muted-foreground"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40 bg-background border-0 border-b-2 border-border rounded-none h-auto py-4 focus:border-foreground transition-all duration-300 text-foreground hover:border-muted-foreground">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-background border border-border rounded-xl shadow-lg">
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="paused">En pause</SelectItem>
                <SelectItem value="expiring">Expirent bientôt</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Enhanced metrics with animations */}
        <div className={`payzoo-grid-4 mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '400ms' }}>
          <div className="payzoo-metric-card group hover:shadow-lg hover:shadow-foreground/5 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className="payzoo-btn-icon hover:bg-muted"
                >
                  {showAnalytics ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </Button>
              </div>
              <Sparkles className="w-4 h-4 text-green-500 animate-pulse" />
            </div>
            {showAnalytics ? (
              <>
                <div className="payzoo-subsection-title text-foreground flex items-center gap-2">
                  {totalMonthly.toFixed(0)}€
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="payzoo-body-sm text-muted-foreground">Total mensuel</div>
              </>
            ) : (
              <>
                <div className="payzoo-subsection-title text-muted-foreground">●●●</div>
                <div className="payzoo-body-sm text-muted-foreground">Total mensuel</div>
              </>
            )}
          </div>

          <div className="payzoo-metric-card group hover:shadow-lg hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="payzoo-subsection-title text-foreground flex items-center gap-2">
              {activeCount}
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
            <div className="payzoo-body-sm text-muted-foreground">Abonnements actifs</div>
          </div>

          <div className="payzoo-metric-card group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                <Pause className="w-4 h-4 text-white" />
              </div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <div className="payzoo-subsection-title text-foreground flex items-center gap-2">
              {pausedCount}
              <Clock className="w-5 h-5 text-orange-500" />
            </div>
            <div className="payzoo-body-sm text-muted-foreground">En pause</div>
          </div>

          <div className="payzoo-metric-card group hover:shadow-lg hover:shadow-red-500/10 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg">
                <AlertCircle className="w-4 h-4 text-white" />
              </div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="payzoo-subsection-title text-foreground flex items-center gap-2">
              {expiringCount}
              <Target className="w-5 h-5 text-red-500" />
            </div>
            <div className="payzoo-body-sm text-muted-foreground">À renouveler</div>
          </div>
        </div>

        {/* Enhanced category filters */}
        <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '600ms' }}>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setSelectedCategory("all")}
              className={`group px-6 py-3 text-sm font-medium transition-all duration-300 border-2 rounded-xl ${
                selectedCategory === "all" 
                  ? "border-foreground bg-foreground text-background shadow-lg shadow-foreground/20" 
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground hover:shadow-md"
              }`}
            >
              <span className="flex items-center gap-2">
                <Stars className="w-4 h-4" />
                Toutes les catégories
              </span>
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group px-6 py-3 text-sm font-medium transition-all duration-300 border-2 rounded-xl ${
                  selectedCategory === category
                    ? "border-foreground bg-foreground text-background shadow-lg shadow-foreground/20"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced subscription list */}
        <div className={`space-y-4 mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '800ms' }}>
          {filteredSubscriptions.length === 0 ? (
            <div className="py-24 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Aucun résultat trouvé</h3>
              <p className="text-muted-foreground">
                Aucun abonnement ne correspond à vos critères de recherche.
              </p>
            </div>
          ) : (
            filteredSubscriptions.map((subscription, index) => {
              const statusInfo = getStatusInfo(subscription.status);
              
              return (
                <Card 
                  key={subscription.id} 
                  className={`group border border-border hover:border-foreground/20 transition-all duration-500 hover:shadow-lg hover:shadow-foreground/5 cursor-pointer bg-card/50 backdrop-blur-sm hover:-translate-y-1 animate-fade-in`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                  onClick={() => navigate(`/subscription/${subscription.id}`)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`relative w-14 h-14 ${subscription.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <span className="font-semibold text-white text-lg">{subscription.logo}</span>
                          <div className="absolute -top-1 -right-1">
                            <div className={`w-4 h-4 ${statusInfo.dotColor} rounded-full ${statusInfo.pulse ? 'animate-pulse' : ''} border-2 border-white shadow-sm`}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h3 className="font-semibold text-foreground text-lg group-hover:text-foreground transition-colors">
                              {subscription.name}
                            </h3>
                            <Badge variant="secondary" className="text-xs font-medium bg-muted/50">
                              {subscription.plan}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Building2 className="w-3 h-3" />
                              {subscription.category}
                            </span>
                            <span className="text-muted-foreground/60">•</span>
                            <span className="italic">{subscription.description}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-8">
                        <div className="text-right space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-foreground text-xl">
                              {subscription.amount} {subscription.currency}
                            </span>
                            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                              subscription.trend.startsWith('+') 
                                ? 'bg-green-50 text-green-600' 
                                : subscription.trend.startsWith('-')
                                ? 'bg-red-50 text-red-600'
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {subscription.trend.startsWith('+') 
                                ? <TrendingUp className="w-3 h-3" />
                                : subscription.trend.startsWith('-')
                                ? <TrendingDown className="w-3 h-3" />
                                : <Activity className="w-3 h-3" />
                              }
                              {subscription.trend}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {subscription.nextBilling}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${statusInfo.bgColor} transition-all duration-300`}>
                            <statusInfo.icon className={`w-4 h-4 ${statusInfo.color}`} />
                            <span className={`text-sm font-medium ${statusInfo.color}`}>
                              {statusInfo.label}
                            </span>
                          </div>
                          
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="w-10 h-10 p-0 hover:bg-muted text-muted-foreground hover:text-foreground rounded-xl"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent 
                                align="end" 
                                className="w-56 bg-background border border-border rounded-xl shadow-xl backdrop-blur-sm"
                              >
                                <DropdownMenuItem 
                                  onClick={() => handleEdit(subscription)}
                                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                                >
                                  <Edit className="w-4 h-4" />
                                  <span>Modifier</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleDuplicate(subscription)}
                                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                                >
                                  <Copy className="w-4 h-4" />
                                  <span>Dupliquer</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleRenew(subscription)}
                                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                                >
                                  <RefreshCw className="w-4 h-4" />
                                  <span>Renouveler</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem 
                                  onClick={() => handleArchive(subscription)}
                                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-lg"
                                >
                                  <Archive className="w-4 h-4" />
                                  <span>Archiver</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleDelete(subscription)}
                                  className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  <span>Supprimer</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Enhanced add subscription */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1000ms' }}>
          <AddSubscriptionCard />
        </div>
      </div>
    </div>
  );
}
