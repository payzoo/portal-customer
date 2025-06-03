import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Calendar, CheckCircle2, Download, AlertCircle, Settings, Trash2, Pause, Play, Eye, EyeOff, TrendingUp, DollarSign, BarChart3, Zap, Shield, Bell, RefreshCw, Star, Sparkles, Activity, Globe } from "lucide-react";
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
    <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <AppSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="flex-1 ml-64 relative z-10">
        <div className="flex flex-1 flex-col gap-8 p-8">
          <div className="max-w-7xl mx-auto w-full">
            
            {/* Modern header with glassmorphism */}
            <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Button 
                className="group mb-8 bg-white/70 backdrop-blur-md border border-white/20 text-slate-700 hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                onClick={handleBackToSubscriptions}
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Retour
              </Button>
              
              <div className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-8">
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${subscription.color} rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform`}>
                      <span className="font-bold text-white text-3xl">{subscription.logo}</span>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-md animate-pulse"></div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                          {subscription.name}
                        </h1>
                        <Badge className={`${getStatusColor(subscription.status)} px-4 py-2 text-sm font-medium rounded-full border`}>
                          <div className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse"></div>
                          {getStatusLabel(subscription.status)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mb-2">
                        <p className="text-xl font-semibold text-slate-700">{subscription.plan}</p>
                        <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full">
                          <Star className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-700">{subscription.category}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        {subscription.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <Settings className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                      Gérer
                    </Button>
                    <Button variant="outline" className="bg-white/50 backdrop-blur-sm border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300">
                      <Pause className="w-4 h-4 mr-2" />
                      Suspendre
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic tabs */}
            <div className={`mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '200ms' }}>
              <div className="flex gap-2 p-2 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/20">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white shadow-lg text-slate-800 scale-105'
                        : 'text-slate-600 hover:bg-white/50 hover:text-slate-800'
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
                    <Card className="bg-white/60 backdrop-blur-xl border border-white/20 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg">
                            <DollarSign className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-500 mb-1">Prix mensuel</div>
                            <div className="text-2xl font-bold text-slate-800">{subscription.amount}{subscription.currency}</div>
                          </div>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/60 backdrop-blur-xl border border-white/20 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-500 mb-1">Croissance</div>
                            <div className="text-2xl font-bold text-slate-800">{subscription.performance.growth}</div>
                          </div>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/60 backdrop-blur-xl border border-white/20 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg">
                            <Activity className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-500 mb-1">Utilisation</div>
                            <div className="text-2xl font-bold text-slate-800">{subscription.performance.usage}</div>
                          </div>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-5/6 animate-pulse"></div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/60 backdrop-blur-xl border border-white/20 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-500 mb-1">Efficacité</div>
                            <div className="text-2xl font-bold text-slate-800">{subscription.performance.efficiency}</div>
                          </div>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full w-11/12 animate-pulse"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Features showcase */}
                  <Card className="bg-white/60 backdrop-blur-xl border border-white/20 hover:bg-white/70 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        Fonctionnalités Premium
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-6">
                        {subscription.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                            <div className="p-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl shadow-lg">
                              <CheckCircle2 className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="col-span-4 space-y-6">
                  
                  {/* Payment method card */}
                  <Card className="bg-white/60 backdrop-blur-xl border border-white/20 hover:bg-white/70 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Méthode de paiement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-6 bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <CreditCard className="w-6 h-6" />
                              <span className="font-medium">{paymentMethod.type}</span>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setShowCardDetails(!showCardDetails)}
                              className="text-white hover:bg-white/10 rounded-xl"
                            >
                              {showCardDetails ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </Button>
                          </div>
                          <div>
                            <p className="text-xl font-mono mb-2 tracking-wider">
                              {showCardDetails ? `•••• •••• •••• ${paymentMethod.last4}` : '•••• •••• •••• ••••'}
                            </p>
                            <p className="text-white/70 text-sm">
                              Expire {showCardDetails ? paymentMethod.expiry : '••/••'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:scale-105">
                        Modifier la carte
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Quick actions */}
                  <Card className="bg-white/60 backdrop-blur-xl border border-white/20 hover:bg-white/70 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Actions rapides
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 hover:scale-105">
                        <Calendar className="w-4 h-4 mr-3" />
                        Modifier la facturation
                      </Button>
                      <Button className="w-full justify-start bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 hover:scale-105">
                        <Download className="w-4 h-4 mr-3" />
                        Télécharger les factures
                      </Button>
                      <Button className="w-full justify-start bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 hover:scale-105">
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
                <Card className="bg-white/60 backdrop-blur-xl border border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      Historique des paiements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/20">
                          <TableHead className="font-semibold text-slate-700">Date</TableHead>
                          <TableHead className="font-semibold text-slate-700">Description</TableHead>
                          <TableHead className="font-semibold text-slate-700">Montant</TableHead>
                          <TableHead className="font-semibold text-slate-700">Statut</TableHead>
                          <TableHead className="font-semibold text-slate-700"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paymentHistory.map((payment) => (
                          <TableRow key={payment.id} className="border-white/10 hover:bg-white/30 transition-colors">
                            <TableCell className="font-medium text-slate-800">{payment.date}</TableCell>
                            <TableCell className="text-slate-600">{payment.description}</TableCell>
                            <TableCell className="font-semibold text-slate-800">
                              {payment.amount} {subscription.currency}
                            </TableCell>
                            <TableCell>
                              <Badge className={`${getStatusColor(payment.status)} px-3 py-1 text-xs font-medium rounded-full border`}>
                                {getStatusLabel(payment.status)}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" className="p-2 hover:bg-white/50 rounded-xl transition-all duration-300 hover:scale-110">
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

            {/* Other tab contents would go here */}
            {(activeTab === "analytics" || activeTab === "settings") && (
              <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '400ms' }}>
                <Card className="bg-white/60 backdrop-blur-xl border border-white/20 p-20">
                  <div className="text-center">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl w-fit mx-auto mb-4">
                      <Globe className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {activeTab === "analytics" ? "Analytics" : "Paramètres"}
                    </h3>
                    <p className="text-slate-600">Cette section sera bientôt disponible avec des fonctionnalités avancées.</p>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
