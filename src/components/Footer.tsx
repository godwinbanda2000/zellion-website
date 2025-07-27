import { Smartphone, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Mobile App", "Desktop", "API"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Partners", "Blog"]
    },
    {
      title: "Resources",
      links: ["Help Center", "Documentation", "Tutorials", "Community", "Status"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Licensing"]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">Zellion</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
              The leading real estate platform connecting buyers, sellers, and agents 
              with smart technology and comprehensive property data.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                <span>hello@zellion.com</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                <span>1-800-ZELLION</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-primary-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/70 hover:text-secondary transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/70 text-sm">
              © 2024 Zellion. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5">𝕏</div>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5">f</div>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5">in</div>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <div className="w-5 h-5">📷</div>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;