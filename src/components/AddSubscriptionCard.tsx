
import { AddSubscriptionModal } from "@/components/modals/AddSubscriptionModal";

interface AddSubscriptionCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddSubscriptionCard({ isOpen, onClose }: AddSubscriptionCardProps) {
  const handleAddSubscription = (subscription: any) => {
    console.log("Nouvel abonnement ajouté:", subscription);
    // Here you would typically update the subscriptions list
  };

  return (
    <AddSubscriptionModal
      isOpen={isOpen}
      onClose={onClose}
      onAdd={handleAddSubscription}
    />
  );
}
