// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavSolid } from "../hooks";
import { ASSETS, NAV_LINKS } from "../data/clubData";

/* ── Logo (réutilisable) ── */
export function Logo({ white = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 no-underline">
      <div
        className="relative w-24 h-18 mt-2 rounded-2xl overflow-hidden flex-shrink-0"
        style={{
          borderColor: white ? "rgba(255,255,255,.3)" : "#B5E4C8",
          boxShadow:   white ? "none" : "0 4px 14px rgba(11,143,58,.3)",
        }}
      >

        <img
          src={ASSETS.logo}
          alt="SFC Tenakourou"
          className="w-full h-full object-cover"
        />
        
      </div>
      <div>
        <div
          className="font-display text-xl leading-none tracking-widest mt-1"
          style={{ color: white ? "white" : "var(--g)" }}
        >
          SFC TENAKOUROU
        </div>
        <div
          className="text-xs font-semibold tracking-widest mt-0.5"
          style={{
            color:         white ? "rgba(255,255,255,.55)" : "var(--muted)",
            letterSpacing: ".15em",
          }}
        >
          FOOTBALL CLUB
        </div>
      </div>
    </Link>
  );
}

/* ── Navbar principale ── */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useNavSolid(70);

  const linkClass =
    "text-sm font-semibold transition-colors duration-200 hover:text-green-500";
  const activeCls = "text-green-500 font-bold";

  return (
    <nav id="main-navbar">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Desktop row */}
        <div className="flex items-center justify-between" style={{ height: 72 }}>
          <Logo white={!open} />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeCls : ""}`.trim()
                }
                style={({ isActive }) => ({
                  color: isActive ? "var(--g)" : "var(--muted)",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-outline py-2.5 px-5 text-sm">
              Contact
            </Link>
            <Link
              to="/formation"
              className="btn-primary py-2.5 px-5 text-sm"
            >
              Rejoindre le club
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all"
            style={{
              background:  open ? "var(--g)" : "rgba(255,255,255,.15)",
              color:       "white",
              border:      "1.5px solid rgba(255,255,255,.2)",
            }}
            aria-label="Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6"  x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu lg:hidden ${open ? "open" : ""}`}>
          <div className="pb-5 pt-1 flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                className="px-4 py-3.5 rounded-xl font-semibold text-sm"
                style={({ isActive }) => ({
                  color:      "white",
                  background: isActive
                    ? "rgba(255,255,255,.18)"
                    : "rgba(255,255,255,.08)",
                  fontWeight: isActive ? 700 : 500,
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-2 mt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-3 rounded-xl font-bold text-sm"
                style={{
                  border:      "2px solid rgba(255,255,255,.35)",
                  color:       "white",
                }}
              >
                Contact
              </Link>
              <Link
                to="/formation"
                onClick={() => setOpen(false)}
                className="flex-1 text-center btn-primary text-sm py-3 justify-center"
              >
                Rejoindre
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
