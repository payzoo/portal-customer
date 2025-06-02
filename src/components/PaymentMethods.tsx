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
      color: "bg-blue-500"
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
      color: "bg-red-500"
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
      color: "bg-orange-500"
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
      color: "bg-green-500"
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
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-4xl mx-auto p-8">
        
        {/* Header ultra épuré */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light text-gray-900 mb-2">Paiements</h1>
              <p className="text-gray-500 text-sm">Gérez vos méthodes de paiement</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-normal shadow-sm transition-all duration-200 hover:shadow-md">
                  <Plus className="w-4 h-4 mr-2" />
                  Ajouter
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Ajouter une méthode de paiement</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="paymentType">Type de paiement</Label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger>
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
                        className="flex-1"
                      >
                        Annuler
                      </Button>
                      <Button type="submit" className="flex-1 bg-gray-900 text-white hover:bg-gray-800">
                        Ajouter
                      </Button>
                    </div>
                  )}
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats simplifiées */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900 mb-1">4</div>
            <div className="text-xs text-gray-500">méthodes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900 mb-1">1</div>
            <div className="text-xs text-gray-500">principale</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900 mb-1">100%</div>
            <div className="text-xs text-gray-500">sécurisé</div>
          </div>
        </div>

        {/* Liste des méthodes épurée */}
        <div className="space-y-4 mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Méthodes actives</h2>
          
          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/80 backdrop-blur-sm group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${method.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-gray-900 text-sm">{method.provider}</span>
                            <span className="text-gray-500 font-mono text-xs">{method.identifier}</span>
                            {method.isDefault && (
                              <Badge className="bg-green-50 text-green-700 hover:bg-green-50 px-2.5 py-1 rounded-full text-xs border-0 font-normal">
                                Principal
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-400">{method.name} • {method.detail}</p>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-full hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Section d'ajout minimaliste */}
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Ajouter une méthode</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.type} className="border border-gray-100 hover:border-gray-200 transition-all duration-200 bg-white/60 backdrop-blur-sm group cursor-pointer hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-medium text-gray-900 text-sm">{type.title}</h3>
                        <p className="text-xs text-gray-500">{type.description}</p>
                        <Button variant="ghost" className="text-xs text-gray-600 hover:text-gray-900 h-auto p-0 font-normal">
                          Configurer →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Notice de sécurité épurée */}
        <div className="mt-16 p-6 bg-gray-50/60 backdrop-blur-sm rounded-2xl border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-gray-900 text-sm">Sécurité & Confidentialité</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Toutes vos informations de paiement sont cryptées et sécurisées. 
            Nous ne stockons jamais vos données bancaires complètes sur nos serveurs.
          </p>
        </div>
      </div>
    </div>
  );
}
