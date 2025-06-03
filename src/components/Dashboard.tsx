
import { Coffee, ShoppingBag, Car, Home, PiggyBank, TrendingDown, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { DashboardHeader } from "./dashboard/DashboardHeader";
import { BudgetOverview } from "./dashboard/BudgetOverview";
import { ExpenseCategories } from "./dashboard/ExpenseCategories";
import { RecentTransactions } from "./dashboard/RecentTransactions";
import { InsightsSidebar } from "./dashboard/InsightsSidebar";
import { AIOptimizationCard } from "./dashboard/AIOptimizationCard";

export function Dashboard() {
  const [isAnalyticsVisible, setIsAnalyticsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  
  const monthlyBudget = 2500;
  const currentSpent = 1847.50;
  const spentPercentage = (currentSpent / monthlyBudget) * 100;

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setAnimatedProgress(spentPercentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [spentPercentage]);

  const expenseCategories = [
    { name: "Alimentation", amount: 487.20, percentage: 26, color: "from-blue-500 to-cyan-500", icon: Coffee, trend: "+12%", isPositive: false },
    { name: "Transport", amount: 356.80, percentage: 19, color: "from-green-500 to-emerald-500", icon: Car, trend: "-8%", isPositive: true },
    { name: "Shopping", amount: 298.45, percentage: 16, color: "from-purple-500 to-pink-500", icon: ShoppingBag, trend: "+5%", isPositive: false },
    { name: "Logement", amount: 705.05, percentage: 38, color: "from-orange-500 to-red-500", icon: Home, trend: "0%", isPositive: true },
  ];

  const insights = [
    {
      title: "Économies potentielles",
      description: "89€ d'économies possibles ce mois",
      icon: PiggyBank,
      value: "89€",
      color: "text-green-600"
    },
    {
      title: "Tendance positive",
      description: "Transport: -18% vs mois dernier",
      icon: TrendingDown,
      value: "-18%",
      color: "text-blue-600"
    },
    {
      title: "Objectif atteint",
      description: "Budget respecté à 74%",
      icon: Target,
      value: "74%",
      color: "text-purple-600"
    }
  ];

  const recentTransactions = [
    { name: "Carrefour", amount: "45.67", time: "2h", category: "Alimentation", icon: Coffee, color: "from-blue-500 to-cyan-500" },
    { name: "Spotify", amount: "9.99", time: "1j", category: "Divertissement", icon: Target, color: "from-purple-500 to-pink-500" },
    { name: "Uber", amount: "23.40", time: "2j", category: "Transport", icon: Car, color: "from-green-500 to-emerald-500" },
    { name: "Amazon", amount: "67.89", time: "3j", category: "Shopping", icon: ShoppingBag, color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-8">
        
        <DashboardHeader isLoaded={isLoaded} />

        <BudgetOverview 
          isLoaded={isLoaded}
          isAnalyticsVisible={isAnalyticsVisible}
          onToggleAnalytics={() => setIsAnalyticsVisible(!isAnalyticsVisible)}
          monthlyBudget={monthlyBudget}
          currentSpent={currentSpent}
          animatedProgress={animatedProgress}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Section principale */}
          <div className="lg:col-span-2 space-y-8">
            
            <ExpenseCategories 
              isLoaded={isLoaded}
              categories={expenseCategories}
              hoveredCategory={hoveredCategory}
              onCategoryHover={setHoveredCategory}
            />

            <RecentTransactions 
              isLoaded={isLoaded}
              transactions={recentTransactions}
            />
          </div>

          {/* Sidebar épurée */}
          <div className="space-y-6">
            
            <InsightsSidebar 
              isLoaded={isLoaded}
              insights={insights}
            />

            <AIOptimizationCard isLoaded={isLoaded} />
          </div>
        </div>
      </div>
    </div>
  );
}
