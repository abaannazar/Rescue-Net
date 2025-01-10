import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertItem } from "@/types/alerts";
import AlertDetail from "./AlertDetail";

interface AlertsListProps {
  alerts: AlertItem[];
}

const AlertsList = ({ alerts }: AlertsListProps) => {
  return (
    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
      <div className="space-y-4">
        {alerts.map((alert) => (
          <AlertDetail key={alert.id} alert={alert} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default AlertsList;