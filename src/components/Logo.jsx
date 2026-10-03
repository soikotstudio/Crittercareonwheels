export default function Logo({ variant = "default", className = "" }) {
  const isWhite = variant === "white" || variant === "footer";
  const isMarkOnly = variant === "mark";

  // Color tokens matching the reference image's deep navy/indigo tone or white in dark footer
  const primaryColor = isWhite ? "#FFFFFF" : "#2E2A69";
  const accentColor = isWhite ? "#C6F26B" : "#4B3FD8";

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* ── Friendly Puppy Contour Icon (Exact outline style inspired by reference) ── */}
      <div className="relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-200 hover:scale-105"
          aria-hidden="true"
        >
          {/* Dog Head Outline & Floppy Ears */}
          {/* Main head silhouette & snout line */}
          <path
            d="M13.5 17.5C13.5 11.5 17.8 7 24 7C30.2 7 34.5 11.5 34.5 17.5"
            stroke={primaryColor}
            strokeWidth="3.6"
            strokeLinecap="round"
          />

          {/* Left Floppy Ear */}
          <path
            d="M14 17.5C14 17.5 7.5 19.5 7.5 27.5C7.5 33 11 34.5 13.5 32C15.5 30 15 24 15 22"
            stroke={primaryColor}
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Floppy Ear */}
          <path
            d="M34 17.5C34 17.5 40.5 19.5 40.5 27.5C40.5 33 37 34.5 34.5 32C32.5 30 33 24 33 22"
            stroke={primaryColor}
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Cheeks / Lower jaw contour */}
          <path
            d="M14.5 29C14.5 36.5 18.5 41 24 41C29.5 41 33.5 36.5 33.5 29"
            stroke={primaryColor}
            strokeWidth="3.6"
            strokeLinecap="round"
          />

          {/* Left Eye */}
          <circle cx="18.5" cy="22.5" r="2.4" fill={primaryColor} />

          {/* Right Eye */}
          <circle cx="29.5" cy="22.5" r="2.4" fill={primaryColor} />

          {/* Cute Nose (Rounded triangle) */}
          <path
            d="M21.5 28C21.5 28 22.8 26.5 24 26.5C25.2 26.5 26.5 28 26.5 28C26.5 29.3 25.4 30.5 24 30.5C22.6 30.5 21.5 29.3 21.5 28Z"
            fill={primaryColor}
          />

          {/* Happy Mouth Smile with tongue/chin curve */}
          <path
            d="M19.5 32.5C21 34.5 22.5 35 24 35C25.5 35 27 34.5 28.5 32.5"
            stroke={primaryColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ── Typography Wordmark (matching bold, rounded modern sans geometry) ── */}
      {!isMarkOnly && (
        <div className="flex flex-col text-left justify-center leading-none">
          <div className="flex items-baseline tracking-[-0.035em]">
            <span
              className="font-heading font-extrabold text-[21px] sm:text-[23px] leading-none"
              style={{ color: primaryColor }}
            >
              Critter Care
            </span>
          </div>

          <div className="mt-0.5">
            <span
              className="font-heading font-black text-[9px] sm:text-[10px] tracking-[0.22em] uppercase leading-none block"
              style={{ color: accentColor }}
            >
              ON WHEELS
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
