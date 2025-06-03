
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, Camera, CheckCircle, User, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IdentityVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
}

export function IdentityVerificationModal({ isOpen, onClose, onBack }: IdentityVerificationModalProps) {
  const [step, setStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({
    frontId: null,
    backId: null,
    selfie: null
  });

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      nationality: "",
      idNumber: ""
    }
  });

  const handleFileUpload = (type: string, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [type]: file }));
  };

  const onSubmit = (data: any) => {
    console.log("Identity verification data:", data);
    setStep(3);
  };

  const DocumentUploadCard = ({ type, title, description, icon: Icon }: { type: string, title: string, description: string, icon: any }) => (
    <Card className="border-2 border-dashed border-border/50 hover:border-black/20 transition-colors">
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Icon className="w-6 h-6 text-black/60" />
        </div>
        <h4 className="font-medium text-foreground mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        {uploadedFiles[type] ? (
          <div className="flex items-center justify-center gap-2 text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Fichier téléchargé</span>
          </div>
        ) : (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/*';
              input.onchange = (e) => {
                const file = (e.target as HTMLInputElement).files?.[0];
                if (file) handleFileUpload(type, file);
              };
              input.click();
            }}
          >
            <Upload className="w-4 h-4 mr-2" />
            Télécharger
          </Button>
        )}
      </CardContent>
    </Card>
  );

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
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-left">Vérification d'identité</DialogTitle>
              <p className="text-sm text-muted-foreground">Étape {step}/3</p>
            </div>
          </div>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                Veuillez fournir vos informations personnelles exactement comme elles apparaissent sur votre pièce d'identité.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(() => setStep(2))} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre prénom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom de famille</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date de naissance</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nationalité</FormLabel>
                      <FormControl>
                        <Input placeholder="Française" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="idNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Numéro de pièce d'identité</FormLabel>
                      <FormControl>
                        <Input placeholder="Numéro sur votre CNI/Passeport" {...field} />
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
              <p className="text-sm text-amber-800">
                Téléchargez des photos claires de votre pièce d'identité. Assurez-vous que toutes les informations sont lisibles.
              </p>
            </div>

            <div className="grid gap-4">
              <DocumentUploadCard
                type="frontId"
                title="Recto de la pièce d'identité"
                description="Photo du recto de votre CNI ou passeport"
                icon={FileText}
              />
              
              <DocumentUploadCard
                type="backId"
                title="Verso de la pièce d'identité"
                description="Photo du verso (si applicable)"
                icon={FileText}
              />
              
              <DocumentUploadCard
                type="selfie"
                title="Photo selfie"
                description="Photo de vous tenant votre pièce d'identité"
                icon={Camera}
              />
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Retour
              </Button>
              <Button 
                onClick={() => setStep(3)} 
                className="flex-1"
                disabled={!uploadedFiles.frontId || !uploadedFiles.selfie}
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
                Documents soumis avec succès
              </h3>
              <p className="text-muted-foreground">
                Vos documents sont en cours de vérification. Vous recevrez une notification sous 24-48h.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong>Temps de traitement:</strong> 1-2 jours ouvrables<br />
                <strong>Statut:</strong> En cours de vérification
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
