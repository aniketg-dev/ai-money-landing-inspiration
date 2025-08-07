import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const FeatureSection = () => {
  const transactions = [
    {
      icon: "🥑",
      category: "GROCERIES",
      amount: "$205.19",
      merchant: "Instacart",
      description: "Instacart Groc*TH1ce6vd0",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "🛍",
      category: "SHOPS",
      amount: "$1032.34",
      merchant: "Apple.com-us",
      description: "Apple.com-us",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "☕️",
      category: "COFFEE",
      amount: "$15.24",
      merchant: "Doordash",
      description: "Dd Doordash philzcoff",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: "🥡",
      category: "DELIVERY",
      amount: "$28.50",
      merchant: "Uber Eats",
      description: "Uber Eats - Local Restaurant",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const categories = [
    { icon: "🔑", label: "RENT" },
    { icon: "🛫", label: "TRAVEL" },
    { icon: "💈", label: "SELF CARE" },
    { icon: "💳", label: "SUBSCRIPTIONS" },
    { icon: "👾", label: "ENTERTAINMENT" },
    { icon: "❤️", label: "THERAPY" }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Feature Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Predictive Spending Categorization</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your data is your <span className="text-gradient">superpower</span>
          </h2>
        </div>

        {/* Transaction Cards Demo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {transactions.map((transaction, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl">{transaction.icon}</div>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${transaction.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
              </div>
              
              <div className="space-y-2">
                <div className="text-xs font-medium text-primary">{transaction.category}</div>
                <div className="text-2xl font-bold">{transaction.amount}</div>
                <div className="text-sm text-muted-foreground">{transaction.description}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="p-4 text-center bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-smooth cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{category.icon}</div>
              <div className="text-xs font-medium text-muted-foreground">{category.label}</div>
            </Card>
          ))}
        </div>

        {/* Feature Description */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">It only gets smarter</h3>
          <p className="text-lg text-muted-foreground">
            Copilot learns from your behavior to categorize transactions automatically, 
            eliminating the need for manual rule creation. Simply review your transactions 
            and Copilot will make better predictions over time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;