import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

interface Stock {
  id: string;
  symbol: string;
  company: string;
  quantity: number;
  price: number;
  sector: string;
}

const PortfolioBuilder = () => {
  const [stocks, setStocks] = useState<Stock[]>([
    { id: '1', symbol: 'TCS', company: 'Tata Consultancy Services', quantity: 10, price: 3500, sector: 'IT' },
    { id: '2', symbol: 'RELIANCE', company: 'Reliance Industries', quantity: 5, price: 2800, sector: 'Energy' }
  ]);
  
  const [newStock, setNewStock] = useState({ symbol: '', quantity: '' });
  
  const popularStocks = [
    { symbol: 'INFY', company: 'Infosys Limited', price: 1650, sector: 'IT' },
    { symbol: 'HDFCBANK', company: 'HDFC Bank', price: 1580, sector: 'Banking' },
    { symbol: 'ICICIBANK', company: 'ICICI Bank', price: 1200, sector: 'Banking' },
    { symbol: 'SBI', company: 'State Bank of India', price: 650, sector: 'Banking' },
    { symbol: 'LT', company: 'Larsen & Toubro', price: 3400, sector: 'Infrastructure' },
    { symbol: 'HINDUNILVR', company: 'Hindustan Unilever', price: 2350, sector: 'FMCG' }
  ];

  const addStock = (stock: typeof popularStocks[0], quantity: number = 1) => {
    const newStockItem: Stock = {
      id: Date.now().toString(),
      symbol: stock.symbol,
      company: stock.company,
      quantity,
      price: stock.price,
      sector: stock.sector
    };
    setStocks(prev => [...prev, newStockItem]);
  };

  const removeStock = (id: string) => {
    setStocks(prev => prev.filter(stock => stock.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeStock(id);
      return;
    }
    setStocks(prev => prev.map(stock => 
      stock.id === id ? { ...stock, quantity: newQuantity } : stock
    ));
  };

  const totalValue = stocks.reduce((sum, stock) => sum + (stock.quantity * stock.price), 0);
  const sectorDistribution = stocks.reduce((acc, stock) => {
    acc[stock.sector] = (acc[stock.sector] || 0) + (stock.quantity * stock.price);
    return acc;
  }, {} as Record<string, number>);

  const getSectorColor = (sector: string) => {
    const colors = {
      'IT': 'bg-primary',
      'Banking': 'bg-success',
      'Energy': 'bg-warning',
      'FMCG': 'bg-secondary',
      'Infrastructure': 'bg-danger'
    };
    return colors[sector as keyof typeof colors] || 'bg-muted';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Portfolio Builder
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Add your stocks and get personalized investment advice tailored to your portfolio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Current Portfolio */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Your Portfolio
                </CardTitle>
                <CardDescription>
                  Total Value: ₹{totalValue.toLocaleString('en-IN')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {stocks.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Your portfolio is empty. Add some stocks to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {stocks.map((stock) => (
                      <div key={stock.id} className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-card to-muted/20">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className={`${getSectorColor(stock.sector)} text-white`}>
                              {stock.sector}
                            </Badge>
                            <span className="font-semibold">{stock.symbol}</span>
                            <span className="text-sm text-muted-foreground">{stock.company}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ₹{stock.price} × {stock.quantity} = ₹{(stock.price * stock.quantity).toLocaleString('en-IN')}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateQuantity(stock.id, stock.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">{stock.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateQuantity(stock.id, stock.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Popular Stocks */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Stocks</CardTitle>
                <CardDescription>Add these trending stocks to your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {popularStocks.map((stock) => (
                    <div key={stock.symbol} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <Badge variant="outline" className={`${getSectorColor(stock.sector)} text-white`}>
                            {stock.sector}
                          </Badge>
                          <span className="font-semibold">{stock.symbol}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">{stock.company}</div>
                        <div className="text-sm font-medium">₹{stock.price}</div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => addStock(stock)}
                        disabled={stocks.some(s => s.symbol === stock.symbol)}
                      >
                        {stocks.some(s => s.symbol === stock.symbol) ? <CheckCircle className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Analysis */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Portfolio Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Sector Distribution</Label>
                    <div className="space-y-2">
                      {Object.entries(sectorDistribution).map(([sector, value]) => {
                        const percentage = ((value / totalValue) * 100).toFixed(1);
                        return (
                          <div key={sector} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-sm ${getSectorColor(sector)}`}></div>
                              <span className="text-sm">{sector}</span>
                            </div>
                            <span className="text-sm font-medium">{percentage}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Quick Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {stocks.length < 3 && (
                    <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                      <p className="text-sm text-warning-foreground">
                        Consider adding more stocks for better diversification
                      </p>
                    </div>
                  )}
                  
                  {Object.keys(sectorDistribution).length === 1 && (
                    <div className="p-3 bg-danger/10 border border-danger/20 rounded-lg">
                      <p className="text-sm text-danger-foreground">
                        Your portfolio is concentrated in one sector. Consider diversifying.
                      </p>
                    </div>
                  )}
                  
                  {Object.entries(sectorDistribution).some(([_, value]) => (value / totalValue) > 0.6) && (
                    <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                      <p className="text-sm text-warning-foreground">
                        One sector dominates your portfolio. Balance with other sectors.
                      </p>
                    </div>
                  )}

                  {stocks.length >= 3 && Object.keys(sectorDistribution).length >= 3 && (
                    <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                      <p className="text-sm text-success-foreground">
                        Good diversification across sectors!
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBuilder;