
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Calendar, CheckCircle2, Download, AlertCircle, Settings, Trash2, Pause, Play, Eye, EyeOff, TrendingUp, DollarSign, BarChart3 } from "lucide-react";
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
    color: "payzoo-secondary-bg",
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
        return 'bg-emerald-50 text-emerald-700';
      case 'paused':
        return 'bg-amber-50 text-amber-700';
      case 'paid':
        return 'bg-emerald-50 text-emerald-700';
      case 'failed':
        return 'bg-red-50 text-red-700';
      default:
        return 'bg-gray-50 text-gray-700';
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
    <div className="min-h-screen flex w-full bg-gray-50">
      <AppSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <div className="flex-1 ml-64 bg-white rounded-tl-2xl shadow-sm border-l border-gray-100">
        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="max-w-6xl mx-auto w-full">
            
            {/* Header unifié */}
            <div className="mb-12">
              <Button 
                className="payzoo-btn-ghost mb-8 -ml-2"
                onClick={handleBackToSubscriptions}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
              
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${subscription.color} rounded-2xl flex items-center justify-center`}>
                    <span className="font-bold text-white text-2xl">{subscription.logo}</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h1 className="text-3xl font-bold payzoo-secondary-text">
                        {subscription.name}
                      </h1>
                      <Badge className={`${getStatusColor(subscription.status)} px-3 py-1 text-sm font-medium rounded-full`}>
                        {getStatusLabel(subscription.status)}
                      </Badge>
                    </div>
                    <p className="text-lg payzoo-subtitle mb-1">{subscription.plan}</p>
                    <p className="payzoo-text-muted">{subscription.description}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="payzoo-btn-ghost">
                    <Settings className="w-4 h-4 mr-2" />
                    Paramètres
                  </Button>
                  <Button variant="outline" size="sm" className="text-orange-600 hover:bg-orange-50">
                    <Pause className="w-4 h-4 mr-2" />
                    Suspendre
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Annuler
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
              
              {/* Contenu principal */}
              <div className="col-span-8 space-y-8">
                
                {/* Métriques */}
                <div className="grid grid-cols-3 gap-6">
                  <Card className="payzoo-card p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm payzoo-text-muted mb-1">Prix mensuel</p>
                        <p className="text-2xl font-bold payzoo-secondary-text">{subscription.amount}{subscription.currency}</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-blue-500" />
                    </div>
                  </Card>

                  <Card className="payzoo-card p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm payzoo-text-muted mb-1">Total 2025</p>
                        <p className="text-2xl font-bold payzoo-secondary-text">{subscription.yearlyAmount}{subscription.currency}</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-emerald-500" />
                    </div>
                  </Card>

                  <Card className="payzoo-card p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm payzoo-text-muted mb-1">Prochain paiement</p>
                        <p className="text-lg font-semibold payzoo-secondary-text">{subscription.nextBilling}</p>
                      </div>
                      <Calendar className="w-8 h-8 text-purple-500" />
                    </div>
                  </Card>
                </div>

                {/* Détails du plan */}
                <Card className="payzoo-card">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold payzoo-secondary-text">Détails du plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <label className="text-xs font-medium payzoo-text-muted uppercase tracking-wide">Plan actuel</label>
                        <p className="text-lg font-semibold payzoo-secondary-text mt-1">{subscription.plan}</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium payzoo-text-muted uppercase tracking-wide">Facturation</label>
                        <p className="text-lg font-semibold payzoo-secondary-text mt-1 capitalize">{subscription.billingCycle}</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium payzoo-text-muted uppercase tracking-wide">Date de début</label>
                        <p className="text-lg font-semibold payzoo-secondary-text mt-1">{subscription.startDate}</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium payzoo-text-muted uppercase tracking-wide">Catégorie</label>
                        <p className="text-lg font-semibold payzoo-secondary-text mt-1">{subscription.category}</p>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-100">
                      <label className="text-xs font-medium payzoo-text-muted uppercase tracking-wide mb-4 block">Fonctionnalités incluses</label>
                      <div className="grid grid-cols-2 gap-3">
                        {subscription.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            <span className="payzoo-subtitle">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Historique */}
                <Card className="payzoo-card">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold payzoo-secondary-text">Historique des paiements</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-100">
                          <TableHead className="font-medium payzoo-subtitle">Date</TableHead>
                          <TableHead className="font-medium payzoo-subtitle">Description</TableHead>
                          <TableHead className="font-medium payzoo-subtitle">Montant</TableHead>
                          <TableHead className="font-medium payzoo-subtitle">Statut</TableHead>
                          <TableHead className="font-medium payzoo-subtitle"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paymentHistory.map((payment) => (
                          <TableRow key={payment.id} className="border-gray-50">
                            <TableCell className="font-medium payzoo-secondary-text">{payment.date}</TableCell>
                            <TableCell className="payzoo-subtitle">{payment.description}</TableCell>
                            <TableCell className="font-semibold payzoo-secondary-text">
                              {payment.amount} {subscription.currency}
                            </TableCell>
                            <TableCell>
                              <Badge className={`${getStatusColor(payment.status)} px-2 py-1 text-xs font-medium rounded-full`}>
                                {getStatusLabel(payment.status)}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" className="p-2">
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
              <div className="col-span-4 space-y-6">
                
                {/* Méthode de paiement */}
                <Card className="payzoo-card">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold payzoo-secondary-text">Méthode de paiement</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-6 payzoo-secondary-bg rounded-2xl text-white">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-6 h-6" />
                          <span className="font-medium">{paymentMethod.type}</span>
                          {paymentMethod.isDefault && (
                            <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                              Défaut
                            </Badge>
                          )}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setShowCardDetails(!showCardDetails)}
                          className="text-white hover:bg-white/10 p-2"
                        >
                          {showCardDetails ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </Button>
                      </div>
                      <div>
                        <p className="text-lg font-mono mb-2">
                          {showCardDetails ? `•••• •••• •••• ${paymentMethod.last4}` : '•••• •••• •••• ••••'}
                        </p>
                        <p className="text-white/70 text-sm">
                          Expire {showCardDetails ? paymentMethod.expiry : '••/••'}
                        </p>
                      </div>
                    </div>
                    <Button className="payzoo-btn-primary w-full">
                      Modifier la méthode de paiement
                    </Button>
                  </CardContent>
                </Card>

                {/* Actions rapides */}
                <Card className="payzoo-card">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold payzoo-secondary-text">Actions rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="payzoo-btn-outline w-full justify-start">
                      <Calendar className="w-4 h-4 mr-3" />
                      Modifier la facturation
                    </Button>
                    <Button className="payzoo-btn-outline w-full justify-start">
                      <Download className="w-4 h-4 mr-3" />
                      Télécharger les factures
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600 hover:bg-red-50">
                      <AlertCircle className="w-4 h-4 mr-3" />
                      Signaler un problème
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
