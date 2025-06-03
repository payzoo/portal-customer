
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PaymentStatCardProps {
  icon: LucideIcon;
  value: number | string;
  label: string;
  delay: number;
  color?: string;
  isLoaded?: boolean;
}

const colorClasses = {
  blue: {
    bg: "from-blue-50/80 to-blue-100/80",
    icon: "text-blue-600",
    accent: "from-blue-400 to-blue-500"
  },
  yellow: {
    bg: "from-yellow-50/80 to-yellow-100/80", 
    icon: "text-yellow-600",
    accent: "from-yellow-400 to-yellow-500"
  },
  green: {
    bg: "from-green-50/80 to-green-100/80",
    icon: "text-green-600", 
    accent: "from-green-400 to-green-500"
  },
  purple: {
    bg: "from-purple-50/80 to-purple-100/80",
    icon: "text-purple-600",
    accent: "from-purple-400 to-purple-500"
  }
};

export function PaymentStatCard({ 
  icon: Icon, 
  value, 
  label, 
  delay, 
  color = "blue",
  isLoaded = false 
}: PaymentStatCardProps) {
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  
  return (
    <Card 
      className={`group relative overflow-hidden border-0 bg-white/60 backdrop-blur-xl hover:bg-white/80 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
      role="region"
      aria-label={`Statistique ${label}: ${value}`}
    >
      <CardContent className="p-6 lg:p-8">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <div className={`p-3 lg:p-4 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${colorClass.bg} group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
            <Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${colorClass.icon}`} aria-hidden="true" />
          </div>
          <div className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-gradient-to-r ${colorClass.accent} opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />
        </div>
        <div className="space-y-1.5 lg:space-y-2">
          <div className="text-2xl lg:text-3xl font-light text-gray-900 tracking-tight">{value}</div>
          <div className="text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
