
import { User, Shield, Bell, HelpCircle, LogOut, Globe, CheckCircle, AlertCircle, MapPin, CreditCard, Key, Smartphone, FileText, MessageCircle, Mail, Phone, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function Settings() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [transactionAlerts, setTransactionAlerts] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const currentUserData = {
    firstName: "",
    lastName: "",
    email: "dao.housseine@gmail.com",
    phone: "+33 6 12 34 56 78"
  };

  const kycSettings = [
    { icon: User, title: "Identité", status: "verified", description: "Documents validés" },
    { icon: MapPin, title: "Domicile", status: "pending", description: "En cours de vérification" },
    { icon: CreditCard, title: "Revenus", status: "missing", description: "Justificatifs requis" },
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">Vérifié</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200">En cours</Badge>;
      case 'missing':
        return <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-200">Requis</Badge>;
      default:
        return <Badge variant="secondary">À faire</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/30 pl-80">
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Header avec recherche */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Paramètres
              </h1>
              <p className="text-gray-600 text-lg">
                Gérez votre compte et vos préférences
              </p>
            </div>
          </div>
          
          {/* Barre de recherche */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher dans les paramètres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-200 focus:border-payzoo-green-500 focus:ring-payzoo-green-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Profile Section */}
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-payzoo-green-500 to-payzoo-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Utilisateur
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {currentUserData.email}
                      </p>
                      <p className="text-gray-600 flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {currentUserData.phone}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-8" />
                
                {/* Profile Menu Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    variant="ghost" 
                    className="h-auto justify-start text-left p-6 hover:bg-gray-50 rounded-2xl group transition-all duration-200"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-payzoo-green-100 transition-colors duration-200">
                        <User className="w-5 h-5 text-gray-600 group-hover:text-payzoo-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Informations personnelles</p>
                        <p className="text-sm text-gray-500">Nom, prénom, données de profil</p>
                      </div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="h-auto justify-start text-left p-6 hover:bg-gray-50 rounded-2xl group transition-all duration-200"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-payzoo-green-100 transition-colors duration-200">
                        <Mail className="w-5 h-5 text-gray-600 group-hover:text-payzoo-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Adresse e-mail</p>
                        <p className="text-sm text-gray-500">Modifier votre e-mail principal</p>
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* KYC Section */}
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Vérification KYC</h3>
                    <p className="text-gray-200">Augmentez vos limites de transaction</p>
                  </div>
                  <Button size="sm" className="bg-white/10 text-white hover:bg-white/20 border-0 px-6 py-3 rounded-xl font-medium">
                    Continuer
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {kycSettings.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="text-center p-6 rounded-2xl border border-gray-100 hover:border-payzoo-green-200 hover:bg-payzoo-green-50/50 transition-all duration-200">
                        <div className="flex justify-center mb-4">
                          <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-payzoo-green-100 transition-colors duration-200">
                            <item.icon className="w-6 h-6 text-gray-600 group-hover:text-payzoo-green-600" />
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900 mb-2">{item.title}</p>
                        <p className="text-sm text-gray-500 mb-3">{item.description}</p>
                        <div className="flex justify-center">
                          {getStatusBadge(item.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notifications Section */}
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8">
                <h3 className="font-semibold text-gray-900 mb-8 text-xl">Notifications</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                        <Bell className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Notifications push</p>
                        <p className="text-sm text-gray-500">Alertes sur votre appareil</p>
                      </div>
                    </div>
                    <Switch 
                      checked={pushNotifications} 
                      onCheckedChange={setPushNotifications}
                      className="data-[state=checked]:bg-payzoo-green-500"
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Notifications e-mail</p>
                        <p className="text-sm text-gray-500">Mises à jour par e-mail</p>
                      </div>
                    </div>
                    <Switch 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications}
                      className="data-[state=checked]:bg-payzoo-green-500"
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Alertes de transaction</p>
                        <p className="text-sm text-gray-500">Notification pour chaque transaction</p>
                      </div>
                    </div>
                    <Switch 
                      checked={transactionAlerts} 
                      onCheckedChange={setTransactionAlerts}
                      className="data-[state=checked]:bg-payzoo-green-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne latérale */}
          <div className="space-y-8">
            
            {/* Security Section */}
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8">
                <h3 className="font-semibold text-gray-900 mb-8 text-xl">Sécurité</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                        <Key className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Mot de passe</p>
                        <p className="text-xs text-gray-500">Modifié il y a 3 mois</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl px-4 py-2 text-sm">
                      Changer
                    </Button>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">2FA</p>
                        <p className="text-xs text-gray-500">
                          {twoFactorEnabled ? "Activée" : "Désactivée"}
                        </p>
                      </div>
                    </div>
                    <Switch 
                      checked={twoFactorEnabled} 
                      onCheckedChange={setTwoFactorEnabled}
                      className="data-[state=checked]:bg-payzoo-green-500"
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Sessions</p>
                        <p className="text-xs text-gray-500">2 appareils connectés</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl px-4 py-2 text-sm">
                      Gérer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Section */}
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8">
                <h3 className="font-semibold text-gray-900 mb-8 text-xl">Support</h3>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full h-auto justify-start text-left p-4 hover:bg-gray-50 rounded-xl group transition-all duration-200">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-payzoo-green-100 transition-colors duration-200">
                        <HelpCircle className="w-4 h-4 text-gray-600 group-hover:text-payzoo-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">Centre d'aide</p>
                        <p className="text-xs text-gray-500">FAQ et guides</p>
                      </div>
                    </div>
                  </Button>

                  <Button variant="ghost" className="w-full h-auto justify-start text-left p-4 hover:bg-gray-50 rounded-xl group transition-all duration-200">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-payzoo-green-100 transition-colors duration-200">
                        <MessageCircle className="w-4 h-4 text-gray-600 group-hover:text-payzoo-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">Chat en direct</p>
                        <p className="text-xs text-gray-500">Support instantané</p>
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preferences & Account Actions */}
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8">
                <h3 className="font-semibold text-gray-900 mb-8 text-xl">Préférences</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                        <Globe className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Langue</p>
                        <p className="text-xs text-gray-500">Français</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl px-4 py-2 text-sm">
                      Changer
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-3 pt-4">
                    <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-50 h-12 rounded-xl">
                      <LogOut className="w-5 h-5 mr-3" />
                      <span>Se déconnecter</span>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50 h-12 rounded-xl">
                      <span>Supprimer le compte</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
