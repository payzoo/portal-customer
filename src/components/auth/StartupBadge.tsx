
import { Sparkles } from "lucide-react";

interface StartupBadgeProps {
  isLoaded: boolean;
}

const StartupBadge = ({ isLoaded }: StartupBadgeProps) => {
  return (
    <div className={`transform transition-all duration-700 ease-out ${
      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`} style={{ transitionDelay: '300ms' }}>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/40 rounded-full">
        <Sparkles className="w-3 h-3 text-blue-600" />
        <span className="text-xs font-medium text-blue-700">
          Plateforme nouvelle génération
        </span>
      </div>
    </div>
  );
};

export default StartupBadge;
