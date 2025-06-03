
import { useState } from "react";
import { Plus, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubscriptionsHeaderProps {
  isLoaded: boolean;
  onAddClick: () => void;
}

export function SubscriptionsHeader({ isLoaded, onAddClick }: SubscriptionsHeaderProps) {
  return (
    <header className={`mb-8 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full animate-pulse shadow-sm" />
              <span className="text-sm font-medium text-emerald-600 tracking-wide">Suivi en temps réel</span>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">Abonnements</h1>
            <p className="text-base lg:text-lg text-gray-600 font-medium">Gérez tous vos abonnements en un seul endroit</p>
          </div>
        </div>
        
        <Button 
          className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base font-medium w-full sm:w-auto"
          onClick={onAddClick}
        >
          <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
          Ajouter
          <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Button>
      </div>
    </header>
  );
}
