export type AlertItem = {
  id: string;
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  timestamp: string;
};