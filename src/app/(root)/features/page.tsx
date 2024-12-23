'use client'

import MaxWidthContainer from "@/components/max-width-container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Manage Bookings",
    description:
      "Expert barbers delivering classic, modern, and personalized styles tailored to you. We provide a refreshing hair wash and professional styling to finish. Includes precision styling, expert consultation, and attention to detail.",
    lists: [
      "Discover top-rated salons near you.",
      "Book appointments instantly and avoid long queues.",
    ],
    gradient: "from-black/50 via-yellow-900/60 to-yellow-500/30",
    image: "/feature1.png",
  },
  {
    title: "Payment Transparency",
    description:
      "Expert barbers delivering classic, modern, and personalized styles tailored to you. We provide a refreshing hair wash and professional styling to finish. Includes precision styling, expert consultation, and attention to detail.",
    lists: [
      "Discover top-rated salons near you.",
      "Book appointments instantly and avoid long queues.",
    ],
    gradient: "from-black/50 via-purple-900/60 to-purple-500/30",
    image: "/feature2.png",
  },
  {
    title: "Explore Deals",
    description:
      "Expert barbers delivering classic, modern, and personalized styles tailored to you. We provide a refreshing hair wash and professional styling to finish. Includes precision styling, expert consultation, and attention to detail.",
    lists: [
      "Discover top-rated salons near you.",
      "Book appointments instantly and avoid long queues.",
    ],
    gradient: "from-black/50 via-green-900/60 to-green-500/30",
    image: "/feature3.png",
  },
];

const Features = () => {
  return (
    <section className="w-full">
      <div className="hero-bg-image flex min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full items-center justify-center">
        <MaxWidthContainer>
          <div className="mx-auto max-w-screen-lg text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-tight mt-4 md:mt-6">
              Features
            </h1>
            <div className="mx-auto mt-4 max-w-3xl text-center text-sm sm:text-base md:text-lg font-light sm:mt-6 md:mt-8">
              Experience the Art of Grooming and all the features we provide you
              for the best grooming and haircut services. Grooming that feels as
              good as it looks.
            </div>
          </div>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>
        <div className="space-y-16 sm:space-y-24 mt-16 sm:mt-24 md:mt-32 w-full px-4 sm:px-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center justify-center gap-8 lg:gap-14`}
            >
              {/* Left */}
              <div className="text-center lg:text-left flex-1 space-y-4 sm:space-y-5">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto lg:mx-0 flex items-center justify-center bg-gradient-to-t from-[#86A49A80] to-black rounded-full">
                  <Image
                    src={`/about-icon (1).png`}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 sm:w-7 sm:h-7"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                  {feature.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mt-2">
                  {feature.description}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {feature.lists.map((list, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Image 
                        src="/plus.png" 
                        alt="" 
                        width={20} 
                        height={20}
                        className="w-5 h-5 sm:w-6 sm:h-6" 
                      />
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light">
                        {list}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right */}
              <div
                className={cn(
                  "rounded-3xl  space-y-4 relative overflow-hidden h-full",
                  "before:absolute before:inset-0 before:bg-gradient-to-b pb-0 border aspect-square flex-1",
                  feature.gradient
                )}
              >
                <div className="relative z-10 mt-auto flex items-end justify-center h-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={500}
                    className="w-[70%] h-full rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Features;

