import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Zap, 
  Pill, 
  ShoppingBag, 
  Car, 
  Landmark,
  TrendingUp,
  TrendingDown,
  ArrowRight
} from "lucide-react";

interface Company {
  symbol: string;
  name: string;
  price: number;
  change: number;
  marketCap: string;
  description: string;
}

interface Sector {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  description: string;
  performance: number;
  companies: Company[];
}

const SectorGrid = () => {
  const sectors: Sector[] = [
    {
      id: 'it',
      name: 'Information Technology',
      icon: Building2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      description: 'Software services, IT consulting, and technology solutions',
      performance: 12.5,
      companies: [
        { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3500, change: 2.1, marketCap: '₹12.5L Cr', description: 'Global IT services giant' },
        { symbol: 'INFY', name: 'Infosys Limited', price: 1650, change: 1.8, marketCap: '₹7.2L Cr', description: 'IT consulting and outsourcing' },
        { symbol: 'WIPRO', name: 'Wipro Limited', price: 450, change: -0.5, marketCap: '₹2.4L Cr', description: 'Digital transformation services' },
        { symbol: 'HCLTECH', name: 'HCL Technologies', price: 1280, change: 1.2, marketCap: '₹3.8L Cr', description: 'Technology and R&D services' },
        { symbol: 'TECHM', name: 'Tech Mahindra', price: 1100, change: 0.8, marketCap: '₹1.1L Cr', description: 'Digital transformation and consulting' }
      ]
    },
    {
      id: 'banking',
      name: 'Banking & Finance',
      icon: Landmark,
      color: 'text-success',
      bgColor: 'bg-success/10',
      description: 'Commercial banks, NBFCs, and financial services',
      performance: 8.2,
      companies: [
        { symbol: 'HDFCBANK', name: 'HDFC Bank', price: 1580, change: 1.5, marketCap: '₹12L Cr', description: 'Leading private sector bank' },
        { symbol: 'ICICIBANK', name: 'ICICI Bank', price: 1200, change: 2.3, marketCap: '₹8.5L Cr', description: 'Full-service banking solutions' },
        { symbol: 'SBI', name: 'State Bank of India', price: 650, change: 1.1, marketCap: '₹5.8L Cr', description: 'Largest public sector bank' },
        { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', price: 1750, change: -0.8, marketCap: '₹3.5L Cr', description: 'Commercial banking services' },
        { symbol: 'AXISBANK', name: 'Axis Bank', price: 1150, change: 1.9, marketCap: '₹3.8L Cr', description: 'Private sector banking' }
      ]
    },
    {
      id: 'pharma',
      name: 'Pharmaceuticals',
      icon: Pill,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      description: 'Drug manufacturing, healthcare, and life sciences',
      performance: 15.8,
      companies: [
        { symbol: 'SUNPHARMA', name: 'Sun Pharmaceutical', price: 1200, change: 2.8, marketCap: '₹2.9L Cr', description: 'Specialty pharmaceuticals' },
        { symbol: 'DRREDDY', name: 'Dr Reddys Laboratories', price: 6200, change: 1.5, marketCap: '₹1L Cr', description: 'Global generic medicines' },
        { symbol: 'CIPLA', name: 'Cipla Limited', price: 1400, change: 3.2, marketCap: '₹1.1L Cr', description: 'Respiratory and HIV medicines' },
        { symbol: 'BIOCON', name: 'Biocon Limited', price: 350, change: -1.2, marketCap: '₹42K Cr', description: 'Biopharmaceuticals and biosimilars' },
        { symbol: 'LUPIN', name: 'Lupin Limited', price: 850, change: 1.8, marketCap: '₹39K Cr', description: 'Generic and specialty pharma' }
      ]
    },
    {
      id: 'fmcg',
      name: 'FMCG & Consumer',
      icon: ShoppingBag,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      description: 'Fast-moving consumer goods and retail',
      performance: 6.4,
      companies: [
        { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', price: 2350, change: 0.8, marketCap: '₹5.5L Cr', description: 'Consumer products giant' },
        { symbol: 'ITC', name: 'ITC Limited', price: 450, change: 1.2, marketCap: '₹5.6L Cr', description: 'Diversified conglomerate' },
        { symbol: 'NESTLEIND', name: 'Nestle India', price: 22000, change: -0.5, marketCap: '₹2.1L Cr', description: 'Food and beverages' },
        { symbol: 'BRITANNIA', name: 'Britannia Industries', price: 5200, change: 2.1, marketCap: '₹1.3L Cr', description: 'Bakery and dairy products' },
        { symbol: 'DABUR', name: 'Dabur India', price: 550, change: 1.5, marketCap: '₹97K Cr', description: 'Ayurvedic and natural products' }
      ]
    },
    {
      id: 'auto',
      name: 'Automobile',
      icon: Car,
      color: 'text-danger',
      bgColor: 'bg-danger/10',
      description: 'Vehicle manufacturing and auto components',
      performance: -2.1,
      companies: [
        { symbol: 'MARUTI', name: 'Maruti Suzuki', price: 11500, change: -1.2, marketCap: '₹3.5L Cr', description: 'Leading car manufacturer' },
        { symbol: 'TATAMOTORS', name: 'Tata Motors', price: 950, change: 2.8, marketCap: '₹3.1L Cr', description: 'Commercial and passenger vehicles' },
        { symbol: 'M&M', name: 'Mahindra & Mahindra', price: 2800, change: 1.5, marketCap: '₹3.5L Cr', description: 'SUVs and farm equipment' },
        { symbol: 'BAJAJ-AUTO', name: 'Bajaj Auto', price: 8500, change: -0.8, marketCap: '₹2.5L Cr', description: 'Two and three-wheelers' },
        { symbol: 'HEROMOTOCO', name: 'Hero MotoCorp', price: 3200, change: 0.5, marketCap: '₹64K Cr', description: 'Motorcycle manufacturer' }
      ]
    },
    {
      id: 'energy',
      name: 'Energy & Oil',
      icon: Zap,
      color: 'text-primary-dark',
      bgColor: 'bg-primary/5',
      description: 'Oil refining, renewable energy, and utilities',
      performance: 9.3,
      companies: [
        { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2800, change: 1.8, marketCap: '₹19L Cr', description: 'Oil, petrochemicals, telecom' },
        { symbol: 'ONGC', name: 'Oil & Natural Gas Corp', price: 280, change: 2.5, marketCap: '₹3.5L Cr', description: 'Oil and gas exploration' },
        { symbol: 'IOC', name: 'Indian Oil Corporation', price: 150, change: 1.2, marketCap: '₹2.1L Cr', description: 'Oil refining and marketing' },
        { symbol: 'BPCL', name: 'Bharat Petroleum', price: 320, change: -0.5, marketCap: '₹69K Cr', description: 'Oil refining company' },
        { symbol: 'HPCL', name: 'Hindustan Petroleum', price: 380, change: 1.8, marketCap: '₹81K Cr', description: 'Petroleum products' }
      ]
    }
  ];

  const getSectorIcon = (IconComponent: React.ElementType, color: string) => (
    <div className={`w-12 h-12 rounded-xl ${color.replace('text-', 'bg-')}/20 flex items-center justify-center mb-4`}>
      <IconComponent className={`w-6 h-6 ${color}`} />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Market Sectors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore different sectors and discover top-performing companies in each category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {sectors.map((sector) => (
            <Card key={sector.id} className={`${sector.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <CardHeader className="pb-4">
                {getSectorIcon(sector.icon, sector.color)}
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{sector.name}</CardTitle>
                  <Badge variant={sector.performance > 0 ? "default" : "destructive"} className="flex items-center gap-1">
                    {sector.performance > 0 ? 
                      <TrendingUp className="w-3 h-3" /> : 
                      <TrendingDown className="w-3 h-3" />
                    }
                    {sector.performance > 0 ? '+' : ''}{sector.performance}%
                  </Badge>
                </div>
                <CardDescription>{sector.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Top Companies</h4>
                  {sector.companies.slice(0, 3).map((company) => (
                    <div key={company.symbol} className="flex items-center justify-between p-2 bg-background/50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-sm">{company.symbol}</div>
                        <div className="text-xs text-muted-foreground truncate">{company.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm">₹{company.price}</div>
                        <div className={`text-xs flex items-center gap-1 ${company.change > 0 ? 'text-success' : 'text-danger'}`}>
                          {company.change > 0 ? 
                            <TrendingUp className="w-3 h-3" /> : 
                            <TrendingDown className="w-3 h-3" />
                          }
                          {company.change > 0 ? '+' : ''}{company.change}%
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View All Companies
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Overview */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Market Overview</CardTitle>
            <CardDescription className="text-center">
              Real-time insights across all sectors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {sectors.map((sector) => (
                <div key={sector.id} className="text-center p-4 bg-muted/30 rounded-lg">
                  <sector.icon className={`w-8 h-8 mx-auto mb-2 ${sector.color}`} />
                  <div className="font-semibold text-sm mb-1">{sector.name.split(' ')[0]}</div>
                  <Badge variant={sector.performance > 0 ? "default" : "destructive"} className="text-xs">
                    {sector.performance > 0 ? '+' : ''}{sector.performance}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SectorGrid;