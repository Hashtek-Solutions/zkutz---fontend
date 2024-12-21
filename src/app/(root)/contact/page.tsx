import React from "react";
import ContactForm from "@/components/contact/contact-form";
import MaxWidthContainer from "@/components/max-width-container";

const Contact = () => {
  return (
    <section>
      <div className="hero-bg-image flex h-[600px] w-full items-center justify-center">
        <MaxWidthContainer>
          <div className="mx-auto max-w-screen-lg text-center">
            <h1 className="text-4xl mt-4 md:mt-6 font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] sm:leading-tight md:leading-tight lg:leading-[80px] xl:leading-[90px]">
              Contact Us
            </h1>
          </div>
          <div className="mx-auto mt-4 max-w-5xl text-center text-base sm:text-lg font-light sm:mt-6 md:mt-8">
            We’d Love to Hear from You! Have questions, feedback, or need
            support? Our team at ZkutZ is here to help you. Reach out to us
            through any of the options below, and we’ll get back to you as soon
            as possible.
          </div>

          {/* Content */}
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>
        <div className="space-y-24 mt-32 w-full">
          <ContactForm />
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Contact;
