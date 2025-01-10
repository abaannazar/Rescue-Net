import StatusDashboard from "@/components/StatusDashboard";
import AlertsList from "@/components/AlertsList";
import SafetyRecommendations from "@/components/SafetyRecommendations";
import EmergencyContacts from "@/components/EmergencyContacts";
import EmergencyServicesDirectory from "@/components/EmergencyServicesDirectory";
import { AlertItem } from "@/types/alerts";
import { useState } from "react";

const Index = () => {
  const [alerts] = useState<AlertItem[]>([
    {
      id: "1",
      title: "Flash Flood Warning",
      description: "Heavy rainfall expected in your area. Prepare for possible flooding.",
      severity: "high" as const,
      timestamp: "2 mins ago",
    },
    {
      id: "2",
      title: "Strong Winds Alert",
      description: "Wind speeds exceeding 50mph expected in the next 6 hours.",
      severity: "medium" as const,
      timestamp: "15 mins ago",
    },
    {
      id: "3",
      title: "Weather Update",
      description: "Thunderstorms possible in the evening.",
      severity: "low" as const,
      timestamp: "1 hour ago",
    },
  ]);

  const [recommendations] = useState([
    {
      id: "1",
      title: "Prepare Emergency Kit",
      description: "Include water, non-perishable food, flashlights, and first aid supplies.",
    },
    {
      id: "2",
      title: "Secure Important Documents",
      description: "Keep important documents in a waterproof container.",
    },
    {
      id: "3",
      title: "Stay Informed",
      description: "Monitor local news and weather updates regularly.",
    },
  ]);

  const [contacts] = useState([
    {
      id: "1",
      name: "Emergency Services",
      number: "911",
      type: "Emergency",
    },
    {
      id: "2",
      name: "Local Police",
      number: "555-0123",
      type: "Law Enforcement",
    },
    {
      id: "3",
      name: "Fire Department",
      number: "555-0124",
      type: "Fire Emergency",
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Disaster Alert System</h1>
      
      <StatusDashboard />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Active Alerts</h2>
            <AlertsList alerts={alerts} />
          </div>
          <SafetyRecommendations recommendations={recommendations} />
        </div>
        <div className="space-y-8">
          <EmergencyServicesDirectory />
          <EmergencyContacts contacts={contacts} />
        </div>
      </div>
    </div>
  );
};

export default Index;