
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
      color: "bg-foreground",
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
      color: "bg-foreground",
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
      color: "bg-muted-foreground",
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
      color: "bg-foreground",
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
      color: "bg-foreground",
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
      color: "bg-muted-foreground",
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
          color: 'text-foreground', 
          bgColor: 'bg-muted', 
          label: 'Actif',
          dotColor: 'bg-foreground'
        };
      case 'paused':
        return { 
          icon: Pause, 
          color: 'text-muted-foreground', 
          bgColor: 'bg-muted', 
          label: 'En pause',
          dotColor: 'bg-muted-foreground'
        };
      case 'expiring':
        return { 
          icon: AlertCircle, 
          color: 'text-muted-foreground', 
          bgColor: 'bg-muted', 
          label: 'Expire bientôt',
          dotColor: 'bg-muted-foreground'
        };
      default:
        return { 
          icon: Clock, 
          color: 'text-muted-foreground', 
          bgColor: 'bg-muted', 
          label: 'Inconnu',
          dotColor: 'bg-muted-foreground'
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
    <div className="min-h-screen bg-background">
      <div className="payzoo-page-container">
        
        {/* Header with consistent typography */}
        <div className="mb-16">
          <h1 className="payzoo-page-title">Abonnements</h1>
          <p className="payzoo-subtitle">
            Gérez tous vos services en un coup d'œil
          </p>
        </div>

        {/* Search bar with proper alignment */}
        <div className="mb-12">
          <div className="flex gap-4">
            <div className="payzoo-input-container flex-1 max-w-md">
              <Search className="payzoo-input-icon text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="payzoo-input-with-icon border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors bg-transparent text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-32 bg-background border-0 border-b border-border rounded-none h-auto py-4 focus:border-foreground transition-colors text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border rounded-lg shadow-sm">
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="paused">Pause</SelectItem>
                <SelectItem value="expiring">Expire</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Metrics with unified card dimensions */}
        <div className="payzoo-grid-4 mb-16">
          <div className="payzoo-metric-card">
            <div className="flex items-center justify-between">
              <div className="payzoo-status-active"></div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAnalytics(!showAnalytics)}
                className="payzoo-btn-icon"
              >
                <Eye className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
            {showAnalytics ? (
              <>
                <div className="payzoo-subsection-title text-foreground">
                  {totalMonthly.toFixed(0)}€
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

          <div className="payzoo-metric-card">
            <div className="payzoo-status-active"></div>
            <div className="payzoo-subsection-title text-foreground">
              {activeCount}
            </div>
            <div className="payzoo-body-sm text-muted-foreground">Actifs</div>
          </div>

          <div className="payzoo-metric-card">
            <div className="payzoo-status-inactive"></div>
            <div className="payzoo-subsection-title text-foreground">
              {pausedCount}
            </div>
            <div className="payzoo-body-sm text-muted-foreground">En pause</div>
          </div>

          <div className="payzoo-metric-card">
            <div className="payzoo-status-inactive"></div>
            <div className="payzoo-subsection-title text-foreground">
              {expiringCount}
            </div>
            <div className="payzoo-body-sm text-muted-foreground">À renouveler</div>
          </div>
        </div>

        {/* Category filters with proper contrast */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setSelectedCategory("all")}
              className={`px-0 py-2 text-sm font-light transition-colors border-b-2 ${
                selectedCategory === "all" 
                  ? "border-foreground text-foreground" 
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Toutes
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-0 py-2 text-sm font-light transition-colors border-b-2 ${
                  selectedCategory === category
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Subscription list with proper contrast */}
        <div className="space-y-1 mb-16">
          {filteredSubscriptions.length === 0 ? (
            <div className="py-24 text-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-light text-foreground mb-2">Aucun résultat</h3>
              <p className="text-muted-foreground">
                Aucun abonnement ne correspond à vos critères.
              </p>
            </div>
          ) : (
            filteredSubscriptions.map((subscription) => {
              const statusInfo = getStatusInfo(subscription.status);
              
              return (
                <div 
                  key={subscription.id} 
                  className="group py-6 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => navigate(`/subscription/${subscription.id}`)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 ${subscription.color} rounded-lg flex items-center justify-center`}>
                        <span className="font-medium text-background">{subscription.logo}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{subscription.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{subscription.plan}</span>
                          <span>·</span>
                          <span>{subscription.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <div className="font-medium text-foreground mb-1">
                          {subscription.amount} {subscription.currency}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {subscription.nextBilling}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 ${statusInfo.dotColor} rounded-full`}></div>
                        
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="w-8 h-8 p-0 hover:bg-muted text-muted-foreground hover:text-foreground"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                              align="end" 
                              className="w-48 bg-background border border-border rounded-lg shadow-sm"
                            >
                              <DropdownMenuItem 
                                onClick={() => handleEdit(subscription)}
                                className="flex items-center gap-3 px-4 py-3 text-foreground"
                              >
                                <Edit className="w-4 h-4" />
                                <span>Modifier</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDuplicate(subscription)}
                                className="flex items-center gap-3 px-4 py-3 text-foreground"
                              >
                                <Copy className="w-4 h-4" />
                                <span>Dupliquer</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleRenew(subscription)}
                                className="flex items-center gap-3 px-4 py-3 text-foreground"
                              >
                                <RefreshCw className="w-4 h-4" />
                                <span>Renouveler</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                onClick={() => handleArchive(subscription)}
                                className="flex items-center gap-3 px-4 py-3 text-muted-foreground"
                              >
                                <Archive className="w-4 h-4" />
                                <span>Archiver</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDelete(subscription)}
                                className="flex items-center gap-3 px-4 py-3 text-muted-foreground"
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
                </div>
              );
            })
          )}
        </div>

        {/* Add subscription */}
        <AddSubscriptionCard />
      </div>
    </div>
  );
}
