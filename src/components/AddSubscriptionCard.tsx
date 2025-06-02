
import { Plus, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AddSubscriptionCard() {
  const handleAddSubscription = () => {
    console.log("Ajouter un nouvel abonnement");
  };

  return (
    <Card className="border-0 bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 transition-all duration-500 cursor-pointer group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="p-12 text-center relative">
        <div className="space-y-6">
          {/* Icon avec animation */}
          <div className="relative mx-auto w-16 h-16">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Plus className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
              Nouveau service
            </h3>
            <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">
              Connectez votre prochain abonnement en quelques clics
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Button 
              onClick={handleAddSubscription}
              className="bg-gray-900 text-white rounded-full px-8 py-3 hover:bg-gray-800 transition-all duration-300 group-hover:shadow-lg font-medium"
            >
              <Plus className="w-4 h-4 mr-2" />
              Commencer
            </Button>
          </div>
        </div>

        {/* Détails discrets */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>Configuration en 30 secondes</span>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
