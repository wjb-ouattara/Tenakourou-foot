// src/pages/Formation.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FORMATION_STEPS } from "../data/clubData";
import { PageHeader, SectionLabel } from "../components/ui";
import { useScrollReveal } from "../hooks";

/* ── Images entraînements ── */
const TRAINING_IMGS = [
  { src: "https://sfctenakourou.com/wp-content/uploads/2021/10/c5727abe-f3d9-4e95-943c-a071806fbeeb.jpg", label: "Technique" },
  { src: "https://sfctenakourou.com/wp-content/uploads/2021/10/1f8c9d9b-21c8-4847-834c-dc20183d35e5.jpg", label: "Physique"  },
  { src: "https://sfctenakourou.com/wp-content/uploads/2021/10/0b6a429c-3d86-44cd-b6cf-ddb53265e6a8.jpg", label: "Collectif" },
  { src: "https://sfctenakourou.com/wp-content/uploads/2024/02/JOUR-FINAL-115-scaled.jpg",                label: "Match"    },
  { src: "https://sfctenakourou.com/wp-content/uploads/2021/10/35b1055e-fd45-43b9-a63c-afd2e63823a9.jpg", label: "Cardio"   },
];

const PROGRAMMES = [
  {
    icon:  "⚽",
    title: "Formation Jeunes",
    sub:   "U8 → U17",
    desc:  "Bases techniques, tactiques et mentales. Nos coaches certifiés accompagnent chaque enfant vers son plein potentiel dans un environnement bienveillant.",
    badge: "Inscription ouverte",
    color: "var(--g)",
    grad:  "linear-gradient(135deg,#054D20,#0B8F3A)",
    perks: ["Séances 3×/semaine", "Coach certifié FIFA", "Équipement fourni"],
  },
  {
    icon:  "🏆",
    title: "Équipe Senior",
    sub:   "18 ans et +",
    desc:  "Rejoignez l'équipe A ou B et disputez les championnats régionaux. Essai libre sur rendez-vous avec notre staff technique.",
    badge: "Sélection sur essai",
    color: "#1a4a82",
    grad:  "linear-gradient(135deg,#0a1830,#1a4a82)",
    perks: ["Compétitions officielles", "Préparation physique", "Suivi médical"],
  },
  {
    icon:  "🎓",
    title: "Stage Vacances",
    sub:   "Tous niveaux",
    desc:  "Stages intensifs de 5 jours pendant les vacances scolaires. Programme complet pour progresser rapidement et prendre confiance.",
    badge: "Session disponible",
    color: "var(--goldd)",
    grad:  "linear-gradient(135deg,#3D1A00,#C8920A)",
    perks: ["5 jours intensifs", "Toutes catégories", "Certificat remis"],
  },
];

/* ══ COMPOSANT IMAGE CELLULE ═══════════════════════════════════ */
function ImgCell({ img, i, hov }) {
  return (
    <>
      <img
        src={img.src}
        alt={img.label}
        className="w-full h-full object-cover"
        style={{
          transform:  hov === i ? "scale(1.09)" : "scale(1)",
          transition: "transform .5s cubic-bezier(.4,0,.2,1)",
        }}
      />
      {/* Overlay permanent */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top,rgba(5,20,10,.75) 0%,transparent 55%)" }}
      />
      {/* Overlay vert hover */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg,rgba(11,143,58,.4),transparent)",
          opacity:    hov === i ? 1 : 0,
        }}
      />
      {/* Label */}
      <div className="absolute bottom-3 left-3">
        <span
          className="px-2.5 py-1 rounded-lg font-bold text-white"
          style={{
            background:    "rgba(11,143,58,.8)",
            fontSize:      11,
            letterSpacing: ".1em",
            backdropFilter:"blur(4px)",
          }}
        >
          {img.label.toUpperCase()}
        </span>
      </div>
      {/* Loupe hover */}
      <div
        className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "rgba(255,255,255,.15)",
          opacity:    hov === i ? 1 : 0,
          transform:  hov === i ? "scale(1)" : "scale(.6)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2">
          <circle cx="6" cy="6" r="3.5"/>
          <line x1="9.5" y1="9.5" x2="13" y2="13"/>
        </svg>
      </div>
    </>
  );
}

