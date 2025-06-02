
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
    { icon: User, title: "Identité", description: "Carte d'identité ou passeport", status: "verified" },
    { icon: MapPin, title: "Justificatif de domicile", description: "Facture récente", status: "pending" },
    { icon: CreditCard, title: "Justificatif de revenus", description: "Fiche de paie", status: "missing" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-amber-600" />;
      case 'missing':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'verified': return 'Vérifié';
      case 'pending': return 'En attente';
      case 'missing': return 'Manquant';
      default: return 'À faire';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-2xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <SettingsIcon className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
          <p className="text-gray-500">Gérez votre compte Payzoo</p>
        </div>

        {/* KYC Status - Compact */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Vérification KYC</h3>
                  <p className="text-sm text-gray-500">1 000€ → 15 000€/mois</p>
                </div>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Continuer
              </Button>
            </div>
            
            <div className="flex gap-2">
              {kycSettings.map((item, index) => (
                <div key={index} className="flex-1 text-center p-3 rounded-lg border bg-gray-50/50">
                  <div className="flex justify-center mb-2">
                    {getStatusIcon(item.status)}
                  </div>
                  <p className="text-xs font-medium text-gray-700">{item.title}</p>
                  <p className="text-xs text-gray-500">{getStatusText(item.status)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-20 flex-col gap-2 hover:bg-blue-50 hover:border-blue-200"
            onClick={() => setIsProfileModalOpen(true)}
          >
            <User className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">Profil</span>
          </Button>
          
          <Button
            variant="outline"
            className="h-20 flex-col gap-2 hover:bg-blue-50 hover:border-blue-200"
            onClick={() => setIsSecurityModalOpen(true)}
          >
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">Sécurité</span>
          </Button>
        </div>

        {/* User Info - Simplified */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{currentUserData.firstName} {currentUserData.lastName}</h3>
                  <p className="text-sm text-gray-500">{currentUserData.email}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsProfileModalOpen(true)}
              >
                Modifier
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications - Simplified */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5 text-blue-600" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">Notifications push</span>
              </div>
              <Switch 
                checked={pushNotifications} 
                onCheckedChange={setPushNotifications}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">E-mails</span>
              </div>
              <Switch 
                checked={emailNotifications} 
                onCheckedChange={setEmailNotifications}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">Transactions</span>
              </div>
              <Switch 
                checked={transactionAlerts} 
                onCheckedChange={setTransactionAlerts}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 space-y-3">
            <Button variant="ghost" className="w-full justify-start">
              <HelpCircle className="w-4 h-4 mr-3" />
              Centre d'aide
            </Button>
            
            <Button variant="ghost" className="w-full justify-start">
              <Globe className="w-4 h-4 mr-3" />
              Langue: Français
            </Button>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start hover:bg-gray-50"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Se déconnecter
            </Button>
            
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              Supprimer le compte
            </Button>
          </CardContent>
        </Card>
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
