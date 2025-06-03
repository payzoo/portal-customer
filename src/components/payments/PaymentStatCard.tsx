
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
      className={`group relative overflow-hidden border border-gray-100 bg-white hover:border-gray-200 transition-all duration-500 hover:-translate-y-1 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
      role="region"
      aria-label={`Statistique ${label}: ${value}`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-light text-black">{value}</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
