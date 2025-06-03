
import { AddressCard } from "@/components/addresses/AddressCard";
import { AddressEmptyState } from "@/components/addresses/AddressEmptyState";

interface Address {
  id: number;
  label: string;
  street: string;
  city: string;
  zipCode: string;
  country: string;
  type: "home" | "work" | "other";
  isDefault: boolean;
  isFavorite: boolean;
}

interface AddressListProps {
  addresses: Address[];
  onEdit: (address: Address) => void;
  onCopy: (address: Address) => void;
  onToggleFavorite: (address: Address) => void;
  onArchive: (address: Address) => void;
  onDelete: (address: Address) => void;
  isLoaded: boolean;
}

export function AddressList({ 
  addresses, 
  onEdit, 
  onCopy, 
  onToggleFavorite, 
  onArchive, 
  onDelete, 
  isLoaded 
}: AddressListProps) {
  if (addresses.length === 0) {
    return <AddressEmptyState isLoaded={isLoaded} />;
  }

  return (
    <section 
      className={`space-y-4 transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      aria-label="Liste des adresses"
    >
      {addresses.map((address, index) => (
        <AddressCard
          key={address.id}
          address={address}
          index={index}
          onEdit={onEdit}
          onCopy={onCopy}
          onToggleFavorite={onToggleFavorite}
          onArchive={onArchive}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}
