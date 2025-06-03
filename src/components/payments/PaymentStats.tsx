
import { CreditCard, Star, Shield, Smartphone } from "lucide-react";
import { PaymentStatCard } from "@/components/payments/PaymentStatCard";

interface PaymentMethod {
  id: number;
  type: "visa" | "mastercard" | "paypal" | "other";
  accountNumber: string;
  expiryDate: string;
  isDefault: boolean;
}

interface PaymentStatsProps {
  paymentMethods: PaymentMethod[];
  isLoaded: boolean;
}

export function PaymentStats({ paymentMethods, isLoaded }: PaymentStatsProps) {
  const defaultCount = paymentMethods.filter(method => method.isDefault).length;
  const visaCount = paymentMethods.filter(method => method.type === "visa").length;
  const mastercardCount = paymentMethods.filter(method => method.type === "mastercard").length;

  return (
    <section 
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      aria-label="Statistiques des moyens de paiement"
    >
      <PaymentStatCard
        icon={CreditCard}
        value={paymentMethods.length}
        label="Total"
        delay={0}
        isLoaded={isLoaded}
      />
      <PaymentStatCard
        icon={Star}
        value={defaultCount}
        label="Par défaut"
        delay={100}
        isLoaded={isLoaded}
      />
      <PaymentStatCard
        icon={Shield}
        value={visaCount}
        label="Visa"
        delay={200}
        isLoaded={isLoaded}
      />
      <PaymentStatCard
        icon={Smartphone}
        value={mastercardCount}
        label="Mastercard"
        delay={300}
        isLoaded={isLoaded}
      />
    </section>
  );
}
