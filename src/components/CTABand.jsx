import { Link } from "react-router-dom";

export default function CTABand() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="relative rounded-[32px] overflow-hidden px-8 lg:px-16 py-12 lg:py-16 shadow-xl"
          style={{ backgroundColor: "#4B3FD8" }}
        >
          {/* Lime & Yellow Organic Decorative Shapes */}
          <svg className="absolute -top-10 -left-10 w-52 h-52 opacity-30 pointer-events-none select-none" viewBox="0 0 200 200" fill="none" aria-hidden="true">
            <path d="M20,180 Q100,-20 180,100" stroke="#C6F26B" strokeWidth="12" strokeLinecap="round" fill="none"/>
          </svg>
          <svg className="absolute -bottom-10 -right-10 w-52 h-52 opacity-25 pointer-events-none select-none" viewBox="0 0 200 200" fill="none" aria-hidden="true">
            <path d="M180,20 Q100,220 20,100" stroke="#C6F26B" strokeWidth="12" strokeLinecap="round" fill="none"/>
          </svg>

          {/* Yellow sparkle */}
          <svg className="absolute top-8 right-24 w-8 h-8 pointer-events-none select-none" viewBox="0 0 32 32" fill="#F5B82E" aria-hidden="true">
            <path d="M16 0C16 8.837 8.837 16 0 16C8.837 16 16 23.163 16 32C16 23.163 23.163 16 32 16C23.163 16 16 8.837 16 0Z" />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-4">
                Give your pet a stress-free visit today!
              </h2>
              <p className="text-indigo-100 text-lg leading-relaxed">
                Professional, gentle care — right at your door. No carriers, no waiting, no strangers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                to="/appointment"
                className="bg-[#C6F26B] hover:bg-[#D5FAA0] text-[#1D1780] font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 text-center text-base"
              >
                Request an Appointment
              </Link>
            </div>
          </div>

          {/* Clean decorative paw watermark on large screens */}
          <div className="hidden xl:block absolute right-12 -bottom-6 opacity-10 pointer-events-none select-none" aria-hidden="true">
            <svg className="w-56 h-56 text-white fill-current" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 3.34 14 5C14 6.66 13.1 8 12 8C10.9 8 10 6.66 10 5C10 3.34 10.9 2 12 2M6 4C7.1 4 8 5.34 8 7C8 8.66 7.1 10 6 10C4.9 10 4 8.66 4 7C4 5.34 4.9 4 6 4M18 4C19.1 4 20 5.34 20 7C20 8.66 19.1 10 18 10C16.9 10 16 8.66 16 7C16 5.34 16.9 4 18 4M2.5 10C3.6 10 4.5 11.34 4.5 13C4.5 14.66 3.6 16 2.5 16C1.4 16 .5 14.66 .5 13C.5 11.34 1.4 10 2.5 10M21.5 10C22.6 10 23.5 11.34 23.5 13C23.5 14.66 22.6 16 21.5 16C20.4 16 19.5 14.66 19.5 13C19.5 11.34 20.4 10 21.5 10M12 10C15.87 10 19 12.69 19 16C19 17.65 18 19 16 20C14.5 20.75 13.5 22 12 22C10.5 22 9.5 20.75 8 20C6 19 5 17.65 5 16C5 12.69 8.13 10 12 10Z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
