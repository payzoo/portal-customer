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
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
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
      color: "bg-gradient-to-br from-red-500 to-red-600"
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
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
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
      color: "bg-gradient-to-br from-green-500 to-green-600"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header - Style unifié */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900 tracking-tight">
                Méthodes de paiement
              </h1>
              <p className="text-gray-500 text-base mt-2 font-light">
                Gérez vos moyens de paiement en toute sécurité
              </p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-2xl px-8 py-3 font-medium shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <Plus className="w-4 h-4 mr-2" />
                  Ajouter
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto rounded-3xl">
                <DialogHeader>
                  <DialogTitle className="text-xl font-light">Ajouter une méthode de paiement</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="paymentType" className="text-sm font-medium text-gray-700">Type de paiement</Label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger className="rounded-2xl border-gray-200">
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
                    <div className="flex gap-3 pt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                        className="flex-1 rounded-2xl border-gray-200 hover:bg-gray-50"
                      >
                        Annuler
                      </Button>
                      <Button type="submit" className="flex-1 bg-gray-900 text-white hover:bg-gray-800 rounded-2xl">
                        Ajouter
                      </Button>
                    </div>
                  )}
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats - Style moderne */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:border-gray-200/80 transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">4</div>
            <div className="text-sm text-gray-500 font-light">Méthodes actives</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:border-gray-200/80 transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">100%</div>
            <div className="text-sm text-gray-500 font-light">Sécurisé</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 hover:border-gray-200/80 transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Wallet className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">1</div>
            <div className="text-sm text-gray-500 font-light">Méthode principale</div>
          </div>
        </div>

        {/* Liste des méthodes - Style harmonisé */}
        <div className="space-y-4 mb-16">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <Card key={method.id} className="border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 ${method.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-medium text-gray-900 text-xl">{method.provider}</h3>
                          <span className="text-gray-500 font-mono text-base">{method.identifier}</span>
                          {method.isDefault && (
                            <Badge className="bg-green-50 text-green-600 hover:bg-green-50 px-4 py-2 rounded-2xl text-sm border-0 font-light">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                              Principal
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 font-light">{method.name} • {method.detail}</p>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="w-12 h-12 p-0 rounded-2xl hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Section d'ajout - Style modernisé */}
        <div className="space-y-8 mb-16">
          <h2 className="text-xl font-semibold text-gray-900">Ajouter une nouvelle méthode</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.type} className="border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl transition-all duration-300 rounded-3xl group cursor-pointer hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center group-hover:bg-gray-100 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-lg mb-2">{type.title}</h3>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Notice de sécurité - Style épuré */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-blue-100/50">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 text-lg mb-2">Sécurité & Confidentialité</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Toutes vos informations de paiement sont cryptées et sécurisées selon les standards PCI DSS. 
                Nous ne stockons jamais vos données bancaires complètes sur nos serveurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
