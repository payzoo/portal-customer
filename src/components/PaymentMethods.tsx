
import { CreditCard, Plus, Building2, Calendar, Shield, MoreVertical, Search, Filter, Eye, EyeOff, ArrowUpRight, Zap, Stars, CheckCircle2, AlertCircle, Settings, Edit, Trash2, Copy, Archive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { AddPaymentMethodModal } from "@/components/modals/AddPaymentMethodModal";

export function PaymentMethods() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [showSensitive, setShowSensitive] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Carte de crédit",
      provider: "Visa",
      last4: "4242",
      name: "Carte principale",
      expiry: "12/27",
      isDefault: true,
      status: "active",
      color: "bg-gradient-to-br from-slate-600 to-slate-800",
      icon: CreditCard,
      description: "Carte de débit quotidienne"
    },
    {
      id: 2,
      type: "Carte de crédit",
      provider: "Mastercard",
      last4: "5555",
      name: "Carte business",
      expiry: "08/26",
      isDefault: false,
      status: "active",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      icon: CreditCard,
      description: "Dépenses professionnelles"
    },
    {
      id: 3,
      type: "Compte bancaire",
      provider: "Crédit Agricole",
      last4: "1234",
      name: "Compte courant",
      expiry: null,
      isDefault: false,
      status: "active",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      icon: Building2,
      description: "Virements automatiques"
    },
    {
      id: 4,
      type: "Carte de crédit",
      provider: "American Express",
      last4: "0005",
      name: "Carte premium",
      expiry: "03/25",
      isDefault: false,
      status: "expired",
      color: "bg-gradient-to-br from-gray-400 to-gray-600",
      icon: CreditCard,
      description: "À renouveler"
    }
  ]);

  const filteredMethods = paymentMethods.filter(method => {
    const matchesSearch = method.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         method.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || method.type.toLowerCase().includes(filterType.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const activeCount = paymentMethods.filter(method => method.status === 'active').length;
  const expiredCount = paymentMethods.filter(method => method.status === 'expired').length;
  const defaultMethod = paymentMethods.find(method => method.isDefault);

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'active':
        return { 
          icon: CheckCircle2, 
          color: 'text-emerald-600', 
          bgColor: 'bg-emerald-50 border-emerald-200', 
          label: 'Actif',
          dotColor: 'bg-emerald-500'
        };
      case 'expired':
        return { 
          icon: AlertCircle, 
          color: 'text-red-600', 
          bgColor: 'bg-red-50 border-red-200', 
          label: 'Expiré',
          dotColor: 'bg-red-500'
        };
      default:
        return { 
          icon: CheckCircle2, 
          color: 'text-slate-600', 
          bgColor: 'bg-slate-50 border-slate-200', 
          label: 'Inconnu',
          dotColor: 'bg-slate-500'
        };
    }
  };

  const handleDropdownAction = (action: string, methodId: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(`Action ${action} pour le moyen de paiement ${methodId}`);
  };

  const handleAddPaymentMethod = (newMethod: any) => {
    setPaymentMethods(prev => [...prev, newMethod]);
    console.log('Nouveau moyen de paiement ajouté:', newMethod);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-20 left-10 w-20 h-20 border border-slate-200 rounded-2xl rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 border border-slate-200 rounded-xl -rotate-12 animate-[float_10s_ease-in-out_infinite_3s]"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-slate-200 rounded-full animate-[float_6s_ease-in-out_infinite_1s]"></div>
      </div>

      <div className="relative z-10 payzoo-page-container">
        
        {/* Modernized header */}
        <div className={`mb-12 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center shadow-lg">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-black bg-gray-100 px-2 py-1 rounded-full">SECURE</span>
                    <span className="text-xs text-muted-foreground">Portefeuille sécurisé</span>
                  </div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                    Portefeuille
                  </h1>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">Gérez vos moyens de paiement</p>
            </div>
            
            <Button 
              onClick={() => setIsAddModalOpen(true)}
              className="group bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-6"
            >
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              Ajouter
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Streamlined search and filters */}
        <div className={`mb-8 transition-all duration-500 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex gap-3">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un moyen de paiement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 pl-12 pr-4 bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl focus:border-black focus:outline-none focus:ring-4 focus:ring-black/10 transition-all duration-300 text-foreground placeholder:text-muted-foreground shadow-sm"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-44 h-12 bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl focus:border-black shadow-sm">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-black" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl">
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="carte">Cartes</SelectItem>
                <SelectItem value="compte">Comptes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="relative p-6 bg-white/80 backdrop-blur-sm border border-border/50 hover:border-black/20 transition-all duration-300 hover:shadow-lg group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{activeCount}</div>
              <div className="text-sm text-muted-foreground">Moyens actifs</div>
            </div>
          </Card>

          <Card className="relative p-6 bg-white/80 backdrop-blur-sm border border-border/50 hover:border-amber-200 transition-all duration-300 hover:shadow-lg group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <Stars className="w-5 h-5 text-amber-600" />
                </div>
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">1</div>
              <div className="text-sm text-muted-foreground">Méthode par défaut</div>
            </div>
          </Card>

          <Card className="relative p-6 bg-white/80 backdrop-blur-sm border border-border/50 hover:border-red-200 transition-all duration-300 hover:shadow-lg group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-rose-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{expiredCount}</div>
              <div className="text-sm text-muted-foreground">Expirés</div>
            </div>
          </Card>
        </div>

        <div className={`mb-8 transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-foreground">Affichage sécurisé</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSensitive(!showSensitive)}
              className="h-8 px-3 hover:bg-gray-100 rounded-lg"
            >
              {showSensitive ? <Eye className="w-4 h-4 mr-2" /> : <EyeOff className="w-4 h-4 mr-2" />}
              {showSensitive ? 'Masquer' : 'Afficher'}
            </Button>
          </div>
        </div>

        <div className={`space-y-4 transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {filteredMethods.length === 0 ? (
            <div className="py-20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Aucun résultat</h3>
              <p className="text-muted-foreground max-w-md mx-auto">Aucun moyen de paiement ne correspond à vos critères de recherche.</p>
            </div>
          ) : (
            filteredMethods.map((method, index) => {
              const statusInfo = getStatusInfo(method.status);
              const IconComponent = method.icon;
              
              return (
                <Card 
                  key={method.id} 
                  className="group relative bg-white/80 backdrop-blur-sm border border-border/50 hover:border-black/20 transition-all duration-300 hover:shadow-xl cursor-pointer rounded-2xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50/0 via-gray-50/20 to-gray-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="relative p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                          <div className="absolute -top-1 -right-1">
                            <div className={`w-3 h-3 ${statusInfo.dotColor} rounded-full border-2 border-white shadow-sm`}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-black transition-colors">
                              {method.name}
                            </h3>
                            {method.isDefault && (
                              <Badge variant="secondary" className="text-xs bg-black text-white border-black">
                                Par défaut
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Building2 className="w-4 h-4" />
                              {method.provider}
                            </span>
                            <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                            <span className="italic">{method.description}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-right space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="text-xl font-bold text-foreground font-mono">
                              {showSensitive ? `•••• ${method.last4}` : '•••• ••••'}
                            </span>
                          </div>
                          {method.expiry && (
                            <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              Expire: {showSensitive ? method.expiry : '••/••'}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-300 ${statusInfo.bgColor}`}>
                            <statusInfo.icon className={`w-4 h-4 ${statusInfo.color}`} />
                            <span className={`text-sm font-medium ${statusInfo.color}`}>
                              {statusInfo.label}
                            </span>
                          </div>
                          
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="w-10 h-10 p-0 hover:bg-gray-100 rounded-xl transition-colors"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }}
                                >
                                  <MoreVertical className="w-5 h-5 text-muted-foreground" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent 
                                align="end" 
                                className="w-48 bg-white/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <DropdownMenuItem 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer hover:bg-gray-50 transition-colors rounded-lg m-1"
                                  onClick={(e) => handleDropdownAction('edit', method.id, e)}
                                >
                                  <Edit className="w-4 h-4 text-black" />
                                  Modifier
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer hover:bg-gray-50 transition-colors rounded-lg m-1"
                                  onClick={(e) => handleDropdownAction('default', method.id, e)}
                                >
                                  <Stars className="w-4 h-4 text-black" />
                                  Définir par défaut
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer hover:bg-gray-50 transition-colors rounded-lg m-1"
                                  onClick={(e) => handleDropdownAction('duplicate', method.id, e)}
                                >
                                  <Copy className="w-4 h-4 text-black" />
                                  Dupliquer
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="my-1 h-px bg-border/50" />
                                <DropdownMenuItem 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground cursor-pointer hover:bg-slate-50 transition-colors rounded-lg m-1"
                                  onClick={(e) => handleDropdownAction('archive', method.id, e)}
                                >
                                  <Archive className="w-4 h-4" />
                                  Archiver
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-red-600 cursor-pointer hover:bg-red-50 transition-colors rounded-lg m-1"
                                  onClick={(e) => handleDropdownAction('delete', method.id, e)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                  Supprimer
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>

      {/* Add Payment Method Modal */}
      <AddPaymentMethodModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddPaymentMethod}
      />
    </div>
  );
}
