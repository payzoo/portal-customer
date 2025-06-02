
import { User, Shield, Bell, HelpCircle, LogOut, ChevronRight, Lock, Smartphone, Globe, Mail, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function Settings() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [paymentReminders, setPaymentReminders] = useState(true);

  const accountSettings = [
    { icon: User, title: "Nom complet", value: "Housseine Dao", action: "Modifier" },
    { icon: Mail, title: "Email", value: "dao.housseine@gmail.com", action: "Modifier" },
    { icon: Smartphone, title: "Téléphone", value: "+33 • • • • • 64", action: "Modifier" },
    { icon: Globe, title: "Langue", value: "Français", action: "Changer" },
  ];

  const securitySettings = [
    { icon: Lock, title: "Mot de passe", description: "Modifié il y a 2 mois" },
    { icon: Shield, title: "Authentification 2FA", description: "Sécuriser votre compte" },
    { icon: Smartphone, title: "Appareils connectés", description: "Gérer les sessions" },
  ];

  const supportSettings = [
    { icon: HelpCircle, title: "Centre d'aide" },
    { icon: HelpCircle, title: "Contacter le support" },
    { icon: CreditCard, title: "Facturation" },
  ];

  return (
    <div className="p-6 bg-gray-50/30 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
          <p className="text-gray-500 mt-1">Gérez votre compte et préférences</p>
        </div>

        {/* Account Information */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-green-600" />
              Compte
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {accountSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50/80 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-green-50 transition-colors">
                    <setting.icon className="w-4 h-4 text-gray-600 group-hover:text-green-600 transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{setting.title}</p>
                    <p className="text-xs text-gray-500">{setting.value}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50 text-xs px-3 h-8">
                  {setting.action}
                  <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              Sécurité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {securitySettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50/80 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-green-50 transition-colors">
                    <setting.icon className="w-4 h-4 text-gray-600 group-hover:text-green-600 transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{setting.title}</p>
                    <p className="text-xs text-gray-500">{setting.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Bell className="w-5 h-5 text-green-600" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Bell className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Notifications push</p>
                  <p className="text-xs text-gray-500">Alertes en temps réel</p>
                </div>
              </div>
              <Switch 
                checked={pushNotifications} 
                onCheckedChange={setPushNotifications}
                className="data-[state=checked]:bg-green-600"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Mail className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Notifications e-mail</p>
                  <p className="text-xs text-gray-500">Mises à jour par e-mail</p>
                </div>
              </div>
              <Switch 
                checked={emailNotifications} 
                onCheckedChange={setEmailNotifications}
                className="data-[state=checked]:bg-green-600"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <CreditCard className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Rappels de paiement</p>
                  <p className="text-xs text-gray-500">Alertes avant prélèvements</p>
                </div>
              </div>
              <Switch 
                checked={paymentReminders} 
                onCheckedChange={setPaymentReminders}
                className="data-[state=checked]:bg-green-600"
              />
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-green-600" />
              Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {supportSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50/80 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-green-50 transition-colors">
                    <setting.icon className="w-4 h-4 text-gray-600 group-hover:text-green-600 transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{setting.title}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Actions */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-4 space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-center h-10 rounded-lg font-medium hover:bg-gray-50 border-gray-200"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Se déconnecter
            </Button>
            
            <Separator className="my-3" />
            
            <Button 
              variant="destructive" 
              className="w-full justify-center h-10 rounded-lg font-medium bg-red-500 hover:bg-red-600"
            >
              Supprimer le compte
            </Button>
            
            <p className="text-xs text-gray-400 text-center mt-2">
              Cette action est irréversible
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
