
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, Plus, Building2, Shield, Check, Star, Smartphone, Wallet } from "lucide-react";

interface AddPaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (paymentMethod: any) => void;
}

const paymentTypes = [
  { 
    value: "credit", 
    label: "Carte de crédit", 
    icon: CreditCard, 
    color: "bg-blue-500",
    description: "Visa, Mastercard, American Express"
  },
  { 
    value: "debit", 
    label: "Carte de débit", 
    icon: CreditCard, 
    color: "bg-green-500",
    description: "Carte bancaire traditionnelle"
  },
  { 
    value: "bank", 
    label: "Compte bancaire", 
    icon: Building2, 
    color: "bg-purple-500",
    description: "Virement SEPA"
  },
  { 
    value: "mobile", 
    label: "Mobile Money", 
    icon: Smartphone, 
    color: "bg-orange-500",
    description: "Orange Money, MTN, etc."
  },
  { 
    value: "wallet", 
    label: "Portefeuille numérique", 
    icon: Wallet, 
    color: "bg-indigo-500",
    description: "PayPal, Apple Pay, Google Pay"
  }
];

const cardProviders = [
  "Visa",
  "Mastercard", 
  "American Express",
  "Crédit Agricole",
  "BNP Paribas",
  "Société Générale",
  "LCL",
  "Banque Postale",
  "CIC",
  "Crédit Mutuel"
];

const mobileMoneyProviders = [
  "Orange Money",
  "MTN Mobile Money",
  "Moov Money",
  "Wave",
  "Free Money",
  "Airtel Money",
  "Vodafone Cash",
  "Tigo Cash"
];

const walletProviders = [
  "PayPal",
  "Apple Pay",
  "Google Pay",
  "Samsung Pay",
  "Revolut",
  "N26",
  "Wise",
  "Skrill",
  "Neteller",
  "Paysafecard"
];

const getProvidersForType = (type: string) => {
  switch (type) {
    case "mobile":
      return mobileMoneyProviders;
    case "wallet":
      return walletProviders;
    default:
      return cardProviders;
  }
};

