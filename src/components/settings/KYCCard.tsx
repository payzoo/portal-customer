
import { CheckCircle, AlertCircle, ChevronRight, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { IdentityVerificationModal } from "@/components/modals/kyc/IdentityVerificationModal";
import { AddressVerificationModal } from "@/components/modals/kyc/AddressVerificationModal";
import { IncomeVerificationModal } from "@/components/modals/kyc/IncomeVerificationModal";

interface KYCItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  status: 'verified' | 'pending' | 'missing';
  description: string;
  progress: number;
  action: () => void;
}

interface KYCCardProps {
  kycSettings: KYCItem[];
  isLoaded: boolean;
}

export function KYCCard({ kycSettings, isLoaded }: KYCCardProps) {
  const [isIdentityModalOpen, setIsIdentityModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-green-50 text-green-700 border-green-200 text-xs">Vérifié</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200 text-xs">En cours</Badge>;
      case 'missing':
        return <Badge className="bg-red-50 text-red-700 border-red-200 text-xs">Requis</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">À faire</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'missing':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const handleKYCAction = (index: number) => {
    switch (index) {
      case 0:
        setIsIdentityModalOpen(true);
        break;
      case 1:
        setIsAddressModalOpen(true);
        break;
      case 2:
        setIsIncomeModalOpen(true);
        break;
      default:
        break;
    }
  };

  const overallProgress = Math.round(kycSettings.reduce((acc, item) => acc + item.progress, 0) / kycSettings.length);
  const completedItems = kycSettings.filter(item => item.status === 'verified').length;
  const totalItems = kycSettings.length;

  return (
    <>
      <Card className={`border border-gray-200 bg-white transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '150ms' }}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">Vérification KYC</h3>
                <p className="text-sm text-gray-600">{completedItems}/{totalItems} étapes complétées</p>
              </div>
            </div>
            <Button 
              size="sm" 
              className="bg-black hover:bg-gray-800 text-white h-9 px-4"
              onClick={() => {
                const firstIncomplete = kycSettings.findIndex(item => item.status !== 'verified');
                if (firstIncomplete !== -1) {
                  handleKYCAction(firstIncomplete);
                }
              }}
            >
              Continuer
            </Button>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-black">{overallProgress}% terminé</span>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <TrendingUp className="w-3 h-3" />
                +25% limites
              </div>
            </div>
            <Progress value={overallProgress} className="h-2" />
          </div>
          
          <div className="space-y-3">
            {kycSettings.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 cursor-pointer border border-transparent hover:border-gray-100"
                onClick={() => handleKYCAction(index)}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-black" />
                    </div>
                    <div className="absolute -top-1 -right-1">
                      {getStatusIcon(item.status)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-black text-sm">{item.title}</p>
                      {getStatusBadge(item.status)}
                    </div>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-gray-600">{item.progress}%</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <IdentityVerificationModal
        isOpen={isIdentityModalOpen}
        onClose={() => setIsIdentityModalOpen(false)}
      />

      <AddressVerificationModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
      />

      <IncomeVerificationModal
        isOpen={isIncomeModalOpen}
        onClose={() => setIsIncomeModalOpen(false)}
      />
    </>
  );
}
