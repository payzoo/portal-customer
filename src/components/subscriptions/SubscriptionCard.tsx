
import { MoreHorizontal, Calendar, Edit, Trash2, Eye } from "lucide-react";
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
  onView?: (id: number) => void;
}

export function SubscriptionCard({ 
  subscription, 
  index, 
  isLoaded = false,
  onEdit,
  onDelete,
  onView 
}: SubscriptionCardProps) {
  const handleEdit = () => {
    onEdit?.(subscription.id);
  };

  const handleDelete = () => {
    onDelete?.(subscription.id);
  };

  const handleView = () => {
    onView?.(subscription.id);
  };

  return (
    <Card 
      className={`group border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} 
      style={{ transitionDelay: `${400 + index * 50}ms` }}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative">
              <div className={`w-11 h-11 bg-gradient-to-br ${subscription.color} rounded-xl flex items-center justify-center shadow-sm`}>
                <span className="font-semibold text-white text-sm">{subscription.logo}</span>
              </div>
              {subscription.status === 'trial' && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-900 text-sm truncate">{subscription.name}</h3>
                {subscription.status === 'trial' && (
                  <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs px-2 py-0.5 rounded-md">
                    Essai
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg font-bold text-gray-900">
                  {subscription.amount} {subscription.currency}
                </span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
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
              className="bg-gray-50 text-gray-600 border-0 text-xs px-2 py-1 rounded-md hidden sm:inline-flex"
            >
              {subscription.category}
            </Badge>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <MoreHorizontal className="w-4 h-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44 bg-white border border-gray-100 shadow-lg">
                <DropdownMenuItem onClick={handleView} className="text-sm hover:bg-gray-50 cursor-pointer">
                  <Eye className="w-4 h-4 mr-2 text-gray-500" />
                  Voir les détails
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleEdit} className="text-sm hover:bg-gray-50 cursor-pointer">
                  <Edit className="w-4 h-4 mr-2 text-gray-500" />
                  Modifier
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleDelete} 
                  className="text-sm text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer"
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
