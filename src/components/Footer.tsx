import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-background font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl">Copilot</span>
            </div>
            <p className="text-muted-foreground">
              AI-Powered Financial Navigation
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">More about Copilot</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-foreground transition-colors">Features & Pricing</a>
              <a href="#" className="block hover:text-foreground transition-colors">Privacy & Security</a>
              <a href="#" className="block hover:text-foreground transition-colors">Help center</a>
              <a href="#" className="block hover:text-foreground transition-colors">Terms of service</a>
              <a href="#" className="block hover:text-foreground transition-colors">Privacy policy</a>
              <a href="#" className="block hover:text-foreground transition-colors">Changelog</a>
              <a href="#" className="block hover:text-foreground transition-colors">Careers</a>
            </div>
          </div>

          {/* Download */}
          <div className="space-y-4">
            <h4 className="font-semibold">For Mac and iPhone</h4>
            <Button 
              className="bg-white text-black hover:bg-gray-100 w-full"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/20">
          <p className="text-sm text-muted-foreground">
            © Copyright 2023 Copilot Money, Inc.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social links would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
