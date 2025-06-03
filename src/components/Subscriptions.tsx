
import { useState, useEffect } from "react";
import { DollarSign, Users, TrendingUp, Activity } from "lucide-react";
import { AddSubscriptionCard } from "@/components/AddSubscriptionCard";
import { SubscriptionsHeader } from "@/components/subscriptions/SubscriptionsHeader";
import { StatCard } from "@/components/subscriptions/StatCard";
import { SearchBar } from "@/components/subscriptions/SearchBar";
import { SubscriptionCard } from "@/components/subscriptions/SubscriptionCard";
import { EmptyState } from "@/components/subscriptions/EmptyState";
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
      billingCycle: "mois",
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
      billingCycle: "mois",
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
      billingCycle: "mois",
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
      billingCycle: "mois",
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

  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active').length;
  const trialSubscriptions = subscriptions.filter(sub => sub.status === 'trial').length;
  const totalMonthlyCost = subscriptions.reduce((acc, sub) => acc + parseFloat(sub.amount), 0);
  const totalServices = subscriptions.length;

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
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        
        <SubscriptionsHeader 
          isLoaded={isLoaded}
          onAddClick={() => setIsAddModalOpen(true)}
        />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={DollarSign}
            title="Coût mensuel"
            value={`${totalMonthlyCost.toFixed(2)} €`}
            subtitle="Total par mois"
            delay={100}
            isLoaded={isLoaded}
          />
          <StatCard
            icon={Users}
            title="Services actifs"
            value={activeSubscriptions.toString()}
            subtitle="En cours"
            delay={200}
            isLoaded={isLoaded}
          />
          <StatCard
            icon={Activity}
            title="En essai"
            value={trialSubscriptions.toString()}
            subtitle="Périodes d'essai"
            delay={300}
            isLoaded={isLoaded}
          />
          <StatCard
            icon={TrendingUp}
            title="Total services"
            value={totalServices.toString()}
            subtitle="Configurés"
            delay={400}
            isLoaded={isLoaded}
          />
        </section>

        <div className="flex justify-between items-center">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            isLoaded={isLoaded}
          />
        </div>

        <section className="space-y-3">
          {filteredSubscriptions.length === 0 ? (
            <EmptyState 
              isLoaded={isLoaded} 
              onAddClick={() => setIsAddModalOpen(true)}
            />
          ) : (
            filteredSubscriptions.map((subscription, index) => (
              <SubscriptionCard 
                key={subscription.id} 
                subscription={subscription} 
                index={index}
                isLoaded={isLoaded}
                onEdit={handleEditSubscription}
                onDelete={handleDeleteSubscription}
              />
            ))
          )}
        </section>
      </div>

      <AddSubscriptionCard 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </main>
  );
}
