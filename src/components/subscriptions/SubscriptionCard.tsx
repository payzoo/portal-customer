
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
      role="article"
      aria-label={`Abonnement ${subscription.name}`}
    >
      <CardContent className="p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-4 lg:gap-6 w-full sm:w-auto">
            <div className={`relative w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${subscription.color} rounded-2xl lg:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl flex-shrink-0`}>
              <span className="font-bold text-white text-lg lg:text-xl" aria-hidden="true">{subscription.logo}</span>
              {subscription.status === 'trial' && (
                <div 
                  className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full border-2 lg:border-3 border-white animate-pulse shadow-lg"
                  aria-label="Période d'essai"
                />
              )}
            </div>
            <div className="space-y-1 lg:space-y-2 min-w-0 flex-1">
              <h3 className="text-lg lg:text-xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors tracking-tight truncate">
                {subscription.name}
              </h3>
              <div className="flex flex-wrap items-center gap-2 lg:gap-3">
                <span className="text-xl lg:text-2xl font-light text-gray-900 tracking-tight whitespace-nowrap">
                  {subscription.amount} {subscription.currency}
                </span>
                <span className="text-sm text-gray-500 font-medium">/ {subscription.billingCycle}</span>
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Prochain: {subscription.nextPaymentDate}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <Badge 
              variant="secondary" 
              className="bg-gray-100/80 text-gray-700 border-0 px-3 lg:px-4 py-1.5 lg:py-2 text-sm font-medium rounded-full backdrop-blur-sm"
            >
              {subscription.category}
            </Badge>
            <Button 
              variant="ghost" 
              size="sm" 
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2 lg:p-3 hover:bg-gray-100/80 rounded-full"
              aria-label={`Options pour ${subscription.name}`}
            >
              <MoreHorizontal className="w-4 h-4 lg:w-5 lg:h-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
