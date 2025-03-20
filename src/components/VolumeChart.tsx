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
  
  // Função para formatar valor
  const formatPrice = (price: number): string => `${price.toFixed(3)} ${currency}`;
  const formatVolume = (volume: number): string => volume.toLocaleString();
  
  // Processar dados recebidos
  useEffect(() => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.warn("Dados inválidos recebidos no RefinedVolumeChart:", data);
      setProcessedData([]);
      return;
    }

    try {
      // Converter os dados recebidos para o formato necessário
      const enhancedData = data.map(day => {
        // Extrair mês da data no formato DD/MM/YYYY (formato brasileiro)
        let month = 1;
        try {
          if (day.date && day.date.includes('/')) {
            // Formato brasileiro DD/MM/YYYY
            month = parseInt(day.date.split('/')[1], 10);
          }
        } catch (e) {
          console.warn("Erro ao extrair mês da data:", day.date, e);
        }

        const quarter = Math.ceil(month / 3);

        // Data no formato usado para display
        const displayDate = day.date 
          ? day.date.split('/').slice(0, 2).join('/') 
          : 'Data desconhecida';

        return {
          ...day,
          displayDate,
          month,
          quarter
        };
      });
      
      setProcessedData(enhancedData);
    } catch (error) {
      console.error("Erro ao processar dados no RefinedVolumeChart:", error);
      setProcessedData([]);
    }
  }, [data]);
  
  // Cálculo de estatísticas de volume
  const avgVolume = processedData.length > 0 
    ? processedData.reduce((sum, day) => sum + day.volume, 0) / processedData.length 
    : 0;
  
  const maxVolume = processedData.length > 0
    ? Math.max(...processedData.map(day => day.volume))
    : 0;
  
  // Filtrar dados com base no período selecionado
  const filteredData = processedData.filter(day => {
    if (dataRange === 'all') return true;
    if (dataRange === 'q1') return day.quarter === 1;
    if (dataRange === 'q2') return day.quarter === 2;
    if (dataRange === 'q3') return day.quarter === 3;
    if (dataRange === 'q4') return day.quarter === 4;
    return true;
  });
  
  // Tooltip personalizado
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
                  <span className="font-medium">Abertura:</span> {formatPrice(dayData.open)}
                </p>
                <p className="text-green-400">
                  <span className="font-medium">Alta:</span> {formatPrice(dayData.high)}
                </p>
                <p className="text-red-400">
                  <span className="font-medium">Baixa:</span> {formatPrice(dayData.low)}
                </p>
                <p className="text-blue-400">
                  <span className="font-medium">Fechamento:</span> {formatPrice(dayData.close)}
                </p>
              </div>
            )}
            {dayData.change !== undefined && (
              <p className={dayData.change >= 0 ? "text-green-400" : "text-red-400"}>
                <span className="font-medium">Variação:</span> {(dayData.change).toFixed(2)}%
              </p>
            )}
            {dayData.tradeCount !== undefined && (
              <p className="text-gray-300">
                <span className="font-medium">Negociações:</span> {dayData.tradeCount}
              </p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };
  
  // Se não houver dados, mostrar uma mensagem
  if (filteredData.length === 0) {
    return (
      <Card className="bg-[#0E0E0E] border border-gray-800 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white">Volume de Negociação por Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 text-gray-400">
            <p>Nenhum dado disponível para o período selecionado. Verifique se os dados estão sendo passados corretamente.</p>
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
          Volume  <span className='text-yellow-400'> de Negociação</span>  por Data{selectedYear && `(${selectedYear})`}
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
                <SelectItem value="q1">Q1 (Jan-Mar)</SelectItem>
                <SelectItem value="q2">Q2 (Abr-Jun)</SelectItem>
                <SelectItem value="q3">Q3 (Jul-Set)</SelectItem>
                <SelectItem value="q4">Q4 (Out-Dez)</SelectItem>
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
              <label htmlFor="avgVolumeLine" className="text-white text-sm">Volume Médio</label>
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-sm mt-2">
          {filteredData.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              <span>Período: {filteredData[0].date} - {filteredData[filteredData.length-1].date}</span>
              {filteredData[0].tradeCount !== undefined && (
                <span>Total de negociações: {filteredData.reduce((sum, day) => sum + day.tradeCount, 0)}</span>
              )}
              <span>Volume médio: {formatVolume(avgVolume)}</span>
            </div>
          ) : (
            <span>Nenhum dado disponível para o período selecionado</span>
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
                cursor={{ fill: 'rgba(15, 22, 41, 0.3)' }} // Corrigido: sombra mais escura e mais transparente
              />
              <Legend 
                verticalAlign="top"
                align="right" // Movido para a direita para evitar sobreposição
                iconType="circle"
                wrapperStyle={{ 
                  paddingBottom: 10,
                  top: -10, // Ajustado para cima para evitar sobreposição com a linha de média
                  right: 10
                }}
                formatter={(value) => <span style={{ color: '#ccc' }}>{value}</span>}
              />
              
              <Bar 
                dataKey="volume" 
                name="Volume" 
                fillOpacity={0.9} 
                barSize={30}
                // Coloração mais sofisticada das barras
                fill={(entry: DailyTradeData) => {
                  const ratio = entry.volume / maxVolume;
                  // Variação mais sutil da cor, do verde escuro ao verde claro
                  return `rgb(0, ${Math.floor(140 + (ratio * 80))}, ${Math.floor(60 + (ratio * 100))})`;
                }}
              />
              
              {/* Adicionar linha de volume médio se ativado */}
              {showAvgLine && (
                <ReferenceLine 
                  y={avgVolume} 
                  stroke="#FF9800"
                  strokeDasharray="3 3"
                  strokeWidth={2}
                  // Adicionado label para melhor visualização
                  label={{
                    position: 'right',
                    value: 'Volume Médio',
                    fill: '#FF9800',
                    fontSize: 12
                  }}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Informações adicionais - Resumo estatístico */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#131A2B] p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Volume Total</div>
            <div className="text-white text-lg font-bold">
              {formatVolume(filteredData.reduce((sum, day) => sum + day.volume, 0))}
            </div>
          </div>
          
          <div className="bg-[#131A2B] p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Volume Máximo (Dia)</div>
            <div className="text-white text-lg font-bold">
              {formatVolume(Math.max(...filteredData.map(d => d.volume)))}
            </div>
            <div className="text-gray-400 text-xs mt-1">
              {filteredData.find(d => d.volume === Math.max(...filteredData.map(d => d.volume)))?.date}
            </div>
          </div>
          
          <div className="bg-[#131A2B] p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Média Diária</div>
            <div className="text-white text-lg font-bold">
              {formatVolume(avgVolume)}
            </div>
            <div className="text-gray-400 text-xs mt-1">
              Negociações: {(filteredData.reduce((sum, day) => sum + day.tradeCount, 0) / filteredData.length).toFixed(1)} por dia
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RefinedVolumeChart;