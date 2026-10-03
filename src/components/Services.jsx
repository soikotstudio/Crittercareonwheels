import { useEffect } from "react";
import { Link } from "react-router-dom";

// ─── Editable config ───────────────────────────────────────────────────────
const SERVICES_CONFIG = [
  {
    id: "nail-trim",
    title: "Nail Trims",
    description: "Quick, safe nail trimming done gently in the comfort of your home. No table, no stress.",
    price: "$25",
    priceLabel: "From",
    unit: "per visit",
    included: [
      "Trim of all nails",
      "Light filing of rough edges",
      "Treats and breaks for nervous pets",
      "Quick paw check",
    ],
    icon: "scissors",
    swooshVariant: 1,
  },
  {
    id: "ear-cleaning",
    title: "Ear Cleaning",
    description: "Routine ear cleaning performed with care by a handler with veterinary experience.",
    price: "$20",
    priceLabel: "From",
    unit: "per visit",
    included: [
      "Visual check of both ears",
      "Gentle cleaning with a pet-safe solution",
      "Notes on anything that looks off",
      "Aftercare tips",
    ],
    icon: "ear",
    swooshVariant: 2,
  },
  {
    id: "anal-gland",
    title: "Anal Gland Expression",
    description: "A common but often uncomfortable task, done correctly and quickly to keep your pet comfortable.",
    price: "$30",
    priceLabel: "From",
    unit: "per visit",
    included: [
      "External expression",
      "Wipe-down of the area",
      "Notes if a vet visit looks needed",
      "Aftercare tips",
    ],
    icon: "paw",
    swooshVariant: 3,
  },
  {
    id: "dog-walk",
    title: "Dog Walks",
    description: "Regular walks to keep your pup active, happy and well-exercised on their own turf.",
    price: "$25",
    priceLabel: "",
    unit: "per 30-minute walk",
    included: [
      "30-minute walk",
      "Fresh water on return",
      "Paw wipe-down",
      "Update text or photo",
    ],
    icon: "walk",
    swooshVariant: 1,
  },
  {
    id: "check-in",
    title: "Pet Check-Ins",
    description: "Drop-in visits to feed, water and give your pet attention while you're away.",
    price: "$25",
    priceLabel: "From",
    unit: "per visit",
    included: [
      "Feeding and fresh water",
      "Litter box or yard break",
      "Playtime and cuddles",
      "Update text or photo",
    ],
    icon: "home",
    swooshVariant: 2,
  },
  {
    id: "other",
    title: "Something Else?",
    description: "Not sure if we cover it? Describe what you need in the form and we'll let you know.",
    price: "Custom quote",
    priceLabel: "",
    unit: "tell us what you need",
    included: [],
    customNote: "Tell us what you need and we'll quote it.",
    icon: "chat",
    swooshVariant: 3,
    linkText: "Ask about a service",
  },
];

const BUNDLE_BANNER = {
  show: true,
  text: 'Combine services in one visit and save $10.',
  buttonText: "Book a visit",
};

const TRAVEL_NOTE = {
  show: true,
  text: "Travel fees may apply outside La Porte County.",
};
// ──────────────────────────────────────────────────────────────────────────

