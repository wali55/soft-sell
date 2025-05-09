"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.licenseType)
      newErrors.licenseType = "License type is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <main className="font-sans text-neutral-800 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-950">
      <NavBar />
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Form */}
      <Contact
        handleSubmit={handleSubmit}
        errors={errors}
        formData={formData}
        setFormData={setFormData}
      />

      <Footer />
    </main>
  );
}
