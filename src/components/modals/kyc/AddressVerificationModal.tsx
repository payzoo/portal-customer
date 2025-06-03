
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, CheckCircle, MapPin, ArrowLeft, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface AddressVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
}

export function AddressVerificationModal({ isOpen, onClose, onBack }: AddressVerificationModalProps) {
  const [step, setStep] = useState(1);
  const [uploadedDocument, setUploadedDocument] = useState<File | null>(null);

  const form = useForm({
    defaultValues: {
      street: "",
      city: "",
      postalCode: "",
      country: "France"
    }
  });

  const handleFileUpload = (file: File) => {
    setUploadedDocument(file);
  };

  const onSubmit = (data: any) => {
    console.log("Address verification data:", data);
    if (uploadedDocument) {
      setStep(3);
    } else {
      setStep(2);
    }
  };

  const acceptedDocuments = [
    "Facture d'électricité, gaz ou eau (moins de 3 mois)",
    "Relevé bancaire (moins de 3 mois)",
    "Attestation d'assurance habitation",
    "Quittance de loyer",
    "Avis d'imposition"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            {onBack && (
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-left">Justificatif de domicile</DialogTitle>
              <p className="text-sm text-muted-foreground">Étape {step}/3</p>
            </div>
          </div>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                Saisissez votre adresse de résidence actuelle telle qu'elle apparaît sur vos documents officiels.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse complète</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Rue de la République" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ville</FormLabel>
                        <FormControl>
                          <Input placeholder="Paris" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Code postal</FormLabel>
                        <FormControl>
                          <Input placeholder="75001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pays</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Continuer
                </Button>
              </form>
            </Form>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 font-medium mb-2">
                    Documents acceptés
                  </p>
                  <ul className="text-xs text-amber-700 space-y-1">
                    {acceptedDocuments.map((doc, index) => (
                      <li key={index}>• {doc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Card className="border-2 border-dashed border-border/50 hover:border-black/20 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-black/60" />
                </div>
                
                <h4 className="font-medium text-foreground mb-2">
                  Télécharger un justificatif de domicile
                </h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Document datant de moins de 3 mois
                </p>
                
                {uploadedDocument ? (
                  <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">{uploadedDocument.name}</span>
                  </div>
                ) : null}

                <Button 
                  onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = '.pdf,.jpg,.jpeg,.png';
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0];
                      if (file) handleFileUpload(file);
                    };
                    input.click();
                  }}
                  className="mb-4"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {uploadedDocument ? 'Changer le fichier' : 'Choisir un fichier'}
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  Formats acceptés: PDF, JPG, PNG (max 10 MB)
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Retour
              </Button>
              <Button 
                onClick={() => setStep(3)} 
                className="flex-1"
                disabled={!uploadedDocument}
              >
                Soumettre
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Justificatif soumis avec succès
              </h3>
              <p className="text-muted-foreground">
                Votre justificatif de domicile est en cours de vérification.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong>Adresse enregistrée:</strong><br />
                {form.getValues('street')}<br />
                {form.getValues('postalCode')} {form.getValues('city')}<br />
                {form.getValues('country')}
              </p>
            </div>

            <Button onClick={onClose} className="w-full">
              Terminé
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
