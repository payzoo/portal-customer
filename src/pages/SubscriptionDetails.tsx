import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Calendar, CheckCircle2, Download, Settings, Pause, Eye, EyeOff, TrendingUp, DollarSign, BarChart3, Zap, Shield, RefreshCw, Star, Sparkles, Activity, Brain, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SubscriptionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mock data
  const subscription = {
    id: 1,
    name: "StackBlitz Inc",
    plan: "Pro",
    amount: "50.00",
    currency: "$",
    status: "active",
    nextBilling: "15 Juin 2025",
    billingCycle: "mensuel",
    logo: "S",
    color: "from-violet-500 to-purple-600",
    category: "Développement",
    yearlyAmount: 600,
    startDate: "15 Janvier 2024",
    description: "Plan professionnel avec fonctionnalités avancées",
    features: ["API illimitée", "Support prioritaire", "Analytics avancées", "Collaborateurs illimités"],
    performance: { growth: "+15%", usage: "87%", efficiency: "94%" }
  };

  const paymentMethod = {
    type: "Visa",
    last4: "4242",
    expiry: "12/27",
    isDefault: true
  };

  const paymentHistory = [
    {
      id: 1,
      date: "15 Mai 2025",
      amount: "50.00",
      status: "paid",
      invoice: "INV-2025-001",
      description: "Abonnement Pro - Mai 2025"
    },
    {
      id: 2,
      date: "15 Avril 2025",
      amount: "50.00",
      status: "paid",
      invoice: "INV-2025-002",
      description: "Abonnement Pro - Avril 2025"
    },
    {
      id: 3,
      date: "15 Mars 2025",
      amount: "50.00",
      status: "paid",
      invoice: "INV-2025-003",
      description: "Abonnement Pro - Mars 2025"
    },
    {
      id: 4,
      date: "15 Février 2025",
      amount: "50.00",
      status: "failed",
      invoice: "INV-2025-004",
      description: "Abonnement Pro - Février 2025"
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      paused: 'bg-amber-50 text-amber-700 border-amber-200',
      paid: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      failed: 'bg-red-50 text-red-700 border-red-200'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      active: 'Actif',
      paused: 'En pause',
      paid: 'Payé',
      failed: 'Échec'
    };
    return labels[status as keyof typeof labels] || 'Inconnu';
  };

  const handleBackToSubscriptions = () => {
    navigate('/', { state: { activeSection: 'subscriptions' } });
  };

  const tabs = [
    { id: "overview", label: "Vue d'ensemble", icon: BarChart3 },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "billing", label: "Facturation", icon: CreditCard },
    { id: "settings", label: "Paramètres", icon: Settings }
  ];

  const metrics = [
    {
      title: "Prix mensuel",
      value: `${subscription.amount}${subscription.currency}`,
      icon: DollarSign,
      color: "emerald",
      progress: 75
    },
    {
      title: "Croissance",
      value: subscription.performance.growth,
      icon: TrendingUp,
      color: "blue",
      progress: 80
    },
    {
      title: "Utilisation",
      value: subscription.performance.usage,
      icon: Activity,
      color: "purple",
      progress: 87
    },
    {
      title: "Efficacité",
      value: subscription.performance.efficiency,
      icon: Zap,
      color: "orange",
      progress: 94
    }
  ];

  const quickActions = [
    { label: "Modifier la facturation", icon: Calendar },
    { label: "Télécharger les factures", icon: Download },
    { label: "Synchroniser", icon: RefreshCw }
  ];

  return (
    <div className="relative z-10">
      <div className="payzoo-page-container">
        
        {/* Header */}
        <div className={`mb-12 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button 
            className="group mb-8 bg-background border border-border text-foreground hover:bg-muted transition-all duration-200"
            onClick={handleBackToSubscriptions}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux abonnements
          </Button>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className={`relative w-16 h-16 bg-gradient-to-br ${subscription.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <span className="font-bold text-white text-2xl">{subscription.logo}</span>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <h1 className="text-3xl font-bold text-foreground">
                    {subscription.name}
                  </h1>
                  <Badge className={`${getStatusColor(subscription.status)} px-3 py-1 text-sm font-medium rounded-full border`}>
                    <div className="w-1.5 h-1.5 bg-current rounded-full mr-2"></div>
                    {getStatusLabel(subscription.status)}
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-xl font-semibold text-foreground">{subscription.plan}</p>
                  <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full">
                    <Star className="w-4 h-4 text-foreground" />
                    <span className="text-sm font-medium text-foreground">{subscription.category}</span>
                  </div>
                </div>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  {subscription.description}
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="group bg-foreground text-background hover:bg-foreground/90 transition-all duration-200">
                <Settings className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                Gérer
              </Button>
              <Button variant="outline" className="bg-background border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200">
                <Pause className="w-4 h-4 mr-2" />
                Suspendre
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '200ms' }}>
          <div className="flex gap-2 p-1 bg-muted rounded-xl border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-background shadow-sm text-foreground'
                    : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview tab content */}
        {activeTab === "overview" && (
          <div className={`grid grid-cols-12 gap-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '400ms' }}>
            
            {/* Main content */}
            <div className="col-span-8 space-y-8">
              
              {/* Performance metrics */}
              <div className="grid grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <Card key={index} className="border border-border hover:border-foreground/20 transition-all duration-200 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-2.5 bg-${metric.color}-100 rounded-xl`}>
                          <metric.icon className={`w-5 h-5 text-${metric.color}-600`} />
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground mb-1">{metric.title}</div>
                          <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className={`bg-${metric.color}-500 h-2 rounded-full`} style={{ width: `${metric.progress}%` }}></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Features showcase */}
              <Card className="border border-border hover:border-foreground/20 transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-3">
                    <div className="p-2 bg-foreground rounded-xl">
                      <Sparkles className="w-5 h-5 text-background" />
                    </div>
                    Fonctionnalités Premium
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    {subscription.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 group">
                        <div className="p-2 bg-emerald-100 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="col-span-4 space-y-6">
              
              {/* Payment method card */}
              <Card className="border border-border hover:border-foreground/20 transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Méthode de paiement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-5 h-5" />
                          <span className="font-medium">{paymentMethod.type}</span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setShowCardDetails(!showCardDetails)}
                          className="text-white hover:bg-white/10 rounded-lg w-8 h-8 p-0"
                        >
                          {showCardDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                      <div>
                        <p className="text-lg font-mono mb-2 tracking-wider">
                          {showCardDetails ? `•••• •••• •••• ${paymentMethod.last4}` : '•••• •••• •••• ••••'}
                        </p>
                        <p className="text-white/70 text-sm">
                          Expire {showCardDetails ? paymentMethod.expiry : '••/••'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-foreground hover:bg-foreground/90 text-background transition-all duration-200">
                    Modifier la carte
                  </Button>
                </CardContent>
              </Card>

              {/* Quick actions */}
              <Card className="border border-border hover:border-foreground/20 transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Actions rapides
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Button key={index} className="w-full justify-start bg-background border border-border text-foreground hover:bg-muted transition-all duration-200">
                      <action.icon className="w-4 h-4 mr-3" />
                      {action.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Billing tab content */}
        {activeTab === "billing" && (
          <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '400ms' }}>
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-foreground rounded-xl">
                    <CreditCard className="w-5 h-5 text-background" />
                  </div>
                  Historique des paiements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead className="font-semibold text-foreground">Date</TableHead>
                      <TableHead className="font-semibold text-foreground">Description</TableHead>
                      <TableHead className="font-semibold text-foreground">Montant</TableHead>
                      <TableHead className="font-semibold text-foreground">Statut</TableHead>
                      <TableHead className="font-semibold text-foreground"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentHistory.map((payment) => (
                      <TableRow key={payment.id} className="border-border hover:bg-muted/50 transition-colors">
                        <TableCell className="font-medium text-foreground">{payment.date}</TableCell>
                        <TableCell className="text-muted-foreground">{payment.description}</TableCell>
                        <TableCell className="font-semibold text-foreground">
                          {payment.amount} {subscription.currency}
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(payment.status)} px-3 py-1 text-xs font-medium rounded-full border`}>
                            {getStatusLabel(payment.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-muted rounded-lg transition-all duration-200">
                            <Download className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Other tab contents */}
        {(activeTab === "analytics" || activeTab === "settings") && (
          <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '400ms' }}>
            <Card className="border border-border p-20">
              <div className="text-center">
                <div className="p-4 bg-foreground rounded-2xl w-fit mx-auto mb-4">
                  <Globe className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {activeTab === "analytics" ? "Analytics" : "Paramètres"}
                </h3>
                <p className="text-muted-foreground">Cette section sera bientôt disponible avec des fonctionnalités avancées.</p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionDetails;
