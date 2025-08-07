import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Beam Effects */}
      <div className="absolute inset-0">
        {/* Rotating Conic Beam */}
        <div className="absolute inset-0 bg-beam-effect opacity-30" />
        {/* Radial Beam from Top */}
        <div className="absolute inset-0 bg-beam-radial animate-beam-pulse" />
        {/* Additional Beam Rays */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent transform -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2" />
      </div>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center animate-glow-pulse">
            <Sparkles className="w-8 h-8 text-background" />
          </div>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient">Copilot Intelligence</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          AI-Powered Financial Navigation
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-white text-background hover:bg-accent/90 transition-smooth text-lg px-8 py-6 rounded-xl font-semibold group"
          >
            Try free for 30 days
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;