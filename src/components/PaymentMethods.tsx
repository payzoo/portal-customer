
import { CreditCard, Plus, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PaymentMethods() {
  const paymentMethods = [
    {
      id: 1,
      type: "visa",
      last4: "4242",
      name: "Housseine",
      expiry: "12/27",
      isDefault: true
    },
    {
      id: 2,
      type: "mastercard", 
      last4: "5555",
      name: "Housseine",
      expiry: "08/26",
      isDefault: false
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Moyens de paiement</h1>
          <p className="text-gray-600">Gérez vos cartes et moyens de paiement</p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un moyen de paiement
        </Button>
      </div>

      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <Card key={method.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900 capitalize">{method.type}</span>
                      <span className="text-gray-500">•••• {method.last4}</span>
                      {method.isDefault && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Par défaut
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{method.name} • Expire {method.expiry}</p>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Payment Method Card */}
      <Card className="border-dashed border-2 border-gray-300">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center text-center py-8">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Ajouter une nouvelle carte</h3>
            <p className="text-sm text-gray-500 mb-4">Visa, Mastercard, American Express</p>
            <Button variant="outline">Ajouter une carte</Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Paramètres de paiement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Renouvellement automatique</p>
              <p className="text-sm text-gray-500">Renouveler automatiquement les abonnements</p>
            </div>
            <Button variant="outline" size="sm">Activé</Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Notifications de paiement</p>
              <p className="text-sm text-gray-500">Recevoir des alertes avant les prélèvements</p>
            </div>
            <Button variant="outline" size="sm">Activé</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
