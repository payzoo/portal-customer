
import { 
  Home, 
  CreditCard, 
  MapPin, 
  Settings,
  Calendar,
  Plus,
  LogOut
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
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-xl">PayZoo</h2>
            <p className="text-sm text-gray-500">Gestion financière</p>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
            <span className="text-green-700 font-semibold text-lg">HD</span>
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
                  ? "bg-green-50 text-green-700 shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Quick Action */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl h-12 font-medium shadow-lg hover:shadow-xl transition-all duration-200">
            <Plus className="w-5 h-5 mr-2" />
            Nouvelle transaction
          </Button>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100">
        <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl h-12">
          <LogOut className="w-5 h-5 mr-3" />
          Se déconnecter
        </Button>
        <p className="text-xs text-gray-400 mt-4 text-center">PayZoo v1.0.0</p>
      </div>
    </div>
  );
}
