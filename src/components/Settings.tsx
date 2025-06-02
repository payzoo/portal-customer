
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
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-4 py-6">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Paramètres</h1>
          <p className="text-gray-500 text-sm">Gérez votre compte et vos préférences</p>
        </div>

        <div className="space-y-6">
          
          {/* Profile Section */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium text-lg">
                    {currentUserData.firstName[0]}{currentUserData.lastName[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {currentUserData.firstName} {currentUserData.lastName}
                  </h3>
                  <div className="space-y-0.5">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-gray-400" />
                      {currentUserData.email}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gray-400" />
                      {currentUserData.phone}
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              {/* Profile Menu Items */}
              <div className="space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full h-auto justify-start text-left p-3 hover:bg-gray-50/80 rounded-lg"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">Informations personnelles</p>
                      <p className="text-xs text-gray-500">Nom, prénom, données de profil</p>
                    </div>
                  </div>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full h-auto justify-start text-left p-3 hover:bg-gray-50/80 rounded-lg"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">Adresse e-mail</p>
                      <p className="text-xs text-gray-500">Modifier votre e-mail principal</p>
                    </div>
                  </div>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full h-auto justify-start text-left p-3 hover:bg-gray-50/80 rounded-lg"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">Numéro de téléphone</p>
                      <p className="text-xs text-gray-500">Gérer votre numéro de contact</p>
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* KYC Section */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-sm mb-1">Vérification KYC</h3>
                  <p className="text-gray-200 text-xs">Augmentez vos limites de transaction</p>
                </div>
                <Button size="sm" className="bg-white/10 text-white hover:bg-white/20 border-0 text-xs px-3 py-1.5">
                  Continuer
                </Button>
              </div>
            </div>
            
            <CardContent className="p-5">
              <div className="grid grid-cols-3 gap-4">
                {kycSettings.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-2.5 bg-gray-50 rounded-lg">
                        <item.icon className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                    <p className="font-medium text-gray-900 text-xs mb-1">{item.title}</p>
                    <div className="flex items-center justify-center gap-1.5">
                      {getStatusIcon(item.status)}
                      <span className="text-xs text-gray-500">{getStatusText(item.status)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notifications Section */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-5">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Bell className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Notifications push</p>
                      <p className="text-xs text-gray-500">Alertes sur votre appareil</p>
                    </div>
                  </div>
                  <Switch 
                    checked={pushNotifications} 
                    onCheckedChange={setPushNotifications}
                    className="data-[state=checked]:bg-gray-900"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Notifications e-mail</p>
                      <p className="text-xs text-gray-500">Mises à jour par e-mail</p>
                    </div>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications}
                    className="data-[state=checked]:bg-gray-900"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Alertes de transaction</p>
                      <p className="text-xs text-gray-500">Notification pour chaque transaction</p>
                    </div>
                  </div>
                  <Switch 
                    checked={transactionAlerts} 
                    onCheckedChange={setTransactionAlerts}
                    className="data-[state=checked]:bg-gray-900"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Section */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-5">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Sécurité</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Key className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Mot de passe</p>
                      <p className="text-xs text-gray-500">Modifié il y a 3 mois</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg text-xs px-3 py-1.5">
                    Changer
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Authentification à deux facteurs</p>
                      <p className="text-xs text-gray-500">
                        {twoFactorEnabled ? "Activée" : "Désactivée"}
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={twoFactorEnabled} 
                    onCheckedChange={setTwoFactorEnabled}
                    className="data-[state=checked]:bg-gray-900"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Sessions actives</p>
                      <p className="text-xs text-gray-500">2 appareils connectés</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg text-xs px-3 py-1.5">
                    Gérer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-5">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Support</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full h-auto justify-start text-left p-3 hover:bg-gray-50/80 rounded-lg">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">Centre d'aide</p>
                      <p className="text-xs text-gray-500">FAQ et guides d'utilisation</p>
                    </div>
                  </div>
                </Button>

                <Button variant="ghost" className="w-full h-auto justify-start text-left p-3 hover:bg-gray-50/80 rounded-lg">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">Chat en direct</p>
                      <p className="text-xs text-gray-500">Support instantané en ligne</p>
                    </div>
                  </div>
                </Button>

                <Button variant="ghost" className="w-full h-auto justify-start text-left p-3 hover:bg-gray-50/80 rounded-lg">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">Contact e-mail</p>
                      <p className="text-xs text-gray-500">Support par e-mail</p>
                    </div>
                  </div>
                </Button>

                <Button variant="ghost" className="w-full h-auto justify-start text-left p-3 hover:bg-gray-50/80 rounded-lg">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">Signaler un problème</p>
                      <p className="text-xs text-gray-500">Rapporter un bug</p>
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preferences & Account Actions */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-5">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Préférences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Langue</p>
                      <p className="text-xs text-gray-500">Français</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg text-xs px-3 py-1.5">
                    Changer
                  </Button>
                </div>

                <Separator />

                <div className="space-y-2 pt-2">
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-50/80 h-10 rounded-lg">
                    <LogOut className="w-4 h-4 mr-3" />
                    <span className="text-sm">Se déconnecter</span>
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50/80 h-10 rounded-lg">
                    <span className="text-sm">Supprimer le compte</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
