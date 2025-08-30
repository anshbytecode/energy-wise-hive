import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { format, parseISO } from 'date-fns';

interface ConsumptionChartProps {
  data: Array<{
    date: string;
    consumption: number;
    prediction?: number;
  }>;
  title: string;
  showPredictions?: boolean;
}

export function ConsumptionChart({ data, title, showPredictions = false }: ConsumptionChartProps) {
  const formatDate = (dateStr: string) => {
    return format(parseISO(dateStr), 'MMM dd');
  };

  const formatTooltipDate = (dateStr: string) => {
    return format(parseISO(dateStr), 'MMM dd, yyyy');
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>{title}</span>
          {showPredictions && (
            <span className="text-sm text-muted-foreground font-normal">
              (includes 7-day predictions)
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              tickFormatter={formatDate}
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              labelFormatter={(value) => formatTooltipDate(value)}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              formatter={(value: number, name: string) => [
                `${value} kWh`,
                name === 'consumption' ? 'Actual' : 'Predicted'
              ]}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="consumption"
              stroke="hsl(var(--energy-primary))"
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--energy-primary))', strokeWidth: 2, r: 4 }}
              name="consumption"
            />
            {showPredictions && (
              <Line
                type="monotone"
                dataKey="prediction"
                stroke="hsl(var(--energy-accent))"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: 'hsl(var(--energy-accent))', strokeWidth: 2, r: 4 }}
                name="prediction"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}