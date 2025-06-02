import { CreditCard, Plus, MoreHorizontal, Shield, Smartphone, Building2, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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

  const paymentMethods = [
    {
      id: 1,
      type: "card",
      provider: "Visa",
      name: "Housseine Dao",
      identifier: "•••• 4242",
      detail: "Expire 12/27",
      isDefault: true,
      icon: CreditCard,
      color: "bg-gray-900"
    },
    {
      id: 2,
      type: "card",
      provider: "Mastercard",
      name: "Housseine Dao",
      identifier: "•••• 5555",
      detail: "Expire 08/26",
      isDefault: false,
      icon: CreditCard,
      color: "bg-gray-700"
    },
    {
      id: 3,
      type: "mobile",
      provider: "Orange Money",
      name: "Housseine Dao",
      identifier: "+33 6 •• •• •• 89",
      detail: "Vérifié",
      isDefault: false,
      icon: Smartphone,
      color: "bg-gray-600"
    },
    {
      id: 4,
      type: "bank",
      provider: "BNP Paribas",
      name: "Housseine Dao",
      identifier: "FR76 •••• •••• •••• 1234",
      detail: "Compte courant",
      isDefault: false,
      icon: Building2,
      color: "bg-gray-500"
    }
  ];

  const paymentTypes = [
    {
      type: "card",
      title: "Carte bancaire",
      description: "Visa, Mastercard, American Express",
      icon: CreditCard
    },
    {
      type: "mobile",
      title: "Mobile Money",
      description: "Orange Money, MTN, Moov",
      icon: Smartphone
    },
    {
      type: "bank",
      title: "Compte bancaire",
      description: "Virement SEPA, RIB",
      icon: Building2
    },
    {
      type: "wallet",
      title: "Wallet digital",
      description: "PayPal, Apple Pay, Google Pay",
      icon: Wallet
    }
  ];

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

  const renderFormFields = () => {
    switch (selectedType) {
      case "card":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Numéro de carte</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Date d'expiration</Label>
                <Input id="expiry" placeholder="MM/AA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardName">Nom sur la carte</Label>
              <Input id="cardName" placeholder="Nom complet" />
            </div>
            
            {/* Section adresse de facturation */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900">Adresse de facturation</h4>
              <div className="space-y-2">
                <Label htmlFor="billingAddress">Sélectionner une adresse</Label>
                <Select value={selectedAddress} onValueChange={setSelectedAddress}>
                  <SelectTrigger>
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
                    <Label htmlFor="addressName">Nom de l'adresse</Label>
                    <Input id="addressName" placeholder="Ex: Domicile, Bureau..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="street">Adresse</Label>
                    <Input id="street" placeholder="Numéro et nom de rue" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" placeholder="Ville" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Code postal</Label>
                      <Input id="postalCode" placeholder="75001" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Pays</Label>
                    <Select>
                      <SelectTrigger>
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
              <Label htmlFor="provider">Opérateur</Label>
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
              <Label htmlFor="phoneNumber">Numéro de téléphone</Label>
              <Input id="phoneNumber" placeholder="+33 6 12 34 56 78" />
            </div>
          </>
        );
      case "bank":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="bankName">Nom de la banque</Label>
              <Input id="bankName" placeholder="BNP Paribas" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iban">IBAN</Label>
              <Input id="iban" placeholder="FR76 1234 5678 9012 3456 7890 123" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountHolder">Titulaire du compte</Label>
              <Input id="accountHolder" placeholder="Nom complet" />
            </div>
          </>
        );
      case "wallet":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="walletType">Type de wallet</Label>
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
              <Label htmlFor="walletEmail">Email associé</Label>
              <Input id="walletEmail" placeholder="email@example.com" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      
      {/* Header minimaliste */}
      <div className="mb-12">
        <h1 className="text-3xl font-light text-gray-900 mb-2">
          Paiements
        </h1>
        <p className="text-gray-500 font-light">
          Gérez vos moyens de paiement
        </p>
      </div>

      {/* Stats épurées */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <div className="text-2xl font-light text-gray-900 mb-1">4</div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">Méthodes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-light text-green-600 mb-1">100%</div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">Sécurisé</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-light text-gray-600 mb-1">1</div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">Principal</div>
        </div>
      </div>

      {/* Liste des méthodes ultra-épurée */}
      <div className="space-y-3 mb-12">
        {paymentMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <Card key={method.id} className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-1">
                        <h3 className="font-medium text-gray-900">{method.provider}</h3>
                        <span className="text-gray-400 font-mono text-sm">{method.identifier}</span>
                        {method.isDefault && (
                          <Badge className="bg-green-50 text-green-700 hover:bg-green-50 px-2 py-1 text-xs border-0">
                            Principal
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-0.5">{method.name}</p>
                      <p className="text-gray-400 text-xs">{method.detail}</p>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* CTA principal ultra-simplifié */}
      <Card className="border border-dashed border-gray-200 bg-transparent hover:border-gray-300 hover:bg-gray-50/30 transition-all duration-300 group cursor-pointer">
        <CardContent className="p-12 text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-all duration-300">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <h3 className="font-light text-gray-900 text-lg mb-2">Ajouter une méthode</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto font-light">
            Carte, Mobile Money, compte bancaire ou wallet
          </p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-6 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300">
                <Plus className="w-4 h-4 mr-2" />
                Ajouter
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border-0 shadow-xl">
              <DialogHeader className="pb-4">
                <DialogTitle className="text-xl font-light text-gray-900">Nouvelle méthode</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentType" className="text-gray-700 font-medium">Type de paiement</Label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="rounded-lg border-gray-200 h-10">
                      <SelectValue placeholder="Choisir un type" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border-0 shadow-lg">
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
                      className="flex-1 rounded-lg border-gray-200 h-10 font-medium"
                    >
                      Annuler
                    </Button>
                    <Button type="submit" className="flex-1 bg-gray-900 text-white hover:bg-gray-800 rounded-lg h-10 font-medium shadow-sm">
                      Ajouter
                    </Button>
                  </div>
                )}
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* Notice de sécurité minimaliste */}
      <div className="mt-12 bg-blue-50/30 rounded-2xl p-6 border border-blue-100/50">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1 text-sm">Sécurité garantie</h3>
            <p className="text-gray-600 font-light text-sm leading-relaxed">
              Données cryptées selon les standards PCI DSS et protocoles de sécurité avancés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
