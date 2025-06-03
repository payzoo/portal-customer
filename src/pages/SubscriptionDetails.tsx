import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Calendar, CheckCircle2, Download, AlertCircle, Settings, Pause, Eye, EyeOff, TrendingUp, DollarSign, BarChart3, Zap, Shield, Bell, RefreshCw, Star, Sparkles, Activity, Globe, Users, Target, Cpu, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AppSidebar } from "@/components/AppSidebar";

const SubscriptionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [activeSection, setActiveSection] = useState("subscriptions");
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
    switch (status) {
      case 'active':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'paused':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'paid':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'failed':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Actif';
      case 'paused': return 'En pause';
      case 'paid': return 'Payé';
      case 'failed': return 'Échec';
      default: return 'Inconnu';
    }
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

  return (
    <div className="min-h-screen flex w-full bg-background relative overflow-hidden">
      {/* Geometric floating elements - matching other pages */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-border/20 rounded-3xl rotate-12 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-border/30 rounded-2xl -rotate-12 animate-[float_8s_ease-in-out_infinite] opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-border/25 rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-32 right-1/3 w-20 h-20 border border-border/20 rounded-full animate-[float_9s_ease-in-out_infinite] opacity-40" style={{ animationDelay: '1s' }}></div>
      </div>

      <AppSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="flex-1 ml-64 relative z-10">
        <div className="payzoo-page-container">
          
          {/* Clean header matching other pages */}
          <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <Button 
              className="group mb-8 bg-background border border-border text-foreground hover:bg-muted transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              onClick={handleBackToSubscriptions}
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour aux abonnements
            </Button>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className={`relative w-16 h-16 bg-gradient-to-br ${subscription.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300`}>
                  <span className="font-bold text-white text-2xl">{subscription.logo}</span>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-md animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-bold text-foreground">
                      {subscription.name}
                    </h1>
                    <Badge className={`${getStatusColor(subscription.status)} px-3 py-1 text-sm font-medium rounded-full border`}>
                      <div className="w-1.5 h-1.5 bg-current rounded-full mr-2 animate-pulse"></div>
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
                <Button className="group bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-lg border-0">
                  <Settings className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  Gérer
                </Button>
                <Button variant="outline" className="bg-background border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300">
                  <Pause className="w-4 h-4 mr-2" />
                  Suspendre
                </Button>
              </div>
            </div>
          </div>

          {/* Clean tabs matching other pages */}
          <div className={`mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '200ms' }}>
            <div className="flex gap-2 p-1 bg-muted rounded-xl border border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-background shadow-sm text-foreground scale-105'
                      : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content based on active tab */}
          {activeTab === "overview" && (
            <div className={`grid grid-cols-12 gap-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '400ms' }}>
              
              {/* Main content */}
              <div className="col-span-8 space-y-8">
                
                {/* Performance metrics */}
                <div className="grid grid-cols-4 gap-6">
                  <Card className="border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 bg-emerald-100 rounded-xl">
                          <DollarSign className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground mb-1">Prix mensuel</div>
                          <div className="text-2xl font-bold text-foreground">{subscription.amount}{subscription.currency}</div>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 bg-blue-100 rounded-xl">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground mb-1">Croissance</div>
                          <div className="text-2xl font-bold text-foreground">{subscription.performance.growth}</div>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 bg-purple-100 rounded-xl">
                          <Activity className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground mb-1">Utilisation</div>
                          <div className="text-2xl font-bold text-foreground">{subscription.performance.usage}</div>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full w-5/6 animate-pulse"></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 bg-orange-100 rounded-xl">
                          <Zap className="w-5 h-5 text-orange-600" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground mb-1">Efficacité</div>
                          <div className="text-2xl font-bold text-foreground">{subscription.performance.efficiency}</div>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full w-11/12 animate-pulse"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Features showcase */}
                <Card className="border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
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
                        <div key={index} className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                          <div className="p-2 bg-emerald-100 rounded-xl">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="font-medium text-foreground group-hover:text-foreground/80 transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="col-span-4 space-y-6">
                
                {/* Payment method card */}
                <Card className="border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
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
                    <Button className="w-full mt-4 bg-foreground hover:bg-foreground/90 text-background transition-all duration-300 hover:scale-105">
                      Modifier la carte
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick actions */}
                <Card className="border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Actions rapides
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-background border border-border text-foreground hover:bg-muted transition-all duration-300 hover:scale-105">
                      <Calendar className="w-4 h-4 mr-3" />
                      Modifier la facturation
                    </Button>
                    <Button className="w-full justify-start bg-background border border-border text-foreground hover:bg-muted transition-all duration-300 hover:scale-105">
                      <Download className="w-4 h-4 mr-3" />
                      Télécharger les factures
                    </Button>
                    <Button className="w-full justify-start bg-background border border-border text-foreground hover:bg-muted transition-all duration-300 hover:scale-105">
                      <RefreshCw className="w-4 h-4 mr-3" />
                      Synchroniser
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Billing tab content */}
          {activeTab === "billing" && (
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '400ms' }}>
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
                            <Button variant="ghost" size="sm" className="p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110">
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
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '400ms' }}>
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
    </div>
  );
};

export default SubscriptionDetails;
