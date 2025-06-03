
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
  onAddAddress?: () => void;
  isLoaded: boolean;
}

export function AddressList({ 
  addresses, 
  onEdit, 
  onCopy, 
  onToggleFavorite, 
  onArchive, 
  onDelete,
  onAddAddress,
  isLoaded 
}: AddressListProps) {
  if (addresses.length === 0) {
    return <AddressEmptyState isLoaded={isLoaded} onAddAddress={onAddAddress} />;
  }

  return (
    <section 
      className={`transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      aria-label="Liste des adresses"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-black tracking-tight">
          Mes adresses ({addresses.length})
        </h2>
      </div>
      
      <div className="space-y-6">
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
      </div>
    </section>
  );
}
