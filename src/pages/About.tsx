import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* About Hero Section */}
        <section className="section py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Our Story
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  About Us
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Your B2B Growth Partner
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LaCleo Digital helps companies grow sales pipelines, reach the right prospects, and achieve lasting business results. Our main goal is sustained growth, not short term wins.
                </p>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="LaCleo Digital Team"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Who We Are Section */}
        <section className="section py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Who We Are</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are a team of B2B marketing specialists who understand that successful lead generation requires more than just volume—it requires precision, strategy, and genuine understanding of your business goals.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach combines data-driven insights with personalized outreach to create campaigns that not only generate leads but drive meaningful business growth.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Results-Driven</h4>
                      <p className="text-muted-foreground">Every campaign is designed with measurable outcomes in mind.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Transparency</h4>
                      <p className="text-muted-foreground">We provide clear reporting and open communication throughout the process.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Partnership</h4>
                      <p className="text-muted-foreground">We work as an extension of your team, not just a vendor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="section py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored growth solutions for B2B companies of all sizes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Lead Generation & Prospecting</h3>
                <p className="text-muted-foreground">Identify and engage with high-quality prospects that match your ideal customer profile.</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Appointment Setting & Sales Outreach</h3>
                <p className="text-muted-foreground">Schedule qualified meetings and manage outreach campaigns that drive conversions.</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📡</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Multi-Channel Campaign Strategy</h3>
                <p className="text-muted-foreground">Integrated approaches using email, LinkedIn, calls, and content marketing.</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Account-Based Marketing</h3>
                <p className="text-muted-foreground">Targeted campaigns focused on your most valuable accounts and prospects.</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Data Enrichment & Verification</h3>
                <p className="text-muted-foreground">Clean, verify and enhance your database with accurate contact information.</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Campaign Tracking & Optimization</h3>
                <p className="text-muted-foreground">Monitor performance and continuously improve results through data-driven insights.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;