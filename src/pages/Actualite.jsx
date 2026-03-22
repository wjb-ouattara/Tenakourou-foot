// src/pages/Actualite.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NEWS_ITEMS } from "../data/clubData";
import { useScrollReveal } from "../hooks";

/* ══ DONNÉES ENRICHIES ══════════════════════════════════════ */
const ALL_NEWS = [
  ...NEWS_ITEMS,
  {
    id: 5, category: "RÉSULTAT", featured: false,
    title: "2-0 contre FC Houet : une victoire de maîtrise",
    date: "5 Mars 2026", readTime: "2 min",
    image: "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-344-111-scaled.jpg",
    summary: "Une performance solide des Lions du Plateau qui confirme leur leadership au classement régional.",
  },
  {
    id: 6, category: "INTERVIEW", featured: false,
    title: "Ali KY : « Notre objectif est le titre national cette saison »",
    date: "2 Mars 2026", readTime: "5 min",
    image: "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-72.jpg",
    summary: "Le capitaine se confie sur les ambitions du club, sa carrière et l'état d'esprit du vestiaire.",
  },
  {
    id: 7, category: "JEUNES", featured: false,
    title: "Les U17 qualifiés pour la phase finale régionale",
    date: "28 Fév 2026", readTime: "2 min",
    image: "https://sfctenakourou.com/wp-content/uploads/2021/10/c5727abe-f3d9-4e95-943c-a071806fbeeb.jpg",
    summary: "La formation du club porte ses fruits avec une génération dorée qui réalise un parcours sans faute.",
  },
];

const CATEGORIES = ["Tous", "TOURNOI", "FORMATION", "RECRUTEMENT", "ACADÉMIE", "RÉSULTAT", "INTERVIEW", "JEUNES"];

const CAT_COLORS = {
  TOURNOI:     { bg: "rgba(11,143,58,.15)",    text: "#15C44F",  border: "rgba(11,143,58,.3)"  },
  FORMATION:   { bg: "rgba(26,106,204,.15)",   text: "#4A9EFF",  border: "rgba(26,106,204,.3)" },
  RECRUTEMENT: { bg: "rgba(200,146,10,.15)",   text: "#F0B429",  border: "rgba(200,146,10,.3)" },
  ACADÉMIE:    { bg: "rgba(139,48,204,.15)",   text: "#B060FF",  border: "rgba(139,48,204,.3)" },
  RÉSULTAT:    { bg: "rgba(11,143,58,.15)",    text: "#15C44F",  border: "rgba(11,143,58,.3)"  },
  INTERVIEW:   { bg: "rgba(240,180,41,.15)",   text: "#F0B429",  border: "rgba(240,180,41,.3)" },
  JEUNES:      { bg: "rgba(229,62,62,.15)",    text: "#FF6B6B",  border: "rgba(229,62,62,.3)"  },
};

function CatBadge({ cat, small = false }) {
  const c = CAT_COLORS[cat] || { bg: "rgba(255,255,255,.1)", text: "rgba(255,255,255,.7)", border: "rgba(255,255,255,.15)" };
  return (
    <span style={{
      background: c.bg, color: c.text, border: `1px solid ${c.border}`,
      padding: small ? "3px 10px" : "5px 14px",
      borderRadius: 99, fontSize: small ? 9 : 10,
      fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase",
      display: "inline-block", backdropFilter: "blur(4px)",
    }}>
      {cat}
    </span>
  );
}

