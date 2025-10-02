import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Financial = () => {
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
                  Solutions for Financial Services
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Build reliable lead generation programs that connect you with the right decision makers.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From banking to fintech, LaCleo Digital helps financial firms connect with decision makers, reach high-value prospects, and turn conversations into results.
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
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Financial Solutions"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
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
                Financial Services Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized lead generation solutions for the financial industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🏦</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Banking & Credit Solutions</h3>
                <p className="text-muted-foreground">
                  Generate leads for commercial banking, lending, and credit services by targeting businesses with financing needs and growth opportunities.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fintech & Payment Solutions</h3>
                <p className="text-muted-foreground">
                  Connect fintech companies with businesses seeking modern payment processing, digital banking, and financial technology solutions.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Investment & Wealth Management</h3>
                <p className="text-muted-foreground">
                  Reach high-net-worth individuals and businesses looking for investment advisory, wealth management, and financial planning services.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Insurance Services</h3>
                <p className="text-muted-foreground">
                  Generate qualified leads for commercial insurance, risk management, and employee benefits programs.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Compliance & RegTech</h3>
                <p className="text-muted-foreground">
                  Connect regulatory technology companies with financial institutions needing compliance, reporting, and risk management solutions.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Financial Analytics</h3>
                <p className="text-muted-foreground">
                  Help financial analytics and reporting solution providers reach CFOs and finance teams seeking better insights and automation.
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

export default Financial;