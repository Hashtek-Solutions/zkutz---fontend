import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The process is smooth, and I get reminders so I don't forget my appointments. One thing I'd love to see is an option to select a specific haircut style or add special instructions for the barber. Other than that, it's been a fantastic experience!",
      name: "Emily Watson",
      location: "India",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The app is super easy to navigate, and I love how I can see available time slots for my favorite barber right in the app. No more calling in or waiting for an appointment—I can book, reschedule, and even pay for my haircut all in one place.",
      name: "James Kim",
      location: "USA",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I no longer have to worry about calling or waiting for confirmation. It's all right there in the app! Highly recommend it if you're always on the go.",
      name: "Lisa Thompson",
      location: "Australia",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      {/* Heading */}
      <div className="flex justify-center items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight sm:leading-tight md:leading-[70px]">
          What Users Think
          <br />
          About Us
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item, index) => (
          <Card key={index} className="shadow-none p-1">
            <CardHeader className="flex items-start gap-x-4 sm:gap-x-6 flex-row">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                <Image
                  src={item.src}
                  alt={`${item.name}'s profile picture`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg font-medium">
                  {item.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {item.location}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="font-light text-sm sm:text-base md:text-lg">
              <div>{item.quote}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
