import { FeatureSection } from "@/components/about/feature-section";
import OurVision from "@/components/about/our-vision";
import WhyUs from "@/components/about/why-us";
import MaxWidthContainer from "@/components/max-width-container";
import React from "react";

const data = [
  {
    image: "customized-promotions-icon.png", // Replace with actual image path or name
    title: "Customized Promotions and Discounts",
    description:
      "Unlock exclusive deals and maximize savings for customers while boosting salon revenue.",
  },
  {
    image: "loyalty-programs-icon.png", // Replace with actual image path or name
    title: "Loyalty Programs",
    description:
      "Reward repeat visits and build lasting relationships with your clients.",
  },
  {
    image: "in-app-payments-icon.png", // Replace with actual image path or name
    title: "In-App Payments",
    description: "Go cashless with secure and hassle-free transactions.",
  },
  {
    image: "live-queue-management-icon.png", // Replace with actual image path or name
    title: "Live Queue Management",
    description: "Keep track of real-time wait times and book smartly.",
  },
  {
    image: "verified-reviews-icon.png", // Replace with actual image path or name
    title: "Verified Reviews and Ratings",
    description:
      "Reward repeat visits and build lasting relationships with your clients.",
  },
  {
    image: "service-reminders-icon.png", // Replace with actual image path or name
    title: "Service Reminders and Notifications",
    description: "Never miss an appointment with timely alerts and updates.",
  },
  {
    image: "advanced-analytics-icon.png", // Replace with actual image path or name
    title: "Advanced Analytics Dashboard",
    description:
      "Empower salon owners with actionable insights and performance metrics.",
  },
  {
    image: "ai-powered-recommendations-icon.png", // Replace with actual image path or name
    title: "AI-Powered Recommendations",
    description:
      "Offer tailored service suggestions for a truly personalized experience.",
  },
];

const About = () => {
  return (
    <section>
      <div className="hero-bg-image flex h-[600px] w-full items-center justify-center">
        <MaxWidthContainer>
          <div className="mx-auto max-w-screen-lg text-center">
            <p className="text-2xl font-light">Welcome to ZkutZ</p>
            <h1 className="text-4xl mt-4 md:mt-6 font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] sm:leading-tight md:leading-tight lg:leading-[80px] xl:leading-[90px]">
              Your Grooming, Simplified
            </h1>
          </div>
          <div className="mx-auto mt-4 max-w-5xl text-center text-base sm:text-lg font-light sm:mt-6 md:mt-8">
            At ZkutZ, we believe in redefining the salon experience for both
            customers and salon owners. Our platform is built to eliminate the
            hassle of waiting times and disorganized bookings, creating a smooth
            and stress-freejourney for everyone
          </div>

          {/* Content */}
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>
        <div className="space-y-24 mt-32 w-full">
          <FeatureSection
            className="w-full"
            title="For Customers"
            features={[
              "Discover top-rated salons near you.",
              "Book appointments instantly and avoid long queues.",
              "Enjoy a personalized grooming experience tailored to your preferences.",
            ]}
            imageSrc="/about-img (2).png"
            imageAlt="Customer getting a haircut"
          />
          <FeatureSection
            className="w-full"
            title="For Salon Owners"
            features={[
              "Effortlessly manage your bookings and schedules.",
              "Track revenue and gain insights into business performance.",
              "Focus on delivering exceptional services while we take care of the rest.",
            ]}
            imageSrc="/about-img (3).png"
            imageAlt="Salon interior view"
            imageOnLeft
          />
        </div>

        <div className="mt-32">
          <WhyUs />
        </div>
        <div className="mt-32">
          <OurVision />
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default About;
