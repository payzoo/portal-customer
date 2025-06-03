
import { useState, useEffect } from "react";
import { AddAddressModal } from "@/components/modals/AddAddressModal";
import { AddressHeader } from "@/components/addresses/AddressHeader";
import { AddressStats } from "@/components/addresses/AddressStats";
import { AddressSearchFilter } from "@/components/addresses/AddressSearchFilter";
import { AddressList } from "@/components/addresses/AddressList";

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

export function Addresses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      label: "Domicile Principal",
      street: "123 Rue de la Paix",
      city: "Paris",
      zipCode: "75001",
      country: "France",
      type: "home",
      isDefault: true,
      isFavorite: true,
    },
    {
      id: 2,
      label: "Bureau Startup",
      street: "456 Avenue des Champs-Élysées",
      city: "Paris",
      zipCode: "75008",
      country: "France",
      type: "work",
      isDefault: false,
      isFavorite: false,
    },
    {
      id: 3,
      label: "Résidence Secondaire",
      street: "789 Boulevard Saint-Germain",
      city: "Paris",
      zipCode: "75006",
      country: "France",
      type: "other",
      isDefault: false,
      isFavorite: false,
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredAddresses = addresses.filter((address) => {
    const matchesSearch =
      address.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      address.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
      address.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || address.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleAddAddress = (newAddress: Address) => {
    setAddresses(prev => [...prev, newAddress]);
    console.log('Nouvelle adresse ajoutée:', newAddress);
  };

  const handleEdit = (address: Address) => {
    console.log(`Modifier l'adresse ${address.label}`);
  };

  const handleCopy = (address: Address) => {
    const addressText = `${address.street}, ${address.city} ${address.zipCode}, ${address.country}`;
    navigator.clipboard.writeText(addressText);
    console.log(`Adresse copiée: ${addressText}`);
  };

  const handleToggleFavorite = (address: Address) => {
    setAddresses(prev => 
      prev.map(addr => 
        addr.id === address.id 
          ? { ...addr, isFavorite: !addr.isFavorite }
          : addr
      )
    );
    console.log(`Statut favori modifié pour: ${address.label}`);
  };

  const handleArchive = (address: Address) => {
    console.log(`Archiver l'adresse ${address.label}`);
  };

  const handleDelete = (address: Address) => {
    setAddresses(prev => prev.filter(addr => addr.id !== address.id));
    console.log(`Adresse supprimée: ${address.label}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <AddressHeader
          onAddAddress={() => setIsAddModalOpen(true)}
          isLoaded={isLoaded}
        />

        <AddressStats
          addresses={addresses}
          isLoaded={isLoaded}
        />

        <AddressSearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterType={filterType}
          onFilterChange={setFilterType}
          isLoaded={isLoaded}
        />

        <AddressList
          addresses={filteredAddresses}
          onEdit={handleEdit}
          onCopy={handleCopy}
          onToggleFavorite={handleToggleFavorite}
          onArchive={handleArchive}
          onDelete={handleDelete}
          onAddAddress={() => setIsAddModalOpen(true)}
          isLoaded={isLoaded}
        />
      </div>

      <AddAddressModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddAddress}
      />
    </main>
  );
}
