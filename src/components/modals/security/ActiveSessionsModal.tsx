
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone, ChevronLeft, Monitor, MapPin, Clock, LogOut } from "lucide-react";

interface ActiveSessionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

interface Session {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
  deviceType: 'desktop' | 'mobile';
}

export function ActiveSessionsModal({ isOpen, onClose, onBack }: ActiveSessionsModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [sessions] = useState<Session[]>([
    {
      id: '1',
      device: 'Chrome sur Windows',
      location: 'Paris, France',
      lastActive: 'Maintenant',
      isCurrent: true,
      deviceType: 'desktop'
    },
    {
      id: '2',
      device: 'Safari sur iPhone',
      location: 'Paris, France',
      lastActive: 'Il y a 2 heures',
      isCurrent: false,
      deviceType: 'mobile'
    },
    {
      id: '3',
      device: 'Chrome sur Android',
      location: 'Lyon, France',
      lastActive: 'Il y a 1 jour',
      isCurrent: false,
      deviceType: 'mobile'
    }
  ]);

  const handleLogoutSession = async (sessionId: string) => {
    setIsLoading(true);
    // Simuler l'API call
    setTimeout(() => {
      console.log(`Session ${sessionId} déconnectée`);
      setIsLoading(false);
    }, 1000);
  };

  const handleLogoutAllOthers = async () => {
    setIsLoading(true);
    // Simuler l'API call
    setTimeout(() => {
      console.log("Toutes les autres sessions déconnectées");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="w-8 h-8"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
            Sessions actives
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 pt-4 max-h-96 overflow-y-auto">
          <div className="space-y-3">
            {sessions.map((session) => (
              <div key={session.id} className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {session.deviceType === 'desktop' ? (
                        <Monitor className="w-4 h-4 text-gray-600" />
                      ) : (
                        <Smartphone className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm">{session.device}</p>
                        {session.isCurrent && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                            Actuelle
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {session.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {session.lastActive}
                        </div>
                      </div>
                    </div>
                  </div>
                  {!session.isCurrent && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLogoutSession(session.id)}
                      disabled={isLoading}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <Button 
              onClick={handleLogoutAllOthers} 
              variant="outline"
              className="w-full h-10 text-red-600 border-red-200 hover:bg-red-50"
              disabled={isLoading}
            >
              {isLoading ? (
                "Déconnexion en cours..."
              ) : (
                <>
                  <LogOut className="w-4 h-4 mr-2" />
                  Déconnecter toutes les autres sessions
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
