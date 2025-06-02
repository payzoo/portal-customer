
import { CreditCard, Plus, Shield, CheckCircle, MoreVertical, Smartphone, Building, Trash2, Edit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PaymentMethods() {
  const paymentMethods = [
    {
      id: 1,
      type: "card",
      name: "Carte principale",
      number: "**** **** **** 4587",
      expiry: "12/26",
      brand: "Visa",
      isDefault: true,
      color: "bg-gradient-to-br from-gray-900 to-gray-700"
    },
    {
      id: 2,
      type: "card",
      name: "Carte virtuelle",
      number: "**** **** **** 2913",
      expiry: "08/25",
      brand: "Mastercard",
      isDefault: false,
      color: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      id: 3,
      type: "bank",
      name: "Compte courant",
      number: "FR76 **** **** **** 0123",
      bank: "BNP Paribas",
      isDefault: false,
      color: "bg-gradient-to-br from-green-600 to-green-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">Moyens de paiement</h1>
              <p className="text-gray-500 text-sm">Gérez vos cartes et comptes bancaires</p>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Cartes actives</p>
                    <p className="text-xs text-gray-500">Physiques et virtuelles</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">2</div>
                <div className="text-xs text-blue-600">Toutes vérifiées</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Building className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Comptes liés</p>
                    <p className="text-xs text-gray-500">Comptes bancaires</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">1</div>
                <div className="text-xs text-green-600">Compte principal</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Sécurité</p>
                    <p className="text-xs text-gray-500">Protection activée</p>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">100%</div>
                <div className="text-xs text-purple-600">3D Secure actif</div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Methods List */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Mes moyens de paiement</h3>
              
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-10 ${method.color} rounded-lg flex items-center justify-center`}>
                        {method.type === 'card' ? (
                          <CreditCard className="w-5 h-5 text-white" />
                        ) : (
                          <Building className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-medium text-gray-900 text-sm">{method.name}</h3>
                          {method.isDefault && (
                            <Badge className="bg-green-50 text-green-600 hover:bg-green-50 text-xs border-green-200">
                              Principal
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mb-1">{method.number}</p>
                        {method.type === 'card' ? (
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-gray-400">Expire {method.expiry}</p>
                            <span className="text-xs text-gray-300">•</span>
                            <p className="text-xs text-gray-400">{method.brand}</p>
                          </div>
                        ) : (
                          <p className="text-xs text-gray-400">{method.bank}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-green-600">Vérifiée</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg">
                          <Edit className="w-4 h-4 text-gray-400" />
                        </Button>
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg hover:bg-red-50 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Add Payment Method */}
          <Card className="border-2 border-dashed border-gray-200 bg-white/60 backdrop-blur-sm hover:border-gray-300 hover:bg-white/80 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Plus className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-2">Ajouter un moyen de paiement</h3>
              <p className="text-gray-500 text-xs mb-6 max-w-sm mx-auto">
                Carte bancaire, compte courant ou portefeuille numérique
              </p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" className="rounded-lg text-xs">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Carte
                </Button>
                <Button variant="outline" className="rounded-lg text-xs">
                  <Building className="w-4 h-4 mr-2" />
                  Compte
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Sécurité</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">3D Secure</p>
                    <p className="text-xs text-gray-500">Protection des paiements en ligne</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Notifications SMS</p>
                    <p className="text-xs text-gray-500">Alertes en temps réel</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
