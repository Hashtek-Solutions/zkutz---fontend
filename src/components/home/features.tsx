"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Book\nInstantly",
    description: "Skip the wait and book appointments at your favorite salons.",
    gradient: "from-black/50 via-purple-900/60 to-purple-500/30",
    image: "/feature1.png",
  },
  {
    title: "Live Queue\nTracking",
    description: "See real-time wait times and make smart bookings.",
    gradient: "from-black/50 via-yellow-900 to-yellow-500/30",
    image: "/feature2.png",
  },
  {
    title: "Go Through\nBarber Details",
    description: "Explore the service and reviews of the barber in details.",
    gradient: "from-black/50 via-green-900 to-green-500/30",
    image: "/feature3.png",
  },
  {
    title: "Personalized\nRecommendations",
    description:
      "Get tailored stylist suggestions based on your hair type and preferences.",
    gradient: "from-black/50 via-blue-900 to-blue-500/30",
    image: "/feature1.png",
  },
  {
    title: "Price\nComparison",
    description:
      "Compare prices across different salons and find the best deals.",
    gradient: "from-black/50 via-pink-900 to-pink-500/30",
    image: "/feature2.png",
  },
  {
    title: "Loyalty\nProgram",
    description:
      "Earn points with every booking and unlock exclusive discounts.",
    gradient: "from-black/50 via-orange-900 to-orange-500/30",
    image: "/feature3.png",
  },
  {
    title: "Style\nGallery",
    description:
      "Browse hundreds of hairstyles and find inspiration for your next look.",
    gradient: "from-black/50 via-red-900 to-red-500/30",
    image: "/feature1.png",
  },
  {
    title: "Flexible\nRescheduling",
    description: "Easily modify or cancel appointments with minimal hassle.",
    gradient: "from-black/50 via-yellow-900/60 to-yellow-500/30",
    image: "/feature2.png",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("customers");
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handlePrevious = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const handleNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <div className="w-full text-white p-0 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
            Features at a Glance
          </h2>
          <div className="sm:flex gap-4 hidden">
            <Button
              onClick={handlePrevious}
              size="icon"
              variant="outline"
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-white/20"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button
              onClick={handleNext}
              size="icon"
              variant="outline"
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-white/20"
            >
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-between">
          <div className="inline-flex p-1 rounded-full bg-white/10 ">
            <Button
              variant="ghost"
              className={cn(
                "rounded-full text-sm sm:text-base",
                activeTab === "customers"
                  ? "bg-white text-black w-28 sm:w-36"
                  : "text-white hover:bg-white/10 w-28 sm:w-36"
              )}
              onClick={() => setActiveTab("customers")}
            >
              Customers
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "rounded-full text-sm sm:text-base",
                activeTab === "salonOwners"
                  ? "bg-white text-black w-28 sm:w-36"
                  : "text-white hover:bg-white/10 w-28 sm:w-36"
              )}
              onClick={() => setActiveTab("salonOwners")}
            >
              Salon Owners
            </Button>
          </div>

          <div className="flex gap-1 sm:hidden">
            <Button
              onClick={handlePrevious}
              size="icon"
              variant="outline"
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-white/20"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button
              onClick={handleNext}
              size="icon"
              variant="outline"
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-white/20"
            >
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>

        {/* Features Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 mt-8"
              >
                <div
                  className={cn(
                    "rounded-3xl p-8 space-y-4 relative overflow-hidden h-full",
                    "before:absolute before:inset-0 before:bg-gradient-to-b pb-0 border",
                    feature.gradient
                  )}
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl text-center whitespace-pre-line mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/80 text-center">
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative z-10 mt-auto">
                    {/* eslint-disable-next-line */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
      </div>
    </div>
  );
}
