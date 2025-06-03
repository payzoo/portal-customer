
import { TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Insight {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  color: string;
}

interface InsightsSidebarProps {
  isLoaded: boolean;
  insights: Insight[];
}

export function InsightsSidebar({ isLoaded, insights }: InsightsSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Insights simplifiés */}
      <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h3 className="text-base font-semibold text-foreground mb-4">Insights</h3>
        <div className="space-y-3">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-foreground">{insight.title}</h4>
                    <span className={`text-sm font-medium ${insight.color}`}>{insight.value}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions rapides simplifiées */}
      <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h3 className="text-base font-semibold text-foreground mb-4">Actions rapides</h3>
        
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start h-auto p-4">
            <TrendingUp className="w-5 h-5 mr-3 text-blue-600" />
            <div className="text-left">
              <div className="font-medium">Analyser dépenses</div>
              <div className="text-xs text-muted-foreground">Rapport détaillé avec IA</div>
            </div>
          </Button>
          
          <Button variant="outline" className="w-full justify-start h-auto p-4">
            <Target className="w-5 h-5 mr-3 text-purple-600" />
            <div className="text-left">
              <div className="font-medium">Définir objectifs</div>
              <div className="text-xs text-muted-foreground">Budget personnalisé</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
