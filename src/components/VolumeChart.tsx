import React, { useState, useEffect } from 'react';
import {
 BarChart, Bar, XAxis, YAxis, CartesianGrid,
 Tooltip, Legend, ResponsiveContainer, ReferenceLine, Label
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";

interface DailyTradeData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  tradeCount: number;
  change?: number;
  displayDate?: string;
  month?: number;
  quarter?: number;
}

interface RefinedVolumeChartProps {
  data: DailyTradeData[];
  selectedYear: string;
  onYearChange?: (year: string) => void;
  currency?: string;
}

const RefinedVolumeChart: React.FC<RefinedVolumeChartProps> = ({
  data,
  selectedYear,
  onYearChange = null,
  currency = "GBX"
}) => {
  const [dataRange, setDataRange] = useState<'all' | 'q1' | 'q2' | 'q3' | 'q4'>('all');
  const [showAvgLine, setShowAvgLine] = useState<boolean>(true);
  const [processedData, setProcessedData] = useState<DailyTradeData[]>([]);

  // Function to format values
  const formatPrice = (price: number): string => `${price.toFixed(3)} ${currency}`;
  const formatVolume = (volume: number): string => volume.toLocaleString();

  // Process received data
  useEffect(() => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.warn("Invalid data received in RefinedVolumeChart:", data);
      setProcessedData([]);
      return;
    }
    
    try {
      // Convert received data to required format
      const enhancedData = data.map(day => {
        // Extract month from date in DD/MM/YYYY format
        let month = 1;
        try {
          if (day.date && day.date.includes('/')) {
            // Date format DD/MM/YYYY
            month = parseInt(day.date.split('/')[1], 10);
          }
        } catch (e) {
          console.warn("Error extracting month from date:", day.date, e);
        }
        
        const quarter = Math.ceil(month / 3);
        // Date format used for display
        const displayDate = day.date
          ? day.date.split('/').slice(0, 2).join('/')
          : 'Unknown date';
          
        return {
          ...day,
          displayDate,
          month,
          quarter
        };
      });
      
      setProcessedData(enhancedData);
    } catch (error) {
      console.error("Error processing data in RefinedVolumeChart:", error);
      setProcessedData([]);
    }
  }, [data]);

  // Volume statistics calculation
  const avgVolume = processedData.length > 0
    ? processedData.reduce((sum, day) => sum + day.volume, 0) / processedData.length
    : 0;
    
  const maxVolume = processedData.length > 0
    ? Math.max(...processedData.map(day => day.volume))
    : 0;

  // Filter data based on selected period
  const filteredData = processedData.filter(day => {
    if (dataRange === 'all') return true;
    if (dataRange === 'q1') return day.quarter === 1;
    if (dataRange === 'q2') return day.quarter === 2;
    if (dataRange === 'q3') return day.quarter === 3;
    if (dataRange === 'q4') return day.quarter === 4;
    return true;
  });

  // Custom Tooltip
  const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dayData = payload[0].payload;
      return (
        <div className="bg-[#0E0E0E] p-3 border border-gray-700 rounded-md shadow-lg">
          <p className="text-white font-bold mb-1">{label}</p>
          <div className="space-y-1">
            <p className="text-green-500">
              <span className="font-medium">Volume:</span> {formatVolume(payload[0].value)}
            </p>
            {dayData.open !== undefined && (
              <div className="pt-1 border-t border-gray-700 mt-1">
                <p className="text-blue-400">
                  <span className="font-medium">Opening:</span> {formatPrice(dayData.open)}
                </p>
                <p className="text-green-400">
                  <span className="font-medium">High:</span> {formatPrice(dayData.high)}
                </p>
                <p className="text-red-400">
                  <span className="font-medium">Low:</span> {formatPrice(dayData.low)}
                </p>
                <p className="text-blue-400">
                  <span className="font-medium">Close:</span> {formatPrice(dayData.close)}
                </p>
              </div>
            )}
            {dayData.change !== undefined && (
              <p className={dayData.change >= 0 ? "text-green-400" : "text-red-400"}>
                <span className="font-medium">Change:</span> {(dayData.change).toFixed(2)}%
              </p>
            )}
            {dayData.tradeCount !== undefined && (
              <p className="text-gray-300">
                <span className="font-medium">Transactions:</span> {dayData.tradeCount}
              </p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  // If no data, display a message
  if (filteredData.length === 0) {
    return (
      <Card className="bg-[#0E0E0E] border border-gray-800 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white">Trading Volume by Date</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 text-gray-400">
            <p>No data available for the selected period. Please verify that data is being passed correctly.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-zinc-900 border border-gray-800 shadow-xl">
      <CardHeader className="pb-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-white">
            Trading <span className='text-yellow-400'>Volume</span> by Date{selectedYear && `(${selectedYear})`}
          </CardTitle>
          <div className="flex space-x-3">
            {onYearChange && (
              <Select
                value={selectedYear}
                onValueChange={onYearChange}
              >
                <SelectTrigger className="w-[90px] h-8 bg-[#131A2B] border-gray-700 text-white">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="bg-[#131A2B] border-gray-700 text-white">
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
            )}
            <Select
              value={dataRange}
              onValueChange={(value: any) => setDataRange(value)}
            >
              <SelectTrigger className="w-[120px] h-8 bg-[#131A2B] border-gray-700 text-white">
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent className="bg-[#131A2B] border-gray-700 text-white">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="q1">Q1 (Jan-Mar)</SelectItem>
                <SelectItem value="q2">Q2 (Apr-Jun)</SelectItem>
                <SelectItem value="q3">Q3 (Jul-Sep)</SelectItem>
                <SelectItem value="q4">Q4 (Oct-Dec)</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="avgVolumeLine"
                checked={showAvgLine}
                onChange={() => setShowAvgLine(!showAvgLine)}
                className="w-4 h-4 accent-blue-500"
              />
              <label htmlFor="avgVolumeLine" className="text-white text-sm">Average Volume</label>
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-sm mt-2">
          {filteredData.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              <span>Period: {filteredData[0].date} - {filteredData[filteredData.length-1].date}</span>
              {filteredData[0].tradeCount !== undefined && (
                <span>Total transactions: {filteredData.reduce((sum, day) => sum + day.tradeCount, 0)}</span>
              )}
              <span>Average volume: {formatVolume(avgVolume)}</span>
            </div>
          ) : (
            <span>No data available for the selected period</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{ top: 20, right: 30, left: 0, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#252E3F" />
              <XAxis
                dataKey="date"
                tick={{ fill: '#ccc' }}
                tickLine={{ stroke: '#ffffff' }}
                axisLine={{ stroke: '#252E3F' }}
                angle={-30}
                textAnchor="end"
                height={50}
              />
              <YAxis
                tickFormatter={(value) => `${(value/1000).toFixed(0)}k`}
                tick={{ fill: '#ccc' }}
                tickLine={{ stroke: '#252E3F' }}
                axisLine={{ stroke: '#252E3F' }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: 'rgba(15, 22, 41, 0.3)' }} // Fixed: darker and more transparent shadow
              />
              <Legend
                verticalAlign="top"
                align="right" // Moved to the right to avoid overlap
                iconType="circle"
                wrapperStyle={{
                  paddingBottom: 10,
                  top: -10, // Adjusted upward to avoid overlap with average line
                  right: 10
                }}
                formatter={(value) => <span style={{ color: '#ccc' }}>{value}</span>}
              />
              <Bar
                dataKey="volume"
                name="Volume"
                fillOpacity={0.9}
                barSize={30}
                // More sophisticated bar coloring
                fill={(entry: DailyTradeData) => {
                  const ratio = entry.volume / maxVolume;
                  // Subtle color variation, from dark green to light green
                  return `rgb(0, ${Math.floor(140 + (ratio * 80))}, ${Math.floor(60 + (ratio * 100))})`;
                }}
              />
              {/* Add average volume line if enabled */}
              {showAvgLine && (
                <ReferenceLine
                  y={avgVolume}
                  stroke="#FF9800"
                  strokeDasharray="3 3"
                  strokeWidth={2}
                  // Added label for better visualization
                  label={{
                    position: 'right',
                    value: 'Average Volume',
                    fill: '#FF9800',
                    fontSize: 12
                  }}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Additional information - Statistical summary */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#131A2B] p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Total Volume</div>
            <div className="text-white text-lg font-bold">
              {formatVolume(filteredData.reduce((sum, day) => sum + day.volume, 0))}
            </div>
          </div>
          <div className="bg-[#131A2B] p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Maximum Daily Volume</div>
            <div className="text-white text-lg font-bold">
              {formatVolume(Math.max(...filteredData.map(d => d.volume)))}
            </div>
            <div className="text-gray-400 text-xs mt-1">
              {filteredData.find(d => d.volume === Math.max(...filteredData.map(d => d.volume)))?.date}
            </div>
          </div>
          <div className="bg-[#131A2B] p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Daily Average</div>
            <div className="text-white text-lg font-bold">
              {formatVolume(avgVolume)}
            </div>
            <div className="text-gray-400 text-xs mt-1">
              Transactions: {(filteredData.reduce((sum, day) => sum + day.tradeCount, 0) / filteredData.length).toFixed(1)} per day
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RefinedVolumeChart;