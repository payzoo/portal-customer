
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
      className={`group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-md transition-all duration-500 rounded-3xl ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
      role="region"
      aria-label={`Statistique ${label}: ${value}`}
    >
      <CardContent className="p-8 text-center">
        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-extralight text-black tracking-tight">{value}</div>
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
