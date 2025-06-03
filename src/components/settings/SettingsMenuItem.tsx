
import { ChevronRight } from "lucide-react";

interface SettingsMenuItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action: () => void;
  delay?: number;
  isLoaded: boolean;
}

export function SettingsMenuItem({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  delay = 0,
  isLoaded 
}: SettingsMenuItemProps) {
  return (
    <div 
      className={`group flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 cursor-pointer border border-transparent hover:border-gray-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={action}
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-black">{title}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
    </div>
  );
}
