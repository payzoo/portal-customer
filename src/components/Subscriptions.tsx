
import { Building2, Plus, Clock, TrendingUp, CreditCard, Calendar, MoreVertical, Search, Filter, ArrowUpRight, CheckCircle2, Pause, AlertCircle, Eye, BarChart3, DollarSign, Activity, Settings, Edit, Trash2, Copy, Archive, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddSubscriptionCard } from "./AddSubscriptionCard";

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
      color: "bg-gray-900",
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
      color: "bg-gray-700",
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
      color: "bg-gray-600",
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
      color: "bg-gray-800",
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
      color: "bg-black",
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
      color: "bg-gray-500",
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
          color: 'text-gray-600', 
          bgColor: 'bg-gray-50', 
          label: 'Actif',
          dotColor: 'bg-gray-900'
        };
      case 'paused':
        return { 
          icon: Pause, 
          color: 'text-yellow-600', 
          bgColor: 'bg-yellow-50', 
          label: 'En pause',
          dotColor: 'bg-yellow-500'
        };
      case 'expiring':
        return { 
          icon: AlertCircle, 
          color: 'text-red-600', 
          bgColor: 'bg-red-50', 
          label: 'Expire bientôt',
          dotColor: 'bg-red-500'
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
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8">
        
        {/* Header ultra minimaliste */}
        <div className="mb-12">
          <h1 className="text-3xl font-light text-black mb-2 tracking-tight">
            Abonnements
          </h1>
          <p className="text-gray-500 text-sm">
            Gérez vos services en toute simplicité
          </p>
        </div>

        {/* Barre de recherche épurée */}
        <div className="mb-8">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher un service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors text-sm text-gray-900"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40 bg-white border border-gray-200 rounded-xl h-12 focus:border-black transition-colors">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg">
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="paused">En pause</SelectItem>
                <SelectItem value="expiring">Expire bientôt</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Métriques simplifiées */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className="p-1 h-auto w-auto"
                >
                  <Eye className="w-4 h-4 text-gray-400" />
                </Button>
              </div>
              <div>
                {showAnalytics ? (
                  <>
                    <div className="text-xl font-semibold text-black mb-1">
                      {totalMonthly.toFixed(0)}€
                    </div>
                    <div className="text-xs text-gray-500">Total mensuel</div>
                  </>
                ) : (
                  <>
                    <div className="text-xl text-gray-300 mb-1">●●●</div>
                    <div className="text-xs text-gray-500">Total mensuel</div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              </div>
              <div>
                <div className="text-xl font-semibold text-black mb-1">
                  {activeCount}
                </div>
                <div className="text-xs text-gray-500">Actifs</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Pause className="w-4 h-4 text-white" />
                </div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              </div>
              <div>
                <div className="text-xl font-semibold text-black mb-1">
                  {pausedCount}
                </div>
                <div className="text-xs text-gray-500">En pause</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-white" />
                </div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <div className="text-xl font-semibold text-black mb-1">
                  {expiringCount}
                </div>
                <div className="text-xs text-gray-500">À renouveler</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres par catégorie minimalistes */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === "all" 
                  ? "bg-black text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Toutes
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des abonnements ultra épurée */}
        <div className="space-y-2 mb-12">
          {filteredSubscriptions.length === 0 ? (
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-12 text-center">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="font-medium text-black mb-1">Aucun résultat</h3>
                <p className="text-gray-500 text-sm">
                  Aucun abonnement ne correspond à vos critères.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredSubscriptions.map((subscription) => {
              const statusInfo = getStatusInfo(subscription.status);
              
              return (
                <Card 
                  key={subscription.id} 
                  className="border border-gray-200 bg-white hover:border-gray-300 transition-colors cursor-pointer group"
                  onClick={() => navigate(`/subscription/${subscription.id}`)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 ${subscription.color} rounded-lg flex items-center justify-center`}>
                          <span className="font-medium text-white text-sm">{subscription.logo}</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-black text-sm mb-1">{subscription.name}</h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{subscription.plan}</span>
                            <span>•</span>
                            <span>{subscription.category}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-semibold text-black text-sm mb-1">
                            {subscription.amount} {subscription.currency}
                          </div>
                          <div className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {subscription.nextBilling}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 ${statusInfo.dotColor} rounded-full`}></div>
                          
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="w-8 h-8 p-0"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <MoreVertical className="w-4 h-4 text-gray-400" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent 
                                align="end" 
                                className="w-44 bg-white border border-gray-200 rounded-xl shadow-lg"
                              >
                                <DropdownMenuItem 
                                  onClick={() => handleEdit(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 text-sm"
                                >
                                  <Edit className="w-4 h-4" />
                                  <span>Modifier</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleDuplicate(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 text-sm"
                                >
                                  <Copy className="w-4 h-4" />
                                  <span>Dupliquer</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleRenew(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600"
                                >
                                  <RefreshCw className="w-4 h-4" />
                                  <span>Renouveler</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem 
                                  onClick={() => handleArchive(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 text-sm text-yellow-600"
                                >
                                  <Archive className="w-4 h-4" />
                                  <span>Archiver</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleDelete(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 text-sm text-red-600"
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

        {/* Ajouter un abonnement - Version ultra minimaliste */}
        <AddSubscriptionCard />
      </div>
    </div>
  );
}
