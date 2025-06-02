
import { User, Shield, Bell, HelpCircle, LogOut, ChevronRight, Globe, CheckCircle, AlertCircle, MapPin, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { EditProfileModal } from "./modals/EditProfileModal";
import { SecurityModal } from "./modals/SecurityModal";
import { DeleteAccountModal } from "./modals/DeleteAccountModal";

export function Settings() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [transactionAlerts, setTransactionAlerts] = useState(true);
  
  // Modal states
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const currentUserData = {
    firstName: "Housseine",
    lastName: "Dao",
    email: "dao.housseine@gmail.com",
    phone: "+33 6 12 34 56 78"
  };

  const kycSettings = [
    { icon: User, title: "Identité", status: "verified" },
    { icon: MapPin, title: "Domicile", status: "pending" },
    { icon: CreditCard, title: "Revenus", status: "missing" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-amber-500" />;
      case 'missing':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'verified': return 'Vérifié';
      case 'pending': return 'En cours';
      case 'missing': return 'Requis';
      default: return 'À faire';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Paramètres</h1>
          <p className="text-gray-500">Gérez votre compte et vos préférences</p>
        </div>

        {/* Profile Section */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Profil</h2>
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-medium text-lg">
                      {currentUserData.firstName[0]}{currentUserData.lastName[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{currentUserData.firstName} {currentUserData.lastName}</h3>
                    <p className="text-gray-500">{currentUserData.email}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsProfileModalOpen(true)}
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* KYC Section */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Vérification</h2>
          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Vérification KYC</h3>
                  <p className="text-blue-100">Augmentez vos limites de transaction</p>
                </div>
                <Button size="sm" className="bg-white/20 text-white hover:bg-white/30 border-0 backdrop-blur-sm">
                  Continuer
                </Button>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-6">
                {kycSettings.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-gray-50 rounded-xl">
                        <item.icon className="w-5 h-5 text-gray-600" />
                      </div>
                    </div>
                    <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                    <div className="flex items-center justify-center gap-1">
                      {getStatusIcon(item.status)}
                      <span className="text-sm text-gray-500">{getStatusText(item.status)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security & Support Section */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Sécurité & Support</h2>
          <div className="grid gap-3">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full h-auto p-6 justify-start hover:bg-blue-50 rounded-xl transition-colors"
                  onClick={() => setIsSecurityModalOpen(true)}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-semibold text-gray-900 mb-1">Sécurité</p>
                      <p className="text-sm text-gray-500">Mot de passe, authentification à deux facteurs</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full h-auto p-6 justify-start hover:bg-emerald-50 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="p-3 bg-emerald-50 rounded-xl">
                      <HelpCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-semibold text-gray-900 mb-1">Centre d'aide</p>
                      <p className="text-sm text-gray-500">FAQ, support client, documentation</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Notifications</h2>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Notifications push</p>
                    <p className="text-sm text-gray-500">Recevez des alertes sur votre appareil</p>
                  </div>
                </div>
                <Switch 
                  checked={pushNotifications} 
                  onCheckedChange={setPushNotifications}
                  className="data-[state=checked]:bg-blue-600"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Notifications e-mail</p>
                    <p className="text-sm text-gray-500">Recevez des mises à jour par e-mail</p>
                  </div>
                </div>
                <Switch 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications}
                  className="data-[state=checked]:bg-purple-600"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <CreditCard className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Alertes de transaction</p>
                    <p className="text-sm text-gray-500">Notifications pour chaque transaction</p>
                  </div>
                </div>
                <Switch 
                  checked={transactionAlerts} 
                  onCheckedChange={setTransactionAlerts}
                  className="data-[state=checked]:bg-emerald-600"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preferences Section */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Préférences</h2>
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <Button variant="ghost" className="w-full h-auto p-6 justify-start hover:bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4 w-full">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <Globe className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Langue</p>
                    <p className="text-sm text-gray-500">Français</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Account Actions */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <Button 
            variant="ghost" 
            className="w-full h-auto p-4 justify-start hover:bg-gray-50 rounded-xl text-gray-600"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Se déconnecter</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full h-auto p-4 justify-start text-red-500 hover:bg-red-50 rounded-xl"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <span>Supprimer le compte</span>
          </Button>
        </div>
      </div>

      {/* Modals */}
      <EditProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentData={currentUserData}
      />
      
      <SecurityModal
        isOpen={isSecurityModalOpen}
        onClose={() => setIsSecurityModalOpen(false)}
      />
      
      <DeleteAccountModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </div>
  );
}
