import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="/assets/img/logo.png"
                alt="LaCleo Digital Logo"
                className="h-8 sm:h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Services */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-foreground hover:text-primary font-medium">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-[650px] bg-background border border-border rounded-lg shadow-xl p-6 z-50 grid grid-cols-2 gap-6">
                  {/* Core Services */}
                  <div>
                    <h3 className="font-semibold text-primary mb-3 text-sm uppercase">
                      Core Services
                    </h3>
                    <div className="space-y-2">
                      <a href="/bant" className="block hover:text-primary text-sm">BANT Lead Generation</a>
                      <a href="/appointment" className="block hover:text-primary text-sm">Appointment Settings</a>
                      <a href="/account-based-marketing" className="block hover:text-primary text-sm">ABM</a>
                      <a href="/email-campaign" className="block hover:text-primary text-sm">Email Campaigns</a>
                      <a href="/paid-advertising" className="block hover:text-primary text-sm">Paid Advertising</a>
                      <a href="/seo" className="block hover:text-primary text-sm">SEO Services</a>
                      <a href="/sdr" className="block hover:text-primary text-sm">SDR as a Service</a>
                      <a href="/dataenrichment" className="block hover:text-primary text-sm">Data Enrichment</a>
                      <a href="/pre-packed" className="block hover:text-primary text-sm">Pre-Packed Lists</a>
                      <a href="/ecommerce" className="block hover:text-primary text-sm">E-Commerce</a>
                      <a href="/virtual-assistance" className="block hover:text-primary text-sm">Virtual Assistance</a>
                    </div>
                  </div>

                  {/* Global Reach */}
                  <div>
                    <h3 className="font-semibold text-primary mb-3 text-sm uppercase">
                      Global Reach
                    </h3>
                    <div className="space-y-2">
                      <a href="#" className="block hover:text-primary text-sm">APAC</a>
                      <a href="#" className="block hover:text-primary text-sm">NAMER</a>
                      <a href="#" className="block hover:text-primary text-sm">EMEA</a>
                      <a href="#" className="block hover:text-primary text-sm">SKEA</a>
                      <a href="#" className="block hover:text-primary text-sm">Australia</a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-foreground hover:text-primary font-medium">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-background border border-border rounded-lg shadow-xl p-6 z-50 grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-3 text-sm uppercase">
                      By Business Stage
                    </h3>
                    <a href="/enterprise" className="block hover:text-primary text-sm">Enterprise</a>
                    <a href="/smb" className="block hover:text-primary text-sm">SMBs</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-3 text-sm uppercase">
                      By Industry
                    </h3>
                    <a href="/it-solution" className="block hover:text-primary text-sm">Information Technology</a>
                    <a href="/saas" className="block hover:text-primary text-sm">Software / SaaS</a>
                    <a href="/financial" className="block hover:text-primary text-sm">Financial Services</a>
                    <a href="/datacenter" className="block hover:text-primary text-sm">Data Centers</a>
                    <a href="/crm" className="block hover:text-primary text-sm">CRM Software</a>
                    <a href="/erp" className="block hover:text-primary text-sm">ERP</a>
                    <a href="/logistics" className="block hover:text-primary text-sm">Logistics & Supply Chain</a>
                    <a href="/manufacturing" className="block hover:text-primary text-sm">Manufacturing & Distribution</a>
                  </div>
                </div>
              )}
            </div>

            {/* Clients */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("clients")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-foreground hover:text-primary font-medium">
                Clients
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "clients" && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-lg shadow-xl p-6 z-50">
                  <h3 className="font-semibold text-primary mb-3 text-sm uppercase">
                    Success Stories
                  </h3>
                  <a href="#" className="block hover:text-primary text-sm">Case Studies</a>
                  <a href="#" className="block hover:text-primary text-sm">Testimonials</a>
                  <a href="#" className="block hover:text-primary text-sm">Reviews</a>
                  <a href="#" className="block hover:text-primary text-sm">Channel Program</a>
                  <a href="#" className="block hover:text-primary text-sm">Client Login</a>
                </div>
              )}
            </div>

            {/* About */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-foreground hover:text-primary font-medium">
                About Us
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-[500px] bg-background border border-border rounded-lg shadow-xl p-6 z-50 grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-3 text-sm uppercase">
                      Our Company
                    </h3>
                    <a href="/aboutus" className="block hover:text-primary text-sm">Company Story & Mission</a>
                    <a href="#" className="block hover:text-primary text-sm">Meet the Team</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-3 text-sm uppercase">
                      Resources
                    </h3>
                    <a href="#" className="block hover:text-primary text-sm">Blogs</a>
                    <a href="#" className="block hover:text-primary text-sm">EBooks</a>
                    <a href="#" className="block hover:text-primary text-sm">News & Updates</a>
                    <a href="#" className="block hover:text-primary text-sm">GDPR Compliance</a>
                  </div>
                </div>
              )}
            </div>

            {/* Standalone Links */}
            <a href="/faqs" className="text-foreground hover:text-primary font-medium">
              FAQs
            </a>

            <a href="tel:+1234567890" className="flex items-center text-foreground hover:text-primary">
              <Phone className="h-4 w-4 mr-1" /> Call Us
            </a>

            <Button variant="default" size="sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation (simplified, can mirror desktop structure) */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-3">
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="flex items-center justify-between w-full font-medium"
              >
                Services <ChevronRight className={`h-4 w-4 transition ${activeMobileDropdown === "services" ? "rotate-90" : ""}`} />
              </button>
              {activeMobileDropdown === "services" && (
                <div className="pl-4 space-y-1">
                  <a href="/bant" className="block text-sm">BANT Lead Generation</a>
                  <a href="/appointment" className="block text-sm">Appointment Settings</a>
                  <a href="/account-based-marketing" className="block text-sm">ABM</a>
                  <a href="/email-campaign" className="block text-sm">Email Campaigns</a>
                  {/* …rest */}
                </div>
              )}

              <button
                onClick={() => toggleMobileDropdown("solutions")}
                className="flex items-center justify-between w-full font-medium"
              >
                Solutions <ChevronRight className={`h-4 w-4 transition ${activeMobileDropdown === "solutions" ? "rotate-90" : ""}`} />
              </button>
              {activeMobileDropdown === "solutions" && (
                <div className="pl-4 space-y-1">
                  <a href="/enterprise" className="block text-sm">Enterprise</a>
                  <a href="/smb" className="block text-sm">SMBs</a>
                  <a href="/it-solution" className="block text-sm">Information Technology</a>
                  {/* …rest */}
                </div>
              )}

              <a href="/clients" className="block font-medium">Clients</a>
              <a href="/aboutus" className="block font-medium">About Us</a>
              <a href="/faqs" className="block font-medium">FAQs</a>
              <a href="tel:+1234567890" className="block font-medium">Call Us</a>

              <Button variant="default" size="sm" className="w-full mt-2" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
