"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Shop the Latest Trends",
    subtitle: "Find amazing products at unbeatable prices!",
    cta1: { text: "Shop Now", href: "/products" },
    cta2: { text: "Learn More", href: "/about" },
    image: "/assets/slider-1.png",
  },
  {
    id: 2,
    title: "Exclusive Deals Just for You",
    subtitle: "Grab them before they are gone!",
    cta1: { text: "Shop Now", href: "/products" },
    cta2: { text: "Learn More", href: "/about" },
    image: "/assets/slider-2.png",
  },
  {
    id: 3,
    title: "New Arrivals are Here",
    subtitle: "Upgrade your style today",
    cta1: { text: "Shop Now", href: "/products" },
    cta2: { text: "Learn More", href: "/about" },
    image: "/assets/slider-3.png",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="relative h-[600px] flex items-center justify-center text-white transition-all duration-1000 bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center md:text-left max-w-2xl px-6">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          {slide.title}
        </h1>
        <p className="text-lg mb-6 drop-shadow-md">{slide.subtitle}</p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href={slide.cta1.href}
            className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
          >
            {slide.cta1.text}
          </a>
          <a
            href={slide.cta2.href}
            className="border border-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            {slide.cta2.text}
          </a>
        </div>
      </div>

      {/* Optional: Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((s, i) => (
          <span
            key={s.id}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-yellow-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
