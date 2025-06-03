
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, CheckCircle, TrendingUp, ArrowLeft, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Badge } from "@/components/ui/badge";

interface IncomeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
}

export function IncomeVerificationModal({ isOpen, onClose, onBack }: IncomeVerificationModalProps) {
  const [step, setStep] = useState(1);
  const [selectedIncomeType, setSelectedIncomeType] = useState<string>("");
  const [uploadedDocuments, setUploadedDocuments] = useState<File[]>([]);

  const form = useForm({
    defaultValues: {
      monthlyIncome: "",
      employer: "",
      position: "",
      employmentDuration: ""
    }
  });

  const incomeTypes = [
    { id: "employee", label: "Salarié", description: "Contrat de travail, bulletins de salaire" },
    { id: "freelance", label: "Indépendant", description: "Attestation comptable, relevés bancaires" },
    { id: "student", label: "Étudiant", description: "Certificat de scolarité, justificatifs de revenus" },
    { id: "retired", label: "Retraité", description: "Attestation de pension, relevés" },
    { id: "unemployed", label: "Sans emploi", description: "Attestation Pôle Emploi, autres revenus" }
  ];

  const handleFileUpload = (file: File) => {
    setUploadedDocuments(prev => [...prev, file]);
  };

  const removeDocument = (index: number) => {
    setUploadedDocuments(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data: any) => {
    console.log("Income verification data:", data);
    setStep(3);
  };

  const getRequiredDocuments = (type: string) => {
    switch (type) {
      case "employee":
        return [
          "3 derniers bulletins de salaire",
          "Contrat de travail",
          "Attestation employeur (optionnel)"
        ];
      case "freelance":
        return [
          "Dernière déclaration de revenus",
          "3 derniers relevés bancaires",
          "Attestation comptable ou expert-comptable"
        ];
      case "student":
        return [
          "Certificat de scolarité",
          "Justificatifs de revenus (stage, job étudiant, aide familiale)",
          "Relevé bancaire (optionnel)"
        ];
      case "retired":
        return [
          "Attestation de pension de retraite",
          "3 derniers relevés de pension",
          "Dernière déclaration de revenus"
        ];
      case "unemployed":
        return [
          "Attestation Pôle Emploi",
          "Justificatifs d'allocations",
          "Autres sources de revenus (aide familiale, etc.)"
        ];
      default:
        return [];
    }
  };

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
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-left">Justificatifs de revenus</DialogTitle>
              <p className="text-sm text-muted-foreground">Étape {step}/3</p>
            </div>
          </div>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                Sélectionnez votre situation professionnelle pour personnaliser les documents requis.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Quelle est votre situation professionnelle ?</h4>
              
              {incomeTypes.map((type) => (
                <Card 
                  key={type.id}
                  className={`cursor-pointer transition-all border-2 ${
                    selectedIncomeType === type.id 
                      ? 'border-black bg-black/5' 
                      : 'border-border/50 hover:border-black/20'
                  }`}
                  onClick={() => setSelectedIncomeType(type.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-foreground">{type.label}</h5>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                      {selectedIncomeType === type.id && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              onClick={() => setStep(2)} 
              className="w-full"
              disabled={!selectedIncomeType}
            >
              Continuer
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 font-medium mb-2">
                    Documents requis pour votre situation
                  </p>
                  <ul className="text-xs text-amber-700 space-y-1">
                    {getRequiredDocuments(selectedIncomeType).map((doc, index) => (
                      <li key={index}>• {doc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="monthlyIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Revenus mensuels nets (€)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="2500" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {selectedIncomeType === "employee" && (
                  <>
                    <FormField
                      control={form.control}
                      name="employer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employeur</FormLabel>
                          <FormControl>
                            <Input placeholder="Nom de l'entreprise" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Poste occupé</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre fonction" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Documents justificatifs</h4>
                  
                  <Card className="border-2 border-dashed border-border/50 hover:border-black/20 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-6 h-6 text-black/60" />
                      </div>
                      
                      <h5 className="font-medium text-foreground mb-2">
                        Télécharger vos justificatifs
                      </h5>
                      <p className="text-sm text-muted-foreground mb-4">
                        Formats acceptés: PDF, JPG, PNG
                      </p>

                      <Button 
                        type="button"
                        onClick={() => {
                          const input = document.createElement('input');
                          input.type = 'file';
                          input.accept = '.pdf,.jpg,.jpeg,.png';
                          input.multiple = true;
                          input.onchange = (e) => {
                            const files = (e.target as HTMLInputElement).files;
                            if (files) {
                              Array.from(files).forEach(file => handleFileUpload(file));
                            }
                          };
                          input.click();
                        }}
                        className="mb-4"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Choisir des fichiers
                      </Button>
                    </CardContent>
                  </Card>

                  {uploadedDocuments.length > 0 && (
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-foreground">Documents téléchargés:</h5>
                      {uploadedDocuments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-800">{file.name}</span>
                          </div>
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeDocument(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            Supprimer
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Retour
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1"
                    disabled={uploadedDocuments.length === 0}
                  >
                    Soumettre
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Justificatifs soumis avec succès
              </h3>
              <p className="text-muted-foreground">
                Vos justificatifs de revenus sont en cours de vérification par notre équipe.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Situation:</span>
                <Badge variant="outline">
                  {incomeTypes.find(t => t.id === selectedIncomeType)?.label}
                </Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Revenus déclarés:</span>
                <span className="font-medium">{form.getValues('monthlyIncome')} €/mois</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Documents fournis:</span>
                <span className="font-medium">{uploadedDocuments.length} fichier(s)</span>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Prochaines étapes:</strong> Nos équipes examineront vos documents sous 3-5 jours ouvrables. 
                Vous recevrez une notification par email une fois la vérification terminée.
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
