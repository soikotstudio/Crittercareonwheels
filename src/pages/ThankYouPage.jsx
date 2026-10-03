import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_CONFIG } from "../config";

export default function ThankYouPage() {
  const location = useLocation();
  const state = location.state || {};
  const clientName = state.name ? state.name.trim().split(" ")[0] : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 py-16 lg:py-24 bg-[#FFF8E7]/50 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">
          <div
            className="rounded-[32px] p-8 sm:p-12 text-center transition-all"
            style={{
              backgroundColor: "#FAF6ED",
              border: "1.5px solid #E8E0CE",
              boxShadow: "0 16px 48px rgba(47, 47, 98, 0.08)",
            }}
          >
            {/* Animated / Friendly Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-lime rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-10 h-10 text-indigo-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-indigo-600 border border-indigo-100 shadow-xs mb-4">
              <span>🐾</span> Request Received
            </div>

            {/* Heading */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
              Thank You{clientName ? `, ${clientName}!` : "!"}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
              We've received your in-home pet care request. We review every request carefully to ensure your pet gets the calmest, best care possible.
            </p>

            {/* What to expect card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 text-left border border-[#E8E0CE] mb-8 shadow-xs">
              <h2 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <span>🕒</span> What happens next?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">Review & Scheduling</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      We'll check our travel route and schedule to match your requested date and time window.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">Confirmation Within 1 Business Day</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      We will call or email you to confirm details, ask any necessary pet questions, and finalize the time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">We Come to Your Door</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Gentle, fear-free care right in the comfort of your home — no car trips, cages, or waiting rooms!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact reassurance & Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white text-base bg-indigo-500 hover:bg-indigo-600 transition-all hover:shadow-md"
              >
                Back to Homepage
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone || "2195550199"}`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-gray-800 text-base bg-white hover:bg-gray-50 border border-gray-200 transition-all"
              >
                Have an urgent question? Call {SITE_CONFIG.phoneDisplay}
              </a>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
