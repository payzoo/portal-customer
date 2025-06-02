
import { Plus } from "lucide-react";

export function AddSubscriptionCard() {
  const handleAddSubscription = () => {
    console.log("Ajouter un nouvel abonnement");
  };

  return (
    <div 
      className="group py-12 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer"
      onClick={handleAddSubscription}
    >
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-black mb-1">Ajouter un service</h3>
            <p className="text-sm text-gray-400">
              Nouveau service en quelques clics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
