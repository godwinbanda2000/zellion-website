import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Home, Building, MapPin } from "lucide-react";
import propertiesImage from "@/assets/properties-showcase.jpg";

const Showcase = () => {
  const propertyTypes = [
    {
      icon: Home,
      title: "Residential Homes",
      count: "25,000+",
      description: "Single-family homes, condos, and townhouses"
    },
    {
      icon: Building,
      title: "Commercial Properties",
      count: "8,500+",
      description: "Office spaces, retail, and industrial properties"
    },
    {
      icon: MapPin,
      title: "Luxury Estates",
      count: "3,200+",
      description: "Premium properties and exclusive listings"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative animate-fade-in">
            <img 
              src={propertiesImage} 
              alt="Property Showcase" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-large"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
            
            {/* Floating Stats Card */}
            <Card className="absolute bottom-6 left-6 right-6 p-4 bg-background/95 backdrop-blur-sm border-border">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-primary">50,000+</div>
                  <div className="text-sm text-muted-foreground">Active Listings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">2,500+</div>
                  <div className="text-sm text-muted-foreground">Sold This Month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">New Daily</div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Right Side - Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Explore Premium
              <span className="text-primary block">Real Estate Portfolio</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From cozy starter homes to luxury estates, Zellion features the most 
              comprehensive collection of verified properties. Every listing includes 
              detailed information, professional photography, and virtual tours.
            </p>
            
            {/* Property Types */}
            <div className="space-y-4 mb-8">
              {propertyTypes.map((type, index) => (
                <Card key={index} className="p-4 bg-gradient-card border-border hover:shadow-soft transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{type.title}</h3>
                        <span className="text-sm font-bold text-primary">{type.count}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Button variant="hero" size="lg" className="flex items-center gap-2">
              Browse Properties
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Showcase;