
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ExpenseCategory {
  name: string;
  amount: number;
  percentage: number;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  trend: string;
  isPositive: boolean;
}

interface ExpenseCategoriesProps {
  isLoaded: boolean;
  categories: ExpenseCategory[];
  hoveredCategory: string | null;
  onCategoryHover: (category: string | null) => void;
}

export function ExpenseCategories({ 
  isLoaded, 
  categories, 
  hoveredCategory, 
  onCategoryHover 
}: ExpenseCategoriesProps) {
  return (
    <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Dépenses par catégorie</h2>
        <Button variant="ghost" size="sm">
          Voir détails
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const isHovered = hoveredCategory === category.name;
          return (
            <Card 
              key={category.name} 
              className="transition-all duration-300 hover:shadow-md cursor-pointer border border-border/50 hover:border-border"
              onMouseEnter={() => onCategoryHover(category.name)}
              onMouseLeave={() => onCategoryHover(null)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                    category.isPositive 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {category.trend}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">{category.name}</p>
                    <p className="text-lg font-semibold text-foreground">
                      {category.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Progress value={category.percentage} className="h-1.5" />
                    <p className="text-xs text-muted-foreground">
                      {category.percentage}% du budget
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
