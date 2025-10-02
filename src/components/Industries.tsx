import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { subtle } from "crypto";
import { sub } from "date-fns";
import { 
  Building2, 
  Laptop, 
  GraduationCap, 
  Stethoscope, 
  Car, 
  ShoppingCart,
  Factory,
  Banknote
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      subtitle:"Boosting Efficiency with Smarter Lead Generation",
      description: "A global manufacturer improved procurement accuracy and reduced reporting time.",
      stats: "200+ Manufacturing Clients"
    },
      {
      icon: GraduationCap,
      title: "IT Services",
      subtitle:"Driving Client Growth for IT Service Providers",
      description: "An IT services company expanded its market reach and accelerated account growth.",
      stats: "200+ Manufacturing Clients"
    },

    {
      icon: Laptop,
      title: "Software & Technology",
      subtitle:"Scaling Opportunities for Software Innovators",
      description: "A software provider enhanced conversions with LaCleo's targeted campaigns.",
      stats: "150+ Tech Companies"
    },

    {
      icon: Stethoscope,
      title: "Healthcare",
      subtitle:"Helping Health Tech Firms Expand Market Presence",
      description: "A healthcare solutions company boosted adoption using LaCleo's targeted approach.",
      stats: "100+ Healthcare Clients"
    },
    {
      icon: Banknote,
      title: "Financial Services",
      subtitle:"Accelerating Growth for Financial Firms",
      description: "Generating high-quality leads for fintech, banking, and financial service providers across multiple markets.",
      stats: "80+ Financial Partners"
    },
  ];

  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven results across <span className="text-primary">leading industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover how businesses in diverse sectors achieved measurable growth and stronger 
            pipelines with LaCleo's data-driven strategies.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
  {industries.map((industry, index) => (
    <Card
      key={index}
      className="shadow-medium hover:shadow-large group h-full flex flex-col justify-between"
    >
      <CardHeader className="text-center pb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 mx-auto mb-4">
          <industry.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
          {industry.title}
        </CardTitle>
        <CardTitle className="text-muted-foreground text-sm leading-relaxed mb-4">
          {industry.subtitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
          {industry.stats}
        </div>
      </CardContent>
    </Card>
  ))}
</div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Leading Performance
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering consistent results 
              and driving growth for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-accent">875+</div>
              <div className="text-white/80">Total Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-accent">50M+</div>
              <div className="text-white/80">Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-accent">95%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-accent">8+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;