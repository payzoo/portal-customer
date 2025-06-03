
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
  isLoaded: boolean;
}

export function PaymentList({ 
  paymentMethods, 
  onEdit, 
  onToggleDefault, 
  onDelete, 
  isLoaded 
}: PaymentListProps) {
  if (paymentMethods.length === 0) {
    return <PaymentEmptyState isLoaded={isLoaded} />;
  }

  return (
    <section 
      className={`space-y-4 transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      aria-label="Liste des moyens de paiement"
    >
      <div className="text-sm font-medium text-gray-700 mb-4">
        {paymentMethods.length} moyen{paymentMethods.length > 1 ? 's' : ''} de paiement trouvé{paymentMethods.length > 1 ? 's' : ''}
      </div>
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
    </section>
  );
}
