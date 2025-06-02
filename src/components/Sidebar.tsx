
import { 
  Home, 
  CreditCard, 
  MapPin, 
  Settings,
  Calendar,
  Plus,
  LogOut,
  Send,
  Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { id: 'dashboard', name: 'Accueil', icon: Home },
  { id: 'subscriptions', name: 'Abonnements', icon: Calendar },
  { id: 'payments', name: 'Paiements', icon: CreditCard },
  { id: 'addresses', name: 'Adresses', icon: MapPin },
  { id: 'settings', name: 'Paramètres', icon: Settings },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-72 bg-white border-r border-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-8 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 payzoo-gradient rounded-xl flex items-center justify-center shadow-lg payzoo-glow">
            <span className="text-black font-bold text-xl">P</span>
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-xl">PayZoo</h2>
            <p className="text-sm text-gray-500">Interface web</p>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-payzoo-green-100 to-payzoo-green-200 rounded-xl flex items-center justify-center">
            <span className="text-payzoo-green-800 font-semibold text-lg">HD</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Housseine Dao</p>
            <p className="text-sm text-gray-500 truncate">dao.housseine@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <div className="space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all duration-200 font-medium",
                activeSection === item.id
                  ? "bg-payzoo-green-50 text-payzoo-green-800 shadow-sm border border-payzoo-green-200"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Quick Actions - Web Features */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Actions rapides</p>
          
          <div className="space-y-2">
            <Button className="w-full payzoo-gradient hover:opacity-90 text-black rounded-xl h-12 font-medium shadow-lg hover:shadow-xl transition-all duration-200">
              <Send className="w-5 h-5 mr-2" />
              Nouveau transfert
            </Button>
            
            <Button variant="outline" className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-payzoo-green-50 hover:border-payzoo-green-200 rounded-xl h-10 border-gray-200">
              <Wallet className="w-4 h-4 mr-3" />
              Ajouter paiement
            </Button>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100">
        <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl h-12">
          <LogOut className="w-5 h-5 mr-3" />
          Se déconnecter
        </Button>
        <p className="text-xs text-gray-400 mt-4 text-center">PayZoo Web v2.0.0 • Dashboard particuliers</p>
      </div>
    </div>
  );
}
