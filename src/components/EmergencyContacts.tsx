import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  number: string;
  type: string;
}

interface EmergencyContactsProps {
  contacts: Contact[];
}

const EmergencyContacts = ({ contacts }: EmergencyContactsProps) => {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Emergency Contacts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between p-2 rounded-lg border">
              <div>
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-muted-foreground">{contact.type}</p>
              </div>
              <Button onClick={() => handleCall(contact.number)} className="space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contact.number}</span>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContacts;