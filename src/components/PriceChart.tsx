import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, ReferenceLine, Label, Area, ComposedChart
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TradeData {
  id: string;
  price: number;
  volume: number;
  date: Date;
  formattedDate: string;
  formattedTime: string;
  fullDate: string;
  currency: string;
}

interface RefinedPriceChartProps {
  data: TradeData[];
  selectedYear: string;
  onYearChange?: (year: string) => void;
  avgPrice?: number;
  minPrice?: number;
  maxPrice?: number;
  currency?: string;
}

const RefinedPriceChart: React.FC<RefinedPriceChartProps> = ({ 
  data, 
  selectedYear, 
  onYearChange = null,
  avgPrice: propAvgPrice,
  minPrice: propMinPrice,
  maxPrice: propMaxPrice,
  currency = "GBX" 
}) => {
  const [dataRange, setDataRange] = useState<'all' | 'week' | 'month' | 'quarter'>('all');
  const [showAvgLine, setShowAvgLine] = useState<boolean>(true);
  const [showArea, setShowArea] = useState<boolean>(true);
  const [processedData, setProcessedData] = useState<TradeData[]>([]);
  
  // Função para formatar valor
  const formatPrice = (price: number): string => `${price.toFixed(3)} ${currency}`;
  const formatVolume = (volume: number): string => volume.toLocaleString();
  
  // Processar dados recebidos
  useEffect(() => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.warn("Dados inválidos recebidos no RefinedPriceChart:", data);
      setProcessedData([]);
      return;
    }

    try {
      // Se os dados já estiverem processados, apenas copiamos
      setProcessedData([...data]);
    } catch (error) {
      console.error("Erro ao processar dados no RefinedPriceChart:", error);
      setProcessedData([]);
    }
  }, [data]);
  
  // Cálculo de estatísticas
  const avgPrice = propAvgPrice !== undefined 
    ? propAvgPrice 
    : processedData.length > 0 
      ? processedData.reduce((sum, item) => sum + item.price, 0) / processedData.length 
      : 0;
  
  const minPrice = propMinPrice !== undefined
    ? propMinPrice
    : processedData.length > 0
      ? Math.min(...processedData.map(item => item.price))
      : 0;

  const maxPrice = propMaxPrice !== undefined
    ? propMaxPrice
    : processedData.length > 0
      ? Math.max(...processedData.map(item => item.price))
      : 0;
  
  // Filtrar dados com base no período selecionado
  const filteredData = processedData.filter(item => {
    if (dataRange === 'all') return true;
    
    const itemDate = new Date(item.date);
    const now = new Date();
    
    if (dataRange === 'week') {
      // Últimos 7 dias
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(now.getDate() - 7);
      return itemDate >= oneWeekAgo;
    }
    
    if (dataRange === 'month') {
      // Último mês
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(now.getMonth() - 1);
      return itemDate >= oneMonthAgo;
    }
    
    if (dataRange === 'quarter') {
      // Último trimestre
      const oneQuarterAgo = new Date();
      oneQuarterAgo.setMonth(now.getMonth() - 3);
      return itemDate >= oneQuarterAgo;
    }
    
    return true;
  });
  
  // Tooltip personalizado
  const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const itemData = payload[0].payload;
      return (
        <div className="bg-[#0F1629] p-3 border border-gray-700 rounded-md shadow-lg">
          <p className="text-white font-bold mb-1">{label}</p>
          <div className="space-y-1">
            <p className="text-blue-400">
              <span className="font-medium">Preço:</span> {formatPrice(payload[0].value)}
            </p>
            {itemData.volume !== undefined && (
              <p className="text-green-500">
                <span className="font-medium">Volume:</span> {formatVolume(itemData.volume)}
              </p>
            )}
            <p className="text-gray-300">
              <span className="font-medium">Data:</span> {itemData.formattedDate}
            </p>
            <p className="text-gray-300">
              <span className="font-medium">Hora:</span> {itemData.formattedTime}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };
  
  // Se não houver dados, mostrar uma mensagem
  if (filteredData.length === 0) {
    return (
      <Card className="bg-[#0F1629] border border-gray-800 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white">Variação de Preço ao Longo do Tempo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 text-gray-400">
            <p>Nenhum dado disponível para o período selecionado. Verifique se os dados estão sendo passados corretamente.</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  // Calcular domínio do eixo Y com margem para melhor visualização
  const yDomain = [
    Math.min(minPrice, ...filteredData.map(item => item.price)) * 0.95,
    Math.max(maxPrice, ...filteredData.map(item => item.price)) * 1.05
  ];
  
  const chartData = filteredData.map((item, index) => {
    // Calcular a variação percentual em relação ao item anterior
    let changePercent = 0;
    if (index > 0) {
      const prevPrice = filteredData[index - 1].price;
      changePercent = ((item.price - prevPrice) / prevPrice) * 100;
    }
    
    return {
      ...item,
      changePercent
    };
  });
  
  // Determinar se a tendência geral é de alta ou baixa
  const firstPrice = chartData.length > 0 ? chartData[0].price : 0;
  const lastPrice = chartData.length > 0 ? chartData[chartData.length - 1].price : 0;
  const trend = lastPrice >= firstPrice ? 'up' : 'down';
  
  // Cores com base na tendência
  const trendColor = trend === 'up' ? '#4CAF50' : '#F44336';
  const areaFillColor = trend === 'up' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)';
  
  return (
    <Card className="bg-zinc-900 border border-gray-800 shadow-xl">
      <CardHeader className="pb-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-white">
            Variação de Preço ao Longo do Tempo {selectedYear && `(${selectedYear})`}
          </CardTitle>
          <div className="flex space-x-3">
            {onYearChange && (
              <Select 
                value={selectedYear} 
                onValueChange={onYearChange}
              >
                <SelectTrigger className="w-[90px] h-8 bg-[#131A2B] border-gray-700 text-white">
                  <SelectValue placeholder="Ano" />
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
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent className="bg-[#131A2B] border-gray-700 text-white">
                <SelectItem value="all">Tudo</SelectItem>
                <SelectItem value="week">Última Semana</SelectItem>
                <SelectItem value="month">Último Mês</SelectItem>
                <SelectItem value="quarter">Último Trimestre</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="avgPriceLine" 
                checked={showAvgLine}
                onChange={() => setShowAvgLine(!showAvgLine)}
                className="w-4 h-4 accent-blue-500"
              />
              <label htmlFor="avgPriceLine" className="text-white text-sm">Preço Médio</label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="showArea" 
                checked={showArea}
                onChange={() => setShowArea(!showArea)}
                className="w-4 h-4 accent-blue-500"
              />
              <label htmlFor="showArea" className="text-white text-sm">Área</label>
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-sm mt-2">
          {filteredData.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              <span>Período: {filteredData[0].formattedDate} - {filteredData[filteredData.length-1].formattedDate}</span>
              <span>Operações: {filteredData.length}</span>
              <span className={trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                Variação no período: {((lastPrice - firstPrice) / firstPrice * 100).toFixed(2)}%
              </span>
            </div>
          ) : (
            <span>Nenhum dado disponível para o período selecionado</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 10, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#252E3F" />
              <XAxis 
                dataKey="fullDate" 
                tick={{ fontSize: 12, fill: "#ccc" }} 
                angle={-30}
                height={60}
                textAnchor="end"
                tickLine={{ stroke: '#252E3F' }}
                axisLine={{ stroke: '#252E3F' }}
              />
              <YAxis 
                domain={yDomain}
                tickFormatter={(value) => value.toFixed(2)}
                tick={{ fill: "#ccc" }}
                tickLine={{ stroke: '#252E3F' }}
                axisLine={{ stroke: '#252E3F' }}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ stroke: '#4f6282', strokeWidth: 1, strokeDasharray: '5 5' }}
              />
              <Legend 
                verticalAlign="top"
                align="right"
                iconType="square"
                wrapperStyle={{ 
                  paddingBottom: 10,
                  top: -10,
                  right: 10
                }}
                formatter={(value) => <span style={{ color: '#ccc' }}>{value}</span>}
              />
              
              {/* Área abaixo da linha (opcional) */}
              {showArea && (
                <Area 
                  type="monotone"
                  dataKey="price"
                  name="Área"
                  stroke="none"
                  fill={areaFillColor}
                  fillOpacity={0.5}
                />
              )}
              
              {/* Linha principal de preço */}
              <Line 
                type="monotone" 
                dataKey="price" 
                name="Preço" 
                stroke={trendColor}
                strokeWidth={2}
                dot={{ r: 3, fill: trendColor, stroke: trendColor }}
                activeDot={{ r: 6, fill: '#fff', stroke: trendColor, strokeWidth: 2 }}
                animationDuration={1000}
              />
              
              {/* Adicionar linha de preço médio se ativado */}
              {showAvgLine && (
                <ReferenceLine 
                  y={avgPrice} 
                  stroke="#2196F3"
                  strokeDasharray="3 3"
                  strokeWidth={2}
                  // Anotação no gráfico
                  label={{
                    position: 'right',
                    value: 'Preço Médio',
                    fill: '#2196F3',
                    fontSize: 12
                  }}
                />
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        {/* Informações adicionais - Resumo estatístico */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#131A2B] p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Preço Inicial</div>
            <div className="text-white text-lg font-bold">
              {formatPrice(firstPrice)}
            </div>
          </div>
          
          <div className="bg-[#131A2B] p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Preço Final</div>
            <div className="text-white text-lg font-bold">
              {formatPrice(lastPrice)}
            </div>
          </div>
          
          <div className="bg-[#131A2B] p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Variação</div>
            <div className={trend === 'up' ? 'text-green-500 text-lg font-bold' : 'text-red-500 text-lg font-bold'}>
              {((lastPrice - firstPrice) / firstPrice * 100).toFixed(2)}%
              {trend === 'up' ? ' ▲' : ' ▼'}
            </div>
          </div>
          
          <div className="bg-[#131A2B] p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Preço Médio</div>
            <div className="text-white text-lg font-bold">
              {formatPrice(avgPrice)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RefinedPriceChart;