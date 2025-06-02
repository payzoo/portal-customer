
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
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-amber-500" />;
      case 'missing':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/50 pl-80">
      <div className="max-w-7xl mx-auto px-8 py-12">
        
        {/* Header dynamique */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
                Paramètres
              </h1>
              <p className="text-gray-600 text-lg font-medium">
                Gérez votre compte et vos préférences
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-payzoo-green-500 to-payzoo-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {currentUserData.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Barre de recherche améliorée */}
          <div className="relative max-w-md group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-payzoo-green-500 transition-colors duration-200" />
            <Input
              placeholder="Rechercher dans les paramètres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 bg-white/80 backdrop-blur-sm border-gray-200 focus:border-payzoo-green-500 focus:ring-payzoo-green-500 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Colonne principale */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* Profile Card Moderne */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 hover:shadow-xl transition-all duration-500 animate-fade-in overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-payzoo-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-payzoo-green-500 to-payzoo-green-600 rounded-3xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                      <span className="text-white font-bold text-2xl">{currentUserData.avatar}</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full border-3 border-white animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {currentUserData.firstName} {currentUserData.lastName}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 group/item hover:bg-gray-50 p-2 -m-2 rounded-xl transition-colors duration-200">
                        <Mail className="w-5 h-5 text-gray-400 group-hover/item:text-payzoo-green-500 transition-colors duration-200" />
                        <span className="text-gray-600 font-medium">{currentUserData.email}</span>
                      </div>
                      <div className="flex items-center gap-3 group/item hover:bg-gray-50 p-2 -m-2 rounded-xl transition-colors duration-200">
                        <Phone className="w-5 h-5 text-gray-400 group-hover/item:text-payzoo-green-500 transition-colors duration-200" />
                        <span className="text-gray-600 font-medium">{currentUserData.phone}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-2xl px-6 py-3 font-medium hover:bg-payzoo-green-50 hover:border-payzoo-green-200 hover:text-payzoo-green-700 transition-all duration-200">
                    Modifier
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* KYC Section Modernisée */}
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-500 animate-fade-in overflow-hidden">
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-payzoo-green-500/10 to-blue-500/10"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Vérification KYC</h3>
                    <p className="text-gray-200 text-lg">Augmentez vos limites de transaction</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-2 w-32 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-payzoo-green-400 to-payzoo-green-500 rounded-full transition-all duration-1000" style={{ width: '53%' }}></div>
                      </div>
                      <span className="text-sm text-gray-300 font-medium">53% complété</span>
                    </div>
                  </div>
                  <Button className="bg-white/10 text-white hover:bg-white/20 border-0 px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    Continuer
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {kycSettings.map((item, index) => (
                    <div 
                      key={index} 
                      className="group cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onMouseEnter={() => setActiveCard(`kyc-${index}`)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      <div className={`text-center p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                        activeCard === `kyc-${index}` 
                          ? 'border-payzoo-green-200 bg-payzoo-green-50/50 shadow-lg scale-105' 
                          : 'border-gray-100 hover:border-payzoo-green-200 hover:bg-payzoo-green-50/30'
                      }`}>
                        <div className="flex justify-center mb-4">
                          <div className={`p-4 rounded-2xl transition-all duration-300 ${
                            activeCard === `kyc-${index}` 
                              ? 'bg-payzoo-green-100 scale-110' 
                              : 'bg-gray-50 group-hover:bg-payzoo-green-100'
                          }`}>
                            <item.icon className={`w-7 h-7 transition-colors duration-300 ${
                              activeCard === `kyc-${index}` 
                                ? 'text-payzoo-green-600' 
                                : 'text-gray-600 group-hover:text-payzoo-green-600'
                            }`} />
                          </div>
                        </div>
                        <p className="font-bold text-gray-900 mb-2 text-lg">{item.title}</p>
                        <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                        <div className="flex justify-center mb-3">
                          {getStatusBadge(item.status)}
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-payzoo-green-400 to-payzoo-green-500 rounded-full transition-all duration-1000"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Menu dynamique */}
            {menuItems.map((category, categoryIndex) => (
              <Card key={category.category} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-500 animate-fade-in" style={{ animationDelay: `${categoryIndex * 150}ms` }}>
                <CardContent className="p-8">
                  <h3 className="font-bold text-gray-900 mb-6 text-xl flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-payzoo-green-500 to-payzoo-green-600 rounded-full"></div>
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="group flex items-center justify-between py-4 px-6 hover:bg-gray-50 rounded-2xl transition-all duration-200 cursor-pointer"
                        onMouseEnter={() => setActiveCard(`${category.category}-${itemIndex}`)}
                        onMouseLeave={() => setActiveCard(null)}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            activeCard === `${category.category}-${itemIndex}` 
                              ? 'bg-payzoo-green-100 scale-110' 
                              : 'bg-gray-50 group-hover:bg-payzoo-green-100'
                          }`}>
                            <item.icon className={`w-6 h-6 transition-colors duration-300 ${
                              activeCard === `${category.category}-${itemIndex}` 
                                ? 'text-payzoo-green-600' 
                                : 'text-gray-600 group-hover:text-payzoo-green-600'
                            }`} />
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
                              className="data-[state=checked]:bg-payzoo-green-500"
                            />
                          )}
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-payzoo-green-500 group-hover:translate-x-1 transition-all duration-200" />
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
            
            {/* Notifications Modernes */}
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-500 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-8 text-xl flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  Notifications
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: Bell, title: "Notifications push", desc: "Alertes sur votre appareil", state: pushNotifications, setState: setPushNotifications },
                    { icon: Mail, title: "Notifications e-mail", desc: "Mises à jour par e-mail", state: emailNotifications, setState: setEmailNotifications },
                    { icon: CreditCard, title: "Alertes de transaction", desc: "Notification pour chaque transaction", state: transactionAlerts, setState: setTransactionAlerts }
                  ].map((notification, index) => (
                    <div key={index} className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 rounded-2xl transition-all duration-200 group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                          <notification.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{notification.title}</p>
                          <p className="text-sm text-gray-500">{notification.desc}</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notification.state} 
                        onCheckedChange={notification.setState}
                        className="data-[state=checked]:bg-payzoo-green-500"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Moderne */}
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-500 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-8 text-xl flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  Support
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: HelpCircle, title: "Centre d'aide", desc: "FAQ et guides", color: "blue" },
                    { icon: MessageCircle, title: "Chat en direct", desc: "Support instantané", color: "green" },
                    { icon: Users, title: "Communauté", desc: "Forum utilisateurs", color: "purple" }
                  ].map((item, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className="w-full h-auto justify-start text-left p-6 hover:bg-gray-50 rounded-2xl group transition-all duration-200 hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-4 w-full">
                        <div className={`w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-${item.color}-100 transition-all duration-200`}>
                          <item.icon className={`w-5 h-5 text-gray-600 group-hover:text-${item.color}-600 transition-colors duration-200`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions Compte */}
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-500 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-8 text-xl flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                  Actions
                </h3>
                <div className="space-y-4">
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-50 h-14 rounded-2xl group transition-all duration-200 hover:scale-[1.02]">
                    <LogOut className="w-5 h-5 mr-4 group-hover:text-orange-500 transition-colors duration-200" />
                    <span className="font-medium">Se déconnecter</span>
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50 h-14 rounded-2xl group transition-all duration-200 hover:scale-[1.02]">
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
