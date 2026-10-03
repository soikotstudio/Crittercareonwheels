import { useState, useEffect } from "react";

// TODO: Change this password before deploying!
const ADMIN_PASSWORD = "critter2024";

const STATUS_COLORS = {
  new:       "bg-blue-100 text-blue-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-gray-100 text-gray-600",
  cancelled: "bg-red-100 text-red-600",
};

const STATUS_OPTIONS = ["new", "confirmed", "completed", "cancelled"];

function MockRequests() {
  // Demo data — replaced by real Supabase query when configured
  return [
    { id: "1", name: "Jane Smith",    phone: "(219) 555-0101", email: "jane@example.com", town: "La Porte",     pets: "Biscuit — golden retriever",   services: ["Nail trim", "Ear cleaning"],       preferred_date: "2026-10-05", preferred_time: "Morning",   notes: "Anxious around strangers",     status: "new",       created_at: "2026-09-28T10:00:00Z" },
    { id: "2", name: "Mark Johnson",  phone: "(219) 555-0102", email: "",                town: "Valparaiso",   pets: "Luna — tabby cat",              services: ["Anal gland expression"],           preferred_date: "2026-10-06", preferred_time: "Afternoon", notes: "",                             status: "confirmed", created_at: "2026-09-27T14:30:00Z" },
    { id: "3", name: "Sarah K.",      phone: "(219) 555-0103", email: "sarah@email.com", town: "Michigan City", pets: "Pepper — miniature schnauzer",  services: ["Nail trim", "Dog walk"],          preferred_date: "2026-10-07", preferred_time: "Midday",    notes: "Gate code: 4321",              status: "new",       created_at: "2026-09-26T09:15:00Z" },
  ];
}

export default function AdminPage() {
  const [authed, setAuthed]   = useState(false);
  const [pass, setPass]       = useState("");
  const [error, setError]     = useState("");
  const [requests, setRequests] = useState([]);
  const [statuses, setStatuses] = useState({});

  const login = (e) => {
    e.preventDefault();
    if (pass === ADMIN_PASSWORD) {
      setAuthed(true);
      setRequests(MockRequests());
    } else {
      setError("Incorrect password.");
    }
  };

  const changeStatus = (id, newStatus) => {
    setStatuses((prev) => ({ ...prev, [id]: newStatus }));
    // TODO: Update Supabase row:
    // supabase.from("appointment_requests").update({ status: newStatus }).eq("id", id);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <form onSubmit={login} className="bg-white rounded-3xl shadow-card p-10 w-full max-w-sm">
          <div className="text-4xl text-center mb-4" aria-hidden="true">🔒</div>
          <h1 className="font-heading font-bold text-2xl text-center text-gray-900 mb-6">Admin Login</h1>
          <label htmlFor="admin-pass" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <input
            id="admin-pass"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter password"
          />
          {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
          <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-full transition-colors">
            Log In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden="true">🐾</span>
            <div>
              <h1 className="font-heading font-bold text-2xl text-gray-900">Appointment Requests</h1>
              <p className="text-sm text-gray-500">Newest first · {requests.length} total</p>
            </div>
          </div>
          <a href="/" className="text-sm text-indigo-500 hover:text-indigo-600 font-semibold">← Back to site</a>
        </div>

        <div className="space-y-4">
          {requests.map((req) => {
            const status = statuses[req.id] || req.status;
            return (
              <div key={req.id} className="bg-white rounded-2xl shadow-card p-6 border border-gray-50">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-bold text-gray-900 text-lg">{req.name}</h2>
                    <div className="text-sm text-gray-500 mt-0.5">
                      📞 {req.phone}
                      {req.email && <span> · ✉️ {req.email}</span>}
                      <span> · 📍 {req.town}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${STATUS_COLORS[status]}`}>
                      {status}
                    </span>
                    <select
                      value={status}
                      onChange={(e) => changeStatus(req.id, e.target.value)}
                      className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      aria-label={`Change status for ${req.name}`}
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Pet(s)</div>
                    <div className="text-gray-700">{req.pets}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Services</div>
                    <div className="flex flex-wrap gap-1">
                      {req.services.map((s) => (
                        <span key={s} className="bg-indigo-50 text-indigo-600 text-xs px-2 py-0.5 rounded-full font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Preferred Time</div>
                    <div className="text-gray-700">{req.preferred_date} · {req.preferred_time}</div>
                  </div>
                </div>

                {req.notes && (
                  <div className="mt-4 text-sm bg-gray-50 rounded-xl px-4 py-3 text-gray-600">
                    <span className="font-semibold text-gray-700">Notes: </span>{req.notes}
                  </div>
                )}

                <div className="mt-3 text-xs text-gray-400">
                  Submitted: {new Date(req.created_at).toLocaleString()}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-xs text-center text-gray-400 italic">
          Demo data shown. Connect Supabase in src/config.js and uncomment the query in this file to load real submissions.
        </p>
      </div>
    </div>
  );
}
