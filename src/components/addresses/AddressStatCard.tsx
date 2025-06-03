
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
      className={`group relative overflow-hidden border-0 bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-2xl ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
      role="region"
      aria-label={`Statistique ${label}: ${value}`}
    >
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:scale-110 transition-all duration-300">
            <Icon className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
          </div>
          <div className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-black transition-colors duration-300" />
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-extralight text-black tracking-tight">{value}</div>
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
