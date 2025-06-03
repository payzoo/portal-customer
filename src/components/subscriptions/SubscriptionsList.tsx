
import { SubscriptionCard } from "@/components/subscriptions/SubscriptionCard";
import { EmptyState } from "@/components/subscriptions/EmptyState";

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

interface SubscriptionsListProps {
  subscriptions: Subscription[];
  isLoaded: boolean;
  onEditSubscription?: (id: number) => void;
  onDeleteSubscription?: (id: number) => void;
}

export function SubscriptionsList({ 
  subscriptions, 
  isLoaded,
  onEditSubscription,
  onDeleteSubscription 
}: SubscriptionsListProps) {
  if (subscriptions.length === 0) {
    return <EmptyState isLoaded={isLoaded} />;
  }

  return (
    <section className="space-y-4">
      {subscriptions.map((subscription, index) => (
        <SubscriptionCard 
          key={subscription.id} 
          subscription={subscription} 
          index={index}
          isLoaded={isLoaded}
          onEdit={onEditSubscription}
          onDelete={onDeleteSubscription}
        />
      ))}
    </section>
  );
}
