
import { MapPin, Star, Home, Building2 } from "lucide-react";
import { AddressStatCard } from "@/components/addresses/AddressStatCard";

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

interface AddressStatsProps {
  addresses: Address[];
  isLoaded: boolean;
}

export function AddressStats({ addresses, isLoaded }: AddressStatsProps) {
  const favoriteCount = addresses.filter(address => address.isFavorite).length;
  const homeCount = addresses.filter(address => address.type === "home").length;
  const workCount = addresses.filter(address => address.type === "work").length;

  return (
    <section 
      className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      aria-label="Statistiques des adresses"
    >
      <AddressStatCard
        icon={MapPin}
        value={addresses.length}
        label="Total"
        color="black"
        delay={0}
        isLoaded={isLoaded}
      />
      <AddressStatCard
        icon={Star}
        value={favoriteCount}
        label="Favoris"
        color="black"
        delay={100}
        isLoaded={isLoaded}
      />
      <AddressStatCard
        icon={Home}
        value={homeCount}
        label="Domicile"
        color="black"
        delay={200}
        isLoaded={isLoaded}
      />
      <AddressStatCard
        icon={Building2}
        value={workCount}
        label="Travail"
        color="black"
        delay={300}
        isLoaded={isLoaded}
      />
    </section>
  );
}
