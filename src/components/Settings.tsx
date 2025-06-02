
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
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header harmonisé */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900 tracking-tight">
                Paramètres
              </h1>
              <p className="text-gray-500 text-base mt-2 font-light">
                Gérez votre compte et vos préférences
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          
          {/* Profile Section - Style harmonisé */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardContent className="p-8">
              {/* User Info */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-medium text-xl">
                    {currentUserData.firstName[0]}{currentUserData.lastName[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">
                    {currentUserData.firstName} {currentUserData.lastName}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-base text-gray-600 flex items-center gap-3 font-light">
                      <Mail className="w-4 h-4 text-gray-400" />
                      {currentUserData.email}
                    </p>
                    <p className="text-base text-gray-600 flex items-center gap-3 font-light">
                      <Phone className="w-4 h-4 text-gray-400" />
                      {currentUserData.phone}
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              {/* Profile Menu Items */}
              <div className="space-y-3">
                <Button 
                  variant="ghost" 
                  className="w-full h-auto justify-start text-left p-4 hover:bg-gray-50/80 rounded-2xl group transition-all duration-200"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-base">Informations personnelles</p>
                      <p className="text-sm text-gray-500 font-light">Nom, prénom, données de profil</p>
                    </div>
                  </div>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full h-auto justify-start text-left p-4 hover:bg-gray-50/80 rounded-2xl group transition-all duration-200"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-base">Adresse e-mail</p>
                      <p className="text-sm text-gray-500 font-light">Modifier votre e-mail principal</p>
                    </div>
                  </div>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full h-auto justify-start text-left p-4 hover:bg-gray-50/80 rounded-2xl group transition-all duration-200"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                      <Phone className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-base">Numéro de téléphone</p>
                      <p className="text-sm text-gray-500 font-light">Gérer votre numéro de contact</p>
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* KYC Section - Style modernisé */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-lg mb-2 tracking-tight">Vérification KYC</h3>
                  <p className="text-gray-200 text-base font-light">Augmentez vos limites de transaction</p>
                </div>
                <Button size="sm" className="bg-white/10 text-white hover:bg-white/20 border-0 px-6 py-3 rounded-2xl font-medium">
                  Continuer
                </Button>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-6">
                {kycSettings.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gray-50 rounded-2xl">
                        <item.icon className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                    <p className="font-medium text-gray-900 text-base mb-2">{item.title}</p>
                    <div className="flex items-center justify-center gap-2">
                      {getStatusIcon(item.status)}
                      <span className="text-sm text-gray-500 font-light">{getStatusText(item.status)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notifications Section */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardContent className="p-8">
              <h3 className="font-medium text-gray-900 mb-8 text-xl tracking-tight">Notifications</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <Bell className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-base">Notifications push</p>
                      <p className="text-sm text-gray-500 font-light">Alertes sur votre appareil</p>
                    </div>
                  </div>
                  <Switch 
                    checked={pushNotifications} 
                    onCheckedChange={setPushNotifications}
                    className="data-[state=checked]:bg-gray-900"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-base">Notifications e-mail</p>
                      <p className="text-sm text-gray-500 font-light">Mises à jour par e-mail</p>
                    </div>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications}
                    className="data-[state=checked]:bg-gray-900"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-base">Alertes de transaction</p>
                      <p className="text-sm text-gray-500 font-light">Notification pour chaque transaction</p>
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
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardContent className="p-8">
              <h3 className="font-medium text-gray-900 mb-8 text-xl tracking-tight">Sécurité</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <Key className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-base">Mot de passe</p>
                      <p className="text-sm text-gray-500 font-light">Modifié il y a 3 mois</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-2xl px-4 py-2 font-medium">
                    Changer
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-base">Authentification à deux facteurs</p>
                      <p className="text-sm text-gray-500 font-light">
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

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-base">Sessions actives</p>
                      <p className="text-sm text-gray-500 font-light">2 appareils connectés</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-2xl px-4 py-2 font-medium">
                    Gérer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardContent className="p-8">
              <h3 className="font-medium text-gray-900 mb-8 text-xl tracking-tight">Support</h3>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full h-auto justify-start text-left p-4 hover:bg-gray-50/80 rounded-2xl group transition-all duration-200">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                      <HelpCircle className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-base">Centre d'aide</p>
                      <p className="text-sm text-gray-500 font-light">FAQ et guides d'utilisation</p>
                    </div>
                  </div>
                </Button>

                <Button variant="ghost" className="w-full h-auto justify-start text-left p-4 hover:bg-gray-50/80 rounded-2xl group transition-all duration-200">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                      <MessageCircle className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-base">Chat en direct</p>
                      <p className="text-sm text-gray-500 font-light">Support instantané en ligne</p>
                    </div>
                  </div>
                </Button>

                <Button variant="ghost" className="w-full h-auto justify-start text-left p-4 hover:bg-gray-50/80 rounded-2xl group transition-all duration-200">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-base">Contact e-mail</p>
                      <p className="text-sm text-gray-500 font-light">Support par e-mail</p>
                    </div>
                  </div>
                </Button>

                <Button variant="ghost" className="w-full h-auto justify-start text-left p-4 hover:bg-gray-50/80 rounded-2xl group transition-all duration-200">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                      <FileText className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-base">Signaler un problème</p>
                      <p className="text-sm text-gray-500 font-light">Rapporter un bug</p>
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preferences & Account Actions */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardContent className="p-8">
              <h3 className="font-medium text-gray-900 mb-8 text-xl tracking-tight">Préférences</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <Globe className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-base">Langue</p>
                      <p className="text-sm text-gray-500 font-light">Français</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-2xl px-4 py-2 font-medium">
                    Changer
                  </Button>
                </div>

                <Separator />

                <div className="space-y-3 pt-4">
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-50/80 h-12 rounded-2xl">
                    <LogOut className="w-5 h-5 mr-4" />
                    <span className="font-medium">Se déconnecter</span>
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50/80 h-12 rounded-2xl">
                    <span className="font-medium">Supprimer le compte</span>
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
