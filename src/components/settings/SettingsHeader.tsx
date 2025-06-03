
import { User, Brain, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SettingsHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  isLoaded: boolean;
}

export function SettingsHeader({ searchTerm, onSearchChange, isLoaded }: SettingsHeaderProps) {
  return (
    <div className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Paramètres</h1>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Gérez votre compte et personnalisez votre expérience
          </p>
        </div>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-10 bg-background border-border/30 focus:border-black transition-colors"
        />
      </div>
    </div>
  );
}