// ─── Swoosh SVG variants ──────────────────────────────────────────────────
function Swoosh({ variant }) {
  const color = "#D0F09E";
  const sw = 32;
  if (variant === 1) return (
    <svg aria-hidden="true" viewBox="0 0 340 130" fill="none"
      className="absolute top-0 left-0 w-full"
      style={{ zIndex: 0 }}>
      <path
        d="M -10,100 C 30,40 70,10 110,55 C 140,88 118,18 165,28 C 210,38 250,95 340,55"
        stroke={color} strokeWidth={sw} strokeLinecap="round" fill="none" />
    </svg>
  );
  if (variant === 2) return (
    <svg aria-hidden="true" viewBox="0 0 340 120" fill="none"
      className="absolute top-0 left-0 w-full"
      style={{ zIndex: 0 }}>
      <path
        d="M -20,95 C 50,70 80,15 160,35 C 240,55 265,105 340,80"
        stroke={color} strokeWidth={sw} strokeLinecap="round" fill="none" />
    </svg>
  );
  return (
    <svg aria-hidden="true" viewBox="0 0 340 110" fill="none"
      className="absolute top-0 left-0 w-full"
      style={{ zIndex: 0 }}>
      <path
        d="M -20,65 C 45,20 85,100 155,55 C 220,10 265,95 360,60"
        stroke={color} strokeWidth={sw} strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────
function Icon({ type }) {
  const cls = "w-8 h-8 text-white";
  if (type === "scissors") return (
    <svg className={cls} fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="8" cy="8" r="4"/><circle cx="8" cy="24" r="4"/>
      <line x1="12" y1="12" x2="28" y2="28"/><line x1="12" y1="20" x2="28" y2="4"/>
    </svg>
  );
  if (type === "ear") return (
    <svg className={cls} fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M16 4C10 4 6 9 6 15C6 19 8 22 11 23.5C12.5 24 13 26 16 26C19 26 20.5 24.5 20.5 23C20.5 20 23 17 23 15C23 9 22 4 16 4Z"/>
      <path d="M13 15C13 13 14.5 11.5 16 11.5"/>
    </svg>
  );
  if (type === "paw") return (
    <svg className={cls} fill="currentColor" viewBox="0 0 32 32">
      <ellipse cx="16" cy="21" rx="7" ry="5.5"/>
      <ellipse cx="9" cy="13" rx="2.8" ry="3.5"/>
      <ellipse cx="16" cy="11" rx="2.8" ry="3.5"/>
      <ellipse cx="23" cy="13" rx="2.8" ry="3.5"/>
    </svg>
  );
  if (type === "walk") return (
    <svg className={cls} fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="19" cy="5" r="2.5" fill="currentColor" stroke="none"/>
      <path d="M14 11L11 18L16 16.5L14 26"/><path d="M14 11L20 13L24 9"/>
      <path d="M11 18L7 23"/><path d="M14 26L17 29"/>
    </svg>
  );
  if (type === "home") return (
    <svg className={cls} fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16L16 5L28 16"/><path d="M7 13.5V26H25V13.5"/>
      <rect x="13" y="18" width="6" height="8" rx="1.5"/>
    </svg>
  );
  return (
    <svg className={cls} fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8C5 6.5 6.5 5 8 5H24C25.5 5 27 6.5 27 8V19C27 20.5 25.5 22 24 22H19L13 28V22H8C6.5 22 5 20.5 5 19V8Z"/>
      <line x1="10" y1="12" x2="22" y2="12"/><line x1="10" y1="16.5" x2="18" y2="16.5"/>
    </svg>
  );
}

// ─── Single card ──────────────────────────────────────────────────────────
function ServiceCard({ svc }) {
  const hasPrice = svc.price && svc.price !== "";
  const hasIncluded = svc.included && svc.included.length > 0;
  const linkText = svc.linkText || "Book this service";

  const handleBook = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("prefill-service", { detail: { service: svc.title } }));
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article
      className="relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "32px",
        padding: "32px",
        border: "1.5px solid #E8E0CE",
        boxShadow: "0 10px 32px rgba(47, 47, 98, 0.08)",
      }}
    >
      {/* Swoosh behind everything */}
      <div className="absolute inset-0 overflow-hidden rounded-[32px]" style={{ zIndex: 0 }}>
        <Swoosh variant={svc.swooshVariant} />
      </div>

      {/* Icon circle */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full mt-4 mb-6 flex-shrink-0"
        style={{ width: "72px", height: "72px", background: "#6C6CFF" }}
        aria-hidden="true"
      >
        <Icon type={svc.icon} />
      </div>

      {/* Title */}
      <h3
        className="relative z-10 font-heading font-bold mb-3 leading-tight"
        style={{ color: "#2F2F62", fontSize: "28px" }}
      >
        {svc.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-base leading-relaxed mb-6" style={{ color: "#7A7499" }}>
        {svc.description}
      </p>

      {/* Custom note (for "Something else?") */}
      {svc.customNote && (
        <p className="relative z-10 italic text-sm mb-4" style={{ color: "#7A7499" }}>
          {svc.customNote}
        </p>
      )}

      {/* Divider + included list */}
      {hasIncluded && (
        <div className="relative z-10 mt-2 mb-2">
          <div className="w-full h-px mb-4" style={{ background: "#E8E1CF" }} aria-hidden="true" />
          <p className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: "#7A7499" }}>
            What's included
          </p>
          <ul className="space-y-2">
            {svc.included.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#4A466B" }}>
                <svg aria-hidden="true" className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#6C6CFF" opacity="0.15"/>
                  <path d="M4.5 8L7 10.5L11.5 6" stroke="#6C6CFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Pricing / Booking action — replaced "Book this service" */}
      <div className="relative z-10 mt-auto pt-5 border-t border-[#E8E1CF]/70">
        <Link
          to={`/appointment?service=${encodeURIComponent(svc.title)}`}
          className="group flex items-center justify-between w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B3FD8] rounded-xl p-1 -m-1"
          aria-label={`Book ${svc.title} - ${svc.priceLabel ? svc.priceLabel + " " : ""}${svc.price} ${svc.unit || ""}`}
        >
          <div className="flex flex-col text-left">
            <div className="flex items-baseline gap-1.5">
              {svc.priceLabel && (
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A7499]">
                  {svc.priceLabel}
                </span>
              )}
              <span
                className="font-heading font-extrabold text-[22px] leading-tight transition-colors group-hover:text-[#4B3FD8]"
                style={{ color: "#2F2F63" }}
              >
                {svc.price}
              </span>
            </div>
            {svc.unit && (
              <span className="text-xs text-[#7A7499] mt-0.5 font-medium">
                {svc.unit}
              </span>
            )}
          </div>

          <div
            className="flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-white transition-all duration-200 group-hover:opacity-90 group-hover:scale-105 shadow-sm flex-shrink-0"
            style={{ backgroundColor: "#4B3FD8" }}
          >
            <span>{svc.id === "other" ? "Ask" : "Book"}</span>
            <svg aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </div>
        </Link>
      </div>
    </article>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────
export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 border-t border-[#EAE2D0]" style={{ backgroundColor: "#FAF6ED" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-xl relative">
            {/* Sparkle */}
            <svg aria-hidden="true" className="absolute -top-5 -right-2 w-7 h-7" viewBox="0 0 28 28" fill="none">
              <path d="M14,2 L15.4,12.6 L26,14 L15.4,15.4 L14,26 L12.6,15.4 L2,14 L12.6,12.6 Z" fill="#F5B82E"/>
            </svg>
            <h2
              className="font-heading font-bold text-4xl lg:text-5xl leading-tight"
              style={{ color: "#2F2F62" }}
            >
              Care your pet needs,{" "}
              <span style={{ color: "#4B3FD8" }}>right at home</span>
            </h2>
            <p className="mt-3 text-lg" style={{ color: "#7A7499" }}>
              Routine care from a handler with veterinary experience. No car rides, no waiting rooms.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              to="/appointment"
              className="font-semibold px-6 py-3 rounded-full text-white transition-all hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ background: "#4B3FD8" }}
            >
              Request an appointment
            </Link>
            <a
              href="#services-grid"
              className="font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 border-2"
              style={{ borderColor: "#4B3FD8", color: "#4B3FD8" }}
            >
              Browse all services
            </a>
          </div>
        </div>

        {/* Card grid */}
        <div
          id="services-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES_CONFIG.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>

        {/* Bundle banner */}
        {BUNDLE_BANNER.show && (
          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6"
            style={{ background: "#D0F09E", borderRadius: "32px" }}
          >
            <p className="font-semibold text-lg text-center sm:text-left" style={{ color: "#2F2F62" }}>
              {BUNDLE_BANNER.text}
            </p>
            <Link
              to="/appointment?service=Multiple%20/%20Combo%20Services"
              className="flex-shrink-0 font-bold px-7 py-3 rounded-full transition-all hover:opacity-90 text-white whitespace-nowrap"
              style={{ background: "#2E2E63" }}
            >
              {BUNDLE_BANNER.buttonText}
            </Link>
          </div>
        )}

        {/* Travel note */}
        {TRAVEL_NOTE.show && (
          <p className="mt-4 text-center text-sm" style={{ color: "#7A7499" }}>
            {TRAVEL_NOTE.text}
          </p>
        )}
      </div>
    </section>
  );
}
