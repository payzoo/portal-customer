
import { User, Shield, Bell, HelpCircle, Globe, CheckCircle, AlertCircle, MapPin, CreditCard, Key, Smartphone, FileText, MessageCircle, Mail, Phone, Search, ChevronRight, Users, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export function Settings() {
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
        { icon: User, title: "Profil", description: "Informations personnelles" },
        { icon: Mail, title: "Email", description: currentUserData.email },
        { icon: Phone, title: "Téléphone", description: currentUserData.phone },
      ]
    },
    {
      category: "Sécurité",
      items: [
        { icon: Key, title: "Mot de passe", description: "Modifié il y a 3 mois" },
        { icon: Smartphone, title: "Authentification 2FA", description: twoFactorEnabled ? "Activée" : "Désactivée", toggle: true },
        { icon: Shield, title: "Sessions actives", description: "2 appareils connectés" },
      ]
    },
    {
      category: "Préférences",
      items: [
        { icon: Globe, title: "Langue", description: "Français" },
        { icon: Bell, title: "Notifications", description: "Gérer les alertes" },
      ]
    }
  ];

  const supportItems = [
    { icon: HelpCircle, title: "Centre d'aide", description: "FAQ et guides détaillés" },
    { icon: MessageCircle, title: "Chat en direct", description: "Support instantané 24/7" },
    { icon: Users, title: "Communauté", description: "Forum et discussions" }
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

  const filteredSupportItems = supportItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-border/20 rounded-3xl rotate-12 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-border/30 rounded-2xl -rotate-12 animate-[float_8s_ease-in-out_infinite] opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-border/25 rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-32 right-1/3 w-20 h-20 border border-border/20 rounded-full animate-[float_9s_ease-in-out_infinite] opacity-40" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="payzoo-page-container relative z-10">
        
        {/* Header section */}
        <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-foreground rounded-xl shadow-sm">
                <User className="w-6 h-6 text-background" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-purple-600">Smart Settings</span>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Paramètres</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Gérez votre compte et personnalisez votre expérience
              </p>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className={`mb-8 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher dans les paramètres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="space-y-8">
          
          {/* Profile Card */}
          <Card className={`group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-border/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '200ms' }}>
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
                <Button className="bg-foreground/10 hover:bg-foreground hover:text-background text-foreground border-0 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  Modifier le profil
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* KYC Section - remove hover effects */}
          <Card className={`border-0 bg-card/50 backdrop-blur-sm transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '300ms' }}>
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
                  <Button className="bg-foreground hover:bg-foreground/90 text-background hover:scale-105 transition-transform duration-200 border-0">
                    Continuer
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                {kycSettings.map((item, index) => (
                  <div key={index} className="group flex items-center justify-between p-6 rounded-2xl border border-border/30 bg-background/50 transition-all duration-300 cursor-pointer">
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

          {/* Settings Sections - remove hover effects */}
          {filteredCategories.map((category, categoryIndex) => (
            <Card key={category.category} className={`border-0 bg-card/50 backdrop-blur-sm transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: `${400 + categoryIndex * 100}ms` }}>
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
                      className="group flex items-center justify-between py-4 px-6 hover:bg-background/50 rounded-2xl transition-all duration-300 cursor-pointer"
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

          {/* Support Section - remove hover effects */}
          {filteredSupportItems.length > 0 && (
            <Card className={`border-0 bg-card/50 backdrop-blur-sm transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '700ms' }}>
              <CardContent className="p-8">
                <h3 className="text-xl font-light text-foreground mb-6 tracking-tight">
                  Support
                </h3>
                <div className="space-y-2">
                  {filteredSupportItems.map((item, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-4 py-4 px-6 hover:bg-background/50 rounded-2xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-muted/50 rounded-2xl flex items-center justify-center group-hover:bg-muted group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-foreground/90 transition-colors duration-200">{item.title}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">{item.description}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
