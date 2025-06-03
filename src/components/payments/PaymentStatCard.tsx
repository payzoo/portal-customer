
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PaymentStatCardProps {
  icon: LucideIcon;
  value: number | string;
  label: string;
  delay: number;
  isLoaded?: boolean;
}

export function PaymentStatCard({ 
  icon: Icon, 
  value, 
  label, 
  delay, 
  isLoaded = false 
}: PaymentStatCardProps) {
  return (
    <Card 
      className={`group relative overflow-hidden border-0 bg-white hover:bg-gray-50 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
      role="region"
      aria-label={`Statistique ${label}: ${value}`}
    >
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 bg-gray-100 rounded-3xl flex items-center justify-center group-hover:bg-black group-hover:scale-110 transition-all duration-300">
            <Icon className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-extralight text-black tracking-tight">{value}</div>
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
