import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, AlertCircle, Hospital, Shield } from "lucide-react";

interface EmergencyService {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  status: "available" | "busy" | "closed";
  waitTime?: string;
}

const EmergencyServicesDirectory = () => {
  const services: EmergencyService[] = [
    {
      id: "1",
      name: "Central Hospital",
      type: "Hospital",
      address: "123 Medical Center Dr",
      phone: "555-0123",
      status: "available",
      waitTime: "15 mins",
    },
    {
      id: "2",
      name: "North Fire Station",
      type: "Fire Station",
      address: "456 Emergency Ave",
      phone: "555-0124",
      status: "busy",
    },
    {
      id: "3",
      name: "Police HQ",
      type: "Police",
      address: "789 Safety Blvd",
      phone: "555-0125",
      status: "available",
    },
  ];

  const getStatusColor = (status: EmergencyService["status"]) => {
    switch (status) {
      case "available":
        return "text-green-500";
      case "busy":
        return "text-yellow-500";
      case "closed":
        return "text-red-500";
    }
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case "Hospital":
        return <Hospital className="h-5 w-5" />;
      case "Fire Station":
        return <AlertCircle className="h-5 w-5" />;
      case "Police":
        return <Shield className="h-5 w-5" />;
      default:
        return <AlertCircle className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Emergency Services</h2>
        <Button variant="destructive" className="gap-2">
          <Phone className="h-4 w-4" />
          SOS
        </Button>
      </div>

      <div className="grid gap-4">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center gap-2">
                {getServiceIcon(service.type)}
                <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
              </div>
              <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
              </span>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{service.address}</p>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Phone className="h-4 w-4" />
                    {service.phone}
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
                {service.waitTime && (
                  <p className="text-sm text-muted-foreground">
                    Estimated wait time: {service.waitTime}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmergencyServicesDirectory;