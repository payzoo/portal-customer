
import { Building2, MoreHorizontal, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Subscriptions() {
  const subscriptions = [
    {
      id: 1,
      name: "StackBlitz Inc",
      plan: "Pro",
      amount: "50.00 $US",
      status: "active",
      nextBilling: "15 Juin 2025",
      logo: "S"
    },
    {
      id: 2,
      name: "OpenAI LLC",
      plan: "Plus",
      amount: "20.00 $US",
      status: "active",
      nextBilling: "22 Juin 2025",
      logo: "O"
    },
    {
      id: 3,
      name: "GAIFM",
      plan: "Premium",
      amount: "1793.967 CFA",
      status: "paused",
      nextBilling: "28 Juin 2025",
      logo: "G"
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Abonnements</h1>
          <p className="text-gray-600">Gérez vos abonnements et services</p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="w-4 h-4 mr-2" />
          Nouvel abonnement
        </Button>
      </div>

      <div className="grid gap-4">
        {subscriptions.map((subscription) => (
          <Card key={subscription.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-gray-700">{subscription.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{subscription.name}</h3>
                    <p className="text-sm text-gray-500">{subscription.plan}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{subscription.amount}</p>
                    <p className="text-sm text-gray-500">Prochain: {subscription.nextBilling}</p>
                  </div>
                  
                  <Badge 
                    variant={subscription.status === 'active' ? 'default' : 'secondary'}
                    className={subscription.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                  >
                    {subscription.status === 'active' ? 'Actif' : 'En pause'}
                  </Badge>
                  
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Total mensuel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,163.97 $</div>
            <p className="text-xs text-gray-500">3 abonnements actifs</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Économies ce mois</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47.50 $</div>
            <p className="text-xs text-green-600">↓ 12% vs mois dernier</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Prochaine facture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 Juin</div>
            <p className="text-xs text-gray-500">StackBlitz Inc - 50.00 $</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
