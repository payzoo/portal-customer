
import { TrendingUp, Shield, Clock, CheckCircle } from "lucide-react";

interface PaymentQuickStatsProps {
  paymentMethods: any[];
  isLoaded: boolean;
}

export function PaymentQuickStats({ paymentMethods, isLoaded }: PaymentQuickStatsProps) {
  const activeCount = paymentMethods.length;
  const defaultCount = paymentMethods.filter(method => method.isDefault).length;
  
  const stats = [
    {
      icon: CheckCircle,
      value: activeCount,
      label: "Actifs",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: Shield,
      value: defaultCount,
      label: "Principal",
      color: "text-blue-600", 
      bg: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      value: "100%",
      label: "Sécurisé",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Disponible",
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {stats.map((stat, index) => (
        <div 
          key={stat.label}
          className={`bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
