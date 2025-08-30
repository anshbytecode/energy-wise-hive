import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface HourlyChartProps {
  data: Array<{
    hour: string;
    consumption: number;
    prediction: number;
  }>;
}

export function HourlyChart({ data }: HourlyChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Hourly Usage Pattern</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="hour" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
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
            <Area
              type="monotone"
              dataKey="consumption"
              stackId="1"
              stroke="hsl(var(--energy-primary))"
              fill="hsl(var(--energy-primary))"
              fillOpacity={0.6}
              name="consumption"
            />
            <Area
              type="monotone"
              dataKey="prediction"
              stackId="2"
              stroke="hsl(var(--energy-accent))"
              fill="hsl(var(--energy-accent))"
              fillOpacity={0.3}
              strokeDasharray="3 3"
              name="prediction"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}