import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, Thermometer, Home, Plug, Sun, ChevronRight } from "lucide-react";
import type { Recommendation } from "@/data/energyData";

interface RecommendationsPanelProps {
  recommendations: Recommendation[];
}

const getCategoryIcon = (category: Recommendation['category']) => {
  switch (category) {
    case 'Lighting':
      return <Lightbulb className="h-4 w-4" />;
    case 'Heating':
      return <Thermometer className="h-4 w-4" />;
    case 'Insulation':
      return <Home className="h-4 w-4" />;
    case 'Appliances':
      return <Plug className="h-4 w-4" />;
    case 'Solar':
      return <Sun className="h-4 w-4" />;
    default:
      return <Lightbulb className="h-4 w-4" />;
  }
};

const getDifficultyColor = (difficulty: Recommendation['difficulty']) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-energy-primary/20 text-energy-primary hover:bg-energy-primary/30';
    case 'Medium':
      return 'bg-energy-accent/20 text-energy-accent hover:bg-energy-accent/30';
    case 'Hard':
      return 'bg-energy-warning/20 text-energy-warning hover:bg-energy-warning/30';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getImpactColor = (impact: Recommendation['impact']) => {
  switch (impact) {
    case 'High':
      return 'bg-energy-primary/20 text-energy-primary';
    case 'Medium':
      return 'bg-energy-secondary/20 text-energy-secondary';
    case 'Low':
      return 'bg-muted/50 text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export function RecommendationsPanel({ recommendations }: RecommendationsPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Lightbulb className="h-5 w-5 text-energy-accent" />
          <span>Smart Recommendations</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.slice(0, 4).map((recommendation) => (
          <div
            key={recommendation.id}
            className="p-4 border border-border rounded-lg space-y-3 hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                {getCategoryIcon(recommendation.category)}
                <h4 className="font-medium">{recommendation.title}</h4>
              </div>
              <div className="flex items-center space-x-1">
                <Badge variant="outline" className={getDifficultyColor(recommendation.difficulty)}>
                  {recommendation.difficulty}
                </Badge>
                <Badge variant="outline" className={getImpactColor(recommendation.impact)}>
                  {recommendation.impact}
                </Badge>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {recommendation.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Potential savings:</span>
                <span className="font-semibold text-energy-primary">
                  ${recommendation.potentialSavings}/month
                </span>
              </div>
              <Button variant="ghost" size="sm" className="text-energy-primary hover:text-energy-primary/80">
                Learn More
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        ))}
        
        <Button variant="outline" className="w-full mt-4">
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  );
}