import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const LogisticsSupply = () => {
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
                  Logistics and Supply Chain
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Streamline Your Supply Chain with Smart Lead Generation
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital helps logistics and supply chain companies connect with the right prospects to optimize operations, reduce costs, and improve efficiency across the entire value chain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Optimize Operations
                  </Button>
                  <Button variant="outline" size="lg">
                    View Solutions
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Logistics and Supply Chain"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Challenge & Solution Section */}
        <section className="section py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Supply Chain Challenges & Our Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Addressing critical supply chain pain points with targeted lead generation strategies
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="border-r border-border pr-8">
                    <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Challenge
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Supply Chain Visibility</h3>
                    <p className="text-muted-foreground">
                      Limited visibility across complex supply chains leads to inefficiencies and missed opportunities for optimization.
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Solution
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Technology Integration</h3>
                    <p className="text-muted-foreground">
                      Connect with technology providers offering advanced tracking, analytics, and visibility solutions to enhance supply chain transparency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="border-r border-border pr-8">
                    <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Challenge
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Cost Management</h3>
                    <p className="text-muted-foreground">
                      Rising transportation and inventory costs pressure profit margins and operational efficiency.
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Solution
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Optimization Partners</h3>
                    <p className="text-muted-foreground">
                      Identify strategic partners and service providers that can help reduce costs through route optimization, warehousing solutions, and efficiency improvements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="border-r border-border pr-8">
                    <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Challenge
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Supplier Relationships</h3>
                    <p className="text-muted-foreground">
                      Managing multiple supplier relationships and ensuring consistent quality and delivery performance.
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Solution
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Vendor Network Expansion</h3>
                    <p className="text-muted-foreground">
                      Connect with reliable suppliers and vendors to diversify your supply base and improve resilience and performance.
                    </p>
                  </div>
                </div>
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

export default LogisticsSupply;