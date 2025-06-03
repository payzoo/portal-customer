
import { useState, useEffect } from "react";
import { AddSubscriptionCard } from "@/components/AddSubscriptionCard";
import { SubscriptionsHeader } from "@/components/subscriptions/SubscriptionsHeader";
import { SubscriptionsStats } from "@/components/subscriptions/SubscriptionsStats";
import { SearchBar } from "@/components/subscriptions/SearchBar";
import { SubscriptionsList } from "@/components/subscriptions/SubscriptionsList";
import { useToast } from "@/hooks/use-toast";

export function Subscriptions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { toast } = useToast();

  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      name: "Netflix",
      amount: "12.99",
      currency: "€",
      billingCycle: "mensuel",
      nextPaymentDate: "15/07/2024",
      category: "Divertissement",
      status: "active",
      color: "from-red-500 to-red-600",
      logo: "N",
    },
    {
      id: 2,
      name: "Spotify",
      amount: "9.99",
      currency: "€",
      billingCycle: "mensuel",
      nextPaymentDate: "22/07/2024",
      category: "Musique",
      status: "active",
      color: "from-green-500 to-green-600",
      logo: "S",
    },
    {
      id: 3,
      name: "iCloud",
      amount: "2.99",
      currency: "€",
      billingCycle: "mensuel",
      nextPaymentDate: "01/08/2024",
      category: "Stockage",
      status: "active",
      color: "from-blue-500 to-blue-600",
      logo: "iC",
    },
    {
      id: 4,
      name: "Payzoo Premium",
      amount: "4.99",
      currency: "€",
      billingCycle: "mensuel",
      nextPaymentDate: "10/08/2024",
      category: "Productivité",
      status: "trial",
      color: "from-purple-500 to-purple-600",
      logo: "PZ",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredSubscriptions = subscriptions.filter(subscription =>
    subscription.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subscription.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddSubscription = (newSubscription: any) => {
    const subscription = {
      ...newSubscription,
      id: Date.now(),
    };
    setSubscriptions(prev => [...prev, subscription]);
    setIsAddModalOpen(false);
    toast({
      title: "Abonnement ajouté",
      description: `${subscription.name} a été ajouté avec succès.`,
    });
  };

  const handleEditSubscription = (id: number) => {
    const subscription = subscriptions.find(sub => sub.id === id);
    if (subscription) {
      toast({
        title: "Édition",
        description: `Édition de ${subscription.name} (fonctionnalité à venir)`,
      });
    }
  };

  const handleDeleteSubscription = (id: number) => {
    const subscription = subscriptions.find(sub => sub.id === id);
    if (subscription) {
      setSubscriptions(prev => prev.filter(sub => sub.id !== id));
      toast({
        title: "Abonnement supprimé",
        description: `${subscription.name} a été supprimé.`,
      });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <SubscriptionsHeader 
          isLoaded={isLoaded}
          onAddClick={() => setIsAddModalOpen(true)}
        />

        <SubscriptionsStats 
          subscriptions={subscriptions}
          isLoaded={isLoaded}
        />

        <div className="mb-8 flex justify-center">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            isLoaded={isLoaded}
          />
        </div>

        <SubscriptionsList 
          subscriptions={filteredSubscriptions}
          isLoaded={isLoaded}
          onEditSubscription={handleEditSubscription}
          onDeleteSubscription={handleDeleteSubscription}
        />
      </div>

      <AddSubscriptionCard 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </main>
  );
}
