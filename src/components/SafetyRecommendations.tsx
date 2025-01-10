import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface Recommendation {
  id: string;
  title: string;
  description: string;
}

interface SafetyRecommendationsProps {
  recommendations: Recommendation[];
}

const SafetyRecommendations = ({ recommendations }: SafetyRecommendationsProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Safety Recommendations</CardTitle>
        <Shield className="w-6 h-6 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="border-b pb-4 last:border-b-0">
              <h3 className="font-semibold mb-2">{rec.title}</h3>
              <p className="text-sm text-muted-foreground">{rec.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SafetyRecommendations;