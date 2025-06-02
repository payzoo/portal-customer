
import { Plus, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AddSubscriptionCard() {
  const handleAddSubscription = () => {
    console.log("Ajouter un nouvel abonnement");
  };

  return (
    <Card className="border border-gray-200 bg-white hover:border-gray-300 transition-colors cursor-pointer group">
      <CardContent className="p-8 text-center">
        <div className="space-y-4">
          {/* Icon minimaliste */}
          <div className="mx-auto w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
            <Plus className="w-5 h-5 text-white" />
          </div>

          {/* Contenu épuré */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-black">
              Nouveau service
            </h3>
            <p className="text-gray-500 text-sm">
              Ajoutez un abonnement en quelques clics
            </p>
          </div>

          {/* CTA minimaliste */}
          <Button 
            onClick={handleAddSubscription}
            className="bg-black text-white rounded-lg px-6 py-2 hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            Commencer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
