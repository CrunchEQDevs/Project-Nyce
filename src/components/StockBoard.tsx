'use client'
import React, { useState, useEffect } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, ComposedChart, Area,
  Scatter, ScatterChart, ZAxis, 
  ReferenceLine
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// Direct import of JSON files
import stockInfo2025 from "../utils/trades_data2025.json";
import stockInfo2024 from "../utils/trades_data2024.json";
import { select } from 'motion/react-client';
import ImprovedCombinedChart from './CombinedChart';
import ImprovedVolumeChart from './VolumeChart';
import RefinedVolumeChart from './VolumeChart';
import RefinedPriceChart from './PriceChart';
import RefinedTradeHistory from './TradeHistory';
import { Hubot_Sans, Fragment_Mono } from 'next/font/google';

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  weight: "400",
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  });

const dataSources = {
    "2024": stockInfo2024,
    "2025": stockInfo2025
  };
const TradeDashboard = () => {
    const [selectedYear, setSelectedYear] = useState("2025"); // Default to 2025
  const [tradeData, setTradeData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState('price'); // 'price', 'volume', 'candlestick', 'combined'

  useEffect(() => {
    // Modified function to use the imported stockInfo
    const loadData = async () => {
      try {
        // Get the correct data source based on selected year
        const data = dataSources[selectedYear];
        
        const trades = data.pageProps.trades;
        
        // Sort by timestamp (from oldest to newest)
        const sortedTrades = [...trades].sort((a, b) => 
          new Date(a.traded_datetime) - new Date(b.traded_datetime)
        );

        // Process data for chart visualization
        const processedTrades = sortedTrades.map(trade => ({
          id: trade.id,
          price: trade.price,
          volume: trade.volume,
          date: new Date(trade.traded_datetime),
          formattedDate: new Date(trade.traded_datetime).toLocaleDateString('en-US'),
          formattedTime: new Date(trade.traded_datetime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          fullDate: new Date(trade.traded_datetime).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit' }) + ' ' + 
                   new Date(trade.traded_datetime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          currency: trade.currency
        }));

        // Process daily data for candlestick charts
        const dailyTradeData = {};
        processedTrades.forEach(trade => {
          const dateKey = trade.formattedDate;
          
          if (!dailyTradeData[dateKey]) {
            dailyTradeData[dateKey] = {
              date: dateKey,
              open: trade.price, // First price of the day
              high: trade.price,
              low: trade.price,
              close: trade.price, // Last price of the day (will be replaced)
              volume: trade.volume,
              tradeCount: 1
            };
          } else {
            dailyTradeData[dateKey].high = Math.max(dailyTradeData[dateKey].high, trade.price);
            dailyTradeData[dateKey].low = Math.min(dailyTradeData[dateKey].low, trade.price);
            dailyTradeData[dateKey].close = trade.price; // Update to the most recent
            dailyTradeData[dateKey].volume += trade.volume;
            dailyTradeData[dateKey].tradeCount += 1;
          }
        });

        // Convert to array and sort by date
        const dailyTradeArray = Object.values(dailyTradeData).sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA - dateB;
        });

        // Add price change percentage
        if (dailyTradeArray.length > 1) {
          dailyTradeArray.forEach((day, index) => {
            if (index > 0) {
              const prevClose = dailyTradeArray[index - 1].close;
              day.change = ((day.close - prevClose) / prevClose) * 100;
            } else {
              day.change = 0;
            }
          });
        }

        setTradeData(processedTrades);
        setDailyData(dailyTradeArray);
        setLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Failed to load data. Please try again.");
        setLoading(false);
      }
    };

    loadData();
  }, [selectedYear]);

  // Function to determine color based on price change
  const getPriceChangeColor = (change) => {
    if (change > 0) return "#22c55e"; // Green for positive
    if (change < 0) return "#ef4444"; // Red for negative
    return "#6b7280"; // Gray for neutral
  };

  // Calculate statistics
  const stats = tradeData.length > 0 ? {
    startDate: tradeData[0].formattedDate,
    endDate: tradeData[tradeData.length - 1].formattedDate,
    avgPrice: (tradeData.reduce((sum, item) => sum + item.price, 0) / tradeData.length).toFixed(3),
    minPrice: Math.min(...tradeData.map(item => item.price)).toFixed(3),
    maxPrice: Math.max(...tradeData.map(item => item.price)).toFixed(3),
    totalVolume: tradeData.reduce((sum, item) => sum + item.volume, 0).toLocaleString(),
    tradeCount: tradeData.length,
    symbol: dataSources[selectedYear].pageProps.symbol || "CXS",
    currency: dataSources[selectedYear].pageProps.currency || "GBX"
  } : null;

  // Format price with currency
  const formatPrice = (price) => `${price} ${stats?.currency || 'GBX'}`;

  // Format volume value
  const formatVolume = (volume) => volume.toLocaleString();

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="font-bold text-sm">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color }} className="text-sm">
              {`${entry.name}: ${entry.dataKey === 'volume' 
                ? formatVolume(entry.value) 
                : formatPrice(entry.value)}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className={`${hubotSans.variable} ${fragmentMono.variable} w-full mx-auto p-4`}>
      {/* Loading overlay when changing years */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mb-3"></div>
            <p className="text-white">Loading {selectedYear} data...</p>
          </div>
        </div>
      )}
  
      {/* Header Section */}
      <div className="mb-6">
        {/* <p className="text-gray-300 mb-1">
          Period: {stats?.startDate} to {stats?.endDate}
        </p> */}
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold font-sans text-white">{stats?.symbol || 'CXS'} - Trade Analysis</h1>
        </div>
        
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-[#0E0E0E] border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Current Price</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">{formatPrice(tradeData[tradeData.length-1]?.price || 0)}</p>
              {dailyData.length > 1 && (
                <p className="text-sm flex items-center" style={{ 
                  color: getPriceChangeColor(dailyData[dailyData.length-1].change) 
                }}>
                  {dailyData[dailyData.length-1].change > 0 ? '▲' : dailyData[dailyData.length-1].change < 0 ? '▼' : ''}
                  {' '}
                  {Math.abs(dailyData[dailyData.length-1].change || 0).toFixed(2)}%
                </p>
              )}
            </CardContent>
          </Card>
          
          <Card className="bg-[#0E0E0E] border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Price Range</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-white">{stats?.minPrice} - {stats?.maxPrice} {stats?.currency}</p>
              <p className="text-sm text-gray-400">Min - Max</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0E0E0E] border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-white">{stats?.totalVolume}</p>
              <p className="text-sm text-gray-400">{stats?.tradeCount} trades</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0E0E0E] border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Average Price</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-white">{formatPrice(stats?.avgPrice || 0)}</p>
              <p className="text-sm text-gray-400">Average</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex mb-4 border-b border-gray-800">
        <button 
          className={`px-4 py-2 font-medium font-mono ${tab === 'price' ? 'text-yellow-400 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setTab('price')}
        >
          Price Variation
        </button>
        <button 
          className={`px-4 py-2 font-medium font-mono ${tab === 'volume' ? 'text-yellow-400 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setTab('volume')}
        >
          Trading Volume
        </button>
        <button 
          className={`px-4 py-2 font-medium font-mono ${tab === 'combined' ? 'text-yellow-400 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setTab('combined')}
        >
          Combined View
        </button>
      </div>
      
      {/* Chart Section */}
      <div className="mb-6">
      {tab === 'price' && (
        <RefinedPriceChart 
            data={tradeData} 
            selectedYear={selectedYear}
            onYearChange={(value) => {
            setLoading(true);
            setSelectedYear(value);
            }}
            avgPrice={parseFloat(stats?.avgPrice || '0')}
            minPrice={parseFloat(stats?.minPrice || '0')}
            maxPrice={parseFloat(stats?.maxPrice || '0')}
            currency={stats?.currency || "GBX"}
        />
        )}
        
        {tab === 'volume' && (
        <RefinedVolumeChart 
            data={dailyData} 
            selectedYear={selectedYear}
            onYearChange={(value) => {
            setLoading(true);
            setSelectedYear(value);
            }}
            currency={stats?.currency || "GBX"}
        />
        )}
        
    {tab === 'combined' && (
        <ImprovedCombinedChart 
            data={dailyData} 
            selectedYear={selectedYear}
            onYearChange={(value) => {
            setLoading(true);
            setSelectedYear(value);
            }}
            currency={stats?.currency || "GBX"}
        />
    )}
        </div>
      
    <RefinedTradeHistory 
        data={dailyData} 
        selectedYear={selectedYear}
        onYearChange={(value) => {
            setLoading(true);
            setSelectedYear(value);
        }}
        currency={stats?.currency || "GBX"}
    />
    </div>
  );
};

export default TradeDashboard;