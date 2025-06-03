
import { CheckCircle, AlertCircle, ChevronRight, Shield, TrendingUp } from "lucide-react";
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
        return <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium text-xs px-3 py-1.5 rounded-full">✓ Vérifié</Badge>;
      case 'pending':
        return <Badge className="bg-amber-50 text-amber-700 border-amber-200 font-medium text-xs px-3 py-1.5 rounded-full">⏳ En cours</Badge>;
      case 'missing':
        return <Badge className="bg-red-50 text-red-700 border-red-200 font-medium text-xs px-3 py-1.5 rounded-full">⚠ Requis</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs px-3 py-1.5 rounded-full">À faire</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-amber-500" />;
      case 'missing':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const overallProgress = Math.round(kycSettings.reduce((acc, item) => acc + item.progress, 0) / kycSettings.length);
  const completedItems = kycSettings.filter(item => item.status === 'verified').length;
  const totalItems = kycSettings.length;

  return (
    <Card className={`border-0 bg-gradient-to-br from-white to-gray-50/30 backdrop-blur-sm shadow-lg shadow-black/5 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '300ms' }}>
      <CardContent className="p-8">
        {/* Header avec metrics */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Vérification KYC</h3>
                <p className="text-gray-600 font-medium">Déverrouillez toutes les fonctionnalités</p>
              </div>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 h-auto rounded-xl font-semibold"
            >
              Continuer
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Progress metrics */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{completedItems}/{totalItems}</div>
              <div className="text-sm text-gray-500 font-medium">Étapes validées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{overallProgress}%</div>
              <div className="text-sm text-gray-500 font-medium">Progression</div>
            </div>
            <div className="text-center flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-500 mr-2" />
              <div>
                <div className="text-lg font-bold text-emerald-600">↗ +25%</div>
                <div className="text-xs text-gray-500">Limites</div>
              </div>
            </div>
          </div>

          {/* Global progress bar */}
          <div className="relative">
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: `${overallProgress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <div className="text-right mt-2">
              <span className="text-sm font-semibold text-gray-700">{overallProgress}% terminé</span>
            </div>
          </div>
        </div>
        
        {/* KYC Items */}
        <div className="space-y-4">
          {kycSettings.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-5 rounded-2xl border border-gray-100 bg-white/60 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/30 transition-all duration-300 rounded-2xl"></div>
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <item.icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <div className="absolute -top-1 -right-1">
                      {getStatusIcon(item.status)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold text-gray-900 text-base">{item.title}</p>
                      {getStatusBadge(item.status)}
                    </div>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    
                    {/* Individual progress */}
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-500 min-w-[3rem]">{item.progress}%</span>
                    </div>
                  </div>
                </div>
                
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200 ml-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
          <div className="text-center">
            <h4 className="text-lg font-bold text-gray-900 mb-2">🚀 Prêt à débloquer votre potentiel ?</h4>
            <p className="text-gray-600 mb-4">Terminez votre vérification pour accéder à des limites plus élevées</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Finaliser maintenant
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
