
import { User, Shield, Bell, HelpCircle, Globe, Key, Smartphone, FileText, MessageCircle, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { SettingsHeader } from "@/components/settings/SettingsHeader";
import { ProfileSection } from "@/components/settings/ProfileSection";
import { KYCCard } from "@/components/settings/KYCCard";
import { SettingsSection } from "@/components/settings/SettingsSection";
import { SettingsModals } from "@/components/settings/SettingsModals";

export function Settings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isHelpCenterModalOpen, setIsHelpCenterModalOpen] = useState(false);
  const [isLiveChatModalOpen, setIsLiveChatModalOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [is2FAModalOpen, setIs2FAModalOpen] = useState(false);
  const [isActiveSessionsModalOpen, setIsActiveSessionsModalOpen] = useState(false);

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
      progress: 100,
      action: () => {}
    },
    { 
      icon: Globe, 
      title: "Domicile", 
      status: "pending" as const, 
      description: "En cours de vérification",
      progress: 60,
      action: () => {}
    },
    { 
      icon: FileText, 
      title: "Revenus", 
      status: "missing" as const, 
      description: "Justificatifs requis",
      progress: 0,
      action: () => {}
    },
  ];

  const menuSections = [
    {
      title: "Compte",
      items: [
        { 
          icon: User, 
          title: "Informations personnelles", 
          description: "Gérer vos données de profil",
          action: () => setIsProfileModalOpen(true)
        },
        { 
          icon: Globe, 
          title: "Préférences de langue", 
          description: "Français (France)",
          action: () => setIsLanguageModalOpen(true)
        },
      ]
    },
    {
      title: "Sécurité",
      items: [
        { 
          icon: Key, 
          title: "Mot de passe", 
          description: "Modifié il y a 3 mois",
          action: () => setIsChangePasswordModalOpen(true)
        },
        { 
          icon: Smartphone, 
          title: "Authentification 2FA", 
          description: "Configurer la double authentification",
          action: () => setIs2FAModalOpen(true)
        },
        { 
          icon: Shield, 
          title: "Sessions actives", 
          description: "2 appareils connectés",
          action: () => setIsActiveSessionsModalOpen(true)
        },
      ]
    },
    {
      title: "Préférences",
      items: [
        { 
          icon: Bell, 
          title: "Notifications", 
          description: "Gérer les alertes et communications",
          action: () => setIsNotificationsModalOpen(true)
        },
        { 
          icon: FileText, 
          title: "Confidentialité", 
          description: "Paramètres de confidentialité",
          action: () => setIsPrivacyModalOpen(true)
        },
      ]
    },
    {
      title: "Support",
      items: [
        { 
          icon: HelpCircle, 
          title: "Centre d'aide", 
          description: "FAQ et guides détaillés",
          action: () => setIsHelpCenterModalOpen(true)
        },
        { 
          icon: MessageCircle, 
          title: "Chat en direct", 
          description: "Support instantané 24/7",
          action: () => setIsLiveChatModalOpen(true)
        },
        { 
          icon: Users, 
          title: "Communauté", 
          description: "Forum et discussions",
          action: () => setIsCommunityModalOpen(true)
        }
      ]
    }
  ];

  const filteredSections = menuSections.filter(section =>
    section.items.some(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="payzoo-page-container relative">
        <SettingsHeader 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          isLoaded={isLoaded}
        />

        <div className="space-y-6">
          <ProfileSection currentUserData={currentUserData} isLoaded={isLoaded} />
          <KYCCard kycSettings={kycSettings} isLoaded={isLoaded} />

          {filteredSections.map((section, sectionIndex) => (
            <SettingsSection
              key={section.title}
              title={section.title}
              items={section.items}
              searchTerm={searchTerm}
              isLoaded={isLoaded}
              delay={200 + (sectionIndex * 100)}
            />
          ))}
        </div>
      </div>

      <SettingsModals
        isProfileModalOpen={isProfileModalOpen}
        setIsProfileModalOpen={setIsProfileModalOpen}
        isLanguageModalOpen={isLanguageModalOpen}
        setIsLanguageModalOpen={setIsLanguageModalOpen}
        isNotificationsModalOpen={isNotificationsModalOpen}
        setIsNotificationsModalOpen={setIsNotificationsModalOpen}
        isPrivacyModalOpen={isPrivacyModalOpen}
        setIsPrivacyModalOpen={setIsPrivacyModalOpen}
        isHelpCenterModalOpen={isHelpCenterModalOpen}
        setIsHelpCenterModalOpen={setIsHelpCenterModalOpen}
        isLiveChatModalOpen={isLiveChatModalOpen}
        setIsLiveChatModalOpen={setIsLiveChatModalOpen}
        isCommunityModalOpen={isCommunityModalOpen}
        setIsCommunityModalOpen={setIsCommunityModalOpen}
        isChangePasswordModalOpen={isChangePasswordModalOpen}
        setIsChangePasswordModalOpen={setIsChangePasswordModalOpen}
        is2FAModalOpen={is2FAModalOpen}
        setIs2FAModalOpen={setIs2FAModalOpen}
        isActiveSessionsModalOpen={isActiveSessionsModalOpen}
        setIsActiveSessionsModalOpen={setIsActiveSessionsModalOpen}
        currentUserData={currentUserData}
      />
    </div>
  );
}
