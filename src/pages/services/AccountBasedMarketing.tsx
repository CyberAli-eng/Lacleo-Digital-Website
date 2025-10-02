import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AccountBasedMarketing = () => {
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
                  Account-Based Marketing
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Target High-Value Accounts with Precision
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital delivers strategic Account-Based Marketing campaigns that focus resources on your most valuable prospects, driving higher conversion rates and deal sizes through personalized, multi-touch engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Target Accounts
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn Strategy
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Account-Based Marketing"
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
                Our ABM Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic approach to targeting and engaging high-value accounts
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded"></div>
                
                <div className="space-y-12">
                  <div className="flex items-start gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 relative z-10 shadow-lg">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">Account Identification & Prioritization</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        Identify and research high-value target accounts using firmographic data, intent signals, and strategic fit analysis.
                      </p>
                      <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                        <p className="text-sm text-primary font-medium">
                          ✓ Prioritized account list with detailed company intelligence and stakeholder mapping
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 relative z-10 shadow-lg">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">Stakeholder Mapping & Research</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        Map key decision-makers and influencers within target accounts, understanding their roles, pain points, and communication preferences.
                      </p>
                      <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                        <p className="text-sm text-primary font-medium">
                          ✓ Comprehensive stakeholder profiles with personalized messaging strategies
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 relative z-10 shadow-lg">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">Personalized Multi-Channel Campaigns</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        Execute coordinated campaigns across email, LinkedIn, direct mail, and advertising channels with personalized messaging for each stakeholder.
                      </p>
                      <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                        <p className="text-sm text-primary font-medium">
                          ✓ Higher engagement rates through relevant, personalized touchpoints
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 relative z-10 shadow-lg">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">Account Intelligence & Tracking</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        Monitor account engagement, track buyer journey progression, and provide sales teams with real-time insights for optimal timing.
                      </p>
                      <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                        <p className="text-sm text-primary font-medium">
                          ✓ Detailed account scoring and engagement analytics for informed sales conversations
                        </p>
                      </div>
                    </div>
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

export default AccountBasedMarketing;