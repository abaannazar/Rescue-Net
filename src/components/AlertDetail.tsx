import { AlertItem } from "@/types/alerts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Wind, Droplets, ThermometerSun, MapPin } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface AlertDetailProps {
  alert: AlertItem;
}

const AlertDetail = ({ alert }: AlertDetailProps) => {
  const getSeverityColor = (severity: AlertItem["severity"]) => {
    switch (severity) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-blue-500";
    }
  };

  const getWeatherDetails = () => {
    // Mock weather data - in a real app, this would come from an API
    return {
      temperature: "72°F",
      humidity: "85%",
      windSpeed: "45 mph",
      precipitation: "90%",
      location: "Downtown Area"
    };
  };

  const weatherDetails = getWeatherDetails();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card className="cursor-pointer hover:bg-accent transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {alert.title}
            </CardTitle>
            <AlertCircle className={`h-4 w-4 ${getSeverityColor(alert.severity)}`} />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{alert.description}</p>
            <p className="text-xs text-muted-foreground mt-2">{alert.timestamp}</p>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold flex items-center gap-2">
            <AlertCircle className={`h-6 w-6 ${getSeverityColor(alert.severity)}`} />
            {alert.title}
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Alert Details</h3>
            <p className="text-muted-foreground">{alert.description}</p>
            <p className="text-sm text-muted-foreground mt-2">Issued {alert.timestamp}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Current Conditions</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <ThermometerSun className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Temperature</p>
                  <p className="text-sm text-muted-foreground">{weatherDetails.temperature}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Humidity</p>
                  <p className="text-sm text-muted-foreground">{weatherDetails.humidity}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Wind Speed</p>
                  <p className="text-sm text-muted-foreground">{weatherDetails.windSpeed}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{weatherDetails.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Safety Recommendations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Stay indoors and away from windows</li>
              <li>• Keep emergency supplies readily available</li>
              <li>• Monitor local news for updates</li>
              <li>• Charge all communication devices</li>
              <li>• Follow evacuation orders if issued</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Emergency Contacts</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Emergency Services:</span> <a href="tel:911" className="text-primary">911</a></p>
              <p><span className="font-medium">Weather Hotline:</span> <a href="tel:555-0123" className="text-primary">555-0123</a></p>
              <p><span className="font-medium">Local Police:</span> <a href="tel:555-0124" className="text-primary">555-0124</a></p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AlertDetail;