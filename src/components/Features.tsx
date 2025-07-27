import { Card } from "@/components/ui/card";
import { 
  Search, 
  MapPin, 
  Calculator, 
  Camera, 
  Users, 
  Shield,
  Smartphone,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "AI-powered property search with advanced filters for location, price, amenities, and more."
    },
    {
      icon: MapPin,
      title: "Interactive Maps",
      description: "Explore neighborhoods with detailed maps, local amenities, and proximity insights."
    },
    {
      icon: Calculator,
      title: "Mortgage Calculator",
      description: "Built-in tools to calculate payments, compare rates, and estimate affordability."
    },
    {
      icon: Camera,
      title: "Virtual Tours",
      description: "Immersive 360° tours and high-quality photos for every listing."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect directly with verified agents, brokers, and real estate professionals."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-level security for all transactions and personal information."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Seamless experience across all devices with offline capabilities."
    },
    {
      icon: TrendingUp,
      title: "Market Analytics",
      description: "Real-time market trends, price predictions, and investment insights."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="text-primary block">Find Perfect Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zellion combines cutting-edge technology with real estate expertise to deliver 
            the most comprehensive property search experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border hover:shadow-medium transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;