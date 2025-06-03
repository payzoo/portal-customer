
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
    color: "text-blue-600",
  },
  mastercard: {
    label: "Mastercard",
    icon: CreditCard,
    color: "text-red-600",
  },
  paypal: {
    label: "PayPal",
    icon: Shield,
    color: "text-yellow-600",
  },
  other: {
    label: "Autre",
    icon: Smartphone,
    color: "text-green-600",
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
      className={`group relative overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      role="article"
      aria-label={`Moyen de paiement ${typeInfo.label}`}
    >
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-black group-hover:text-white flex-shrink-0">
              <typeInfo.icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h3 className="text-lg font-medium text-black tracking-tight truncate">{typeInfo.label}</h3>
                {paymentMethod.isDefault && (
                  <Badge className="px-3 py-1 rounded-full text-xs bg-black text-white border-0 self-start">
                    <Star className="w-3 h-3 mr-1 fill-current" aria-hidden="true" />
                    Par défaut
                  </Badge>
                )}
              </div>
              <div className="text-base font-medium text-gray-700 mb-1 truncate">
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
              className={`px-4 py-2 rounded-xl text-sm bg-gray-100 text-gray-700 border-0 transition-all duration-300 group-hover:bg-gray-200`}
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
                className="w-10 h-10 rounded-xl hover:bg-gray-100 transition-all duration-300"
                aria-label={`Modifier ${paymentMethod.type}`}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-10 h-10 rounded-xl hover:bg-gray-100 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Actions pour ${paymentMethod.type}`}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-56 bg-white border border-gray-200 rounded-xl shadow-xl p-2"
                >
                  <DropdownMenuItem 
                    onClick={() => onEdit(paymentMethod)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <Edit className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Modifier</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onToggleDefault(paymentMethod)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <Star className={`w-4 h-4 ${paymentMethod.isDefault ? 'text-black fill-current' : 'text-gray-400'}`} />
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
