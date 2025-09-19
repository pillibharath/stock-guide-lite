import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, Brain, BarChart3, Users, Target } from "lucide-react";
import PortfolioBuilder from "@/components/PortfolioBuilder";
import SectorGrid from "@/components/SectorGrid";
import AIConsultant from "@/components/AIConsultant";
import UsageDashboard from "@/components/UsageDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"home" | "portfolio" | "sectors" | "consultant" | "dashboard">("home");

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            StockSense
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => setActiveTab("home")}
            className={`font-medium transition-colors ${activeTab === "home" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveTab("portfolio")}
            className={`font-medium transition-colors ${activeTab === "portfolio" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => setActiveTab("sectors")}
            className={`font-medium transition-colors ${activeTab === "sectors" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            Sectors
          </button>
          <button 
            onClick={() => setActiveTab("consultant")}
            className={`font-medium transition-colors ${activeTab === "consultant" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            AI Consultant
          </button>
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`font-medium transition-colors ${activeTab === "dashboard" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            Dashboard
          </button>
        </div>

        <Button variant="hero" onClick={() => setActiveTab("portfolio")}>
          Get Started
        </Button>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-background px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary-light bg-clip-text text-transparent">
            Smart Stock Advice
            <br />
            <span className="text-4xl md:text-6xl">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop guessing with your investments. Get AI-powered stock recommendations in plain English. 
            Perfect for beginners who want to invest confidently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => setActiveTab("portfolio")}
              className="text-lg px-8 py-3"
            >
              Analyze My Portfolio
              <TrendingUp className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setActiveTab("sectors")}
              className="text-lg px-8 py-3"
            >
              Explore Sectors
              <BarChart3 className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 bg-gradient-to-br from-success/10 to-success/5 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-success" />
                </div>
                <CardTitle className="text-xl">AI-Powered Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Get personalized stock advice in simple English. No complex jargon, just actionable recommendations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Smart diversification alerts and risk assessment to protect your investments from market volatility.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-secondary/10 to-secondary/5 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Beginner Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Educational tooltips, learning modules, and step-by-step guidance for confident investing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {activeTab === "home" && <HeroSection />}
      {activeTab === "portfolio" && <PortfolioBuilder />}
      {activeTab === "sectors" && <SectorGrid />}
      {activeTab === "consultant" && <AIConsultant />}
      {activeTab === "dashboard" && <UsageDashboard />}
      
      {/* Fixed bottom navigation for mobile */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-background/90 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-around py-2">
          <button 
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center py-2 px-3 ${activeTab === "home" ? "text-primary" : "text-muted-foreground"}`}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button 
            onClick={() => setActiveTab("portfolio")}
            className={`flex flex-col items-center py-2 px-3 ${activeTab === "portfolio" ? "text-primary" : "text-muted-foreground"}`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-xs mt-1">Portfolio</span>
          </button>
          <button 
            onClick={() => setActiveTab("consultant")}
            className={`flex flex-col items-center py-2 px-3 ${activeTab === "consultant" ? "text-primary" : "text-muted-foreground"}`}
          >
            <Brain className="w-5 h-5" />
            <span className="text-xs mt-1">AI</span>
          </button>
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`flex flex-col items-center py-2 px-3 ${activeTab === "dashboard" ? "text-primary" : "text-muted-foreground"}`}
          >
            <Users className="w-5 h-5" />
            <span className="text-xs mt-1">Usage</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Index;