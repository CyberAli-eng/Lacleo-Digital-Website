import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SEO = () => {
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
                  SEO Services
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Drive Organic Growth with Strategic SEO
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital helps businesses improve their search engine visibility, drive organic traffic, and generate qualified leads through comprehensive SEO strategies and content marketing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Boost Rankings
                  </Button>
                  <Button variant="outline" size="lg">
                    Free SEO Audit
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="SEO Services"
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
                Our SEO Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive approach to improving your search engine visibility
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">SEO Audit & Analysis</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Comprehensive analysis of your website's current SEO performance, identifying opportunities and technical issues that need attention.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '1s'}}>
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Keyword Research & Strategy</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    In-depth keyword research to identify high-value search terms and develop a strategic content plan to target your audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '2s'}}>
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Technical SEO Optimization</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Optimize website structure, speed, mobile-friendliness, and technical elements to improve search engine crawling and indexing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '3s'}}>
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Content Creation & Optimization</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Create high-quality, SEO-optimized content that provides value to your audience and ranks well in search results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 animate-pulse" style={{animationDelay: '4s'}}>
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Monitoring & Reporting</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Track rankings, traffic, and conversions with detailed reporting and continuous optimization based on performance data.
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

export default SEO;