
import { Building2, Plus, Clock, TrendingUp, CreditCard, Calendar, MoreVertical, Search, Filter, ArrowUpRight, CheckCircle2, Pause, AlertCircle, Eye, BarChart3, DollarSign, Activity, Settings, Edit, Trash2, Copy, Archive, RefreshCw } from "lucide-react";
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
      color: "bg-blue-600",
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
      color: "bg-green-600",
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
      color: "bg-purple-600",
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
      color: "bg-red-600",
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
      color: "bg-red-700",
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
      color: "bg-green-500",
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
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Header minimaliste */}
        <div className="mb-10">
          <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
            Abonnements
          </h1>
          <p className="text-gray-600 text-lg font-light">
            Gérez vos services facilement
          </p>
        </div>

        {/* Barre de recherche et filtres épurés */}
        <div className="mb-8">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-0 rounded-2xl shadow-sm focus:shadow-md focus:outline-none transition-all duration-300 text-gray-900"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48 bg-white border-0 rounded-2xl shadow-sm h-14 focus:shadow-md transition-all duration-300">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent className="bg-white border-0 rounded-xl shadow-lg">
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="paused">En pause</SelectItem>
                <SelectItem value="expiring">Expire bientôt</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Métriques essentielles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className="p-2"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
              <div>
                {showAnalytics ? (
                  <>
                    <div className="text-2xl font-semibold text-gray-900 mb-1">
                      {totalMonthly.toFixed(2)}€
                    </div>
                    <div className="text-sm text-gray-500">Total mensuel</div>
                  </>
                ) : (
                  <div className="text-xl text-gray-300">●●●●</div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {activeCount}
                </div>
                <div className="text-sm text-gray-500">Actifs</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <Pause className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {pausedCount}
                </div>
                <div className="text-sm text-gray-500">En pause</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {expiringCount}
                </div>
                <div className="text-sm text-gray-500">À renouveler</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres par catégorie simplifiés */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant="secondary" 
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ${
                selectedCategory === "all" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Toutes
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="outline" 
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Liste des abonnements épurée */}
        <div className="space-y-3 mb-12">
          {filteredSubscriptions.length === 0 ? (
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-12 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Aucun résultat</h3>
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
                  className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate(`/subscription/${subscription.id}`)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${subscription.color} rounded-xl flex items-center justify-center`}>
                          <span className="font-medium text-white text-lg">{subscription.logo}</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 text-lg mb-1">{subscription.name}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span>{subscription.plan}</span>
                            <span>•</span>
                            <span>{subscription.category}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="font-medium text-gray-900 text-xl mb-1">
                            {subscription.amount} {subscription.currency}
                          </div>
                          <div className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {subscription.nextBilling}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Badge 
                            className={`px-3 py-1 rounded-lg text-xs ${statusInfo.bgColor} ${statusInfo.color} border-0`}
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
                              className="w-8 h-8 p-0 rounded-lg"
                            >
                              <Settings className="w-4 h-4 text-gray-400" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="w-8 h-8 p-0 rounded-lg"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <MoreVertical className="w-4 h-4 text-gray-400" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent 
                                align="end" 
                                className="w-48 bg-white border-0 rounded-xl shadow-lg"
                              >
                                <DropdownMenuItem 
                                  onClick={() => handleEdit(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                                >
                                  <Edit className="w-4 h-4 text-gray-500" />
                                  <span>Modifier</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleDuplicate(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                                >
                                  <Copy className="w-4 h-4 text-gray-500" />
                                  <span>Dupliquer</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleRenew(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                                >
                                  <RefreshCw className="w-4 h-4 text-blue-500" />
                                  <span className="text-blue-600">Renouveler</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem 
                                  onClick={() => handleArchive(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                                >
                                  <Archive className="w-4 h-4 text-yellow-500" />
                                  <span className="text-yellow-600">Archiver</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleDelete(subscription)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-red-50 rounded-lg"
                                >
                                  <Trash2 className="w-4 h-4 text-red-500" />
                                  <span className="text-red-600">Supprimer</span>
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

        {/* Ajouter un abonnement - Version minimaliste */}
        <Card className="border-2 border-dashed border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-white transition-all duration-300 cursor-pointer">
          <CardContent className="p-8 text-center">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Ajouter un abonnement</h3>
            <p className="text-gray-500 text-sm mb-6">
              Connectez un nouveau service
            </p>
            <Button className="bg-gray-900 text-white rounded-xl hover:bg-gray-800">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
