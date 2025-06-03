
import { MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Subscription {
  id: number;
  name: string;
  amount: string;
  currency: string;
  billingCycle: string;
  nextPaymentDate: string;
  category: string;
  status: string;
  color: string;
  logo: string;
}

interface SubscriptionCardProps {
  subscription: Subscription;
  index: number;
  isLoaded?: boolean;
}

export function SubscriptionCard({ subscription, index, isLoaded = false }: SubscriptionCardProps) {
  return (
    <Card 
      className={`group relative overflow-hidden border-0 bg-white/70 backdrop-blur-xl hover:bg-white/90 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} 
      style={{ transitionDelay: `${400 + index * 100}ms` }}
    >
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className={`relative w-16 h-16 bg-gradient-to-br ${subscription.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
              <span className="font-bold text-white text-xl">{subscription.logo}</span>
              {subscription.status === 'trial' && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full border-3 border-white animate-pulse shadow-lg" />
              )}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors tracking-tight">
                {subscription.name}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-light text-gray-900 tracking-tight">
                  {subscription.amount} {subscription.currency}
                </span>
                <span className="text-sm text-gray-500 font-medium">/ {subscription.billingCycle}</span>
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Prochain: {subscription.nextPaymentDate}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge 
              variant="secondary" 
              className="bg-gray-100/80 text-gray-700 border-0 px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm"
            >
              {subscription.category}
            </Badge>
            <Button 
              variant="ghost" 
              size="sm" 
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-3 hover:bg-gray-100/80 rounded-full"
            >
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
