import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import datacenterHero from "@/assets/datacenter-hero.png";

const DataCenter = () => {
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
                  Data Center Solutions
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Drive Growth for Data Center Services
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital specializes in lead generation for data center providers, helping you connect with enterprises that need reliable, scalable infrastructure solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Growing
                  </Button>
                  <Button variant="outline" size="lg">
                    See How It Works
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-card p-8">
                  <img 
                    src={datacenterHero} 
                    alt="Data Center Solutions"
                    className="w-full h-96 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Challenge-Solution Section */}
        <section className="section py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Challenges We Solve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Common obstacles data center providers face and our proven solutions
              </p>
            </div>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 border-r border-border pr-8">
                    <span className="inline-block bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                      Challenge
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      Long Sales Cycles & Complex Decision Making
                    </h3>
                    <p className="text-muted-foreground">
                      Enterprise IT decisions involve multiple stakeholders, lengthy evaluation periods, and complex technical requirements.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      Solution
                    </span>
                    <h3 className="text-xl font-semibold text-primary">
                      Multi-Stakeholder Engagement
                    </h3>
                    <p className="text-muted-foreground">
                      We identify and engage all decision-makers in the buying process, nurturing relationships across technical teams, procurement, and C-suite executives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 border-r border-border pr-8">
                    <span className="inline-block bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                      Challenge
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      Highly Technical & Competitive Market
                    </h3>
                    <p className="text-muted-foreground">
                      Data center services require deep technical knowledge and face intense competition from established providers.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      Solution
                    </span>
                    <h3 className="text-xl font-semibold text-primary">
                      Technical Expertise & Differentiation
                    </h3>
                    <p className="text-muted-foreground">
                      Our team develops technically accurate messaging that highlights your unique value propositions, compliance capabilities, and performance advantages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 border-r border-border pr-8">
                    <span className="inline-block bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                      Challenge
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      Identifying Expansion & Migration Opportunities
                    </h3>
                    <p className="text-muted-foreground">
                      Finding companies ready to expand their infrastructure or migrate from existing providers is challenging.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      Solution
                    </span>
                    <h3 className="text-xl font-semibold text-primary">
                      Strategic Market Intelligence
                    </h3>
                    <p className="text-muted-foreground">
                      We use advanced research tools and market signals to identify companies with growth indicators, technology refresh cycles, and dissatisfaction with current providers.
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

export default DataCenter;