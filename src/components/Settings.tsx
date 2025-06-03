
import { User, Shield, Bell, HelpCircle, Globe, Key, Smartphone, FileText, MessageCircle, Search, ChevronRight, Users, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { ProfileCard } from "@/components/settings/ProfileCard";
import { KYCSection } from "@/components/settings/KYCSection";
import { SecurityModal } from "@/components/modals/SecurityModal";

export function Settings() {
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
          description: "Configurer la double authentification",
          action: () => setIsSecurityModalOpen(true)
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
    },
    {
      category: "Support",
      items: [
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
      ]
    }
  ];

  const filteredCategories = menuItems.filter(category =>
    category.items.some(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const animationDelay = (index: number) => ({ animationDelay: `${index * 100}ms` });

  return (
    <div className="min-h-screen bg-background relative">
      {/* Minimal background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-20 right-10 w-32 h-32 border border-black/5 rounded-3xl rotate-12"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-black/5 rounded-2xl -rotate-12"></div>
      </div>

      <div className="payzoo-page-container relative z-10">
        
        {/* Clean header */}
        <div className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">Paramètres</h1>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Gérez votre compte et personnalisez votre expérience
              </p>
            </div>
          </div>

          {/* Minimal search */}
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-10 bg-background border-border/30 focus:border-black transition-colors"
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
            <Card 
              key={category.category} 
              className={`border-0 bg-card/40 backdrop-blur-sm shadow-sm transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={animationDelay(categoryIndex + 2)}
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
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
                      className="group flex items-center justify-between p-4 hover:bg-background/60 rounded-xl transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <SecurityModal 
        isOpen={isSecurityModalOpen} 
        onClose={() => setIsSecurityModalOpen(false)} 
      />
    </div>
  );
}
