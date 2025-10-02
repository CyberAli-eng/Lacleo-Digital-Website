import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DataEnrichment = () => {
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
                  Data Enrichment Services
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Make Your Data Clearer and More Useful with LaCleo Digital
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transform incomplete customer data into actionable insights that drive better targeting, personalization, and business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Data Enrichment Services"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Process Section */}
        <section className="section py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Data Enrichment Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to enhancing your customer data
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Data Audit & Assessment</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We analyze your existing database to identify gaps, inconsistencies, and opportunities for enhancement. This includes evaluating data quality, completeness, and accuracy across all contact fields.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Multi-Source Data Collection</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Using professional databases, social media, company websites, and public records, we gather comprehensive information to fill in missing details and validate existing data points.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Data Verification & Validation</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Every data point is verified for accuracy through multiple sources and validation processes. We ensure phone numbers are current, email addresses are deliverable, and job titles are up-to-date.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Enhanced Profile Creation</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We add valuable insights such as company firmographics, technographic data, recent news, funding information, and buying signals to create comprehensive prospect profiles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Segmentation & Delivery</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    The enriched data is organized, segmented according to your criteria, and delivered in your preferred format with detailed documentation of all enhancements made.
                  </p>
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

export default DataEnrichment;