import { useState } from "react";

const PET_PHOTOS = [
  {
    id: 1,
    name: "Ollie",
    breed: "Tuxedo Cat with Bowtie",
    alt: "Happy tuxedo cat wearing a bright green bowtie",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&h=800&q=80",
    rotation: "-3.5deg",
  },
  {
    id: 2,
    name: "Bella",
    breed: "Golden Pup with Bandana",
    alt: "Smiling golden dog wearing a purple bandana",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&h=800&q=80",
    rotation: "3deg",
  },
  {
    id: 3,
    name: "Rex",
    breed: "Doberman with Collar",
    alt: "Happy attentive dog with bright yellow collar",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&h=800&q=80",
    rotation: "-2.5deg",
  },
  {
    id: 4,
    name: "Luna",
    breed: "Curious Cat with Accessory",
    alt: "Cute cat with colorful headpiece looking at camera",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&h=800&q=80",
    rotation: "4deg",
  },
  {
    id: 5,
    name: "Milo",
    breed: "White Fluffy Maltese",
    alt: "Smiling white fluffy dog with yellow collar",
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&h=800&q=80",
    rotation: "-1.5deg",
  },
  {
    id: 6,
    name: "Cleo",
    breed: "Stylish Tabby Cat",
    alt: "Domestic cat wearing green bowtie looking fresh and pampered",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&h=800&q=80",
    rotation: "3.5deg",
  },
  {
    id: 7,
    name: "Charlie",
    breed: "Golden Retriever Puppy",
    alt: "Happy puppy smiling after in-home care",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&h=800&q=80",
    rotation: "-3deg",
  },
  {
    id: 8,
    name: "Winston",
    breed: "Corgi & Hound Friend",
    alt: "Cheerful pet relaxing safely at home",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&h=800&q=80",
    rotation: "2.5deg",
  },
];

// Double list for continuous seamless infinite loop
const MARQUEE_ITEMS = [...PET_PHOTOS, ...PET_PHOTOS];

export default function Gallery() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="gallery"
      className="py-16 lg:py-24 overflow-hidden select-none bg-white border-t border-[#EAE2D0]"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* ── Section Header ── */}
      <div className="max-w-[1240px] mx-auto px-6 mb-10 sm:mb-14 text-center">
        {/* Yellow 4-point sparkle star */}
        <div className="flex justify-center mb-2.5">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-[#F5B82E]"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16 0C16 8.837 8.837 16 0 16C8.837 16 16 23.163 16 32C16 23.163 23.163 16 32 16C23.163 16 16 8.837 16 0Z" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2F2F63] leading-[1.15] tracking-tight">
          Happy pets,<br />happy homes.
        </h2>
      </div>

      {/* ── Rotating Photo Carousel Track ── */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        aria-label="Happy pets gallery carousel"
      >
        <div
          className={`flex gap-5 sm:gap-6 will-change-transform ${
            isPaused ? "carousel-paused" : "carousel-running"
          }`}
          style={{ width: "max-content" }}
        >
          {MARQUEE_ITEMS.map((pet, idx) => (
            <div
              key={`${pet.id}-${idx}`}
              className="flex-shrink-0 w-[210px] sm:w-[250px] lg:w-[270px] h-[280px] sm:h-[340px] lg:h-[360px] bg-white p-2.5 sm:p-3 rounded-[24px] shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-[1.04] hover:z-20 cursor-pointer"
              style={{
                transform: `rotate(${pet.rotation})`,
              }}
            >
              <div className="w-full h-full rounded-[16px] overflow-hidden bg-slate-100">
                <img
                  src={pet.image}
                  alt={pet.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smooth CSS infinite marquee animation */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .carousel-running {
          animation: marqueeScroll 36s linear infinite;
        }
        .carousel-paused {
          animation: marqueeScroll 36s linear infinite;
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .carousel-running,
          .carousel-paused {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
