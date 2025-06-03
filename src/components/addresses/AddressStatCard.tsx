
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
      className={`group relative overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
      role="region"
      aria-label={`Statistique ${label}: ${value}`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="w-2 h-2 rounded-full bg-black opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-light text-black">{value}</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
