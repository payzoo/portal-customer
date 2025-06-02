
import { Building2, Plus, Clock, TrendingUp, CreditCard, Calendar, MoreVertical, Search, Filter, ArrowUpRight, Zap, AlertCircle, CheckCircle2, Pause, Play, X, Settings, Eye, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function Subscriptions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAnalytics, setShowAnalytics] = useState(true);

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
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      category: "Développement",
      yearlyAmount: 600,
      trend: "+5%"
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
      trend: "0%"
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
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      category: "Finance",
      yearlyAmount: 1793.97,
      trend: "-12%"
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
      color: "bg-gradient-to-br from-red-500 to-pink-600",
      category: "Design",
      yearlyAmount: 719.88,
      trend: "+2%"
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
      color: "bg-gradient-to-br from-red-600 to-red-700",
      category: "Divertissement",
      yearlyAmount: 185.88,
      trend: "+8%"
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
      color: "bg-gradient-to-br from-green-400 to-green-500",
      category: "Divertissement",
      yearlyAmount: 119.88,
      trend: "-5%"
    }
  ];

  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         sub.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || sub.status === filterStatus;
    return matchesSearch && matchesFilter;
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
          color: 'text-emerald-600', 
          bgColor: 'bg-emerald-50', 
          label: 'Actif',
          dotColor: 'bg-emerald-500',
          borderColor: 'border-emerald-200'
        };
      case 'paused':
        return { 
          icon: Pause, 
          color: 'text-amber-600', 
          bgColor: 'bg-amber-50', 
          label: 'En pause',
          dotColor: 'bg-amber-500',
          borderColor: 'border-amber-200'
        };
      case 'expiring':
        return { 
          icon: AlertCircle, 
          color: 'text-rose-600', 
          bgColor: 'bg-rose-50', 
          label: 'Expire bientôt',
          dotColor: 'bg-rose-500',
          borderColor: 'border-rose-200'
        };
      default:
        return { 
          icon: Clock, 
          color: 'text-slate-600', 
          bgColor: 'bg-slate-50', 
          label: 'Inconnu',
          dotColor: 'bg-slate-500',
          borderColor: 'border-slate-200'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header optimisé */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-extralight text-slate-900 tracking-tight">
                Mes abonnements
              </h1>
              <p className="text-lg text-slate-600 font-light flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Gérez tous vos services en un seul endroit
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 transition-colors group-focus-within:text-slate-600" />
                <input
                  type="text"
                  placeholder="Rechercher un service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all duration-300 w-full sm:w-80 shadow-sm hover:shadow-md"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <option value="all">Tous les statuts</option>
                <option value="active">Actifs</option>
                <option value="paused">En pause</option>
                <option value="expiring">Expire bientôt</option>
              </select>
            </div>
          </div>
        </div>

        {/* Analytics Overview - Compact et moderne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 animate-slide-in-right">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-7 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center ring-1 ring-white/20">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className="text-slate-300 hover:text-white hover:bg-white/10 rounded-xl p-2 transition-all duration-300"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
              {showAnalytics ? (
                <div className="animate-fade-in space-y-1">
                  <div className="text-3xl font-light tracking-tight">
                    {totalMonthly.toFixed(2)}€
                  </div>
                  <div className="text-sm text-slate-300 font-medium">Total mensuel</div>
                  <div className="text-xs text-slate-400">
                    {totalYearly.toFixed(2)}€ / an
                  </div>
                </div>
              ) : (
                <div className="text-2xl text-slate-300">●●●●</div>
              )}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white/70 backdrop-blur-sm">
            <CardContent className="p-7">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-light text-slate-900 tracking-tight">
                  {activeCount}
                </div>
                <div className="text-sm text-slate-600 font-medium">Services actifs</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white/70 backdrop-blur-sm">
            <CardContent className="p-7">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                  <Pause className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-light text-slate-900 tracking-tight">
                  {pausedCount}
                </div>
                <div className="text-sm text-slate-600 font-medium">En pause</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white/70 backdrop-blur-sm">
            <CardContent className="p-7">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/25">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-light text-slate-900 tracking-tight">
                  {expiringCount}
                </div>
                <div className="text-sm text-slate-600 font-medium">À renouveler</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-wrap gap-3">
            <Badge 
              variant="secondary" 
              className="px-6 py-3 rounded-2xl text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Toutes les catégories
            </Badge>
            {categories.map((category, index) => (
              <Badge 
                key={category}
                variant="outline" 
                className="px-6 py-3 rounded-2xl text-sm font-medium border-slate-200/60 hover:bg-slate-50 hover:border-slate-300 cursor-pointer transition-all duration-300 hover:scale-105 bg-white/60 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Liste des abonnements - Cards modernes */}
        <div className="space-y-4 mb-12">
          {filteredSubscriptions.map((subscription, index) => {
            const statusInfo = getStatusInfo(subscription.status);
            const StatusIcon = statusInfo.icon;
            
            return (
              <Card 
                key={subscription.id} 
                className="border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group cursor-pointer animate-fade-in hover:scale-[1.01] shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`relative w-16 h-16 ${subscription.color} rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                        <span className="font-semibold text-white text-xl">{subscription.logo}</span>
                        <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-4">
                          <h3 className="font-semibold text-slate-900 text-xl group-hover:text-slate-800 transition-colors duration-300">{subscription.name}</h3>
                          <Badge variant="outline" className="px-3 py-1.5 rounded-xl text-xs font-medium border-slate-200/60 bg-slate-50/60 text-slate-600">
                            {subscription.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 text-slate-500">
                          <p className="font-medium text-sm">{subscription.plan}</p>
                          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                          <p className="font-medium text-sm capitalize">{subscription.billingCycle}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div className="text-right space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="font-light text-slate-900 text-2xl tracking-tight">
                            {subscription.amount} {subscription.currency}
                          </div>
                          <div className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                            subscription.trend.startsWith('+') ? 'bg-rose-100 text-rose-700 hover:bg-rose-200' : 
                            subscription.trend.startsWith('-') ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : 
                            'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}>
                            {subscription.trend}
                          </div>
                        </div>
                        <div className="text-sm text-slate-400 flex items-center gap-2 justify-end">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="font-medium">{subscription.nextBilling}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <Badge 
                          variant="secondary"
                          className={`px-5 py-2.5 rounded-2xl text-sm font-medium border-0 ${statusInfo.bgColor} ${statusInfo.color} ${statusInfo.borderColor} transition-all duration-300 hover:scale-105`}
                        >
                          <div className={`w-2 h-2 ${statusInfo.dotColor} rounded-full mr-3 animate-pulse`}></div>
                          {statusInfo.label}
                        </Badge>
                        
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-2xl hover:bg-slate-100/80 transition-all duration-300 hover:scale-110">
                            <Settings className="w-4 h-4 text-slate-400 hover:text-slate-600 transition-colors duration-300" />
                          </Button>
                          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-2xl hover:bg-slate-100/80 transition-all duration-300 hover:scale-110">
                            <BarChart3 className="w-4 h-4 text-slate-400 hover:text-slate-600 transition-colors duration-300" />
                          </Button>
                          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-2xl hover:bg-slate-100/80 transition-all duration-300 hover:scale-110">
                            <MoreVertical className="w-4 h-4 text-slate-400 hover:text-slate-600 transition-colors duration-300" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add subscription - Moderne */}
        <div className="bg-gradient-to-br from-slate-50/80 to-white/80 backdrop-blur-sm border-2 border-dashed border-slate-200/60 rounded-3xl p-16 text-center hover:border-slate-300/80 hover:from-white/90 hover:to-slate-50/90 transition-all duration-700 group cursor-pointer animate-scale-in">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
            <Plus className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-semibold text-slate-900 text-xl mb-3">Ajouter un nouvel abonnement</h3>
          <p className="text-slate-600 text-base mb-10 max-w-lg mx-auto font-medium leading-relaxed">
            Connectez facilement un nouvel service pour centraliser la gestion de tous vos abonnements
          </p>
          <Button className="bg-slate-900 text-white rounded-2xl px-10 py-4 font-semibold hover:bg-slate-800 hover:shadow-xl transition-all duration-500 hover:scale-105 text-base">
            <Plus className="w-5 h-5 mr-3" />
            Connecter un service
          </Button>
        </div>

        {/* Quick actions - Moderne */}
        <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-100/50 shadow-lg">
            <Button variant="ghost" className="rounded-xl px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium transition-all duration-300 hover:scale-105">
              <CreditCard className="w-4 h-4 mr-3" />
              Paiements
            </Button>
            <div className="w-px h-6 bg-slate-200"></div>
            <Button variant="ghost" className="rounded-xl px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium transition-all duration-300 hover:scale-105">
              <Calendar className="w-4 h-4 mr-3" />
              Calendrier
            </Button>
            <div className="w-px h-6 bg-slate-200"></div>
            <Button variant="ghost" className="rounded-xl px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium transition-all duration-300 hover:scale-105">
              <BarChart3 className="w-4 h-4 mr-3" />
              Analyses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
