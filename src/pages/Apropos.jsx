// src/pages/Apropos.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useIntersection, useScrollReveal } from "../hooks";
import { TEAM_STATS, STANDINGS, ASSETS } from "../data/clubData";
import { SectionLabel } from "../components/ui";

/* ══ DONNÉES TIMELINE ══════════════════════════════════════ */
const TIMELINE = [
  { year: "1972", title: "Fondation du club", desc: "Création du SFC Tenakourou à Bobo-Dioulasso par un groupe de passionnés de football burkinabè.", icon: "🏛️" },
  { year: "1985", title: "Premier titre régional", desc: "Le club remporte son premier championnat régional, posant les bases d'une grande histoire.", icon: "🏆" },
  { year: "2005", title: "Construction de l'académie", desc: "Inauguration du centre de formation, permettant de détecter et développer les talents locaux.", icon: "🎓" },
  { year: "2018", title: "Accession nationale", desc: "Tenakourou FC monte en ligue nationale pour la première fois de son histoire.", icon: "📈" },
  { year: "2024", title: "Ère nouvelle", desc: "Rénovation complète du club, nouveau staff technique, nouvelles ambitions continentales.", icon: "🦁" },
];

const VALEURS = [
  { icon: "🏆", title: "Excellence",       desc: "Toujours viser plus haut, sur le terrain comme en dehors.",    color: "var(--gold)",  bg: "rgba(240,180,41,.08)"  },
  { icon: "🤝", title: "Esprit d'équipe",  desc: "L'union fait la force. Ensemble, rien n'est impossible.",      color: "var(--g)",     bg: "rgba(11,143,58,.08)"   },
  { icon: "❤️", title: "Passion",          desc: "Le football est une vocation, pas seulement un sport.",        color: "#E53E3E",       bg: "rgba(229,62,62,.08)"   },
  { icon: "🌍", title: "Fierté locale",    desc: "Représenter Bobo-Dioulasso avec honneur et dignité.",          color: "#4A9EFF",       bg: "rgba(74,158,255,.08)"  },
  { icon: "📈", title: "Progression",      desc: "Chaque jour, devenir meilleur. La stagnation n'est pas une option.", color: "#B060FF", bg: "rgba(176,96,255,.08)" },
  { icon: "🛡️", title: "Intégrité",        desc: "Jouer avec respect, gagner avec humilité, perdre avec dignité.", color: "var(--gold)", bg: "rgba(240,180,41,.08)"  },
];

const FORM_STYLES = {
  V: { bg: "rgba(11,143,58,.2)",    color: "#15C44F", label: "Victoire" },
  N: { bg: "rgba(240,180,41,.15)",  color: "#F0B429", label: "Nul"     },
  D: { bg: "rgba(229,62,62,.15)",   color: "#FF6B6B", label: "Défaite" },
};

/* ══ RING SVG ═══════════════════════════════════════════════ */
function Ring({ value, max, color, label, triggered }) {
  const r = 44, circ = 2 * Math.PI * r;
  const offset = triggered ? circ * (1 - value / max) : circ;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: 110, height: 110 }}>
        <svg width="110" height="110" viewBox="0 0 110 110" style={{ transform: "rotate(-90deg)", position: "absolute" }}>
          <circle cx="55" cy="55" r={r} fill="none" strokeWidth="6" stroke="rgba(255,255,255,.08)"/>
          <circle cx="55" cy="55" r={r} fill="none" strokeWidth="6"
            stroke={color} strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1)", filter: `drop-shadow(0 0 6px ${color}80)` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display leading-none" style={{ fontSize: 28, color: "white" }}>{value}</span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,.35)" }}>/{max}</span>
        </div>
      </div>
      <p className="text-xs font-bold text-center tracking-widest uppercase" style={{ color: "rgba(255,255,255,.45)", letterSpacing: ".12em" }}>{label}</p>
    </div>
  );
}

