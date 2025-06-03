
import { Brain, Sparkles, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AIOptimizationCardProps {
  isLoaded: boolean;
}

export function AIOptimizationCard({ isLoaded }: AIOptimizationCardProps) {
  return (
    <Card className={`bg-black border border-white/20 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-black" />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-semibold text-white">Optimisation IA</h4>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs text-gray-300">Active</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-300 mb-4">
          Notre IA analyse vos habitudes financières pour optimiser automatiquement vos économies.
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 p-2 bg-white/10 rounded-md">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <span className="text-xs text-gray-300">Analyse prédictive</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-white/10 rounded-md">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
            <span className="text-xs text-gray-300">Auto-épargne</span>
          </div>
        </div>
        
        <Button className="w-full bg-white text-black hover:bg-gray-200 transition-colors">
          <Sparkles className="w-4 h-4 mr-2" />
          Activer l'IA
        </Button>
        
        <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>Sécurisé & Privé</span>
          </div>
          <span>Powered by PayzooAI</span>
        </div>
      </CardContent>
    </Card>
  );
}
