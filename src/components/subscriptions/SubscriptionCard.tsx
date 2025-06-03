
import { MoreHorizontal, Calendar, ExternalLink, Edit, Trash2 } from "lucide-react";
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
      className={`group relative border border-gray-200 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} 
      style={{ transitionDelay: `${400 + index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`w-14 h-14 bg-gradient-to-br ${subscription.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="font-bold text-white text-lg">{subscription.logo}</span>
              </div>
              {subscription.status === 'trial' && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm" />
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-black group-hover:text-gray-700 transition-colors">
                  {subscription.name}
                </h3>
                {subscription.status === 'trial' && (
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                    Essai
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-black">
                  {subscription.amount} {subscription.currency}
                </span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                  / {subscription.billingCycle}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>Prochain paiement: {subscription.nextPaymentDate}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge 
              variant="secondary" 
              className="bg-gray-100 text-gray-700 border-0 px-3 py-1 text-sm"
            >
              {subscription.category}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-9 w-9 p-0 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem onClick={handleEdit} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                  <Edit className="w-4 h-4" />
                  Modifier
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                  <ExternalLink className="w-4 h-4" />
                  Voir les détails
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleDelete} 
                  className="flex items-center gap-2 cursor-pointer hover:bg-red-50 text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
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
