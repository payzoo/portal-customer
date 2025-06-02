import { Building2, Plus, Clock, TrendingUp, CreditCard, Calendar, MoreVertical, Search, Filter, ArrowUpRight, Zap, AlertCircle, CheckCircle2, Pause, Play, X, Settings, Eye, BarChart3, DollarSign, Activity, Users, Edit, Trash2, Copy, Archive, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Subscriptions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
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

  // Handlers for subscription actions
  const handleSettings = (subscription: any) => {
    console.log(`Ouvrir les paramètres pour ${subscription.name}`);
    // TODO: Ouvrir un modal de paramètres
  };

  const handleAnalytics = (subscription: any) => {
    console.log(`Afficher les analyses pour ${subscription.name}`);
    // TODO: Ouvrir un modal d'analyses ou naviguer vers une page dédiée
  };

  const handleToggleStatus = (subscription: any) => {
    console.log(`Basculer le statut pour ${subscription.name}`);
    // TODO: Implémenter la logique pour activer/suspendre/reprendre l'abonnement
  };

  // New handlers for more options menu
  const handleEdit = (subscription: any) => {
    console.log(`Modifier l'abonnement ${subscription.name}`);
    // TODO: Ouvrir un modal d'édition
  };

  const handleDuplicate = (subscription: any) => {
    console.log(`Dupliquer l'abonnement ${subscription.name}`);
    // TODO: Créer une copie de l'abonnement
  };

  const handleArchive = (subscription: any) => {
    console.log(`Archiver l'abonnement ${subscription.name}`);
    // TODO: Archiver l'abonnement
  };

  const handleRenew = (subscription: any) => {
    console.log(`Renouveler l'abonnement ${subscription.name}`);
    // TODO: Renouveler l'abonnement
  };

  const handleDelete = (subscription: any) => {
    console.log(`Supprimer l'abonnement ${subscription.name}`);
    // TODO: Afficher une confirmation puis supprimer
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-extralight text-black mb-2 tracking-tight">
                Mes abonnements
              </h1>
              <p className="text-lg text-gray-600 font-light flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Gérez tous vos services en un seul endroit
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher un service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 w-full sm:w-80"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full sm:w-[200px] bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 h-12">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <SelectValue placeholder="Filtrer par statut" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                  <SelectItem value="all" className="flex items-center gap-2 py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-medium">Tous les statuts</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="active" className="flex items-center gap-2 py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="font-medium text-green-700">Actifs</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="paused" className="flex items-center gap-2 py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-medium text-yellow-700">En pause</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="expiring" className="flex items-center gap-2 py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="font-medium text-red-700">Expire bientôt</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Analytics Overview - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Total mensuel - Premium card */}
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative group animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 rounded-xl p-2 transition-all duration-300"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {showAnalytics ? (
                  <div className="animate-fade-in">
                    <div className="text-3xl font-light mb-1 text-white">
                      {totalMonthly.toFixed(2)}€
                    </div>
                    <div className="text-sm text-gray-300 font-light">Total mensuel</div>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="text-xs text-gray-400">
                        {totalYearly.toFixed(2)}€ / an
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-green-400" />
                    </div>
                  </div>
                ) : (
                  <div className="text-xl text-gray-300">●●●●</div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Services actifs */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm hover:bg-white group animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">En ligne</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light text-gray-900 mb-1 group-hover:text-black transition-colors duration-300">
                  {activeCount}
                </div>
                <div className="text-sm text-gray-500 font-light group-hover:text-gray-700 transition-colors duration-300">Services actifs</div>
                <div className="flex items-center gap-2 mt-3">
                  <Activity className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600 font-medium">+2 ce mois</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* En pause */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm hover:bg-white group animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <Pause className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-xs text-yellow-600 font-medium">Pausé</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light text-gray-900 mb-1 group-hover:text-black transition-colors duration-300">
                  {pausedCount}
                </div>
                <div className="text-sm text-gray-500 font-light group-hover:text-gray-700 transition-colors duration-300">En pause</div>
                <div className="flex items-center gap-2 mt-3">
                  <Clock className="w-3 h-3 text-yellow-500" />
                  <span className="text-xs text-yellow-600 font-medium">Économies: 45€/mois</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* À renouveler */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm hover:bg-white group animate-fade-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-red-600 font-medium">Urgent</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light text-gray-900 mb-1 group-hover:text-black transition-colors duration-300">
                  {expiringCount}
                </div>
                <div className="text-sm text-gray-500 font-light group-hover:text-gray-700 transition-colors duration-300">À renouveler</div>
                <div className="flex items-center gap-2 mt-3">
                  <Calendar className="w-3 h-3 text-red-500" />
                  <span className="text-xs text-red-600 font-medium">Dans 3 jours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres par catégorie - Updated with click functionality */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="flex flex-wrap gap-3">
            <Badge 
              variant="secondary" 
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-light cursor-pointer transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg ${
                selectedCategory === "all" 
                  ? "bg-black text-white" 
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              Toutes les catégories
            </Badge>
            {categories.map((category, index) => (
              <Badge 
                key={category}
                variant="outline" 
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-light cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in ${
                  selectedCategory === category
                    ? "bg-black text-white border-black"
                    : "border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                }`}
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Liste des abonnements */}
        <div className="space-y-4 mb-12">
          {filteredSubscriptions.length === 0 ? (
            <Card className="border-0 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="font-medium text-gray-900 text-lg mb-2">Aucun abonnement trouvé</h3>
                <p className="text-gray-500 text-sm">
                  Aucun service ne correspond à vos critères de recherche ou de filtrage.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredSubscriptions.map((subscription, index) => {
              const statusInfo = getStatusInfo(subscription.status);
              const StatusIcon = statusInfo.icon;
              
              return (
                <Card 
                  key={subscription.id} 
                  className="border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => navigate(`/subscription/${subscription.id}`)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${subscription.color} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                          <span className="font-medium text-white text-lg">{subscription.logo}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-medium text-gray-900 text-lg">{subscription.name}</h3>
                            <Badge variant="outline" className="px-2 py-0.5 rounded-lg text-xs font-light border-gray-200">
                              {subscription.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-gray-500 font-light text-sm">{subscription.plan}</p>
                            <span className="text-xs text-gray-400">•</span>
                            <p className="text-gray-500 font-light text-sm">{subscription.billingCycle}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="font-light text-gray-900 text-xl">
                              {subscription.amount} {subscription.currency}
                            </div>
                            <div className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                              subscription.trend.startsWith('+') ? 'bg-red-50 text-red-600' : 
                              subscription.trend.startsWith('-') ? 'bg-green-50 text-green-600' : 
                              'bg-gray-50 text-gray-600'
                            }`}>
                              {subscription.trend}
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 flex items-center gap-1 justify-end">
                            <Clock className="w-3 h-3" />
                            {subscription.nextBilling}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <Badge 
                            variant="secondary"
                            onClick={() => handleToggleStatus(subscription)}
                            className={`px-4 py-2 rounded-xl text-xs font-light border-0 cursor-pointer hover:scale-105 transition-all duration-200 ${statusInfo.bgColor} ${statusInfo.color}`}
                          >
                            <div className={`w-1.5 h-1.5 ${statusInfo.dotColor} rounded-full mr-2`}></div>
                            {statusInfo.label}
                          </Badge>
                          
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSettings(subscription);
                              }}
                              className="w-8 h-8 p-0 rounded-lg hover:bg-gray-50 hover:scale-110 transition-all duration-200"
                              title="Paramètres"
                            >
                              <Settings className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAnalytics(subscription);
                              }}
                              className="w-8 h-8 p-0 rounded-lg hover:bg-gray-50 hover:scale-110 transition-all duration-200"
                              title="Analyses"
                            >
                              <BarChart3 className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="w-8 h-8 p-0 rounded-lg hover:bg-gray-50 hover:scale-110 transition-all duration-200"
                                  title="Plus d'options"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <MoreVertical className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent 
                                align="end" 
                                className="w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50"
                              >
                                <DropdownMenuItem 
                                  onClick={() => handleEdit(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
                                >
                                  <Edit className="w-4 h-4 text-gray-500" />
                                  <span className="font-medium text-gray-700">Modifier</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleDuplicate(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
                                >
                                  <Copy className="w-4 h-4 text-gray-500" />
                                  <span className="font-medium text-gray-700">Dupliquer</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleRenew(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
                                >
                                  <RefreshCw className="w-4 h-4 text-blue-500" />
                                  <span className="font-medium text-blue-600">Renouveler</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="my-1 bg-gray-100" />
                                <DropdownMenuItem 
                                  onClick={() => handleArchive(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
                                >
                                  <Archive className="w-4 h-4 text-yellow-500" />
                                  <span className="font-medium text-yellow-600">Archiver</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleDelete(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-red-50 rounded-lg transition-colors duration-200 cursor-pointer"
                                >
                                  <Trash2 className="w-4 h-4 text-red-500" />
                                  <span className="font-medium text-red-600">Supprimer</span>
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

        {/* Add subscription */}
        <div className="bg-gradient-to-r from-gray-50 to-white border-2 border-dashed border-gray-200/80 rounded-2xl p-12 text-center hover:border-gray-300/80 hover:from-white hover:to-gray-50 transition-all duration-500 group cursor-pointer animate-scale-in">
          <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-lg">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-medium text-gray-900 text-lg mb-2">Ajouter un nouvel abonnement</h3>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto font-light leading-relaxed">
            Connectez facilement un nouvel service pour centraliser la gestion de tous vos abonnements
          </p>
          <Button className="bg-black text-white rounded-xl px-8 py-3 font-medium hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Plus className="w-4 h-4 mr-2" />
            Connecter un service
          </Button>
        </div>

        {/* Quick actions */}
        <div className="mt-12 flex justify-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-2xl p-1 border border-gray-100/50 shadow-lg">
            <Button variant="ghost" className="rounded-xl px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm font-light transition-all duration-200">
              <CreditCard className="w-4 h-4 mr-2" />
              Paiements
            </Button>
            <div className="w-px h-6 bg-gray-200"></div>
            <Button variant="ghost" className="rounded-xl px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm font-light transition-all duration-200">
              <Calendar className="w-4 h-4 mr-2" />
              Calendrier
            </Button>
            <div className="w-px h-6 bg-gray-200"></div>
            <Button variant="ghost" className="rounded-xl px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm font-light transition-all duration-200">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analyses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
