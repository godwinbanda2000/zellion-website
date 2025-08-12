import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import appMockup from "@/assets/app-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Smartphone className="h-8 w-8 text-secondary" />
              <span className="text-secondary font-semibold text-lg">
                Zellion
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Find Your
              <span className="text-secondary block">Dream Home</span>
            </h1>

            <p className="text-xl text-primary-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover the perfect property with Zellion's smart real estate
              platform. Search, explore, and connect with top properties in your
              area.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-primary-foreground/70">
                  Properties
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">1M+</div>
                <div className="text-sm text-primary-foreground/70">
                  Downloads
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-secondary fill-current" />
                <span className="text-xl font-bold text-secondary">4.9</span>
                <span className="text-sm text-primary-foreground/70">
                  Rating
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="cta"
                size="xl"
                className="flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Now
              </Button>
              <Button variant="download" size="xl">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Side - App Mockup */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <img
                src={appMockup}
                alt="Zellion Mobile App"
                className="w-80 h-auto drop-shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-medium">
                New!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
