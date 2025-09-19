import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Calendar, 
  DollarSign,
  Clock,
  Target,
  Trophy
} from "lucide-react";

const UsageDashboard = () => {
  // Mock usage data
  const usageStats = {
    portfoliosAnalyzed: 12,
    adviceGenerated: 28,
    monthlyLimit: 50,
    creditsUsed: 340,
    creditsRemaining: 160,
    streak: 7,
    totalSaved: 25000
  };

  const recentActivity = [
    { id: 1, type: 'analysis', description: 'Portfolio diversification analysis', time: '2 hours ago', cost: 15 },
    { id: 2, type: 'advice', description: 'TCS stock recommendation', time: '1 day ago', cost: 8 },
    { id: 3, type: 'analysis', description: 'Sector allocation review', time: '2 days ago', cost: 12 },
    { id: 4, type: 'advice', description: 'Banking sector advice', time: '3 days ago', cost: 10 },
    { id: 5, type: 'analysis', description: 'Risk assessment report', time: '5 days ago', cost: 18 }
  ];

  const monthlyUsage = [
    { month: 'Jan', analyses: 8, advice: 15 },
    { month: 'Feb', analyses: 12, advice: 22 },
    { month: 'Mar', analyses: 15, advice: 28 },
    { month: 'Apr', analyses: 10, advice: 18 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Usage Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your AI consultation usage, savings, and investment journey progress
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Portfolios Analyzed</CardTitle>
                <BarChart3 className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{usageStats.portfoliosAnalyzed}</div>
                <p className="text-xs text-muted-foreground">
                  +4 from last month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">AI Advice Given</CardTitle>
                <Brain className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{usageStats.adviceGenerated}</div>
                <p className="text-xs text-muted-foreground">
                  {((usageStats.adviceGenerated / usageStats.monthlyLimit) * 100).toFixed(0)}% of monthly limit
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Investment Streak</CardTitle>
                <Trophy className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{usageStats.streak} days</div>
                <p className="text-xs text-muted-foreground">
                  Keep it up! 🔥
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
                <DollarSign className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹{usageStats.totalSaved.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  vs traditional advisory
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Usage Overview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Monthly Usage Breakdown
                </CardTitle>
                <CardDescription>
                  Track your consultation patterns over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyUsage.map((month) => (
                    <div key={month.month} className="flex items-center justify-between">
                      <div className="flex items-center gap-4 min-w-0 flex-1">
                        <span className="font-medium w-8">{month.month}</span>
                        <div className="flex-1 space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Analyses: {month.analyses}</span>
                            <span>Advice: {month.advice}</span>
                          </div>
                          <Progress value={(month.analyses / 20) * 100} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-warning" />
                  Credit Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{usageStats.creditsRemaining}</div>
                    <p className="text-sm text-muted-foreground">Credits Remaining</p>
                  </div>
                  
                  <Progress 
                    value={(usageStats.creditsRemaining / (usageStats.creditsUsed + usageStats.creditsRemaining)) * 100} 
                    className="h-3"
                  />
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Used: {usageStats.creditsUsed}</span>
                    <span>Total: {usageStats.creditsUsed + usageStats.creditsRemaining}</span>
                  </div>

                  <div className="p-3 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm font-medium">Next billing cycle</p>
                    <p className="text-xs text-muted-foreground">Resets in 23 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest consultations and analyses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-card to-muted/10">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'analysis' ? 'bg-primary/20' : 'bg-success/20'
                      }`}>
                        {activity.type === 'analysis' ? 
                          <BarChart3 className="w-5 h-5 text-primary" /> : 
                          <Brain className="w-5 h-5 text-success" />
                        }
                      </div>
                      <div>
                        <p className="font-medium">{activity.description}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {activity.cost} credits
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Billing Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-success" />
                  Billing Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm">Portfolio Analysis</span>
                    <span className="font-medium">₹15 each</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm">AI Stock Advice</span>
                    <span className="font-medium">₹8 each</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <span className="text-sm font-medium">This Month's Total</span>
                    <span className="font-bold text-primary">₹{(usageStats.creditsUsed * 1).toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Investment Knowledge</span>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Portfolio Optimization</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm">Risk Management</span>
                    <span className="text-sm font-medium">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />

                  <div className="p-3 bg-success/10 rounded-lg text-center border border-success/20">
                    <p className="text-sm font-medium text-success">Intermediate Investor</p>
                    <p className="text-xs text-muted-foreground">Keep learning to reach Advanced!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageDashboard;