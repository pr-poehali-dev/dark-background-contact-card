import React from "react";
import ContactCard from "@/components/ContactCard";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600">
      <div className="container py-10 flex items-center justify-center">
        <ContactCard
          name="Иван Петров"
          position="Старший инженер"
          email="ivan.petrov@example.com"
          phone="+7 (999) 123-45-67"
          address="г. Москва, ул. Ленина, 42"
        />
      </div>
    </div>
  );
};

export default Index;
