import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE_CONFIG } from "../config";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home",     href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About",    href: "/#about" },
];

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "border-b border-gray-100 shadow-sm" : "border-b border-transparent"
      }`}
      style={{ minHeight: "80px", paddingTop: "16px", paddingBottom: "16px" }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <div className="flex-shrink-0 flex items-center">
          <Link
            to="/"
            className="transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-xl"
            aria-label="Critter Care on Wheels – home"
          >
            <Logo />
          </Link>
        </div>

        {/* ── Desktop Nav (Centered) ── */}
        <nav
          id="desktop-nav"
          className="items-center justify-center gap-7 flex-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-semibold text-gray-700 hover:text-indigo-500 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded px-1 py-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Desktop Right (Phone + Book Visit) ── */}
        <div id="desktop-right" className="flex-shrink-0 items-center gap-4">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="text-[15px] font-semibold text-gray-700 hover:text-indigo-500 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded px-2 py-1 flex items-center gap-2"
            aria-label={`Call Critter Care on Wheels at ${SITE_CONFIG.phoneDisplay}`}
          >
            <span aria-hidden="true">📞</span>
            <span>{SITE_CONFIG.phoneDisplay}</span>
          </a>
          <Link
            to="/appointment"
            className="text-white font-semibold text-sm px-6 py-3 rounded-full transition-all hover:opacity-95 hover:shadow-md focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            style={{
              backgroundColor: "#4B3FD8",
              minHeight: "44px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Book a Visit
          </Link>
        </div>

        {/* ── Hamburger (< 900px) ── */}
        <button
          id="hamburger"
          className="p-2 rounded-lg text-gray-700 hover:bg-indigo-50 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open navigation menu"}
          style={{ minHeight: "44px", minWidth: "44px", alignItems: "center", justifyContent: "center" }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile menu (< 900px) ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        className={`overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="max-w-[1240px] mx-auto px-6 py-5 flex flex-col gap-4" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={close}
              className="font-semibold text-gray-800 hover:text-indigo-500 py-1 transition-colors text-base"
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              onClick={close}
              className="font-semibold text-gray-700 hover:text-indigo-500 transition-colors py-2 flex items-center gap-2"
              aria-label={`Call Critter Care on Wheels at ${SITE_CONFIG.phoneDisplay}`}
            >
              <span aria-hidden="true">📞</span>
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <Link
              to="/appointment"
              onClick={close}
              className="text-white font-semibold text-center px-5 py-3.5 rounded-full transition-colors"
              style={{ backgroundColor: "#4B3FD8", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              Book a Visit
            </Link>
          </div>
        </nav>
      </div>

      {/* Media query styling for exactly 900px breakpoint & xs logo shrink */}
      <style>{`
        @media (min-width: 900px) {
          #desktop-nav   { display: flex !important; }
          #desktop-right { display: flex !important; }
          #hamburger     { display: none !important; }
        }
        @media (max-width: 899px) {
          #desktop-nav   { display: none !important; }
          #desktop-right { display: none !important; }
          #hamburger     { display: flex !important; }
        }
        @media (max-width: 380px) {
          .hidden-xs { display: none !important; }
          .show-xs   { display: inline !important; }
        }
      `}</style>
    </header>
  );
}
