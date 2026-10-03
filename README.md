# Critter Care on Wheels — Website

A production-quality marketing website for Critter Care on Wheels, a mobile in-home pet care business based in La Porte, Indiana.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Placeholders to Replace Before Launch

All editable content is centralized in **`src/config.js`**.

### 1. Phone Number
- File: `src/config.js`
- Field: `phone` and `phoneDisplay`
- Replace `[YOUR PHONE NUMBER]` and `(XXX) XXX-XXXX` with your real phone number.

### 2. Email Address
- File: `src/config.js`
- Field: `email`
- Replace `hello@crittercareonwheels.com` with your real email.

### 3. Business Hours
- File: `src/config.js`
- Field: `hours` array
- Edit the day/time pairs to match your real schedule.

### 4. Prices
- File: `src/config.js`
- Field: `services[].price` for each service
- Set a string like `"$20"` to show a price badge. Leave `""` to hide the badge.

### 5. Service Area Towns
- File: `src/config.js`
- Field: `serviceAreaTowns` array
- Add or remove town names as needed.

### 6. Owner Credentials / Chips
- File: `src/config.js`
- Field: `credentials` array
- Replace the three placeholder strings with your real credentials (e.g., "Licensed Veterinary Technician", "Certified Fear Free Handler").

### 7. Testimonials
- File: `src/config.js`
- Field: `testimonials` array
- **IMPORTANT**: Replace all placeholder testimonials with real reviews from real clients before launch.

### 8. Hero Photo
- File: `src/components/Hero.jsx`
- Look for the comment `[Replace with real photo: handler with calm pet in home setting]`
- Replace the gradient placeholder div with an `<img>` tag pointing to your real photo.

### 9. Why Choose Us Photo
- File: `src/components/WhyChooseUs.jsx`
- Look for the comment `[Replace with real photo: handler with client pet]`

### 10. Owner Photo (About section)
- File: `src/components/About.jsx`
- Look for the comment `[Replace with real owner photo]`

### 11. Gallery Photos (7 photos)
- File: `src/components/Gallery.jsx`
- Replace the emoji placeholders with `<img>` elements loading real pet photos.

### 12. Testimonial Headshots
- File: `src/config.js`
- Uncomment the `photo:` field in each testimonial entry and provide real image paths.

### 13. Google Maps Embed
- File: `src/components/ServiceArea.jsx`
- Look for the comment `[TODO: Embed Google Maps iframe here]`
- Replace the placeholder with a Google Maps embed `<iframe>`.

### 14. Social Media Links
- File: `src/config.js`
- Fields: `social.facebook` and `social.instagram`
- Replace with real profile URLs.

### 15. Open Graph Image
- File: `index.html`
- Uncomment the `og:image` meta tag and set it to a real, hosted image URL (1200x630px recommended).

---

## Supabase Setup (Form Backend)

The booking form currently shows a demo success state. To store real submissions:

1. Create a [Supabase](https://supabase.com) project.
2. Run this SQL to create the table:

```sql
create table appointment_requests (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  phone       text not null,
  email       text,
  town        text not null,
  pets        text not null,
  services    text[],
  preferred_date date,
  preferred_time text,
  notes       text,
  status      text default 'new',
  created_at  timestamptz default now()
);

-- Row-level security: allow anonymous inserts only
alter table appointment_requests enable row level security;

create policy "Allow anonymous inserts"
  on appointment_requests for insert
  to anon
  with check (true);

create policy "Require auth to read"
  on appointment_requests for select
  using (auth.role() = 'authenticated');
```

3. Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=https://xxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

4. Install the Supabase client:

```bash
npm install @supabase/supabase-js
```

5. In `src/components/BookingForm.jsx`, uncomment the Supabase insert block (marked with TODO comments).

---

## Admin Page

Visit `/admin` to see a simple password-protected list of appointment requests.
Default password: `critter2024` — **change this immediately** in `src/pages/AdminPage.jsx`.

---

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy to Vercel, Netlify, or any static host.

---

## Tech Stack

- **React** + **Vite** — fast dev server and build
- **Tailwind CSS v3** — utility-first styling
- **Supabase** — form submissions (requires setup)
- **Google Fonts** — Bricolage Grotesque (headings) + Figtree (body)
