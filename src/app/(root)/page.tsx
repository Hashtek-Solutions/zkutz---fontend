import About from "@/components/home/about";
import Discover from "@/components/home/discover";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import { AnimatedTestimonialsDemo } from "@/components/home/testimonial";
import TextGradientOpacity from "@/components/home/text-reveal";
// import TextReveal from "@/components/home/text-reveal";
import MaxWidthContainer from "@/components/max-width-container";

export default function Home() {
  return (
    <main className="relative">
      {/* <Navbar /> */}
      <Hero />
      <MaxWidthContainer className="mt-36 space-y-36">
        <About />
        <Features />
        <Discover />
        <AnimatedTestimonialsDemo />
      </MaxWidthContainer>
    </main>
  );
}
