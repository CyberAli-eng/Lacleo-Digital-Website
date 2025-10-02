import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import enterpriseHero from "@/assets/enterprise-hero.gif";

const Enterprise = () => {
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
                  Solutions for Enterprises at Every Stage
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Smarter Solutions for Global Success
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital partners with large organizations to design scalable, data-driven lead generation and sales strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg">
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-card p-8">
                  <img 
                    src={enterpriseHero} 
                    alt="Enterprise Solutions"
                    className="w-full h-96 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* What We Offer Section */}
        <section className="section py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Enterprise-Grade Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive services designed for large-scale operations and complex requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Pipeline Expansion</h3>
                <p className="text-muted-foreground">
                  Scale your sales pipeline with systematic approaches that generate consistent, high-quality leads across multiple markets and segments.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Account-Based Marketing</h3>
                <p className="text-muted-foreground">
                  Develop sophisticated ABM strategies that penetrate key accounts with personalized campaigns and multi-stakeholder engagement.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Global Market Entry</h3>
                <p className="text-muted-foreground">
                  Navigate international markets with localized strategies, cultural considerations, and region-specific lead generation approaches.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sales Acceleration</h3>
                <p className="text-muted-foreground">
                  Implement advanced tools and processes that accelerate your sales cycle and improve conversion rates at enterprise scale.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Advanced Analytics</h3>
                <p className="text-muted-foreground">
                  Leverage sophisticated analytics and reporting systems to gain deep insights into campaign performance and ROI.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Custom Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate with your existing enterprise systems, CRM platforms, and marketing automation tools.
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

export default Enterprise;