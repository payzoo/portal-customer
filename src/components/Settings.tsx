
import { User, Shield, Bell, HelpCircle, LogOut, Globe, CheckCircle, AlertCircle, MapPin, CreditCard, Key, Smartphone, FileText, MessageCircle, Mail, Phone, Search, ChevronRight, Users, Lock, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export function Settings() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [transactionAlerts, setTransactionAlerts] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
        return <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium text-xs px-2 py-1">Vérifié</Badge>;
      case 'pending':
        return <Badge className="bg-amber-50 text-amber-700 border-amber-200 font-medium text-xs px-2 py-1">En cours</Badge>;
      case 'missing':
        return <Badge className="bg-red-50 text-red-700 border-red-200 font-medium text-xs px-2 py-1">Requis</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs px-2 py-1">À faire</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-emerald-600" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-amber-600" />;
      case 'missing':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const filteredCategories = menuItems.filter(category =>
    category.items.some(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/5">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        
        {/* Enhanced Modern Header */}
        <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-light text-foreground tracking-tight leading-tight">
                Paramètres
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gérez votre compte et personnalisez votre expérience
              </p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl flex items-center justify-center text-background font-bold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              {currentUserData.avatar}
            </div>
          </div>
          
          {/* Enhanced Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Rechercher dans les paramètres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 pl-12 pr-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-8">
          
          {/* Enhanced Profile Card */}
          <Card className={`group border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 hover:border-border/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '100ms' }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <span className="text-background font-bold text-2xl">{currentUserData.avatar}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-foreground mb-2 tracking-tight">
                    {currentUserData.firstName} {currentUserData.lastName}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{currentUserData.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{currentUserData.phone}</span>
                    </div>
                  </div>
                </div>
                <Button className="payzoo-btn-secondary group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  Modifier le profil
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced KYC Section */}
          <Card className={`border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 hover:border-border/70 transition-all duration-500 hover:shadow-xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '200ms' }}>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-light text-foreground mb-2 tracking-tight">Vérification KYC</h3>
                  <p className="text-muted-foreground">Augmentez vos limites de transaction</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">53% terminé</div>
                    <div className="w-20 h-2 bg-muted rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out" style={{ width: '53%' }}></div>
                    </div>
                  </div>
                  <Button className="payzoo-btn-primary hover:scale-105 transition-transform duration-200">
                    Continuer
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                {kycSettings.map((item, index) => (
                  <div key={index} className="group flex items-center justify-between p-6 rounded-2xl border border-border/30 bg-background/50 hover:bg-background/80 hover:border-border/50 transition-all duration-300 cursor-pointer hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center group-hover:bg-muted group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <p className="font-medium text-foreground">{item.title}</p>
                          {getStatusIcon(item.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {getStatusBadge(item.status)}
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Settings Sections */}
          {filteredCategories.map((category, categoryIndex) => (
            <Card key={category.category} className={`border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 hover:border-border/70 transition-all duration-500 hover:shadow-xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: `${300 + categoryIndex * 100}ms` }}>
              <CardContent className="p-8">
                <h3 className="text-xl font-light text-foreground mb-6 tracking-tight">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.items.filter(item => 
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="group flex items-center justify-between py-4 px-6 hover:bg-background/50 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-sm hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-muted/50 group-hover:bg-muted group-hover:scale-110 transition-all duration-300">
                          <item.icon className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground group-hover:text-foreground/90 transition-colors duration-200">{item.title}</p>
                          <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {item.toggle && (
                          <Switch 
                            checked={item.title.includes('2FA') ? twoFactorEnabled : false} 
                            onCheckedChange={item.title.includes('2FA') ? setTwoFactorEnabled : undefined}
                            className="data-[state=checked]:bg-foreground transition-all duration-200"
                          />
                        )}
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Enhanced Support Section */}
          <Card className={`border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 hover:border-border/70 transition-all duration-500 hover:shadow-xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '600ms' }}>
            <CardContent className="p-8">
              <h3 className="text-xl font-light text-foreground mb-6 tracking-tight">
                Support
              </h3>
              <div className="space-y-2">
                {[
                  { icon: HelpCircle, title: "Centre d'aide", desc: "FAQ et guides détaillés" },
                  { icon: MessageCircle, title: "Chat en direct", desc: "Support instantané 24/7" },
                  { icon: Users, title: "Communauté", desc: "Forum et discussions" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-center gap-4 py-4 px-6 hover:bg-background/50 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 bg-muted/50 rounded-2xl flex items-center justify-center group-hover:bg-muted group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground group-hover:text-foreground/90 transition-colors duration-200">{item.title}</p>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">{item.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Actions Section */}
          <Card className={`border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 hover:border-border/70 transition-all duration-500 hover:shadow-xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '700ms' }}>
            <CardContent className="p-8">
              <h3 className="text-xl font-light text-foreground mb-6 tracking-tight">
                Actions
              </h3>
              <div className="space-y-4">
                <Button className="w-full justify-start h-12 bg-background/50 hover:bg-background text-foreground border border-border/50 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <LogOut className="w-5 h-5 mr-3" />
                  <span className="font-medium">Se déconnecter</span>
                </Button>
                
                <Button className="w-full justify-start h-12 bg-red-50/50 hover:bg-red-100/50 text-red-600 border border-red-200/50 hover:border-red-300/50 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <span className="font-medium">Supprimer le compte</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
