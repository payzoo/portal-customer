
import { User, Shield, Bell, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Settings() {
  const accountSettings = [
    { icon: User, title: "Nom", value: "Housseine Dao", action: "Modifier" },
    { icon: User, title: "E-mail", value: "dao.housseine@gmail.com", action: "Modifier" },
    { icon: User, title: "Téléphone", value: "+33 • • • • • 64", action: "Modifier" },
  ];

  const securitySettings = [
    { icon: Shield, title: "Clés d'accès", description: "Gérer vos clés de sécurité" },
    { icon: Shield, title: "Activité de connexion", description: "Voir l'historique de connexion" },
  ];

  const otherSettings = [
    { icon: Bell, title: "Notifications", description: "Gérer les préférences de notification" },
    { icon: HelpCircle, title: "Centre d'aide", description: "Documentation et support" },
    { icon: HelpCircle, title: "Contacter le service support", description: "Obtenir de l'aide" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Compte</h1>
        <p className="text-gray-600">Gérez votre compte et vos préférences</p>
      </div>

      {/* Account Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informations du compte</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {accountSettings.map((setting, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <setting.icon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{setting.title}</p>
                  <p className="text-sm text-gray-500">{setting.value}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600">
                {setting.action}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle>Sécurité</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {securitySettings.map((setting, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <setting.icon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{setting.title}</p>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Notifications & Support */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications & Assistance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {otherSettings.map((setting, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <setting.icon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{setting.title}</p>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <Button variant="outline" className="w-full justify-center">
            Se déconnecter
          </Button>
          <Separator />
          <Button variant="destructive" className="w-full justify-center">
            Supprimer le compte
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
