
import { Activity, Brain, Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  isLoaded: boolean;
}

export function DashboardHeader({ isLoaded }: DashboardHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-foreground rounded-xl shadow-sm">
            <Activity className="w-6 h-6 text-background" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-600">Live Analytics</span>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Activité</h1>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Suivez vos finances en temps réel
          </p>
        </div>
      </div>
      <Button className="bg-foreground text-background hover:bg-foreground/90 group">
        <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
        Ajouter un budget
        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </Button>
    </div>
  );
}
