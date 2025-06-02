import { CreditCard, Plus, MoreHorizontal, Shield, Smartphone, Building2, Wallet, Star, Trash2, Pencil, CheckCircle2, XCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
          <Badge className="bg-green-50 text-green-700 hover:bg-green-50 px-3 py-1 rounded-lg text-xs border-0">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
            Actif
          </Badge>
        );
      case 'inactive':
        return (
          <Badge className="bg-gray-50 text-gray-700 hover:bg-gray-50 px-3 py-1 rounded-lg text-xs border-0">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
            Inactif
          </Badge>
        );
      case 'suspended':
        return (
          <Badge className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 px-3 py-1 rounded-lg text-xs border-0">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
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
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Header minimaliste */}
        <div className="mb-10">
          <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
            Méthodes de paiement
          </h1>
          <p className="text-gray-600 text-lg font-light">
            Gérez vos moyens de paiement en toute sécurité
          </p>
        </div>

        {/* Métriques essentielles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {activeMethods}
                </div>
                <div className="text-sm text-gray-500">Actives</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {totalMethods}
                </div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-500">Sécurité</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  1
                </div>
                <div className="text-sm text-gray-500">Par défaut</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des méthodes épurée */}
        <div className="space-y-3 mb-12">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <Card key={method.id} className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg mb-1">{method.displayName}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>{method.provider}</span>
                          <span>•</span>
                          <span>{method.identifier}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="font-medium text-gray-900 text-lg mb-1">
                          {method.detail}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {getStatusBadge(method.status)}
                        {method.isDefault && (
                          <Badge className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs border-0">
                            <Star className="w-3 h-3 mr-1" />
                            Principal
                          </Badge>
                        )}
                        
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="w-8 h-8 p-0 rounded-lg"
                              >
                                <MoreHorizontal className="w-4 h-4 text-gray-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                              align="end" 
                              className="w-48 bg-white border-0 rounded-xl shadow-lg z-50"
                            >
                              <DropdownMenuItem 
                                onClick={() => handleEdit(method.id)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                              >
                                <Pencil className="w-4 h-4 text-gray-500" />
                                <span>Modifier</span>
                              </DropdownMenuItem>
                              {!method.isDefault && method.status === 'active' && (
                                <DropdownMenuItem 
                                  onClick={() => handleSetDefault(method.id)}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                                >
                                  <Star className="w-4 h-4 text-blue-500" />
                                  <span className="text-blue-600">Par défaut</span>
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                onClick={() => handleDelete(method.id)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-red-50 rounded-lg"
                              >
                                <Trash2 className="w-4 h-4 text-red-500" />
                                <span className="text-red-600">Supprimer</span>
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
          })}
        </div>

        {/* Ajouter une méthode - Version moderne */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Nouvelle méthode de paiement
            </h3>
            <p className="text-gray-600 text-lg font-light max-w-md mx-auto">
              Connectez facilement votre carte, wallet ou compte bancaire en quelques clics
            </p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full md:w-auto mx-auto block bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-12 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Plus className="w-5 h-5 mr-3" />
                Ajouter une méthode
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-lg bg-white border-0 rounded-3xl shadow-2xl">
              <DialogHeader className="pb-6">
                <DialogTitle className="text-2xl font-bold text-gray-900 text-center">Nouvelle méthode</DialogTitle>
                <p className="text-gray-600 text-center mt-2">Choisissez le type de paiement à ajouter</p>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="paymentType" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Type de paiement</Label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="h-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 bg-gray-50 hover:bg-white transition-colors">
                      <SelectValue placeholder="Sélectionner un type de paiement" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-0 rounded-2xl shadow-xl">
                      <SelectItem value="card" className="py-3 px-4 rounded-xl hover:bg-blue-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="font-medium">Carte bancaire</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="mobile" className="py-3 px-4 rounded-xl hover:bg-orange-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                            <Smartphone className="w-4 h-4 text-orange-600" />
                          </div>
                          <span className="font-medium">Mobile Money</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="bank" className="py-3 px-4 rounded-xl hover:bg-green-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <Building2 className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="font-medium">Compte bancaire</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="wallet" className="py-3 px-4 rounded-xl hover:bg-purple-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Wallet className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="font-medium">Wallet digital</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {renderFormFields()}
                
                {selectedType && (
                  <div className="flex gap-4 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                      className="flex-1 h-12 rounded-2xl border-2 border-gray-200 hover:bg-gray-50"
                    >
                      Annuler
                    </Button>
                    <Button type="submit" className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                      Ajouter
                    </Button>
                  </div>
                )}
              </form>
            </DialogContent>
          </Dialog>

          {/* Types supportés - Version améliorée */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Moyens de paiement supportés</h4>
              <p className="text-gray-600">Choisissez parmi nos différentes options sécurisées</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {paymentTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <div 
                    key={type.type}
                    className="group p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => {
                      setSelectedType(type.type);
                      setIsDialogOpen(true);
                    }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">{type.title}</h4>
                    <p className="text-sm text-gray-500 text-center">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
