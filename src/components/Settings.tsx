import { User, Shield, Bell, HelpCircle, LogOut, Globe, CheckCircle, AlertCircle, MapPin, CreditCard, Key, Smartphone, FileText, MessageCircle, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export function Settings() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [transactionAlerts, setTransactionAlerts] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const currentUserData = {
    firstName: "Housseine",
    lastName: "Dao",
    email: "dao.housseine@gmail.com",
    phone: "+33 6 12 34 56 78"
  };

  const kycSettings = [
    { icon: User, title: "Identité", status: "verified" },
    { icon: MapPin, title: "Domicile", status: "pending" },
    { icon: CreditCard, title: "Revenus", status: "missing" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-amber-500" />;
      case 'missing':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'verified': return 'Vérifié';
      case 'pending': return 'En cours';
      case 'missing': return 'Requis';
      default: return 'À faire';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Paramètres</h1>
          <p className="text-gray-500">Gérez votre compte et vos préférences</p>
        </div>

        <div className="space-y-8">
          
          {/* Profile Section - Linear Layout */}
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-6">Profil</h2>
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                {/* User Info */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-2xl">
                      {currentUserData.firstName[0]}{currentUserData.lastName[0]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                      {currentUserData.firstName} {currentUserData.lastName}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {currentUserData.email}
                      </p>
                      <p className="text-gray-600 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {currentUserData.phone}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-8" />
                
                {/* Linear Menu Items */}
                <div className="space-y-4">
                  <Button 
                    variant="ghost" 
                    className="w-full h-16 justify-start text-left p-6 hover:bg-gray-50 border border-gray-100 rounded-xl"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">Informations personnelles</p>
                        <p className="text-sm text-gray-500">Nom, prénom, données de profil</p>
                      </div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full h-16 justify-start text-left p-6 hover:bg-gray-50 border border-gray-100 rounded-xl"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">Adresse e-mail</p>
                        <p className="text-sm text-gray-500">Modifier votre e-mail principal</p>
                      </div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full h-16 justify-start text-left p-6 hover:bg-gray-50 border border-gray-100 rounded-xl"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">Numéro de téléphone</p>
                        <p className="text-sm text-gray-500">Gérer votre numéro de contact</p>
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* KYC Section */}
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-6">Vérification</h2>
            <Card className="border-0 shadow-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">Vérification KYC</h3>
                    <p className="text-blue-100 text-sm">Augmentez vos limites de transaction</p>
                  </div>
                  <Button size="sm" className="bg-white/20 text-white hover:bg-white/30 border-0">
                    Continuer
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-6">
                  {kycSettings.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 bg-gray-50 rounded-xl">
                          <item.icon className="w-5 h-5 text-gray-600" />
                        </div>
                      </div>
                      <p className="font-medium text-gray-900 text-sm mb-2">{item.title}</p>
                      <div className="flex items-center justify-center gap-2">
                        {getStatusIcon(item.status)}
                        <span className="text-xs text-gray-500">{getStatusText(item.status)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications Section */}
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-6">Notifications</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Bell className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Notifications push</p>
                      <p className="text-sm text-gray-500">Alertes sur votre appareil</p>
                    </div>
                  </div>
                  <Switch 
                    checked={pushNotifications} 
                    onCheckedChange={setPushNotifications}
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Notifications e-mail</p>
                      <p className="text-sm text-gray-500">Mises à jour par e-mail</p>
                    </div>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications}
                    className="data-[state=checked]:bg-purple-600"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Alertes de transaction</p>
                      <p className="text-sm text-gray-500">Notification pour chaque transaction</p>
                    </div>
                  </div>
                  <Switch 
                    checked={transactionAlerts} 
                    onCheckedChange={setTransactionAlerts}
                    className="data-[state=checked]:bg-emerald-600"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security Section */}
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-6">Sécurité</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <Key className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Mot de passe</p>
                      <p className="text-sm text-gray-500">Modifié il y a 3 mois</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Changer
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Authentification à deux facteurs</p>
                      <p className="text-sm text-gray-500">
                        {twoFactorEnabled ? "Activée" : "Désactivée"}
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={twoFactorEnabled} 
                    onCheckedChange={setTwoFactorEnabled}
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Sessions actives</p>
                      <p className="text-sm text-gray-500">2 appareils connectés</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Gérer
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Historique de connexion</p>
                      <p className="text-sm text-gray-500">Voir les connexions récentes</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Voir
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-6">Support</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <Button variant="ghost" className="h-16 justify-start text-left p-6 hover:bg-gray-50 border border-gray-100 rounded-xl">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">Centre d'aide</p>
                        <p className="text-sm text-gray-500">FAQ et guides d'utilisation</p>
                      </div>
                    </div>
                  </Button>

                  <Button variant="ghost" className="h-16 justify-start text-left p-6 hover:bg-gray-50 border border-gray-100 rounded-xl">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">Chat en direct</p>
                        <p className="text-sm text-gray-500">Support instantané en ligne</p>
                      </div>
                    </div>
                  </Button>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="ghost" className="h-16 justify-start text-left p-6 hover:bg-gray-50 border border-gray-100 rounded-xl">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900">Contact e-mail</p>
                          <p className="text-sm text-gray-500">Support par e-mail</p>
                        </div>
                      </div>
                    </Button>

                    <Button variant="ghost" className="h-16 justify-start text-left p-6 hover:bg-gray-50 border border-gray-100 rounded-xl">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-orange-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900">Signaler un problème</p>
                          <p className="text-sm text-gray-500">Rapporter un bug</p>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preferences & Account Actions */}
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-6">Préférences</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Langue</p>
                      <p className="text-sm text-gray-500">Français</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Changer
                  </Button>
                </div>

                <Separator />

                <div className="space-y-3 pt-3">
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-50 h-12 rounded-lg">
                    <LogOut className="w-5 h-5 mr-3" />
                    Se déconnecter
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50 h-12 rounded-lg">
                    Supprimer le compte
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
