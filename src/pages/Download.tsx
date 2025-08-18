import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Apple, Smartphone, Monitor, Check } from "lucide-react";

const Download = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Download <span className="bg-gradient-primary bg-clip-text text-transparent">Cre8Circle</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Get started with Cre8Circle on your favorite platform and join the creative revolution.
          </p>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Mobile App */}
            <div className="text-center p-8 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-subtle flex items-center justify-center">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Mobile App</h3>
              <p className="text-muted-foreground mb-6">
                Create and collaborate on the go with our full-featured mobile experience.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow">
                  <Apple className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>
            </div>

            {/* Desktop App */}
            <div className="text-center p-8 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-subtle flex items-center justify-center">
                <Monitor className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Desktop App</h3>
              <p className="text-muted-foreground mb-6">
                Powerful desktop tools for professional creators who demand the best.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download for Mac
                </Button>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download for Windows
                </Button>
              </div>
            </div>

            {/* Web App */}
            <div className="text-center p-8 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-subtle flex items-center justify-center">
                <Monitor className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Web App</h3>
              <p className="text-muted-foreground mb-6">
                Access Cre8Circle from any browser - no download required.
              </p>
              <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow">
                Launch Web App
              </Button>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-secondary/20 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Real-time collaboration tools",
                "Advanced creative suite",
                "Cloud sync across devices",
                "Community features",
                "Project management tools",
                "Export in multiple formats"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Minimum Requirements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 4GB RAM</li>
                <li>• 2GB storage space</li>
                <li>• Internet connection</li>
                <li>• Modern web browser</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Recommended</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 8GB+ RAM</li>
                <li>• 5GB+ storage space</li>
                <li>• High-speed internet</li>
                <li>• Dedicated graphics card</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;