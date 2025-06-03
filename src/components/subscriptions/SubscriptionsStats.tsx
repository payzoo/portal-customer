
import { DollarSign, Users, TrendingUp, Activity } from "lucide-react";
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
  const totalServices = subscriptions.length;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
        subtitle="Gratuits"
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
  );
}
