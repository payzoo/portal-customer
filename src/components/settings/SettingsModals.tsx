
import { EditProfileModal } from "@/components/modals/EditProfileModal";
import { LanguagePreferencesModal } from "@/components/modals/LanguagePreferencesModal";
import { NotificationsModal } from "@/components/modals/NotificationsModal";
import { PrivacyModal } from "@/components/modals/PrivacyModal";
import { HelpCenterModal } from "@/components/modals/HelpCenterModal";
import { LiveChatModal } from "@/components/modals/LiveChatModal";
import { CommunityModal } from "@/components/modals/CommunityModal";
import { ChangePasswordModal } from "@/components/modals/security/ChangePasswordModal";
import { Setup2FAModal } from "@/components/modals/security/Setup2FAModal";
import { ActiveSessionsModal } from "@/components/modals/security/ActiveSessionsModal";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
}

interface SettingsModalsProps {
  isProfileModalOpen: boolean;
  setIsProfileModalOpen: (open: boolean) => void;
  isLanguageModalOpen: boolean;
  setIsLanguageModalOpen: (open: boolean) => void;
  isNotificationsModalOpen: boolean;
  setIsNotificationsModalOpen: (open: boolean) => void;
  isPrivacyModalOpen: boolean;
  setIsPrivacyModalOpen: (open: boolean) => void;
  isHelpCenterModalOpen: boolean;
  setIsHelpCenterModalOpen: (open: boolean) => void;
  isLiveChatModalOpen: boolean;
  setIsLiveChatModalOpen: (open: boolean) => void;
  isCommunityModalOpen: boolean;
  setIsCommunityModalOpen: (open: boolean) => void;
  isChangePasswordModalOpen: boolean;
  setIsChangePasswordModalOpen: (open: boolean) => void;
  is2FAModalOpen: boolean;
  setIs2FAModalOpen: (open: boolean) => void;
  isActiveSessionsModalOpen: boolean;
  setIsActiveSessionsModalOpen: (open: boolean) => void;
  currentUserData: UserData;
}

export function SettingsModals({
  isProfileModalOpen,
  setIsProfileModalOpen,
  isLanguageModalOpen,
  setIsLanguageModalOpen,
  isNotificationsModalOpen,
  setIsNotificationsModalOpen,
  isPrivacyModalOpen,
  setIsPrivacyModalOpen,
  isHelpCenterModalOpen,
  setIsHelpCenterModalOpen,
  isLiveChatModalOpen,
  setIsLiveChatModalOpen,
  isCommunityModalOpen,
  setIsCommunityModalOpen,
  isChangePasswordModalOpen,
  setIsChangePasswordModalOpen,
  is2FAModalOpen,
  setIs2FAModalOpen,
  isActiveSessionsModalOpen,
  setIsActiveSessionsModalOpen,
  currentUserData
}: SettingsModalsProps) {
  return (
    <>
      <EditProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentData={currentUserData}
      />

      <LanguagePreferencesModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      <NotificationsModal
        isOpen={isNotificationsModalOpen}
        onClose={() => setIsNotificationsModalOpen(false)}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <HelpCenterModal
        isOpen={isHelpCenterModalOpen}
        onClose={() => setIsHelpCenterModalOpen(false)}
      />

      <LiveChatModal
        isOpen={isLiveChatModalOpen}
        onClose={() => setIsLiveChatModalOpen(false)}
      />

      <CommunityModal
        isOpen={isCommunityModalOpen}
        onClose={() => setIsCommunityModalOpen(false)}
      />

      <ChangePasswordModal
        isOpen={isChangePasswordModalOpen}
        onClose={() => setIsChangePasswordModalOpen(false)}
        onBack={() => setIsChangePasswordModalOpen(false)}
      />

      <Setup2FAModal
        isOpen={is2FAModalOpen}
        onClose={() => setIs2FAModalOpen(false)}
        onBack={() => setIs2FAModalOpen(false)}
      />

      <ActiveSessionsModal
        isOpen={isActiveSessionsModalOpen}
        onClose={() => setIsActiveSessionsModalOpen(false)}
        onBack={() => setIsActiveSessionsModalOpen(false)}
      />
    </>
  );
}
