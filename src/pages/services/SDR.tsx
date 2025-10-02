import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SDR = () => {
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
                  SDR as a Service
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Build Your Pipeline with Focused Sales Development Support
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital provides dedicated Sales Development Representatives who focus on prospecting, qualifying leads, and booking meetings so your sales team can close more deals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Build Pipeline
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="SDR Services"
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
                Our SDR Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Systematic approach to building your sales pipeline
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Prospect Research & Identification</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Identify and research high-potential prospects that match your ideal customer profile using advanced data tools and market intelligence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '1s'}}>
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Multi-Channel Outreach</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Execute personalized outreach campaigns across email, LinkedIn, phone, and other channels to maximize response rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '2s'}}>
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Lead Qualification</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Qualify prospects using proven frameworks to ensure only high-quality leads are passed to your sales team.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '3s'}}>
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Meeting Scheduling</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Book qualified meetings and demos with prospects, providing detailed context to ensure productive sales conversations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '4s'}}>
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Performance Tracking & Optimization</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Monitor key metrics, analyze performance data, and continuously optimize strategies to improve results and ROI.
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

export default SDR;