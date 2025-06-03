
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  delay: number;
  color?: string;
  isLoaded?: boolean;
}

export function StatCard({ 
  icon: Icon, 
  title, 
  value, 
  subtitle, 
  delay, 
  color = "blue",
  isLoaded = false 
}: StatCardProps) {
  const colorClasses = {
    blue: {
      bg: "bg-blue-50/80",
      bgHover: "hover:bg-blue-100/80",
      icon: "text-blue-600",
      accent: "bg-blue-500",
      shadow: "hover:shadow-blue-500/10"
    },
    emerald: {
      bg: "bg-emerald-50/80",
      bgHover: "hover:bg-emerald-100/80", 
      icon: "text-emerald-600",
      accent: "bg-emerald-500",
      shadow: "hover:shadow-emerald-500/10"
    },
    amber: {
      bg: "bg-amber-50/80",
      bgHover: "hover:bg-amber-100/80",
      icon: "text-amber-600", 
      accent: "bg-amber-500",
      shadow: "hover:shadow-amber-500/10"
    },
    purple: {
      bg: "bg-purple-50/80",
      bgHover: "hover:bg-purple-100/80",
      icon: "text-purple-600",
      accent: "bg-purple-500", 
      shadow: "hover:shadow-purple-500/10"
    }
  };

  const colors = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <Card 
      className={`group relative overflow-hidden border-0 bg-white/60 backdrop-blur-xl hover:bg-white/80 transition-all duration-700 hover:shadow-2xl ${colors.shadow} hover:-translate-y-2 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
      role="article"
      aria-label={`${title}: ${value} ${subtitle}`}
    >
      <CardContent className="p-6 lg:p-8">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <div className={`p-3 lg:p-4 rounded-2xl lg:rounded-3xl ${colors.bg} ${colors.bgHover} group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
            <Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${colors.icon}`} aria-hidden="true" />
          </div>
          <div className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full ${colors.accent} opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />
        </div>
        <div className="space-y-1 lg:space-y-2">
          <div className="text-2xl lg:text-3xl font-light text-gray-900 tracking-tight">{value}</div>
          <div className="text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-wider">{subtitle}</div>
        </div>
      </CardContent>
    </Card>
  );
}
