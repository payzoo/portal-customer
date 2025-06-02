
import { CreditCard, Plus, MoreHorizontal, Shield, Smartphone, Building2, Wallet, Star, Trash2, Pencil, CheckCircle2 } from "lucide-react";
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

type PaymentStatus = 'active' | 'inactive' | 'suspended';

interface PaymentMethod {
  id: number;
  type: string;
  provider: string;
  displayName: string;
  identifier: string;
  isDefault: boolean;
  status: PaymentStatus;
  icon: any;
  color: string;
}

export function PaymentMethods() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const { toast } = useToast();

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: 1,
      type: "card",
      provider: "Visa",
      displayName: "Carte principale",
      identifier: "•••• 4242",
      isDefault: true,
      status: 'active',
      icon: CreditCard,
      color: "bg-blue-500"
    },
    {
      id: 2,
      type: "card",
      provider: "Mastercard",
      displayName: "Carte bureau",
      identifier: "•••• 5555",
      isDefault: false,
      status: 'active',
      icon: CreditCard,
      color: "bg-red-500"
    },
    {
      id: 3,
      type: "mobile",
      provider: "Orange Money",
      displayName: "Mobile personnel",
      identifier: "+33 6 •• •• •• 89",
      isDefault: false,
      status: 'suspended',
      icon: Smartphone,
      color: "bg-orange-500"
    },
    {
      id: 4,
      type: "bank",
      provider: "BNP Paribas",
      displayName: "Compte courant",
      identifier: "FR76 •••• •••• •••• 1234",
      isDefault: false,
      status: 'inactive',
      icon: Building2,
      color: "bg-green-500"
    }
  ]);

  const paymentTypes = [
    { type: "card", title: "Carte bancaire", icon: CreditCard },
    { type: "mobile", title: "Mobile Money", icon: Smartphone },
    { type: "bank", title: "Compte bancaire", icon: Building2 },
    { type: "wallet", title: "Wallet digital", icon: Wallet }
  ];

  const getStatusBadge = (status: PaymentStatus) => {
    switch (status) {
      case 'active':
        return (
          <Badge className="bg-green-50 text-green-700 border-0 text-xs">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
            Actif
          </Badge>
        );
      case 'inactive':
        return (
          <Badge className="bg-gray-50 text-gray-600 border-0 text-xs">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-1.5"></div>
            Inactif
          </Badge>
        );
      case 'suspended':
        return (
          <Badge className="bg-yellow-50 text-yellow-700 border-0 text-xs">
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1.5"></div>
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
      description: "Votre nouvelle méthode de paiement a été ajoutée.",
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
              <Label htmlFor="displayName" className="text-sm font-medium">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: Carte principale" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="text-sm font-medium">Numéro de carte</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="expiry" className="text-sm font-medium">Expiration</Label>
                <Input id="expiry" placeholder="MM/AA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv" className="text-sm font-medium">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
          </>
        );
      case "mobile":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: Mobile personnel" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider" className="text-sm font-medium">Opérateur</Label>
              <Select>
                <SelectTrigger>
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
              <Label htmlFor="phoneNumber" className="text-sm font-medium">Numéro</Label>
              <Input id="phoneNumber" placeholder="+33 6 12 34 56 78" />
            </div>
          </>
        );
      case "bank":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: Compte courant" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankName" className="text-sm font-medium">Banque</Label>
              <Input id="bankName" placeholder="BNP Paribas" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iban" className="text-sm font-medium">IBAN</Label>
              <Input id="iban" placeholder="FR76 1234 5678 9012 3456 7890 123" />
            </div>
          </>
        );
      case "wallet":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium">Nom d'affichage</Label>
              <Input id="displayName" placeholder="Ex: PayPal principal" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="walletType" className="text-sm font-medium">Type</Label>
              <Select>
                <SelectTrigger>
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
              <Label htmlFor="walletEmail" className="text-sm font-medium">Email</Label>
              <Input id="walletEmail" placeholder="email@example.com" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const activeMethods = paymentMethods.filter(method => method.status === 'active').length;

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Header épuré */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">
            Méthodes de paiement
          </h1>
          <p className="text-gray-600">
            Gérez vos moyens de paiement
          </p>
        </div>

        {/* Statistiques simplifiées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">{activeMethods}</div>
                  <div className="text-sm text-gray-500">Actives</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">{paymentMethods.length}</div>
                  <div className="text-sm text-gray-500">Total</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">100%</div>
                  <div className="text-sm text-gray-500">Sécurisé</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des méthodes simplifiée */}
        <div className="space-y-3 mb-8">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <Card key={method.id} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{method.displayName}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{method.provider} {method.identifier}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {getStatusBadge(method.status)}
                      {method.isDefault && (
                        <Badge className="bg-blue-50 text-blue-700 border-0 text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Principal
                        </Badge>
                      )}
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEdit(method.id)}>
                            <Pencil className="w-4 h-4 mr-2" />
                            Modifier
                          </DropdownMenuItem>
                          {!method.isDefault && method.status === 'active' && (
                            <DropdownMenuItem onClick={() => handleSetDefault(method.id)}>
                              <Star className="w-4 h-4 mr-2" />
                              Par défaut
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleDelete(method.id)} className="text-red-600">
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

        {/* Section d'ajout simplifiée */}
        <Card className="border-0 bg-white shadow-sm">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Ajouter une méthode
            </h3>
            <p className="text-gray-600 mb-6">
              Connectez votre carte, compte ou wallet en quelques clics
            </p>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-black text-white hover:bg-gray-800">
                  <Plus className="w-4 h-4 mr-2" />
                  Nouvelle méthode
                </Button>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Ajouter une méthode de paiement</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="paymentType" className="text-sm font-medium">Type de paiement</Label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un type" />
                      </SelectTrigger>
                      <SelectContent>
                        {paymentTypes.map((type) => {
                          const IconComponent = type.icon;
                          return (
                            <SelectItem key={type.type} value={type.type}>
                              <div className="flex items-center gap-2">
                                <IconComponent className="w-4 h-4" />
                                <span>{type.title}</span>
                              </div>
                            </SelectItem>
                          );
                        })}
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
                        className="flex-1"
                      >
                        Annuler
                      </Button>
                      <Button type="submit" className="flex-1 bg-black text-white hover:bg-gray-800">
                        Ajouter
                      </Button>
                    </div>
                  )}
                </form>
              </DialogContent>
            </Dialog>

            {/* Types supportés - Version simplifiée */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {paymentTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <div 
                      key={type.type}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                      onClick={() => {
                        setSelectedType(type.type);
                        setIsDialogOpen(true);
                      }}
                    >
                      <IconComponent className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-700 text-center">{type.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
