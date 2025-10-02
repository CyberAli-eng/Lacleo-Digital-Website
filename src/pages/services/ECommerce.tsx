import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ECommerce = () => {
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
                  E-Commerce Consultancy
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Build, Scale, and Optimize Your Online Business
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital helps businesses plan, launch, and grow e-commerce operations with a clear focus on performance and scalability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Growing
                  </Button>
                  <Button variant="outline" size="lg">
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="E-Commerce Solutions"
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
                Complete E-Commerce Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From strategy to execution, we cover every aspect of your online business growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🏪</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Platform Selection & Setup</h3>
                <p className="text-muted-foreground">
                  Choose the right e-commerce platform and configure it for optimal performance, scalability, and user experience.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Conversion Rate Optimization</h3>
                <p className="text-muted-foreground">
                  Improve your website's ability to convert visitors into customers through strategic design and user experience enhancements.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Analytics & Performance Tracking</h3>
                <p className="text-muted-foreground">
                  Implement comprehensive tracking systems to monitor sales, customer behavior, and marketing campaign effectiveness.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Shopping Experience Optimization</h3>
                <p className="text-muted-foregroundmb-3">
                  Streamline the customer journey from product discovery to checkout, reducing friction and increasing satisfaction.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Mobile Commerce Strategy</h3>
                <p className="text-muted-foreground">
                  Optimize your online store for mobile devices and develop strategies for the growing mobile commerce market.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Integration & Automation</h3>
                <p className="text-muted-foreground">
                  Connect your e-commerce platform with inventory management, CRM, and marketing tools for seamless operations.
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

export default ECommerce;