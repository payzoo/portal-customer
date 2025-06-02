
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
            
            {/* Header ultra minimaliste */}
            <div className="mb-12">
              <Button 
                variant="ghost" 
                onClick={handleBackToSubscriptions}
                className="mb-8 -ml-2 text-gray-600 hover:text-gray-900 p-2"
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
                      <h1 className="text-3xl font-bold text-gray-900">
                        {subscription.name}
                      </h1>
                      <Badge className={`${getStatusColor(subscription.status)} px-3 py-1 text-sm font-medium rounded-full`}>
                        {getStatusLabel(subscription.status)}
                      </Badge>
                    </div>
                    <p className="text-lg text-gray-600 mb-1">{subscription.plan}</p>
                    <p className="text-gray-500">{subscription.description}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-gray-600">
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
              
              {/* Contenu principal simplifié */}
              <div className="col-span-8 space-y-8">
                
                {/* Métriques essentielles */}
                <div className="grid grid-cols-3 gap-6">
                  <Card className="p-6 border-0 shadow-sm bg-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Prix mensuel</p>
                        <p className="text-2xl font-bold text-gray-900">{subscription.amount}{subscription.currency}</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-blue-500" />
                    </div>
                  </Card>

                  <Card className="p-6 border-0 shadow-sm bg-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Total 2025</p>
                        <p className="text-2xl font-bold text-gray-900">{subscription.yearlyAmount}{subscription.currency}</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-emerald-500" />
                    </div>
                  </Card>

                  <Card className="p-6 border-0 shadow-sm bg-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Prochain paiement</p>
                        <p className="text-lg font-semibold text-gray-900">{subscription.nextBilling}</p>
                      </div>
                      <Calendar className="w-8 h-8 text-purple-500" />
                    </div>
                  </Card>
                </div>

                {/* Détails du plan épurés */}
                <Card className="border-0 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">Détails du plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Plan actuel</label>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{subscription.plan}</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Facturation</label>
                        <p className="text-lg font-semibold text-gray-900 mt-1 capitalize">{subscription.billingCycle}</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Date de début</label>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{subscription.startDate}</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Catégorie</label>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{subscription.category}</p>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-100">
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-4 block">Fonctionnalités incluses</label>
                      <div className="grid grid-cols-2 gap-3">
                        {subscription.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Historique simplifié */}
                <Card className="border-0 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">Historique des paiements</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-100">
                          <TableHead className="font-medium text-gray-600">Date</TableHead>
                          <TableHead className="font-medium text-gray-600">Description</TableHead>
                          <TableHead className="font-medium text-gray-600">Montant</TableHead>
                          <TableHead className="font-medium text-gray-600">Statut</TableHead>
                          <TableHead className="font-medium text-gray-600"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paymentHistory.map((payment) => (
                          <TableRow key={payment.id} className="border-gray-50">
                            <TableCell className="font-medium text-gray-900">{payment.date}</TableCell>
                            <TableCell className="text-gray-600">{payment.description}</TableCell>
                            <TableCell className="font-semibold text-gray-900">
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

              {/* Sidebar droite minimaliste */}
              <div className="col-span-4 space-y-6">
                
                {/* Méthode de paiement épurée */}
                <Card className="border-0 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-gray-900">Méthode de paiement</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-6 bg-gray-900 rounded-2xl text-white">
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
                    <Button 
                      className="w-full text-white"
                      style={{ backgroundColor: '#B4DE00' }}
                    >
                      Modifier la méthode de paiement
                    </Button>
                  </CardContent>
                </Card>

                {/* Actions rapides simplifiées */}
                <Card className="border-0 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-gray-900">Actions rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start text-gray-700">
                      <Calendar className="w-4 h-4 mr-3" />
                      Modifier la facturation
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-gray-700">
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
