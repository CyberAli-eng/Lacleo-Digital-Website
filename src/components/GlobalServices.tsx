import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ArrowRight } from "lucide-react";

const GlobalServices = () => {
  const regions = [
    {
      name: "North America",
      description: "10k+ lead gen campaigns across enterprise markets",
      icon: "🇺🇸",
      stats: "10K+ Campaigns",
    },
    {
      name: "EMEA",
      description: "Driving scalable growth for Europe, Middle East, and Africa's top B2B markets",
      icon: "🇪🇺",
      stats: "50+ Countries",
    },
    {
      name: "Asia-Pacific",
      description: "Proven B2B marketing expertise across Singapore, ANZ, and Asia's fastest-growing markets",
      icon: "🌏",
      stats: "20+ Markets",
    },
    {
      name: "Australia",
      description: "Extensive B2B lead gen experience across technology, services, and industrial sectors",
      icon: "🇦🇺",
      stats: "5+ Years",
    },
  ];

  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/globe.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-white font-medium mb-6 backdrop-blur-md">
            <Globe className="h-5 w-5" />
            Global Lead Generation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Unlock new growth in{" "}
            <span className="text-primary">B2B & B2C markets</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Expand your reach and capture high-quality leads across North America, EMEA, APAC and Australia.
            Drive opportunities tailored for enterprises and consumers alike.
          </p>
          <Button variant="cta" size="lg" className="group">
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {regions.map((region) => (
            <Card
              key={region.name}
              className="bg-white/10 border-none shadow-lg hover:shadow-xl transition-all duration-300 group text-white backdrop-blur-md"
            >
              <CardHeader className="text-center pb-2">
                <div className="text-4xl mb-3">{region.icon}</div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {region.name}
                </CardTitle>
                <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2">
                  {region.stats}
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-gray-200 text-sm leading-relaxed">
                  {region.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalServices;
