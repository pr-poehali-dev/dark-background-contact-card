import React from "react";
import ContactCard from "@/components/ContactCard";

const Index: React.FC = () => {
  return (
    <div className="container py-10 flex items-center justify-center min-h-screen">
      <ContactCard
        name="Иван Петров"
        position="Старший инженер"
        email="ivan.petrov@example.com"
        phone="+7 (999) 123-45-67"
        address="г. Москва, ул. Ленина, 42"
      />
    </div>
  );
};

export default Index;
