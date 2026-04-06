// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ASSETS, NAV_LINKS } from "../data/clubData";

/* ══ LOGO ════════════════════════════════════════════════════
   - Fond blanc forcé pour logo sans arrière-plan
   - Taille 72×72 bien visible
   - Halo vert au hover
════════════════════════════════════════════════════════════ */
export function Logo() {
  return (
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}
    >
      {/* Image logo */}
      <div
        style={{
          width: 80,
          height: 72,
          borderRadius: 10,
          overflow: "hidden",
          flexShrink: 0,
          /* Fond blanc OBLIGATOIRE pour logo transparent */
          /* background: "white", */
          border: "3px solid rgba(255,255,255,.6)",
          boxShadow: "0 6px 30px rgba(0,0,0,.5), 0 2px 8px rgba(0,0,0,.4)",
          position: "relative",
        }}
      >
        <img
          src={ASSETS.logo}
          alt="SFC Tenakourou"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      {/* Texte */}
      <div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 22,
            color: "white",
            letterSpacing: ".1em",
            lineHeight: 1,
            textShadow: "0 2px 16px rgba(0,0,0,.8), 0 1px 4px rgba(0,0,0,.9)",
          }}
        >
          SFC TENAKOUROU
        </div>
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            color: "rgba(255,255,255,.6)",
            letterSpacing: ".22em",
            textTransform: "uppercase",
            marginTop: 4,
            textShadow: "0 1px 4px rgba(0,0,0,.7)",
          }}
        >
          Football Club · 🇧🇫
        </div>
      </div>
    </Link>
  );
}

/* ══ NAVBAR ══════════════════════════════════════════════════ */
export default function Navbar() {
  const [open,  setOpen]  = useState(false);
  const [solid, setSolid] = useState(false);

  /* Écoute du scroll */
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check initial
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Ferme le menu quand on passe en desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: "background .3s, box-shadow .3s",
        /* Fond selon état scroll */
        background: solid
          ? "rgba(255,255,255,.97)"
          : "linear-gradient(to bottom, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: solid ? "0 1px 0 rgba(11,143,58,.1), 0 4px 28px rgba(0,0,0,.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* ── BARRE PRINCIPALE ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 84,
          }}
        >
          <Logo />

          {/* Liens desktop */}
          <div
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: 28 }}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                style={({ isActive }) => ({
                  fontSize: 14,
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: "none",
                  color: solid
                    ? (isActive ? "var(--g)" : "#496050")
                    : (isActive ? "white"    : "rgba(255,255,255,.72)"),
                  position: "relative",
                  paddingBottom: 4,
                  transition: "color .2s",
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* Underline animée */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0, left: 0, right: 0,
                        height: 2,
                        borderRadius: 99,
                        background: solid ? "var(--g)" : "var(--gold)",
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform .3s",
                      }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTAs desktop */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: 10 }}>
            <Link
              to="/contact"
              style={{
                padding: "10px 20px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                border: solid
                  ? "2px solid var(--g)"
                  : "2px solid rgba(255,255,255,.45)",
                color: solid ? "var(--g)" : "white",
                background: "transparent",
                transition: "all .2s",
              }}
            >
              Contact
            </Link>
            <Link
              to="/formation"
              style={{
                padding: "10px 20px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                background: "var(--g)",
                color: "white",
                boxShadow: "0 4px 16px rgba(11,143,58,.45)",
              }}
            >
              Rejoindre →
            </Link>
          </div>

          {/* ══ BOUTON BURGER ══
              RÈGLE : toujours visible, toujours vert.
              - Ouvert → vert
              - Fermé + solid (header blanc) → vert (sinon invisible sur blanc)
              - Fermé + transparent → fond sombre
          ══════════════════════════════════════════ */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden"
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "2.5px solid rgba(255,255,255,.45)",
              /* TOUJOURS vert quand solid ou ouvert pour rester visible */
              background: (open || solid) ? "var(--g)" : "rgba(0,0,0,.55)",
              boxShadow: "0 4px 16px rgba(0,0,0,.4)",
              backdropFilter: "blur(8px)",
              transition: "background .25s",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="5"  y1="5"  x2="19" y2="19" />
                  <line x1="19" y1="5"  x2="5"  y2="19" />
                </>
              ) : (
                <>
                  <line x1="3"  y1="7"  x2="21" y2="7"  />
                  <line x1="3"  y1="12" x2="21" y2="12" />
                  <line x1="3"  y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* ══ MENU MOBILE ══════════════════════════════════════
            RÈGLE :
            - Fond quasi-noir opaque → lisible sur TOUS les fonds
              (transparent hero au top, blanc après scroll, images…)
            - Jamais transparent, jamais blanc
            - Toujours séparé visuellement du contenu derrière
        ══════════════════════════════════════════════════════ */}
        <div
          className="lg:hidden"
          style={{
            maxHeight: open ? 640 : 0,
            overflow: "hidden",
            transition: "max-height .42s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {/* Fond sombre forcé */}
          <div
            style={{
              background: "rgba(3,10,5,.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: "0 0 24px 24px",
              border: "1px solid rgba(255,255,255,.09)",
              borderTop: "none",
              /* Déborde pour toucher les bords de l'écran */
              maxWidth: 300,
              margin: "0 auto",
              marginTop: 10,
              borderRadius: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            {/* Liens */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setOpen(false)}
                  style={({ isActive }) => ({
                    display: "block",
                    padding: "14px 16px",
                    borderRadius: 14,
                    fontWeight: isActive ? 700 : 500,
                    fontSize: 15,
                    textDecoration: "none",
                    color: isActive ? "white" : "rgba(255,255,255,.55)",
                    background: isActive
                      ? "rgba(11,143,58,.28)"
                      : "rgba(255,255,255,.04)",
                    borderLeft: isActive
                      ? "3px solid var(--g)"
                      : "3px solid transparent",
                    transition: "all .2s",
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Séparateur */}
            <div
              style={{
                height: 1,
                background: "rgba(255,255,255,.08)",
                marginBottom: 14,
              }}
            />

            {/* CTAs */}
            <div style={{ display: "flex", gap: 8 }}>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "14px 0",
                  borderRadius: 14,
                  fontWeight: 700,
                  fontSize: 14,
                  color: "white",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,.22)",
                }}
              >
                Contact
              </Link>
              <Link
                to="/formation"
                onClick={() => setOpen(false)}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "14px 0",
                  borderRadius: 14,
                  fontWeight: 700,
                  fontSize: 14,
                  color: "white",
                  textDecoration: "none",
                  background: "var(--g)",
                  boxShadow: "0 4px 16px rgba(11,143,58,.45)",
                }}
              >
                🦁 Rejoindre
              </Link>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
