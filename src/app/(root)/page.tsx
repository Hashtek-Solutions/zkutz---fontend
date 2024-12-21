import Download from "@/components/global/cta";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import About from "@/components/home/about";
import Discover from "@/components/home/discover";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import { AnimatedTestimonialsDemo } from "@/components/home/testimonial";
import MaxWidthContainer from "@/components/max-width-container";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      {/* <Navbar /> */}
      <Hero />
      <MaxWidthContainer className="mt-36 space-y-36">
        <About />
        <Features />
        <Discover />
        <AnimatedTestimonialsDemo/> 
      </MaxWidthContainer>
    </main>
  );
}
