import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional B2B lead generation background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-gradient-to-r from-primary/50 via-dark/50 to-primary/50"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-background/70 to-primary/70"></div> */}
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Harnessing Human + AI Power for
            <span className="block text-gradient bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Next Level B2B Lead Generation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Generate qualified leads, accelerate sales cycles, and drive revenue growth with our proven strategies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
            >
              Get More Sales
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;