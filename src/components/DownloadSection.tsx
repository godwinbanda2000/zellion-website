import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Smartphone, Star, Users } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Find Your
            <span className="text-secondary block">Perfect Home?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join millions of users who trust Zellion for their real estate needs. 
            Download the app today and start your journey.
          </p>
        </div>
        
        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* App Store */}
          <Card className="p-8 bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-center hover:shadow-glow transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">📱</div>
            </div>
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">iOS App Store</h3>
            <p className="text-primary-foreground/70 mb-6">Download for iPhone and iPad</p>
            <Button variant="download" size="lg" className="w-full">
              <Download className="h-5 w-5 mr-2" />
              Download for iOS
            </Button>
          </Card>
          
          {/* Google Play */}
          <Card className="p-8 bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-center hover:shadow-glow transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🤖</div>
            </div>
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">Google Play</h3>
            <p className="text-primary-foreground/70 mb-6">Download for Android devices</p>
            <Button variant="download" size="lg" className="w-full">
              <Download className="h-5 w-5 mr-2" />
              Download for Android
            </Button>
          </Card>
          
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/80">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-secondary" />
            <span className="font-semibold">1M+ Active Users</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-secondary fill-current" />
            <span className="font-semibold">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-secondary" />
            <span className="font-semibold">iOS & Android</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;