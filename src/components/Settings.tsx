
import { User, Shield, Bell, HelpCircle, LogOut, Globe, CheckCircle, AlertCircle, MapPin, CreditCard, Key, Smartphone, FileText, MessageCircle, Mail, Phone, Search, ChevronRight, Users, Lock, Eye, EyeOff } from "lucide-react";
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
    firstName: "John",
    lastName: "Doe",
    email: "dao.housseine@gmail.com",
    phone: "+33 6 12 34 56 78",
    avatar: "JD"
  };

  const kycSettings = [
    { 
      icon: User, 
      title: "Identité", 
      status: "verified", 
      description: "Documents validés",
      progress: 100
    },
    { 
      icon: MapPin, 
      title: "Domicile", 
      status: "pending", 
      description: "En cours de vérification",
      progress: 60
    },
    { 
      icon: CreditCard, 
      title: "Revenus", 
      status: "missing", 
      description: "Justificatifs requis",
      progress: 0
    },
  ];

  const menuItems = [
    {
      category: "Compte",
      items: [
        { icon: User, title: "Profil", description: "Informations personnelles", action: "edit" },
        { icon: Mail, title: "Email", description: currentUserData.email, action: "edit" },
        { icon: Phone, title: "Téléphone", description: currentUserData.phone, action: "edit" },
      ]
    },
    {
      category: "Sécurité",
      items: [
        { icon: Key, title: "Mot de passe", description: "Modifié il y a 3 mois", action: "change" },
        { icon: Smartphone, title: "Authentification 2FA", description: twoFactorEnabled ? "Activée" : "Désactivée", action: "toggle", toggle: true },
        { icon: Shield, title: "Sessions actives", description: "2 appareils connectés", action: "manage" },
      ]
    },
    {
      category: "Préférences",
      items: [
        { icon: Globe, title: "Langue", description: "Français", action: "select" },
        { icon: Bell, title: "Notifications", description: "Gérer les alertes", action: "manage" },
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium">Vérifié</Badge>;
      case 'pending':
        return <Badge className="bg-amber-50 text-amber-700 border-amber-200 font-medium">En cours</Badge>;
      case 'missing':
        return <Badge className="bg-red-50 text-red-700 border-red-200 font-medium">Requis</Badge>;
      default:
        return <Badge variant="secondary">À faire</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-black mb-3">
                Paramètres
              </h1>
              <p className="text-gray-600 text-lg font-medium">
                Gérez votre compte et vos préférences
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {currentUserData.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
          
          {/* Barre de recherche */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Rechercher dans les paramètres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 bg-white border-gray-200 focus:border-black focus:ring-black rounded-2xl shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Colonne principale */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* Profile Card */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-2xl">{currentUserData.avatar}</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {currentUserData.firstName} {currentUserData.lastName}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600 font-medium">{currentUserData.email}</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600 font-medium">{currentUserData.phone}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-2xl px-6 py-3 font-medium hover:bg-gray-50 border-black text-black">
                    Modifier
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* KYC Section */}
            <Card className="border-0 shadow-lg bg-white">
              <div className="bg-black p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Vérification KYC</h3>
                    <p className="text-gray-200 text-lg">Augmentez vos limites de transaction</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-2 w-32 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: '53%' }}></div>
                      </div>
                      <span className="text-sm text-gray-300 font-medium">53% complété</span>
                    </div>
                  </div>
                  <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg">
                    Continuer
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {kycSettings.map((item, index) => (
                    <div key={index} className="text-center p-6 rounded-3xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-300">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 rounded-2xl bg-gray-50">
                          <item.icon className="w-7 h-7 text-gray-600" />
                        </div>
                      </div>
                      <p className="font-bold text-gray-900 mb-2 text-lg">{item.title}</p>
                      <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                      <div className="flex justify-center mb-3">
                        {getStatusBadge(item.status)}
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="h-full bg-emerald-400 rounded-full transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Menu dynamique */}
            {menuItems.map((category, categoryIndex) => (
              <Card key={category.category} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-gray-900 mb-6 text-xl flex items-center gap-3">
                    <div className="w-1 h-6 bg-black rounded-full"></div>
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center justify-between py-4 px-6 hover:bg-gray-50 rounded-2xl transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-50">
                            <item.icon className="w-6 h-6 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900 text-lg">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {item.toggle && (
                            <Switch 
                              checked={item.title.includes('2FA') ? twoFactorEnabled : false} 
                              onCheckedChange={item.title.includes('2FA') ? setTwoFactorEnabled : undefined}
                              className="data-[state=checked]:bg-black"
                            />
                          )}
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Colonne latérale */}
          <div className="space-y-8">
            
            {/* Notifications */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-8 text-xl flex items-center gap-3">
                  <div className="w-1 h-6 bg-black rounded-full"></div>
                  Notifications
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: Bell, title: "Notifications push", desc: "Alertes sur votre appareil", state: pushNotifications, setState: setPushNotifications },
                    { icon: Mail, title: "Notifications e-mail", desc: "Mises à jour par e-mail", state: emailNotifications, setState: setEmailNotifications },
                    { icon: CreditCard, title: "Alertes de transaction", desc: "Notification pour chaque transaction", state: transactionAlerts, setState: setTransactionAlerts }
                  ].map((notification, index) => (
                    <div key={index} className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 rounded-2xl transition-all duration-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                          <notification.icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{notification.title}</p>
                          <p className="text-sm text-gray-500">{notification.desc}</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notification.state} 
                        onCheckedChange={notification.setState}
                        className="data-[state=checked]:bg-black"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-8 text-xl flex items-center gap-3">
                  <div className="w-1 h-6 bg-black rounded-full"></div>
                  Support
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: HelpCircle, title: "Centre d'aide", desc: "FAQ et guides" },
                    { icon: MessageCircle, title: "Chat en direct", desc: "Support instantané" },
                    { icon: Users, title: "Communauté", desc: "Forum utilisateurs" }
                  ].map((item, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className="w-full h-auto justify-start text-left p-6 hover:bg-gray-50 rounded-2xl transition-all duration-200"
                    >
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions Compte */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-8 text-xl flex items-center gap-3">
                  <div className="w-1 h-6 bg-black rounded-full"></div>
                  Actions
                </h3>
                <div className="space-y-4">
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-50 h-14 rounded-2xl">
                    <LogOut className="w-5 h-5 mr-4" />
                    <span className="font-medium">Se déconnecter</span>
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50 h-14 rounded-2xl">
                    <span className="font-medium">Supprimer le compte</span>
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
