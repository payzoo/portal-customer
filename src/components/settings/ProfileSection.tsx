
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Edit3, CheckCircle } from "lucide-react";
import { EditProfileModal } from "@/components/modals/EditProfileModal";

interface ProfileSectionProps {
  currentUserData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
  };
  isLoaded: boolean;
}

export function ProfileSection({ currentUserData, isLoaded }: ProfileSectionProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <Card className={`border border-gray-200 bg-white hover:shadow-md transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '100ms' }}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-white font-semibold text-lg">{currentUserData.avatar}</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-black mb-3">
                {currentUserData.firstName} {currentUserData.lastName}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{currentUserData.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>{currentUserData.phone}</span>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsEditModalOpen(true)}
              className="flex-shrink-0 border-gray-200 hover:bg-black hover:text-white transition-all duration-200"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Modifier
            </Button>
          </div>
        </CardContent>
      </Card>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentData={currentUserData}
      />
    </>
  );
}
