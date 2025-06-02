
import { CreditCard, Plus, MoreHorizontal, Shield, Bell, CheckCircle2, Smartphone, Building2, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PaymentMethods() {
  const paymentMethods = [
    {
      id: 1,
      type: "card",
      provider: "Visa",
      name: "Housseine Dao",
      identifier: "•••• 4242",
      detail: "Expire 12/27",
      isDefault: true,
      icon: CreditCard,
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: 2,
      type: "card",
      provider: "Mastercard",
      name: "Housseine Dao",
      identifier: "•••• 5555",
      detail: "Expire 08/26",
      isDefault: false,
      icon: CreditCard,
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      id: 3,
      type: "mobile",
      provider: "Orange Money",
      name: "Housseine Dao",
      identifier: "+33 6 •• •• •• 89",
      detail: "Vérifié",
      isDefault: false,
      icon: Smartphone,
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      id: 4,
      type: "bank",
      provider: "BNP Paribas",
      name: "Housseine Dao",
      identifier: "FR76 •••• •••• •••• 1234",
      detail: "Compte courant",
      isDefault: false,
      icon: Building2,
      color: "bg-gradient-to-br from-green-500 to-green-600"
    }
  ];

  const paymentTypes = [
    {
      type: "card",
      title: "Carte bancaire",
      description: "Visa, Mastercard, American Express",
      icon: CreditCard,
      color: "from-blue-50 to-blue-100"
    },
    {
      type: "mobile",
      title: "Mobile Money",
      description: "Orange Money, MTN, Moov",
      icon: Smartphone,
      color: "from-orange-50 to-orange-100"
    },
    {
      type: "bank",
      title: "Compte bancaire",
      description: "Virement SEPA, RIB",
      icon: Building2,
      color: "from-green-50 to-green-100"
    },
    {
      type: "wallet",
      title: "Wallet digital",
      description: "PayPal, Apple Pay, Google Pay",
      icon: Wallet,
      color: "from-purple-50 to-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Header - Ultra minimal */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">
                Paiements
              </h1>
              <p className="text-gray-500 text-lg font-light">
                Gérez vos méthodes de paiement
              </p>
            </div>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 font-medium transition-all duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group">
            <div className="text-3xl font-light text-gray-900 mb-1">
              4<span className="text-lg text-gray-400"> méthodes</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">Configurées</div>
            <div className="text-xs text-green-600 font-medium">
              ✓ Toutes vérifiées
            </div>
          </div>

          <div className="group">
            <div className="text-3xl font-light text-gray-900 mb-1">
              1<span className="text-lg text-gray-400"> principale</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">Méthode par défaut</div>
            <div className="text-xs text-blue-600 font-medium">
              Visa •••• 4242
            </div>
          </div>

          <div className="group">
            <div className="text-3xl font-light text-gray-900 mb-1">
              100<span className="text-lg text-gray-400">%</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">Sécurisé</div>
            <div className="text-xs text-gray-600 font-medium flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Cryptage SSL
            </div>
          </div>
        </div>

        {/* Current Payment Methods */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-light text-gray-900">Méthodes actives</h2>
          
          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center shadow-sm`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-gray-900">{method.provider}</span>
                            <span className="text-gray-500 font-mono text-sm">{method.identifier}</span>
                            {method.isDefault && (
                              <Badge className="bg-green-50 text-green-700 hover:bg-green-50 px-3 py-1 rounded-full text-xs border-0">
                                Principal
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{method.name} • {method.detail}</p>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg hover:bg-gray-50">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Add New Payment Method */}
        <div className="space-y-6">
          <h2 className="text-xl font-light text-gray-900">Ajouter une méthode</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.type} className="border border-gray-100 hover:border-gray-200 transition-colors bg-white rounded-2xl overflow-hidden group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-gray-700" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-medium text-gray-900">{type.title}</h3>
                        <p className="text-sm text-gray-500">{type.description}</p>
                        <Button variant="ghost" className="text-xs text-gray-600 hover:text-gray-900 h-auto p-0 font-medium">
                          Configurer →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-16 p-6 bg-gray-50 rounded-2xl">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Sécurité & Confidentialité</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Toutes vos informations de paiement sont cryptées et sécurisées. 
            Nous ne stockons jamais vos données bancaires complètes sur nos serveurs.
          </p>
        </div>
      </div>
    </div>
  );
}
