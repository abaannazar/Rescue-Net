import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Cloud, MapPin, Battery, Users } from "lucide-react";
import StatusCard from "@/components/StatusCard";

const StatusDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Current Status</h2>
      
      <div className="grid gap-4 md:grid-cols-3">
        <StatusCard
          level="warning"
          title="Weather Alert"
          description="Severe thunderstorm warning in effect until 8:00 PM"
        />
        <StatusCard
          level="safe"
          title="Emergency Services"
          description="All emergency services are fully operational"
        />
        <StatusCard
          level="danger"
          title="Evacuation Status"
          description="Mandatory evacuation order in zones A and B"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Resource Status</CardTitle>
            <Battery className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Electricity</span>
                <span className="text-green-500">Operational</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Water Supply</span>
                <span className="text-yellow-500">Limited</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Internet</span>
                <span className="text-green-500">Operational</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Community Updates</CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm">
                <p className="font-medium">Emergency Shelter Opening</p>
                <p className="text-muted-foreground">Central High School now accepting evacuees</p>
              </div>
              <div className="text-sm">
                <p className="font-medium">Road Closure</p>
                <p className="text-muted-foreground">Main St between 5th and 7th Ave closed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatusDashboard;