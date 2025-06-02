
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
      <div className="max-w-2xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Paramètres</h1>
          <p className="text-gray-600">Gérez votre compte et vos préférences</p>
        </div>

        <div className="space-y-6">
          
          {/* Profile Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Profil</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-xl">
                      {currentUserData.firstName[0]}{currentUserData.lastName[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{currentUserData.firstName} {currentUserData.lastName}</h3>
                    <p className="text-gray-600">{currentUserData.email}</p>
                    <p className="text-gray-500 text-sm">{currentUserData.phone}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="w-4 h-4 mr-3" />
                    Modifier les informations personnelles
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-3" />
                    Changer l'adresse e-mail
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-3" />
                    Modifier le numéro de téléphone
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* KYC Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Vérification</h2>
            <Card className="border-0 shadow-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white rounded-t-lg">
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
                <div className="grid grid-cols-3 gap-4">
                  {kycSettings.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 bg-gray-50 rounded-lg">
                          <item.icon className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <p className="font-medium text-gray-900 text-sm mb-1">{item.title}</p>
                      <div className="flex items-center justify-center gap-1">
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
            <h2 className="text-lg font-medium text-gray-900 mb-4">Notifications</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Notifications push</p>
                      <p className="text-xs text-gray-500">Alertes sur votre appareil</p>
                    </div>
                  </div>
                  <Switch 
                    checked={pushNotifications} 
                    onCheckedChange={setPushNotifications}
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Notifications e-mail</p>
                      <p className="text-xs text-gray-500">Mises à jour par e-mail</p>
                    </div>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications}
                    className="data-[state=checked]:bg-purple-600"
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Alertes de transaction</p>
                      <p className="text-xs text-gray-500">Notification pour chaque transaction</p>
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
            <h2 className="text-lg font-medium text-gray-900 mb-4">Sécurité</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <Key className="w-4 h-4 text-red-600" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Mot de passe</p>
                      <p className="text-xs text-gray-500">Modifié il y a 3 mois</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Changer
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-4 h-4 text-blue-600" />
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
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Sessions actives</p>
                      <p className="text-xs text-gray-500">2 appareils connectés</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Gérer
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Historique de connexion</p>
                      <p className="text-xs text-gray-500">Voir les connexions récentes</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Voir
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Support</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="w-4 h-4 mr-3 text-blue-600" />
                  Centre d'aide
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-3 text-green-600" />
                  Chat en direct
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-3 text-purple-600" />
                  Contacter par e-mail
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-3 text-orange-600" />
                  Signaler un problème
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Preferences & Account Actions */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Préférences</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Langue</p>
                      <p className="text-xs text-gray-500">Français</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Changer
                  </Button>
                </div>

                <Separator />

                <div className="space-y-2 pt-2">
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-50">
                    <LogOut className="w-4 h-4 mr-3" />
                    Se déconnecter
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50">
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
