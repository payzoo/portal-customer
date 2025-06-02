import { CreditCard, Plus, MoreHorizontal, Shield, Smartphone, Building2, Wallet, Star, Trash2, Pencil, Eye, MapPin, CheckCircle2, XCircle, Clock, AlertTriangle, ArrowRight, Zap, TrendingUp, Activity, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type PaymentStatus = 'active' | 'inactive' | 'suspended' | 'destroyed';

interface PaymentMethod {
  id: number;
  type: string;
  provider: string;
  displayName: string;
  identifier: string;
  detail: string;
  isDefault: boolean;
  status: PaymentStatus;
  icon: any;
  color: string;
  address: any;
}

export function PaymentMethods() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const { toast } = useToast();

  // Adresses existantes
  const existingAddresses = [
    {
      id: 1,
      name: "Domicile",
      street: "Avenue Royale Abdiran O",
      city: "Paris",
      country: "France"
    },
    {
      id: 2,
      name: "Bureau",
      street: "15 Rue de la Tech",
      city: "Lyon",
      country: "France"
    }
  ];

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: 1,
      type: "card",
      provider: "Visa",
      displayName: "Carte principale",
      identifier: "•••• 4242",
      detail: "Expire 12/27",
      isDefault: true,
      status: 'active',
      icon: CreditCard,
      color: "bg-gradient-to-r from-blue-600 to-blue-700",
      address: existingAddresses[0]
    },
    {
      id: 2,
      type: "card",
      provider: "Mastercard",
      displayName: "Carte bureau",
      identifier: "•••• 5555",
      detail: "Expire 08/26",
      isDefault: false,
      status: 'active',
      icon: CreditCard,
      color: "bg-gradient-to-r from-red-500 to-red-600",
      address: existingAddresses[1]
    },
    {
      id: 3,
      type: "mobile",
      provider: "Orange Money",
      displayName: "Mobile personnel",
      identifier: "+33 6 •• •• •• 89",
      detail: "Vérifié",
      isDefault: false,
      status: 'suspended',
      icon: Smartphone,
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
      address: null
    },
    {
      id: 4,
      type: "bank",
      provider: "BNP Paribas",
      displayName: "Compte courant BNP",
      identifier: "FR76 •••• •••• •••• 1234",
      detail: "Compte courant",
      isDefault: false,
      status: 'inactive',
      icon: Building2,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      address: existingAddresses[0]
    }
  ]);

  const paymentTypes = [
    {
      type: "card",
      title: "Carte",
      description: "Visa, Mastercard",
      icon: CreditCard,
      color: "from-blue-500 to-blue-600"
    },
    {
      type: "mobile",
      title: "Mobile",
      description: "Orange, MTN",
      icon: Smartphone,
      color: "from-orange-500 to-orange-600"
    },
    {
      type: "bank",
      title: "Banque",
      description: "Virement SEPA",
      icon: Building2,
      color: "from-green-500 to-green-600"
    },
    {
      type: "wallet",
      title: "Wallet",
      description: "PayPal, Apple Pay",
      icon: Wallet,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const getStatusBadge = (status: PaymentStatus) => {
    switch (status) {
      case 'active':
        return (
          <Badge className="bg-green-50 text-green-700 hover:bg-green-50 px-2 py-1 rounded-md text-xs border-0">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Actif
          </Badge>
        );
      case 'inactive':
        return (
          <Badge className="bg-gray-50 text-gray-700 hover:bg-gray-50 px-2 py-1 rounded-md text-xs border-0">
            <XCircle className="w-3 h-3 mr-1" />
            Inactif
          </Badge>
        );
      case 'suspended':
        return (
          <Badge className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 px-2 py-1 rounded-md text-xs border-0">
            <Clock className="w-3 h-3 mr-1" />
            Suspendu
          </Badge>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Méthode ajoutée",
      description: "Votre nouvelle méthode de paiement a été ajoutée avec succès.",
    });
    setIsDialogOpen(false);
    setSelectedType("");
    setSelectedAddress("");
  };

  const handleSetDefault = (methodId: number) => {
    setPaymentMethods(prev => prev.map(method => ({
      ...method,
      isDefault: method.id === methodId
    })));
    toast({
      title: "Méthode par défaut",
      description: "Cette méthode a été définie comme principale.",
    });
  };

  const handleEdit = (methodId: number) => {
    toast({
      title: "Modifier",
      description: "Fonctionnalité de modification à venir.",
    });
  };

  const handleDelete = (methodId: number) => {
    toast({
      title: "Supprimer",
      description: "Méthode supprimée avec succès.",
      variant: "destructive",
    });
  };

  const handleViewAddress = (address: any) => {
    if (address) {
      toast({
        title: "Adresse associée",
        description: `${address.name}: ${address.street}, ${address.city}, ${address.country}`,
      });
    } else {
      toast({
        title: "Aucune adresse",
        description: "Aucune adresse associée à cette méthode.",
      });
    }
  };

  const renderFormFields = () => {
    switch (selectedType) {
      case "card":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-gray-700">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: Carte principale" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">Numéro de carte</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="h-10" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="expiry" className="text-sm font-medium text-gray-700">Expiration</Label>
                <Input id="expiry" placeholder="MM/AA" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv" className="text-sm font-medium text-gray-700">CVV</Label>
                <Input id="cvv" placeholder="123" className="h-10" />
              </div>
            </div>
          </>
        );
      case "mobile":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-gray-700">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: Mobile personnel" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider" className="text-sm font-medium text-gray-700">Opérateur</Label>
              <Select>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Choisir un opérateur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="orange">Orange Money</SelectItem>
                  <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                  <SelectItem value="moov">Moov Money</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">Numéro</Label>
              <Input id="phoneNumber" placeholder="+33 6 12 34 56 78" className="h-10" />
            </div>
          </>
        );
      case "bank":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-gray-700">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: Compte courant" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankName" className="text-sm font-medium text-gray-700">Banque</Label>
              <Input id="bankName" placeholder="BNP Paribas" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iban" className="text-sm font-medium text-gray-700">IBAN</Label>
              <Input id="iban" placeholder="FR76 1234 5678 9012 3456 7890 123" className="h-10" />
            </div>
          </>
        );
      case "wallet":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-gray-700">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: PayPal principal" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="walletType" className="text-sm font-medium text-gray-700">Type</Label>
              <Select>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Choisir un wallet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="applepay">Apple Pay</SelectItem>
                  <SelectItem value="googlepay">Google Pay</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="walletEmail" className="text-sm font-medium text-gray-700">Email</Label>
              <Input id="walletEmail" placeholder="email@example.com" className="h-10" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const totalMethods = paymentMethods.length;
  const activeMethods = paymentMethods.filter(method => method.status === 'active').length;

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        
        {/* Header épuré */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-1">
            Paiements
          </h1>
          <p className="text-gray-600">
            Gérez vos moyens de paiement
          </p>
        </div>

        {/* Stats minimalistes */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-semibold text-gray-900">{activeMethods}</div>
                  <div className="text-sm text-gray-500">Méthodes actives</div>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-semibold text-gray-900">{totalMethods}</div>
                  <div className="text-sm text-gray-500">Total configurées</div>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des méthodes simplifiée */}
        <div className="space-y-2 mb-8">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <Card key={method.id} className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-200 group">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{method.displayName}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{method.provider}</span>
                          <span>•</span>
                          <span className="font-mono">{method.identifier}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {getStatusBadge(method.status)}
                      {method.isDefault && (
                        <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50 px-2 py-1 rounded-md text-xs border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Principal
                        </Badge>
                      )}
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <MoreHorizontal className="w-4 h-4 text-gray-400" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40 bg-white border-0 shadow-lg">
                          <DropdownMenuItem onClick={() => handleEdit(method.id)} className="text-sm">
                            <Pencil className="w-4 h-4 mr-2" />
                            Modifier
                          </DropdownMenuItem>
                          {!method.isDefault && method.status === 'active' && (
                            <DropdownMenuItem onClick={() => handleSetDefault(method.id)} className="text-sm">
                              <Star className="w-4 h-4 mr-2" />
                              Par défaut
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleDelete(method.id)} className="text-sm text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA moderne et épuré */}
        <Card className="border-0 bg-white shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="flex">
              {/* Contenu principal */}
              <div className="flex-1 p-6">
                <div className="max-w-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ajouter une méthode
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Connectez votre carte, wallet ou compte en 2 minutes.
                  </p>

                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2 shadow-sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Commencer
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent className="sm:max-w-md rounded-xl border-0 shadow-xl">
                      <DialogHeader>
                        <DialogTitle className="text-lg font-semibold text-gray-900">Nouvelle méthode</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="paymentType" className="text-sm font-medium text-gray-700">Type</Label>
                          <Select value={selectedType} onValueChange={setSelectedType}>
                            <SelectTrigger className="h-10">
                              <SelectValue placeholder="Choisir un type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="card">Carte bancaire</SelectItem>
                              <SelectItem value="mobile">Mobile Money</SelectItem>
                              <SelectItem value="bank">Compte bancaire</SelectItem>
                              <SelectItem value="wallet">Wallet digital</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        {renderFormFields()}
                        
                        {selectedType && (
                          <div className="flex gap-3 pt-4">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setIsDialogOpen(false)}
                              className="flex-1 h-10"
                            >
                              Annuler
                            </Button>
                            <Button type="submit" className="flex-1 bg-gray-900 text-white hover:bg-gray-800 h-10">
                              Ajouter
                            </Button>
                          </div>
                        )}
                      </form>
                    </DialogContent>
                  </Dialog>

                  {/* Indicateurs de confiance épurés */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Shield className="w-3 h-3 text-green-500" />
                      <span>Sécurisé</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      <span>Conforme</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section types - simplifiée */}
              <div className="w-64 bg-gray-50 p-6">
                <h4 className="font-medium text-gray-900 mb-4 text-sm">Types supportés</h4>
                
                <div className="space-y-2">
                  {paymentTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <div 
                        key={type.type} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/60 hover:bg-white transition-colors cursor-pointer"
                        onClick={() => {
                          setSelectedType(type.type);
                          setIsDialogOpen(true);
                        }}
                      >
                        <div className={`w-8 h-8 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{type.title}</div>
                          <div className="text-xs text-gray-500">{type.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
