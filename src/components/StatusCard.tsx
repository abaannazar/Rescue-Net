import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatusLevel = "safe" | "warning" | "danger";

interface StatusCardProps {
  level: StatusLevel;
  title: string;
  description: string;
}

const StatusCard = ({ level, title, description }: StatusCardProps) => {
  const getStatusColor = (level: StatusLevel) => {
    switch (level) {
      case "safe":
        return "text-green-500";
      case "warning":
        return "text-yellow-500";
      case "danger":
        return "text-red-500";
    }
  };

  const getStatusIcon = (level: StatusLevel) => {
    switch (level) {
      case "safe":
        return <CheckCircle className={`w-6 h-6 ${getStatusColor(level)}`} />;
      case "warning":
        return <Info className={`w-6 h-6 ${getStatusColor(level)}`} />;
      case "danger":
        return <AlertTriangle className={`w-6 h-6 ${getStatusColor(level)} alert-pulse`} />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {getStatusIcon(level)}
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          {description}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;