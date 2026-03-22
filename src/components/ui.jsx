// src/components/ScrollProgressBar.jsx
export function ScrollProgressBar() {
  return <div id="scroll-progress" />;
}

// ─────────────────────────────────────────────
// src/components/LiveTicker.jsx
import { useState } from "react";

export function LiveTicker() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 text-white rounded-[18px] cursor-pointer"
      style={{
        background:  "var(--g)",
        padding:     "12px 20px",
        minWidth:    200,
        boxShadow:   "0 10px 40px rgba(11,143,58,.45)",
        transition:  "transform .3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {/* Row 1 */}
      <div className="flex items-center justify-between mb-1.5">
        <div
          className="flex items-center gap-2 text-xs font-bold tracking-widest"
          style={{ opacity: 0.7 }}
        >
          <span className="live-dot" style={{ background: "white" }} />
          EN DIRECT
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setVisible(false); }}
          className="text-xl leading-none ml-3 transition-opacity"
          style={{ opacity: 0.4 }}
          aria-label="Fermer"
        >
          ×
        </button>
      </div>

      {/* Score */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold" style={{ opacity: 0.75 }}>
          SFC TKR
        </span>
        <span
          className="font-display text-3xl tracking-widest"
          style={{ color: "var(--gold)" }}
        >
          0 – 0
        </span>
        <span className="text-xs font-bold">RC Bobo</span>
      </div>
      <p
        className="text-center mt-1"
        style={{ fontSize: 10, opacity: 0.35 }}
      >
        Cliquer pour fermer
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// src/components/PageHeader.jsx
// En-tête commun pour toutes les pages intérieures

import { ASSETS } from "../data/clubData";

export function PageHeader({ title, breadcrumb = [], image }) {
  const bg = image || ASSETS.pageHeader;
  return (
    <div className="page-header pt-20" style={{ minHeight: 280 }}>
      <div
        className="page-header-bg"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="page-header-overlay" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-10">
        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 text-xs font-semibold mb-3"
          style={{ color: "rgba(255,255,255,.55)", letterSpacing: ".08em" }}
        >
          <a href="/" className="hover:text-white transition-colors">
            Accueil
          </a>
          {breadcrumb.map((b) => (
            <span key={b} className="flex items-center gap-2">
              <span>/</span>
              <span style={{ color: "rgba(255,255,255,.75)" }}>{b}</span>
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="font-display text-white leading-none"
          style={{ fontSize: "clamp(44px,6vw,80px)" }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// src/components/SectionLabel.jsx

export function SectionLabel({ children, center = false }) {
  return (
    <div
      className="section-label"
      style={{ justifyContent: center ? "center" : "flex-start" }}
    >
      {children}
    </div>
  );
}
