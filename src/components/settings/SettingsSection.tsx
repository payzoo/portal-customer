
import { Card, CardContent } from "@/components/ui/card";
import { SettingsMenuItem } from "./SettingsMenuItem";

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action: () => void;
}

interface SettingsSectionProps {
  title: string;
  items: MenuItem[];
  searchTerm: string;
  isLoaded: boolean;
  delay?: number;
}

export function SettingsSection({ 
  title, 
  items, 
  searchTerm, 
  isLoaded, 
  delay = 0 
}: SettingsSectionProps) {
  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredItems.length === 0) return null;

  return (
    <Card 
      className={`border border-gray-200 bg-white transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-black mb-4">
          {title}
        </h3>
        <div className="space-y-2">
          {filteredItems.map((item, itemIndex) => (
            <SettingsMenuItem
              key={itemIndex}
              icon={item.icon}
              title={item.title}
              description={item.description}
              action={item.action}
              delay={delay + (itemIndex * 50)}
              isLoaded={isLoaded}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
