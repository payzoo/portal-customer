import { useState, useEffect } from "react";
import { 
  Plus, 
  Search, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  Brain,
  ArrowUpRight,
  Sparkles,
  Zap
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
      color: "from-red-500 to-red-700",
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
      color: "from-green-500 to-green-700",
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
      color: "from-blue-500 to-blue-700",
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
      color: "from-purple-500 to-purple-700",
      logo: "PZ",
    },
  ]);

  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active').length;
  const trialSubscriptions = subscriptions.filter(sub => sub.status === 'trial').length;
  const totalMonthlyCost = subscriptions.reduce((acc, sub) => acc + parseFloat(sub.amount), 0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredSubscriptions = subscriptions.filter(subscription =>
    subscription.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subscription.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-border/20 rounded-3xl rotate-12 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-border/30 rounded-2xl -rotate-12 animate-[float_8s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-border/25 rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite_4s]" />
        <div className="absolute top-32 right-1/3 w-20 h-20 border border-border/20 rounded-full animate-[float_9s_ease-in-out_infinite_1s] opacity-40" />
      </div>

      <div className="payzoo-page-container relative z-10">
        {/* Header section standardisé */}
        <header className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-foreground rounded-xl shadow-sm">
                  <Calendar className="w-6 h-6 text-background" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600">Smart Tracking</span>
                </div>
              </div>
              <div>
                <h1 className="payzoo-page-title">Abonnements</h1>
                <p className="payzoo-subtitle flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Gérez vos abonnements intelligemment
                </p>
              </div>
            </div>
            
            <Button 
              className="payzoo-btn-primary group"
              onClick={() => setIsAddModalOpen(true)}
            >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              Ajouter
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </header>

        {/* Metrics cards */}
        <section className={`payzoo-grid-4 mb-12 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Card className="payzoo-card-interactive">
            <CardContent className="payzoo-card-compact">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <Sparkles className="w-4 h-4 text-blue-500/60 animate-pulse" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {totalMonthlyCost.toFixed(2)} €
              </div>
              <div className="payzoo-caption">Total / mois</div>
            </CardContent>
          </Card>

          <Card className="payzoo-card-interactive">
            <CardContent className="payzoo-card-compact">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-500/10 rounded-xl">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <Sparkles className="w-4 h-4 text-green-500/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {activeSubscriptions}
              </div>
              <div className="payzoo-caption">Actifs</div>
            </CardContent>
          </Card>

          <Card className="payzoo-card-interactive">
            <CardContent className="payzoo-card-compact">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-yellow-500/10 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                <Sparkles className="w-4 h-4 text-yellow-500/60 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {trialSubscriptions}
              </div>
              <div className="payzoo-caption">En essai</div>
            </CardContent>
          </Card>

          <Card className="payzoo-card-interactive">
            <CardContent className="payzoo-card-compact">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <Sparkles className="w-4 h-4 text-purple-500/60 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                +12%
              </div>
              <div className="payzoo-caption">Ce mois</div>
            </CardContent>
          </Card>
        </section>

        {/* Search and filters */}
        <section className={`mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="payzoo-input-container">
            <Search className="payzoo-input-icon" />
            <input
              type="text"
              placeholder="Rechercher un abonnement..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="payzoo-input-with-icon"
              aria-label="Rechercher un abonnement"
            />
          </div>
        </section>

        {/* Subscriptions list */}
        <section className={`space-y-4 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {filteredSubscriptions.length === 0 ? (
            <Card className="payzoo-card">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-muted-foreground/60" />
                </div>
                <h3 className="payzoo-subsection-title mb-3">Aucun résultat</h3>
                <p className="payzoo-subtitle">
                  Aucun abonnement ne correspond à votre recherche.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredSubscriptions.map((subscription, index) => (
              <Card 
                key={subscription.id} 
                className="payzoo-card-interactive"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="payzoo-card-compact">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${subscription.color} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                        <span className="font-bold text-white text-lg">{subscription.logo}</span>
                      </div>
                      <div>
                        <h3 className="payzoo-subsection-title">{subscription.name}</h3>
                        <div className="payzoo-body">
                          {subscription.amount} {subscription.currency} / {subscription.billingCycle}
                        </div>
                        <div className="payzoo-body-sm text-muted-foreground">
                          Prochain paiement le {subscription.nextPaymentDate}
                        </div>
                      </div>
                    </div>
                    <Badge className="uppercase text-xs font-bold bg-secondary/80 border-0">
                      {subscription.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
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
