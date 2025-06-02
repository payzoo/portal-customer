
import { User, Shield, Bell, HelpCircle, LogOut, ChevronRight, Smartphone, Globe, Mail, CreditCard, CheckCircle, AlertCircle, MapPin, Settings as SettingsIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    { icon: User, title: "Identité", description: "Carte d'identité", status: "verified" },
    { icon: MapPin, title: "Domicile", description: "Facture récente", status: "pending" },
    { icon: CreditCard, title: "Revenus", description: "Fiche de paie", status: "missing" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-3 h-3 text-green-600" />;
      case 'pending':
        return <AlertCircle className="w-3 h-3 text-amber-600" />;
      case 'missing':
        return <AlertCircle className="w-3 h-3 text-red-600" />;
      default:
        return <AlertCircle className="w-3 h-3 text-gray-400" />;
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-xl mx-auto px-6 py-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-light text-gray-900">Paramètres</h1>
          <p className="text-gray-500 text-sm">Gérez votre compte Payzoo</p>
        </div>

        {/* Profil utilisateur */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {currentUserData.firstName[0]}{currentUserData.lastName[0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{currentUserData.firstName} {currentUserData.lastName}</h3>
                  <p className="text-sm text-gray-500">{currentUserData.email}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsProfileModalOpen(true)}
                className="text-gray-400 hover:text-gray-600"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* KYC Status */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium mb-1">Vérification KYC</h3>
                  <p className="text-blue-100 text-sm">Augmentez vos limites</p>
                </div>
                <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50">
                  Continuer
                </Button>
              </div>
            </div>
            
            <div className="p-6 grid grid-cols-3 gap-4">
              {kycSettings.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {getStatusIcon(item.status)}
                  </div>
                  <p className="text-xs font-medium text-gray-700 mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500">{getStatusText(item.status)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sécurité et Support - Section dédiée */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-base text-gray-900">Sécurité et Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <Button
              variant="ghost"
              className="w-full justify-start h-14 px-4 hover:bg-blue-50 hover:border-blue-100 border border-transparent rounded-xl transition-all"
              onClick={() => setIsSecurityModalOpen(true)}
            >
              <div className="flex items-center gap-4 w-full">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-medium text-gray-900 text-sm">Sécurité</p>
                  <p className="text-xs text-gray-500">Mot de passe, 2FA, sessions</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start h-14 px-4 hover:bg-green-50 hover:border-green-100 border border-transparent rounded-xl transition-all"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="p-3 bg-green-50 rounded-xl">
                  <HelpCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-medium text-gray-900 text-sm">Centre d'aide</p>
                  <p className="text-xs text-gray-500">FAQ, contact support</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-base flex items-center gap-2">
              <Bell className="w-4 h-4 text-gray-600" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-gray-400" />
                <span className="text-sm">Push</span>
              </div>
              <Switch 
                checked={pushNotifications} 
                onCheckedChange={setPushNotifications}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm">E-mail</span>
              </div>
              <Switch 
                checked={emailNotifications} 
                onCheckedChange={setEmailNotifications}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <CreditCard className="w-4 h-4 text-gray-400" />
                <span className="text-sm">Transactions</span>
              </div>
              <Switch 
                checked={transactionAlerts} 
                onCheckedChange={setTransactionAlerts}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>
          </CardContent>
        </Card>

        {/* Préférences */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-base text-gray-900">Préférences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <Button variant="ghost" className="w-full justify-start h-12 px-4 hover:bg-gray-50 rounded-xl">
              <Globe className="w-4 h-4 mr-3 text-gray-400" />
              <span className="text-sm">Français</span>
              <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />
            </Button>
          </CardContent>
        </Card>

        {/* Actions de compte */}
        <div className="space-y-3 pt-4">
          <Button 
            variant="outline" 
            className="w-full justify-start h-12 border-gray-200 hover:bg-gray-50 rounded-xl"
          >
            <LogOut className="w-4 h-4 mr-3 text-gray-500" />
            <span className="text-sm">Se déconnecter</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start h-12 text-red-600 hover:bg-red-50 rounded-xl"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <span className="text-sm">Supprimer le compte</span>
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
