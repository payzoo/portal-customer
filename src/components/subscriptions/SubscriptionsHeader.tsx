
import { useState } from "react";
import { Plus, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubscriptionsHeaderProps {
  isLoaded: boolean;
  onAddClick: () => void;
}

export function SubscriptionsHeader({ isLoaded, onAddClick }: SubscriptionsHeaderProps) {
  return (
    <header className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600">Live tracking</span>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-black">Abonnements</h1>
            <p className="text-gray-600">Gérez vos abonnements en un coup d'œil</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline"
            className="border-gray-300 hover:bg-gray-50"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filtrer
          </Button>
          <Button 
            className="bg-black hover:bg-gray-800 text-white px-6"
            onClick={onAddClick}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </div>
    </header>
  );
}
