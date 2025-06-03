import { User, Shield, Bell, HelpCircle, Globe, Key, Smartphone, FileText, MessageCircle, Search, ChevronRight, Users, Brain, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { ProfileCard } from "@/components/settings/ProfileCard";
import { KYCSection } from "@/components/settings/KYCSection";
import { SecurityModal } from "@/components/modals/SecurityModal";

export function Settings() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);

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
      status: "verified" as const, 
      description: "Documents validés",
      progress: 100
    },
    { 
      icon: Globe, 
      title: "Domicile", 
      status: "pending" as const, 
      description: "En cours de vérification",
      progress: 60
    },
    { 
      icon: FileText, 
      title: "Revenus", 
      status: "missing" as const, 
      description: "Justificatifs requis",
      progress: 0
    },
  ];

  const menuItems = [
    {
      category: "Compte",
      items: [
        { 
          icon: User, 
          title: "Informations personnelles", 
          description: "Gérer vos données de profil",
          action: () => console.log("Profile settings")
        },
        { 
          icon: Globe, 
          title: "Préférences de langue", 
          description: "Français (France)",
          action: () => console.log("Language settings")
        },
      ]
    },
    {
      category: "Sécurité",
      items: [
        { 
          icon: Key, 
          title: "Mot de passe", 
          description: "Modifié il y a 3 mois",
          action: () => setIsSecurityModalOpen(true)
        },
        { 
          icon: Smartphone, 
          title: "Authentification 2FA", 
          description: twoFactorEnabled ? "Activée" : "Désactivée", 
          toggle: true,
          action: () => console.log("2FA settings")
        },
        { 
          icon: Shield, 
          title: "Sessions actives", 
          description: "2 appareils connectés",
          action: () => setIsSecurityModalOpen(true)
        },
      ]
    },
    {
      category: "Préférences",
      items: [
        { 
          icon: Bell, 
          title: "Notifications", 
          description: "Gérer les alertes et communications",
          action: () => console.log("Notification settings")
        },
        { 
          icon: FileText, 
          title: "Confidentialité", 
          description: "Paramètres de confidentialité",
          action: () => console.log("Privacy settings")
        },
      ]
    }
  ];

  const supportItems = [
    { 
      icon: HelpCircle, 
      title: "Centre d'aide", 
      description: "FAQ et guides détaillés",
      action: () => console.log("Help center")
    },
    { 
      icon: MessageCircle, 
      title: "Chat en direct", 
      description: "Support instantané 24/7",
      action: () => console.log("Live chat")
    },
    { 
      icon: Users, 
      title: "Communauté", 
      description: "Forum et discussions",
      action: () => console.log("Community")
    }
  ];

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
      {/* Startup background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-200/20 rounded-3xl rotate-12 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-purple-200/30 rounded-2xl -rotate-12 animate-[float_8s_ease-in-out_infinite] opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-300/25 rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="payzoo-page-container relative z-10">
        
        {/* Header section with startup vibe */}
        <div className={`mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-black" />
                <span className="text-sm font-medium text-black">Smart Settings</span>
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
        <div className={`mb-6 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Rechercher dans les paramètres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 bg-card/50 backdrop-blur-sm border-border/50 focus:border-blue-500/50 transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-6">
          
          {/* Profile Card */}
          <ProfileCard currentUserData={currentUserData} isLoaded={isLoaded} />

          {/* KYC Section */}
          <KYCSection kycSettings={kycSettings} isLoaded={isLoaded} />

          {/* Settings Sections */}
          {filteredCategories.map((category, categoryIndex) => (
            <Card key={category.category} className={`border-0 bg-card/50 backdrop-blur-sm transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: `${400 + categoryIndex * 100}ms` }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 tracking-tight">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.items.filter(item => 
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      onClick={item.action}
                      className="group flex items-center justify-between py-3 px-4 hover:bg-background/50 rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted/50 group-hover:bg-muted/80 group-hover:scale-105 transition-all duration-300">
                          <item.icon className="w-4 h-4 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-foreground group-hover:text-foreground/90 transition-colors duration-200">{item.title}</p>
                          <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {item.toggle && (
                          <Switch 
                            checked={item.title.includes('2FA') ? twoFactorEnabled : false} 
                            onCheckedChange={item.title.includes('2FA') ? setTwoFactorEnabled : undefined}
                            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600 transition-all duration-200"
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

          {/* Support Section */}
          {filteredSupportItems.length > 0 && (
            <Card className={`border-0 bg-card/50 backdrop-blur-sm transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '700ms' }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 tracking-tight">
                  Support
                </h3>
                <div className="space-y-2">
                  {filteredSupportItems.map((item, index) => (
                    <div 
                      key={index}
                      onClick={item.action}
                      className="group flex items-center gap-3 py-3 px-4 hover:bg-background/50 rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center group-hover:bg-muted/80 group-hover:scale-105 transition-all duration-300">
                        <item.icon className="w-4 h-4 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-foreground group-hover:text-foreground/90 transition-colors duration-200">{item.title}</p>
                        <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">{item.description}</p>
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

      <SecurityModal 
        isOpen={isSecurityModalOpen} 
        onClose={() => setIsSecurityModalOpen(false)} 
      />
    </div>
  );
}
