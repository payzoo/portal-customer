
import { 
  CreditCard, 
  Edit, 
  Trash2, 
  Star,
  Shield,
  Smartphone,
  MoreVertical
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface PaymentMethod {
  id: number;
  type: "visa" | "mastercard" | "paypal" | "other";
  accountNumber: string;
  expiryDate: string;
  isDefault: boolean;
}

interface PaymentCardProps {
  paymentMethod: PaymentMethod;
  index: number;
  onEdit: (paymentMethod: PaymentMethod) => void;
  onToggleDefault: (paymentMethod: PaymentMethod) => void;
  onDelete: (paymentMethod: PaymentMethod) => void;
  isLoaded?: boolean;
}

const typeInfoMap = {
  visa: {
    label: "Visa",
    icon: CreditCard,
    color: "bg-blue-600",
    pattern: "bg-gradient-to-br from-blue-500 to-blue-600"
  },
  mastercard: {
    label: "Mastercard", 
    icon: CreditCard,
    color: "bg-red-600",
    pattern: "bg-gradient-to-br from-red-500 to-red-600"
  },
  paypal: {
    label: "PayPal",
    icon: Shield,
    color: "bg-yellow-600",
    pattern: "bg-gradient-to-br from-yellow-500 to-yellow-600"
  },
  other: {
    label: "Autre",
    icon: Smartphone,
    color: "bg-gray-600",
    pattern: "bg-gradient-to-br from-gray-500 to-gray-600"
  }
};

export function PaymentCard({ 
  paymentMethod, 
  index, 
  onEdit, 
  onToggleDefault, 
  onDelete,
  isLoaded = false 
}: PaymentCardProps) {
  const typeInfo = typeInfoMap[paymentMethod.type] || typeInfoMap.other;

  return (
    <Card 
      className={`group bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100 + 400}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className={`w-14 h-14 ${typeInfo.pattern} rounded-2xl flex items-center justify-center shadow-lg`}>
              <typeInfo.icon className="w-7 h-7 text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{typeInfo.label}</h3>
                {paymentMethod.isDefault && (
                  <Badge className="px-2 py-1 bg-black text-white text-xs rounded-lg">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Principal
                  </Badge>
                )}
              </div>
              
              <div className="text-gray-600 font-mono text-sm mb-1">
                •••• •••• •••• {paymentMethod.accountNumber.slice(-4)}
              </div>
              
              {paymentMethod.expiryDate && (
                <div className="text-xs text-gray-500">
                  Expire {paymentMethod.expiryDate}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onEdit(paymentMethod)}
              className="w-9 h-9 rounded-xl hover:bg-gray-100"
            >
              <Edit className="w-4 h-4" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-9 h-9 rounded-xl hover:bg-gray-100"
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border-gray-100 rounded-xl shadow-xl">
                <DropdownMenuItem 
                  onClick={() => onEdit(paymentMethod)}
                  className="px-4 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <Edit className="w-4 h-4 mr-3 text-gray-500" />
                  Modifier
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => onToggleDefault(paymentMethod)}
                  className="px-4 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <Star className={`w-4 h-4 mr-3 ${paymentMethod.isDefault ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
                  {paymentMethod.isDefault ? 'Retirer principal' : 'Définir principal'}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => onDelete(paymentMethod)}
                  className="px-4 py-2.5 hover:bg-red-50 text-red-600 rounded-lg cursor-pointer"
                >
                  <Trash2 className="w-4 h-4 mr-3" />
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
