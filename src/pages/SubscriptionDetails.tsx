
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Calendar, CheckCircle2, Download, AlertCircle, Settings, Trash2, Pause, Play, Eye, EyeOff } from "lucide-react";
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
          color: 'text-green-600', 
          bgColor: 'bg-green-50', 
          label: 'Actif',
          dotColor: 'bg-green-400'
        };
      case 'paused':
        return { 
          icon: Pause, 
          color: 'text-yellow-600', 
          bgColor: 'bg-yellow-50', 
          label: 'En pause',
          dotColor: 'bg-yellow-400'
        };
      default:
        return { 
          icon: CheckCircle2, 
          color: 'text-gray-600', 
          bgColor: 'bg-gray-50', 
          label: 'Inconnu',
          dotColor: 'bg-gray-400'
        };
    }
  };

  const getPaymentStatusInfo = (status: string) => {
    switch (status) {
      case 'paid':
        return { 
          color: 'text-green-600', 
          bgColor: 'bg-green-50', 
          label: 'Payé'
        };
      case 'failed':
        return { 
          color: 'text-red-600', 
          bgColor: 'bg-red-50', 
          label: 'Échec'
        };
      case 'pending':
        return { 
          color: 'text-yellow-600', 
          bgColor: 'bg-yellow-50', 
          label: 'En attente'
        };
      default:
        return { 
          color: 'text-gray-600', 
          bgColor: 'bg-gray-50', 
          label: 'Inconnu'
        };
    }
  };

  const statusInfo = getStatusInfo(subscription.status);
  const StatusIcon = statusInfo.icon;

  const handleBackToSubscriptions = () => {
    navigate('/', { state: { activeSection: 'subscriptions' } });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="flex-1 min-h-screen ml-80">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Header */}
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={handleBackToSubscriptions}
                className="mb-6 hover:bg-gray-50 rounded-xl"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux abonnements
              </Button>
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${subscription.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="font-medium text-white text-2xl">{subscription.logo}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-extralight text-black tracking-tight">
                        {subscription.name}
                      </h1>
                      <Badge 
                        variant="secondary"
                        className={`px-4 py-2 rounded-xl text-sm font-light border-0 ${statusInfo.bgColor} ${statusInfo.color}`}
                      >
                        <div className={`w-1.5 h-1.5 ${statusInfo.dotColor} rounded-full mr-2`}></div>
                        {statusInfo.label}
                      </Badge>
                    </div>
                    <p className="text-lg text-gray-600 font-light">
                      Plan {subscription.plan} • {subscription.category}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="rounded-xl">
                    <Settings className="w-4 h-4 mr-2" />
                    Paramètres
                  </Button>
                  <Button variant="outline" className="rounded-xl">
                    {subscription.status === 'active' ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {subscription.status === 'active' ? 'Suspendre' : 'Reprendre'}
                  </Button>
                  <Button variant="destructive" className="rounded-xl">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Annuler
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Plan Details */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-gray-900">Détails du plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Plan actuel</label>
                        <p className="text-lg font-light text-gray-900 mt-1">{subscription.plan}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Prix</label>
                        <p className="text-lg font-light text-gray-900 mt-1">
                          {subscription.amount} {subscription.currency} / mois
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Prochain paiement</label>
                        <p className="text-lg font-light text-gray-900 mt-1">{subscription.nextBilling}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Date de début</label>
                        <p className="text-lg font-light text-gray-900 mt-1">{subscription.startDate}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Description</label>
                      <p className="text-gray-700 mt-1 leading-relaxed">{subscription.description}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment History */}
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-gray-900">Historique des paiements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-medium text-gray-600">Date</TableHead>
                          <TableHead className="font-medium text-gray-600">Description</TableHead>
                          <TableHead className="font-medium text-gray-600">Montant</TableHead>
                          <TableHead className="font-medium text-gray-600">Statut</TableHead>
                          <TableHead className="font-medium text-gray-600">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paymentHistory.map((payment) => {
                          const paymentStatus = getPaymentStatusInfo(payment.status);
                          return (
                            <TableRow key={payment.id} className="hover:bg-gray-50/50">
                              <TableCell className="font-light">{payment.date}</TableCell>
                              <TableCell className="font-light">{payment.description}</TableCell>
                              <TableCell className="font-light">
                                {payment.amount} {subscription.currency}
                              </TableCell>
                              <TableCell>
                                <Badge 
                                  variant="secondary"
                                  className={`px-3 py-1 rounded-lg text-xs font-light border-0 ${paymentStatus.bgColor} ${paymentStatus.color}`}
                                >
                                  {paymentStatus.label}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button variant="ghost" size="sm" className="rounded-lg">
                                  <Download className="w-3 h-3" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Payment Method */}
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-gray-900">Méthode de paiement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">{paymentMethod.type}</span>
                            {paymentMethod.isDefault && (
                              <Badge variant="outline" className="text-xs px-2 py-0.5">
                                Défaut
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {showCardDetails ? `•••• •••• •••• ${paymentMethod.last4}` : '•••• •••• •••• ••••'}
                          </p>
                          <p className="text-xs text-gray-500">
                            Expire {showCardDetails ? paymentMethod.expiry : '••/••'}
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowCardDetails(!showCardDetails)}
                        className="rounded-lg"
                      >
                        {showCardDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full mt-4 rounded-xl">
                      Modifier la méthode de paiement
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-light mb-4">Résumé financier</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-300">Total payé cette année</p>
                        <p className="text-2xl font-light">{subscription.yearlyAmount}.00 {subscription.currency}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Prochain paiement</p>
                        <p className="text-lg font-light">{subscription.amount} {subscription.currency}</p>
                        <p className="text-xs text-gray-400">{subscription.nextBilling}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions rapides */}
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-gray-900">Actions rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      <Calendar className="w-4 h-4 mr-2" />
                      Modifier la facturation
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger les factures
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-xl text-red-600 border-red-200 hover:bg-red-50">
                      <AlertCircle className="w-4 h-4 mr-2" />
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
