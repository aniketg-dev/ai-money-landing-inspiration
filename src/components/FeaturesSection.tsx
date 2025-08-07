import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Shield, 
  Search, 
  MessageCircle, 
  Target, 
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Lock,
  Zap
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Predictive Spending Categorization */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Predictive Spending Categorization
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Your data is your superpower
        </p>
        
        {/* Category Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { emoji: "🥡", label: "DELIVERY" },
            { emoji: "🔑", label: "RENT" },
            { emoji: "🛫", label: "TRAVEL" },
            { emoji: "🥑", label: "GROCERIES" },
            { emoji: "💈", label: "SELF CARE" },
            { emoji: "🛍", label: "SHOPS" },
            { emoji: "💳", label: "SUBSCRIPTIONS" },
            { emoji: "👾", label: "ENTERTAINMENT" },
            { emoji: "☕️", label: "COFFEE" },
            { emoji: "❤️", label: "THERAPY" }
          ].map((category) => (
            <Badge 
              key={category.label} 
              variant="secondary" 
              className="px-4 py-2 text-sm bg-card border border-border/50 hover:border-primary/50 transition-smooth"
            >
              <span className="mr-2">{category.emoji}</span>
              {category.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {/* It only gets smarter */}
        <Card className="p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-smooth">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-background" />
            </div>
            <h3 className="text-xl font-semibold">It only gets smarter</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Copilot learns from your behavior to categorize transactions automatically,
            eliminating the need for manual rule creation. Simply review your transactions and
            Copilot will make better predictions over time.
          </p>
        </Card>

        {/* Remove the guesswork */}
        <Card className="p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-smooth">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-background" />
            </div>
            <h3 className="text-xl font-semibold">Remove the guesswork</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            If Copilot guesses incorrectly and you need to change the category, Intelligence
            will bump the second-best guess to the top.
          </p>
        </Card>

        {/* Keep data private */}
        <Card className="p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-smooth">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-background" />
            </div>
            <h3 className="text-xl font-semibold">Keep data private</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            This is for you and you only. You get your own private categorization model
            based on your data, and nothing leaves Copilot's systems.
          </p>
        </Card>
      </div>

      {/* Privacy Section */}
      <div className="text-center mb-24">
        <h3 className="text-2xl font-semibold mb-8">Private & safe, as it should be</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-card/30 border-border/30">
            <Lock className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h4 className="font-semibold mb-2">Access</h4>
            <p className="text-sm text-muted-foreground">
              This prediction model is fully personalized and used only for your own
              transactions. We don't sell any data to third-parties.
            </p>
          </Card>
          <Card className="p-6 bg-card/30 border-border/30">
            <CheckCircle className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h4 className="font-semibold mb-2">Retention</h4>
            <p className="text-sm text-muted-foreground">
              You can delete your Copilot account at any time directly through the app. All
              associated models get deleted as well.
            </p>
          </Card>
          <Card className="p-6 bg-card/30 border-border/30">
            <Shield className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h4 className="font-semibold mb-2">Infrastructure</h4>
            <p className="text-sm text-muted-foreground">
              Our infrastructure is built on the Google Cloud Platform (GCP), which is used by
              leading financial companies worldwide.
            </p>
          </Card>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">Coming soon to Mac and iOS</span>
        </div>
        <h3 className="text-3xl font-bold mb-8">Keep an eye out for more</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["Forecasting", "Benchmarking", "Spending Suggestions", "+More"].map((feature) => (
            <div key={feature} className="p-4 bg-card/30 border border-border/30 rounded-lg">
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Goals */}
      <Card className="p-8 mb-16 bg-gradient-to-br from-card/80 to-card/40 border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6 text-background" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Smart Financial Goals</h3>
            <p className="text-muted-foreground">
              Forget creating manual calculations to plan your future. Copilot will provide
              smart suggestions to make creating goals a breeze.
            </p>
          </div>
        </div>
      </Card>

      {/* Search & Find */}
      <Card className="p-8 mb-16 bg-gradient-to-br from-card/80 to-card/40 border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
            <Search className="w-6 h-6 text-background" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Search & Find</h3>
            <p className="text-muted-foreground">
              Query your transactions using natural language. Copilot translates your search
              into filters, helping find what you need in seconds.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground pl-4">
          <div className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <span>show me food related purchases from June</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <span>unreviewed transactions above $100</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <span>only show Amazon transactions</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <span>transactions with tips above $20</span>
          </div>
        </div>
      </Card>

      {/* Chat Interface */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-background" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Chat with your Copilot</h3>
            <p className="text-muted-foreground">
              A conversational interface to explore your finances like never before. Gain
              insights, and ask Copilot for help in setting up your next goal.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default FeaturesSection;
