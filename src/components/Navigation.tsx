import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-background font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl">Copilot</span>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-smooth"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border/50 pt-4">
            <Button 
              className="w-full bg-white text-black hover:bg-gray-100"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;