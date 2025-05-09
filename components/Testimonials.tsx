"use client";

import React from "react";
import TestimonialCards from "./TestimonialCards";

export default function Testimonials() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-neutral-50 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className="py-8 text-4xl font-bold">Why Choose Us</h1>
      <TestimonialCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "SoftSell made it incredibly easy to recover value from old software!",
    name: "Alice Morgan",
    title: "IT Manager, TechCorp",
  },
  {
    quote:
      "Quick, simple, and totally secure. Highly recommend SoftSell.",
    name: "John Doe",
    title: "Founder, StartNow",
  },
  {
    quote:
      "We turned unused licenses into cash in days. SoftSell exceeded our expectations!",
    name: "Samantha Lee",
    title: "Procurement Lead, CloudMatrix",
  },
  {
    quote:
      "The process was seamless from start to finish — very professional team.",
    name: "Michael Chan",
    title: "Operations Director, InnoWave Solutions",
  },
  {
    quote:
      "SoftSell helped us clean up our software inventory and generate unexpected returns.",
    name: "Priya Desai",
    title: "Finance Analyst, BrightSystems",
  },
  
];
