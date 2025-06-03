
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

  const animationDelay = (index: number) => ({ animationDelay: `${index * 50}ms` });

  return (
    <div className="min-h-screen bg-background">
      <div className="payzoo-page-container max-w-5xl mx-auto">
        
        {/* Header simplifié */}
        <div className={`mb-10 transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Paramètres</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Gérez votre compte et personnalisez votre expérience
              </p>
            </div>
          </div>

          {/* Barre de recherche épurée */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Rechercher dans les paramètres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 bg-white border-border/40 focus:border-primary/60 transition-all duration-200 shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-8">
          
          {/* Profile Card simplifié */}
          <div className={`transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={animationDelay(0)}>
            <ProfileCard currentUserData={currentUserData} isLoaded={isLoaded} />
          </div>

          {/* KYC Section */}
          <div className={`transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={animationDelay(1)}>
            <KYCSection kycSettings={kycSettings} isLoaded={isLoaded} />
          </div>

          {/* Sections de paramètres épurées */}
          {filteredCategories.map((category, categoryIndex) => (
            <Card 
              key={category.category} 
              className={`border-0 bg-white shadow-sm hover:shadow-md transition-all duration-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={animationDelay(categoryIndex + 2)}
            >
              <CardContent className="p-0">
                {/* En-tête de catégorie */}
                <div className="px-6 py-4 border-b border-border/30">
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                
                {/* Items de la catégorie */}
                <div className="divide-y divide-border/20">
                  {category.items.filter(item => 
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      onClick={item.action}
                      className="group flex items-center justify-between px-6 py-4 hover:bg-muted/30 transition-all duration-150 cursor-pointer"
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 bg-muted/40 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-150">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground mb-1">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-150" />
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
