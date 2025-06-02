import { CreditCard, Plus, MoreHorizontal, Shield, Smartphone, Building2, Wallet, Star, Trash2, Pencil, Eye, MapPin, CheckCircle2, XCircle, Clock, AlertTriangle, ArrowRight, Zap } from "lucide-react";
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
      title: "Carte bancaire",
      description: "Visa, Mastercard, American Express",
      icon: CreditCard,
      color: "from-blue-500 to-blue-600"
    },
    {
      type: "mobile",
      title: "Mobile Money",
      description: "Orange Money, MTN, Moov",
      icon: Smartphone,
      color: "from-orange-500 to-orange-600"
    },
    {
      type: "bank",
      title: "Compte bancaire",
      description: "Virement SEPA, RIB",
      icon: Building2,
      color: "from-green-500 to-green-600"
    },
    {
      type: "wallet",
      title: "Wallet digital",
      description: "PayPal, Apple Pay, Google Pay",
      icon: Wallet,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const getStatusBadge = (status: PaymentStatus) => {
    switch (status) {
      case 'active':
        return (
          <Badge className="bg-green-50 text-green-700 hover:bg-green-50 px-3 py-1 rounded-lg text-xs border-0 font-medium">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Active
          </Badge>
        );
      case 'inactive':
        return (
          <Badge className="bg-gray-50 text-gray-700 hover:bg-gray-50 px-3 py-1 rounded-lg text-xs border-0 font-medium">
            <XCircle className="w-3 h-3 mr-1" />
            Inactive
          </Badge>
        );
      case 'suspended':
        return (
          <Badge className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 px-3 py-1 rounded-lg text-xs border-0 font-medium">
            <Clock className="w-3 h-3 mr-1" />
            Suspendue
          </Badge>
        );
      case 'destroyed':
        return (
          <Badge className="bg-red-50 text-red-700 hover:bg-red-50 px-3 py-1 rounded-lg text-xs border-0 font-medium">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Détruite
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
              <Input id="displayName" placeholder="Ex: Carte principale, Carte bureau..." className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">Numéro de carte</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="h-11" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry" className="text-sm font-medium text-gray-700">Date d'expiration</Label>
                <Input id="expiry" placeholder="MM/AA" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv" className="text-sm font-medium text-gray-700">CVV</Label>
                <Input id="cvv" placeholder="123" className="h-11" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardName" className="text-sm font-medium text-gray-700">Nom sur la carte</Label>
              <Input id="cardName" placeholder="Nom complet" className="h-11" />
            </div>
            
            {/* Section adresse de facturation */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900">Adresse de facturation</h4>
              <div className="space-y-2">
                <Label htmlFor="billingAddress" className="text-sm font-medium text-gray-700">Sélectionner une adresse</Label>
                <Select value={selectedAddress} onValueChange={setSelectedAddress}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Choisir une adresse" />
                  </SelectTrigger>
                  <SelectContent>
                    {existingAddresses.map((address) => (
                      <SelectItem key={address.id} value={address.id.toString()}>
                        {address.name} - {address.street}, {address.city}
                      </SelectItem>
                    ))}
                    <SelectItem value="new">+ Nouvelle adresse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {selectedAddress === "new" && (
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="addressName" className="text-sm font-medium text-gray-700">Nom de l'adresse</Label>
                    <Input id="addressName" placeholder="Ex: Domicile, Bureau..." className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="street" className="text-sm font-medium text-gray-700">Adresse</Label>
                    <Input id="street" placeholder="Numéro et nom de rue" className="h-11" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-medium text-gray-700">Ville</Label>
                      <Input id="city" placeholder="Ville" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode" className="text-sm font-medium text-gray-700">Code postal</Label>
                      <Input id="postalCode" placeholder="75001" className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm font-medium text-gray-700">Pays</Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Sélectionner un pays" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="belgium">Belgique</SelectItem>
                        <SelectItem value="switzerland">Suisse</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          </>
        );
      case "mobile":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-gray-700">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: Mobile personnel, Mobile professionnel..." className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider" className="text-sm font-medium text-gray-700">Opérateur</Label>
              <Select>
                <SelectTrigger className="h-11">
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
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">Numéro de téléphone</Label>
              <Input id="phoneNumber" placeholder="+33 6 12 34 56 78" className="h-11" />
            </div>
          </>
        );
      case "bank":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-gray-700">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: Compte courant, Compte épargne..." className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankName" className="text-sm font-medium text-gray-700">Nom de la banque</Label>
              <Input id="bankName" placeholder="BNP Paribas" className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iban" className="text-sm font-medium text-gray-700">IBAN</Label>
              <Input id="iban" placeholder="FR76 1234 5678 9012 3456 7890 123" className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountHolder" className="text-sm font-medium text-gray-700">Titulaire du compte</Label>
              <Input id="accountHolder" placeholder="Nom complet" className="h-11" />
            </div>
          </>
        );
      case "wallet":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-gray-700">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: PayPal principal, Apple Pay..." className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="walletType" className="text-sm font-medium text-gray-700">Type de wallet</Label>
              <Select>
                <SelectTrigger className="h-11">
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
              <Label htmlFor="walletEmail" className="text-sm font-medium text-gray-700">Email associé</Label>
              <Input id="walletEmail" placeholder="email@example.com" className="h-11" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const defaultMethods = paymentMethods.filter(method => method.isDefault).length;
  const totalMethods = paymentMethods.length;
  const activeMethods = paymentMethods.filter(method => method.status === 'active').length;

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Header minimaliste */}
        <div className="mb-10">
          <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
            Paiements
          </h1>
          <p className="text-gray-600 text-lg font-light">
            Gérez vos moyens de paiement facilement
          </p>
        </div>

        {/* Métriques essentielles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {totalMethods}
                </div>
                <div className="text-sm text-gray-500">Méthodes</div>
              </div>
            </CardContent>
          </Card>

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
                <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {defaultMethods}
                </div>
                <div className="text-sm text-gray-500">Principale</div>
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
                      <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center shadow-sm`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-gray-900 text-lg mb-1">{method.displayName}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="min-w-fit">{method.provider}</span>
                          <span>•</span>
                          <span className="font-mono min-w-fit">{method.identifier}</span>
                          <span>•</span>
                          <span className="min-w-fit">{method.detail}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        {getStatusBadge(method.status)}
                        {method.isDefault && (
                          <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50 px-3 py-1 rounded-lg text-xs border-0 font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            Principal
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {!method.isDefault && method.status === 'active' && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 p-0 rounded-lg"
                            onClick={() => handleSetDefault(method.id)}
                          >
                            <Star className="w-4 h-4 text-gray-400" />
                          </Button>
                        )}
                        
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
                            className="w-48 bg-white border-0 rounded-xl shadow-lg"
                          >
                            <DropdownMenuItem 
                              onClick={() => handleEdit(method.id)}
                              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                            >
                              <Pencil className="w-4 h-4 text-gray-500" />
                              <span>Modifier</span>
                            </DropdownMenuItem>
                            {method.address && (
                              <DropdownMenuItem 
                                onClick={() => handleViewAddress(method.address)}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
                              >
                                <MapPin className="w-4 h-4 text-gray-500" />
                                <span>Voir l'adresse</span>
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
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA principal - Version startup moderne */}
        <div className="space-y-8">
          {/* Section principale */}
          <Card className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Contenu principal */}
                <div className="flex-1 p-8 lg:p-12">
                  <div className="max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Setup rapide</span>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Nouvelle méthode de paiement
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Connectez votre carte, wallet ou compte bancaire en moins de 2 minutes. 
                      Sécurisé et conforme aux standards européens.
                    </p>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                          <Plus className="w-4 h-4 mr-2 group-hover/btn:rotate-90 transition-transform duration-300" />
                          Commencer
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </DialogTrigger>
                      {/* Dialog content reste identique */}
                      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border-0 shadow-xl">
                        <DialogHeader className="pb-4">
                          <DialogTitle className="text-xl font-light text-gray-900">Nouvelle méthode</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="paymentType" className="text-sm font-medium text-gray-700">Type de paiement</Label>
                            <Select value={selectedType} onValueChange={setSelectedType}>
                              <SelectTrigger className="rounded-xl border-gray-200 h-11">
                                <SelectValue placeholder="Choisir un type" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl border-0 shadow-lg bg-white">
                                <SelectItem value="card" className="rounded-lg">Carte bancaire</SelectItem>
                                <SelectItem value="mobile" className="rounded-lg">Mobile Money</SelectItem>
                                <SelectItem value="bank" className="rounded-lg">Compte bancaire</SelectItem>
                                <SelectItem value="wallet" className="rounded-lg">Wallet digital</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          {renderFormFields()}
                          
                          {selectedType && (
                            <div className="flex gap-3 pt-6">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => setIsDialogOpen(false)}
                                className="flex-1 rounded-xl border-gray-200 h-11 font-light"
                              >
                                Annuler
                              </Button>
                              <Button type="submit" className="flex-1 bg-gray-900 text-white hover:bg-gray-800 rounded-xl h-11 font-light shadow-md">
                                Ajouter
                              </Button>
                            </div>
                          )}
                        </form>
                      </DialogContent>
                    </Dialog>

                    {/* Indicateurs de confiance */}
                    <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>Sécurisé SSL</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        <span>Conforme PCI DSS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section visuelle moderne */}
                <div className="lg:w-80 bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 mb-6">Types supportés</h4>
                    
                    {paymentTypes.map((type, index) => {
                      const IconComponent = type.icon;
                      return (
                        <div 
                          key={type.type} 
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white transition-all duration-300 group/item"
                          style={{ 
                            animationDelay: `${index * 100}ms`,
                            animation: 'fade-in 0.5s ease-out forwards'
                          }}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-gray-900 text-sm">{type.title}</div>
                            <div className="text-xs text-gray-500 truncate">{type.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stats discrètes */}
                  <div className="mt-8 pt-6 border-t border-gray-200/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">2min</div>
                      <div className="text-xs text-gray-500">Configuration moyenne</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section alternative rapide */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {paymentTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card 
                  key={type.type}
                  className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group/quick"
                  onClick={() => {
                    setSelectedType(type.type);
                    setIsDialogOpen(true);
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm group-hover/quick:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{type.title}</h4>
                    <p className="text-xs text-gray-500">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
