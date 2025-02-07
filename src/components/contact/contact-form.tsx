"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        resetForm();
      } else {
        toast.error(result.error || "Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - Form */}
        <div>
          <h1 className="text-4xl font-serif mb-4">Send Enquiry</h1>
          <p className="text-gray-400 mb-8">
            Have a specific query? Fill out the form below, and we&apos;ll get
            back to you shortly:
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Type full name here"
                className="bg-zinc-900 rounded-full border-zinc-800 text-white placeholder:text-zinc-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="bg-zinc-900 rounded-full border-zinc-800 text-white placeholder:text-zinc-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-zinc-900 rounded-2xl border-zinc-800 text-white placeholder:text-zinc-500 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-serif">Get In Touch</h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border border-zinc-800">
              <Image
                src="/contact-icon (1).png"
                alt="Email icon"
                width={24}
                height={20}
                className="mt-1"
              />
              <div>
                <p className="text-lg">info@zkutz.com</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border border-zinc-800">
              <Image
                src="/contact-icon (4).png"
                alt="Phone icon"
                width={20}
                height={20}
                className="mt-1"
              />
              <div>
                <p>Call us on</p>
                <p className="text-lg">(844) 646-8546</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border border-zinc-800">
              <Image
                src="/contact-icon (2).png"
                alt="Location icon"
                width={20}
                height={24}
                className="mt-1"
              />
              <div>
                <p className="text-lg">1234 Placeholder Lane</p>
                <p>Faketown, FA 56789</p>
                <p>United States</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border border-zinc-800">
              <Image
                src="/contact-icon (3).png"
                alt="Support icon"
                width={28}
                height={24}
                className="mt-1"
              />
              <div>
                <p>
                  For app-related queries or assistance, feel free to contact
                  our customer support team:
                </p>
                <p className="text-lg mt-2">info@zkutz.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}