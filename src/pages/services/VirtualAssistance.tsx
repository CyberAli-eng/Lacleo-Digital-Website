import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const VirtualAssistance = () => {
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
                  Virtual Assistance
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Scale Your Operations with Expert Virtual Support
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital provides skilled virtual assistants who handle administrative tasks, lead qualification, data management, and sales support so you can focus on growing your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Support
                  </Button>
                  <Button variant="outline" size="lg">
                    View Services
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Virtual Assistance"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Challenge & Solution Section */}
        <section className="section py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Business Challenges & Our Virtual Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Addressing operational bottlenecks with skilled virtual assistance
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="border-r border-border pr-8">
                    <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Challenge
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Administrative Overload</h3>
                    <p className="text-muted-foreground">
                      Time-consuming administrative tasks prevent focus on core business activities and strategic growth initiatives.
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Solution
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Administrative Support</h3>
                    <p className="text-muted-foreground">
                      Dedicated virtual assistants handle scheduling, email management, data entry, and other administrative tasks efficiently.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="border-r border-border pr-8">
                    <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Challenge
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Lead Management</h3>
                    <p className="text-muted-foreground">
                      Difficulty managing and following up on leads consistently, resulting in missed opportunities and poor conversion rates.
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Solution
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Lead Qualification & Follow-up</h3>
                    <p className="text-muted-foreground">
                      Virtual assistants qualify leads, manage CRM systems, and ensure consistent follow-up to maximize conversion opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="border-r border-border pr-8">
                    <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Challenge
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Resource Constraints</h3>
                    <p className="text-muted-foreground">
                      Limited budget and resources make it difficult to hire full-time staff for specialized tasks and projects.
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Solution
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Support</h3>
                    <p className="text-muted-foreground">
                      Access skilled professionals on-demand with flexible arrangements that scale with your business needs and budget.
                    </p>
                  </div>
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

export default VirtualAssistance;