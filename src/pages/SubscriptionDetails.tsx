
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Calendar, CheckCircle2, Download, AlertCircle, Settings, Trash2, Pause, Play, Eye, EyeOff, TrendingUp, DollarSign, BarChart3, Zap, Star, Users, Globe } from "lucide-react";
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
    <div className="min-h-screen bg-gray-50/30 flex w-full">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="flex-1 min-h-screen ml-80">
        <div className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Clean Header */}
          <div className="mb-12">
            <Button 
              variant="ghost" 
              onClick={handleBackToSubscriptions}
              className="mb-8 -ml-4 hover:bg-white/80 rounded-xl transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux abonnements
            </Button>
            
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 ${subscription.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                  <span className="font-bold text-white text-2xl">{subscription.logo}</span>
                </div>
                
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {subscription.name}
                    </h1>
                    <Badge className={`${getStatusColor(subscription.status)} rounded-full px-3 py-1 text-sm font-medium border`}>
                      {getStatusLabel(subscription.status)}
                    </Badge>
                  </div>
                  <p className="text-lg text-gray-600 mb-1">Plan {subscription.plan}</p>
                  <p className="text-gray-500">{subscription.description}</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="rounded-xl">
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl">
                  {subscription.status === 'active' ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {subscription.status === 'active' ? 'Suspendre' : 'Reprendre'}
                </Button>
                <Button variant="destructive" size="sm" className="rounded-xl">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Annuler
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            
            {/* Main Content */}
            <div className="col-span-8 space-y-8">
              
              {/* Clean Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <Card className="border-0 shadow-sm bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Prix mensuel</p>
                      <p className="text-2xl font-bold text-gray-900">{subscription.amount} {subscription.currency}</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-sm bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total 2025</p>
                      <p className="text-2xl font-bold text-gray-900">{subscription.yearlyAmount} {subscription.currency}</p>
                    </div>
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-sm bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Prochain paiement</p>
                      <p className="text-lg font-semibold text-gray-900">{subscription.nextBilling}</p>
                    </div>
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Clean Plan Details */}
              <Card className="border-0 shadow-sm bg-white rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    Détails du plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Plan actuel</label>
                      <p className="text-lg font-semibold text-gray-900 mt-1">{subscription.plan}</p>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Cycle de facturation</label>
                      <p className="text-lg font-semibold text-gray-900 mt-1 capitalize">{subscription.billingCycle}</p>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Date de début</label>
                      <p className="text-lg font-semibold text-gray-900 mt-1">{subscription.startDate}</p>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</label>
                      <p className="text-lg font-semibold text-gray-900 mt-1">{subscription.category}</p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 block">Fonctionnalités incluses</label>
                    <div className="grid grid-cols-2 gap-3">
                      {subscription.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Clean Payment History */}
              <Card className="border-0 shadow-sm bg-white rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    Historique des paiements
                  </CardTitle>
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
                        <TableRow key={payment.id} className="border-gray-50 hover:bg-gray-50/50">
                          <TableCell className="font-medium text-gray-900">{payment.date}</TableCell>
                          <TableCell className="text-gray-600">{payment.description}</TableCell>
                          <TableCell className="font-semibold text-gray-900">
                            {payment.amount} {subscription.currency}
                          </TableCell>
                          <TableCell>
                            <Badge className={`${getStatusColor(payment.status)} rounded-full px-3 py-1 text-xs font-medium border`}>
                              {getStatusLabel(payment.status)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" className="rounded-lg p-2">
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

            {/* Clean Right Sidebar */}
            <div className="col-span-4 space-y-6">
              
              {/* Clean Payment Method */}
              <Card className="border-0 shadow-sm bg-white rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    Méthode de paiement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gray-900 rounded-2xl text-white mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-white" />
                        </div>
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
                        className="text-white hover:bg-white/10 rounded-lg p-2"
                      >
                        {showCardDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                    <div>
                      <p className="text-lg font-mono tracking-wider mb-2">
                        {showCardDetails ? `•••• •••• •••• ${paymentMethod.last4}` : '•••• •••• •••• ••••'}
                      </p>
                      <p className="text-white/70 text-sm">
                        Expire {showCardDetails ? paymentMethod.expiry : '••/••'}
                      </p>
                    </div>
                  </div>
                  <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    Modifier la méthode de paiement
                  </Button>
                </CardContent>
              </Card>

              {/* Clean Quick Actions */}
              <Card className="border-0 shadow-sm bg-white rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-purple-600" />
                    Actions rapides
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start rounded-xl border-gray-200 hover:bg-gray-50">
                    <Calendar className="w-4 h-4 mr-3" />
                    Modifier la facturation
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-xl border-gray-200 hover:bg-gray-50">
                    <Download className="w-4 h-4 mr-3" />
                    Télécharger les factures
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-xl border-red-200 text-red-600 hover:bg-red-50">
                    <AlertCircle className="w-4 h-4 mr-3" />
                    Signaler un problème
                  </Button>
                </CardContent>
              </Card>

              {/* Clean Usage Stats */}
              <Card className="border-0 shadow-sm bg-white rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-emerald-600" />
                    Utilisation ce mois
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">API Calls</span>
                      <span className="font-medium text-gray-900">2,847 / 5,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '57%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Storage</span>
                      <span className="font-medium text-gray-900">12.3 GB / 50 GB</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
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
