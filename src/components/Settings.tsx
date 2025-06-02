
import { User, Shield, Bell, HelpCircle, LogOut, ChevronRight, Lock, Smartphone, Globe, Mail, CreditCard, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function Settings() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [paymentReminders, setPaymentReminders] = useState(true);
  const [transactionAlerts, setTransactionAlerts] = useState(true);

  const accountSettings = [
    { icon: User, title: "Nom complet", value: "Housseine Dao", action: "Modifier" },
    { icon: Mail, title: "Email", value: "dao.housseine@gmail.com", action: "Modifier" },
    { icon: Smartphone, title: "Téléphone", value: "+33 • • • • • 64", action: "Modifier" },
    { icon: Globe, title: "Langue", value: "Français", action: "Changer" },
  ];

  const securitySettings = [
    { icon: Lock, title: "Mot de passe", description: "Modifié il y a 2 mois" },
    { icon: Shield, title: "Authentification 2FA", description: "Sécuriser votre wallet" },
    { icon: Smartphone, title: "Sessions actives", description: "Gérer les connexions Payzoo" },
  ];

  const kycSettings = [
    { icon: User, title: "Identité", description: "Carte d'identité ou passeport", status: "verified" },
    { icon: MapPin, title: "Justificatif de domicile", description: "Facture récente", status: "pending" },
    { icon: CreditCard, title: "Justificatif de revenus", description: "Fiche de paie", status: "missing" },
  ];

  const paymentFeatures = [
    { icon: CreditCard, title: "Méthodes de paiement", description: "Gérer vos cartes et comptes" },
    { icon: CreditCard, title: "Limites de transfert", description: "Configurer vos plafonds" },
    { icon: Shield, title: "Sécurité des paiements", description: "Validation par email/SMS" },
  ];

  const supportSettings = [
    { icon: HelpCircle, title: "Centre d'aide Payzoo" },
    { icon: HelpCircle, title: "Chat support 24/7" },
    { icon: CreditCard, title: "Facturation & Abonnements" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'missing':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'verified':
        return 'Vérifié';
      case 'pending':
        return 'En attente';
      case 'missing':
        return 'Manquant';
      default:
        return 'À faire';
    }
  };

  return (
    <div className="p-6 bg-gray-50/30 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Paramètres Payzoo</h1>
          <p className="text-gray-500 mt-1">Personnalise ton expérience de paiement web 🌐</p>
        </div>

        {/* KYC Status */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Vérification KYC
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="p-4 bg-blue-50 rounded-lg mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-blue-900">Limite actuelle</div>
                <div className="text-sm font-bold text-blue-600">1 000€/mois</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-blue-900">Après vérification complète</div>
                <div className="text-sm font-bold text-green-600">15 000€/mois</div>
              </div>
            </div>

            {kycSettings.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50/50 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <item.icon className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(item.status)}
                  <span className="text-xs font-medium">{getStatusText(item.status)}</span>
                </div>
              </div>
            ))}

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10 font-medium mt-4">
              Continuer la vérification KYC
            </Button>
          </CardContent>
        </Card>

        {/* Account Information */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-payzoo-primary" />
              Compte
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {accountSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-payzoo-primary/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-payzoo-primary/10 transition-colors">
                    <setting.icon className="w-4 h-4 text-gray-600 group-hover:text-payzoo-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{setting.title}</p>
                    <p className="text-xs text-gray-500">{setting.value}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-payzoo-primary hover:text-payzoo-primary/80 hover:bg-payzoo-primary/5 text-xs px-3 h-8">
                  {setting.action}
                  <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Payzoo Features Web */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-payzoo-primary" />
              Fonctionnalités Payzoo Web
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-payzoo-primary/10 rounded-lg">
                  <Bell className="w-4 h-4 text-payzoo-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Alertes de transaction</p>
                  <p className="text-xs text-gray-500">Notifications en temps réel</p>
                </div>
              </div>
              <Switch 
                checked={transactionAlerts} 
                onCheckedChange={setTransactionAlerts}
                className="data-[state=checked]:bg-payzoo-primary"
              />
            </div>

            {paymentFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-payzoo-primary/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-payzoo-primary/10 transition-colors">
                    <feature.icon className="w-4 h-4 text-gray-600 group-hover:text-payzoo-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{feature.title}</p>
                    <p className="text-xs text-gray-500">{feature.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-payzoo-primary hover:bg-payzoo-primary/5">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-payzoo-primary" />
              Sécurité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {securitySettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-payzoo-primary/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-payzoo-primary/10 transition-colors">
                    <setting.icon className="w-4 h-4 text-gray-600 group-hover:text-payzoo-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{setting.title}</p>
                    <p className="text-xs text-gray-500">{setting.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-payzoo-primary hover:bg-payzoo-primary/5">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Bell className="w-5 h-5 text-payzoo-primary" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Bell className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Notifications navigateur</p>
                  <p className="text-xs text-gray-500">Alertes en temps réel sur le web</p>
                </div>
              </div>
              <Switch 
                checked={pushNotifications} 
                onCheckedChange={setPushNotifications}
                className="data-[state=checked]:bg-payzoo-primary"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Mail className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Notifications e-mail</p>
                  <p className="text-xs text-gray-500">Confirmations et relevés</p>
                </div>
              </div>
              <Switch 
                checked={emailNotifications} 
                onCheckedChange={setEmailNotifications}
                className="data-[state=checked]:bg-payzoo-primary"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <CreditCard className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Rappels de paiement</p>
                  <p className="text-xs text-gray-500">Alertes avant prélèvements</p>
                </div>
              </div>
              <Switch 
                checked={paymentReminders} 
                onCheckedChange={setPaymentReminders}
                className="data-[state=checked]:bg-payzoo-primary"
              />
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-payzoo-primary" />
              Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {supportSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-payzoo-primary/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-payzoo-primary/10 transition-colors">
                    <setting.icon className="w-4 h-4 text-gray-600 group-hover:text-payzoo-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{setting.title}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-payzoo-primary hover:bg-payzoo-primary/5">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Actions */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-4 space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-center h-10 rounded-lg font-medium hover:bg-gray-50 border-gray-200"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Se déconnecter
            </Button>
            
            <Separator className="my-3" />
            
            <Button 
              variant="destructive" 
              className="w-full justify-center h-10 rounded-lg font-medium bg-red-500 hover:bg-red-600"
            >
              Supprimer le compte Payzoo
            </Button>
            
            <p className="text-xs text-gray-400 text-center mt-2">
              ⚠️ Cette action est irréversible et supprimera ton wallet
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
