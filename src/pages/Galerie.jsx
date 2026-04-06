// src/pages/Galerie.jsx
import { useState, useEffect, useCallback } from "react";
import { PageHeader, SectionLabel } from "../components/ui";
import { useScrollReveal } from "../hooks";
import hero1    from "/images/players/01.jpeg";
import hero2    from "/images/players/02.jpeg";
import hero3    from "/images/players/03.jpeg";
import hero4    from "/images/players/04.jpeg";
import hero5    from "/images/players/05.jpeg";
import hero6    from "/images/players/06.jpeg";
import hero7    from "/images/players/07.jpeg";
import hero8    from "/images/players/08.jpeg";
import hero9    from "/images/players/09.jpeg";
import hero10   from "/images/players/10.jpeg";
import hero11   from "/images/players/11.jpeg";
import hero12   from "/images/players/12.jpeg";
import hero13   from "/images/players/13.jpeg";
import hero18   from "/images/players/18.jpg";
import hero25 from '/images/players/25.jpg';
import hero28 from '/images/players/28.jpg';
import hero21 from '/images/players/21.jpg';

/* ══ PHOTOS AVEC LES 3 IMAGES OFFICIELLES DU TOURNOI ══════ */
const ALBUMS = [
  {
    id: "featured",
    label: "À la une",
    icon: "⭐",
    photos: [
      /* ── 3 visuels officiels Tournoi TIT 2026 ── */
      {
        src: "/images/blog/tournoi-tit-affiche.jpeg",
        caption: "Tournoi International Tenakourou — 2ᵉ Édition",
        tag: "TIT 2026",
      },
      {
        src: "/images/blog/tournoi-tit-academies.jpeg",
        caption: "Académies participantes — Poule A & Poule B",
        tag: "TIT 2026",
      },
      {
        src: "/images/blog/tournoi-tit-conditions.jpeg",
        caption: "Lieu & Conditions — Ouagadougou, Gouanghin",
        tag: "TIT 2026",
      },
      /* ── Photos matchs ── */
      {
        src: hero1,
        caption: "Finale 1ère Édition",
        tag: "FINALE",
      },
      {
        src: hero2,
        caption: "Entraînement en équipe",
        tag: "TRAINING",
      },
      {
        src: hero3,

        caption: "Ambiance de feu",
        tag: "MATCH",
      },
      {
        src: hero4,
        caption: "Match de Gala",
        tag: "GALA",
      },
      {
        src: hero5,
        caption: "Remise du Trophée",
        tag: "TROPHÉE",
      },
      {
        src: hero6,
        caption: "Tournoi Tenakourou",
        tag: "TOURNOI",
      },
      {
        src: hero7,
        caption: "Jeu collectif",
        tag: "MATCH",
      },
      {
        src: hero8,
        caption: "Action de l'attaque",
        tag: "MATCH",
      },
      {
        src: hero9,
        caption: "Duel au milieu",
        tag: "ACTION",
      },
      {
        src: hero10,
        caption: "Action offensive",
        tag: "ACTION",
      },
    ],
  },
  {
    id: "tournoi",
    label: "Tournoi TIT 2026",
    icon: "🏆",
    photos: [
      {
        src: "/images/blog/tournoi-tit-affiche.jpeg",
        caption: "Affiche officielle — TIT 2ᵉ Édition",
        tag: "TIT 2026",
      },
      {
        src: "/images/blog/tournoi-tit-academies.jpeg",
        caption: "Les 8 académies participantes",
        tag: "TIT 2026",
      },
      {
        src: "/images/blog/tournoi-tit-conditions.jpeg",
        caption: "Lieu : Académie Tenakourou, Gouanghin",
        tag: "TIT 2026",
      },
      {
        src: hero25,
        caption: "Finale 1ère Édition",
        tag: "FINALE",
      },
      {
        src: hero28,
        caption: "Remise du Trophée",
        tag: "TROPHÉE",
      },
    ],
  },
  {
    id: "training",
    label: "Entraînements",
    icon: "🏃",
    photos: [
      { src: hero11, caption: "Séance technique",    tag: "TRAINING" },
      { src: hero12, caption: "Travail physique",    tag: "TRAINING" },
      { src: hero13, caption: "Exercices collectifs", tag: "TRAINING" },
      { src: hero25, caption: "Préparation physique", tag: "TRAINING" },
      { src: hero28, caption: "Entraînement gardien", tag: "TRAINING" },
      { src: hero21, caption: "Session matinale",    tag: "TRAINING" },
      { src: hero1, caption: "Exercice de passe",   tag: "TRAINING" },
      { src: hero2, caption: "Tirs au but",         tag: "TRAINING" },
    ],
  },
  {
    id: "players",
    label: "Joueurs",
    icon: "👤",
    photos: [
      { src: hero18,                        caption: "Portrait officiel",  tag: "PORTRAIT" },
      { src: hero9,               caption: "Photo d'équipe",     tag: "ÉQUIPE"   },
      { src: hero8,                caption: "En action",          tag: "ACTION"   },
      { src: hero7,caption: "Avant le match",     tag: "PORTRAIT" },
    ],
  },
];

