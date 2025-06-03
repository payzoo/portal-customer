
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
    gradient: "from-blue-500 to-blue-700",
  },
  mastercard: {
    label: "Mastercard",
    icon: CreditCard,
    gradient: "from-red-500 to-red-700",
  },
  paypal: {
    label: "PayPal",
    icon: Shield,
    gradient: "from-yellow-500 to-yellow-700",
  },
  other: {
    label: "Autre",
    icon: Smartphone,
    gradient: "from-green-500 to-green-700",
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
      className={`group relative overflow-hidden border-0 bg-white hover:bg-gray-50 transition-all duration-500 hover:scale-102 hover:shadow-2xl shadow-lg ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100 + 600}ms` }}
      role="article"
      aria-label={`Moyen de paiement ${typeInfo.label}`}
    >
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-6 flex-1 min-w-0">
            <div className={`w-16 h-16 bg-gradient-to-br ${typeInfo.gradient} rounded-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg flex-shrink-0`}>
              <typeInfo.icon className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-3">
                <h3 className="text-xl font-semibold text-black tracking-tight truncate">{typeInfo.label}</h3>
                {paymentMethod.isDefault && (
                  <Badge className="px-4 py-2 rounded-full text-xs bg-black text-white border-0 self-start lg:self-auto">
                    <Star className="w-3 h-3 mr-2 fill-current" aria-hidden="true" />
                    Par défaut
                  </Badge>
                )}
              </div>
              <div className="text-base font-medium text-gray-700 mb-2 truncate font-mono">
                •••• •••• •••• {paymentMethod.accountNumber.slice(-4)}
              </div>
              {paymentMethod.expiryDate && (
                <div className="text-sm text-gray-500 font-medium">
                  Expire le {paymentMethod.expiryDate}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between lg:justify-end gap-4">
            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(paymentMethod);
                }}
                className="w-12 h-12 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                aria-label={`Modifier ${paymentMethod.type}`}
              >
                <Edit className="w-5 h-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-12 h-12 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Actions pour ${paymentMethod.type}`}
                  >
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-60 bg-white border-0 rounded-3xl p-3 shadow-2xl"
                >
                  <DropdownMenuItem 
                    onClick={() => onEdit(paymentMethod)}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 rounded-2xl transition-colors duration-200 cursor-pointer"
                  >
                    <Edit className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700 font-medium">Modifier</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onToggleDefault(paymentMethod)}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 rounded-2xl transition-colors duration-200 cursor-pointer"
                  >
                    <Star className={`w-5 h-5 ${paymentMethod.isDefault ? 'text-black fill-current' : 'text-gray-400'}`} />
                    <span className="text-gray-700 font-medium">{paymentMethod.isDefault ? 'Retirer par défaut' : 'Définir par défaut'}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="my-3" />
                  <DropdownMenuItem 
                    onClick={() => onDelete(paymentMethod)}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-red-50 rounded-2xl transition-colors duration-200 cursor-pointer"
                  >
                    <Trash2 className="w-5 h-5 text-red-500" />
                    <span className="text-red-600 font-medium">Supprimer</span>
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
