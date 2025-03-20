import React, { useState, useEffect } from 'react';
import { 
  ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, 
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

const ImprovedCombinedChart = ({ 
  data, 
  selectedYear, 
  onYearChange = null,
  currency = "GBX" 
}) => {
  const [dataRange, setDataRange] = useState('all'); // 'all', 'q1', 'q2'
  const [showAvgLine, setShowAvgLine] = useState(true);
  const [processedData, setProcessedData] = useState([]);
  
  // Função para formatar valor
  const formatPrice = (price) => `${price.toFixed(3)} ${currency}`;
  const formatVolume = (volume) => volume.toLocaleString();
  
  // Processar dados recebidos
  useEffect(() => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.warn("Dados inválidos recebidos no ImprovedCombinedChart:", data);
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
      console.error("Erro ao processar dados no ImprovedCombinedChart:", error);
      setProcessedData([]);
    }
  }, [data]);
  
  // Cálculo de estatísticas
  const avgPrice = processedData.length > 0 
    ? processedData.reduce((sum, day) => sum + day.close, 0) / processedData.length 
    : 0;
  
  // Filtrar dados com base no período selecionado
  const filteredData = processedData.filter(day => {
    if (dataRange === 'all') return true;
    if (dataRange === 'q1') return day.quarter === 1;
    if (dataRange === 'q2') return day.quarter === 2;
    return true;
  });
  
  // Tooltip personalizado
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 p-3 border border-gray-700 rounded-md shadow-lg">
          <p className="text-white font-bold mb-1">{label}</p>
          <div className="space-y-1">
            <p className="text-blue-400">
              <span className="font-medium">Abertura:</span> {formatPrice(payload[2]?.payload.open || 0)}
            </p>
            <p className="text-green-400">
              <span className="font-medium">Alta:</span> {formatPrice(payload[2]?.payload.high || 0)}
            </p>
            <p className="text-red-400">
              <span className="font-medium">Baixa:</span> {formatPrice(payload[2]?.payload.low || 0)}
            </p>
            <p className="text-blue-400">
              <span className="font-medium">Fechamento:</span> {formatPrice(payload[2]?.payload.close || 0)}
            </p>
            <p className="text-green-500">
              <span className="font-medium">Volume:</span> {formatVolume(payload[1]?.value || 0)}
            </p>
            {payload[2]?.payload.change !== undefined && (
              <p className={payload[2]?.payload.change >= 0 ? "text-green-400" : "text-red-400"}>
                <span className="font-medium">Variação:</span> {(payload[2]?.payload.change || 0).toFixed(2)}%
              </p>
            )}
            {payload[2]?.payload.tradeCount !== undefined && (
              <p className="text-gray-300">
                <span className="font-medium">Negociações:</span> {payload[2]?.payload.tradeCount || 0}
              </p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };
  
  const yDomain = filteredData.length > 0 
    ? [
        Math.min(...filteredData.map(d => d.low)) * 0.95, 
        Math.max(...filteredData.map(d => d.high)) * 1.05
      ] 
    : [0, 1];
  
  // Se não houver dados, mostrar uma mensagem
  if (filteredData.length === 0) {
    return (
      <Card className="bg-gray-900 border border-gray-800 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white">Visão Combinada: Preço e Volume</CardTitle>
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
            Visão Combinada: Preço e Volume {selectedYear && `(${selectedYear})`}
          </CardTitle>
          <div className="flex space-x-3">
            {onYearChange && (
              <Select 
                value={selectedYear} 
                onValueChange={onYearChange}
              >
                <SelectTrigger className="w-[90px] h-8 bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
            )}
            <Select 
              value={dataRange} 
              onValueChange={setDataRange}
            >
              <SelectTrigger className="w-[120px] h-8 bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                <SelectItem value="all">Tudo</SelectItem>
                <SelectItem value="q1">Q1 (Jan-Mar)</SelectItem>
                <SelectItem value="q2">Q2 (Abr-Jun)</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="avgLine" 
                checked={showAvgLine}
                onChange={() => setShowAvgLine(!showAvgLine)}
                className="w-4 h-4 accent-blue-500"
              />
              <label htmlFor="avgLine" className="text-white text-sm">Preço Médio</label>
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
              <span>Preço médio: {formatPrice(avgPrice)}</span>
            </div>
          ) : (
            <span>Nenhum dado disponível para o período selecionado</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={filteredData}
              margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis 
                dataKey="date" 
                tick={{ fill: '#ccc' }}
                tickLine={{ stroke: '#666' }}
                axisLine={{ stroke: '#666' }}
                angle={-30}
                textAnchor="end"
                height={50}
              />
              <YAxis 
                yAxisId="left"
                orientation="left"
                domain={yDomain}
                tickFormatter={value => value.toFixed(2)}
                tick={{ fill: '#ccc' }}
                tickLine={{ stroke: '#666' }}
                axisLine={{ stroke: '#666' }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                domain={[0, 'auto']}
                tickFormatter={value => `${(value/1000).toFixed(0)}k`}
                tick={{ fill: '#ccc' }}
                tickLine={{ stroke: '#666' }}
                axisLine={{ stroke: '#666' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top" 
                height={36}
                wrapperStyle={{ paddingTop: 20 }}
              />
              
              <Bar 
                yAxisId="right"
                dataKey="volume" 
                name="Volume" 
                fill="#4CAF50" 
                fillOpacity={0.8} 
                barSize={20}
              />
              
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="close"
                name="Preço (Fechamento)"
                stroke="#2196F3"
                fill="#2196F3"
                fillOpacity={0.2}
                activeDot={{ r: 8, strokeWidth: 2, stroke: '#fff' }}
              />
              
              {/* Adicionar linha de preço médio se ativado */}
              {showAvgLine && (
                <ReferenceLine 
                  yAxisId="left" 
                  y={avgPrice} 
                  stroke="#FF9800"
                  strokeDasharray="3 3"
                  strokeWidth={2}
                >
                  <Label 
                    value="Preço Médio" 
                    position="insideTopRight"
                    fill="#FF9800"
                  />
                </ReferenceLine>
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        {/* Informações adicionais - Resumo estatístico */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Baixa (Mínima do Período)</div>
            <div className="text-white text-lg font-bold">
              {formatPrice(Math.min(...filteredData.map(d => d.low)))}
            </div>
          </div>
          
          <div className="bg-gray-800 p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Alta (Máxima do Período)</div>
            <div className="text-white text-lg font-bold">
              {formatPrice(Math.max(...filteredData.map(d => d.high)))}
            </div>
          </div>
          
          <div className="bg-gray-800 p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Volume Total</div>
            <div className="text-white text-lg font-bold">
              {formatVolume(filteredData.reduce((sum, day) => sum + day.volume, 0))}
            </div>
          </div>
          
          <div className="bg-gray-800 p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Variação no Período</div>
            {filteredData.length > 1 && (
              <div className={
                filteredData[filteredData.length-1].close > filteredData[0].open 
                  ? "text-green-500 text-lg font-bold" 
                  : "text-red-500 text-lg font-bold"
              }>
                {((filteredData[filteredData.length-1].close - filteredData[0].open) / filteredData[0].open * 100).toFixed(2)}%
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImprovedCombinedChart;