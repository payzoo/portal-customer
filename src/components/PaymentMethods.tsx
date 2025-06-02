import { CreditCard, Plus, MoreHorizontal, Shield, Bell, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PaymentMethods() {
  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      name: "Housseine Dao",
      expiry: "12/27",
      isDefault: true,
      color: "bg-blue-500"
    },
    {
      id: 2,
      type: "Mastercard", 
      last4: "5555",
      name: "Housseine Dao",
      expiry: "08/26",
      isDefault: false,
      color: "bg-red-500"
    }
  ];

  const settings = [
    { 
      title: "Renouvellement automatique", 
      description: "Renouveler automatiquement les abonnements",
      status: "Activé",
      icon: CheckCircle2
    },
    { 
      title: "Notifications de paiement", 
      description: "Recevoir des alertes avant les prélèvements",
      status: "Activé",
      icon: Bell
    },
    { 
      title: "Protection anti-fraude", 
      description: "Surveillance des transactions suspectes",
      status: "Activé",
      icon: Shield
    }
  ];

  return (
    <div className="p-8 bg-gray-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Moyens de paiement</h1>
            <p className="text-gray-600 text-lg">Gérez vos cartes et préférences de paiement</p>
          </div>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200">
            <Plus className="w-5 h-5 mr-2" />
            Ajouter une carte
          </Button>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Cartes enregistrées</h2>
          
          {paymentMethods.map((method) => (
            <Card key={method.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center shadow-sm`}>
                      <CreditCard className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-gray-900 text-lg">{method.type}</span>
                        <span className="text-gray-500 font-mono">•••• {method.last4}</span>
                        {method.isDefault && (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-1 rounded-full">
                            Par défaut
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-500">{method.name} • Expire {method.expiry}</p>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add Payment Method CTA */}
          <Card className="border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors bg-white">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center">
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-lg">Ajouter une nouvelle carte</h3>
                  <p className="text-gray-500">Visa, Mastercard, American Express</p>
                </div>
                <Button variant="outline" className="px-6 py-2 rounded-lg">
                  Ajouter une carte
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Settings */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900">Paramètres de paiement</CardTitle>
            <p className="text-gray-500">Configurez vos préférences de paiement</p>
          </CardHeader>
          <CardContent className="space-y-6 pt-0">
            {settings.map((setting, index) => (
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
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-1 rounded-full">
                  {setting.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
