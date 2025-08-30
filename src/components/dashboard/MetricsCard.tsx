import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string | number;
  unit?: string;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
  gradient?: string;
}

export function MetricsCard({
  title,
  value,
  unit,
  change,
  changeType = 'neutral',
  icon,
  className,
  gradient
}: MetricsCardProps) {
  const getTrendIcon = () => {
    switch (changeType) {
      case 'increase':
        return <TrendingUp className="h-4 w-4 text-energy-warning" />;
      case 'decrease':
        return <TrendingDown className="h-4 w-4 text-energy-primary" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = () => {
    switch (changeType) {
      case 'increase':
        return 'text-energy-warning';
      case 'decrease':
        return 'text-energy-primary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card className={cn("relative overflow-hidden border-0", className)}>
      {gradient && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{ background: `var(${gradient})` }}
        />
      )}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className="h-4 w-4 text-muted-foreground">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="flex items-baseline space-x-2">
          <div className="text-2xl font-bold">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </div>
          {unit && (
            <span className="text-sm text-muted-foreground">{unit}</span>
          )}
        </div>
        {change !== undefined && (
          <div className="flex items-center space-x-1 mt-1">
            {getTrendIcon()}
            <span className={cn("text-xs", getTrendColor())}>
              {Math.abs(change)}% from last month
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}