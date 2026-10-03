export default function WhyChooseUs() {
  const bullets = [
    "Years of hands-on veterinary experience — not just hobbyist pet care",
    "Gentle, fear-free handling for anxious, reactive, or senior animals",
    "Your pet stays in the familiarity of their own home",
    "No car rides, no waiting rooms, no strange smells or sounds",
    "Patience and calm as a standard, not an upsell",
    "Same handler every visit — your pet knows who's coming",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#EAE2D0]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Real Photo Left */}
          <div className="relative rounded-[32px] overflow-hidden shadow-card min-h-[420px] lg:min-h-[520px] group bg-slate-50">
            <img
              src="/why-choose-us.jpg"
              alt="Veterinary handler in purple scrubs gently brushing and caring for a calm golden retriever in a home setting"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Decorative in-home badge */}
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-indigo-900 shadow-md flex items-center gap-2" aria-hidden="true">
              <span className="text-base">🐾</span>
              <span>In-Home Veterinary Care</span>
            </div>
          </div>

          {/* Text Right */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
              <span>★</span> Why Choose Us
            </div>

            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Why you should{" "}
              <span className="text-indigo-500">choose us.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              There's a real difference between someone who likes animals and someone
              who has spent years working with them in a clinical setting. Our handler
              brings veterinary-medicine knowledge into your living room — reading body
              language, noticing subtle signs of discomfort, and adjusting every step
              of the way so your pet finishes feeling calm, not rattled.
            </p>

            <ul className="space-y-3.5 mb-10" aria-label="Our advantages">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="mt-0.5 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-white" aria-hidden="true">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 text-base"
            >
              Book a Visit
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
