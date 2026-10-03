import { SITE_CONFIG } from "../config";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-[#EAE2D0]" style={{ backgroundColor: "#FAF6ED" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white text-indigo-600 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 border border-indigo-100 shadow-sm">
              <span>★</span> Meet the Handler
            </div>

            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Handled by someone who's done this{" "}
              <span className="text-indigo-500">for years.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Critter Care on Wheels was born from years spent working alongside
              veterinarians — learning how animals communicate stress, what
              gentle restraint looks like, and how to turn a potentially
              frightening experience into something tolerable, even pleasant.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Every service we offer is grounded in that background. We don't
              just love animals — we understand their body language, respect
              their limits, and adjust our approach for every individual. Whether
              your pet is a bouncy Lab puppy or a 14-year-old cat with arthritis,
              they'll be treated with patience, knowledge, and genuine care.
            </p>

            {/* Credential chips */}
            <div className="flex flex-wrap gap-3">
              {SITE_CONFIG.credentials.map((cred, i) => (
                <span
                  key={i}
                  className="bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-1.5"
                >
                  <span className="text-indigo-500">✓</span> {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Real Photo right */}
          <div className="relative rounded-[32px] overflow-hidden shadow-card min-h-[420px] lg:min-h-[500px] group bg-slate-50">
            <img
              src="/about-founder.jpg"
              alt="Veterinary technician and owner of Critter Care on Wheels in clinical home office"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Trust badge */}
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-md flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="text-xs font-bold text-gray-900 leading-tight">Certified Professional</p>
                <p className="text-[11px] text-gray-500 leading-tight">Veterinary Medicine Background</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
