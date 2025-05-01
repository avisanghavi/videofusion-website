import * as PhosphorIcons from "@phosphor-icons/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Features = () => {
  const features = [
    {
      title: "Minute made 4 - solution (PDP)",
      video: "/videos/Minute made 4.mp4"
    },
    {
      title: "Minute made 1 - hook (Paid ads, social media)",
      video: "/videos/Minute made 1.mp4"
    },
    {
      title: "Groove life - solution (PDP, blogs)",
      video: "/videos/groove life.mp4"
    },
    {
      title: "Iconic - social proof (Social shopping - Meta, tik tok shops)",
      video: "/videos/Iconic.mp4"
    },
    {
      title: "Pedigree - Hook (Emails, Newsletters)",
      video: "/videos/Pedigree.mp4"
    },
    {
      title: "Body shop - Social proof (Social media, PDPs)",
      video: "/videos/Bodyshop.mp4"
    }
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  let autoRotateInterval: NodeJS.Timeout;

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Set up auto-rotation only when not paused
    const startAutoRotate = () => {
      if (!isPaused) {
        autoRotateInterval = setInterval(() => {
          api.scrollNext();
        }, 4000);
      }
    };

    startAutoRotate();

    // Clean up interval on unmount or when paused
    return () => clearInterval(autoRotateInterval);
  }, [api, isPaused]);

  const renderDescription = (description: string) => {
    // Split the description by bold markers and map to spans
    return description.split('**').map((part, index) => {
      if (index % 2 === 1) {
        // Odd indices are the bold parts
        return <span key={index} className="font-semibold">{part}</span>;
      }
      return part;
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-[450] text-gray-900 tracking-[-0.02em] mb-4">
            Transform Videos into <span className="text-[#9146FF]">High-Converting Assets</span> in Minutes
          </h2>
          <p className="text-lg text-gray-600 font-[350] max-w-2xl mx-auto">
            Stop letting your best content moments go unnoticed. Our AI automatically identifies and repurposes your most engaging video segments for every marketing channel.
          </p>
        </div>

        <div className="relative w-full px-12">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "bg-white/80 backdrop-blur-sm rounded-3xl p-4 transition-all duration-500 border border-gray-100/20",
                      current === index 
                        ? "opacity-100 scale-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-purple-500/20" 
                        : "opacity-40 scale-95 blur-[2px]"
                    )}
                  >
                    <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                      <video 
                        src={feature.video}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                    <h3 className="text-lg font-[450] text-gray-900 mt-4 tracking-[-0.02em] leading-tight text-center">
                      {feature.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}; 
