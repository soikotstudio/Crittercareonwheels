import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../config";
import Logo from "./Logo";

export default function Footer() {
  const telHref = `tel:${SITE_CONFIG.phone || "2195550199"}`;

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Book a Visit", href: "/appointment" },
  ];

  return (
    <footer
      className="w-full text-white"
      style={{ backgroundColor: "#4B3FD8" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 pt-10 pb-5 lg:pt-12 lg:pb-6">
        {/* Main Content Columns: 3 columns on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 justify-between">

          {/* ── 1. Brand (approx 40% width) ── */}
          <div className="w-full lg:w-[38%] flex-shrink-0">
            {/* Logo */}
            <div className="mb-4">
              <Link to="/" className="inline-block transition-opacity hover:opacity-90">
                <Logo variant="white" />
              </Link>
            </div>

            {/* Description (max 3 lines, 15px, white at 85% opacity) */}
            <p className="text-[15px] leading-relaxed text-white/85 max-w-[390px] mb-5">
              Mobile, in-home pet care for Northwest Indiana. Nail trims, ear cleaning, anal gland expression, walks and check-ins, done where your pet is most comfortable.
            </p>

            {/* Social Icons (40px, slightly darker indigo circles, white icons, 12px gap) */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:opacity-90 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white"
                style={{ backgroundColor: "#3B30BE", minWidth: "40px", minHeight: "40px" }}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:opacity-90 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white"
                style={{ backgroundColor: "#3B30BE", minWidth: "40px", minHeight: "40px" }}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── 2. Navigation (approx 20% width) ── */}
          <div className="w-full lg:w-[18%]">
            <h3 className="text-[13px] font-bold uppercase tracking-wider text-white mb-3">
              NAVIGATION
            </h3>
            {/* On mobile: 2 per row; on desktop: 8px vertical spacing */}
            <nav
              className="grid grid-cols-2 gap-x-4 gap-y-2 lg:flex lg:flex-col lg:gap-2"
              aria-label="Footer navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[15px] text-white/85 hover:text-white hover:underline focus-visible:text-white focus-visible:underline transition-colors py-1 min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── 3. Contact & Hours (approx 40% width, 2 sub-columns) ── */}
          <div className="w-full lg:w-[42%] grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-6">

            {/* Sub-column: Contact */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-white mb-3">
                CONTACT
              </h3>
              <div className="flex flex-col gap-2">
                {/* Phone */}
                <a
                  href={telHref}
                  className="flex items-center gap-2.5 text-[15px] text-white/85 hover:text-white hover:underline focus-visible:text-white focus-visible:underline transition-colors py-1 min-h-[36px]"
                  aria-label={`Call us at ${SITE_CONFIG.phoneDisplay}`}
                >
                  <svg className="w-[18px] h-[18px] text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2.5 text-[15px] text-white/85 hover:text-white hover:underline focus-visible:text-white focus-visible:underline transition-colors py-1 min-h-[36px]"
                >
                  <svg className="w-[18px] h-[18px] text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">{SITE_CONFIG.email}</span>
                </a>

                {/* Address */}
                <div className="flex items-center gap-2.5 text-[15px] text-white/85 py-1 min-h-[36px]">
                  <svg className="w-[18px] h-[18px] text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{SITE_CONFIG.city}, {SITE_CONFIG.state} {SITE_CONFIG.zip}</span>
                </div>

                {/* Serving Northwest Indiana */}
                <p className="text-[13px] text-white/75 mt-0.5">
                  Serving Northwest Indiana
                </p>
              </div>
            </div>

            {/* Sub-column: Hours */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-white mb-3">
                HOURS
              </h3>
              <div className="flex flex-col gap-1 text-[14px]">
                {SITE_CONFIG.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center gap-3 text-white/90 py-0.5"
                  >
                    <span>{h.day}</span>
                    <span className="font-medium text-white/90">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ── Bottom Bar: Divider + Copyright ── */}
        <div className="border-t border-white/20 mt-8 pt-4">
          <p className="text-[14px] text-white/80 py-2 m-0 text-left">
            © 2026 Critter Care on Wheels. La Porte, IN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
