
import { useState, useEffect } from "react";
import { 
  Plus, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Play,
  Zap,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddSubscriptionCard } from "@/components/AddSubscriptionCard";
import { StatCard } from "@/components/subscriptions/StatCard";
import { SubscriptionCard } from "@/components/subscriptions/SubscriptionCard";
import { SearchBar } from "@/components/subscriptions/SearchBar";
import { EmptyState } from "@/components/subscriptions/EmptyState";

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

  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active').length;
  const trialSubscriptions = subscriptions.filter(sub => sub.status === 'trial').length;
  const totalMonthlyCost = subscriptions.reduce((acc, sub) => acc + parseFloat(sub.amount), 0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredSubscriptions = subscriptions.filter(subscription =>
    subscription.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subscription.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse opacity-70" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl animate-pulse opacity-70" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50/10 to-purple-50/10 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        
        {/* Header */}
        <header className={`mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center justify-between">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full animate-pulse shadow-lg" />
                  <span className="text-base font-semibold text-emerald-600 tracking-wide">Live Tracking</span>
                </div>
              </div>
              <div className="space-y-3">
                <h1 className="text-5xl font-light text-gray-900 tracking-tight">Abonnements</h1>
                <p className="text-xl text-gray-600 font-medium">Gérez tous vos abonnements en un seul endroit</p>
              </div>
            </div>
            
            <Button 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 text-lg font-medium"
              onClick={() => setIsAddModalOpen(true)}
            >
              <Plus className="w-6 h-6 mr-3 group-hover:rotate-90 transition-transform duration-500" />
              Ajouter
              <ArrowUpRight className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
            </Button>
          </div>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StatCard
            icon={DollarSign}
            title="Total mensuel"
            value={`${totalMonthlyCost.toFixed(2)} €`}
            subtitle="Coût total"
            delay={100}
            color="emerald"
            isLoaded={isLoaded}
          />
          <StatCard
            icon={Play}
            title="Actifs"
            value={activeSubscriptions.toString()}
            subtitle="Abonnements"
            delay={200}
            color="blue"
            isLoaded={isLoaded}
          />
          <StatCard
            icon={Zap}
            title="En essai"
            value={trialSubscriptions.toString()}
            subtitle="Gratuits"
            delay={300}
            color="amber"
            isLoaded={isLoaded}
          />
          <StatCard
            icon={TrendingUp}
            title="Tendance"
            value="+12%"
            subtitle="Ce mois"
            delay={400}
            color="purple"
            isLoaded={isLoaded}
          />
        </section>

        {/* Search */}
        <section className="mb-12">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            isLoaded={isLoaded}
          />
        </section>

        {/* Subscriptions list */}
        <section className="space-y-6">
          {filteredSubscriptions.length === 0 ? (
            <EmptyState isLoaded={isLoaded} />
          ) : (
            filteredSubscriptions.map((subscription, index) => (
              <SubscriptionCard 
                key={subscription.id} 
                subscription={subscription} 
                index={index}
                isLoaded={isLoaded}
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