/* ══ HERO INTRO ════════════════════════════════════════════════ */
function HeroIntro() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,var(--ink) 0%,var(--g3) 55%,var(--g2) 100%)" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
          backgroundSize:  "72px 72px",
        }}
      />
      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display text-white leading-none pl-4"
          style={{ fontSize: "clamp(90px,18vw,220px)", opacity: .04 }}
        >
          FORMATION
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Texte gauche */}
          <div className="reveal from-left">
            <SectionLabel>Notre Académie</SectionLabel>
            <h2
              className="font-display text-white leading-none mt-3 mb-6"
              style={{ fontSize: "clamp(48px,6vw,86px)" }}
            >
              FORMER LES<br/>
              <span style={{ color: "var(--gold)" }}>CHAMPIONS</span><br/>
              <span style={{ fontSize: "60%", opacity: .75 }}>DE DEMAIN</span>
            </h2>
            <p className="font-normal mb-4 max-w-lg" style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,.68)" }}>
              Depuis notre fondation, le SFC Tenakourou s'est engagé à offrir une plateforme
              d'excellence pour les passionnés de football de tous âges. Nos programmes sont conçus
              pour développer les compétences techniques, tactiques et mentales.
            </p>
            <p className="font-normal mb-8 max-w-lg" style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,.55)" }}>
              Nous croyons que chaque joueur porte en lui le potentiel d'atteindre l'excellence.
              Notre rôle est de le révéler.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-primary"
                style={{ background: "var(--gold)", color: "var(--ink)", fontWeight: 800 }}
              >
                Rejoindre l'académie →
              </Link>
              <Link
                to="/contact"
                className="btn-primary"
                style={{ background: "rgba(255,255,255,.12)", backdropFilter: "blur(10px)", border: "1.5px solid rgba(255,255,255,.22)" }}
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Photo droite */}
          <div className="reveal from-right relative" style={{ minHeight: 460 }}>
            <div
              className="rounded-3xl overflow-hidden"
              style={{ height: 420, boxShadow: "0 32px 80px rgba(0,0,0,.5)" }}
            >
              <img
                src="https://sfctenakourou.com/wp-content/uploads/2021/10/c5727abe-f3d9-4e95-943c-a071806fbeeb.jpg"
                alt="Formation SFC Tenakourou"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: "linear-gradient(to top,rgba(5,20,10,.6) 0%,transparent 60%)" }}
              />
            </div>

            {/* Badge 200+ */}
            <div
              className="absolute -bottom-4 -left-4 rounded-2xl p-5 shadow-2xl z-10"
              style={{ background: "var(--g)", color: "white", border: "3px solid rgba(255,255,255,.15)" }}
            >
              <div className="font-display leading-none" style={{ fontSize: 44, color: "var(--gold)" }}>200+</div>
              <div className="text-xs font-bold mt-1 opacity-80 tracking-widest uppercase">Joueurs formés</div>
            </div>

            {/* Badge 15+ */}
            <div
              className="absolute -top-4 -right-4 rounded-2xl px-5 py-4 shadow-xl z-10"
              style={{ background: "rgba(255,255,255,.1)", backdropFilter: "blur(16px)", border: "1.5px solid rgba(255,255,255,.2)", color: "white" }}
            >
              <div className="font-display leading-none" style={{ fontSize: 38, color: "var(--gold)" }}>15+</div>
              <div className="text-xs font-semibold mt-1 opacity-70 tracking-widest uppercase">Années d'XP</div>
            </div>

            {/* Mini photo superposée */}
            <div
              className="absolute right-4 bottom-16 w-28 h-20 rounded-xl overflow-hidden shadow-xl border-2 z-10"
              style={{ borderColor: "rgba(255,255,255,.3)" }}
            >
              <img
                src="https://sfctenakourou.com/wp-content/uploads/2024/04/FINALE-TIT-1ERE-EDITION-7-scaled.jpg"
                alt="Finale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ STATS BAND ════════════════════════════════════════════════ */
