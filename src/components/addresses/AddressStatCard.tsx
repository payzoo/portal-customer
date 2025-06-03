
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface AddressStatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  color: string;
  delay: number;
  isLoaded?: boolean;
}

export function AddressStatCard({ 
  icon: Icon, 
  value, 
  label, 
  color,
  delay,
  isLoaded = false 
}: AddressStatCardProps) {
  return (
    <Card className={`group relative overflow-hidden border-0 bg-white/60 backdrop-blur-xl hover:bg-white/80 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`} 
    style={{ transitionDelay: `${delay}ms` }}>
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className={`p-4 rounded-3xl bg-gradient-to-br from-${color}-50/80 to-${color}-100/80 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
            <Icon className={`w-6 h-6 text-${color}-600`} />
          </div>
          <Sparkles className={`w-4 h-4 text-${color}-500/60 animate-pulse group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-light text-gray-900 tracking-tight">{value}</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
