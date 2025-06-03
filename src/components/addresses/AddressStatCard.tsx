
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card 
      className={`group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-700 rounded-2xl ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
      role="region"
      aria-label={`Statistique ${label}: ${value}`}
    >
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-black group-hover:scale-110 transition-all duration-500">
          <Icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-500" aria-hidden="true" />
        </div>
        <div className="space-y-3">
          <div className="text-5xl font-extralight text-black tracking-tight">{value}</div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
