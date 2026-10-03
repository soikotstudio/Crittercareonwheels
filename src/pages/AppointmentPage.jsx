import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_CONFIG, WEB3FORMS_CONFIG } from "../config";

function today() {
  return new Date().toISOString().split("T")[0];
}

export default function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    services: preselectedService || "",
    date: "",
    time: "",
    notes: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (preselectedService) {
      setForm((f) => ({ ...f, services: preselectedService }));
    }
  }, [preselectedService]);

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.address.trim()) e.address = "Full address is required.";
    return e;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("AppointmentPage handleSubmit fired. Form:", form);

    const errs = validate();
    console.log("AppointmentPage validation errors:", errs);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const accessKey = WEB3FORMS_CONFIG.accessKey;

      if (accessKey) {
        const formData = new FormData();
        formData.append("access_key", accessKey);
        formData.append("subject", `🐾 New Pet Care Appointment Request from ${form.name}`);
        formData.append("from_name", "Critter Care on Wheels Booking");
        formData.append("name", form.name);
        formData.append("phone", form.phone);
        formData.append("email", form.email || "");
        if (form.email) {
          formData.append("replyto", form.email);
        }
        formData.append("address", form.address);
        formData.append("services", form.services || "Not specified");
        formData.append("preferred_date", form.date || "Flexible");
        formData.append("preferred_time", form.time || "Flexible");
        formData.append("notes", form.notes || "None");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message || "Failed to send request");
        }
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }

      navigate("/thank-you", { state: { name: form.name } });
    } catch (err) {
      setErrors({ submit: err.message || "Something went wrong. Please try again or call us directly." });
    } finally {
      setLoading(false);
    }
  };

  const inputCls = (k) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow bg-white ${
      errors[k] ? "border-red-400 bg-red-50" : "border-gray-200 focus:bg-white"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 py-16 lg:py-24 bg-white border-t border-[#EAE2D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb Navigation */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-indigo-500 transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-bold">Book an Appointment</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── Left: Info & Contact Details ── */}
            <div className="lg:pt-6">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
                Request an{" "}
                <span className="text-indigo-500">appointment.</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Fill out the form and we'll confirm availability and reach out to you
                within one business day. This is a <strong>request</strong> — not a
                confirmed booking until we follow up.
              </p>

              {/* Highlights */}
              <ul className="space-y-4">
                {SITE_CONFIG.bookingHighlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-7 h-7 bg-lime rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg className="w-3.5 h-3.5 text-indigo-800" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Direct Contact Group (Email us & Call us) */}
              <div className="mt-10 pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row lg:flex-col gap-5">
                {/* Email Us */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl p-1 -m-1"
                  aria-label={`Email us at ${SITE_CONFIG.email}`}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: "#5A5AF0" }}
                  >
                    <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-medium text-[#7A7499] leading-tight">
                      Email us
                    </span>
                    <span className="text-[17px] font-bold text-[#2F2F63] leading-tight mt-1 group-hover:text-indigo-600 transition-colors">
                      {SITE_CONFIG.email}
                    </span>
                  </div>
                </a>

                {/* Call Us */}
                <a
                  href={`tel:${SITE_CONFIG.phone || "2195550199"}`}
                  className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl p-1 -m-1"
                  aria-label={`Call us at ${SITE_CONFIG.phoneDisplay}`}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: "#5A5AF0" }}
                  >
                    <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-medium text-[#7A7499] leading-tight">
                      Call us
                    </span>
                    <span className="text-[17px] font-bold text-[#2F2F63] leading-tight mt-1 group-hover:text-indigo-600 transition-colors">
                      {SITE_CONFIG.phoneDisplay}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* ── Right: Form Card (Identical to Homepage Section) ── */}
            <div
              className="rounded-[32px] p-8 lg:p-10 transition-all duration-300"
              style={{
                backgroundColor: "#FAF6ED",
                border: "1.5px solid #E8E0CE",
                boxShadow: "0 12px 40px rgba(47, 47, 98, 0.06)",
              }}
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4" aria-live="polite">🐾</div>
                  <h3 className="font-heading font-bold text-2xl text-indigo-500 mb-3">Thanks! We'll be in touch.</h3>
                  <p className="text-gray-600 mb-6">
                    We'll confirm your appointment request within one business day.
                    Check your phone and email for our follow-up.
                  </p>
                  <div className="flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "", phone: "", email: "", address: "",
                          services: "", date: "", time: "", notes: "",
                          honeypot: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full font-bold text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors"
                    >
                      Submit Another
                    </button>
                    <Link
                      to="/"
                      className="px-6 py-2.5 rounded-full font-bold text-sm bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Appointment request form">
                  <div className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="f-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full name <span className="text-red-400" aria-label="required">*</span>
                      </label>
                      <input
                        id="f-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        className={inputCls("name")}
                        placeholder="Jane Smith"
                        aria-describedby={errors.name ? "err-name" : undefined}
                      />
                      {errors.name && <p id="err-name" className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>}
                    </div>

                    {/* Phone + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="f-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                          id="f-phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          className={inputCls("phone")}
                          placeholder="(219) 555-0100"
                          aria-describedby={errors.phone ? "err-phone" : undefined}
                        />
                        {errors.phone && <p id="err-phone" className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="f-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email
                        </label>
                        <input
                          id="f-email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          className={inputCls("email")}
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    {/* Full Address */}
                    <div>
                      <label htmlFor="f-address" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full address <span className="text-red-400" aria-label="required">*</span>
                      </label>
                      <input
                        id="f-address"
                        type="text"
                        required
                        autoComplete="street-address"
                        value={form.address}
                        onChange={(e) => set("address", e.target.value)}
                        className={inputCls("address")}
                        placeholder="123 Main St, La Porte, IN 46350"
                        aria-describedby={errors.address ? "err-address" : undefined}
                      />
                      {errors.address && <p id="err-address" className="mt-1 text-xs text-red-500" role="alert">{errors.address}</p>}
                    </div>

                    {/* Services needed */}
                    <div>
                      <label htmlFor="f-services" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Services needed
                      </label>
                      <input
                        id="f-services"
                        type="text"
                        value={form.services}
                        onChange={(e) => set("services", e.target.value)}
                        className={inputCls("services")}
                        placeholder="e.g. nail trim, ear cleaning, dog walk..."
                      />
                    </div>

                    {/* Preferred Date + Best Time */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="f-date" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Preferred date
                        </label>
                        <input
                          id="f-date"
                          type="date"
                          min={today()}
                          value={form.date}
                          onChange={(e) => set("date", e.target.value)}
                          className={inputCls("date")}
                        />
                      </div>
                      <div>
                        <label htmlFor="f-time" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Best time
                        </label>
                        <input
                          id="f-time"
                          type="text"
                          value={form.time}
                          onChange={(e) => set("time", e.target.value)}
                          className={inputCls("time")}
                          placeholder="e.g. 10:00 AM, afternoons, flexible..."
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label htmlFor="f-notes" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Notes
                      </label>
                      <textarea
                        id="f-notes"
                        rows={3}
                        value={form.notes}
                        onChange={(e) => set("notes", e.target.value)}
                        className={inputCls("notes")}
                        placeholder="Temperament, health concerns, gate code, other pets at home..."
                      />
                    </div>

                    {errors.submit && (
                      <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
                        {errors.submit}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full transition-all hover:shadow-lg text-base"
                      aria-busy={loading}
                    >
                      {loading ? "Sending..." : "Send Request"}
                    </button>

                    <p className="text-xs text-center text-gray-400">
                      This sends a <strong>request</strong> — not a confirmed booking.
                      We'll follow up within one business day to confirm.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
