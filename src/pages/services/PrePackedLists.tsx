import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PrePackedLists = () => {
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
                  Pre-Packed Lists
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Quick Access to Qualified Leads
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital gives you access to business contact lists that are ready for immediate use. These lists help you reach the right contacts in less time, letting your team focus on making valuable connections and growing your pipeline.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Browse Lists
                  </Button>
                  <Button variant="outline" size="lg">
                    Custom Request
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Pre-Packed Lists"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Features Section */}
        <section className="section py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Pre-Packed Lists
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready-to-use contact databases for immediate campaign deployment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Instant Access</h3>
                <p className="text-muted-foreground">
                  Get immediate access to thousands of verified business contacts ready for your campaigns.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Verified Data</h3>
                <p className="text-muted-foreground">
                  All contacts are verified and updated regularly to ensure high deliverability and accuracy.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Industry Specific</h3>
                <p className="text-muted-foreground">
                  Lists are segmented by industry, company size, and role to match your target criteria.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Rich Data Points</h3>
                <p className="text-muted-foreground">
                  Each contact includes comprehensive information for personalized outreach campaigns.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Cost Effective</h3>
                <p className="text-muted-foreground">
                  More affordable than building custom lists from scratch while maintaining quality.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Regular Updates</h3>
                <p className="text-muted-foreground">
                  Lists are continuously updated to remove outdated contacts and add new prospects.
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

export default PrePackedLists;