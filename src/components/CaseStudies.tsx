import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "/client-logos/LambdaTest.jpg", // logo file in public/client-logos
      isLogo: true,
      industry: "SaaS Technology",
      description:
        "LambdaTest used our pre-packed list and Appointment Setting Services to connect with decision-makers, secure qualified meetings, and speed up their sales pipeline.",
      metrics: [
        { icon: Users, label: "Companies Reached", value: "10K+" },
        { icon: TrendingUp, label: "Pipeline Growth", value: "40%" },
      ],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      company: "/client-logos/edureka.png",
      isLogo: true, // plain text fallback
      industry: "Education Technology",
      description:
        "Edureka used account-based marketing for lead generation to reach high-value accounts, engage key decision-makers, and improve 40% conversion rates.",
      metrics: [
        { icon: TrendingUp, label: "Conversion Rate", value: "40%" },
        { icon: Users, label: "Decision Makers", value: "2.5K+" },
      ],
      gradient: "from-green-500 to-green-600",
    },
    {
      company: "/client-logos/livspace.png",
      isLogo: true,
      industry: "Home Design",
      description:
        "Livspace used our lead generation and digital marketing services to expand their reach, attract qualified prospects, and convert more opportunities into customers.",
      metrics: [
        { icon: DollarSign, label: "Revenue Growth", value: "35%" },
        { icon: Users, label: "New Customers", value: "1.2K+" },
      ],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      company: "/client-logos/binmile.jpg",
      isLogo: true,
      industry: "Software Development",
      description:
        "Binmile used our lead generation services to grow their client base by 30% and boost annual revenue by 20%.",
      metrics: [
        { icon: Users, label: "Client Growth", value: "30%" },
        { icon: DollarSign, label: "Revenue Boost", value: "20%" },
      ],
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LaCleo Digital{" "}
            <span className="text-primary">Client Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Businesses across industries trust LaCleo Digital for B2B lead
            generation, SDR support, Digital marketing and ABM solutions that
            accelerate revenue.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-8">
                {/* Company Logo / Text */}
                <div
                  className={`inline-flex py-3  mb-6 group-hover:scale-105`}
                >
                  {study.isLogo ? (
                    <img
                      src={study.company}
                      alt="Client Logo"
                      className="max-h-[50px] max-w-[180px] object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-white font-bold text-xl">
                      {study.company}
                    </span>
                  )}
                </div>

                {/* Industry */}
                <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                  {study.industry}
                </p>

                {/* Description */}
                <p className="text-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg transition duration-300 hover:bg-primary/20"
                    >
                      <metric.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="font-bold text-2xl text-primary">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="group">
            Start Generating Leads
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
