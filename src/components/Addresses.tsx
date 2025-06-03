
import { useState, useEffect } from "react";
import { 
  MapPin, 
  Plus, 
  Star,
  Home,
  Building2,
  Brain,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddAddressModal } from "@/components/modals/AddAddressModal";
import { AddressStatCard } from "@/components/addresses/AddressStatCard";
import { AddressSearchFilter } from "@/components/addresses/AddressSearchFilter";
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

export function Addresses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      label: "Domicile",
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
      label: "Bureau",
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
      label: "Autre Adresse",
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
    const timer = setTimeout(() => setIsLoaded(true), 100);
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

  const favoriteCount = addresses.filter((address) => address.isFavorite).length;
  const homeCount = addresses.filter((address) => address.type === "home").length;
  const workCount = addresses.filter((address) => address.type === "work").length;

  const handleAddAddress = (newAddress: Address) => {
    setAddresses(prev => [...prev, newAddress]);
    console.log('Nouvelle adresse ajoutée:', newAddress);
  };

  const handleEdit = (address: Address) => {
    console.log(`Modifier l'adresse ${address.label}`);
  };

  const handleCopy = (address: Address) => {
    console.log(`Copier l'adresse ${address.label}`);
  };

  const handleToggleFavorite = (address: Address) => {
    console.log(`Basculer le statut favori pour l'adresse ${address.label}`);
  };

  const handleArchive = (address: Address) => {
    console.log(`Archiver l'adresse ${address.label}`);
  };

  const handleDelete = (address: Address) => {
    console.log(`Supprimer l'adresse ${address.label}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-200/30 rounded-3xl rotate-12 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-blue-200/40 rounded-2xl -rotate-12 animate-[float_8s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-purple-200/30 rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite_4s]" />
        <div className="absolute top-32 right-1/3 w-20 h-20 border border-green-200/30 rounded-full animate-[float_9s_ease-in-out_infinite_1s] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Header section */}
        <header className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-start justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-green-600 tracking-wide">Smart Location</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-light text-gray-900 tracking-tight mb-2">Adresses</h1>
                <p className="text-lg text-gray-600 flex items-center gap-3 font-medium">
                  <Brain className="w-5 h-5 text-gray-400" />
                  Gérez vos adresses en toute simplicité
                </p>
              </div>
            </div>
            
            <Button 
              className="group h-12 px-6 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setIsAddModalOpen(true)}
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span className="mx-2 font-medium">Ajouter</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </header>

        {/* Metrics cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AddressStatCard
            icon={MapPin}
            value={addresses.length}
            label="Total"
            color="blue"
            delay={200}
            isLoaded={isLoaded}
          />
          <AddressStatCard
            icon={Star}
            value={favoriteCount}
            label="Favoris"
            color="yellow"
            delay={300}
            isLoaded={isLoaded}
          />
          <AddressStatCard
            icon={Home}
            value={homeCount}
            label="Domicile"
            color="green"
            delay={400}
            isLoaded={isLoaded}
          />
          <AddressStatCard
            icon={Building2}
            value={workCount}
            label="Travail"
            color="purple"
            delay={500}
            isLoaded={isLoaded}
          />
        </section>

        {/* Search and filters */}
        <AddressSearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterType={filterType}
          onFilterChange={setFilterType}
          isLoaded={isLoaded}
        />

        {/* Addresses list */}
        <section className={`space-y-6 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {filteredAddresses.length === 0 ? (
            <AddressEmptyState isLoaded={isLoaded} />
          ) : (
            filteredAddresses.map((address, index) => (
              <AddressCard
                key={address.id}
                address={address}
                index={index}
                onEdit={handleEdit}
                onCopy={handleCopy}
                onToggleFavorite={handleToggleFavorite}
                onArchive={handleArchive}
                onDelete={handleDelete}
              />
            ))
          )}
        </section>
      </div>

      <AddAddressModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddAddress}
      />
    </main>
  );
}
