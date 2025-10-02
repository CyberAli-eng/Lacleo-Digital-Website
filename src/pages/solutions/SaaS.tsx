import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import saasHero from "@/assets/saas-hero.gif";

const SaaS = () => {
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
                  Software & SaaS Solutions
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Build, manage, and scale lead generation programs built for sustainable growth
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At LaCleo Digital, we work with software and SaaS companies who need to fill their pipelines, reach the right buyers, and navigate long decision cycles. Our focus is on connecting your solutions to companies that are ready to listen and act.
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
                    src={saasHero} 
                    alt="SaaS Solutions"
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
                How LaCleo Digital Helps SaaS Companies Grow
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized lead generation strategies for software and SaaS businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Targeted Prospecting</h3>
                <p className="text-muted-foreground">
                  Identify and reach decision-makers who are actively looking for software solutions in your category.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Pipeline Development</h3>
                <p className="text-muted-foreground">
                  Build consistent pipeline flow with qualified leads that match your ideal customer profile.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Message Positioning</h3>
                <p className="text-muted-foreground">
                  Craft compelling value propositions that clearly communicate your software's benefits and ROI.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Trial Conversions</h3>
                <p className="text-muted-foreground">
                  Generate high-quality trial users and nurture them through the conversion funnel.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Enterprise Sales</h3>
                <p className="text-muted-foreground">
                  Connect with enterprise buyers and navigate complex B2B sales cycles effectively.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Performance Analytics</h3>
                <p className="text-muted-foreground">
                  Track and optimize campaign performance with detailed analytics and conversion metrics.
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

export default SaaS;