function StatsBand() {
  const stats = [
    { n: "200+", l: "Joueurs formés",       icon: "👟" },
    { n: "15+",  l: "Années d'expérience",  icon: "📅" },
    { n: "4",    l: "Catégories d'âge",     icon: "🎯" },
    { n: "95%",  l: "Taux de satisfaction", icon: "⭐" },
  ];
  return (
    <div className="relative overflow-hidden" style={{ background: "var(--g)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(90deg,rgba(255,255,255,.05) 0%,transparent 50%)" }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center reveal scale-in" data-delay={i * 70}>
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-display leading-none mb-1" style={{ fontSize: 52, color: "var(--gold)" }}>
                {s.n}
              </div>
              <div className="text-sm font-semibold tracking-wide" style={{ color: "rgba(255,255,255,.7)" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══ STEPS TIMELINE INTERACTIVE ════════════════════════════════ */
function StepsSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-5 sm:px-8" style={{ background: "var(--ink)" }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 reveal">
          <SectionLabel center>Processus</SectionLabel>
          <h2
            className="font-display text-white leading-none mt-3"
            style={{ fontSize: "clamp(40px,5.5vw,72px)" }}
          >
            FRANCHISSEZ LE CAP
          </h2>
          <p className="mt-3 text-sm font-normal max-w-lg mx-auto" style={{ color: "rgba(255,255,255,.45)" }}>
            Un processus clair, une équipe dédiée, un seul objectif : faire de toi un champion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Liste étapes gauche */}
          <div className="space-y-4">
            {FORMATION_STEPS.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                className="flex items-start gap-5 p-5 rounded-2xl cursor-pointer reveal"
                data-delay={i * 80}
                style={{
                  background:  activeStep === i ? "rgba(11,143,58,.2)"       : "rgba(255,255,255,.04)",
                  border:      activeStep === i ? "1.5px solid rgba(11,143,58,.5)" : "1.5px solid rgba(255,255,255,.07)",
                  transform:   activeStep === i ? "translateX(8px)"          : "none",
                  transition:  "all .3s cubic-bezier(.4,0,.2,1)",
                }}
              >
                {/* Numéro */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-display text-2xl"
                  style={{
                    background: activeStep === i ? "linear-gradient(135deg,var(--g),var(--gl))" : "rgba(255,255,255,.08)",
                    color:      activeStep === i ? "white"                   : "rgba(255,255,255,.4)",
                    boxShadow:  activeStep === i ? "0 8px 24px rgba(11,143,58,.4)" : "none",
                    transition: "all .3s",
                  }}
                >
                  {step.number}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{step.icon}</span>
                    <h3
                      className="font-bold text-base"
                      style={{ color: activeStep === i ? "white" : "rgba(255,255,255,.6)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm font-normal leading-relaxed"
                    style={{
                      color:             "rgba(255,255,255,.35)",
                      display:           activeStep === i ? "block" : "-webkit-box",
                      WebkitLineClamp:   1,
                      WebkitBoxOrient:   "vertical",
                      overflow:          "hidden",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

                <div
                  className="flex-shrink-0"
                  style={{ color: activeStep === i ? "var(--gold)" : "rgba(255,255,255,.2)", fontSize: 22, transition: "color .3s" }}
                >
                  →
                </div>
              </div>
            ))}
          </div>

          {/* Panneau détail droite */}
          <div className="sticky top-28 reveal from-right">
            <div
              className="rounded-3xl p-8 overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg,rgba(11,143,58,.15),rgba(11,143,58,.05))",
                border:     "1.5px solid rgba(11,143,58,.3)",
                minHeight:  360,
              }}
            >
              {/* Orbe déco */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle,rgba(11,143,58,.2) 0%,transparent 70%)", transform: "translate(30%,-30%)" }}
              />
              {/* Numéro géant fond */}
              <div
                className="absolute bottom-4 right-6 font-display text-white pointer-events-none select-none"
                style={{ fontSize: 120, opacity: .06, lineHeight: 1 }}
              >
                {FORMATION_STEPS[activeStep].number}
              </div>

              <div className="relative z-10">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
                  style={{ background: "var(--g)", color: "white", letterSpacing: ".1em" }}
                >
                  ÉTAPE {FORMATION_STEPS[activeStep].number}
                </span>

                <div className="text-5xl mb-4">{FORMATION_STEPS[activeStep].icon}</div>

                <h3
                  className="font-display text-white mb-4 leading-tight"
                  style={{ fontSize: "clamp(28px,3.5vw,42px)" }}
                >
                  {FORMATION_STEPS[activeStep].title}
                </h3>
                <p className="font-normal mb-8" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,.65)" }}>
                  {FORMATION_STEPS[activeStep].desc}
                </p>

                <Link
                  to="/contact"
                  className="btn-primary text-sm"
                  style={{ background: "var(--g)", boxShadow: "0 8px 24px rgba(11,143,58,.4)" }}
                >
                  En savoir plus →
                </Link>

                {/* Dots navigation */}
                <div className="flex gap-2 mt-8">
                  {FORMATION_STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      style={{
                        width:        i === activeStep ? 28 : 8,
                        height:       8,
                        borderRadius: 99,
                        background:   i === activeStep ? "var(--gold)" : "rgba(255,255,255,.2)",
                        border:       "none",
                        cursor:       "pointer",
                        transition:   "all .3s",
                      }}
                    />
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

/* ══ PROGRAMMES ════════════════════════════════════════════════ */
function ProgrammesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div className="reveal">
            <SectionLabel>Offres</SectionLabel>
            <h2 className="font-display leading-none mt-2" style={{ fontSize: "clamp(40px,5vw,68px)", color: "var(--ink)" }}>
              NOS PROGRAMMES
            </h2>
          </div>
          <p className="text-sm font-normal max-w-xs reveal" style={{ color: "var(--muted)" }}>
            Un programme pour chaque profil. Choisissez votre voie vers l'excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {PROGRAMMES.map((prog, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden reveal"
              data-delay={i * 80}
              style={{
                border:     "1.5px solid var(--bord)",
                background: "white",
                transform:  hovered === i ? "translateY(-10px)" : "none",
                boxShadow:  hovered === i ? "0 28px 64px rgba(0,0,0,.15)" : "0 4px 20px rgba(0,0,0,.06)",
                transition: "transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Header coloré */}
              <div
                className="relative p-8 text-center text-white overflow-hidden"
                style={{ background: prog.grad, minHeight: 200 }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "20px 20px" }}
                />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full" style={{ background: "rgba(255,255,255,.08)" }} />
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full" style={{ background: "rgba(255,255,255,.06)" }} />

                <div className="relative z-10">
                  <div className="text-6xl mb-3">{prog.icon}</div>
                  <h3 className="font-display text-3xl leading-none mb-2">{prog.title}</h3>
                  <span
                    className="inline-flex px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: "rgba(255,255,255,.22)", letterSpacing: ".08em" }}
                  >
                    {prog.sub}
                  </span>
                </div>
              </div>

              {/* Corps */}
              <div className="p-6">
                <p className="text-sm font-normal leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                  {prog.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {prog.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                        style={{ background: prog.color, fontSize: 10 }}
                      >
                        ✓
                      </div>
                      <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>{perk}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: "var(--gs)", color: "var(--g3)" }}
                  >
                    {prog.badge}
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center text-sm py-3"
                  style={{ background: prog.color }}
                >
                  S'inscrire maintenant →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ VIE DU CLUB — bento sombre ════════════════════════════════ */
function VieSection() {
  const [hov, setHov] = useState(null);

  return (
    <section
      className="py-24 px-5 sm:px-8 relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize:  "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12 reveal">
          <div>
            <SectionLabel>En images</SectionLabel>
            <h2 className="font-display text-white leading-none mt-2" style={{ fontSize: "clamp(40px,5vw,66px)" }}>
              LA VIE DU CLUB
            </h2>
          </div>
          <Link
            to="/galerie"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
            style={{ background: "rgba(255,255,255,.08)", color: "white", border: "1.5px solid rgba(255,255,255,.14)" }}
          >
            Voir la galerie →
          </Link>
        </div>

        {/* Bento grid — layout manuel avec heights explicites */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>

          {/* [0] Grande colonne gauche — 2 lignes de hauteur */}
          <div
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            style={{ gridRow: "span 2", height: 490, transition: "transform .35s, box-shadow .35s", transform: hov === 0 ? "scale(1.02)" : "scale(1)", boxShadow: hov === 0 ? "0 20px 48px rgba(0,0,0,.6),0 0 0 2px rgba(11,143,58,.5)" : "0 4px 20px rgba(0,0,0,.3)", zIndex: hov === 0 ? 5 : 1 }}
            onMouseEnter={() => setHov(0)}
            onMouseLeave={() => setHov(null)}
          >
            <ImgCell img={TRAINING_IMGS[0]} i={0} hov={hov} />
          </div>

          {/* [1] Colonne milieu haut */}
          <div
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            style={{ height: 239, transition: "transform .35s, box-shadow .35s", transform: hov === 1 ? "scale(1.02)" : "scale(1)", boxShadow: hov === 1 ? "0 20px 48px rgba(0,0,0,.6),0 0 0 2px rgba(11,143,58,.5)" : "0 4px 20px rgba(0,0,0,.3)", zIndex: hov === 1 ? 5 : 1 }}
            onMouseEnter={() => setHov(1)}
            onMouseLeave={() => setHov(null)}
          >
            <ImgCell img={TRAINING_IMGS[1]} i={1} hov={hov} />
          </div>

          {/* [2] Colonne droite haut */}
          <div
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            style={{ height: 239, transition: "transform .35s, box-shadow .35s", transform: hov === 2 ? "scale(1.02)" : "scale(1)", boxShadow: hov === 2 ? "0 20px 48px rgba(0,0,0,.6),0 0 0 2px rgba(11,143,58,.5)" : "0 4px 20px rgba(0,0,0,.3)", zIndex: hov === 2 ? 5 : 1 }}
            onMouseEnter={() => setHov(2)}
            onMouseLeave={() => setHov(null)}
          >
            <ImgCell img={TRAINING_IMGS[2]} i={2} hov={hov} />
          </div>

          {/* [3] Colonne milieu bas */}
          <div
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            style={{ height: 239, transition: "transform .35s, box-shadow .35s", transform: hov === 3 ? "scale(1.02)" : "scale(1)", boxShadow: hov === 3 ? "0 20px 48px rgba(0,0,0,.6),0 0 0 2px rgba(11,143,58,.5)" : "0 4px 20px rgba(0,0,0,.3)", zIndex: hov === 3 ? 5 : 1 }}
            onMouseEnter={() => setHov(3)}
            onMouseLeave={() => setHov(null)}
          >
            <ImgCell img={TRAINING_IMGS[3]} i={3} hov={hov} />
          </div>

          {/* [4] Colonne droite bas */}
          <div
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            style={{ height: 239, transition: "transform .35s, box-shadow .35s", transform: hov === 4 ? "scale(1.02)" : "scale(1)", boxShadow: hov === 4 ? "0 20px 48px rgba(0,0,0,.6),0 0 0 2px rgba(11,143,58,.5)" : "0 4px 20px rgba(0,0,0,.3)", zIndex: hov === 4 ? 5 : 1 }}
            onMouseEnter={() => setHov(4)}
            onMouseLeave={() => setHov(null)}
          >
            <ImgCell img={TRAINING_IMGS[4]} i={4} hov={hov} />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ══ CTA FINAL ════════════════════════════════════════════════ */
function CtaFinal() {
  return (
    <section
      className="py-20 px-5 sm:px-8 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,var(--g3) 0%,var(--g) 55%,var(--gl) 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
          backgroundSize:  "60px 60px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-white leading-none" style={{ fontSize: "clamp(80px,18vw,200px)", opacity: .05 }}>
          JOIN US
        </span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto reveal">
        <div className="text-5xl mb-4">🦁</div>
        <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(36px,5vw,62px)" }}>
          PRÊT À REJOINDRE<br/>
          <span style={{ color: "var(--gold)" }}>LES LIONS ?</span>
        </h2>
        <p className="font-normal mb-8" style={{ fontSize: 16, color: "rgba(255,255,255,.68)", lineHeight: 1.8 }}>
          Contactez-nous dès aujourd'hui. Une séance d'essai gratuite t'attend.
          Nos coaches sont prêts à t'accueillir.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="btn-primary"
            style={{ background: "var(--gold)", color: "var(--ink)", fontWeight: 800, fontSize: 15, padding: "16px 36px" }}
          >
            Commencer maintenant →
          </Link>
          <Link
            to="/joueurs"
            className="btn-primary"
            style={{ background: "rgba(255,255,255,.14)", backdropFilter: "blur(10px)", border: "1.5px solid rgba(255,255,255,.25)", fontSize: 15 }}
          >
            Voir notre équipe
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══ PAGE PRINCIPALE ══════════════════════════════════════════ */
export default function Formation() {
  useScrollReveal();
  return (
    <>
      <PageHeader title="FORMATION" breadcrumb={["Formation"]} />
      <HeroIntro />
      <StatsBand />
      <StepsSection />
      <ProgrammesSection />
      <VieSection />
      <CtaFinal />
    </>
  );
}
