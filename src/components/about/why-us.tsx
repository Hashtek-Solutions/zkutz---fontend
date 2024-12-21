import Image from "next/image";
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

const WhyUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      {/* Heading */}
      <div className="flex justify-center items-center flex-col gap-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight sm:leading-tight md:leading-[70px]">
          Why Choose ZkutZ?
        </h2>
        <div className="mx-auto mt-4 max-w-md text-center text-base sm:text-lg font-light sm:mt-6 md:mt-8">
        We go beyond the basics to deliver a feature-rich, seamless experience
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {data.map((item, index) => (
          <DiscoverCard key={index} index={index + 1} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;

export const DiscoverCard = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-t from-[#86A49A80] to-black rounded-full">
        <Image
          src={`/about-icon (${index}).png`}
          alt={title}
          width={30}
          height={30}
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-semibold max-w-xs">{title}</h3>
        <p className="text-sm font-light mt-2 max-w-xs">{description}</p>
      </div>
    </div>
  );
};
