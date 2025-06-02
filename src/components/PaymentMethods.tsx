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
      color: "bg-black"
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
      color: "bg-gray-800"
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
      color: "bg-gray-600"
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
      color: "bg-gray-400"
    }
  ]);

  const paymentTypes = [
    { type: "card", title: "Carte", icon: CreditCard },
    { type: "mobile", title: "Mobile", icon: Smartphone },
    { type: "bank", title: "Banque", icon: Building2 },
    { type: "wallet", title: "Wallet", icon: Wallet }
  ];

  const getStatusBadge = (status: PaymentStatus) => {
    switch (status) {
      case 'active':
        return (
          <div className="flex items-center gap-1.5 text-xs">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <span className="text-black font-medium">Actif</span>
          </div>
        );
      case 'inactive':
        return (
          <div className="flex items-center gap-1.5 text-xs">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            <span className="text-gray-500">Inactif</span>
          </div>
        );
      case 'suspended':
        return (
          <div className="flex items-center gap-1.5 text-xs">
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <span className="text-yellow-600">Suspendu</span>
          </div>
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
              <Label htmlFor="displayName" className="text-sm font-medium text-black">Nom</Label>
              <Input id="displayName" placeholder="Carte principale" className="border-gray-200 focus:border-black" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="text-sm font-medium text-black">Numéro</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="border-gray-200 focus:border-black" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="expiry" className="text-sm font-medium text-black">Expiration</Label>
                <Input id="expiry" placeholder="MM/AA" className="border-gray-200 focus:border-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv" className="text-sm font-medium text-black">CVV</Label>
                <Input id="cvv" placeholder="123" className="border-gray-200 focus:border-black" />
              </div>
            </div>
          </>
        );
      case "mobile":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-black">Nom</Label>
              <Input id="displayName" placeholder="Mobile personnel" className="border-gray-200 focus:border-black" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider" className="text-sm font-medium text-black">Opérateur</Label>
              <Select>
                <SelectTrigger className="border-gray-200 focus:border-black">
                  <SelectValue placeholder="Opérateur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="orange">Orange Money</SelectItem>
                  <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                  <SelectItem value="moov">Moov Money</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-black">Numéro</Label>
              <Input id="phoneNumber" placeholder="+33 6 12 34 56 78" className="border-gray-200 focus:border-black" />
            </div>
          </>
        );
      case "bank":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-black">Nom</Label>
              <Input id="displayName" placeholder="Compte courant" className="border-gray-200 focus:border-black" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankName" className="text-sm font-medium text-black">Banque</Label>
              <Input id="bankName" placeholder="BNP Paribas" className="border-gray-200 focus:border-black" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iban" className="text-sm font-medium text-black">IBAN</Label>
              <Input id="iban" placeholder="FR76 1234 5678 9012 3456 7890 123" className="border-gray-200 focus:border-black" />
            </div>
          </>
        );
      case "wallet":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-black">Nom</Label>
              <Input id="displayName" placeholder="PayPal principal" className="border-gray-200 focus:border-black" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="walletType" className="text-sm font-medium text-black">Type</Label>
              <Select>
                <SelectTrigger className="border-gray-200 focus:border-black">
                  <SelectValue placeholder="Wallet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="applepay">Apple Pay</SelectItem>
                  <SelectItem value="googlepay">Google Pay</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="walletEmail" className="text-sm font-medium text-black">Email</Label>
              <Input id="walletEmail" placeholder="email@example.com" className="border-gray-200 focus:border-black" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const activeMethods = paymentMethods.filter(method => method.status === 'active').length;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* En-tête ultra-minimaliste */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-black mb-3">
            Paiements
          </h1>
          <p className="text-gray-500 text-lg">
            Gérer vos moyens de paiement
          </p>
        </div>

        {/* Statistiques épurées */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-light text-black mb-1">{activeMethods}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Actives</div>
          </div>
          
          <div className="text-center border-l border-r border-gray-100">
            <div className="text-3xl font-light text-black mb-1">{paymentMethods.length}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Total</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-light text-black mb-1">100%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Sécurisé</div>
          </div>
        </div>

        {/* Liste des méthodes ultra-épurée */}
        <div className="space-y-1 mb-16">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <div key={method.id} className="group py-6 border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-10 h-10 ${method.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black">{method.displayName}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-gray-400">{method.provider} {method.identifier}</span>
                        {getStatusBadge(method.status)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {method.isDefault && (
                      <div className="flex items-center gap-1.5 text-xs">
                        <Star className="w-3 h-3 text-black fill-black" />
                        <span className="text-black font-medium">Principal</span>
                      </div>
                    )}
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white border border-gray-200">
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
              </div>
            );
          })}
        </div>

        {/* Section d'ajout minimaliste */}
        <div className="text-center py-16 border-t border-gray-100">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <Plus className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-light text-black mb-2">
            Ajouter une méthode
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Connectez votre moyen de paiement en quelques clics
          </p>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full">
                Nouvelle méthode
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-lg bg-white">
              <DialogHeader>
                <DialogTitle className="text-xl font-light text-black">Ajouter une méthode</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="paymentType" className="text-sm font-medium text-black">Type</Label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="border-gray-200 focus:border-black">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
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
                  <div className="flex gap-3 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                      className="flex-1 border-gray-200 hover:bg-gray-50"
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

          {/* Types supportés - Version minimaliste */}
          <div className="mt-12">
            <div className="grid grid-cols-4 gap-6 max-w-md mx-auto">
              {paymentTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <button 
                    key={type.type}
                    className="p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                    onClick={() => {
                      setSelectedType(type.type);
                      setIsDialogOpen(true);
                    }}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-black mx-auto mb-2 transition-colors" />
                    <p className="text-xs text-gray-400 group-hover:text-black transition-colors">{type.title}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
