import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SMB = () => {
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
                  Solutions for SMBs at Every Stage
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Tailored Approaches for Every Business Phase
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital works with small and medium-sized businesses to help them build, grow, and manage their sales pipelines. Our support is designed for each phase, from starting out to expanding your market.
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
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="SMB Solutions"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Solutions by Stage Section */}
        <section className="section py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Solutions by Business Stage
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Customized lead generation strategies for every phase of business growth
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-primary text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Startup Phase</h3>
                <p className="text-muted-foreground mb-4">
                  Just getting started? We help you identify your first customers and build initial market traction.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Market validation and customer discovery</li>
                  <li>• Initial lead generation campaigns</li>
                  <li>• Founding team sales training</li>
                  <li>• Basic CRM setup and processes</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-primary text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Growth Phase</h3>
                <p className="text-muted-foreground mb-4">
                  Ready to scale? We help you build consistent pipeline and optimize your sales processes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Scalable lead generation systems</li>
                  <li>• Sales process optimization</li>
                  <li>• Multi-channel marketing campaigns</li>
                  <li>• Sales team development</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-primary text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Expansion Phase</h3>
                <p className="text-muted-foreground mb-4">
                  Looking to expand? We help you enter new markets and reach larger enterprise clients.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Market expansion strategies</li>
                  <li>• Enterprise sales development</li>
                  <li>• Partnership channel development</li>
                  <li>• Advanced analytics and reporting</li>
                </ul>
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

export default SMB;