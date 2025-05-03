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
      title: "Minute Made - PDPs redesigned to drive conversions",
      video: "/videos/Minute made 4.mp4"
    },
    {
      title: "Groove life - Blogs + PDPs turned intent into action",
      video: "/videos/groove life.mp4"
    },
    {
      title: "Iconic - Social proof via TikTok & Meta shops",
      video: "/videos/Iconic.mp4"
    },
    {
      title: "Pedigree - Emotional email hooks that clicked across emails/newsletters",
      video: "/videos/Pedigree.mp4"
    },
    {
      title: "Minute Made - Hooks that stopped thumbs mid-scroll",
      video: "/videos/Minute made 1.mp4"
    },
    {
      title: "The Body Shop - UGC layered on PDPs for instant trust.",
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

  const splitTitle = (title: string) => {
    const [brand, description] = title.split(" - ");
    return { brand, description };
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
              {features.map((feature, index) => {
                const { brand, description } = splitTitle(feature.title);
                return (
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
                      <h3 className="text-xl font-[450] text-gray-900 mb-3 tracking-[-0.02em] leading-tight text-center">
                        {brand}
                      </h3>
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
                      <p className="text-base font-[350] text-gray-600 mt-3 text-center">
                        {description}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}; 
