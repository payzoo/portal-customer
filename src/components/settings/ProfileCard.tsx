
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Edit3, Check, X } from "lucide-react";
import { EditProfileModal } from "@/components/modals/EditProfileModal";

interface ProfileCardProps {
  currentUserData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
  };
  isLoaded: boolean;
}

export function ProfileCard({ currentUserData, isLoaded }: ProfileCardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <Card className={`group border-0 bg-gradient-to-br from-card/40 to-card/60 backdrop-blur-sm hover:from-card/60 hover:to-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '200ms' }}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-semibold text-lg">{currentUserData.avatar}</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight truncate">
                {currentUserData.firstName} {currentUserData.lastName}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{currentUserData.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{currentUserData.phone}</span>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsEditModalOpen(true)}
              className="flex-shrink-0 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 group/btn"
            >
              <Edit3 className="w-3 h-3 mr-1 group-hover/btn:rotate-12 transition-transform duration-200" />
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
