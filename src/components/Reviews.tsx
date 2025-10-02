import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, AlertCircle, CheckCircle, Quote } from "lucide-react";

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const reviews = [
    {
      name: "Oliver Dave",
      challenge:
        "Oliver needed a reliable partner to improve lead generation efforts while ensuring responsive customer support.",
      outcome:
        "With LaCleo Digital, he experienced strong support and effective lead generation services, leading to a positive collaboration and plans to continue working with them again.",
      quote:
        "Fantastic experience with their customer support and lead generation service. Will work with them again.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      challenge:
        "Sarah's company was struggling with low-quality leads and poor conversion rates from their existing marketing efforts.",
      outcome:
        "LaCleo Digital's targeted approach resulted in a 60% increase in qualified leads and a 45% improvement in conversion rates within 3 months.",
      quote:
        "The quality of leads improved dramatically. Our sales team is now closing more deals than ever before.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      challenge:
        "Michael needed to scale his B2B outreach efforts but lacked the internal resources and expertise to do so effectively.",
      outcome:
        "LaCleo Digital provided comprehensive SDR services that helped scale outreach efforts 3x while maintaining high engagement rates.",
      quote:
        "They became an extension of our sales team. Professional, results-driven, and highly recommended.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      challenge:
        "Emily's startup needed to establish credibility and reach decision-makers in enterprise companies.",
      outcome:
        "Through targeted ABM campaigns, LaCleo Digital helped secure meetings with C-level executives at Fortune 500 companies.",
      quote:
        "They opened doors we couldn't open ourselves. The ROI on their services exceeded our expectations.",
      rating: 5,
    },
  ];


  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));

  // autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Learn About Our <span className="text-primary">Client's Experiences</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how LaCleo Digital helps businesses achieve their goals with expert lead generation.
          </p>
        </div>

        {/* Embla carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div key={index} className="min-w-full px-4">
                <Card className="rounded-xl shadow-lg">
                  <CardContent className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center text-orange-500 mb-2">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          <h3 className="font-semibold">Challenge</h3>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground">{review.challenge}</p>
                      </div>
                      <div>
                        <div className="flex items-center text-green-500 mb-2">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          <h3 className="font-semibold">Outcome</h3>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground">{review.outcome}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border">
                      <div className="flex items-start space-x-3">
                        <Quote className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <div className="flex items-center mb-2">{renderStars(review.rating)}</div>
                          <p className="italic text-sm md:text-lg mb-2">"{review.quote}"</p>
                          <p className="font-semibold text-primary">{review.name}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
