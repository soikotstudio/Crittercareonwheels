// ============================================================
// CRITTER CARE ON WHEELS — SITE CONFIGURATION
// Edit this file to update contact info, prices, hours, etc.
// ============================================================

export const SITE_CONFIG = {
  name: "Critter Care on Wheels",
  tagline: "Pet care that comes to your door.",
  phone: "2195550199",
  phoneDisplay: "(XXX) XXX-XXXX",
  email: "hello@crittercareonwheels.com",
  city: "La Porte",
  state: "IN",
  zip: "46350",

  // Hero Section Configuration
  showAreaNote: true,
  heroImage: {
    src: "/hero-handler.png",
    alt: "Smiling pet care handler in purple scrubs gently holding a happy dog at home",
    width: 518,
    height: 809,
  },

  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday",        time: "9:00 AM – 4:00 PM" },
    { day: "Sunday",          time: "Closed" },
  ],

  social: {
    facebook:  "https://facebook.com/",
    instagram: "https://instagram.com/",
  },

  services: [
    { id: "nail-trim",   icon: "scissor", title: "Nail Trims",              description: "Quick, safe nail trimming done gently in the comfort of your home — no table, no stress.", price: "$25" },
    { id: "ear-clean",   icon: "ear",     title: "Ear Cleaning",            description: "Routine ear cleaning to keep infections at bay, performed with care by a handler with vet experience.", price: "$20" },
    { id: "anal-gland",  icon: "paw",     title: "Anal Gland Expression",   description: "A common but often uncomfortable task — done correctly and quickly to keep your pet comfortable.", price: "$30" },
    { id: "dog-walk",    icon: "walk",    title: "Dog Walks",               description: "Daily or regular walks to keep your pup active, happy, and well-exercised on their own turf.", price: "$25" },
    { id: "check-in",   icon: "home",    title: "Pet Check-Ins",           description: "Drop-in visits to feed, water, and give your pet attention while you're away.", price: "$25" },
    { id: "other",       icon: "chat",    title: "Something Else?",         description: "Not sure if we cover it? Describe what you need in the form and we'll let you know.", price: "Custom quote" },
  ],

  serviceAreaTowns: [
    "La Porte","Michigan City","Valparaiso","Portage","Chesterton",
    "Crown Point","Hobart","Merrillville","Munster","Hammond","Gary",
    "Schererville","St. John","Highland","Dyer","Lowell","Westville","Rolling Prairie"
  ],

  credentials: [
    "Years in veterinary medicine",
    "Fear-free handling",
    "Local to La Porte, IN",
  ],

  bookingHighlights: [
    "Handler with veterinary experience",
    "We come to your home",
    "Same-week appointments often available",
  ],

  testimonials: [
    { quote: "She was amazing with my anxious rescue dog. He's usually a nightmare at the vet but she had him calm the whole time. We'll never go anywhere else.", name: "Sarah Miller", town: "La Porte, IN", photo: "/sarah-miller.jpg" },
    { quote: "Finally — nail trims at home! My cat HATES car rides and waiting rooms. This was stress-free for both of us.", name: "Jessica Thorne", town: "Michigan City, IN", photo: "/jessica-thorne.jpg" },
    { quote: "Incredibly professional and gentle. You can tell she really knows what she's doing. Highly recommend to anyone with a senior pet.", name: "Amanda Ross", town: "Valparaiso, IN", photo: "/amanda-ross.jpg" },
  ],
};

export const WEB3FORMS_CONFIG = {
  accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
};

export const SUPABASE_CONFIG = {
  url:     import.meta.env.VITE_SUPABASE_URL      || "",
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
};
