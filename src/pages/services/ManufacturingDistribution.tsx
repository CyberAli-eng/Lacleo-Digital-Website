import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import manufacturingHero from "@/assets/manufacturing-hero.gif";

const ManufacturingDistribution = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="section py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Manufacturing and Distribution
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Scale Manufacturing Operations with Strategic Partnerships
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital connects manufacturing and distribution companies with key decision-makers to expand markets, optimize operations, and drive sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Scale Operations
                  </Button>
                  <Button variant="outline" size="lg">
                    Explore Solutions
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-card p-8">
                  <img 
                    src={manufacturingHero} 
                    alt="Manufacturing and Distribution"
                    className="w-full h-96 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Services Section */}
        <section className="section py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Manufacturing & Distribution Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive lead generation strategies for manufacturing excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Production Optimization</h3>
                <p className="text-muted-foreground">
                  Connect with technology providers and consultants who can help streamline production processes and improve efficiency.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Distribution Networks</h3>
                <p className="text-muted-foreground">
                  Expand your distribution reach by connecting with new partners, distributors, and logistics providers.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Equipment & Technology</h3>
                <p className="text-muted-foreground">
                  Find suppliers of manufacturing equipment, automation solutions, and technology upgrades.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Supply Chain Management</h3>
                <p className="text-muted-foreground">
                  Optimize your supply chain by connecting with reliable suppliers and inventory management solutions.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Implement quality control systems by connecting with QA technology providers and certification bodies.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Market Expansion</h3>
                <p className="text-muted-foreground">
                  Enter new markets and regions by connecting with local distributors, retailers, and business partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ManufacturingDistribution;