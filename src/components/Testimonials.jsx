import { useState, useEffect } from "react";
import { SITE_CONFIG } from "../config";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);
  const items = SITE_CONFIG.testimonials;
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  // Auto-rotate every 5 seconds, pause on hover
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  return (
    <section className="py-20 lg:py-28 border-t border-[#EAE2D0]" style={{ backgroundColor: "#FAF6ED" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-indigo-600 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4 border border-indigo-100 shadow-sm">
            <span className="text-indigo-500">★★★★★</span> 5-Star Pet Care
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 leading-tight">
            What pet owners say.
          </h2>
        </div>

        {/* Carousel Card */}
        <div
          className="max-w-3xl mx-auto relative"
          aria-live="polite"
          aria-label="Testimonial carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            className="rounded-[32px] p-8 sm:p-12 text-center min-h-[280px] flex flex-col items-center justify-center transition-all duration-500"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1.5px solid #E8E0CE",
              boxShadow: "0 12px 36px rgba(47, 47, 98, 0.08)",
            }}
          >
            {/* Stars */}
            <div className="flex gap-1.5 text-[#F59E0B] text-xl mb-4" aria-hidden="true">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>

            <blockquote className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 max-w-2xl font-medium">
              "{items[current].quote}"
            </blockquote>

            <div className="flex items-center gap-3.5">
              {items[current].photo ? (
                <img
                  src={items[current].photo}
                  alt={items[current].name}
                  className="w-13 h-13 rounded-full object-cover border-2 border-indigo-200/80 shadow-sm"
                  style={{ width: "52px", height: "52px" }}
                />
              ) : (
                <div
                  className="w-13 h-13 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-black text-sm text-indigo-700 bg-[#EEEDFB] border-2 border-indigo-200/80 shadow-xs"
                  style={{ width: "52px", height: "52px" }}
                  aria-hidden="true"
                >
                  {items[current].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
              <div className="text-left">
                <div className="font-bold text-gray-900 text-base">{items[current].name}</div>
                <div className="text-sm text-gray-500">{items[current].town}</div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-indigo-200 hover:border-indigo-500 text-indigo-600 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {items.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-indigo-500 w-6" : "w-2.5 bg-indigo-200 hover:bg-indigo-300"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-indigo-200 hover:border-indigo-500 text-indigo-600 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
