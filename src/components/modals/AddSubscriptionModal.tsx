
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Zap, Calendar, DollarSign, Building2, Palette } from "lucide-react";

interface AddSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (subscription: any) => void;
}

const categories = [
  "Développement",
  "IA",
  "Finance",
  "Design",
  "Divertissement",
  "Productivité",
  "Communication",
  "Marketing"
];

const colors = [
  { name: "Violet", value: "bg-gradient-to-br from-violet-500 to-purple-600" },
  { name: "Emeraude", value: "bg-gradient-to-br from-emerald-500 to-teal-600" },
  { name: "Bleu", value: "bg-gradient-to-br from-blue-500 to-indigo-600" },
  { name: "Rose", value: "bg-gradient-to-br from-rose-500 to-pink-600" },
  { name: "Rouge", value: "bg-gradient-to-br from-red-500 to-orange-600" },
  { name: "Ambre", value: "bg-gradient-to-br from-amber-500 to-yellow-600" },
  { name: "Gris", value: "bg-gradient-to-br from-gray-500 to-slate-600" },
  { name: "Vert", value: "bg-gradient-to-br from-green-500 to-emerald-600" }
];

export function AddSubscriptionModal({ isOpen, onClose, onAdd }: AddSubscriptionModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    plan: "",
    amount: "",
    currency: "€",
    billingCycle: "mensuel",
    category: "",
    description: "",
    nextBilling: "",
    color: colors[0].value,
    logo: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.amount.trim()) newErrors.amount = "Le montant est requis";
    if (!formData.category) newErrors.category = "La catégorie est requise";
    if (!formData.nextBilling) newErrors.nextBilling = "La date de facturation est requise";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const newSubscription = {
      id: Date.now(),
      ...formData,
      logo: formData.logo || formData.name.charAt(0).toUpperCase(),
      status: "active",
      yearlyAmount: parseFloat(formData.amount.replace(',', '')) * (formData.billingCycle === 'mensuel' ? 12 : 1),
      trend: "0%"
    };
    
    onAdd(newSubscription);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      name: "",
      plan: "",
      amount: "",
      currency: "€",
      billingCycle: "mensuel",
      category: "",
      description: "",
      nextBilling: "",
      color: colors[0].value,
      logo: ""
    });
    setErrors({});
    onClose();
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-sm border border-border/50 rounded-2xl shadow-2xl">
        <DialogHeader className="space-y-4 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                Nouvel abonnement
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                Ajoutez un service à votre portefeuille
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informations principales */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Nom du service *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  placeholder="Ex: Netflix, Spotify..."
                  className={`h-11 ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-border/30 focus:border-black'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Plan d'abonnement
                </label>
                <Input
                  value={formData.plan}
                  onChange={(e) => updateFormData('plan', e.target.value)}
                  placeholder="Ex: Premium, Pro, Standard..."
                  className="h-11 border-border/30 focus:border-black"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Montant *
                  </label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.amount}
                    onChange={(e) => updateFormData('amount', e.target.value)}
                    placeholder="0.00"
                    className={`h-11 ${errors.amount ? 'border-red-400 focus:border-red-400' : 'border-border/30 focus:border-black'}`}
                  />
                  {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Devise
                  </label>
                  <Select value={formData.currency} onValueChange={(value) => updateFormData('currency', value)}>
                    <SelectTrigger className="h-11 border-border/30 focus:border-black">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="€">EUR (€)</SelectItem>
                      <SelectItem value="$">USD ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Cycle de facturation
                </label>
                <Select value={formData.billingCycle} onValueChange={(value) => updateFormData('billingCycle', value)}>
                  <SelectTrigger className="h-11 border-border/30 focus:border-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mensuel">Mensuel</SelectItem>
                    <SelectItem value="annuel">Annuel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Métadonnées */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Catégorie *
                </label>
                <Select value={formData.category} onValueChange={(value) => updateFormData('category', value)}>
                  <SelectTrigger className={`h-11 ${errors.category ? 'border-red-400 focus:border-red-400' : 'border-border/30 focus:border-black'}`}>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Description
                </label>
                <Input
                  value={formData.description}
                  onChange={(e) => updateFormData('description', e.target.value)}
                  placeholder="Courte description du service..."
                  className="h-11 border-border/30 focus:border-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Prochaine facturation *
                </label>
                <Input
                  type="date"
                  value={formData.nextBilling}
                  onChange={(e) => updateFormData('nextBilling', e.target.value)}
                  className={`h-11 ${errors.nextBilling ? 'border-red-400 focus:border-red-400' : 'border-border/30 focus:border-black'}`}
                />
                {errors.nextBilling && <p className="text-red-500 text-xs mt-1">{errors.nextBilling}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-3 block flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Couleur de l'icône
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => updateFormData('color', color.value)}
                      className={`w-full h-10 ${color.value} rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 ${
                        formData.color === color.value 
                          ? 'ring-2 ring-black ring-offset-2' 
                          : 'hover:ring-1 hover:ring-gray-300'
                      }`}
                    >
                      {formData.color === color.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Aperçu */}
          {formData.name && (
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-3">Aperçu</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${formData.color} rounded-xl flex items-center justify-center`}>
                  <span className="font-bold text-white text-sm">
                    {formData.logo || formData.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{formData.name}</span>
                    {formData.plan && (
                      <Badge variant="secondary" className="text-xs">
                        {formData.plan}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {formData.category && (
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {formData.category}
                      </span>
                    )}
                    {formData.amount && (
                      <>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {formData.amount} {formData.currency}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

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
