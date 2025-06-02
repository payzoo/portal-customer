
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
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-6">
        
        {/* Header Ultra Clean */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">
                Paramètres
              </h1>
              <p className="text-gray-500 text-base">
                Gérez votre compte et vos préférences
              </p>
            </div>
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white font-bold shadow-sm">
              {currentUserData.avatar}
            </div>
          </div>
          
          {/* Search Bar Minimal */}
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-10 bg-gray-50 border-0 focus:bg-white focus:ring-1 focus:ring-black rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Profile Card Minimal */}
            <Card className="border-0 shadow-sm bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-xl">{currentUserData.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-1">
                      {currentUserData.firstName} {currentUserData.lastName}
                    </h3>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{currentUserData.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{currentUserData.phone}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-lg px-4 py-2 border-black text-black hover:bg-black hover:text-white">
                    Modifier
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* KYC Section Redesigned */}
            <Card className="border-0 shadow-sm bg-black text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Vérification KYC</h3>
                    <p className="text-gray-300">Augmentez vos limites</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: '53%' }}></div>
                      </div>
                      <span className="text-sm text-gray-300">53%</span>
                    </div>
                  </div>
                  <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-lg font-medium">
                    Continuer
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {kycSettings.map((item, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-xl bg-gray-800">
                          <item.icon className="w-5 h-5 text-gray-300" />
                        </div>
                      </div>
                      <p className="font-medium text-white mb-1 text-sm">{item.title}</p>
                      <p className="text-xs text-gray-400 mb-3">{item.description}</p>
                      <div className="flex justify-center mb-2">
                        {getStatusBadge(item.status)}
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Settings Sections */}
            {menuItems.map((category, categoryIndex) => (
              <Card key={category.category} className="border-0 shadow-sm bg-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-black mb-4 text-lg">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-xl transition-all duration-200 cursor-pointer group"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-colors">
                            <item.icon className="w-5 h-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-black">{item.title}</p>
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
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Notifications Minimal */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-black mb-4 text-lg">
                  Notifications
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Bell, title: "Notifications push", desc: "Alertes sur votre appareil", state: pushNotifications, setState: setPushNotifications },
                    { icon: Mail, title: "Notifications e-mail", desc: "Mises à jour par e-mail", state: emailNotifications, setState: setEmailNotifications },
                    { icon: CreditCard, title: "Alertes de transaction", desc: "Pour chaque transaction", state: transactionAlerts, setState: setTransactionAlerts }
                  ].map((notification, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                          <notification.icon className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-black text-sm">{notification.title}</p>
                          <p className="text-xs text-gray-500">{notification.desc}</p>
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

            {/* Support Minimal */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-black mb-4 text-lg">
                  Support
                </h3>
                <div className="space-y-2">
                  {[
                    { icon: HelpCircle, title: "Centre d'aide", desc: "FAQ et guides" },
                    { icon: MessageCircle, title: "Chat en direct", desc: "Support instantané" },
                    { icon: Users, title: "Communauté", desc: "Forum utilisateurs" }
                  ].map((item, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className="w-full h-auto justify-start text-left p-3 hover:bg-gray-50 rounded-xl transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-black text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-black mb-4 text-lg">
                  Actions
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start text-gray-600 h-10 rounded-lg border-gray-200">
                    <LogOut className="w-4 h-4 mr-3" />
                    <span className="font-medium">Se déconnecter</span>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start text-red-500 h-10 rounded-lg border-red-100 hover:bg-red-50 hover:border-red-200">
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
