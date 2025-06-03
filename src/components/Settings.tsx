
import { User, Shield, Bell, HelpCircle, Globe, CheckCircle, AlertCircle, MapPin, CreditCard, Key, Smartphone, FileText, MessageCircle, Mail, Phone, Search, ChevronRight, Users, Brain, Zap, Settings as SettingsIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export function Settings() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

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
      icon: User,
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue",
      items: [
        { icon: User, title: "Profil", description: "Informations personnelles", action: "Modifier" },
        { icon: Mail, title: "Email", description: currentUserData.email, action: "Changer", verified: true },
        { icon: Phone, title: "Téléphone", description: currentUserData.phone, action: "Modifier", verified: true },
      ]
    },
    {
      category: "Sécurité",
      icon: Shield,
      gradient: "from-emerald-500/20 to-teal-500/20",
      accentColor: "emerald",
      items: [
        { icon: Key, title: "Mot de passe", description: "Modifié il y a 3 mois", action: "Changer" },
        { 
          icon: Smartphone, 
          title: "Authentification 2FA", 
          description: twoFactorEnabled ? "Activée" : "Désactivée", 
          action: "Configurer",
          toggle: true,
          value: twoFactorEnabled,
          onChange: setTwoFactorEnabled
        },
        { icon: Shield, title: "Sessions actives", description: "2 appareils connectés", action: "Gérer", count: 2 },
      ]
    },
    {
      category: "Préférences",
      icon: SettingsIcon,
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      items: [
        { icon: Globe, title: "Langue", description: "Français", action: "Changer" },
        { icon: Bell, title: "Notifications", description: "Gérer les alertes", action: "Configurer", count: 5 },
      ]
    }
  ];

  const supportItems = [
    { icon: HelpCircle, title: "Centre d'aide", description: "FAQ et guides détaillés", action: "Ouvrir" },
    { icon: MessageCircle, title: "Chat en direct", description: "Support instantané 24/7", action: "Démarrer" },
    { icon: Users, title: "Communauté", description: "Forum et discussions", action: "Rejoindre" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-medium text-xs px-3 py-1">Vérifié</Badge>;
      case 'pending':
        return <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 font-medium text-xs px-3 py-1">En cours</Badge>;
      case 'missing':
        return <Badge className="bg-red-500/10 text-red-400 border-red-500/20 font-medium text-xs px-3 py-1">Requis</Badge>;
      default:
        return <Badge className="bg-gray-500/10 text-gray-400 border-gray-500/20 text-xs px-3 py-1">À faire</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-amber-400" />;
      case 'missing':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getAccentColor = (accentColor: string) => {
    const colors = {
      blue: "border-l-blue-400 bg-blue-500/5",
      emerald: "border-l-emerald-400 bg-emerald-500/5",
      purple: "border-l-purple-400 bg-purple-500/5"
    };
    return colors[accentColor as keyof typeof colors] || colors.blue;
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-3xl rotate-12 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-primary/20 rounded-2xl -rotate-12 animate-[float_8s_ease-in-out_infinite] opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary/15 rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-32 right-1/3 w-20 h-20 bg-gradient-to-r from-primary/5 to-transparent rounded-full animate-[float_9s_ease-in-out_infinite] opacity-40" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-[grid_20s_linear_infinite]"></div>
      </div>

      <div className="payzoo-page-container relative z-10">
        
        {/* Enhanced header section */}
        <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="p-3 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg">
                  <SettingsIcon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Smart Settings</span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-3">
                Paramètres
              </h1>
              <p className="text-muted-foreground flex items-center gap-3 text-lg">
                <Brain className="w-5 h-5 text-primary" />
                Gérez votre compte et personnalisez votre expérience
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced search bar */}
        <div className={`mb-10 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher dans les paramètres..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-14 pl-14 pr-6 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 text-foreground placeholder:text-muted-foreground text-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-10">
          
          {/* Enhanced Profile Card */}
          <Card className={`group border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl hover:from-card/90 hover:to-card/60 transition-all duration-500 overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-10 relative">
              <div className="flex items-center gap-8 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-all duration-300">
                    <span className="text-primary-foreground font-bold text-3xl">{currentUserData.avatar}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-light text-foreground mb-3 tracking-tight">
                    {currentUserData.firstName} {currentUserData.lastName}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-base">{currentUserData.email}</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-base">{currentUserData.phone}</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 px-8 py-3 text-base font-medium rounded-xl">
                  Modifier le profil
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced KYC Section */}
          <Card className={`border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '300ms' }}>
            <CardContent className="p-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-3xl font-light text-foreground mb-3 tracking-tight">Vérification KYC</h3>
                  <p className="text-muted-foreground text-lg">Augmentez vos limites de transaction</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-base font-medium text-foreground mb-2">53% terminé</div>
                    <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out" style={{ width: '53%' }}></div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 px-8 py-3 text-base font-medium rounded-xl">
                    Continuer
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                {kycSettings.map((item, index) => (
                  <div key={index} className="group flex items-center justify-between p-8 rounded-3xl border-l-4 border-l-primary/20 bg-gradient-to-r from-background/50 to-transparent hover:border-l-primary hover:from-primary/5 hover:to-transparent transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <p className="font-medium text-foreground text-lg">{item.title}</p>
                          {getStatusIcon(item.status)}
                        </div>
                        <p className="text-base text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      {getStatusBadge(item.status)}
                      <div className="w-20 h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Settings Sections */}
          {filteredCategories.map((category, categoryIndex) => (
            <Card 
              key={category.category} 
              className={`border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} 
              style={{ animationDelay: `${400 + categoryIndex * 100}ms` }}
              onMouseEnter={() => setHoveredSection(category.category)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 transition-opacity duration-500 ${hoveredSection === category.category ? 'opacity-100' : ''}`}></div>
              <CardContent className="p-10 relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-${category.accentColor}-500/20 to-${category.accentColor}-500/10 flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 text-${category.accentColor}-400`} />
                  </div>
                  <h3 className="text-2xl font-light text-foreground tracking-tight">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.items.filter(item => 
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className={`group flex items-center justify-between py-6 px-8 hover:bg-gradient-to-r hover:from-background/30 hover:to-transparent rounded-2xl transition-all duration-300 cursor-pointer border-l-4 border-l-transparent hover:${getAccentColor(category.accentColor)}`}
                    >
                      <div className="flex items-center gap-6 flex-1">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10 group-hover:from-muted/50 group-hover:to-muted/20 transition-all duration-300">
                          <item.icon className="w-6 h-6 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <p className="font-medium text-foreground text-lg">{item.title}</p>
                            {item.verified && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                            {item.count && (
                              <Badge className={`bg-${category.accentColor}-500/10 text-${category.accentColor}-400 border-${category.accentColor}-500/20 text-xs px-2 py-1`}>
                                {item.count}
                              </Badge>
                            )}
                          </div>
                          <p className="text-base text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {item.toggle && (
                          <Switch 
                            checked={item.value} 
                            onCheckedChange={item.onChange}
                            className="data-[state=checked]:bg-primary transition-all duration-200"
                          />
                        )}
                        <Button variant="ghost" className="text-sm px-4 py-2 rounded-xl">
                          {item.action}
                        </Button>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Enhanced Support Section */}
          {filteredSupportItems.length > 0 && (
            <Card className={`border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '700ms' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/10 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground tracking-tight">
                    Support
                  </h3>
                </div>
                <div className="space-y-3">
                  {filteredSupportItems.map((item, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-6 py-6 px-8 hover:bg-gradient-to-r hover:from-background/30 hover:to-transparent rounded-2xl transition-all duration-300 cursor-pointer border-l-4 border-l-transparent hover:border-l-orange-400 hover:bg-orange-500/5"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl flex items-center justify-center group-hover:from-muted/50 group-hover:to-muted/20 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-lg mb-1">{item.title}</p>
                        <p className="text-base text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" className="text-sm px-4 py-2 rounded-xl">
                          {item.action}
                        </Button>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
}
