
import { useState, useEffect } from "react";
import { AddPaymentMethodModal } from "@/components/modals/AddPaymentMethodModal";
import { PaymentHeader } from "@/components/payments/PaymentHeader";
import { PaymentQuickStats } from "@/components/payments/PaymentQuickStats";
import { PaymentSearch } from "@/components/payments/PaymentSearch";
import { PaymentList } from "@/components/payments/PaymentList";

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

  const handleAddPaymentMethod = (newPaymentMethod: PaymentMethod) => {
    setPaymentMethods(prev => [...prev, newPaymentMethod]);
    console.log('Nouveau moyen de paiement ajouté:', newPaymentMethod);
  };

  const handleEdit = (paymentMethod: PaymentMethod) => {
    console.log(`Modifier le moyen de paiement ${paymentMethod.type}`);
  };

  const handleToggleDefault = (paymentMethod: PaymentMethod) => {
    setPaymentMethods(prev => 
      prev.map(method => ({
        ...method,
        isDefault: method.id === paymentMethod.id ? !method.isDefault : method.isDefault
      }))
    );
    console.log(`Basculer le statut par défaut pour le moyen de paiement ${paymentMethod.type}`);
  };

  const handleDelete = (paymentMethod: PaymentMethod) => {
    setPaymentMethods(prev => prev.filter(method => method.id !== paymentMethod.id));
    console.log(`Supprimer le moyen de paiement ${paymentMethod.type}`);
  };

  const handleAddPayment = () => {
    setIsAddModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <PaymentHeader 
          onAddPayment={handleAddPayment}
          isLoaded={isLoaded}
        />
        
        <PaymentQuickStats 
          paymentMethods={paymentMethods}
          isLoaded={isLoaded}
        />

        <PaymentSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterType={filterType}
          onFilterChange={setFilterType}
          isLoaded={isLoaded}
        />

        <PaymentList
          paymentMethods={filteredPaymentMethods}
          onEdit={handleEdit}
          onToggleDefault={handleToggleDefault}
          onDelete={handleDelete}
          onAddPayment={handleAddPayment}
          isLoaded={isLoaded}
        />
      </div>

      <AddPaymentMethodModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddPaymentMethod}
      />
    </div>
  );
}
