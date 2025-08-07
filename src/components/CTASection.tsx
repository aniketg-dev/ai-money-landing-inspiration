import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-b from-transparent to-card/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Try Copilot for free.
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          First month on us.
        </p>
        <Button 
          size="lg"
          className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-smooth"
        >
          <Download className="w-5 h-5 mr-2" />
          Download
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Supercharge your savings and investments
        </p>
      </div>
    </section>
  );
};

export default CTASection;
