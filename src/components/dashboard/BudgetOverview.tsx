
import { TrendingUp, Target, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface BudgetOverviewProps {
  isLoaded: boolean;
  isAnalyticsVisible: boolean;
  onToggleAnalytics: () => void;
  monthlyBudget: number;
  currentSpent: number;
  animatedProgress: number;
}

export function BudgetOverview({ 
  isLoaded, 
  isAnalyticsVisible, 
  onToggleAnalytics, 
  monthlyBudget, 
  currentSpent, 
  animatedProgress 
}: BudgetOverviewProps) {
  const spentPercentage = (currentSpent / monthlyBudget) * 100;

  return (
    <Card className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Budget mensuel</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleAnalytics}
            className="h-8 w-8 p-0"
          >
            {isAnalyticsVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>
        
        {isAnalyticsVisible && (
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-foreground">
                  {currentSpent.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                </span>
                <span className="text-muted-foreground">/ {monthlyBudget.toLocaleString('fr-FR')}€</span>
              </div>
              <Progress value={animatedProgress} className="h-2" />
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Reste {(monthlyBudget - currentSpent).toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>{spentPercentage.toFixed(0)}% utilisé</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
