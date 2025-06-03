
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  delay: number;
  isLoaded?: boolean;
}

export function StatCard({ 
  icon: Icon, 
  title, 
  value, 
  subtitle, 
  delay, 
  isLoaded = false 
}: StatCardProps) {
  return (
    <Card 
      className={`group relative border border-gray-200 bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
            <Icon className="w-6 h-6" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold text-black">{value}</div>
          <div className="text-sm text-gray-600">{subtitle}</div>
        </div>
      </CardContent>
    </Card>
  );
}
