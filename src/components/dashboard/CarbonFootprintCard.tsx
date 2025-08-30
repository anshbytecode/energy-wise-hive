import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, TreePine } from "lucide-react";

interface CarbonFootprintCardProps {
  currentFootprint: number;
  targetFootprint: number;
  treesEquivalent: number;
}

export function CarbonFootprintCard({ 
  currentFootprint, 
  targetFootprint, 
  treesEquivalent 
}: CarbonFootprintCardProps) {
  const progressPercentage = Math.max(0, Math.min(100, (1 - currentFootprint / targetFootprint) * 100));
  const isOnTarget = currentFootprint <= targetFootprint;

  return (
    <Card className="relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ background: 'var(--gradient-carbon)' }}
      />
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center space-x-2">
          <Leaf className="h-5 w-5 text-energy-primary" />
          <span>Carbon Footprint</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">
              {currentFootprint.toFixed(1)} <span className="text-sm font-normal text-muted-foreground">kg CO₂</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Target: {targetFootprint} kg CO₂
            </div>
          </div>
          <div className={`text-2xl ${isOnTarget ? 'text-energy-primary' : 'text-energy-warning'}`}>
            {isOnTarget ? '✓' : '⚠'}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress to target</span>
            <span className="font-medium">{progressPercentage.toFixed(1)}%</span>
          </div>
          <Progress 
            value={progressPercentage} 
            className="h-2"
            style={{
              background: 'hsl(var(--muted))',
            }}
          />
        </div>

        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <TreePine className="h-4 w-4 text-energy-primary" />
            <span className="text-sm">Trees to offset</span>
          </div>
          <span className="font-semibold">{treesEquivalent} trees</span>
        </div>

        <div className="text-xs text-muted-foreground">
          Based on average tree absorption of 22kg CO₂ per year
        </div>
      </CardContent>
    </Card>
  );
}