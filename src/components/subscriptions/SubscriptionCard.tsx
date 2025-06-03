
import { MoreHorizontal, Calendar, ExternalLink } from "lucide-react";
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
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export function SubscriptionCard({ 
  subscription, 
  index, 
  isLoaded = false,
  onEdit,
  onDelete 
}: SubscriptionCardProps) {
  const handleEdit = () => {
    onEdit?.(subscription.id);
  };

  const handleDelete = () => {
    onDelete?.(subscription.id);
  };

  return (
    <Card 
      className={`group relative border border-gray-200 bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} 
      style={{ transitionDelay: `${400 + index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${subscription.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <span className="font-bold text-white text-lg">{subscription.logo}</span>
              {subscription.status === 'trial' && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
                {subscription.name}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-black">
                  {subscription.amount} {subscription.currency}
                </span>
                <span className="text-sm text-gray-500">/ {subscription.billingCycle}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>Prochain: {subscription.nextPaymentDate}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge 
              variant="secondary" 
              className="bg-gray-100 text-gray-700 border-0 px-3 py-1"
            >
              {subscription.category}
            </Badge>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 hover:bg-gray-100"
                onClick={handleEdit}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 hover:bg-gray-100"
              >
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
