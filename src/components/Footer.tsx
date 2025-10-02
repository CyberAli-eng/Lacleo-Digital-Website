import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const services = [
    "Lead Generation",
    "Appointment Setting",
    "Account-Based Marketing",
    "Sales Development",
    "Digital Marketing",
    "Data Enrichment"
  ];

  const industries = [
    "Technology",
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Education",
    "E-commerce"
  ];

  const regions = [
    "North America",
    "Europe",
    "Asia-Pacific",
    "Australia",
    "Middle East",
    "Africa"
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">LaCleo Digital</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted partner for B2B lead generation, appointment setting, and digital marketing 
              solutions that accelerate revenue growth across global markets.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/90">hello@lacleodigital.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-white/90">Global Operations Center</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Global Reach</h4>
            <ul className="space-y-2">
              {regions.map((region) => (
                <li key={region}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors">
                    {region}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-6">
              Get the latest insights on B2B lead generation and digital marketing trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="cta" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © 2024 LaCleo Digital. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/80 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-accent text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-accent text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;