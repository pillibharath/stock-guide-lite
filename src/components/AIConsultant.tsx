import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Brain, Send, Lightbulb, TrendingUp, AlertTriangle, CheckCircle, MessageSquare } from "lucide-react";

interface Advice {
  id: string;
  type: 'buy' | 'sell' | 'hold' | 'diversify';
  title: string;
  message: string;
  reasoning: string;
  confidence: number;
}

const AIConsultant = () => {
  const [query, setQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [advice, setAdvice] = useState<Advice[]>([]);
  
  const sampleAdvice: Advice[] = [
    {
      id: '1',
      type: 'diversify',
      title: 'Add IT Sector Exposure',
      message: 'Your portfolio lacks IT stocks. Consider adding Infosys (INFY) for better sector diversification.',
      reasoning: 'IT sector has shown consistent growth and your current portfolio is heavy in banking. Infosys offers stable returns with lower volatility.',
      confidence: 85
    },
    {
      id: '2',
      type: 'hold',
      title: 'Hold TCS Position',
      message: 'TCS is performing well. Hold your current position and consider accumulating on dips.',
      reasoning: 'Strong Q3 results, healthy order book, and digital transformation tailwinds support the stock. Current valuation is reasonable.',
      confidence: 78
    },
    {
      id: '3',
      type: 'sell',
      title: 'Reduce Banking Exposure',
      message: 'Your portfolio is overweight in banking. Consider reducing 20% of your HDFC Bank position.',
      reasoning: 'Banking sector concentration is high (45% of portfolio). Reducing exposure will improve risk-adjusted returns.',
      confidence: 72
    }
  ];

  const handleAnalyze = () => {
    if (!query.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAdvice(sampleAdvice);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getAdviceIcon = (type: string) => {
    switch (type) {
      case 'buy': return <TrendingUp className="w-5 h-5 text-success" />;
      case 'sell': return <AlertTriangle className="w-5 h-5 text-danger" />;
      case 'hold': return <CheckCircle className="w-5 h-5 text-primary" />;
      case 'diversify': return <Lightbulb className="w-5 h-5 text-warning" />;
      default: return <MessageSquare className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getAdviceBadgeVariant = (type: string) => {
    switch (type) {
      case 'buy': return 'default';
      case 'sell': return 'destructive';
      case 'hold': return 'secondary';
      case 'diversify': return 'outline';
      default: return 'outline';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-success';
    if (confidence >= 60) return 'text-warning';
    return 'text-danger';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI Stock Consultant
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized investment advice in plain English. Ask about your portfolio or specific stocks.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Chat Interface */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Ask Your Investment Question
              </CardTitle>
              <CardDescription>
                Describe your portfolio situation or ask about specific stocks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="Example: I hold TCS, Reliance, and HDFC Bank. Should I add more IT stocks or diversify into other sectors?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-32 resize-none"
                />
                <Button 
                  onClick={handleAnalyze} 
                  disabled={!query.trim() || isAnalyzing}
                  variant="hero"
                  className="w-full"
                >
                  {isAnalyzing ? (
                    <>
                      <Brain className="w-4 h-4 animate-pulse" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Get AI Advice
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sample Questions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Popular Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {[
                  "Should I sell my banking stocks due to recent volatility?",
                  "Is my portfolio too concentrated in one sector?",
                  "Which pharma stock should I add to my portfolio?",
                  "When is a good time to book profits in IT stocks?"
                ].map((question, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="justify-start text-left h-auto p-3 text-sm"
                    onClick={() => setQuery(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Advice Results */}
          {advice.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-6">Your Personalized Investment Advice</h2>
              
              {advice.map((item) => (
                <Card key={item.id} className="border-l-4 border-l-primary shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getAdviceIcon(item.type)}
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant={getAdviceBadgeVariant(item.type)}>
                              {item.type.toUpperCase()}
                            </Badge>
                            <span className={`text-sm font-medium ${getConfidenceColor(item.confidence)}`}>
                              {item.confidence}% Confidence
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          Recommendation
                        </h4>
                        <p className="text-foreground">{item.message}</p>
                      </div>
                      
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Brain className="w-4 h-4 text-primary" />
                          Why This Advice?
                        </h4>
                        <p className="text-muted-foreground">{item.reasoning}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Educational Tips */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-warning" />
                Investment Tips for Beginners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <h4 className="font-semibold text-success mb-2">Diversification</h4>
                  <p className="text-sm text-muted-foreground">
                    Don't put all your eggs in one basket. Spread investments across different sectors and company sizes.
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Risk Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Never invest more than you can afford to lose. Set stop-losses and review your portfolio regularly.
                  </p>
                </div>
                <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                  <h4 className="font-semibold text-warning mb-2">Long-term Thinking</h4>
                  <p className="text-sm text-muted-foreground">
                    Stock markets are volatile short-term. Focus on company fundamentals for long-term wealth creation.
                  </p>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <h4 className="font-semibold text-secondary mb-2">Regular Investment</h4>
                  <p className="text-sm text-muted-foreground">
                    Use SIP (Systematic Investment Plan) to average out market volatility and build discipline.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;