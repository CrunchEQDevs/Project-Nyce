import React, { useState, useEffect, useMemo } from 'react';
import { 
  Card, CardHeader, CardTitle, CardContent, CardFooter 
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Hubot_Sans } from 'next/font/google';

interface DayData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  tradeCount: number;
  change?: number;
}

interface TradeHistoryProps {
  data: DayData[];
  selectedYear: string;
  onYearChange?: (year: string) => void;
  currency?: string;
}
const hubotSans = Hubot_Sans({
    variable: "--font-hubot-sans",
    subsets: ["latin"],
    })
const RefinedTradeHistory: React.FC<TradeHistoryProps> = ({
  data,
  selectedYear,
  onYearChange = null,
  currency = "GBX"
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' }>({
    key: 'date',
    direction: 'descending'
  });
  const [viewMode, setViewMode] = useState<'all' | 'month' | 'quarter'>('all');
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValues, setFilterValues] = useState({
    minVolume: '',
    maxVolume: '',
    minPrice: '',
    maxPrice: '',
    minChange: '',
    maxChange: ''
  });

  // Function to get color based on price change
  const getPriceChangeColor = (change: number | undefined) => {
    if (!change) return "#6b7280"; // Gray for null
    if (change > 0) return "#22c55e"; // Green for positive
    if (change < 0) return "#ef4444"; // Red for negative
    return "#6b7280"; // Gray for neutral
  };

  // Function to format price
  const formatPrice = (price: number) => `${price.toFixed(3)} ${currency}`;

  // Function to sort data
  const sortedData = useMemo(() => {
    if (!data) return [];
    
    // Create a copy to avoid modifying original data
    const sortableData = [...data];
    
    // Apply sorting
    sortableData.sort((a, b) => {
      if (sortConfig.key === 'date') {
        // Convert date strings to Date objects for proper comparison
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        return sortConfig.direction === 'ascending' 
          ? dateA.getTime() - dateB.getTime() 
          : dateB.getTime() - dateA.getTime();
      }
      
      // For numeric fields
      const aValue = a[sortConfig.key as keyof DayData] as number;
      const bValue = b[sortConfig.key as keyof DayData] as number;
      
      return sortConfig.direction === 'ascending' 
        ? aValue - bValue 
        : bValue - aValue;
    });
    
    return sortableData;
  }, [data, sortConfig]);

  // Function to filter data
  const filteredData = useMemo(() => {
    if (!sortedData) return [];
    
    return sortedData.filter(day => {
      // Text search filter (on date)
      if (searchTerm && !day.date.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Numeric filters
      if (filterValues.minVolume && day.volume < parseFloat(filterValues.minVolume)) return false;
      if (filterValues.maxVolume && day.volume > parseFloat(filterValues.maxVolume)) return false;
      
      if (filterValues.minPrice && day.close < parseFloat(filterValues.minPrice)) return false;
      if (filterValues.maxPrice && day.close > parseFloat(filterValues.maxPrice)) return false;
      
      if (filterValues.minChange && day.change !== undefined && day.change < parseFloat(filterValues.minChange)) return false;
      if (filterValues.maxChange && day.change !== undefined && day.change > parseFloat(filterValues.maxChange)) return false;
      
      return true;
    });
  }, [sortedData, searchTerm, filterValues]);

  // Data grouping
  const groupedData = useMemo(() => {
    if (!filteredData) return {};
    
    const groups: Record<string, DayData[]> = {};
    
    filteredData.forEach(day => {
      let groupKey = '';
      const dateParts = day.date.split('/');
      
      if (dateParts.length === 3) {
        // Date in format MM/DD/YYYY
        const month = parseInt(dateParts[1]);
        const year = dateParts[2];
        
        if (viewMode === 'month') {
          // Group by month
          const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ];
          groupKey = `${monthNames[month - 1]} ${year}`;
        } else if (viewMode === 'quarter') {
          // Group by quarter
          const quarter = Math.ceil(month / 3);
          groupKey = `${year} - Q${quarter}`;
        } else {
          // No grouping (all mode)
          groupKey = 'all';
        }
      } else {
        // Unexpected date format
        groupKey = 'unknown';
      }
      
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      
      groups[groupKey].push(day);
    });
    
    return groups;
  }, [filteredData, viewMode]);

  // Pagination
  const paginatedData = useMemo(() => {
    if (viewMode !== 'all') {
      return []; // When grouped, we don't use pagination
    }
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage, viewMode]);
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterValues, viewMode]);

  // Function to toggle sorting
  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  // Function to render column headers with sort indicator
  const renderSortableHeader = (key: string, label: string, alignment: string = 'left') => {
    const sortDirection = sortConfig.key === key ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '';
    return (
      <th 
        className={`px-4 py-2 text-${alignment} cursor-pointer hover:bg-gray-700`}
        onClick={() => requestSort(key)}
      >
        <div className="flex items-center justify-between">
          <span>{label}</span>
          <span className="text-blue-400 ml-1">{sortDirection}</span>
        </div>
      </th>
    );
  };

  // Function to handle group expansion toggle
  const toggleGroup = (groupKey: string) => {
    if (expandedGroups.includes(groupKey)) {
      setExpandedGroups(expandedGroups.filter(g => g !== groupKey));
    } else {
      setExpandedGroups([...expandedGroups, groupKey]);
    }
  };

  // Regular table rendering (without grouping)
  const renderRegularTable = () => (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#131A2B] text-white border-b border-gray-700">
              {renderSortableHeader('date', 'Date')}
              {renderSortableHeader('open', 'Open', 'right')}
              {renderSortableHeader('high', 'High', 'right')}
              {renderSortableHeader('low', 'Low', 'right')}
              {renderSortableHeader('close', 'Close', 'right')}
              {renderSortableHeader('volume', 'Volume', 'right')}
              {renderSortableHeader('change', 'Change', 'right')}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((day, index) => (
              <tr 
                key={index} 
                className={index % 2 === 0 ? 'bg-[#0F1629]' : 'bg-[#131A2B]'}
              >
                <td className="px-4 py-2 font-medium text-white">{day.date}</td>
                <td className="px-4 py-2 text-right text-white">{day.open.toFixed(3)}</td>
                <td className="px-4 py-2 text-right text-white">{day.high.toFixed(3)}</td>
                <td className="px-4 py-2 text-right text-white">{day.low.toFixed(3)}</td>
                <td className="px-4 py-2 text-right text-white">{day.close.toFixed(3)}</td>
                <td className="px-4 py-2 text-right text-white">{day.volume.toLocaleString()}</td>
                <td className="px-4 py-2 text-right" style={{ color: getPriceChangeColor(day.change) }}>
                  {day.change ? 
                    `${day.change > 0 ? '+' : ''}${day.change.toFixed(2)}%` : 
                    '-'
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Rows per page:</span>
          <Select 
            value={itemsPerPage.toString()} 
            onValueChange={(value) => setItemsPerPage(parseInt(value))}
          >
            <SelectTrigger className="w-[70px] h-8 bg-[#131A2B] border-gray-700 text-white">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent className="bg-[#131A2B] border-gray-700 text-white">
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-1 text-sm">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded bg-[#131A2B] text-white disabled:opacity-50"
          >
            &laquo;
          </button>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded bg-[#131A2B] text-white disabled:opacity-50"
          >
            &lt;
          </button>
          
          <span className="px-3 py-1 text-gray-300">
            Page {currentPage} of {totalPages || 1}
          </span>
          
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="px-2 py-1 rounded bg-[#131A2B] text-white disabled:opacity-50"
          >
            &gt;
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage >= totalPages}
            className="px-2 py-1 rounded bg-[#131A2B] text-white disabled:opacity-50"
          >
            &raquo;
          </button>
        </div>
      </div>
    </>
  );

  // Grouped table rendering
  const renderGroupedTable = () => (
    <div className="space-y-4">
      {Object.keys(groupedData).sort().reverse().map(groupKey => (
        <Accordion
          key={groupKey}
          type="single"
          collapsible
          defaultValue={expandedGroups.includes(groupKey) ? groupKey : undefined}
          onValueChange={(value) => {
            if (value === groupKey) {
              toggleGroup(groupKey);
            } else {
              toggleGroup(groupKey);
            }
          }}
        >
          <AccordionItem value={groupKey} className="border border-gray-700 rounded-lg overflow-hidden">
            <AccordionTrigger className="p-4 bg-zinc-900 hover:bg-[#1A2338] text-white">
              <div className="flex justify-between items-center w-full">
                <div className="font-medium">{groupKey}</div>
                <div className="text-sm text-gray-400 px-2">
                  {groupedData[groupKey].length} records | 
                  Volume: {groupedData[groupKey] .reduce((sum, day) => sum + day.volume, 0).toLocaleString()} | 
                  Change: {
                    groupedData[groupKey].length > 1 
                      ? ((groupedData[groupKey][0].close - groupedData[groupKey][groupedData[groupKey].length-1].close) / 
                         groupedData[groupKey][groupedData[groupKey].length-1].close * 100).toFixed(2) + '%'
                      : '-'
                  }
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0F1629] text-white border-b border-gray-700">
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-right">Open</th>
                      <th className="px-4 py-2 text-right">High</th>
                      <th className="px-4 py-2 text-right">Low</th>
                      <th className="px-4 py-2 text-right">Close</th>
                      <th className="px-4 py-2 text-right">Volume</th>
                      <th className="px-4 py-2 text-right">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupedData[groupKey].map((day, index) => (
                      <tr 
                        key={index} 
                        className={index % 2 === 0 ? 'bg-[#0F1629]' : 'bg-[#131A2B]'}
                      >
                        <td className="px-4 py-2 font-medium text-white">{day.date}</td>
                        <td className="px-4 py-2 text-right text-white">{day.open.toFixed(3)}</td>
                        <td className="px-4 py-2 text-right text-white">{day.high.toFixed(3)}</td>
                        <td className="px-4 py-2 text-right text-white">{day.low.toFixed(3)}</td>
                        <td className="px-4 py-2 text-right text-white">{day.close.toFixed(3)}</td>
                        <td className="px-4 py-2 text-right text-white">{day.volume.toLocaleString()}</td>
                        <td className="px-4 py-2 text-right" style={{ color: getPriceChangeColor(day.change) }}>
                          {day.change ? 
                            `${day.change > 0 ? '+' : ''}${day.change.toFixed(2)}%` : 
                            '-'
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );

  // Calculate general statistics
  const stats = useMemo(() => {
    if (filteredData.length === 0) return null;
    
    return {
      totalRecords: filteredData.length,
      totalVolume: filteredData.reduce((sum, day) => sum + day.volume, 0),
      avgVolume: filteredData.reduce((sum, day) => sum + day.volume, 0) / filteredData.length,
      avgChange: filteredData.reduce((sum, day) => sum + (day.change || 0), 0) / filteredData.length,
      positiveChanges: filteredData.filter(day => (day.change || 0) > 0).length,
      negativeChanges: filteredData.filter(day => (day.change || 0) < 0).length
    };
  }, [filteredData]);

  return (
    <Card className="bg-zinc-900 border border-gray-800 shadow-xl mb-6">
      <CardHeader className="pb-2">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <CardTitle className="text-xl font-sans text-white">
          <span className='text-xl font-sans text-yellow-400'>Trade</span> History {selectedYear && `(${selectedYear})`}
          </CardTitle>
          
          <div className="flex flex-wrap gap-2">
            {/* Year controls */}
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
            
            {/* View mode control */}
            <Select 
              value={viewMode} 
              onValueChange={(value: any) => setViewMode(value)}
            >
              <SelectTrigger className="w-[130px] h-8 bg-[#131A2B] border-gray-700 text-white">
                <SelectValue placeholder="View" />
              </SelectTrigger>
              <SelectContent className="bg-[#131A2B] border-gray-700 text-white">
                <SelectItem value="all">Complete</SelectItem>
                <SelectItem value="month">By Month</SelectItem>
                <SelectItem value="quarter">By Quarter</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Search field */}
            <input
              type="text"
              placeholder="Search by date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-8 px-3 bg-[#131A2B] border border-gray-700 rounded-md text-white text-sm placeholder-gray-500"
            />
          </div>
        </div>
        
        {/* Filter panel */}
        <Accordion type="single" collapsible className="mt-2">
          <AccordionItem value="filters" className="border-gray-700">
            <AccordionTrigger className="py-2 text-sm text-blue-400 hover:text-blue-300">
              Advanced filters
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Volume</p>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="number" 
                      placeholder="Min"
                      value={filterValues.minVolume}
                      onChange={(e) => setFilterValues({...filterValues, minVolume: e.target.value})}
                      className="w-full h-8 px-3 bg-[#131A2B] border border-gray-700 rounded-md text-white text-sm"
                    />
                    <span className="text-gray-500">-</span>
                    <input 
                      type="number" 
                      placeholder="Max"
                      value={filterValues.maxVolume}
                      onChange={(e) => setFilterValues({...filterValues, maxVolume: e.target.value})}
                      className="w-full h-8 px-3 bg-[#131A2B] border border-gray-700 rounded-md text-white text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-gray-400 mb-1">Price (Close)</p>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="number" 
                      placeholder="Min"
                      value={filterValues.minPrice}
                      onChange={(e) => setFilterValues({...filterValues, minPrice: e.target.value})}
                      className="w-full h-8 px-3 bg-[#131A2B] border border-gray-700 rounded-md text-white text-sm"
                    />
                    <span className="text-gray-500">-</span>
                    <input 
                      type="number" 
                      placeholder="Max"
                      value={filterValues.maxPrice}
                      onChange={(e) => setFilterValues({...filterValues, maxPrice: e.target.value})}
                      className="w-full h-8 px-3 bg-[#131A2B] border border-gray-700 rounded-md text-white text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-gray-400 mb-1">Change (%)</p>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="number" 
                      placeholder="Min"
                      value={filterValues.minChange}
                      onChange={(e) => setFilterValues({...filterValues, minChange: e.target.value})}
                      className="w-full h-8 px-3 bg-[#131A2B] border border-gray-700 rounded-md text-white text-sm"
                    />
                    <span className="text-gray-500">-</span>
                    <input 
                      type="number" 
                      placeholder="Max"
                      value={filterValues.maxChange}
                      onChange={(e) => setFilterValues({...filterValues, maxChange: e.target.value})}
                      className="w-full h-8 px-3 bg-[#131A2B] border border-gray-700 rounded-md text-white text-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-3">
                <button
                  onClick={() => setFilterValues({
                    minVolume: '',
                    maxVolume: '',
                    minPrice: '',
                    maxPrice: '',
                    minChange: '',
                    maxChange: ''
                  })}
                  className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-md"
                >
                  Clear Filters
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Statistical summary */}
        {stats && (
          <div className="mt-3 text-sm text-gray-400 grid grid-cols-3 gap-4 py-2 border-t border-gray-800">
            <div>
              <span className="mr-1">Records:</span>
              <span className="font-medium text-white">{stats.totalRecords}</span>
            </div>
            <div>
              <span className="mr-1">Total Volume:</span>
              <span className="font-medium text-white">{stats.totalVolume.toLocaleString()}</span>
            </div>
            <div>
              <span className="mr-1">Up/Down Days:</span>
              <span className="font-medium text-green-500">{stats.positiveChanges}</span>
              <span className="mx-1">/</span>
              <span className="font-medium text-red-500">{stats.negativeChanges}</span>
            </div>
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        {/* Conditional rendering based on view mode */}
        {viewMode === 'all' ? renderRegularTable() : renderGroupedTable()}
      </CardContent>
      
      {viewMode !== 'all' && (
        <CardFooter className="border-t border-gray-800 pt-4 text-center text-gray-400 text-sm">
          Expand the groups to view detailed data. Data is organized {viewMode === 'month' ? 'by month' : 'by quarter'}.
        </CardFooter>
      )}
    </Card>
  );
};

export default RefinedTradeHistory;