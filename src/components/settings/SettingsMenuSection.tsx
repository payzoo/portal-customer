
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action: () => void;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

interface SettingsMenuSectionProps {
  category: MenuCategory;
  categoryIndex: number;
  searchTerm: string;
  isLoaded: boolean;
}

export function SettingsMenuSection({ 
  category, 
  categoryIndex, 
  searchTerm, 
  isLoaded 
}: SettingsMenuSectionProps) {
  const animationDelay = (index: number) => ({ animationDelay: `${index * 100}ms` });

  const filteredItems = category.items.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredItems.length === 0) return null;

  return (
    <Card 
      className={`border-0 bg-card/40 backdrop-blur-sm shadow-sm transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={animationDelay(categoryIndex + 2)}
    >
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {category.category}
        </h3>
        <div className="space-y-2">
          {filteredItems.map((item, itemIndex) => (
            <div 
              key={itemIndex}
              onClick={item.action}
              className="group flex items-center justify-between p-4 hover:bg-background/60 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
