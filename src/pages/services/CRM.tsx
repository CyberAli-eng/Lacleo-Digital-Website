import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import crmHero from "@/assets/crm-hero.jpeg";

const CRM = () => {
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
                  Solutions for CRM Software
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  LaCleo Digital helps CRM software providers generate qualified leads and engage the right buyers.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital designs campaigns that align the product's strengths with business needs, making it easier to build trust and convert prospects into customers.
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
                <div className="relative rounded-2xl overflow-hidden bg-card">
                  <img 
                    src={crmHero} 
                    alt="CRM Solutions"
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
                How LaCleo Digital Helps CRM Vendors Grow
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide full support in the lead generation process:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Strategy & Research</h3>
                <p className="text-muted-foreground">
                  Map out target markets, business profiles, and decision-maker roles that match your ideal CRM user.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Message Development and Content</h3>
                <p className="text-muted-foreground">
                  Create messaging focused on clear use cases, integration benefits, and ROI. Deliver content like case studies, product comparisons, and webinars.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Lead Generation & Outreach</h3>
                <p className="text-muted-foreground">
                  Execute multi-channel campaigns to reach decision makers and technical evaluators at target companies.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Performance Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor campaign effectiveness, lead quality, and conversion rates to optimize performance.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sales Enablement</h3>
                <p className="text-muted-foreground">
                  Provide sales teams with qualified leads and detailed prospect intelligence for higher close rates.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Continuous Optimization</h3>
                <p className="text-muted-foreground">
                  Refine targeting, messaging, and processes based on performance data and market feedback.
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

export default CRM;