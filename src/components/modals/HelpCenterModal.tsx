
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle, Search, FileText, CreditCard, Shield, Users, ChevronRight } from "lucide-react";
import { useState } from "react";

interface HelpCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpCenterModal({ isOpen, onClose }: HelpCenterModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      icon: CreditCard,
      title: "Paiements et transactions",
      description: "Comment effectuer des paiements, gérer vos cartes",
      articles: 15
    },
    {
      icon: Shield,
      title: "Sécurité et compte",
      description: "Protection de votre compte, authentification 2FA",
      articles: 8
    },
    {
      icon: Users,
      title: "Abonnements",
      description: "Gérer vos abonnements et renouvellements",
      articles: 12
    },
    {
      icon: FileText,
      title: "Facturation",
      description: "Comprendre vos factures et historique",
      articles: 6
    }
  ];

  const popularArticles = [
    "Comment ajouter une nouvelle méthode de paiement ?",
    "Que faire si ma transaction a échoué ?",
    "Comment activer l'authentification à deux facteurs ?",
    "Comment annuler un abonnement ?"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-white" />
            </div>
            Centre d'aide
          </DialogTitle>
          <DialogDescription>
            Trouvez des réponses à vos questions et explorez nos guides
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Rechercher dans l'aide..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10"
            />
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Catégories</h4>
            <div className="grid grid-cols-2 gap-3">
              {helpCategories.map((category, index) => (
                <div
                  key={index}
                  className="group p-3 rounded-lg border border-border hover:border-black/30 cursor-pointer transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm">{category.title}</p>
                      <p className="text-xs text-muted-foreground mb-1">{category.description}</p>
                      <p className="text-xs text-muted-foreground">{category.articles} articles</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Articles populaires</h4>
            <div className="space-y-2">
              {popularArticles.map((article, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between p-3 rounded-lg hover:bg-background/60 cursor-pointer transition-all"
                >
                  <p className="text-sm text-foreground">{article}</p>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="p-4 bg-background/60 rounded-lg border border-border/30">
            <div className="text-center">
              <p className="text-sm text-foreground mb-2">Vous ne trouvez pas ce que vous cherchez ?</p>
              <p className="text-xs text-muted-foreground mb-3">Notre équipe support est là pour vous aider</p>
              <Button variant="outline" size="sm" className="h-8 px-4 text-xs">
                Contacter le support
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
