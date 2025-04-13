import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactCardProps {
  name: string;
  position?: string;
  email?: string;
  phone?: string;
  address?: string;
  avatarUrl?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  position,
  email,
  phone,
  address,
  avatarUrl,
}) => {
  // Получаем инициалы для запасного аватара
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <Card className="bg-[#1a1a1a] text-white border-gray-700 overflow-hidden max-w-md w-full">
      <CardHeader className="pb-2 pt-6 flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-gray-700">
          <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={name} />
          <AvatarFallback className="bg-gray-800 text-gray-100">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-medium">{name}</h3>
          {position && <p className="text-gray-400">{position}</p>}
        </div>
      </CardHeader>
      <CardContent className="pt-4 pb-6">
        <div className="space-y-3">
          {phone && (
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 rounded-full bg-gray-800 border-gray-700 hover:bg-gray-700"
              >
                <Phone className="h-4 w-4" />
              </Button>
              <span className="text-gray-300">{phone}</span>
            </div>
          )}
          
          {email && (
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 rounded-full bg-gray-800 border-gray-700 hover:bg-gray-700"
              >
                <Mail className="h-4 w-4" />
              </Button>
              <span className="text-gray-300">{email}</span>
            </div>
          )}
          
          {address && (
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 rounded-full bg-gray-800 border-gray-700 hover:bg-gray-700"
              >
                <MapPin className="h-4 w-4" />
              </Button>
              <span className="text-gray-300">{address}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
