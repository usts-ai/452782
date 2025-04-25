import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  apprenants: number;
  completions: number;
  satisfaction: number;
}

const data: DataPoint[] = [
  { name: 'Jan', apprenants: 320, completions: 240, satisfaction: 96 },
  { name: 'Fév', apprenants: 380, completions: 310, satisfaction: 97 },
  { name: 'Mar', apprenants: 520, completions: 430, satisfaction: 95 },
  { name: 'Avr', apprenants: 480, completions: 410, satisfaction: 94 },
  { name: 'Mai', apprenants: 600, completions: 520, satisfaction: 98 },
  { name: 'Juin', apprenants: 780, completions: 690, satisfaction: 97 },
  { name: 'Juil', apprenants: 850, completions: 740, satisfaction: 98 },
];

const AnalyticsChart: React.FC = () => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md p-6 h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Évolution des métriques</h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
            <span className="text-xs text-gray-600">Apprenants</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            <span className="text-xs text-gray-600">Completions</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
            <span className="text-xs text-gray-600">Satisfaction</span>
          </div>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorApprenants" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorCompletions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSatisfaction" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fill: '#6B7280', fontSize: 12 }} />
            <YAxis tick={{ fill: '#6B7280', fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: 'none', 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                padding: '0.75rem' 
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="apprenants" 
              stroke="#3B82F6" 
              fillOpacity={1} 
              fill="url(#colorApprenants)" 
              activeDot={{ r: 8 }}
              isAnimationActive={true}
              animationDuration={1500}
            />
            <Area 
              type="monotone" 
              dataKey="completions" 
              stroke="#10B981" 
              fillOpacity={1} 
              fill="url(#colorCompletions)" 
              activeDot={{ r: 8 }}
              isAnimationActive={true}
              animationDuration={1500}
              animationBegin={300}
            />
            <Area 
              type="monotone" 
              dataKey="satisfaction" 
              stroke="#8B5CF6" 
              fillOpacity={1} 
              fill="url(#colorSatisfaction)" 
              activeDot={{ r: 8 }}
              isAnimationActive={true}
              animationDuration={1500}
              animationBegin={600}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default AnalyticsChart;
