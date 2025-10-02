import { useEffect, useRef } from 'react';

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const clientLogos = [
    { 
      name: "99minds", 
      logo: "/client-logos/99minds.png",
      width: 200,
      height: 60
    },
    { 
      name: "Binmile", 
      logo: "/client-logos/binmile.jpg",
      width: 200,
      height: 60
    },
    { 
      name: "LambdaTest", 
      logo: "/client-logos/LambdaTest.jpg",
      width: 200,
      height: 60
    },
    { 
      name: "Smiler", 
      logo: "/client-logos/smiler.png",
      width: 200,
      height: 60
    },
    { 
      name: "Edureka", 
      logo: "/client-logos/edureka.png",
      width: 200,
      height: 60
    },
    { 
      name: "Livspace", 
      logo: "/client-logos/livspace.png",
      width: 200,
      height: 60
    },
    { 
      name: "Microsoft", 
      logo: "/client-logos/microsoft.png",
      width: 200,
      height: 60
    },
    { 
      name: "Hexaview", 
      logo: "/client-logos/hexaview.webp",
      width: 200,
      height: 60
    },
    { 
      name: "Keploy", 
      logo: "/client-logos/keploy.png",
      width: 200,
      height: 60
    },
    { 
      name: "Vertex", 
      logo: "/client-logos/Vertex.png",
      width: 200,
      height: 60
    },
    { 
      name: "Binary Solutions", 
      logo: "/client-logos/bs.png",
      width: 200,
      height: 60
    },
    { 
      name: "PAAI", 
      logo: "/client-logos/paai.jpg",
      width: 200,
      height: 60
    },
    { 
      name: "weya", 
      logo: "/client-logos/weya.png",
      width: 200,
      height: 60
    },
  ];

  // Duplicate the logos for seamless scrolling
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful companies that trust our solutions to drive their growth
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-60" />
          <div className="absolute right-0 top-0 bottom-0 w-60 " />
          
          <div
            ref={scrollRef}
            className="flex gap-16 items-center py-6"
            style={{
              width: 'calc(200% + 200px)',
            }}
          >
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 opacity-70 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="max-w-[200px] max-h-[50px] object-contain filter invert-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 2));
            }
          }
          .flex.gap-16 {
            animation: scroll 60s linear infinite;
          }
          .flex.gap-16:hover {
            animation-play-state: paused;
          }
          
          /* Dark mode support */
          @media (prefers-color-scheme: dark) {
            .logo-img {
              filter: brightness(0) invert(1);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClientLogos;