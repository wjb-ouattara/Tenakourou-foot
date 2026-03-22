// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { ASSETS, CLUB, NAV_LINKS } from "../data/clubData";

const FOOTER_COLS = [
  {
    title: "Navigation",
    links: NAV_LINKS.map((n) => ({ label: n.label, to: n.path })),
  },
  {
    title: "Le Club",
    links: [
      { label: "Histoire",      to: "/apropos"   },
      { label: "Académie",      to: "/formation" },
      { label: "Recrutement",   to: "/formation" },
      { label: "Calendrier",    to: "/"          },
      { label: "Contact",       to: "/contact"   },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: CLUB.email,   to: `mailto:${CLUB.email}`,    external: true },
      { label: CLUB.phone,   to: `tel:${CLUB.phone}`,        external: true },
      { label: CLUB.city,    to: "#" },
      { label: CLUB.country + " 🇧🇫", to: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "F", title: "Facebook"   },
  { label: "I", title: "Instagram"  },
  { label: "Y", title: "YouTube"    },
  { label: "W", title: "WhatsApp"   },
];

export default function Footer() {
  return (
    <footer className="footer-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 relative z-10">
        {/* Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,.09)" }}
        >
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-2xl overflow-hidden border-2 flex-shrink-0"
                style={{ borderColor: "rgba(255,255,255,.2)" }}
              >
                <img
                  src={ASSETS.logo}
                  alt={CLUB.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-display text-lg text-white leading-none">
                  {CLUB.name.toUpperCase()}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,.45)" }}>
                  FOOTBALL CLUB
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,.42)" }}
            >
              Excellence · Formation · Passion.
              <br />
              Club de football de {CLUB.city},{" "}
              {CLUB.country} 🇧🇫
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-2.5 mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  title={s.title}
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,.07)",
                    color:      "rgba(255,255,255,.6)",
                    border:     "1px solid rgba(255,255,255,.08)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--g)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,.07)")
                  }
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div
                className="font-display text-base tracking-widest mb-5 uppercase"
                style={{ color: "var(--gold)" }}
              >
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: "rgba(255,255,255,.45)" }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: "rgba(255,255,255,.45)" }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <p className="text-sm" style={{ color: "rgba(255,255,255,.3)" }}>
            © {new Date().getFullYear()} {CLUB.name} · Tous droits réservés ·{" "}
            {CLUB.city}, {CLUB.country}
          </p>
          <div className="flex gap-5">
            {["Mentions légales", "Confidentialité", "CGU"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,.3)" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
