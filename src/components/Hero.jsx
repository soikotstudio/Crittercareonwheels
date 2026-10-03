import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../config";

export default function Hero() {
  const telHref = `tel:${SITE_CONFIG.phone || "2195550199"}`;

  return (
    <section id="home" className="bg-white py-6 lg:py-10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Two panels: 42% photo left, 58% content right on desktop; stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-6 items-stretch">

          {/* ── Left: Photo Panel ── */}
          <div
            className="order-1 relative rounded-[32px] overflow-hidden w-full h-[380px] lg:h-auto min-h-[380px] lg:min-h-[640px] bg-slate-100"
            style={{ borderRadius: "32px" }}
          >
            <img
              src={SITE_CONFIG.heroImage?.src || "/hero-handler.png"}
              alt={SITE_CONFIG.heroImage?.alt || "Smiling pet care handler in purple scrubs gently holding a happy dog at home"}
              width={SITE_CONFIG.heroImage?.width || 518}
              height={SITE_CONFIG.heroImage?.height || 809}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* ── Right: Content Panel ── */}
          <div
            className="order-2 relative rounded-[32px] p-8 lg:p-16 flex flex-col justify-center overflow-hidden hero-content-panel border-none shadow-none"
            style={{
              backgroundColor: "#F9F5EA",
              borderRadius: "32px",
            }}
          >
            {/* Heading Container with Decorative Lime Paw-Print Dots */}
            <div className="relative">
              {/* Decorative lime (#D0F09E) paw-print dots: 3 rounded blobs slightly overlapping top-left of heading */}
              <svg
                className="absolute -top-6 -left-3 w-10 h-10 pointer-events-none select-none"
                viewBox="0 0 44 44"
                fill="none"
                aria-hidden="true"
              >
                {/* 3 rounded lime blobs in a paw cluster */}
                <circle cx="10" cy="12" r="5.5" fill="#D0F09E" />
                <circle cx="23" cy="8" r="6" fill="#D0F09E" />
                <circle cx="34" cy="15" r="5.5" fill="#D0F09E" />
                <ellipse cx="22" cy="26" rx="10" ry="8" fill="#D0F09E" />
              </svg>

              {/* Single-color deep navy #2F2F63 H1 */}
              <h1
                className="font-heading font-bold text-[#2F2F63] leading-[1.05] tracking-[-0.03em] relative z-10 m-0"
                style={{
                  fontSize: "clamp(44px, 6vw, 84px)",
                  color: "#2F2F63",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Pet care that comes to your door.
              </h1>
            </div>

            {/* Paragraph */}
            <p
              className="text-[#7A7499] text-[19px] leading-[1.6] max-w-[34em] mt-[18px] mb-0 relative z-10"
              style={{
                color: "#7A7499",
                fontSize: "19px",
                lineHeight: 1.6,
                maxWidth: "34em",
              }}
            >
              Nail trims, ear cleaning, anal gland expression, walks and check-ins, done at home by a handler with years of veterinary experience. No car rides. No waiting rooms. Just calm, confident care.
            </p>

            {/* Action Row */}
            <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6 relative z-10">
              {/* Primary Pill Button */}
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center text-white font-bold text-[18px] rounded-full transition-all duration-200 hover:opacity-95 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5A5AF0] active:scale-[0.98]"
                style={{
                  backgroundColor: "#5A5AF0",
                  padding: "18px 30px",
                  minHeight: "58px",
                }}
              >
                Request an appointment
              </Link>

              {/* Phone Group: 64px round button + stacked text */}
              <div className="flex items-center gap-3.5">
                <a
                  href={telHref}
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:opacity-95 hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5A5AF0] flex-shrink-0"
                  style={{
                    backgroundColor: "#5A5AF0",
                    width: "64px",
                    height: "64px",
                    minWidth: "64px",
                    minHeight: "64px",
                  }}
                  aria-label={`Call Critter Care on Wheels at ${SITE_CONFIG.phoneDisplay}`}
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                </a>

                <a
                  href={telHref}
                  className="flex flex-col text-left group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5A5AF0] rounded px-1"
                  aria-label={`Call Critter Care on Wheels at ${SITE_CONFIG.phoneDisplay}`}
                >
                  <span
                    className="text-[#7A7499] text-[18px] font-medium leading-tight group-hover:text-indigo-600 transition-colors"
                    style={{ color: "#7A7499", fontSize: "18px" }}
                  >
                    Call us
                  </span>
                  <span
                    className="text-[#2F2F63] font-bold text-[20px] leading-tight group-hover:text-indigo-600 transition-colors"
                    style={{ color: "#2F2F63", fontSize: "20px" }}
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </span>
                </a>
              </div>
            </div>

            {/* Serving Area Note */}
            {SITE_CONFIG.showAreaNote && (
              <div className="mt-7 flex items-center gap-1.5 text-[14px] text-[#7A7499] relative z-10">
                <svg
                  className="w-4 h-4 text-[#7A7499] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Serving La Porte and Northwest Indiana</span>
              </div>
            )}

            {/* Decorative Yellow Burst: 4 short rounded yellow (#F5B82E) lines fanning out at bottom right */}
            <svg
              className="absolute -bottom-2 -right-2 w-24 h-24 pointer-events-none select-none opacity-85 z-0"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <line x1="38" y1="68" x2="16" y2="48" stroke="#F5B82E" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="50" y1="62" x2="34" y2="28" stroke="#F5B82E" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="62" y1="58" x2="62" y2="20" stroke="#F5B82E" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="72" y1="68" x2="88" y2="38" stroke="#F5B82E" strokeWidth="5.5" strokeLinecap="round" />
            </svg>
          </div>

        </div>
      </div>

      {/* Gentle fade-up animation for content panel respecting prefers-reduced-motion */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .hero-content-panel {
            animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
        }
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
