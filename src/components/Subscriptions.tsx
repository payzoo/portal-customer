
import { useState, useEffect } from "react";
import { AddSubscriptionCard } from "@/components/AddSubscriptionCard";
import { SubscriptionsHeader } from "@/components/subscriptions/SubscriptionsHeader";
import { SubscriptionsStats } from "@/components/subscriptions/SubscriptionsStats";
import { SearchBar } from "@/components/subscriptions/SearchBar";
import { SubscriptionsList } from "@/components/subscriptions/SubscriptionsList";

export function Subscriptions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/15 rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100/15 rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-50/8 to-purple-50/8 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <SubscriptionsHeader 
          isLoaded={isLoaded}
          onAddClick={() => setIsAddModalOpen(true)}
        />

        <SubscriptionsStats 
          subscriptions={subscriptions}
          isLoaded={isLoaded}
        />

        <div className="mb-6">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            isLoaded={isLoaded}
          />
        </div>

        <SubscriptionsList 
          subscriptions={filteredSubscriptions}
          isLoaded={isLoaded}
        />
      </div>

      <AddSubscriptionCard 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </main>
  );
}
