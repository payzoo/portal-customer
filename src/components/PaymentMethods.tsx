
import { useState, useEffect } from "react";
import { 
  CreditCard, 
  Plus, 
  Star,
  Wallet,
  Brain,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddPaymentMethodModal } from "@/components/modals/AddPaymentMethodModal";
import { PaymentStatCard } from "@/components/payments/PaymentStatCard";
import { PaymentSearchFilter } from "@/components/payments/PaymentSearchFilter";
import { PaymentMethodCard } from "@/components/payments/PaymentMethodCard";
import { PaymentEmptyState } from "@/components/payments/PaymentEmptyState";

interface PaymentMethod {
  id: number;
  type: "visa" | "mastercard" | "paypal" | "other";
  accountNumber: string;
  expiryDate: string;
  isDefault: boolean;
}

export function PaymentMethods() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: 1,
      type: "visa",
      accountNumber: "4111111111111111",
      expiryDate: "12/24",
      isDefault: true,
    },
    {
      id: 2,
      type: "mastercard",
      accountNumber: "5222222222222222",
      expiryDate: "01/25",
      isDefault: false,
    },
    {
      id: 3,
      type: "paypal",
      accountNumber: "email@example.com",
      expiryDate: "",
      isDefault: false,
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredPaymentMethods = paymentMethods.filter((method) => {
    const matchesSearch =
      method.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      method.accountNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || method.type === filterType;
    return matchesSearch && matchesType;
  });

  const defaultPaymentMethodCount = paymentMethods.filter((method) => method.isDefault).length;
  const visaCount = paymentMethods.filter((method) => method.type === "visa").length;
  const mastercardCount = paymentMethods.filter((method) => method.type === "mastercard").length;

  const handleAddPaymentMethod = (newPaymentMethod: PaymentMethod) => {
    setPaymentMethods(prev => [...prev, newPaymentMethod]);
    console.log('Nouveau moyen de paiement ajouté:', newPaymentMethod);
  };

  const handleEdit = (paymentMethod: PaymentMethod) => {
    console.log(`Modifier le moyen de paiement ${paymentMethod.type}`);
  };

  const handleToggleDefault = (paymentMethod: PaymentMethod) => {
    console.log(`Basculer le statut par défaut pour le moyen de paiement ${paymentMethod.type}`);
  };

  const handleDelete = (paymentMethod: PaymentMethod) => {
    console.log(`Supprimer le moyen de paiement ${paymentMethod.type}`);
  };

  return (
    <main className="min-h-screen relative" role="main">
      {/* Background with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-200/40 rounded-3xl rotate-12 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-purple-200/40 rounded-2xl -rotate-12 animate-[float_8s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-200/40 rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite_4s]" />
        <div className="absolute top-32 right-1/3 w-20 h-20 border border-blue-300/30 rounded-full animate-[float_9s_ease-in-out_infinite_1s] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <header className={`mb-8 lg:mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-0">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="p-2.5 lg:p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl lg:rounded-2xl shadow-lg">
                  <Wallet className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-green-600 tracking-wide">Sécurisé</span>
                </div>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-2 lg:mb-3 tracking-tight">Portefeuille</h1>
                <p className="text-lg lg:text-xl text-gray-600 flex items-center gap-2 lg:gap-3 font-medium">
                  <Brain className="w-4 h-4 lg:w-5 lg:h-5" />
                  Gérez vos moyens de paiement en sécurité
                </p>
              </div>
            </div>
            
            <Button 
              className="group px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 self-start"
              onClick={() => setIsAddModalOpen(true)}
            >
              <Plus className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span className="text-base lg:text-lg font-semibold">Ajouter</span>
              <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </header>

        {/* Stats cards */}
        <section 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          aria-label="Statistiques des moyens de paiement"
        >
          <PaymentStatCard
            icon={CreditCard}
            value={paymentMethods.length}
            label="Total"
            delay={0}
            color="blue"
            isLoaded={isLoaded}
          />
          <PaymentStatCard
            icon={Star}
            value={defaultPaymentMethodCount}
            label="Par défaut"
            delay={100}
            color="yellow"
            isLoaded={isLoaded}
          />
          <PaymentStatCard
            icon={CreditCard}
            value={visaCount}
            label="Visa"
            delay={200}
            color="green"
            isLoaded={isLoaded}
          />
          <PaymentStatCard
            icon={CreditCard}
            value={mastercardCount}
            label="Mastercard"
            delay={300}
            color="purple"
            isLoaded={isLoaded}
          />
        </section>

        {/* Search and filters */}
        <PaymentSearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterType={filterType}
          onFilterChange={setFilterType}
          isLoaded={isLoaded}
        />

        {/* Payment methods list */}
        <section 
          className={`space-y-4 lg:space-y-6 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          aria-label="Liste des moyens de paiement"
        >
          {filteredPaymentMethods.length === 0 ? (
            <PaymentEmptyState isLoaded={isLoaded} />
          ) : (
            filteredPaymentMethods.map((paymentMethod, index) => (
              <PaymentMethodCard
                key={paymentMethod.id}
                paymentMethod={paymentMethod}
                index={index}
                onEdit={handleEdit}
                onToggleDefault={handleToggleDefault}
                onDelete={handleDelete}
                isLoaded={isLoaded}
              />
            ))
          )}
        </section>
      </div>

      <AddPaymentMethodModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddPaymentMethod}
      />
    </main>
  );
}
