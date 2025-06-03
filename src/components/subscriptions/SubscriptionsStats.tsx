
import { DollarSign, Play, Zap, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/subscriptions/StatCard";

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

interface SubscriptionsStatsProps {
  subscriptions: Subscription[];
  isLoaded: boolean;
}

export function SubscriptionsStats({ subscriptions, isLoaded }: SubscriptionsStatsProps) {
  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active').length;
  const trialSubscriptions = subscriptions.filter(sub => sub.status === 'trial').length;
  const totalMonthlyCost = subscriptions.reduce((acc, sub) => acc + parseFloat(sub.amount), 0);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
  );
}
