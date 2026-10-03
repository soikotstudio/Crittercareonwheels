import { SITE_CONFIG } from "../config";

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
              We come <span className="text-indigo-500">to you.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Based in La Porte, IN serving most of Northwest Indiana.
              Not sure if you are in range?{" "}
              <a href="#book" className="text-indigo-500 underline hover:text-indigo-600 font-semibold">Ask in the form.</a>
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {SITE_CONFIG.serviceAreaTowns.map((town) => (
                <span key={town} className="bg-white border border-indigo-100 text-gray-700 font-medium text-sm px-4 py-2 rounded-full shadow-sm">
                  {town}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-50">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">Get in touch</h3>
            <div className="space-y-4 mb-6">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-indigo-500 transition-colors group">
                <span className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">📞</span>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Phone / Text</div>
                  <div className="font-semibold">{SITE_CONFIG.phoneDisplay}</div>
                </div>
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-gray-700 hover:text-indigo-500 transition-colors group">
                <span className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">✉️</span>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Email</div>
                  <div className="font-semibold">{SITE_CONFIG.email}</div>
                </div>
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>🕐</span> Business Hours
              </h4>
              <div className="space-y-2">
                {SITE_CONFIG.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-gray-600">{h.day}</span>
                    <span className={`font-medium ${h.time === "Closed" ? "text-gray-400" : "text-gray-900"}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