/* ══ HERO TICKER — dernières nouvelles défilantes ═══════════ */
function Ticker() {
  const items = ALL_NEWS.map(n => `${n.category} · ${n.title}`);
  return (
    <div className="overflow-hidden" style={{ background: "var(--g)", height: 40 }}>
      <div className="flex items-center h-full" style={{
        animation: "ticker 30s linear infinite",
        whiteSpace: "nowrap",
        width: "max-content",
      }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 text-xs font-bold text-white" style={{ letterSpacing: ".06em" }}>
            <span style={{ color: "var(--gold)", fontSize: 16 }}>•</span>
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

/* ══ HERO MAGAZINE — article vedette immersif ══════════════ */
function HeroArticle({ article }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{
        minHeight: 580, borderRadius: 24,
        boxShadow: hov ? "0 40px 100px rgba(0,0,0,.7), 0 0 0 1.5px rgba(11,143,58,.4)" : "0 24px 60px rgba(0,0,0,.5)",
        transform: hov ? "scale(1.005)" : "scale(1)",
        transition: "transform .4s cubic-bezier(.4,0,.2,1), box-shadow .4s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Image plein fond */}
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: hov ? "scale(1.04)" : "scale(1)", transition: "transform .7s cubic-bezier(.4,0,.2,1)" }}
      />

      {/* Gradients superposés */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,12,6,.95) 0%, rgba(4,12,6,.6) 50%, rgba(4,12,6,.1) 100%)" }}/>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,143,58,.15) 0%, transparent 60%)" }}/>

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat", backgroundSize: "128px",
      }}/>

      {/* Badge FEATURED haut */}
      <div className="absolute top-6 left-6 flex items-center gap-3">
        <span className="px-3 py-1.5 rounded-full text-xs font-black text-white tracking-widest" style={{ background: "var(--g)", letterSpacing: ".15em" }}>
          ★ À LA UNE
        </span>
        <CatBadge cat={article.category} />
      </div>

      {/* Numéro décoratif haut droit */}
      <div className="absolute top-4 right-6 font-display text-white opacity-10" style={{ fontSize: 120, lineHeight: 1 }}>01</div>

      {/* Contenu bas */}
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-4 text-xs font-semibold" style={{ color: "rgba(255,255,255,.5)", letterSpacing: ".1em" }}>
          <span>📅 {article.date}</span>
          <span style={{ color: "rgba(255,255,255,.2)" }}>·</span>
          <span>⏱ {article.readTime} de lecture</span>
        </div>

        {/* Titre */}
        <h2
          className="font-display text-white leading-none mb-4"
          style={{ fontSize: "clamp(26px,3.5vw,48px)", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}
        >
          {article.title}
        </h2>

        {/* Résumé */}
        <p className="font-normal mb-6 max-w-2xl" style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,.65)" }}>
          {article.summary}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200"
            style={{ background: "var(--g)", boxShadow: "0 8px 24px rgba(11,143,58,.4)" }}
          >
            Lire l'article complet
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/>
            </svg>
          </button>
          <button className="inline-flex items-center gap-2 text-xs font-bold" style={{ color: "rgba(255,255,255,.4)", letterSpacing: ".08em" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10" cy="3" r="1.5"/><circle cx="10" cy="11" r="1.5"/><circle cx="4" cy="7" r="1.5"/>
              <line x1="9" y1="4.2" x2="5" y2="5.8"/><line x1="9" y1="9.8" x2="5" y2="8.2"/>
            </svg>
            PARTAGER
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══ CARTE HORIZONTALE MAGAZINE ═════════════════════════════ */
function NewsCardH({ article, index, large = false }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="reveal"
      data-delay={index * 60}
      style={{
        display: "flex", gap: 0,
        borderRadius: 20, overflow: "hidden", cursor: "pointer",
        background: "rgba(255,255,255,.03)",
        border: hov ? "1px solid rgba(11,143,58,.4)" : "1px solid rgba(255,255,255,.07)",
        transform: hov ? "translateX(6px)" : "none",
        boxShadow: hov ? "-4px 0 0 0 var(--g), 0 16px 40px rgba(0,0,0,.4)" : "0 4px 20px rgba(0,0,0,.2)",
        transition: "all .35s cubic-bezier(.4,0,.2,1)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Image latérale */}
      <div className="flex-shrink-0 overflow-hidden relative" style={{ width: large ? 220 : 160, minHeight: large ? 180 : 130 }}>
        <img src={article.image} alt={article.title}
          className="w-full h-full object-cover"
          style={{ transform: hov ? "scale(1.08)" : "scale(1)", transition: "transform .5s" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(4,12,6,.8))" }}/>
        {/* Numéro */}
        <div className="absolute bottom-2 left-3 font-display text-white opacity-25" style={{ fontSize: 48, lineHeight: 1 }}>
          {String(index + 2).padStart(2,"0")}
        </div>
      </div>

      {/* Contenu */}
      <div className="flex-1 p-5 flex flex-col justify-center" style={{ minHeight: large ? 180 : 130 }}>
        <div className="flex items-center gap-2 mb-2.5">
          <CatBadge cat={article.category} small />
          <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,.3)", letterSpacing: ".06em" }}>
            {article.date}
          </span>
        </div>
        <h3 className="font-display text-white leading-tight mb-2" style={{ fontSize: large ? 20 : 16 }}>
          {article.title}
        </h3>
        {large && (
          <p className="text-sm font-normal leading-relaxed mb-3" style={{ color: "rgba(255,255,255,.45)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {article.summary}
          </p>
        )}
        <div className="flex items-center gap-1 text-xs font-bold" style={{ color: "var(--g)" }}>
          Lire
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="2" y1="6" x2="10" y2="6"/><polyline points="7,3 10,6 7,9"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ══ CARTE VERTICALE MAGAZINE ═══════════════════════════════ */
function NewsCardV({ article, index }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="reveal"
      data-delay={index * 60}
      style={{
        borderRadius: 20, overflow: "hidden", cursor: "pointer",
        background: "rgba(255,255,255,.03)",
        border: hov ? "1px solid rgba(11,143,58,.35)" : "1px solid rgba(255,255,255,.07)",
        transform: hov ? "translateY(-8px)" : "none",
        boxShadow: hov ? "0 0 0 1px rgba(11,143,58,.2), 0 24px 60px rgba(0,0,0,.5)" : "0 4px 20px rgba(0,0,0,.2)",
        transition: "all .35s cubic-bezier(.4,0,.2,1)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Image */}
      <div className="overflow-hidden relative" style={{ height: 200 }}>
        <img src={article.image} alt={article.title}
          className="w-full h-full object-cover"
          style={{ transform: hov ? "scale(1.08)" : "scale(1)", transition: "transform .55s" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,12,6,.85) 0%, transparent 55%)" }}/>
        {/* Cat badge sur image */}
        <div className="absolute top-3 left-3">
          <CatBadge cat={article.category} small />
        </div>
        {/* Numéro déco */}
        <div className="absolute bottom-2 right-3 font-display text-white opacity-15" style={{ fontSize: 56, lineHeight: 1 }}>
          {String(index + 1).padStart(2,"0")}
        </div>
      </div>

      {/* Corps */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3 text-xs font-medium" style={{ color: "rgba(255,255,255,.35)", letterSpacing: ".08em" }}>
          <span>📅 {article.date}</span>
          <span style={{ color: "rgba(255,255,255,.15)" }}>·</span>
          <span>⏱ {article.readTime}</span>
        </div>
        <h3 className="font-display text-white leading-tight mb-3" style={{ fontSize: 18 }}>
          {article.title}
        </h3>
        <p className="text-sm font-normal leading-relaxed mb-4"
          style={{ color: "rgba(255,255,255,.45)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {article.summary}
        </p>
        {/* Barre de progression de lecture décorative */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,.08)" }}>
            <div className="h-full rounded-full" style={{ width: hov ? "100%" : "0%", background: "var(--g)", transition: "width .6s cubic-bezier(.4,0,.2,1)" }}/>
          </div>
          <span className="text-xs font-bold flex items-center gap-1" style={{ color: "var(--g)", whiteSpace: "nowrap" }}>
            Lire →
          </span>
        </div>
      </div>
    </div>
  );
}

/* ══ SECTION NEWSLETTER INTÉGRÉE ═══════════════════════════ */
function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <div className="rounded-2xl p-7 reveal" style={{
      background: "linear-gradient(135deg,rgba(11,143,58,.15),rgba(11,143,58,.05))",
      border: "1px solid rgba(11,143,58,.25)",
    }}>
      <div className="text-3xl mb-3">🦁</div>
      <h3 className="font-display text-white mb-2" style={{ fontSize: 24 }}>NE RATEZ RIEN</h3>
      <p className="text-sm font-normal mb-5" style={{ color: "rgba(255,255,255,.5)", lineHeight: 1.7 }}>
        Recevez chaque actu du SFC Tenakourou directement dans votre boîte mail.
      </p>
      {!ok ? (
        <div className="space-y-2.5">
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="votre@email.com"
            className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none"
            style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.1)", color: "white", fontFamily: "'Outfit',sans-serif" }}
            onFocus={e=>e.target.style.borderColor="var(--g)"}
            onBlur={e=>e.target.style.borderColor="rgba(255,255,255,.1)"}
          />
          <button onClick={()=>email&&setOk(true)}
            className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
            style={{ background: "var(--g)", boxShadow: "0 6px 20px rgba(11,143,58,.35)" }}>
            S'inscrire →
          </button>
        </div>
      ) : (
        <p className="font-bold text-sm" style={{ color: "var(--g)" }}>✅ Merci ! Vous êtes bien inscrit.</p>
      )}
    </div>
  );
}

/* ══ PAGE PRINCIPALE ════════════════════════════════════════ */
export default function Actualite() {
  useScrollReveal();

  const [activeCat, setActiveCat] = useState("Tous");
  const [visibleCount, setVisibleCount] = useState(6);

  const featured  = ALL_NEWS.find(n => n.featured);
  const rest      = ALL_NEWS.filter(n => !n.featured);
  const filtered  = activeCat === "Tous" ? rest : rest.filter(n => n.category === activeCat);
  const visible   = filtered.slice(0, visibleCount);

  return (
    <div style={{ background: "#040C06", minHeight: "100vh" }}>

      {/* ── TICKER ── */}
      <div className="pt-[72px]">
        <Ticker />
      </div>

      {/* ── HERO SOMBRE ── */}
      <div
        className="relative overflow-hidden px-5 sm:px-8 pb-16 pt-10"
        style={{ background: "linear-gradient(180deg,#040C06 0%,#071A0B 100%)" }}
      >
        {/* Grille pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}/>
        {/* Orbe vert */}
        <div className="absolute pointer-events-none" style={{
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(11,143,58,.12) 0%,transparent 70%)",
          top: -200, right: -100,
        }}/>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Titre section */}
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 reveal">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-0.5 rounded" style={{ background: "var(--gold)", display: "inline-block" }}/>
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--gold)", letterSpacing: ".18em" }}>ACTUALITÉS</span>
              </div>
              <h1 className="font-display text-white leading-none" style={{ fontSize: "clamp(48px,7vw,88px)" }}>
                TOUTES LES<br/>
                <span style={{ color: "var(--g)", WebkitTextStroke: "0px" }}>NOUVELLES</span>
              </h1>
            </div>
            <p className="text-sm font-normal max-w-xs" style={{ color: "rgba(255,255,255,.4)", lineHeight: 1.8 }}>
              Restez au cœur de l'actualité du SFC Tenakourou — résultats, transferts, formation et bien plus.
            </p>
          </div>

          {/* ── LAYOUT PRINCIPAL ── */}
          <div className="grid lg:grid-cols-3 gap-6 mb-6">

            {/* Featured — 2/3 largeur */}
            <div className="lg:col-span-2 reveal">
              {featured && <HeroArticle article={featured} />}
            </div>

            {/* Colonne droite — 2 cartes H + newsletter */}
            <div className="flex flex-col gap-5">
              {rest.slice(0, 2).map((n, i) => (
                <NewsCardH key={n.id} article={n} index={i} large />
              ))}
              <NewsletterInline />
            </div>
          </div>

          {/* ── BANDE SÉPARATRICE ── */}
          <div className="flex items-center gap-5 my-10 reveal">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,.07)" }}/>
            <span className="font-display text-xs tracking-widest px-4 py-2 rounded-full"
              style={{ color: "rgba(255,255,255,.3)", border: "1px solid rgba(255,255,255,.07)", letterSpacing: ".2em" }}>
              DERNIÈRES NOUVELLES
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,.07)" }}/>
          </div>

          {/* ── FILTRES CATÉGORIES ── */}
          <div className="flex flex-wrap gap-2 mb-8 reveal" data-delay="80">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => { setActiveCat(cat); setVisibleCount(6); }}
                className="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
                style={{
                  background:  activeCat === cat ? "var(--g)"              : "rgba(255,255,255,.05)",
                  color:       activeCat === cat ? "white"                  : "rgba(255,255,255,.45)",
                  border:      activeCat === cat ? "none"                   : "1px solid rgba(255,255,255,.08)",
                  boxShadow:   activeCat === cat ? "0 4px 14px rgba(11,143,58,.4)" : "none",
                  transform:   activeCat === cat ? "translateY(-2px)"      : "none",
                  letterSpacing: ".1em",
                }}>
                {cat === "Tous" ? "ALL" : cat}
                <span className="ml-2 opacity-50 font-normal text-[10px]">
                  {cat === "Tous" ? rest.length : rest.filter(n => n.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* ── GRILLE ARTICLES ── */}
          {visible.length > 0 ? (
            <>
              {/* Première ligne : 1 grande H + 1 petite H */}
              {visible.length >= 2 && (
                <div className="grid lg:grid-cols-2 gap-5 mb-5">
                  <NewsCardH article={visible[0]} index={0} large />
                  <NewsCardH article={visible[1]} index={1} large />
                </div>
              )}

              {/* Reste en grille 3 cartes verticales */}
              {visible.length > 2 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                  {visible.slice(2).map((n, i) => (
                    <NewsCardV key={n.id} article={n} index={i} />
                  ))}
                </div>
              )}

              {/* Voir plus */}
              {visibleCount < filtered.length && (
                <div className="text-center reveal">
                  <button
                    onClick={() => setVisibleCount(v => v + 3)}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,.06)", color: "white", border: "1px solid rgba(255,255,255,.1)" }}
                  >
                    Voir plus d'articles
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="3" x2="8" y2="13"/><polyline points="4,9 8,13 12,9"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 rounded-3xl" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}>
              <div className="text-5xl mb-3">📰</div>
              <p className="font-display text-white text-2xl mb-2">AUCUN ARTICLE</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,.35)" }}>dans cette catégorie pour l'instant</p>
              <button onClick={() => setActiveCat("Tous")} className="btn-outline mt-5 text-sm" style={{ borderColor: "rgba(255,255,255,.2)", color: "white" }}>
                Voir tous les articles
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
