import { Building2, Plus, Clock, TrendingUp, TrendingDown, CreditCard, Calendar, MoreVertical, Search, Filter, ArrowUpRight, CheckCircle2, Pause, AlertCircle, Eye, EyeOff, DollarSign, Activity, Settings, Edit, Trash2, Copy, Archive, RefreshCw, Brain, Stars, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Subscriptions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAnalytics, setShowAnalytics] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
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
      color: "bg-gradient-to-br from-violet-500 to-purple-600",
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
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
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
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
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
      color: "bg-gradient-to-br from-rose-500 to-pink-600",
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
      color: "bg-gradient-to-br from-red-500 to-orange-600",
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
      color: "bg-gradient-to-br from-amber-500 to-yellow-600",
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

  const activeCount = subscriptions.filter(sub => sub.status === 'active').length;
  const pausedCount = subscriptions.filter(sub => sub.status === 'paused').length;
  const expiringCount = subscriptions.filter(sub => sub.status === 'expiring').length;

  const categories = [...new Set(subscriptions.map(sub => sub.category))];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'active':
        return { 
          icon: CheckCircle2, 
          color: 'text-emerald-600', 
          bgColor: 'bg-emerald-50 border-emerald-200', 
          label: 'Actif',
          dotColor: 'bg-emerald-500'
        };
      case 'paused':
        return { 
          icon: Pause, 
          color: 'text-amber-600', 
          bgColor: 'bg-amber-50 border-amber-200', 
          label: 'En pause',
          dotColor: 'bg-amber-500'
        };
      case 'expiring':
        return { 
          icon: AlertCircle, 
          color: 'text-red-600', 
          bgColor: 'bg-red-50 border-red-200', 
          label: 'Expire bientôt',
          dotColor: 'bg-red-500'
        };
      default:
        return { 
          icon: Clock, 
          color: 'text-slate-600', 
          bgColor: 'bg-slate-50 border-slate-200', 
          label: 'Inconnu',
          dotColor: 'bg-slate-500'
        };
    }
  };

  const handleCardClick = (subscriptionId: number) => {
    navigate(`/subscription/${subscriptionId}`);
  };

  const handleDropdownAction = (action: string, subscriptionId: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(`Action ${action} pour l'abonnement ${subscriptionId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-20 left-10 w-20 h-20 border border-violet-200 rounded-2xl rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 border border-blue-200 rounded-xl -rotate-12 animate-[float_10s_ease-in-out_infinite_3s]"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-emerald-200 rounded-full animate-[float_6s_ease-in-out_infinite_1s]"></div>
      </div>

      <div className="relative z-10 payzoo-page-container">
        
        {/* Modernized header */}
        <div className={`mb-12 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-1 rounded-full">SMART</span>
                    <span className="text-xs text-muted-foreground">Gestion intelligente</span>
                  </div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Abonnements
                  </h1>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">Optimisez vos dépenses récurrentes</p>
            </div>
            
            <Button className="group bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-6">
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              Ajouter
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Streamlined search and filters */}
        <div className={`mb-8 transition-all duration-500 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex gap-3">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 pl-12 pr-4 bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-100 transition-all duration-300 text-foreground placeholder:text-muted-foreground shadow-sm"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-44 h-12 bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl focus:border-violet-300 shadow-sm">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-violet-500" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl">
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="paused">En pause</SelectItem>
                <SelectItem value="expiring">Expirent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Enhanced metrics cards */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="relative p-6 bg-white/80 backdrop-blur-sm border border-border/50 hover:border-violet-200 transition-all duration-300 hover:shadow-lg group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-violet-600" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className="w-8 h-8 p-0 hover:bg-violet-100 rounded-lg"
                >
                  {showAnalytics ? <Eye className="w-4 h-4 text-violet-600" /> : <EyeOff className="w-4 h-4 text-muted-foreground" />}
                </Button>
              </div>
              {showAnalytics ? (
                <>
                  <div className="text-2xl font-bold text-foreground mb-1">{totalMonthly.toFixed(0)}€</div>
                  <div className="text-sm text-muted-foreground">Coût mensuel</div>
                </>
              ) : (
                <>
                  <div className="text-2xl font-bold text-muted-foreground mb-1">●●●</div>
                  <div className="text-sm text-muted-foreground">Coût mensuel</div>
                </>
              )}
            </div>
          </Card>

          <Card className="relative p-6 bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-emerald-200 transition-all duration-300 hover:shadow-lg group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{activeCount}</div>
              <div className="text-sm text-muted-foreground">Services actifs</div>
            </div>
          </Card>

          <Card className="relative p-6 bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-amber-200 transition-all duration-300 hover:shadow-lg group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <Pause className="w-5 h-5 text-amber-600" />
                </div>
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{pausedCount}</div>
              <div className="text-sm text-muted-foreground">En pause</div>
            </div>
          </Card>

          <Card className="relative p-6 bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-red-200 transition-all duration-300 hover:shadow-lg group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-rose-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{expiringCount}</div>
              <div className="text-sm text-muted-foreground">À renouveler</div>
            </div>
          </Card>
        </div>

        {/* Minimalist category filters */}
        <div className={`mb-8 transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl ${
                selectedCategory === "all" 
                  ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg" 
                  : "bg-white/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:border-violet-200 hover:text-violet-600 hover:bg-violet-50"
              }`}
            >
              <Stars className="w-3 h-3 inline mr-1.5" />
              Toutes
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                    : "bg-white/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:border-violet-200 hover:text-violet-600 hover:bg-violet-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Redesigned subscription cards with modern spacing */}
        <div className={`space-y-4 transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {filteredSubscriptions.length === 0 ? (
            <div className="py-20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-violet-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Aucun résultat</h3>
              <p className="text-muted-foreground max-w-md mx-auto">Aucun abonnement ne correspond à vos critères de recherche.</p>
            </div>
          ) : (
            filteredSubscriptions.map((subscription, index) => {
              const statusInfo = getStatusInfo(subscription.status);
              
              return (
                <Card 
                  key={subscription.id} 
                  className="group relative bg-white/80 backdrop-blur-sm border border-border/50 hover:border-violet-200 transition-all duration-300 hover:shadow-xl cursor-pointer rounded-2xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                  onClick={() => handleCardClick(subscription.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-50/0 via-violet-50/20 to-purple-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="relative p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`relative w-12 h-12 ${subscription.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <span className="font-bold text-white text-lg">{subscription.logo}</span>
                          <div className="absolute -top-1 -right-1">
                            <div className={`w-3 h-3 ${statusInfo.dotColor} rounded-full border-2 border-white shadow-sm`}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-violet-700 transition-colors">
                              {subscription.name}
                            </h3>
                            <Badge variant="secondary" className="text-xs bg-violet-50 text-violet-600 border-violet-200">
                              {subscription.plan}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Building2 className="w-4 h-4" />
                              {subscription.category}
                            </span>
                            <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                            <span className="italic">{subscription.description}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-right space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="text-xl font-bold text-foreground">
                              {subscription.amount} {subscription.currency}
                            </span>
                            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                              subscription.trend.startsWith('+') 
                                ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                                : subscription.trend.startsWith('-')
                                ? 'bg-red-50 text-red-600 border border-red-200'
                                : 'bg-slate-50 text-slate-600 border border-slate-200'
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
                          <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            Prochain: {subscription.nextBilling}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-300 ${statusInfo.bgColor}`}>
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
                                  className="w-10 h-10 p-0 hover:bg-violet-100 rounded-xl transition-colors"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }}
                                >
                                  <MoreVertical className="w-5 h-5 text-muted-foreground" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent 
                                align="end" 
                                className="w-48 bg-white/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <DropdownMenuItem 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer hover:bg-violet-50 transition-colors rounded-lg m-1"
                                  onClick={(e) => handleDropdownAction('edit', subscription.id, e)}
                                >
                                  <Edit className="w-4 h-4 text-violet-600" />
                                  Modifier
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer hover:bg-violet-50 transition-colors rounded-lg m-1"
                                  onClick={(e) => handleDropdownAction('duplicate', subscription.id, e)}
                                >
                                  <Copy className="w-4 h-4 text-violet-600" />
                                  Dupliquer
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer hover:bg-violet-50 transition-colors rounded-lg m-1"
                                  onClick={(e) => handleDropdownAction('renew', subscription.id, e)}
                                >
                                  <RefreshCw className="w-4 h-4 text-violet-600" />
                                  Renouveler
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="my-1 h-px bg-border/50" />
                                <DropdownMenuItem 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground cursor-pointer hover:bg-slate-50 transition-colors rounded-lg m-1"
                                  onClick={(e) => handleDropdownAction('archive', subscription.id, e)}
                                >
                                  <Archive className="w-4 h-4" />
                                  Archiver
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-red-600 cursor-pointer hover:bg-red-50 transition-colors rounded-lg m-1"
                                  onClick={(e) => handleDropdownAction('delete', subscription.id, e)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                  Supprimer
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
      </div>
    </div>
  );
}
