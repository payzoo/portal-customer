
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
  onViewSubscription?: (id: number) => void;
}

export function SubscriptionsList({ 
  subscriptions, 
  isLoaded,
  onEditSubscription,
  onDeleteSubscription,
  onViewSubscription 
}: SubscriptionsListProps) {
  if (subscriptions.length === 0) {
    return <EmptyState isLoaded={isLoaded} />;
  }

  return (
    <section className="space-y-3">
      <div className="text-sm font-medium text-gray-700 mb-4">
        {subscriptions.length} abonnement{subscriptions.length > 1 ? 's' : ''} trouvé{subscriptions.length > 1 ? 's' : ''}
      </div>
      
      <div className="space-y-2">
        {subscriptions.map((subscription, index) => (
          <SubscriptionCard 
            key={subscription.id} 
            subscription={subscription} 
            index={index}
            isLoaded={isLoaded}
            onEdit={onEditSubscription}
            onDelete={onDeleteSubscription}
            onView={onViewSubscription}
          />
        ))}
      </div>
    </section>
  );
}
