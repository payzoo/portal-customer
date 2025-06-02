import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Calendar, CheckCircle2, Download, AlertCircle, Settings, Trash2, Pause, Play, Eye, EyeOff, TrendingUp, DollarSign, BarChart3, Zap } from "lucide-react";
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
    color: "bg-blue-600",
    category: "Développement",
    yearlyAmount: 600,
    startDate: "15 Janvier 2024",
    description: "Plan professionnel avec fonctionnalités avancées",
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'paused':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'paid':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'failed':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 flex w-full">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="flex-1 min-h-screen ml-80">
        <div className="max-w-7xl mx-auto px-8 py-12">
          
          {/* Header minimaliste */}
          <div className="mb-16">
            <Button 
              variant="ghost" 
              onClick={handleBackToSubscriptions}
              className="mb-10 -ml-4 hover:bg-white/60 rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-8">
                <div className={`w-20 h-20 ${subscription.color} rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/20 animate-fade-in`}>
                  <span className="font-bold text-white text-3xl">{subscription.logo}</span>
                </div>
                
                <div className="animate-fade-in">
                  <div className="flex items-center gap-6 mb-3">
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                      {subscription.name}
                    </h1>
                    <Badge className={`${getStatusColor(subscription.status)} rounded-2xl px-4 py-2 text-sm font-semibold border-0 shadow-sm animate-scale-in`}>
                      {getStatusLabel(subscription.status)}
                    </Badge>
                  </div>
                  <p className="text-xl text-gray-600 mb-2 font-medium">Plan {subscription.plan}</p>
                  <p className="text-gray-500 max-w-md leading-relaxed">{subscription.description}</p>
                </div>
              </div>
              
              <div className="flex gap-3 animate-fade-in">
                <Button variant="outline" size="sm" className="rounded-2xl border-gray-200/60 hover:bg-white/80 backdrop-blur-sm transition-all duration-300">
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres
                </Button>
                <Button variant="outline" size="sm" className="rounded-2xl border-gray-200/60 hover:bg-white/80 backdrop-blur-sm transition-all duration-300">
                  {subscription.status === 'active' ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {subscription.status === 'active' ? 'Suspendre' : 'Reprendre'}
                </Button>
                <Button variant="destructive" size="sm" className="rounded-2xl bg-red-500/90 hover:bg-red-600 border-0 shadow-sm transition-all duration-300">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Annuler
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-10">
            
            {/* Contenu principal */}
            <div className="col-span-8 space-y-10">
              
              {/* Métriques élégantes */}
              <div className="grid grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-white via-white to-blue-50/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in backdrop-blur-sm border border-white/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-2 font-medium">Prix mensuel</p>
                      <p className="text-3xl font-bold text-gray-900 tracking-tight">{subscription.amount} {subscription.currency}</p>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-white via-white to-emerald-50/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in backdrop-blur-sm border border-white/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-2 font-medium">Total 2025</p>
                      <p className="text-3xl font-bold text-gray-900 tracking-tight">{subscription.yearlyAmount} {subscription.currency}</p>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-white via-white to-purple-50/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in backdrop-blur-sm border border-white/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-2 font-medium">Prochain paiement</p>
                      <p className="text-xl font-bold text-gray-900">{subscription.nextBilling}</p>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Détails du plan */}
              <Card className="border-0 shadow-lg bg-white/60 rounded-3xl backdrop-blur-sm border border-white/40 hover:shadow-xl transition-all duration-500 animate-fade-in">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    Détails du plan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Plan actuel</label>
                      <p className="text-xl font-bold text-gray-900">{subscription.plan}</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Cycle de facturation</label>
                      <p className="text-xl font-bold text-gray-900 capitalize">{subscription.billingCycle}</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Date de début</label>
                      <p className="text-xl font-bold text-gray-900">{subscription.startDate}</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Catégorie</label>
                      <p className="text-xl font-bold text-gray-900">{subscription.category}</p>
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-gray-100/60">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6 block">Fonctionnalités incluses</label>
                    <div className="grid grid-cols-2 gap-4">
                      {subscription.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50/50 to-blue-50/30 border border-emerald-100/50 hover:shadow-sm transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Historique des paiements */}
              <Card className="border-0 shadow-lg bg-white/60 rounded-3xl backdrop-blur-sm border border-white/40 hover:shadow-xl transition-all duration-500 animate-fade-in">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    Historique des paiements
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-100/60 hover:bg-transparent">
                        <TableHead className="font-semibold text-gray-600 py-6">Date</TableHead>
                        <TableHead className="font-semibold text-gray-600">Description</TableHead>
                        <TableHead className="font-semibold text-gray-600">Montant</TableHead>
                        <TableHead className="font-semibold text-gray-600">Statut</TableHead>
                        <TableHead className="font-semibold text-gray-600"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paymentHistory.map((payment) => (
                        <TableRow key={payment.id} className="border-gray-50/60 hover:bg-gray-50/30 transition-all duration-200">
                          <TableCell className="font-semibold text-gray-900 py-6">{payment.date}</TableCell>
                          <TableCell className="text-gray-600">{payment.description}</TableCell>
                          <TableCell className="font-bold text-gray-900 text-lg">
                            {payment.amount} {subscription.currency}
                          </TableCell>
                          <TableCell>
                            <Badge className={`${getStatusColor(payment.status)} rounded-2xl px-4 py-2 text-xs font-semibold border-0 shadow-sm`}>
                              {getStatusLabel(payment.status)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" className="rounded-2xl p-3 hover:bg-blue-50 transition-all duration-200">
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

            {/* Sidebar droite */}
            <div className="col-span-4 space-y-8">
              
              {/* Méthode de paiement */}
              <Card className="border-0 shadow-lg bg-white/60 rounded-3xl backdrop-blur-sm border border-white/40 hover:shadow-xl transition-all duration-500 animate-fade-in">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    Méthode de paiement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl text-white shadow-2xl border border-gray-700/50">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                          <CreditCard className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-lg">{paymentMethod.type}</span>
                        {paymentMethod.isDefault && (
                          <Badge variant="outline" className="text-xs border-white/30 text-white/80 rounded-xl px-3 py-1">
                            Défaut
                          </Badge>
                        )}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowCardDetails(!showCardDetails)}
                        className="text-white hover:bg-white/10 rounded-xl p-3 transition-all duration-200"
                      >
                        {showCardDetails ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </Button>
                    </div>
                    <div>
                      <p className="text-xl font-mono tracking-wider mb-3">
                        {showCardDetails ? `•••• •••• •••• ${paymentMethod.last4}` : '•••• •••• •••• ••••'}
                      </p>
                      <p className="text-white/70">
                        Expire {showCardDetails ? paymentMethod.expiry : '••/••'}
                      </p>
                    </div>
                  </div>
                  <Button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5">
                    Modifier la méthode de paiement
                  </Button>
                </CardContent>
              </Card>

              {/* Actions rapides */}
              <Card className="border-0 shadow-lg bg-white/60 rounded-3xl backdrop-blur-sm border border-white/40 hover:shadow-xl transition-all duration-500 animate-fade-in">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    Actions rapides
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start rounded-2xl border-gray-200/60 hover:bg-white/80 backdrop-blur-sm transition-all duration-300 py-4">
                    <Calendar className="w-5 h-5 mr-4" />
                    Modifier la facturation
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-2xl border-gray-200/60 hover:bg-white/80 backdrop-blur-sm transition-all duration-300 py-4">
                    <Download className="w-5 h-5 mr-4" />
                    Télécharger les factures
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-2xl border-red-200/60 text-red-600 hover:bg-red-50/60 backdrop-blur-sm transition-all duration-300 py-4">
                    <AlertCircle className="w-5 h-5 mr-4" />
                    Signaler un problème
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubscriptionDetails;
