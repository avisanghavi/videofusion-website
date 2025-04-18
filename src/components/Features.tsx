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
      icon: <PhosphorIcons.Article weight="duotone" className="w-8 h-8" />,
      title: "Convert More on Product Pages",
      description: "Turn browsers into buyers with **persuasive testimonials**. Our AI automatically surfaces your most compelling customer stories at the perfect moment."
    },
    {
      icon: <PhosphorIcons.ShareNetwork weight="duotone" className="w-8 h-8" />,
      title: "Dominate Social Media",
      description: "Stand out in crowded feeds with **thumb-stopping content**. Create attention-grabbing moments that capture viewers and drive meaningful engagement."
    },
    {
      icon: <PhosphorIcons.EnvelopeSimple weight="duotone" className="w-8 h-8" />,
      title: "Supercharge Your Email ROI",
      description: "Transform campaigns with **dynamic video previews**. Instantly grab attention and drive action with your most compelling moments."
    },
    {
      icon: <PhosphorIcons.ShoppingBag weight="duotone" className="w-8 h-8" />,
      title: "Maximize Social Shopping",
      description: "Turn scrollers into buyers with **persuasive product moments**. Showcase your best social proof exactly when it matters most."
    },
    {
      icon: <PhosphorIcons.Globe weight="duotone" className="w-8 h-8" />,
      title: "Elevate Your Website",
      description: "Keep visitors engaged with **perfectly-timed social proof**. Transform your website into an immersive experience that builds trust."
    },
    {
      icon: <PhosphorIcons.BookOpen weight="duotone" className="w-8 h-8" />,
      title: "Revolutionize Blog Content",
      description: "Make content captivating with **strategic video highlights**. Keep readers engaged and guide them toward conversion."
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
                      "bg-white/80 backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 border border-gray-100/20",
                      current === index 
                        ? "opacity-100 scale-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-purple-500/20" 
                        : "opacity-40 scale-95 blur-[2px]"
                    )}
                  >
                    <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <div className="text-purple-600">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-[450] text-gray-900 mb-3 tracking-[-0.02em] leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-[350] leading-relaxed text-[15px]">
                      {renderDescription(feature.description)}
                    </p>
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