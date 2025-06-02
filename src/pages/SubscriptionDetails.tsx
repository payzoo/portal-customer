
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Calendar, CheckCircle2, Download, AlertCircle, Settings, Trash2, Pause, Play, Eye, EyeOff, TrendingUp, DollarSign } from "lucide-react";
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
    description: "Plan professionnel avec fonctionnalités avancées de développement"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/30 flex w-full">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="flex-1 min-h-screen ml-80">
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            
            {/* Header avec animation d'entrée */}
            <div className="mb-8 animate-fade-in">
              <Button 
                variant="ghost" 
                onClick={handleBackToSubscriptions}
                className="mb-6 hover:bg-white/60 hover:shadow-sm rounded-2xl backdrop-blur-sm transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                Retour aux abonnements
              </Button>
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className={`relative w-20 h-20 ${subscription.color} rounded-3xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group`}>
                    <span className="font-bold text-white text-3xl group-hover:scale-110 transition-transform duration-300">{subscription.logo}</span>
                    <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <h1 className="text-4xl font-bold text-slate-900 tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
                        {subscription.name}
                      </h1>
                      <Badge 
                        variant="secondary"
                        className={`px-4 py-2 rounded-full text-sm font-medium border ${statusInfo.bgColor} ${statusInfo.color} ${statusInfo.borderColor} hover:scale-105 transition-transform duration-300`}
                      >
                        <div className={`w-2 h-2 ${statusInfo.dotColor} rounded-full mr-2 animate-pulse`}></div>
                        {statusInfo.label}
                      </Badge>
                    </div>
                    <p className="text-xl text-slate-600 font-medium">
                      Plan {subscription.plan} • {subscription.category}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Paramètres
                  </Button>
                  <Button variant="outline" className="rounded-2xl hover:bg-amber-50 hover:border-amber-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    {subscription.status === 'active' ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {subscription.status === 'active' ? 'Suspendre' : 'Reprendre'}
                  </Button>
                  <Button variant="destructive" className="rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Annuler
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Section principale */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Métriques rapides */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm rounded-3xl hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-500 mb-1">Prix mensuel</p>
                          <p className="text-3xl font-bold text-slate-900">{subscription.amount} {subscription.currency}</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <DollarSign className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50/50 backdrop-blur-sm rounded-3xl hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-500 mb-1">Total 2025</p>
                          <p className="text-3xl font-bold text-slate-900">{subscription.yearlyAmount} {subscription.currency}</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm rounded-3xl hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-500 mb-1">Prochain paiement</p>
                          <p className="text-lg font-bold text-slate-900">{subscription.nextBilling}</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Détails du plan */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/30 backdrop-blur-sm rounded-3xl hover:shadow-xl transition-all duration-500 animate-fade-in">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-slate-900">Détails du plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Plan actuel</label>
                        <p className="text-xl font-bold text-slate-900">{subscription.plan}</p>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Cycle de facturation</label>
                        <p className="text-xl font-bold text-slate-900 capitalize">{subscription.billingCycle}</p>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Date de début</label>
                        <p className="text-xl font-bold text-slate-900">{subscription.startDate}</p>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Catégorie</label>
                        <p className="text-xl font-bold text-slate-900">{subscription.category}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Description</label>
                      <p className="text-slate-700 leading-relaxed text-lg">{subscription.description}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Historique des paiements */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/30 backdrop-blur-sm rounded-3xl hover:shadow-xl transition-all duration-500 animate-fade-in">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-slate-900">Historique des paiements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-2xl border border-slate-200/60">
                      <Table>
                        <TableHeader className="bg-slate-50/50">
                          <TableRow className="border-slate-200/60">
                            <TableHead className="font-semibold text-slate-700 py-4">Date</TableHead>
                            <TableHead className="font-semibold text-slate-700">Description</TableHead>
                            <TableHead className="font-semibold text-slate-700">Montant</TableHead>
                            <TableHead className="font-semibold text-slate-700">Statut</TableHead>
                            <TableHead className="font-semibold text-slate-700">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {paymentHistory.map((payment, index) => {
                            const paymentStatus = getPaymentStatusInfo(payment.status);
                            return (
                              <TableRow 
                                key={payment.id} 
                                className="hover:bg-slate-50/50 transition-colors duration-300 border-slate-200/60"
                                style={{ animationDelay: `${index * 100}ms` }}
                              >
                                <TableCell className="font-medium text-slate-900 py-4">{payment.date}</TableCell>
                                <TableCell className="text-slate-700">{payment.description}</TableCell>
                                <TableCell className="font-bold text-slate-900">
                                  {payment.amount} {subscription.currency}
                                </TableCell>
                                <TableCell>
                                  <Badge 
                                    variant="secondary"
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${paymentStatus.bgColor} ${paymentStatus.color} ${paymentStatus.borderColor}`}
                                  >
                                    {paymentStatus.label}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="sm" className="rounded-xl hover:bg-slate-100 hover:scale-105 transition-all duration-300">
                                    <Download className="w-4 h-4" />
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

              {/* Sidebar droite */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Méthode de paiement */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm rounded-3xl hover:shadow-xl transition-all duration-500 animate-fade-in">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-slate-900">Méthode de paiement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white overflow-hidden group hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold">{paymentMethod.type}</span>
                                {paymentMethod.isDefault && (
                                  <Badge variant="outline" className="text-xs px-2 py-0.5 border-white/30 text-white/90">
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
                            className="rounded-xl hover:bg-white/10 text-white hover:text-white"
                          >
                            {showCardDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <p className="text-lg font-mono">
                            {showCardDetails ? `•••• •••• •••• ${paymentMethod.last4}` : '•••• •••• •••• ••••'}
                          </p>
                          <p className="text-sm text-white/70">
                            Expire {showCardDetails ? paymentMethod.expiry : '••/••'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-6 rounded-2xl hover:bg-blue-50 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                      Modifier la méthode de paiement
                    </Button>
                  </CardContent>
                </Card>

                {/* Actions rapides */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/30 backdrop-blur-sm rounded-3xl hover:shadow-xl transition-all duration-500 animate-fade-in">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-slate-900">Actions rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start rounded-2xl hover:bg-slate-50 hover:shadow-md transition-all duration-300 group">
                      <Calendar className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      Modifier la facturation
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-2xl hover:bg-emerald-50 hover:border-emerald-200 hover:shadow-md transition-all duration-300 group">
                      <Download className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      Télécharger les factures
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-2xl text-red-600 border-red-200 hover:bg-red-50 hover:shadow-md transition-all duration-300 group">
                      <AlertCircle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      Signaler un problème
                    </Button>
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
