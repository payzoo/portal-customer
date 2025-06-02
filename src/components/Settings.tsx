import { User, Shield, Bell, HelpCircle, LogOut, ChevronRight, Lock, Smartphone, Globe, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Settings() {
  const accountSettings = [
    { icon: User, title: "Nom complet", value: "Housseine Dao", action: "Modifier" },
    { icon: Mail, title: "Adresse e-mail", value: "dao.housseine@gmail.com", action: "Modifier" },
    { icon: Smartphone, title: "Téléphone", value: "+33 • • • • • 64", action: "Modifier" },
    { icon: Globe, title: "Langue", value: "Français (France)", action: "Changer" },
  ];

  const securitySettings = [
    { icon: Lock, title: "Mot de passe", description: "Dernière modification il y a 2 mois" },
    { icon: Shield, title: "Authentification à deux facteurs", description: "Sécurisez votre compte avec 2FA" },
    { icon: Smartphone, title: "Appareils connectés", description: "Gérer les sessions actives" },
    { icon: Shield, title: "Activité de connexion", description: "Voir l'historique des connexions" },
  ];

  const notificationSettings = [
    { icon: Bell, title: "Notifications push", description: "Alertes en temps réel sur vos appareils" },
    { icon: Mail, title: "Notifications e-mail", description: "Recevez des mises à jour par e-mail" },
    { icon: Bell, title: "Rappels de paiement", description: "Alertes avant les prélèvements" },
  ];

  const supportSettings = [
    { icon: HelpCircle, title: "Centre d'aide", description: "Documentation et FAQ" },
    { icon: HelpCircle, title: "Contacter le support", description: "Obtenir de l'aide personnalisée" },
    { icon: User, title: "Signaler un problème", description: "Faire un rapport de bug" },
  ];

  return (
    <div className="p-8 bg-gray-50/30 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Paramètres</h1>
          <p className="text-gray-600 text-lg">Gérez votre compte et vos préférences</p>
        </div>

        {/* Account Information */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900">Informations du compte</CardTitle>
            <p className="text-gray-500">Gérez vos informations personnelles</p>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            {accountSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <setting.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{setting.title}</p>
                    <p className="text-sm text-gray-500">{setting.value}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                  {setting.action}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900">Sécurité</CardTitle>
            <p className="text-gray-500">Protégez votre compte PayZoo</p>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            {securitySettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <setting.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{setting.title}</p>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900">Notifications</CardTitle>
            <p className="text-gray-500">Configurez vos préférences de notifications</p>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            {notificationSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <setting.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{setting.title}</p>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Support & Help */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900">Support & Assistance</CardTitle>
            <p className="text-gray-500">Obtenez de l'aide quand vous en avez besoin</p>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            {supportSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <setting.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{setting.title}</p>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <Button variant="outline" className="w-full justify-center h-12 rounded-xl font-medium hover:bg-gray-50">
              <LogOut className="w-5 h-5 mr-2" />
              Se déconnecter
            </Button>
            <Separator className="my-4" />
            <Button variant="destructive" className="w-full justify-center h-12 rounded-xl font-medium">
              Supprimer définitivement le compte
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Cette action est irréversible et supprimera toutes vos données
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
