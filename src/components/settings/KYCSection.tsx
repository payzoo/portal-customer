
import { CheckCircle, AlertCircle, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface KYCItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  status: 'verified' | 'pending' | 'missing';
  description: string;
  progress: number;
}

interface KYCSectionProps {
  kycSettings: KYCItem[];
  isLoaded: boolean;
}

export function KYCSection({ kycSettings, isLoaded }: KYCSectionProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium text-xs px-2 py-1">Vérifié</Badge>;
      case 'pending':
        return <Badge className="bg-amber-50 text-amber-700 border-amber-200 font-medium text-xs px-2 py-1">En cours</Badge>;
      case 'missing':
        return <Badge className="bg-red-50 text-red-700 border-red-200 font-medium text-xs px-2 py-1">Requis</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs px-2 py-1">À faire</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-emerald-600" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-amber-600" />;
      case 'missing':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const overallProgress = Math.round(kycSettings.reduce((acc, item) => acc + item.progress, 0) / kycSettings.length);

  return (
    <Card className={`border-0 bg-card/50 backdrop-blur-sm transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: '300ms' }}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-2">Vérification KYC</h3>
            <p className="text-sm text-muted-foreground">Augmentez vos limites de transaction</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm font-medium text-foreground">{overallProgress}% terminé</div>
              <div className="w-20 h-2 bg-muted rounded-full mt-1 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              Continuer
            </Button>
          </div>
        </div>
        
        <div className="space-y-3">
          {kycSettings.map((item, index) => (
            <div key={index} className="group flex items-center justify-between p-4 rounded-xl border border-border/30 bg-background/50 hover:bg-background/80 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-all duration-300">
                  <item.icon className="w-4 h-4 text-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-sm text-foreground">{item.title}</p>
                    {getStatusIcon(item.status)}
                  </div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {getStatusBadge(item.status)}
                <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
