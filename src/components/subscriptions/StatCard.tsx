
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
  return (
    <Card 
      className={`group relative overflow-hidden border-0 bg-white/60 backdrop-blur-xl hover:bg-white/80 transition-all duration-700 hover:shadow-2xl hover:shadow-${color}-500/10 hover:-translate-y-2 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className={`p-4 rounded-3xl bg-gradient-to-br from-${color}-50/80 to-${color}-100/80 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
            <Icon className={`w-6 h-6 text-${color}-600`} />
          </div>
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-${color}-400 to-${color}-500 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-light text-gray-900 tracking-tight">{value}</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{subtitle}</div>
        </div>
      </CardContent>
    </Card>
  );
}
