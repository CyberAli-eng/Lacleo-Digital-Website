import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import itHero from "@/assets/it-hero.png";

const ITSolutions = () => {
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
                  IT Industry Specialists
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Solutions for Information Technology
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Build, manage, and scale lead generation programs that produce steady growth.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At LaCleo Digital, we know the IT sector moves quickly with shifting needs and complex buying cycles. Our solutions help technology businesses reach the right prospects, simplify growth, and achieve measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Growing
                  </Button>
                  <Button variant="outline" size="lg">
                    See How It Works
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">45%</div>
                    <div className="text-sm text-muted-foreground">Faster Sales Cycle</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">3.2x</div>
                    <div className="text-sm text-muted-foreground">Lead Quality Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">280%</div>
                    <div className="text-sm text-muted-foreground">ROI on Average</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-card p-8">
                  <img 
                    src={itHero} 
                    alt="IT Solutions"
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
                IT-Focused Lead Generation Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized solutions for technology companies and IT service providers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Cloud Solutions Marketing</h3>
                <p className="text-muted-foreground">
                  Generate leads for cloud migration, SaaS platforms, and infrastructure services by targeting businesses ready for digital transformation.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Cybersecurity Lead Generation</h3>
                <p className="text-muted-foreground">
                  Connect cybersecurity providers with organizations seeking protection against evolving threats and compliance requirements.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">💾</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Software & Application Marketing</h3>
                <p className="text-muted-foreground">
                  Drive adoption for business software, applications, and development tools through targeted campaigns and technical decision-maker outreach.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Managed IT Services</h3>
                <p className="text-muted-foreground">
                  Generate leads for MSPs and IT service providers by identifying businesses with technology challenges, support needs, and growth plans.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Data & Analytics Solutions</h3>
                <p className="text-muted-foreground">
                  Help data analytics, BI, and AI solution providers reach businesses seeking insights, automation, and data-driven decision making.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Network & Infrastructure</h3>
                <p className="text-muted-foreground">
                  Connect network solution providers with organizations upgrading infrastructure, expanding operations, or improving connectivity.
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

export default ITSolutions;