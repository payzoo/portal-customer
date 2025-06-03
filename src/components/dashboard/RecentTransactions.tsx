
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Transaction {
  name: string;
  amount: string;
  time: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface RecentTransactionsProps {
  isLoaded: boolean;
  transactions: Transaction[];
}

export function RecentTransactions({ isLoaded, transactions }: RecentTransactionsProps) {
  return (
    <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Transactions récentes</h2>
        <Button variant="ghost" size="sm">
          Tout voir
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      
      <div className="space-y-1">
        {transactions.map((transaction, index) => {
          const Icon = transaction.icon;
          return (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 bg-gradient-to-r ${transaction.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{transaction.name}</p>
                  <p className="text-xs text-muted-foreground">{transaction.category} • {transaction.time}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-foreground">-{transaction.amount}€</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
