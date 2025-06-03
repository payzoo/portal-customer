
import { PaymentCard } from "@/components/payments/PaymentCard";
import { PaymentEmptyState } from "@/components/payments/PaymentEmptyState";

interface PaymentMethod {
  id: number;
  type: "visa" | "mastercard" | "paypal" | "other";
  accountNumber: string;
  expiryDate: string;
  isDefault: boolean;
}

interface PaymentListProps {
  paymentMethods: PaymentMethod[];
  onEdit: (paymentMethod: PaymentMethod) => void;
  onToggleDefault: (paymentMethod: PaymentMethod) => void;
  onDelete: (paymentMethod: PaymentMethod) => void;
  onAddPayment?: () => void;
  isLoaded: boolean;
}

export function PaymentList({ 
  paymentMethods, 
  onEdit, 
  onToggleDefault, 
  onDelete, 
  onAddPayment,
  isLoaded 
}: PaymentListProps) {
  if (paymentMethods.length === 0) {
    return <PaymentEmptyState isLoaded={isLoaded} onAddPayment={onAddPayment} />;
  }

  return (
    <div className={`transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Moyens de paiement ({paymentMethods.length})
        </h2>
      </div>
      
      <div className="space-y-4">
        {paymentMethods.map((paymentMethod, index) => (
          <PaymentCard
            key={paymentMethod.id}
            paymentMethod={paymentMethod}
            index={index}
            onEdit={onEdit}
            onToggleDefault={onToggleDefault}
            onDelete={onDelete}
            isLoaded={isLoaded}
          />
        ))}
      </div>
    </div>
  );
}
