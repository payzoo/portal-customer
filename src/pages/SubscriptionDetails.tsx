
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Calendar, CheckCircle2, Download, AlertCircle, Settings, Trash2, Pause, Play, Eye, EyeOff, TrendingUp, DollarSign, BarChart3, Zap, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sidebar } from "@/components/Sidebar";

const SubscriptionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [activeSection, setActiveSection] = useState("subscriptions");

  // Mock data - in a real app, this would be fetched based on the ID
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
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    category: "Développement",
    yearlyAmount: 600,
    startDate: "15 Janvier 2024",
    description: "Plan professionnel avec fonctionnalités avancées de développement",
    features: ["API illimitée", "Support prioritaire", "Analytics avancées", "Collaborateurs illimités"]
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
      default:
        return { 
          icon: CheckCircle2, 
          color: 'text-gray-600', 
          bgColor: 'bg-gray-50', 
          label: 'Inconnu',
          dotColor: 'bg-gray-400',
          borderColor: 'border-gray-200'
        };
    }
  };

  const getPaymentStatusInfo = (status: string) => {
    switch (status) {
      case 'paid':
        return { 
          color: 'text-emerald-600', 
          bgColor: 'bg-emerald-50', 
          label: 'Payé',
          borderColor: 'border-emerald-200'
        };
      case 'failed':
        return { 
          color: 'text-red-600', 
          bgColor: 'bg-red-50', 
          label: 'Échec',
          borderColor: 'border-red-200'
        };
      case 'pending':
        return { 
          color: 'text-amber-600', 
          bgColor: 'bg-amber-50', 
          label: 'En attente',
          borderColor: 'border-amber-200'
        };
      default:
        return { 
          color: 'text-gray-600', 
          bgColor: 'bg-gray-50', 
          label: 'Inconnu',
          borderColor: 'border-gray-200'
        };
    }
  };

  const statusInfo = getStatusInfo(subscription.status);
  const StatusIcon = statusInfo.icon;

  const handleBackToSubscriptions = () => {
    navigate('/', { state: { activeSection: 'subscriptions' } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 flex w-full relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="flex-1 min-h-screen ml-80 relative z-10">
        <div className="min-h-screen backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-8 py-8">
            
            {/* Enhanced Header */}
            <div className="mb-12 animate-fade-in">
              <Button 
                variant="ghost" 
                onClick={handleBackToSubscriptions}
                className="mb-8 hover:bg-white/80 hover:shadow-lg rounded-2xl backdrop-blur-md transition-all duration-300 group border border-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                Retour aux abonnements
              </Button>
              
              <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-12">
                <div className="flex items-start gap-8">
                  <div className={`relative w-24 h-24 ${subscription.color} rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 group cursor-pointer`}>
                    <span className="font-bold text-white text-4xl group-hover:scale-110 transition-transform duration-300">{subscription.logo}</span>
                    <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-6">
                      <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent leading-tight">
                        {subscription.name}
                      </h1>
                      <Badge 
                        variant="secondary"
                        className={`px-6 py-3 rounded-2xl text-base font-semibold border-2 ${statusInfo.bgColor} ${statusInfo.color} ${statusInfo.borderColor} hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm`}
                      >
                        <div className={`w-3 h-3 ${statusInfo.dotColor} rounded-full mr-3 animate-pulse`}></div>
                        {statusInfo.label}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl text-slate-600 font-semibold">
                        Plan {subscription.plan}
                      </p>
                      <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
                      <p className="text-2xl text-slate-600 font-semibold">
                        {subscription.category}
                      </p>
                    </div>
                    <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                      {subscription.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 xl:flex-col xl:w-auto">
                  <Button 
                    variant="outline" 
                    className="rounded-2xl hover:bg-white/90 hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-md border-white/30 px-6 py-3 text-base font-semibold"
                  >
                    <Settings className="w-5 h-5 mr-3" />
                    Paramètres
                  </Button>
                  <Button 
                    variant="outline" 
                    className="rounded-2xl hover:bg-amber-50/90 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-md border-white/30 px-6 py-3 text-base font-semibold"
                  >
                    {subscription.status === 'active' ? <Pause className="w-5 h-5 mr-3" /> : <Play className="w-5 h-5 mr-3" />}
                    {subscription.status === 'active' ? 'Suspendre' : 'Reprendre'}
                  </Button>
                  <Button 
                    variant="destructive" 
                    className="rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-3 text-base font-semibold"
                  >
                    <Trash2 className="w-5 h-5 mr-3" />
                    Annuler
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
              
              {/* Main Content */}
              <div className="xl:col-span-8 space-y-10">
                
                {/* Enhanced Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-md rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Prix mensuel</p>
                          <p className="text-4xl font-bold text-slate-900 mb-1">{subscription.amount} {subscription.currency}</p>
                          <p className="text-sm text-emerald-600 font-semibold">↗ +5% ce mois</p>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <DollarSign className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-md rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Total 2025</p>
                          <p className="text-4xl font-bold text-slate-900 mb-1">{subscription.yearlyAmount} {subscription.currency}</p>
                          <p className="text-sm text-emerald-600 font-semibold">8 mois payés</p>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-md rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Prochain paiement</p>
                          <p className="text-2xl font-bold text-slate-900 mb-1">{subscription.nextBilling}</p>
                          <p className="text-sm text-purple-600 font-semibold">Dans 12 jours</p>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced Plan Details */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white/90 to-slate-50/70 backdrop-blur-md rounded-3xl hover:shadow-2xl transition-all duration-500 animate-fade-in overflow-hidden">
                  <CardHeader className="pb-6 bg-gradient-to-r from-slate-50/50 to-white/50">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                        <Zap className="w-8 h-8 text-blue-600" />
                        Détails du plan
                      </CardTitle>
                      <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                        Premium
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-10 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3 group">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Plan actuel</label>
                        <p className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{subscription.plan}</p>
                      </div>
                      <div className="space-y-3 group">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Cycle de facturation</label>
                        <p className="text-2xl font-bold text-slate-900 capitalize group-hover:text-blue-600 transition-colors duration-300">{subscription.billingCycle}</p>
                      </div>
                      <div className="space-y-3 group">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Date de début</label>
                        <p className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{subscription.startDate}</p>
                      </div>
                      <div className="space-y-3 group">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Catégorie</label>
                        <p className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{subscription.category}</p>
                      </div>
                    </div>
                    
                    {/* Features Section */}
                    <div className="space-y-6 pt-6 border-t border-slate-200/60">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Fonctionnalités incluses</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {subscription.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-emerald-50/50 hover:from-emerald-100 hover:to-emerald-100/50 transition-all duration-300 group">
                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-slate-700 font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Payment History */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white/90 to-slate-50/70 backdrop-blur-md rounded-3xl hover:shadow-2xl transition-all duration-500 animate-fade-in overflow-hidden">
                  <CardHeader className="pb-6 bg-gradient-to-r from-slate-50/50 to-white/50">
                    <CardTitle className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                      <BarChart3 className="w-8 h-8 text-purple-600" />
                      Historique des paiements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-hidden">
                      <Table>
                        <TableHeader className="bg-gradient-to-r from-slate-50/80 to-slate-100/80">
                          <TableRow className="border-slate-200/60 hover:bg-transparent">
                            <TableHead className="font-bold text-slate-700 py-6 text-base">Date</TableHead>
                            <TableHead className="font-bold text-slate-700 text-base">Description</TableHead>
                            <TableHead className="font-bold text-slate-700 text-base">Montant</TableHead>
                            <TableHead className="font-bold text-slate-700 text-base">Statut</TableHead>
                            <TableHead className="font-bold text-slate-700 text-base">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {paymentHistory.map((payment, index) => {
                            const paymentStatus = getPaymentStatusInfo(payment.status);
                            return (
                              <TableRow 
                                key={payment.id} 
                                className="hover:bg-gradient-to-r hover:from-slate-50/50 hover:to-white/50 transition-all duration-300 border-slate-200/40 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                              >
                                <TableCell className="font-semibold text-slate-900 py-6 text-base">{payment.date}</TableCell>
                                <TableCell className="text-slate-700 text-base">{payment.description}</TableCell>
                                <TableCell className="font-bold text-slate-900 text-lg">
                                  {payment.amount} {subscription.currency}
                                </TableCell>
                                <TableCell>
                                  <Badge 
                                    variant="secondary"
                                    className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 ${paymentStatus.bgColor} ${paymentStatus.color} ${paymentStatus.borderColor} group-hover:scale-105 transition-transform duration-300`}
                                  >
                                    {paymentStatus.label}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="sm" className="rounded-2xl hover:bg-slate-100 hover:scale-110 transition-all duration-300 p-3">
                                    <Download className="w-5 h-5" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Right Sidebar */}
              <div className="xl:col-span-4 space-y-8">
                
                {/* Enhanced Payment Method Card */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-md rounded-3xl hover:shadow-2xl transition-all duration-500 animate-fade-in overflow-hidden">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                      <CreditCard className="w-7 h-7 text-blue-600" />
                      Méthode de paiement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="relative p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl text-white overflow-hidden group hover:scale-105 transition-transform duration-500 shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-900">VISA</span>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                              <CreditCard className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3">
                                <span className="font-bold text-lg">{paymentMethod.type}</span>
                                {paymentMethod.isDefault && (
                                  <Badge variant="outline" className="text-xs px-3 py-1 border-white/30 text-white/90 rounded-full">
                                    Défaut
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setShowCardDetails(!showCardDetails)}
                            className="rounded-2xl hover:bg-white/10 text-white hover:text-white p-3"
                          >
                            {showCardDetails ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <p className="text-2xl font-mono tracking-wider">
                            {showCardDetails ? `•••• •••• •••• ${paymentMethod.last4}` : '•••• •••• •••• ••••'}
                          </p>
                          <p className="text-base text-white/80">
                            Expire {showCardDetails ? paymentMethod.expiry : '••/••'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 text-base hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Modifier la méthode de paiement
                    </Button>
                  </CardContent>
                </Card>

                {/* Enhanced Quick Actions */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white/90 to-slate-50/70 backdrop-blur-md rounded-3xl hover:shadow-2xl transition-all duration-500 animate-fade-in overflow-hidden">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                      <Zap className="w-7 h-7 text-purple-600" />
                      Actions rapides
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start rounded-2xl hover:bg-slate-50 hover:shadow-lg transition-all duration-300 group py-4 text-base font-semibold border-2">
                      <Calendar className="w-5 h-5 mr-4 group-hover:scale-110 transition-transform duration-300 text-blue-600" />
                      Modifier la facturation
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-2xl hover:bg-emerald-50 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group py-4 text-base font-semibold border-2">
                      <Download className="w-5 h-5 mr-4 group-hover:scale-110 transition-transform duration-300 text-emerald-600" />
                      Télécharger les factures
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-2xl text-red-600 border-red-200 hover:bg-red-50 hover:shadow-lg transition-all duration-300 group py-4 text-base font-semibold border-2">
                      <AlertCircle className="w-5 h-5 mr-4 group-hover:scale-110 transition-transform duration-300 text-red-600" />
                      Signaler un problème
                    </Button>
                  </CardContent>
                </Card>

                {/* Usage Statistics */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white/90 to-emerald-50/70 backdrop-blur-md rounded-3xl hover:shadow-2xl transition-all duration-500 animate-fade-in overflow-hidden">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                      <BarChart3 className="w-7 h-7 text-emerald-600" />
                      Utilisation ce mois
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 font-semibold">API Calls</span>
                        <span className="text-slate-900 font-bold">2,847 / 5,000</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full" style={{ width: '57%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 font-semibold">Storage</span>
                        <span className="text-slate-900 font-bold">12.3 GB / 50 GB</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubscriptionDetails;
