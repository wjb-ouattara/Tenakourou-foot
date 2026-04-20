// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { ASSETS, MATCHES, PLAYERS, FORMATION_STEPS, NEWS_ITEMS } from "../data/clubData";
import { SectionLabel } from "../components/ui";
import { useScrollReveal } from "../hooks";



function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const images = Array.isArray(ASSETS.heroBg) ? ASSETS.heroBg : [ASSETS.heroBg];

  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentBg((prev) => (prev + 1) % images.length);
  }, 5000);
  return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background photo */}
      {images.map((img, i) => (
      <div
        key={img}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img})`,
          opacity:    i === currentBg ? 1 : 0,
          transition: "opacity 1.2s ease-in-out",
        }}
      />
      ))}
      {/* Indicateurs de slide */}
        <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentBg(i)}
              className="transition-all duration-300"
              style={{
                width:        i === currentBg ? 28 : 8,
                height:       8,
                borderRadius: 99,
                background:   i === currentBg ? "var(--gold)" : "rgba(255,255,255,.4)",
                border:       "none",
                cursor:       "pointer",
              }}
            />
          ))}
        </div>
      <div className="hero-overlay" />

      {/* Ghost text décoration */}
      <div className="absolute inset-0 flex items-start justify-end pt-20 pr-4 pointer-events-none select-none overflow-hidden">
        <span
          className="font-display leading-none"
          style={{
            fontSize:      "clamp(160px,30vw,420px)",
            opacity:       0.1,
            color:         "white",
            letterSpacing: "0.05em",
            whiteSpace:    "nowrap",
          }}
        >
          TKR
        </span>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-40 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6 reveal"
            data-delay="0"
            style={{
              background:     "rgba(255,255,255,.12)",
              backdropFilter: "blur(10px)",
              border:         "1px solid rgba(255,255,255,.24)",
              fontSize:       12,
              fontWeight:     700,
              color:          "white",
              letterSpacing:  ".1em",
              textTransform:  "uppercase",
            }}
          >
            <span className="live-dot" />
            Bobo-Dioulasso · Burkina Faso 🇧🇫
          </div>

          {/* Titre */}
          <h1
            className="font-display text-white mb-4 reveal"
            data-delay="80"
            style={{
              fontSize:    "clamp(52px,8.5vw,110px)",
              lineHeight:  0.9,
            }}
          >
            EXCELLENCE
            <br />
            <span style={{ color: "var(--gold)" }}>FORMATION</span>
            <br />
            <span style={{ fontSize: "55%", opacity: 0.82 }}>
              PASSION FOOTBALL
            </span>
          </h1>

          {/* Sous-titre */}
          <p
            className="font-normal mb-9 max-w-xl reveal"
            data-delay="160"
            style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,.73)" }}
          >
            Des programmes de formation de qualité, encadrés par des
            professionnels passionnés, pour développer vos compétences et
            atteindre vos objectifs sur le terrain.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 reveal" data-delay="240">
            <Link
              to="/formation"
              className="btn-primary"
              style={{
                background: "var(--gold)",
                color:      "var(--ink)",
                fontWeight: 800,
              }}
            >
              Rejoindre l'académie →
            </Link>
            <Link
              to="/joueurs"
              className="btn-primary"
              style={{
                background:     "rgba(255,255,255,.14)",
                backdropFilter: "blur(10px)",
                border:         "1.5px solid rgba(255,255,255,.25)",
              }}
            >
              Découvrir l'équipe
            </Link>
          </div>
        </div>
      </div>

      {/* Diagonal cut */}
      <div className="hero-diagonal" />
    </section>
  );
}

/* ═══ MATCHS ═════════════════════════════════ */
const STATUS_CONFIG = {
  live: { barBg: "#E53E3E", barColor: "white",        label: "🔴 EN DIRECT" },
  done: { barBg: "#E8F7EE", barColor: "var(--g3)",    label: "✓ TERMINÉ"    },
  soon: { barBg: "#FEF9E6", barColor: "var(--goldd)", label: "⏰ À VENIR"    },
};

function MatchCard({ match }) {
  const s = STATUS_CONFIG[match.status];
  const isUs = (t) => t === "SFC Tenakourou";

  return (
    <div className="match-card">
      {/* Status bar */}
      <div
        className="px-4 py-2.5 flex justify-between items-center text-xs font-bold tracking-widest uppercase"
        style={{ background: s.barBg, color: s.barColor }}
      >
        <span>{s.label}</span>
        <span className="font-medium opacity-75 text-[10px]">{match.competition}</span>
      </div>

      <div className="p-5">
        <p className="text-center text-xs font-semibold mb-4" style={{ color: "var(--mut2)" }}>
          {match.date} · {match.time}
        </p>

        {/* Teams + Score */}
        <div className="flex items-center justify-between gap-2 mb-4">
          {/* Home */}
          <div className="flex-1 text-center">
            <div
              className="w-14 h-14 rounded-full mx-auto mb-2 overflow-hidden border-2"
              style={{
                borderColor: isUs(match.home) ? "var(--g)" : "var(--bord)",
                background:  isUs(match.home) ? "var(--gs)" : "#f5f9f6",
              }}
            >
              {isUs(match.home) ? (
                <img src={ASSETS.logo} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="flex items-center justify-center h-full text-2xl">🏟️</span>
              )}
            </div>
            <p className="font-bold text-xs leading-tight" style={{ color: "var(--ink)" }}>
              {match.home}
            </p>
          </div>

          {/* Score */}
          <div className="flex-shrink-0 text-center px-1">
            {match.homeScore !== null ? (
              <div className="font-display leading-none" style={{ fontSize: 46, color: "var(--g)" }}>
                {match.homeScore}
                <span style={{ color: "var(--mut2)", margin: "0 3px", fontSize: 30 }}>–</span>
                {match.awayScore}
              </div>
            ) : (
              <div
                className="px-5 py-2.5 rounded-xl font-display text-xl"
                style={{ background: "var(--gs)", color: "var(--g)" }}
              >
                VS
              </div>
            )}
          </div>

          {/* Away */}
          <div className="flex-1 text-center">
            <div
              className="w-14 h-14 rounded-full mx-auto mb-2 overflow-hidden border-2"
              style={{
                borderColor: isUs(match.away) ? "var(--g)" : "var(--bord)",
                background:  isUs(match.away) ? "var(--gs)" : "#f5f9f6",
              }}
            >
              {isUs(match.away) ? (
                <img src={ASSETS.logo} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="flex items-center justify-center h-full text-2xl">🏟️</span>
              )}
            </div>
            <p className="font-bold text-xs leading-tight" style={{ color: "var(--ink)" }}>
              {match.away}
            </p>
          </div>
        </div>

        {/* CTA */}
        {match.status === "soon" && (
          <button className="btn-primary w-full justify-center py-3 text-sm">
            Acheter des billets
          </button>
        )}
        {match.status === "live" && (
          <button
            className="btn-primary w-full justify-center py-3 text-sm gap-2"
            style={{ background: "var(--red)" }}
          >
            <span className="live-dot" />
            Suivre en direct
          </button>
        )}
        {match.status === "done" && (
          <button className="w-full py-3 text-sm font-bold text-green-500 hover:text-green-700 transition-colors">
            Voir le résumé →
          </button>
        )}
      </div>
    </div>
  );
}

function MatchsSection() {
  return (
    <section className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div className="reveal">
            <SectionLabel>Programme</SectionLabel>
            <h2
              className="font-display leading-none mt-2"
              style={{ fontSize: "clamp(38px,5vw,64px)", color: "var(--ink)" }}
            >
              CALENDRIER DES MATCHS
            </h2>
          </div>
          <Link to="/" className="font-bold text-sm text-green-500 hover:text-green-700 reveal">
            Tous les matchs →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {MATCHES.map((m, i) => (
            <div key={i} className="reveal" data-delay={i * 80}>
              <MatchCard match={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ JOUEURS APERÇU ════════════════════════ */
function JoueursApercu() {
  const featured = PLAYERS.filter((p) => p.team === "A").slice(0, 6);
  return (
    <section className="py-24 px-5 sm:px-8" style={{ background: "var(--surf)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div className="reveal">
            <SectionLabel>Équipe A</SectionLabel>
            <h2
              className="font-display leading-none mt-2"
              style={{ fontSize: "clamp(38px,5vw,64px)", color: "var(--ink)" }}
            >
              NOS JOUEURS DU MOIS
            </h2>
          </div>
          <Link
            to="/joueurs"
            className="font-bold text-sm text-green-500 hover:text-green-700 reveal"
          >
            Voir tout l'effectif →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {featured.map((p, i) => (
            <div
              key={p.id}
              className="player-card-wrapper reveal"
              data-delay={i * 80}
            >
              <div
                className="player-card-inner"
                style={{ background: p.cardGradient, minHeight: 360 }}
              >
                <div className="player-card-glare" />
                {/* Number */}
                <div className="absolute top-3 right-4 z-10">
                  <span
                    className="font-display text-white opacity-30"
                    style={{ fontSize: 48 }}
                  >
                    #{p.number}
                  </span>
                </div>
                {/* Photo */}
                <div className="overflow-hidden" style={{ height: 240 }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500"
                    style={{ height: 240 }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 50%)",
                    }}
                  />
                </div>
                {/* Info */}
                <div className="p-5">
                  <div
                    className="font-display text-white leading-tight"
                    style={{ fontSize: 22 }}
                  >
                    {p.name.toUpperCase()}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{
                        background: "rgba(255,255,255,.15)",
                        color:      "rgba(255,255,255,.9)",
                        border:     "1px solid rgba(255,255,255,.22)",
                      }}
                    >
                      {p.position}
                    </span>
                    <div
                      className="flex gap-3 text-xs font-semibold"
                      style={{ color: "rgba(255,255,255,.65)" }}
                    >
                      <span>⚽ {p.goals}</span>
                      <span>🎯 {p.assists}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ FORMATION APERÇU ═══════════════════════ */
function FormationApercu() {
  return (
    <section className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div className="reveal from-left">
            <SectionLabel>Notre Académie</SectionLabel>
            <h2
              className="font-display leading-none mt-2 mb-5"
              style={{ fontSize: "clamp(38px,5vw,64px)", color: "var(--ink)" }}
            >
              PROCESSUS DE
              <br />FORMATION
            </h2>
            <p
              className="font-normal mb-6"
              style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted)" }}
            >
              Que ce soit sur le terrain, dans les salles de classe ou dans la
              communauté, nous nous engageons à former une nouvelle génération
              de footballeurs burkinabés prêts à relever les défis.
            </p>
            <Link to="/formation" className="btn-primary">
              Rejoindre l'académie →
            </Link>
          </div>

          {/* Steps */}
         <div className="space-y-4 reveal from-right">
            {FORMATION_STEPS.map((s, i) => (
            <div
            key={i}
            className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: "white", border: "1.5px solid var(--bord)" }}
            data-delay={i * 80}
            >
            {/* Numéro en cercle coloré */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-display text-xl text-white"
                style={{ background: "var(--g)" }}
              >
                {s.number}
              </div>

              {/* Texte */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{s.icon}</span>
                  <h3 className="font-bold text-sm" style={{ color: "var(--ink)" }}>
                    {s.title}
                  </h3>
                </div>
                <p className="text-xs font-normal leading-relaxed" style={{ color: "var(--muted)" }}>
                    {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ NEWS APERÇU ════════════════════════════ */
function NewsApercu() {
  const items = NEWS_ITEMS.slice(0, 3);
  return (
    <section className="py-24 px-5 sm:px-8" style={{ background: "var(--surf)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div className="reveal">
            <SectionLabel>Blog</SectionLabel>
            <h2
              className="font-display leading-none mt-2"
              style={{ fontSize: "clamp(38px,5vw,64px)", color: "var(--ink)" }}
            >
              DERNIÈRES NOUVELLES
            </h2>
          </div>
          <Link
            to="/actualite"
            className="font-bold text-sm text-green-500 hover:text-green-700 reveal"
          >
            Tous les articles →
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((n, i) => (
            <div
              key={n.id}
              className="news-card reveal"
              data-delay={i * 80}
            >
              <div className="news-card-img">
                <img src={n.image} alt={n.title} className="h-52 w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: "var(--gs)", color: "var(--g3)" }}
                  >
                    {n.category}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "var(--mut2)" }}>
                    {n.date}
                  </span>
                </div>
                <h3
                  className="font-bold leading-snug mb-2"
                  style={{ fontSize: 15, color: "var(--ink)" }}
                >
                  {n.title}
                </h3>
                <p
                  className="text-sm leading-relaxed line-clamp-2"
                  style={{ color: "var(--muted)" }}
                >
                  {n.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ HOME PAGE ═════════════════════════════ */
export default function Home() {
  useScrollReveal();
  return (
    <>
      <Hero />
      <MatchsSection />
      <JoueursApercu />
      <FormationApercu />
      <NewsApercu />
    </>
  );
}
