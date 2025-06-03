
import { MoreHorizontal, Calendar, Edit, Trash2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      className={`group border border-gray-200 bg-white hover:shadow-md transition-all duration-300 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} 
      style={{ transitionDelay: `${400 + index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`w-12 h-12 bg-gradient-to-br ${subscription.color} rounded-lg flex items-center justify-center shadow-sm`}>
                <span className="font-semibold text-white text-sm">{subscription.logo}</span>
              </div>
              {subscription.status === 'trial' && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-black">{subscription.name}</h3>
                {subscription.status === 'trial' && (
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs px-2 py-0.5">
                    Essai
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-black">
                  {subscription.amount} {subscription.currency}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  /{subscription.billingCycle}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>Prochain: {subscription.nextPaymentDate}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className="bg-gray-100 text-gray-600 border-0 text-xs"
            >
              {subscription.category}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem onClick={handleEdit} className="text-sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Modifier
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Détails
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleDelete} 
                  className="text-sm text-red-600 focus:text-red-600"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Supprimer
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
