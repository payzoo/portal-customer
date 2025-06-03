
import { Building2, Plus, Clock, TrendingUp, TrendingDown, CreditCard, Calendar, MoreVertical, Search, Filter, ArrowUpRight, CheckCircle2, Pause, AlertCircle, Eye, EyeOff, BarChart3, DollarSign, Activity, Settings, Edit, Trash2, Copy, Archive, RefreshCw, Brain, Stars } from "lucide-react";
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

  const handleDropdownAction = (action: string, subscriptionId: number) => {
    console.log(`Action ${action} pour l'abonnement ${subscriptionId}`);
    // Ici vous pourrez ajouter la logique pour chaque action
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Geometric floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-border/20 rounded-3xl rotate-12 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-border/30 rounded-2xl -rotate-12 animate-[float_8s_ease-in-out_infinite] opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-border/25 rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-32 right-1/3 w-20 h-20 border border-border/20 rounded-full animate-[float_9s_ease-in-out_infinite] opacity-40" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="payzoo-page-container relative z-10">
        
        {/* Header section optimized */}
        <div className={`mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-foreground rounded-lg shadow-sm">
                  <CreditCard className="w-5 h-5 text-background" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-600">Smart Management</span>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-1">Abonnements</h1>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Gérez tous vos services intelligemment
                </p>
              </div>
            </div>
            
            <Button 
              className="group bg-foreground hover:bg-foreground/90 text-background px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              Nouvel abonnement
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Search and filters optimized */}
        <div className={`mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '100ms' }}>
          <div className="flex gap-4">
            <div className="relative flex-1 max-w-md group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-foreground transition-colors" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-background border border-border rounded-lg focus:border-foreground focus:outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground hover:border-muted-foreground"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40 h-10 bg-background border border-border rounded-lg focus:border-foreground transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="z-50 bg-background border border-border rounded-lg shadow-xl">
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="paused">En pause</SelectItem>
                <SelectItem value="expiring">Expirent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Metrics cards optimized */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '200ms' }}>
          <Card className="p-4 border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <DollarSign className="w-4 h-4 text-emerald-600" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAnalytics(!showAnalytics)}
                className="w-7 h-7 p-0 hover:bg-muted rounded-md"
              >
                {showAnalytics ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              </Button>
            </div>
            {showAnalytics ? (
              <>
                <div className="text-xl font-bold text-foreground">{totalMonthly.toFixed(0)}€</div>
                <div className="text-sm text-muted-foreground">Total mensuel</div>
              </>
            ) : (
              <>
                <div className="text-xl font-bold text-muted-foreground">●●●</div>
                <div className="text-sm text-muted-foreground">Total mensuel</div>
              </>
            )}
          </Card>

          <Card className="p-4 border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="w-4 h-4 text-blue-600" />
              </div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xl font-bold text-foreground">{activeCount}</div>
            <div className="text-sm text-muted-foreground">Actifs</div>
          </Card>

          <Card className="p-4 border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Pause className="w-4 h-4 text-amber-600" />
              </div>
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div className="text-xl font-bold text-foreground">{pausedCount}</div>
            <div className="text-sm text-muted-foreground">En pause</div>
          </Card>

          <Card className="p-4 border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="w-4 h-4 text-red-600" />
              </div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xl font-bold text-foreground">{expiringCount}</div>
            <div className="text-sm text-muted-foreground">À renouveler</div>
          </Card>
        </div>

        {/* Category filters optimized */}
        <div className={`mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '300ms' }}>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                selectedCategory === "all" 
                  ? "bg-foreground text-background shadow-sm" 
                  : "bg-background border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              <Stars className="w-3 h-3 inline mr-1" />
              Toutes
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                  selectedCategory === category
                    ? "bg-foreground text-background shadow-sm"
                    : "bg-background border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Subscription list optimized */}
        <div className={`space-y-3 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '400ms' }}>
          {filteredSubscriptions.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-1">Aucun résultat</h3>
              <p className="text-muted-foreground">Aucun abonnement ne correspond à vos critères.</p>
            </div>
          ) : (
            filteredSubscriptions.map((subscription, index) => {
              const statusInfo = getStatusInfo(subscription.status);
              
              return (
                <Card 
                  key={subscription.id} 
                  className="group border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-md cursor-pointer bg-background hover:-translate-y-0.5 animate-fade-in"
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                  onClick={() => handleCardClick(subscription.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`relative w-10 h-10 ${subscription.color} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                          <span className="font-bold text-white text-sm">{subscription.logo}</span>
                          <div className="absolute -top-0.5 -right-0.5">
                            <div className={`w-2.5 h-2.5 ${statusInfo.dotColor} rounded-full border border-white shadow-sm`}></div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                              {subscription.name}
                            </h3>
                            <Badge variant="secondary" className="text-xs bg-muted/80 px-2 py-0.5">
                              {subscription.plan}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Building2 className="w-3 h-3" />
                              {subscription.category}
                            </span>
                            <span>•</span>
                            <span className="italic">{subscription.description}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-foreground">
                              {subscription.amount} {subscription.currency}
                            </span>
                            <div className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${
                              subscription.trend.startsWith('+') 
                                ? 'bg-emerald-50 text-emerald-600' 
                                : subscription.trend.startsWith('-')
                                ? 'bg-red-50 text-red-600'
                                : 'bg-slate-50 text-slate-600'
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
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {subscription.nextBilling}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className={`flex items-center gap-2 px-2 py-1 rounded-lg border transition-all duration-300 ${statusInfo.bgColor}`}>
                            <statusInfo.icon className={`w-3 h-3 ${statusInfo.color}`} />
                            <span className={`text-xs font-medium ${statusInfo.color}`}>
                              {statusInfo.label}
                            </span>
                          </div>
                          
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="w-7 h-7 p-0 hover:bg-muted rounded-md"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <MoreVertical className="w-3 h-3" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent 
                                align="end" 
                                className="w-44 z-50 bg-background border border-border rounded-lg shadow-xl"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <DropdownMenuItem 
                                  className="flex items-center gap-2 px-3 py-2 rounded cursor-pointer"
                                  onClick={() => handleDropdownAction('edit', subscription.id)}
                                >
                                  <Edit className="w-3 h-3" />
                                  Modifier
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="flex items-center gap-2 px-3 py-2 rounded cursor-pointer"
                                  onClick={() => handleDropdownAction('duplicate', subscription.id)}
                                >
                                  <Copy className="w-3 h-3" />
                                  Dupliquer
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="flex items-center gap-2 px-3 py-2 rounded cursor-pointer"
                                  onClick={() => handleDropdownAction('renew', subscription.id)}
                                >
                                  <RefreshCw className="w-3 h-3" />
                                  Renouveler
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem 
                                  className="flex items-center gap-2 px-3 py-2 text-muted-foreground rounded cursor-pointer"
                                  onClick={() => handleDropdownAction('archive', subscription.id)}
                                >
                                  <Archive className="w-3 h-3" />
                                  Archiver
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="flex items-center gap-2 px-3 py-2 text-red-500 rounded cursor-pointer"
                                  onClick={() => handleDropdownAction('delete', subscription.id)}
                                >
                                  <Trash2 className="w-3 h-3" />
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
