
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

  const stats = [
    {
      icon: MapPin,
      value: addresses.length,
      label: "Total",
      delay: 0,
    },
    {
      icon: Star,
      value: favoriteCount,
      label: "Favoris",
      delay: 100,
    },
    {
      icon: Home,
      value: homeCount,
      label: "Domicile",
      delay: 200,
    },
    {
      icon: Building2,
      value: workCount,
      label: "Travail",
      delay: 300,
    },
  ];

  return (
    <section 
      className={`mb-20 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      aria-label="Statistiques des adresses"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((stat) => (
          <AddressStatCard
            key={stat.label}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            color="black"
            delay={stat.delay}
            isLoaded={isLoaded}
          />
        ))}
      </div>
    </section>
  );
}
