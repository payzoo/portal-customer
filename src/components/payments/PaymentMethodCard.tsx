
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

interface PaymentMethodCardProps {
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
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    textColor: "text-blue-700",
  },
  mastercard: {
    label: "Mastercard",
    icon: CreditCard,
    gradient: "from-red-500 to-red-600",
    bgGradient: "from-red-50 to-red-100",
    textColor: "text-red-700",
  },
  paypal: {
    label: "PayPal",
    icon: Shield,
    gradient: "from-yellow-500 to-yellow-600",
    bgGradient: "from-yellow-50 to-yellow-100",
    textColor: "text-yellow-700",
  },
  other: {
    label: "Autre",
    icon: Smartphone,
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    textColor: "text-green-700",
  }
};

export function PaymentMethodCard({ 
  paymentMethod, 
  index, 
  onEdit, 
  onToggleDefault, 
  onDelete,
  isLoaded = false 
}: PaymentMethodCardProps) {
  const typeInfo = typeInfoMap[paymentMethod.type] || typeInfoMap.other;

  return (
    <Card 
      className={`group relative overflow-hidden border-0 bg-white/60 backdrop-blur-xl hover:bg-white/80 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      role="article"
      aria-label={`Moyen de paiement ${typeInfo.label}`}
    >
      <CardContent className="p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-4 lg:gap-6 flex-1 min-w-0">
            <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${typeInfo.gradient} rounded-2xl lg:rounded-3xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg flex-shrink-0`}>
              <typeInfo.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 lg:mb-3">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 tracking-tight truncate">{typeInfo.label}</h3>
                {paymentMethod.isDefault && (
                  <Badge className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-yellow-400 to-yellow-500 text-white border-0 shadow-lg self-start">
                    <Star className="w-3 h-3 mr-1 fill-current" aria-hidden="true" />
                    Par défaut
                  </Badge>
                )}
              </div>
              <div className="text-base lg:text-lg font-medium text-gray-700 mb-1 lg:mb-2 truncate">
                {paymentMethod.accountNumber}
              </div>
              {paymentMethod.expiryDate && (
                <div className="text-sm text-gray-500 font-medium">
                  Expire: {paymentMethod.expiryDate}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <Badge 
              className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl lg:rounded-2xl text-xs lg:text-sm bg-gradient-to-r ${typeInfo.bgGradient} ${typeInfo.textColor} border-0 transition-transform duration-300 group-hover:scale-105 shadow-md`}
            >
              {typeInfo.label}
            </Badge>
            
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(paymentMethod);
                }}
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl lg:rounded-2xl hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                aria-label={`Modifier ${paymentMethod.type}`}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl lg:rounded-2xl hover:bg-gray-100 hover:text-gray-600 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Actions pour ${paymentMethod.type}`}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-56 bg-white/95 backdrop-blur-md border-0 rounded-xl lg:rounded-2xl shadow-2xl p-2"
                >
                  <DropdownMenuItem 
                    onClick={() => onEdit(paymentMethod)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <Edit className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Modifier</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onToggleDefault(paymentMethod)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-yellow-50 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <Star className={`w-4 h-4 ${paymentMethod.isDefault ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
                    <span className="text-gray-700">{paymentMethod.isDefault ? 'Retirer par défaut' : 'Définir par défaut'}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2" />
                  <DropdownMenuItem 
                    onClick={() => onDelete(paymentMethod)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                    <span className="text-red-600">Supprimer</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