export function AddPaymentMethodModal({ isOpen, onClose, onAdd }: AddPaymentMethodModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    provider: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    type: "credit",
    isDefault: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.provider.trim()) newErrors.provider = "Le fournisseur est requis";
    
    if (formData.type === "credit" || formData.type === "debit") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Le numéro de carte est requis";
      if (formData.cardNumber.replace(/\s/g, '').length < 16) newErrors.cardNumber = "Numéro de carte invalide";
      if (!formData.expiryMonth) newErrors.expiryMonth = "Le mois d'expiration est requis";
      if (!formData.expiryYear) newErrors.expiryYear = "L'année d'expiration est requise";
      if (!formData.cvv.trim()) newErrors.cvv = "Le CVV est requis";
      if (formData.cvv.length < 3) newErrors.cvv = "CVV invalide";
    } else if (formData.type === "bank") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Le numéro IBAN est requis";
    } else if (formData.type === "mobile") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Le numéro de téléphone est requis";
      if (formData.cardNumber.replace(/\s/g, '').length < 8) newErrors.cardNumber = "Numéro de téléphone invalide";
    } else if (formData.type === "wallet") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "L'identifiant du portefeuille est requis";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const getTypeLabel = (type: string) => {
      switch (type) {
        case "mobile": return "Mobile Money";
        case "wallet": return "Portefeuille numérique";
        case "bank": return "Compte bancaire";
        default: return "Carte de crédit";
      }
    };
    
    const newPaymentMethod = {
      id: Date.now(),
      type: getTypeLabel(formData.type),
      provider: formData.provider,
      last4: formData.cardNumber.replace(/\s/g, '').slice(-4),
      name: formData.name,
      expiry: (formData.type === "credit" || formData.type === "debit") ? `${formData.expiryMonth}/${formData.expiryYear}` : null,
      isDefault: formData.isDefault,
      status: "active",
      color: paymentTypes.find(type => type.value === formData.type)?.color || "bg-gray-500",
      icon: paymentTypes.find(type => type.value === formData.type)?.icon || CreditCard,
      description: "Nouvellement ajouté"
    };
    
    onAdd(newPaymentMethod);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      name: "",
      provider: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      type: "credit",
      isDefault: false
    });
    setErrors({});
    onClose();
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ 
      ...prev, 
      [field]: value,
      ...(field === 'type' ? { provider: "" } : {}) // Reset provider when type changes
    }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatPhoneNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9+]/gi, '');
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData.type === "mobile") {
      const formatted = formatPhoneNumber(e.target.value);
      updateFormData('cardNumber', formatted);
    } else if (formData.type === "credit" || formData.type === "debit") {
      const formatted = formatCardNumber(e.target.value);
      updateFormData('cardNumber', formatted);
    } else {
      updateFormData('cardNumber', e.target.value);
    }
  };

  const getInputPlaceholder = (type: string) => {
    switch (type) {
      case "mobile": return "+33 6 12 34 56 78";
      case "wallet": return "utilisateur@email.com";
      case "bank": return "FR76 1234 5678 9012 3456 7890 123";
      default: return "1234 5678 9012 3456";
    }
  };

  const getInputLabel = (type: string) => {
    switch (type) {
      case "mobile": return "Numéro de téléphone *";
      case "wallet": return "Identifiant du portefeuille *";
      case "bank": return "Numéro de compte (IBAN) *";
      default: return "Numéro de carte *";
    }
  };

  const selectedType = paymentTypes.find(type => type.value === formData.type);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const availableProviders = getProvidersForType(formData.type);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl bg-white/95 backdrop-blur-sm border border-border/50 rounded-2xl shadow-2xl">
        <DialogHeader className="space-y-4 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                Nouveau moyen de paiement
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                Ajoutez une carte, un compte ou un portefeuille
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Type de paiement */}
          <div>
            <label className="text-sm font-medium text-foreground mb-3 block">
              Type de moyen de paiement
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {paymentTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => updateFormData('type', type.value)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                    formData.type === type.value
                      ? 'border-black bg-black/5'
                      : 'border-border/30 hover:border-border/50'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-8 h-8 ${type.color} rounded-lg flex items-center justify-center`}>
                      <type.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-center">{type.label}</span>
                    <span className="text-xs text-muted-foreground text-center">{type.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Informations de base */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Nom du moyen de paiement *
              </label>
              <Input
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Ex: Carte principale, Orange Money..."
                className={`h-11 ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-border/30 focus:border-black'}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Fournisseur *
              </label>
              <Select value={formData.provider} onValueChange={(value) => updateFormData('provider', value)}>
                <SelectTrigger className={`h-11 ${errors.provider ? 'border-red-400 focus:border-red-400' : 'border-border/30 focus:border-black'}`}>
                  <SelectValue placeholder="Sélectionnez un fournisseur" />
                </SelectTrigger>
                <SelectContent>
                  {availableProviders.map((provider) => (
                    <SelectItem key={provider} value={provider}>
                      {provider}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.provider && <p className="text-red-500 text-xs mt-1">{errors.provider}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                {getInputLabel(formData.type)}
              </label>
              <Input
                value={formData.cardNumber}
                onChange={handleCardNumberChange}
                placeholder={getInputPlaceholder(formData.type)}
                maxLength={formData.type === "mobile" ? 20 : formData.type === "wallet" ? 50 : 27}
                className={`h-11 font-mono ${errors.cardNumber ? 'border-red-400 focus:border-red-400' : 'border-border/30 focus:border-black'}`}
              />
              {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
            </div>

            {(formData.type === "credit" || formData.type === "debit") && (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mois *
                  </label>
                  <Select value={formData.expiryMonth} onValueChange={(value) => updateFormData('expiryMonth', value)}>
                    <SelectTrigger className={`h-11 ${errors.expiryMonth ? 'border-red-400 focus:border-red-400' : 'border-border/30 focus:border-black'}`}>
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month} value={month}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.expiryMonth && <p className="text-red-500 text-xs mt-1">{errors.expiryMonth}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Année *
                  </label>
                  <Select value={formData.expiryYear} onValueChange={(value) => updateFormData('expiryYear', value)}>
                    <SelectTrigger className={`h-11 ${errors.expiryYear ? 'border-red-400 focus:border-red-400' : 'border-border/30 focus:border-black'}`}>
                      <SelectValue placeholder="AAAA" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.expiryYear && <p className="text-red-500 text-xs mt-1">{errors.expiryYear}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    CVV *
                  </label>
                  <Input
                    value={formData.cvv}
                    onChange={(e) => updateFormData('cvv', e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="123"
                    maxLength={4}
                    className={`h-11 font-mono ${errors.cvv ? 'border-red-400 focus:border-red-400' : 'border-border/30 focus:border-black'}`}
                  />
                  {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                </div>
              </div>
            )}

            {/* Option par défaut */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">Définir par défaut</span>
              </div>
              <Checkbox
                checked={formData.isDefault}
                onCheckedChange={(checked) => updateFormData('isDefault', checked as boolean)}
              />
            </div>
          </div>

          {/* Aperçu */}
          {formData.name && formData.provider && (
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-3">Aperçu</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${selectedType?.color} rounded-xl flex items-center justify-center`}>
                  {selectedType && <selectedType.icon className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{formData.name}</span>
                    {formData.isDefault && (
                      <Badge variant="secondary" className="text-xs">
                        Par défaut
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {formData.provider}
                    {formData.cardNumber && ` • •••• ${formData.cardNumber.replace(/\s/g, '').slice(-4)}`}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sécurité */}
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
            <Shield className="w-5 h-5 text-blue-600" />
            <div className="text-sm">
              <p className="font-medium text-blue-900">Sécurité garantie</p>
              <p className="text-blue-700">Vos données sont chiffrées et sécurisées</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/20">
            <Button
              type="button"
              variant="ghost"
              onClick={handleClose}
              className="h-11 px-6 hover:bg-gray-100"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="h-11 px-6 bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
