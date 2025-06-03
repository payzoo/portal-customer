
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Plus, Home, Building2, Star, Check } from "lucide-react";

interface AddAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (address: any) => void;
}

const addressTypes = [
  { value: "home", label: "Domicile", icon: Home, color: "bg-black" },
  { value: "work", label: "Travail", icon: Building2, color: "bg-black" },
  { value: "other", label: "Autre", icon: MapPin, color: "bg-black" }
];

const countries = [
  "France",
  "Belgique",
  "Suisse",
  "Canada",
  "États-Unis",
  "Allemagne",
  "Espagne",
  "Italie"
];

export function AddAddressModal({ isOpen, onClose, onAdd }: AddAddressModalProps) {
  const [formData, setFormData] = useState({
    label: "",
    street: "",
    city: "",
    zipCode: "",
    country: "France",
    type: "home",
    isDefault: false,
    isFavorite: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.label.trim()) newErrors.label = "Le libellé est requis";
    if (!formData.street.trim()) newErrors.street = "L'adresse est requise";
    if (!formData.city.trim()) newErrors.city = "La ville est requise";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Le code postal est requis";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const newAddress = {
      id: Date.now(),
      ...formData
    };
    
    onAdd(newAddress);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      label: "",
      street: "",
      city: "",
      zipCode: "",
      country: "France",
      type: "home",
      isDefault: false,
      isFavorite: false
    });
    setErrors({});
    onClose();
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const selectedType = addressTypes.find(type => type.value === formData.type);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl bg-white border border-gray-200 rounded-2xl shadow-2xl">
        <DialogHeader className="space-y-4 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-black">
                Nouvelle adresse
              </DialogTitle>
              <p className="text-sm text-gray-600">
                Ajoutez une adresse à votre carnet
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-black mb-2 block">
                Libellé *
              </Label>
              <Input
                value={formData.label}
                onChange={(e) => updateFormData('label', e.target.value)}
                placeholder="Ex: Maison, Bureau, Chez mes parents..."
                className={`h-11 ${errors.label ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-black'}`}
              />
              {errors.label && <p className="text-red-500 text-xs mt-1">{errors.label}</p>}
            </div>

            <div>
              <Label className="text-sm font-medium text-black mb-2 block">
                Adresse complète *
              </Label>
              <Input
                value={formData.street}
                onChange={(e) => updateFormData('street', e.target.value)}
                placeholder="Numéro et nom de rue"
                className={`h-11 ${errors.street ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-black'}`}
              />
              {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-black mb-2 block">
                  Ville *
                </Label>
                <Input
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  placeholder="Ville"
                  className={`h-11 ${errors.city ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-black'}`}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>
              <div>
                <Label className="text-sm font-medium text-black mb-2 block">
                  Code postal *
                </Label>
                <Input
                  value={formData.zipCode}
                  onChange={(e) => updateFormData('zipCode', e.target.value)}
                  placeholder="Code postal"
                  className={`h-11 ${errors.zipCode ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-black'}`}
                />
                {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-black mb-2 block">
                Pays
              </Label>
              <Select value={formData.country} onValueChange={(value) => updateFormData('country', value)}>
                <SelectTrigger className="h-11 border-gray-200 focus:border-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium text-black mb-3 block">
                Type d'adresse
              </Label>
              <div className="grid grid-cols-3 gap-3">
                {addressTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => updateFormData('type', type.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                      formData.type === type.value
                        ? 'border-black bg-black/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-8 h-8 ${type.color} rounded-lg flex items-center justify-center`}>
                        <type.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{type.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
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

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Star className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">Ajouter aux favoris</span>
                </div>
                <Checkbox
                  checked={formData.isFavorite}
                  onCheckedChange={(checked) => updateFormData('isFavorite', checked as boolean)}
                />
              </div>
            </div>
          </div>

          {formData.label && formData.street && (
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-3">Aperçu</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${selectedType?.color} rounded-xl flex items-center justify-center`}>
                  {selectedType && <selectedType.icon className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-black">{formData.label}</span>
                    {formData.isDefault && (
                      <Badge variant="secondary" className="text-xs">
                        Par défaut
                      </Badge>
                    )}
                    {formData.isFavorite && (
                      <Star className="w-3 h-3 text-black fill-current" />
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {formData.street}
                    {formData.city && `, ${formData.city}`}
                    {formData.zipCode && ` ${formData.zipCode}`}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
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
              className="h-11 px-6 bg-black hover:bg-gray-800 text-white"
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
