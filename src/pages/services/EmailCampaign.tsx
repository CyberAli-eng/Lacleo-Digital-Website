import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const EmailCampaign = () => {
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
                  Email Campaign Services
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Drive Results with Strategic Email Marketing
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital creates and manages email campaigns that engage prospects, nurture leads, and drive conversions through personalized, data-driven approaches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Campaign
                  </Button>
                  <Button variant="outline" size="lg">
                    View Examples
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Email Campaign Services"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Campaign Process Section */}
        <section className="section py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Email Campaign Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology for creating high-performing email campaigns
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Strategy Development</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We analyze your target audience, define campaign objectives, and create a comprehensive strategy that aligns with your business goals and customer journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '1s'}}>
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">List Segmentation & Targeting</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Create targeted segments based on demographics, behavior, purchase history, and engagement levels to ensure relevant messaging reaches the right audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '2s'}}>
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Content Creation & Design</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Develop compelling subject lines, engaging content, and responsive email templates that drive action and reflect your brand identity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '3s'}}>
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Testing & Optimization</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Conduct A/B tests on subject lines, content, send times, and call-to-actions to maximize open rates, click-through rates, and conversions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '4s'}}>
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Performance Analysis & Reporting</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Monitor campaign performance, analyze results, and provide detailed reports with actionable insights for continuous improvement.
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

export default EmailCampaign;