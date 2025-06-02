
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
          color: 'text-green-600', 
          bgColor: 'bg-green-50', 
          label: 'Actif',
          dotColor: 'bg-green-400'
        };
      case 'paused':
        return { 
          icon: Pause, 
          color: 'text-yellow-600', 
          bgColor: 'bg-yellow-50', 
          label: 'En pause',
          dotColor: 'bg-yellow-400'
        };
      case 'expiring':
        return { 
          icon: AlertCircle, 
          color: 'text-red-600', 
          bgColor: 'bg-red-50', 
          label: 'Expire bientôt',
          dotColor: 'bg-red-400'
        };
      default:
        return { 
          icon: Clock, 
          color: 'text-gray-600', 
          bgColor: 'bg-gray-50', 
          label: 'Inconnu',
          dotColor: 'bg-gray-400'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        
        {/* Header avec recherche et filtres */}
        <div className="mb-12 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-5xl font-extralight text-black mb-2 tracking-tight">
                Mes abonnements
              </h1>
              <p className="text-xl text-gray-600 font-light flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Gérez tous vos services en un seul endroit
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 w-full sm:w-80"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-6 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
              >
                <option value="all">Tous les statuts</option>
                <option value="active">Actifs</option>
                <option value="paused">En pause</option>
                <option value="expiring">Expire bientôt</option>
              </select>
            </div>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-in-right">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-black to-gray-800 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 rounded-xl p-2"
                >
                  {showAnalytics ? <Eye className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              {showAnalytics ? (
                <div className="animate-fade-in">
                  <div className="text-3xl font-light mb-2">
                    {totalMonthly.toFixed(2)}€
                  </div>
                  <div className="text-sm text-gray-300 font-light">Total mensuel</div>
                  <div className="text-xs text-gray-400 mt-2">
                    {totalYearly.toFixed(2)}€ / an
                  </div>
                </div>
              ) : (
                <div className="text-lg text-gray-300">●●●●</div>
              )}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-light text-gray-900 mb-2">
                {activeCount}
              </div>
              <div className="text-sm text-gray-500 font-light">Services actifs</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <Pause className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-light text-gray-900 mb-2">
                {pausedCount}
              </div>
              <div className="text-sm text-gray-500 font-light">En pause</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-2xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-light text-gray-900 mb-2">
                {expiringCount}
              </div>
              <div className="text-sm text-gray-500 font-light">À renouveler</div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-wrap gap-3">
            <Badge 
              variant="secondary" 
              className="px-6 py-3 rounded-2xl text-sm font-light bg-black text-white hover:bg-gray-800 cursor-pointer transition-all duration-300"
            >
              Toutes les catégories
            </Badge>
            {categories.map((category, index) => (
              <Badge 
                key={category}
                variant="outline" 
                className="px-6 py-3 rounded-2xl text-sm font-light border-gray-200 hover:bg-gray-50 cursor-pointer transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Liste des abonnements */}
        <div className="space-y-4 mb-16">
          {filteredSubscriptions.map((subscription, index) => {
            const statusInfo = getStatusInfo(subscription.status);
            const StatusIcon = statusInfo.icon;
            
            return (
              <Card 
                key={subscription.id} 
                className="border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 ${subscription.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <span className="font-medium text-white text-xl">{subscription.logo}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium text-gray-900 text-xl">{subscription.name}</h3>
                          <Badge variant="outline" className="px-3 py-1 rounded-xl text-xs font-light border-gray-200">
                            {subscription.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-gray-500 font-light">{subscription.plan}</p>
                          <span className="text-xs text-gray-400">•</span>
                          <p className="text-gray-500 font-light text-sm">{subscription.billingCycle}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="font-light text-gray-900 text-2xl">
                            {subscription.amount} {subscription.currency}
                          </div>
                          <div className={`px-2 py-1 rounded-lg text-xs font-medium ${
                            subscription.trend.startsWith('+') ? 'bg-red-50 text-red-600' : 
                            subscription.trend.startsWith('-') ? 'bg-green-50 text-green-600' : 
                            'bg-gray-50 text-gray-600'
                          }`}>
                            {subscription.trend}
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 flex items-center gap-2 justify-end">
                          <Clock className="w-3 h-3" />
                          {subscription.nextBilling}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <Badge 
                          variant="secondary"
                          className={`px-6 py-2.5 rounded-2xl text-sm font-light border-0 ${statusInfo.bgColor} ${statusInfo.color}`}
                        >
                          <div className={`w-2 h-2 ${statusInfo.dotColor} rounded-full mr-3`}></div>
                          {statusInfo.label}
                        </Badge>
                        
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-xl hover:bg-gray-50">
                            <Settings className="w-4 h-4 text-gray-400" />
                          </Button>
                          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-xl hover:bg-gray-50">
                            <BarChart3 className="w-4 h-4 text-gray-400" />
                          </Button>
                          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-xl hover:bg-gray-50">
                            <MoreVertical className="w-4 h-4 text-gray-400" />
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

        {/* Add subscription - Enhanced CTA */}
        <div className="bg-gradient-to-r from-gray-50 to-white border-2 border-dashed border-gray-200/80 rounded-3xl p-20 text-center hover:border-gray-300/80 hover:from-white hover:to-gray-50 transition-all duration-500 group cursor-pointer animate-scale-in">
          <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
            <Plus className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-medium text-gray-900 text-xl mb-3">Ajouter un nouvel abonnement</h3>
          <p className="text-gray-500 text-base mb-10 max-w-md mx-auto font-light leading-relaxed">
            Connectez facilement un nouvel service pour centraliser la gestion de tous vos abonnements
          </p>
          <Button className="bg-black text-white rounded-2xl px-10 py-4 font-medium hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Plus className="w-5 h-5 mr-3" />
            Connecter un service
          </Button>
        </div>

        {/* Quick actions améliorées */}
        <div className="mt-20 flex justify-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-100/50 shadow-lg">
            <Button variant="ghost" className="rounded-xl px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm font-light transition-all duration-200">
              <CreditCard className="w-4 h-4 mr-2" />
              Gérer paiements
            </Button>
            <div className="w-px h-6 bg-gray-200"></div>
            <Button variant="ghost" className="rounded-xl px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm font-light transition-all duration-200">
              <Calendar className="w-4 h-4 mr-2" />
              Calendrier facturation
            </Button>
            <div className="w-px h-6 bg-gray-200"></div>
            <Button variant="ghost" className="rounded-xl px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm font-light transition-all duration-200">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analyser dépenses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