const ALL_PHOTOS = ALBUMS.flatMap((a) => a.photos);

/* ══ LIGHTBOX ════════════════════════════════════════════════ */
function Lightbox({ photos, index, onClose, onNav }) {
  const photo = photos[index];

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNav]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{ background: "rgba(5,20,10,.96)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      {/* Compteur */}
      <div
        className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2 rounded-full text-xs font-bold text-white"
        style={{ background: "rgba(255,255,255,.1)", letterSpacing: ".1em" }}
      >
        <span style={{ color: "var(--gold)" }}>{index + 1}</span>
        <span style={{ opacity: .4 }}>/</span>
        <span style={{ opacity: .6 }}>{photos.length}</span>
      </div>

      {/* Fermer */}
      <button
        className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center text-white text-2xl font-light transition-all hover:rotate-90"
        style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.15)" }}
        onClick={onClose}
      >×</button>

      {/* Flèches */}
      {[[-1, "‹", "left-5 sm:left-8"], [1, "›", "right-5 sm:right-8"]].map(([dir, arrow, pos]) => (
        <button
          key={dir}
          className={`absolute ${pos} top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-2xl text-white transition-all hover:scale-110`}
          style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)" }}
          onClick={(e) => { e.stopPropagation(); onNav(dir); }}
        >{arrow}</button>
      ))}

      {/* Image */}
      <div className="max-w-5xl w-full mx-20 sm:mx-28 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full" style={{ maxHeight: "72vh" }}>
          <img
            src={photo.src}
            alt={photo.caption}
            className="w-full object-contain"
            style={{ maxHeight: "72vh" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top,rgba(0,0,0,.8),transparent)" }}/>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "var(--g)", letterSpacing: ".1em" }}>
              {photo.tag}
            </span>
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-display text-white text-xl">{photo.caption}</p>
          </div>
        </div>

        {/* Miniatures */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 max-w-full">
          {photos.map((p, i) => (
            <div
              key={i}
              onClick={() => onNav(i - index)}
              className="flex-shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-200"
              style={{
                width: 52, height: 40,
                border: i === index ? "2px solid var(--gold)" : "2px solid rgba(255,255,255,.1)",
                opacity: i === index ? 1 : 0.45,
                transform: i === index ? "scale(1.1)" : "scale(1)",
              }}
            >
              <img src={p.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══ BENTO GRID ══════════════════════════════════════════════ */
function BentoGrid({ photos, onOpen }) {
  if (!photos.length) return null;

  const chunks = [];
  for (let i = 0; i < photos.length; i += 7) chunks.push(photos.slice(i, i + 7));

  return (
    <div className="space-y-3">
      {chunks.map((chunk, ci) => (
        <div key={ci} className="space-y-3">
          {/* Ligne 1 : 1 grande + 2 empilées */}
          {chunk[0] && (
            <div className="grid grid-cols-3 gap-3" style={{ height: 380 }}>
              <PhotoCard photo={chunk[0]} index={ci * 7 + 0} onOpen={onOpen} className="col-span-2" height="100%" textSize="large" />
              <div className="flex flex-col gap-3">
                {chunk[1] && <PhotoCard photo={chunk[1]} index={ci * 7 + 1} onOpen={onOpen} className="flex-1" height="100%" textSize="small" />}
                {chunk[2] && <PhotoCard photo={chunk[2]} index={ci * 7 + 2} onOpen={onOpen} className="flex-1" height="100%" textSize="small" />}
              </div>
            </div>
          )}
          {/* Ligne 2 : 3 égales */}
          {chunk[3] && (
            <div className="grid grid-cols-3 gap-3" style={{ height: 280 }}>
              {[chunk[3], chunk[4], chunk[5]].filter(Boolean).map((photo, j) => (
                <PhotoCard key={j} photo={photo} index={ci * 7 + 3 + j} onOpen={onOpen} className="" height="100%" textSize="medium" />
              ))}
            </div>
          )}
          {/* Ligne 3 : billboard plein width */}
          {chunk[6] && (
            <div style={{ height: 320 }}>
              <PhotoCard photo={chunk[6]} index={ci * 7 + 6} onOpen={onOpen} className="w-full" height="100%" textSize="hero" wide />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ══ CARTE PHOTO ════════════════════════════════════════════ */
function PhotoCard({ photo, index, onOpen, className = "", height = 280, textSize = "medium", wide = false }) {
  const [hovered, setHovered] = useState(false);

  const tagColors = {
    "TIT 2026": "#E53E3E", FINALE: "#D4A017", TROPHÉE: "#D4A017", TOURNOI: "#D4A017",
    MATCH: "#0B8F3A", ACTION: "#0B8F3A", GALA: "#0B8F3A",
    TRAINING: "#1a4a82", ÉQUIPE: "#1a4a82", PORTRAIT: "#4A1A8A",
  };
  const tagColor = tagColors[photo.tag] || "var(--g)";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer reveal ${className}`}
      style={{
        height,
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,.45), 0 0 0 2px rgba(11,143,58,.5)"
          : "0 8px 28px rgba(0,0,0,.22)",
        transform: hovered ? "scale(1.015)" : "scale(1)",
        transition: "transform .4s cubic-bezier(.4,0,.2,1), box-shadow .4s",
        zIndex: hovered ? 10 : 1,
      }}
      data-delay={index * 35}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(index)}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform .55s cubic-bezier(.4,0,.2,1)",
        }}
        onError={(e) => { e.target.style.background = "var(--gs)"; e.target.style.display = "none"; }}
      />

      {/* Gradients */}
      <div className="absolute inset-0" style={{
        background: wide
          ? "linear-gradient(90deg, rgba(5,20,10,.8) 0%, rgba(5,20,10,.3) 50%, rgba(0,0,0,0) 100%)"
          : "linear-gradient(to top, rgba(5,20,10,.85) 0%, rgba(5,20,10,.2) 50%, transparent 100%)",
      }}/>
      <div className="absolute inset-0 transition-opacity duration-400" style={{
        background: "linear-gradient(135deg, rgba(11,143,58,.35) 0%, transparent 70%)",
        opacity: hovered ? 1 : 0,
      }}/>

      {/* Tag */}
      <div className="absolute top-3 left-3">
        <span className="px-2.5 py-1 rounded-full font-bold text-white" style={{ background: tagColor, fontSize: 10, letterSpacing: ".1em" }}>
          {photo.tag}
        </span>
      </div>

      {/* Loupe hover */}
      <div
        className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300"
        style={{
          background: "rgba(255,255,255,.18)", backdropFilter: "blur(4px)",
          opacity: hovered ? 1 : 0, transform: hovered ? "scale(1)" : "scale(.7)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
          <circle cx="7" cy="7" r="4"/><line x1="11" y1="11" x2="15" y2="15"/>
        </svg>
      </div>

      {/* Caption */}
      <div className="absolute left-4 right-4" style={{ bottom: textSize === "small" ? 10 : 16 }}>
        {textSize === "hero" ? (
          <>
            <p className="font-display text-white mb-1" style={{ fontSize: "clamp(20px,2.5vw,32px)", lineHeight: 1.1 }}>{photo.caption}</p>
            <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,.5)", letterSpacing: ".12em" }}>SFC TENAKOUROU</p>
          </>
        ) : textSize === "large" ? (
          <p className="font-display text-white" style={{ fontSize: "clamp(18px,2vw,26px)", lineHeight: 1.2 }}>{photo.caption}</p>
        ) : textSize === "medium" ? (
          <p className="font-semibold text-white text-sm leading-snug">{photo.caption}</p>
        ) : (
          <p className="font-semibold text-white text-xs leading-snug">{photo.caption}</p>
        )}
      </div>
    </div>
  );
}

/* ══ PAGE GALERIE ════════════════════════════════════════════ */
export default function Galerie() {
  useScrollReveal();

  const [activeAlbum, setActiveAlbum] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const currentPhotos = activeAlbum === "all"
    ? ALL_PHOTOS
    : ALBUMS.find((a) => a.id === activeAlbum)?.photos || [];

  const openLightbox  = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const navLightbox   = useCallback((dir) => {
    setLightboxIndex((prev) => ((prev ?? 0) + dir + currentPhotos.length) % currentPhotos.length);
  }, [currentPhotos.length]);

  return (
    <>
      <PageHeader title="GALERIE" breadcrumb={["Galerie"]} />

      {/* ── Hero intro sombre ── */}
      <div
        className="relative overflow-hidden px-5 sm:px-8 py-14"
        style={{ background: "linear-gradient(135deg,var(--ink) 0%,var(--g3) 60%,var(--g2) 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}/>
        <div className="absolute inset-0 flex items-center justify-end pr-10 pointer-events-none select-none overflow-hidden">
          <span className="font-display text-white leading-none" style={{ fontSize: "clamp(80px,18vw,200px)", opacity: .04 }}>PHOTOS</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <SectionLabel>Mémoires du club</SectionLabel>
              <h2 className="font-display text-white leading-none mt-2" style={{ fontSize: "clamp(42px,6vw,80px)" }}>
                NOS MEILLEURS<br/><span style={{ color: "var(--gold)" }}>MOMENTS</span>
              </h2>
            </div>
            <div className="flex gap-8 text-white">
              {[
                { n: ALL_PHOTOS.length + "+", l: "Photos" },
                { n: ALBUMS.length,            l: "Albums" },
                { n: "2024–26",                l: "Saisons" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="font-display leading-none mb-0.5" style={{ fontSize: 36, color: "var(--gold)" }}>{s.n}</div>
                  <div className="text-xs font-semibold opacity-60 tracking-widest uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Filtres sticky ── */}
      <div
        className="sticky top-[76px] z-40 py-4 px-5 sm:px-8"
        style={{ background: "rgba(255,255,255,.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--bord)" }}
      >
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveAlbum("all")}
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition-all duration-200"
            style={{
              background: activeAlbum === "all" ? "var(--g)"  : "var(--gs)",
              color:      activeAlbum === "all" ? "white"      : "var(--g)",
              border:     activeAlbum === "all" ? "none"       : "1.5px solid var(--gm)",
              boxShadow:  activeAlbum === "all" ? "0 4px 16px rgba(11,143,58,.3)" : "none",
            }}
          >
            🖼️ Tous
            <span className="px-1.5 py-0.5 rounded-full text-xs font-bold"
              style={{ background: activeAlbum === "all" ? "rgba(255,255,255,.25)" : "var(--gm)", color: activeAlbum === "all" ? "white" : "var(--g3)" }}>
              {ALL_PHOTOS.length}
            </span>
          </button>

          {ALBUMS.map((album) => (
            <button
              key={album.id}
              onClick={() => setActiveAlbum(album.id)}
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition-all duration-200"
              style={{
                background: activeAlbum === album.id ? "var(--g)"  : "var(--gs)",
                color:      activeAlbum === album.id ? "white"      : "var(--g)",
                border:     activeAlbum === album.id ? "none"       : "1.5px solid var(--gm)",
                boxShadow:  activeAlbum === album.id ? "0 4px 16px rgba(11,143,58,.3)" : "none",
              }}
            >
              {album.icon} {album.label}
              <span className="px-1.5 py-0.5 rounded-full text-xs font-bold"
                style={{ background: activeAlbum === album.id ? "rgba(255,255,255,.25)" : "var(--gm)", color: activeAlbum === album.id ? "white" : "var(--g3)" }}>
                {album.photos.length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Grille Bento ── */}
      <section className="py-10 px-5 sm:px-8" style={{ background: "#0D1F16" }}>
        <div className="max-w-7xl mx-auto">
          <BentoGrid photos={currentPhotos} onOpen={openLightbox} />

          <div className="text-center mt-12">
            <a
              href="https://sfctenakourou.com/galerie-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,.08)", color: "white", border: "1.5px solid rgba(255,255,255,.15)" }}
            >
              Voir toutes les photos sur le site →
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={currentPhotos}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNav={navLightbox}
        />
      )}
    </>
  );
}
