
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeleteAccountModal({ isOpen, onClose }: DeleteAccountModalProps) {
  const [confirmText, setConfirmText] = useState("");
  const isConfirmed = confirmText === "SUPPRIMER";

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-600">Supprimer le compte</AlertDialogTitle>
          <AlertDialogDescription className="space-y-4">
            <p>Cette action est irréversible et supprimera définitivement :</p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
              <li>Votre wallet Payzoo</li>
              <li>Toutes vos données personnelles</li>
              <li>Votre historique de transactions</li>
              <li>Vos méthodes de paiement</li>
            </ul>
            <div className="space-y-2">
              <Label htmlFor="confirm">Tapez "SUPPRIMER" pour confirmer</Label>
              <Input
                id="confirm"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder="SUPPRIMER"
                className="font-mono"
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Annuler</AlertDialogCancel>
          <AlertDialogAction
            disabled={!isConfirmed}
            className="bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              console.log("Account deleted");
              onClose();
            }}
          >
            Supprimer définitivement
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
