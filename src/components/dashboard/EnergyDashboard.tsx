import { MetricsCard } from "./MetricsCard";
import { ConsumptionChart } from "./ConsumptionChart";
import { HourlyChart } from "./HourlyChart";
import { RecommendationsPanel } from "./RecommendationsPanel";
import { CarbonFootprintCard } from "./CarbonFootprintCard";
import { 
  energyConsumptionData, 
  energyPredictionData, 
  currentMetrics, 
  recommendations,
  hourlyConsumption 
} from "@/data/energyData";
import { 
  Zap, 
  DollarSign, 
  Activity, 
  Percent, 
  TrendingDown,
  Clock 
} from "lucide-react";

export function EnergyDashboard() {
  // Combine historical and prediction data
  const combinedData = [...energyConsumptionData, ...energyPredictionData];
  
  // Calculate trees needed to offset carbon footprint
  const treesEquivalent = Math.ceil(currentMetrics.carbonFootprint / 22);
  const targetFootprint = 450; // Target reduction

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-energy-primary to-energy-secondary bg-clip-text text-transparent">
            Smart Energy Management System
          </h1>
          <p className="text-muted-foreground">
            Monitor, analyze, and optimize your energy consumption for maximum efficiency and sustainability
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          <MetricsCard
            title="Total Consumption"
            value={currentMetrics.totalConsumption}
            unit="kWh"
            change={-8.2}
            changeType="decrease"
            icon={<Zap />}
            gradient="--gradient-energy"
            className="lg:col-span-2"
          />
          <MetricsCard
            title="Monthly Cost"
            value={`$${currentMetrics.totalCost}`}
            change={-12.1}
            changeType="decrease"
            icon={<DollarSign />}
            gradient="--gradient-cost"
            className="lg:col-span-1"
          />
          <MetricsCard
            title="Efficiency Score"
            value={currentMetrics.efficiency}
            unit="%"
            change={5.3}
            changeType="increase"
            icon={<Percent />}
            className="lg:col-span-1"
          />
          <MetricsCard
            title="Monthly Savings"
            value={`$${currentMetrics.monthlySavings}`}
            change={15.7}
            changeType="decrease"
            icon={<TrendingDown />}
            className="lg:col-span-1"
          />
          <MetricsCard
            title="Daily Average"
            value={currentMetrics.weeklyAverage}
            unit="kWh"
            change={-6.8}
            changeType="decrease"
            icon={<Activity />}
            className="lg:col-span-1"
          />
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ConsumptionChart 
              data={combinedData}
              title="Energy Consumption Trends & Predictions"
              showPredictions={true}
            />
          </div>
          <CarbonFootprintCard
            currentFootprint={currentMetrics.carbonFootprint}
            targetFootprint={targetFootprint}
            treesEquivalent={treesEquivalent}
          />
        </div>

        {/* Detailed Analysis Row */}
        <div className="grid gap-6 lg:grid-cols-3">
          <HourlyChart data={hourlyConsumption} />
          <div className="lg:col-span-2">
            <RecommendationsPanel recommendations={recommendations} />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8">
          <div className="flex items-center justify-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Last updated: {new Date().toLocaleString()}</span>
          </div>
          <p className="mt-2">
            Smart Energy Management System - Optimizing energy efficiency through data-driven insights
          </p>
        </div>
      </div>
    </div>
  );
}