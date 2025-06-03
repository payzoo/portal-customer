
import { User, Shield, Bell, HelpCircle, Globe, CheckCircle, AlertCircle, MapPin, CreditCard, Key, Smartphone, FileText, MessageCircle, Mail, Phone, Search, ChevronRight, Users, Brain, Zap, Eye, Palette, Moon, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export function Settings() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
    avatar: "JD",
    plan: "Pro",
    verified: true
  };

  const kycSettings = [
    { 
      icon: User, 
      title: "Identité", 
      status: "verified", 
      description: "Documents validés",
      progress: 100,
      color: "emerald"
    },
    { 
      icon: MapPin, 
      title: "Domicile", 
      status: "pending", 
      description: "En cours de vérification",
      progress: 60,
      color: "amber"
    },
    { 
      icon: CreditCard, 
      title: "Revenus", 
      status: "missing", 
      description: "Justificatifs requis",
      progress: 0,
      color: "red"
    },
  ];

  const menuItems = [
    {
      category: "Compte",
      icon: User,
      items: [
        { icon: User, title: "Profil personnel", description: "Informations et préférences", action: "edit" },
        { icon: Mail, title: "Email", description: currentUserData.email, verified: true },
        { icon: Phone, title: "Téléphone", description: currentUserData.phone, verified: true },
        { icon: Eye, title: "Confidentialité", description: "Contrôlez vos données", action: "manage" },
      ]
    },
    {
      category: "Sécurité",
      icon: Shield,
      items: [
        { icon: Key, title: "Mot de passe", description: "Dernière modification il y a 3 mois", action: "change" },
        { icon: Smartphone, title: "Authentification 2FA", description: twoFactorEnabled ? "Protection activée" : "Sécurité renforcée disponible", toggle: true, value: twoFactorEnabled, onChange: setTwoFactorEnabled },
        { icon: Shield, title: "Sessions actives", description: "2 appareils connectés", count: 2 },
      ]
    },
    {
      category: "Expérience",
      icon: Palette,
      items: [
        { icon: Globe, title: "Langue & Région", description: "Français (France)", action: "select" },
        { icon: Bell, title: "Notifications", description: notifications ? "Toutes activées" : "Désactivées", toggle: true, value: notifications, onChange: setNotifications },
        { icon: darkMode ? Moon : Sun, title: "Thème", description: darkMode ? "Mode sombre" : "Mode clair", toggle: true, value: darkMode, onChange: setDarkMode },
      ]
    }
  ];

  const supportItems = [
    { icon: HelpCircle, title: "Centre d'aide", description: "Guides et documentation", badge: "Nouveau" },
    { icon: MessageCircle, title: "Support instantané", description: "Chat en direct 24/7", status: "online" },
    { icon: Users, title: "Communauté", description: "Forum et discussions", members: "12k+" }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      verified: { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "border-emerald-200", label: "Vérifié" },
      pending: { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-200", label: "En cours" },
      missing: { bg: "bg-red-500/10", text: "text-red-600", border: "border-red-200", label: "Requis" }
    };
    
    const variant = variants[status as keyof typeof variants] || variants.missing;
    
    return (
      <Badge className={`${variant.bg} ${variant.text} ${variant.border} font-medium text-xs px-3 py-1 rounded-full`}>
        {variant.label}
      </Badge>
    );
  };

  const getStatusIcon = (status: string) => {
    const iconProps = "w-4 h-4";
    switch (status) {
      case 'verified':
        return <CheckCircle className={`${iconProps} text-emerald-500`} />;
      case 'pending':
        return <AlertCircle className={`${iconProps} text-amber-500`} />;
      case 'missing':
        return <AlertCircle className={`${iconProps} text-red-500`} />;
      default:
        return <AlertCircle className={`${iconProps} text-gray-400`} />;
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric floating elements */}
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-foreground/20 rounded-full animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-48 left-1/3 w-1 h-1 bg-foreground/30 rounded-full animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-foreground/25 rounded-full animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="payzoo-page-container relative z-10">
        
        {/* Enhanced Header */}
        <div className={`mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative p-3 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl shadow-lg">
                <User className="w-7 h-7 text-background" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Smart Settings
                  </span>
                </div>
                <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-light text-foreground mb-3 tracking-tight">
                Paramètres
              </h1>
              <p className="text-muted-foreground flex items-center gap-3 text-lg">
                <Brain className="w-5 h-5" />
                Personnalisez votre expérience et gérez votre compte
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Search */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative max-w-lg">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Search className="text-muted-foreground w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Rechercher un paramètre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-14 pl-12 pr-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 focus:bg-card/80 transition-all duration-300 text-foreground placeholder:text-muted-foreground text-base shadow-sm"
            />
            {searchTerm && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs font-medium text-muted-foreground">
                  {filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0)}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-10">
          
          {/* Enhanced Profile Card */}
          <Card 
            className={`group border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md hover:from-card/90 hover:to-card/60 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '300ms' }}
            onMouseEnter={() => setHoveredCard('profile')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-10">
              <div className="flex items-center gap-8 mb-8">
                <div className="relative">
                  <div className={`w-24 h-24 bg-gradient-to-br from-foreground via-foreground/90 to-foreground/80 rounded-3xl flex items-center justify-center shadow-xl transition-all duration-500 ${hoveredCard === 'profile' ? 'shadow-2xl scale-110 rotate-3' : ''}`}>
                    <span className="text-background font-bold text-3xl">{currentUserData.avatar}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{currentUserData.plan}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-3xl font-light text-foreground tracking-tight">
                      {currentUserData.firstName} {currentUserData.lastName}
                    </h3>
                    {currentUserData.verified && (
                      <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 font-medium">
                        Vérifié
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <Mail className="w-5 h-5" />
                      <span className="text-base">{currentUserData.email}</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <Phone className="w-5 h-5" />
                      <span className="text-base">{currentUserData.phone}</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-foreground to-foreground/90 hover:from-foreground/90 hover:to-foreground text-background border-0 h-12 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Modifier
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced KYC Section */}
          <Card 
            className={`border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md hover:from-card/90 hover:to-card/60 transition-all duration-700 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '400ms' }}
          >
            <CardContent className="p-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-3xl font-light text-foreground mb-3 tracking-tight">Vérification KYC</h3>
                  <p className="text-muted-foreground text-lg">Débloquez toutes les fonctionnalités</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-lg font-medium text-foreground mb-2">53% terminé</div>
                    <div className="w-32 h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: '53%' }}
                      ></div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 h-12 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Continuer
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-6">
                {kycSettings.map((item, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center justify-between p-8 rounded-3xl border border-border/30 bg-background/60 hover:bg-background/80 hover:border-border/50 transition-all duration-500 cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-500/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <p className="font-medium text-foreground text-lg">{item.title}</p>
                          {getStatusIcon(item.status)}
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      {getStatusBadge(item.status)}
                      <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all duration-300" />
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
              className={`border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md hover:from-card/90 hover:to-card/60 transition-all duration-700 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
              style={{ animationDelay: `${500 + categoryIndex * 100}ms` }}
            >
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground tracking-tight">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.items.filter(item => 
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="group flex items-center justify-between py-6 px-8 hover:bg-background/60 rounded-2xl transition-all duration-500 cursor-pointer hover:shadow-md hover:-translate-y-1"
                      onClick={() => setActiveSection(activeSection === `${category.category}-${itemIndex}` ? null : `${category.category}-${itemIndex}`)}
                    >
                      <div className="flex items-center gap-6 flex-1">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <item.icon className="w-6 h-6 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <p className="font-medium text-foreground text-lg group-hover:text-foreground/90 transition-colors duration-200">{item.title}</p>
                            {item.verified && (
                              <CheckCircle className="w-4 h-4 text-emerald-500" />
                            )}
                            {item.count && (
                              <Badge variant="secondary" className="text-xs px-2 py-1">
                                {item.count}
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {item.toggle && (
                          <Switch 
                            checked={item.value} 
                            onCheckedChange={item.onChange}
                            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-emerald-500 data-[state=checked]:to-teal-500 transition-all duration-300"
                          />
                        )}
                        {item.action && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-200"
                          >
                            {item.action === 'edit' ? 'Modifier' : item.action === 'change' ? 'Changer' : item.action === 'manage' ? 'Gérer' : 'Sélectionner'}
                          </Button>
                        )}
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Enhanced Support Section */}
          {filteredSupportItems.length > 0 && (
            <Card 
              className={`border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md hover:from-card/90 hover:to-card/60 transition-all duration-700 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
              style={{ animationDelay: '800ms' }}
            >
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground tracking-tight">
                    Support & Communauté
                  </h3>
                </div>
                <div className="grid gap-4">
                  {filteredSupportItems.map((item, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-6 py-6 px-8 hover:bg-background/60 rounded-2xl transition-all duration-500 cursor-pointer hover:shadow-md hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                        <item.icon className="w-6 h-6 text-foreground" />
                        {item.status === 'online' && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <p className="font-medium text-foreground text-lg group-hover:text-foreground/90 transition-colors duration-200">{item.title}</p>
                          {item.badge && (
                            <Badge className="bg-purple-500/10 text-purple-600 border-purple-200 text-xs px-2 py-1">
                              {item.badge}
                            </Badge>
                          )}
                          {item.members && (
                            <Badge variant="secondary" className="text-xs px-2 py-1">
                              {item.members}
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">{item.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all duration-300" />
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