/* ══ HERO CINÉMATIQUE ═══════════════════════════════════════ */
function HeroSection() {
  return (
    <div className="relative overflow-hidden" style={{ minHeight: 520, background: "linear-gradient(135deg,#040C06 0%,#071A0B 40%,#0B3318 100%)" }}>
      {/* Grille */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }}/>
      {/* Orbes */}
      <div className="absolute pointer-events-none" style={{ width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle,rgba(11,143,58,.12) 0%,transparent 70%)", top:-200, right:-100 }}/>
      <div className="absolute pointer-events-none" style={{ width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(240,180,41,.06) 0%,transparent 70%)", bottom:-100, left:-50 }}/>

      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-white leading-none" style={{ fontSize:"clamp(90px,18vw,240px)", opacity:.03, marginLeft:"-1%", letterSpacing:"-.02em" }}>
          STORY
        </span>
      </div>

      {/* Photo club en fond droite */}
      <div className="absolute right-0 top-0 bottom-0 w-2/5 hidden lg:block pointer-events-none overflow-hidden">
        <img
          src="https://sfctenakourou.com/wp-content/uploads/2024/04/DSC_0409.jpg"
          alt="SFC Tenakourou"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(.35) saturate(1.2)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #040C06 0%, transparent 60%)" }}/>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-5 h-0.5 rounded" style={{ background: "var(--gold)", display: "inline-block" }}/>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--gold)", letterSpacing: ".18em" }}>À PROPOS DU CLUB</span>
          </div>
          <h1 className="font-display text-white leading-none mb-6" style={{ fontSize: "clamp(52px,7vw,96px)" }}>
            NOTRE<br/>
            <span style={{ color: "var(--g)" }}>HISTOIRE</span><br/>
            <span style={{ fontSize: "50%", opacity: .6, letterSpacing: ".08em" }}>DEPUIS 1972</span>
          </h1>
          <p className="font-normal mb-8 max-w-xl" style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,.55)" }}>
            Fondé à Bobo-Dioulasso, le SFC Tenakourou est bien plus qu'un club de football. C'est une institution, une famille, et l'ambassadeur du sport burkinabè.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/formation" className="btn-primary" style={{ background: "var(--g)", boxShadow: "0 8px 24px rgba(11,143,58,.4)" }}>
              Rejoindre l'académie →
            </Link>
            <Link to="/contact" className="btn-primary" style={{ background: "rgba(255,255,255,.08)", backdropFilter: "blur(10px)", border: "1.5px solid rgba(255,255,255,.15)" }}>
              Nous contacter
            </Link>
          </div>

          {/* Stats rapides */}
          <div className="flex gap-10 mt-12">
            {[{n:"50+",l:"Ans d'existence"},{n:"200+",l:"Joueurs formés"},{n:"12",l:"Titres régionaux"}].map(s=>(
              <div key={s.l}>
                <div className="font-display leading-none mb-0.5" style={{ fontSize: 40, color: "var(--gold)" }}>{s.n}</div>
                <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,.35)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══ TIMELINE ═══════════════════════════════════════════════ */
function TimelineSection() {
  const [active, setActive] = useState(4);

  return (
    <section className="py-24 px-5 sm:px-8" style={{ background: "#071A0B" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <SectionLabel center>Notre parcours</SectionLabel>
          <h2 className="font-display text-white leading-none mt-3" style={{ fontSize: "clamp(40px,5.5vw,72px)" }}>
            UNE HISTOIRE<br/>
            <span style={{ color: "var(--gold)" }}>QUI INSPIRE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Étapes cliquables gauche */}
          <div className="space-y-3">
            {TIMELINE.map((item, i) => (
              <div key={i} onClick={() => setActive(i)}
                className="flex items-center gap-5 p-5 rounded-2xl cursor-pointer reveal transition-all duration-300"
                data-delay={i * 70}
                style={{
                  background:  active === i ? "rgba(11,143,58,.15)"           : "rgba(255,255,255,.03)",
                  border:      active === i ? "1px solid rgba(11,143,58,.4)"  : "1px solid rgba(255,255,255,.06)",
                  transform:   active === i ? "translateX(8px)"               : "none",
                }}>
                {/* Année */}
                <div className="font-display flex-shrink-0 text-right" style={{
                  fontSize: active === i ? 28 : 22,
                  color: active === i ? "var(--gold)" : "rgba(255,255,255,.2)",
                  minWidth: 60, transition: "all .3s",
                }}>
                  {item.year}
                </div>
                {/* Séparateur vertical */}
                <div className="flex-shrink-0 w-0.5 self-stretch rounded-full" style={{ background: active === i ? "var(--g)" : "rgba(255,255,255,.08)" }}/>
                {/* Contenu */}
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: active === i ? "white" : "rgba(255,255,255,.55)" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs font-normal leading-relaxed mt-0.5"
                      style={{ color: "rgba(255,255,255,.3)", display: active === i ? "block" : "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div style={{ color: active === i ? "var(--gold)" : "rgba(255,255,255,.15)", fontSize: 20, transition: "color .3s", flexShrink: 0 }}>→</div>
              </div>
            ))}
          </div>

          {/* Panneau détail droite */}
          <div className="sticky top-28 reveal from-right">
            <div className="rounded-3xl p-8 relative overflow-hidden" style={{
              background: "linear-gradient(135deg,rgba(11,143,58,.12),rgba(11,143,58,.04))",
              border: "1.5px solid rgba(11,143,58,.25)",
              minHeight: 340,
            }}>
              {/* Orbe déco */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(11,143,58,.18) 0%,transparent 70%)", transform: "translate(30%,-30%)" }}/>
              {/* Année géante fond */}
              <div className="absolute bottom-2 right-4 font-display text-white pointer-events-none select-none" style={{ fontSize: 110, opacity: .05, lineHeight: 1 }}>
                {TIMELINE[active].year}
              </div>

              <div className="relative z-10">
                <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-black mb-5" style={{ background: "var(--g)", color: "white", letterSpacing: ".12em" }}>
                  {TIMELINE[active].year}
                </span>
                <div className="text-5xl mb-4">{TIMELINE[active].icon}</div>
                <h3 className="font-display text-white leading-tight mb-4" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                  {TIMELINE[active].title}
                </h3>
                <p className="font-normal mb-8" style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,.6)" }}>
                  {TIMELINE[active].desc}
                </p>
                {/* Dots */}
                <div className="flex gap-2">
                  {TIMELINE.map((_,i) => (
                    <button key={i} onClick={() => setActive(i)} style={{
                      width: i === active ? 28 : 8, height: 8, borderRadius: 99,
                      background: i === active ? "var(--gold)" : "rgba(255,255,255,.2)",
                      border: "none", cursor: "pointer", transition: "all .3s",
                    }}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ VALEURS ════════════════════════════════════════════════ */
function ValeursSection() {
  const [hov, setHov] = useState(null);

  return (
    <section className="py-24 px-5 sm:px-8" style={{ background: "#040C06" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-14">
          <div className="reveal">
            <SectionLabel>ADN du club</SectionLabel>
            <h2 className="font-display text-white leading-none mt-3" style={{ fontSize: "clamp(40px,5.5vw,70px)" }}>
              NOS<br/><span style={{ color: "var(--g)" }}>VALEURS</span>
            </h2>
          </div>
          <p className="text-sm font-normal max-w-xs reveal" style={{ color: "rgba(255,255,255,.35)", lineHeight: 1.8 }}>
            Ces principes guident chaque décision, chaque entraînement, chaque match disputé sous nos couleurs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALEURS.map((v, i) => (
            <div key={i}
              className="p-6 rounded-2xl cursor-default reveal transition-all duration-300"
              data-delay={i * 60}
              style={{
                background:  hov === i ? v.bg   : "rgba(255,255,255,.03)",
                border:      hov === i ? `1px solid ${v.color}40` : "1px solid rgba(255,255,255,.07)",
                transform:   hov === i ? "translateY(-6px) scale(1.01)" : "none",
                boxShadow:   hov === i ? `0 20px 48px rgba(0,0,0,.4), 0 0 0 1px ${v.color}20` : "none",
              }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              {/* Icône + couleur */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{v.icon}</div>
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: v.color, boxShadow: `0 0 8px ${v.color}` }}/>
              </div>
              <h3 className="font-display text-white mb-2" style={{ fontSize: 22, letterSpacing: ".02em" }}>{v.title}</h3>
              <p className="text-sm font-normal leading-relaxed" style={{ color: "rgba(255,255,255,.4)" }}>{v.desc}</p>
              {/* Ligne déco bas hover */}
              <div className="mt-5 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,.06)" }}>
                <div className="h-full rounded-full transition-all duration-500" style={{
                  width: hov === i ? "100%" : "0%",
                  background: v.color,
                }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ STATS & BILAN ══════════════════════════════════════════ */
function StatsSection() {
  const { ref, triggered } = useIntersection(0.2);

  const rings = [
    { value: TEAM_STATS.wins,        max: TEAM_STATS.played, color: "#15C44F", label: "Victoires"   },
    { value: TEAM_STATS.draws,       max: TEAM_STATS.played, color: "#F0B429", label: "Nuls"        },
    { value: TEAM_STATS.losses,      max: TEAM_STATS.played, color: "#FF6B6B", label: "Défaites"    },
    { value: TEAM_STATS.cleanSheets, max: TEAM_STATS.played, color: "#B060FF", label: "Clean sheets"},
  ];

  const bigStats = [
    { n: TEAM_STATS.played,      l: "Matchs joués",    accent: "var(--g)"   },
    { n: TEAM_STATS.goalsFor,    l: "Buts marqués",    accent: "var(--gold)" },
    { n: TEAM_STATS.cleanSheets, l: "Clean sheets",    accent: "var(--g)"   },
    { n: TEAM_STATS.points,      l: "Points en poche", accent: "var(--gold)" },
  ];

  return (
    <section className="py-24 px-5 sm:px-8" style={{ background: "#071A0B" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <SectionLabel center>Saison 2025–26</SectionLabel>
          <h2 className="font-display text-white leading-none mt-3" style={{ fontSize: "clamp(40px,5.5vw,72px)" }}>
            LE BILAN<br/><span style={{ color: "var(--g)" }}>EN CHIFFRES</span>
          </h2>
        </div>

        {/* Grands chiffres */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {bigStats.map((s, i) => (
            <div key={i} className="text-center py-8 px-4 rounded-2xl reveal scale-in" data-delay={i * 60}
              style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}>
              <div className="font-display leading-none mb-2" style={{ fontSize: 58, color: s.accent, filter: `drop-shadow(0 0 12px ${s.accent}50)` }}>
                {triggered ? s.n : 0}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,.35)", letterSpacing: ".14em" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Anneaux + forme */}
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Anneaux */}
          <div className="reveal from-left">
            <h3 className="font-display text-white mb-8" style={{ fontSize: 28 }}>RÉPARTITION DES RÉSULTATS</h3>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {rings.map((r, i) => <Ring key={i} {...r} triggered={triggered} />)}
            </div>

            {/* Barre attaque/défense */}
            <div className="p-5 rounded-2xl" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)" }}>
              <h4 className="font-display text-white mb-5" style={{ fontSize: 18 }}>ATTAQUE VS DÉFENSE</h4>
              {[["Buts", TEAM_STATS.goalsFor, TEAM_STATS.goalsAgainst],
                ["xG",  44, 16]].map(([l, a, d]) => {
                const tot = a + d;
                return (
                  <div key={l} className="mb-4">
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span style={{ color: "var(--g)" }}>{a} ⚔️</span>
                      <span style={{ color: "rgba(255,255,255,.35)", letterSpacing: ".1em" }}>{l}</span>
                      <span style={{ color: "rgba(255,255,255,.4)" }}>🛡️ {d}</span>
                    </div>
                    <div className="flex gap-1 h-2">
                      <div className="flex-1 rounded-l-full overflow-hidden" style={{ background: "rgba(255,255,255,.08)" }}>
                        <div className="h-full rounded-l-full" style={{ width:`${a/tot*100}%`, background:"var(--g)", marginLeft:"auto", transition:"width 1.4s" }}/>
                      </div>
                      <div className="flex-1 rounded-r-full overflow-hidden" style={{ background: "rgba(255,255,255,.08)" }}>
                        <div className="h-full rounded-r-full" style={{ width:`${d/tot*100}%`, background:"rgba(255,255,255,.25)", transition:"width 1.4s" }}/>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Forme + infos */}
          <div className="reveal from-right">
            <h3 className="font-display text-white mb-8" style={{ fontSize: 28 }}>FORME RÉCENTE</h3>
            <div className="grid grid-cols-5 gap-3 mb-8">
              {TEAM_STATS.recentForm.map((f, i) => (
                <div key={i} className="rounded-2xl p-4 text-center" style={{ background: FORM_STYLES[f].bg, border: `1px solid ${FORM_STYLES[f].color}30` }}>
                  <div className="font-display leading-none mb-1" style={{ fontSize: 32, color: FORM_STYLES[f].color }}>{f}</div>
                  <div className="text-xs font-bold" style={{ color: FORM_STYLES[f].color, opacity: .7, letterSpacing: ".08em" }}>{FORM_STYLES[f].label}</div>
                </div>
              ))}
            </div>

            {/* Infos club */}
            <div className="space-y-3">
              {[
                { icon: "📍", label: "Ville",     val: "Bobo-Dioulasso, Burkina Faso 🇧🇫" },
                { icon: "📅", label: "Fondation", val: "1972 — 50+ ans d'histoire"        },
                { icon: "🏟️", label: "Stade",     val: "Stade Municipal de Bobo-Dioulasso" },
                { icon: "👕", label: "Couleurs",  val: "Vert et Blanc"                     },
              ].map(info => (
                <div key={info.label} className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)" }}>
                  <span className="text-2xl flex-shrink-0">{info.icon}</span>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,.3)", letterSpacing: ".12em" }}>{info.label}</div>
                    <div className="font-semibold text-sm mt-0.5" style={{ color: "rgba(255,255,255,.75)" }}>{info.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ CLASSEMENT ═════════════════════════════════════════════ */
function ClassementSection() {
  return (
    <section className="py-24 px-5 sm:px-8" style={{ background: "#040C06" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-12">
          <div className="reveal">
            <SectionLabel>Championnat Régional</SectionLabel>
            <h2 className="font-display text-white leading-none mt-3" style={{ fontSize: "clamp(40px,5.5vw,70px)" }}>
              CLASSEMENT
            </h2>
          </div>
          <div className="flex gap-5 text-xs font-bold reveal" style={{ color: "rgba(255,255,255,.35)" }}>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full inline-block" style={{background:"var(--g)"}}/>Promotion</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full inline-block" style={{background:"#FF6B6B"}}/>Relégation</span>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden reveal" style={{ border: "1px solid rgba(255,255,255,.08)", boxShadow: "0 24px 80px rgba(0,0,0,.5)" }}>
          {/* Header */}
          <div className="px-5 py-4 font-display font-bold text-sm tracking-widest"
            style={{ background: "var(--g)", display: "grid", gridTemplateColumns: "46px 1fr 42px 42px 42px 42px 64px 114px 54px", letterSpacing: ".08em", color: "white" }}>
            {["#","ÉQUIPE","J","V","N","D","BUTS","FORME","PTS"].map((h, i) => (
              <div key={h} className={`${i>1?"text-center":""} ${i===6?"hidden sm:block":""} ${i===7?"hidden md:block":""}`}>{h}</div>
            ))}
          </div>

          {STANDINGS.map((row, i) => (
            <div key={row.pos}
              className="standings-row px-5 py-4 items-center transition-all duration-200"
              style={{
                display: "grid",
                gridTemplateColumns: "46px 1fr 42px 42px 42px 42px 64px 114px 54px",
                borderBottom: i < STANDINGS.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none",
                background: row.isUs
                  ? "linear-gradient(90deg,rgba(11,143,58,.18),rgba(11,143,58,.05))"
                  : "rgba(255,255,255,.02)",
              }}>
              {/* Position */}
              <div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm" style={{
                  background: row.pos===1?"var(--gold)":row.pos<=3?"rgba(11,143,58,.25)":row.pos>=6?"rgba(229,62,62,.15)":"transparent",
                  color: row.pos===1?"black":row.pos<=3?"#15C44F":row.pos>=6?"#FF6B6B":"rgba(255,255,255,.3)",
                  fontSize: row.pos<=3?16:13,
                  boxShadow: row.pos===1?"0 0 12px rgba(240,180,41,.5)":"none",
                }}>
                  {row.pos===1?"👑":row.pos}
                </div>
              </div>

              {/* Équipe */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xl" style={{ background: row.isUs?"var(--g)":"rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)" }}>
                  {row.isUs?"🦁":"🏟️"}
                </div>
                <span className="text-sm truncate" style={{ color: row.isUs?"white":"rgba(255,255,255,.6)", fontWeight: row.isUs?800:500 }}>{row.team}</span>
                {row.isUs && <span className="text-xs font-black px-2 py-0.5 rounded-full hidden sm:block" style={{ background: "var(--g)", color: "white", letterSpacing: ".08em" }}>NOUS</span>}
              </div>

              {/* Stats */}
              <div className="text-center text-sm font-semibold" style={{ color: "rgba(255,255,255,.35)" }}>{row.p}</div>
              <div className="text-center text-sm font-bold"    style={{ color: "var(--g)"               }}>{row.w}</div>
              <div className="text-center text-sm font-semibold" style={{ color: "var(--gold)"            }}>{row.d}</div>
              <div className="text-center text-sm font-semibold" style={{ color: "#FF6B6B"               }}>{row.l}</div>
              <div className="text-center text-sm font-medium hidden sm:block" style={{ color: "rgba(255,255,255,.3)" }}>{row.gf}:{row.ga}</div>

              {/* Forme */}
              <div className="hidden md:flex gap-1.5 justify-center">
                {row.form.map((f, fi) => (
                  <span key={fi} className="w-6 h-6 rounded-full inline-flex items-center justify-center font-black"
                    style={{ fontSize: 9, background: FORM_STYLES[f].bg, color: FORM_STYLES[f].color, letterSpacing: 0 }}>
                    {f}
                  </span>
                ))}
              </div>

              {/* Points */}
              <div className="text-center">
                <span className="font-display text-2xl" style={{ color: row.isUs?"var(--g)":"rgba(255,255,255,.75)", filter: row.isUs?"drop-shadow(0 0 6px rgba(11,143,58,.6))":"none" }}>
                  {row.pts}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ CTA FINAL ══════════════════════════════════════════════ */
function CtaFinal() {
  return (
    <section className="py-20 px-5 sm:px-8 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,var(--g3) 0%,var(--g) 55%,var(--gl) 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:"linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
        backgroundSize:"60px 60px",
      }}/>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-white leading-none" style={{ fontSize:"clamp(80px,18vw,200px)", opacity:.04 }}>CLUB</span>
      </div>
      <div className="relative z-10 max-w-xl mx-auto reveal">
        <div className="text-5xl mb-4">🦁</div>
        <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
          FAITES PARTIE<br/><span style={{ color: "var(--gold)" }}>DE L'HISTOIRE</span>
        </h2>
        <p className="font-normal mb-8" style={{ fontSize: 16, color: "rgba(255,255,255,.65)", lineHeight: 1.85 }}>
          Que vous soyez joueur, partenaire ou supporter — rejoignez le SFC Tenakourou et écrivez avec nous le prochain chapitre.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-primary" style={{ background:"var(--gold)", color:"var(--ink)", fontWeight:800, fontSize:15, padding:"15px 36px" }}>
            Nous rejoindre →
          </Link>
          <Link to="/joueurs" className="btn-primary" style={{ background:"rgba(255,255,255,.12)", backdropFilter:"blur(10px)", border:"1.5px solid rgba(255,255,255,.25)", fontSize:15 }}>
            L'équipe
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══ PAGE PRINCIPALE ════════════════════════════════════════ */
export default function Apropos() {
  useScrollReveal();
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <ValeursSection />
      <StatsSection />
      <ClassementSection />
      <CtaFinal />
    </>
  );
}
