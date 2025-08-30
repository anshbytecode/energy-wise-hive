// Mock data for the Smart Energy Management System

export interface EnergyConsumption {
  date: string;
  consumption: number;
  cost: number;
  carbonFootprint: number;
  prediction?: number;
}

export interface EnergyMetrics {
  totalConsumption: number;
  totalCost: number;
  carbonFootprint: number;
  efficiency: number;
  monthlySavings: number;
  weeklyAverage: number;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  potentialSavings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'Heating' | 'Lighting' | 'Appliances' | 'Insulation' | 'Solar';
  impact: 'High' | 'Medium' | 'Low';
}

// Historical data for the past 30 days
export const energyConsumptionData: EnergyConsumption[] = [
  { date: '2024-01-01', consumption: 45.2, cost: 12.3, carbonFootprint: 18.5 },
  { date: '2024-01-02', consumption: 52.1, cost: 14.1, carbonFootprint: 21.3 },
  { date: '2024-01-03', consumption: 38.9, cost: 10.5, carbonFootprint: 15.9 },
  { date: '2024-01-04', consumption: 47.8, cost: 13.0, carbonFootprint: 19.6 },
  { date: '2024-01-05', consumption: 41.2, cost: 11.2, carbonFootprint: 16.8 },
  { date: '2024-01-06', consumption: 49.5, cost: 13.4, carbonFootprint: 20.3 },
  { date: '2024-01-07', consumption: 43.7, cost: 11.8, carbonFootprint: 17.9 },
  { date: '2024-01-08', consumption: 55.3, cost: 15.0, carbonFootprint: 22.7 },
  { date: '2024-01-09', consumption: 39.1, cost: 10.6, carbonFootprint: 16.0 },
  { date: '2024-01-10', consumption: 46.9, cost: 12.7, carbonFootprint: 19.2 },
  { date: '2024-01-11', consumption: 44.2, cost: 12.0, carbonFootprint: 18.1 },
  { date: '2024-01-12', consumption: 51.7, cost: 14.0, carbonFootprint: 21.2 },
  { date: '2024-01-13', consumption: 37.8, cost: 10.2, carbonFootprint: 15.5 },
  { date: '2024-01-14', consumption: 48.3, cost: 13.1, carbonFootprint: 19.8 },
  { date: '2024-01-15', consumption: 42.6, cost: 11.5, carbonFootprint: 17.4 },
  { date: '2024-01-16', consumption: 50.2, cost: 13.6, carbonFootprint: 20.6 },
  { date: '2024-01-17', consumption: 45.8, cost: 12.4, carbonFootprint: 18.8 },
  { date: '2024-01-18', consumption: 53.9, cost: 14.6, carbonFootprint: 22.1 },
  { date: '2024-01-19', consumption: 40.4, cost: 10.9, carbonFootprint: 16.6 },
  { date: '2024-01-20', consumption: 47.1, cost: 12.8, carbonFootprint: 19.3 },
  { date: '2024-01-21', consumption: 43.5, cost: 11.8, carbonFootprint: 17.8 },
  { date: '2024-01-22', consumption: 52.4, cost: 14.2, carbonFootprint: 21.5 },
  { date: '2024-01-23', consumption: 38.7, cost: 10.5, carbonFootprint: 15.8 },
  { date: '2024-01-24', consumption: 49.1, cost: 13.3, carbonFootprint: 20.1 },
  { date: '2024-01-25', consumption: 41.8, cost: 11.3, carbonFootprint: 17.1 },
  { date: '2024-01-26', consumption: 50.8, cost: 13.8, carbonFootprint: 20.8 },
  { date: '2024-01-27', consumption: 44.9, cost: 12.2, carbonFootprint: 18.4 },
  { date: '2024-01-28', consumption: 54.1, cost: 14.7, carbonFootprint: 22.2 },
  { date: '2024-01-29', consumption: 39.6, cost: 10.7, carbonFootprint: 16.2 },
  { date: '2024-01-30', consumption: 46.3, cost: 12.5, carbonFootprint: 19.0 },
];

