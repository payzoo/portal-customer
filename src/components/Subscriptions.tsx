
import { useState, useEffect } from "react";
import { 
  Plus, 
  Search, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  ArrowUpRight,
  Sparkles,
  Zap,
  MoreHorizontal,
  Play,
  Pause
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AddSubscriptionCard } from "@/components/AddSubscriptionCard";

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
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredSubscriptions = subscriptions.filter(subscription =>
    subscription.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subscription.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const StatCard = ({ icon: Icon, title, value, subtitle, delay, color = "blue" }: {
    icon: any;
    title: string;
    value: string;
    subtitle: string;
    delay: number;
    color?: string;
  }) => (
    <Card className={`group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-${color}-500/10 hover:-translate-y-1 ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`} style={{ transitionDelay: `${delay}ms` }}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-2xl bg-gradient-to-br from-${color}-50 to-${color}-100 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-5 h-5 text-${color}-600`} />
          </div>
          <div className={`w-2 h-2 rounded-full bg-${color}-400 opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300`} />
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{subtitle}</div>
        </div>
      </CardContent>
    </Card>
  );

  const SubscriptionCard = ({ subscription, index }: { subscription: any; index: number }) => (
    <Card className={`group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`relative w-14 h-14 bg-gradient-to-br ${subscription.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <span className="font-bold text-white text-lg">{subscription.logo}</span>
              {subscription.status === 'trial' && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
              )}
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                {subscription.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  {subscription.amount} {subscription.currency}
                </span>
                <span className="text-sm text-gray-500">/ {subscription.billingCycle}</span>
              </div>
              <div className="text-sm text-gray-500">
                Prochain: {subscription.nextPaymentDate}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge 
              variant="secondary" 
              className="bg-gray-100 text-gray-700 border-0 px-3 py-1 text-xs font-medium"
            >
              {subscription.category}
            </Badge>
            <Button 
              variant="ghost" 
              size="sm" 
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 hover:bg-gray-100"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <header className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600">Live Tracking</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Abonnements</h1>
                <p className="text-lg text-gray-600">Gérez tous vos abonnements en un seul endroit</p>
              </div>
            </div>
            
            <Button 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setIsAddModalOpen(true)}
            >
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              Ajouter
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={DollarSign}
            title="Total mensuel"
            value={`${totalMonthlyCost.toFixed(2)} €`}
            subtitle="Coût total"
            delay={100}
            color="emerald"
          />
          <StatCard
            icon={Play}
            title="Actifs"
            value={activeSubscriptions.toString()}
            subtitle="Abonnements"
            delay={200}
            color="blue"
          />
          <StatCard
            icon={Zap}
            title="En essai"
            value={trialSubscriptions.toString()}
            subtitle="Gratuits"
            delay={300}
            color="amber"
          />
          <StatCard
            icon={TrendingUp}
            title="Tendance"
            value="+12%"
            subtitle="Ce mois"
            delay={400}
            color="purple"
          />
        </section>

        {/* Search */}
        <section className={`mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un abonnement..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-0 rounded-2xl shadow-sm focus:shadow-lg focus:bg-white transition-all duration-300 outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </section>

        {/* Subscriptions list */}
        <section className="space-y-4">
          {filteredSubscriptions.length === 0 ? (
            <Card className={`border-0 bg-white/80 backdrop-blur-sm transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Aucun résultat</h3>
                <p className="text-gray-600">
                  Aucun abonnement ne correspond à votre recherche.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredSubscriptions.map((subscription, index) => (
              <SubscriptionCard 
                key={subscription.id} 
                subscription={subscription} 
                index={index}
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
