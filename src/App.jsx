import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import CTABand from "./components/CTABand";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";

import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import AppointmentPage from "./pages/AppointmentPage";
import ThankYouPage from "./pages/ThankYouPage";
import { SITE_CONFIG } from "./config";

// Inject structured data JSON-LD
function JsonLD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_CONFIG.name,
    "description": "Mobile in-home pet care in La Porte and Northwest Indiana. Nail trims, ear cleaning, anal gland expression, dog walks and check-ins by a handler with veterinary experience.",
    "telephone": SITE_CONFIG.phone,
    "email": SITE_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": SITE_CONFIG.city,
      "addressRegion": SITE_CONFIG.state,
      "postalCode": SITE_CONFIG.zip,
      "addressCountry": "US",
    },
    "areaServed": { "@type": "AdministrativeArea", "name": "Northwest Indiana" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pet Care Services",
      "itemListElement": SITE_CONFIG.services.slice(0, 5).map((s) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": s.title },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function HomePage() {
  return (
    <>
      <JsonLD />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <CTABand />
        <About />
        <Gallery />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<HomePage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/book"        element={<AppointmentPage />} />
        <Route path="/thank-you"   element={<ThankYouPage />} />
        <Route path="/admin"       element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}