// Future predictions for the next 7 days
export const energyPredictionData: EnergyConsumption[] = [
  { date: '2024-01-31', consumption: 45.1, cost: 12.2, carbonFootprint: 18.5, prediction: 45.1 },
  { date: '2024-02-01', consumption: 43.8, cost: 11.9, carbonFootprint: 17.9, prediction: 43.8 },
  { date: '2024-02-02', consumption: 48.2, cost: 13.1, carbonFootprint: 19.7, prediction: 48.2 },
  { date: '2024-02-03', consumption: 41.5, cost: 11.2, carbonFootprint: 17.0, prediction: 41.5 },
  { date: '2024-02-04', consumption: 49.7, cost: 13.5, carbonFootprint: 20.4, prediction: 49.7 },
  { date: '2024-02-05', consumption: 46.4, cost: 12.6, carbonFootprint: 19.0, prediction: 46.4 },
  { date: '2024-02-06', consumption: 52.3, cost: 14.2, carbonFootprint: 21.4, prediction: 52.3 },
];

export const currentMetrics: EnergyMetrics = {
  totalConsumption: 1384.5, // kWh this month
  totalCost: 375.2, // USD this month
  carbonFootprint: 567.8, // kg CO2 this month
  efficiency: 87, // percentage
  monthlySavings: 45.30, // USD compared to last month
  weeklyAverage: 46.2 // kWh per day
};

export const recommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Upgrade to LED Lighting',
    description: 'Replace remaining incandescent bulbs with energy-efficient LED lights to reduce lighting costs by up to 75%.',
    potentialSavings: 18.50,
    difficulty: 'Easy',
    category: 'Lighting',
    impact: 'Medium'
  },
  {
    id: '2',
    title: 'Install Smart Thermostat',
    description: 'A programmable smart thermostat can automatically adjust temperature when you\'re away, saving 10-23% on heating and cooling.',
    potentialSavings: 32.40,
    difficulty: 'Medium',
    category: 'Heating',
    impact: 'High'
  },
  {
    id: '3',
    title: 'Seal Air Leaks',
    description: 'Weatherstrip doors and windows to prevent heated or cooled air from escaping your home.',
    potentialSavings: 15.20,
    difficulty: 'Easy',
    category: 'Insulation',
    impact: 'Medium'
  },
  {
    id: '4',
    title: 'Unplug Vampire Devices',
    description: 'Electronics in standby mode consume energy. Unplug devices when not in use or use smart power strips.',
    potentialSavings: 8.90,
    difficulty: 'Easy',
    category: 'Appliances',
    impact: 'Low'
  },
  {
    id: '5',
    title: 'Consider Solar Panels',
    description: 'Installing solar panels could offset 60-90% of your electricity usage and provide long-term savings.',
    potentialSavings: 125.80,
    difficulty: 'Hard',
    category: 'Solar',
    impact: 'High'
  }
];

export const hourlyConsumption = [
  { hour: '00:00', consumption: 1.2, prediction: 1.1 },
  { hour: '01:00', consumption: 1.0, prediction: 0.9 },
  { hour: '02:00', consumption: 0.9, prediction: 0.8 },
  { hour: '03:00', consumption: 0.8, prediction: 0.7 },
  { hour: '04:00', consumption: 0.7, prediction: 0.8 },
  { hour: '05:00', consumption: 0.9, prediction: 1.0 },
  { hour: '06:00', consumption: 1.8, prediction: 1.9 },
  { hour: '07:00', consumption: 2.4, prediction: 2.3 },
  { hour: '08:00', consumption: 2.8, prediction: 2.6 },
  { hour: '09:00', consumption: 2.1, prediction: 2.0 },
  { hour: '10:00', consumption: 1.9, prediction: 1.8 },
  { hour: '11:00', consumption: 2.0, prediction: 1.9 },
  { hour: '12:00', consumption: 2.2, prediction: 2.1 },
  { hour: '13:00', consumption: 2.0, prediction: 1.9 },
  { hour: '14:00', consumption: 1.8, prediction: 1.7 },
  { hour: '15:00', consumption: 1.9, prediction: 1.8 },
  { hour: '16:00', consumption: 2.1, prediction: 2.0 },
  { hour: '17:00', consumption: 2.6, prediction: 2.5 },
  { hour: '18:00', consumption: 3.2, prediction: 3.1 },
  { hour: '19:00', consumption: 3.8, prediction: 3.6 },
  { hour: '20:00', consumption: 3.5, prediction: 3.4 },
  { hour: '21:00', consumption: 2.9, prediction: 2.8 },
  { hour: '22:00', consumption: 2.3, prediction: 2.2 },
  { hour: '23:00', consumption: 1.7, prediction: 1.6 },
];