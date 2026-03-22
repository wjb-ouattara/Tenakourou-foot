// src/pages/Joueurs.jsx
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { PLAYERS } from "../data/clubData";
import { SectionLabel } from "../components/ui";
import { useScrollReveal } from "../hooks";

/* ══ PALETTES PAR POSITION ══════════════════════════════════ */
const POS_CONFIG = {
  "Attaquant":        { short: "AT",  accent: "#E53E3E", grad: "linear-gradient(160deg,#2D0808,#8B1A1A,#C03030)" },
  "Milieu offensif":  { short: "MO",  accent: "#0B8F3A", grad: "linear-gradient(160deg,#043018,#0B8F3A,#15C44F)" },
  "Milieu défensif":  { short: "MD",  accent: "#1a6bcc", grad: "linear-gradient(160deg,#0a1a40,#1a4a9a,#2876CC)" },
  "Milieu gauche":    { short: "MG",  accent: "#C8920A", grad: "linear-gradient(160deg,#2a1800,#8A5200,#C8920A)" },
  "Ailier droit":     { short: "AD",  accent: "#8B30CC", grad: "linear-gradient(160deg,#1a0830,#5A1A9A,#8B30CC)" },
  "Défenseur central":{ short: "DC",  accent: "#1a6bcc", grad: "linear-gradient(160deg,#0a1a40,#1a4a9a,#2876CC)" },
  "Défenseur gauche": { short: "DG",  accent: "#6B3ACC", grad: "linear-gradient(160deg,#1a0a2a,#4A1A8A,#6C34A0)" },
  "Gardien de but":   { short: "GB",  accent: "#CC6B1A", grad: "linear-gradient(160deg,#2a1000,#8B3A0A,#CC6B1A)" },
};
const DEFAULT_POS = { short: "??", accent: "#0B8F3A", grad: "linear-gradient(160deg,#043018,#0B8F3A)" };

/* ══ HERO CINÉMATIQUE ════════════════════════════════════════ */
function HeroCinema() {
  const featured = PLAYERS.find(p => p.team === "A") || PLAYERS[0];
  const pos = POS_CONFIG[featured?.position] || DEFAULT_POS;

  return (
    <div
      className="relative overflow-hidden"
      style={{ minHeight: 520, background: "linear-gradient(135deg,#040D08 0%,#0A1F10 40%,#064D20 100%)" }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }}/>

      {/* Orbe lumineuse droite */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{
        background: `radial-gradient(ellipse at 80% 50%, ${pos.accent}25 0%, transparent 65%)`,
      }}/>

      {/* Ghost text géant */}
      <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
        <span className="font-display leading-none" style={{
          fontSize: "clamp(100px,20vw,280px)", opacity: .035, color: "white",
          marginLeft: "-2%", letterSpacing: "-.02em",
        }}>SQUAD</span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Texte gauche */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
              background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)",
              fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.6)", letterSpacing: ".15em",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: pos.accent, display: "inline-block" }}/>
              EFFECTIF 2025–26
            </div>

            <h1 className="font-display text-white leading-none mb-5" style={{ fontSize: "clamp(52px,7vw,96px)" }}>
              NOS<br/>
              <span style={{ color: "var(--gold)", WebkitTextStroke: "0px" }}>LIONS</span><br/>
              <span style={{ fontSize: "50%", opacity: .6, letterSpacing: ".08em" }}>DU PLATEAU</span>
            </h1>

            <p className="font-normal mb-8 max-w-md" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,.55)" }}>
              Des talents formés au Burkina Faso, portant avec fierté le maillot vert
              du SFC Tenakourou sur tous les terrains de la région.
            </p>

            {/* Mini stats */}
            <div className="flex gap-8">
              {[
                { n: PLAYERS.length,                             l: "Joueurs" },
                { n: PLAYERS.reduce((s,p)=>s+p.goals,0),        l: "Buts"    },
                { n: PLAYERS.reduce((s,p)=>s+p.assists,0),      l: "Passes"  },
              ].map(s=>(
                <div key={s.l}>
                  <div className="font-display leading-none mb-0.5" style={{ fontSize: 40, color: "var(--gold)" }}>{s.n}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,.4)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Carte joueur vedette droite */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              {/* Halo coloré */}
              <div className="absolute inset-0 rounded-3xl blur-3xl scale-90" style={{ background: `${pos.accent}40` }}/>

              <div className="relative rounded-3xl overflow-hidden" style={{
                width: 280, background: pos.grad,
                boxShadow: `0 40px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.1)`,
              }}>
                {/* Numéro filigrane */}
                <div className="absolute top-3 right-4 font-display text-white" style={{ fontSize: 72, opacity: .12, lineHeight: 1 }}>
                  #{featured?.number}
                </div>
                {/* Badge pos */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg font-display text-xs text-white" style={{ background: "rgba(255,255,255,.15)", letterSpacing: ".1em" }}>
                  {pos.short}
                </div>

                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <img src={featured?.image} alt={featured?.name}
                    className="w-full h-full object-cover object-top"
                    onError={e=>{e.target.style.display="none";e.target.parentElement.innerHTML="<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:80px;background:rgba(0,0,0,.2)'>👤</div>";}}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,.7),transparent 50%)" }}/>
                </div>

                <div className="p-4">
                  <div className="font-display text-white leading-none text-xl">{featured?.name?.split(" ")[0]?.toUpperCase()}</div>
                  <div className="text-xs mt-0.5 mb-3" style={{ color: "rgba(255,255,255,.45)" }}>{featured?.name?.split(" ").slice(1).join(" ")}</div>

                  {/* Stats FIFA mini */}
                  {featured?.stats && (
                    <div className="grid grid-cols-3 gap-1 rounded-xl p-2.5" style={{ background: "rgba(0,0,0,.35)" }}>
                      {Object.entries(featured.stats).map(([k,v])=>(
                        <div key={k} className="text-center">
                          <div className="font-display text-white" style={{ fontSize: 18 }}>{v}</div>
                          <div className="text-white font-bold uppercase" style={{ fontSize: 8, opacity: .45, letterSpacing: ".08em" }}>{k}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Badge STAR */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center font-display text-2xl" style={{ background: "var(--gold)", color: "#000", boxShadow: "0 4px 12px rgba(240,180,41,.5)" }}>
                  ★
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ══ CARTE FIFA PREMIUM ══════════════════════════════════════ */
function PlayerCard({ player, index, isSpotlight = false }) {
  const [flipped, setFlipped] = useState(false);
  const pos = POS_CONFIG[player.position] || DEFAULT_POS;
  const grad = player.cardGradient || pos.grad;
  const fifaStats = player.stats || { PAC:75,TIR:70,PAS:72,DRI:74,DEF:60,PHY:72 };
  const overall = Math.round(Object.values(fifaStats).reduce((a,v)=>a+v,0)/Object.keys(fifaStats).length);

  return (
    <div
      className="player-card-wrapper reveal"
      data-delay={index * 50}
      onClick={() => setFlipped(!flipped)}
      style={{ cursor: "pointer", minHeight: isSpotlight ? 480 : 420 }}
    >
      {/* ── FACE AVANT ── */}
      <div className="player-card-inner" style={{
        background: grad,
        minHeight: isSpotlight ? 480 : 420,
        display: flipped ? "none" : "block",
        position: "relative",
      }}>
        <div className="player-card-glare"/>

        {/* Motif de points */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px)",
          backgroundSize: "16px 16px",
        }}/>

        {/* Note globale + position */}
        <div className="absolute top-0 left-0 z-10 p-4">
          <div className="font-display text-white leading-none" style={{ fontSize: isSpotlight ? 60 : 50, textShadow: "0 4px 12px rgba(0,0,0,.4)" }}>
            {overall}
          </div>
          <div className="font-display tracking-widest" style={{ fontSize: 13, color: "rgba(255,255,255,.55)", marginTop: -2 }}>
            {pos.short}
          </div>
          <div style={{ fontSize: 18, marginTop: 4 }}>🇧🇫</div>
        </div>

        {/* Badge numéro droit */}
        <div className="absolute top-4 right-4 z-10">
          <div className="font-display text-white" style={{ fontSize: isSpotlight ? 68 : 56, opacity: .15, lineHeight: 1 }}>
            {player.number}
          </div>
        </div>

        {/* Séparateur décoratif */}
        <div className="absolute left-0 right-0 z-10" style={{ top: isSpotlight ? 112 : 96, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)" }}/>

        {/* Photo joueur */}
        <div className="relative overflow-hidden" style={{ height: isSpotlight ? 260 : 220 }}>
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover object-top"
            style={{ transform: "scale(1.05)", transformOrigin: "top center" }}
            onError={e=>{
              e.target.style.display="none";
              e.target.parentElement.innerHTML=`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:${isSpotlight?90:72}px;background:rgba(0,0,0,.15)">👤</div>`;
            }}
          />
          {/* Gradient bas photo */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,.75) 0%,transparent 55%)" }}/>
          {/* Gradient haut pour lisibilité note */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(0,0,0,.25) 0%,transparent 40%)" }}/>
        </div>

        {/* Nom + position tag */}
        <div className="px-4 pt-3 pb-1">
          <div className="font-display text-white leading-none" style={{ fontSize: isSpotlight ? 24 : 20 }}>
            {player.name.split(" ")[0].toUpperCase()}
          </div>
          <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,.45)", marginTop: 2 }}>
            {player.name.split(" ").slice(1).join(" ")}
          </div>
          <div className="flex items-center justify-between mt-2.5">
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold text-white" style={{
              background: `${pos.accent}55`, border: `1px solid ${pos.accent}88`, letterSpacing: ".06em",
            }}>
              {player.position}
            </span>
            <div className="flex gap-3 text-xs font-bold" style={{ color: "rgba(255,255,255,.6)" }}>
              <span>⚽ {player.goals}</span>
              <span>🎯 {player.assists}</span>
            </div>
          </div>
        </div>

        {/* Grille FIFA */}
        <div className="mx-3 mb-3 mt-2 grid grid-cols-3 gap-px rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,.4)" }}>
          {Object.entries(fifaStats).map(([k,v])=>(
            <div key={k} className="text-center py-2" style={{ background: "rgba(0,0,0,.25)" }}>
              <div className="font-display text-white leading-none" style={{ fontSize: isSpotlight ? 22 : 19, color: v>=85?"#F0B429":v>=75?"white":"rgba(255,255,255,.7)" }}>{v}</div>
              <div className="font-bold uppercase" style={{ fontSize: 8, color: "rgba(255,255,255,.4)", letterSpacing: ".1em" }}>{k}</div>
            </div>
          ))}
        </div>

        {/* Hint */}
        <div className="text-center pb-3 text-xs" style={{ color: "rgba(255,255,255,.2)" }}>
          ↕ voir les détails
        </div>
      </div>

      {/* ── FACE ARRIÈRE ── */}
      <div className="rounded-[20px] overflow-hidden text-white relative" style={{
        background: grad, minHeight: isSpotlight ? 480 : 420,
        display: flipped ? "flex" : "none", flexDirection: "column",
      }}>
        {/* Motif */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px)",
          backgroundSize: "16px 16px",
        }}/>

        {/* En-tête */}
        <div className="px-5 pt-5 pb-4 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}>
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0" style={{ border: "2px solid rgba(255,255,255,.2)" }}>
            <img src={player.image} alt="" className="w-full h-full object-cover object-top"
              onError={e=>{e.target.style.display="none";e.target.parentElement.innerHTML="<span style='font-size:24px;display:flex;align-items:center;justify-content:center;height:100%'>👤</span>";}}
            />
          </div>
          <div className="flex-1">
            <div className="font-display text-lg leading-none">{player.name.toUpperCase()}</div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,.5)" }}>{player.position} · N°{player.number}</div>
          </div>
          <div className="font-display text-right" style={{ fontSize: 36, color: "var(--gold)", lineHeight: 1 }}>
            {overall}
          </div>
        </div>

        {/* Barres stats */}
        <div className="px-5 py-4 space-y-3 flex-1">
          {Object.entries(fifaStats).map(([k,v])=>(
            <div key={k}>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span style={{ color: "rgba(255,255,255,.55)", letterSpacing: ".08em" }}>{k}</span>
                <span style={{ color: v>=85?"var(--gold)":v>=75?"white":"rgba(255,255,255,.55)" }}>{v}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,.12)" }}>
                <div className="h-full rounded-full" style={{
                  width: `${v}%`,
                  background: v>=85?"linear-gradient(90deg,#D4A017,#F0B429)":v>=75?"rgba(255,255,255,.7)":"rgba(255,255,255,.35)",
                  transition: "width 1s",
                }}/>
              </div>
            </div>
          ))}
        </div>

        {/* Stats saison */}
        <div className="mx-4 mb-4 grid grid-cols-3 gap-px rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,.4)" }}>
          {[{v:player.goals,l:"Buts"},{v:player.assists,l:"Passes D."},{v:`N°${player.number}`,l:"Maillot"}].map(s=>(
            <div key={s.l} className="text-center py-3" style={{ background: "rgba(0,0,0,.25)" }}>
              <div className="font-display text-white leading-none" style={{ fontSize: 22 }}>{s.v}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,.35)", letterSpacing: ".06em" }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div className="text-center pb-4 text-xs" style={{ color: "rgba(255,255,255,.2)" }}>↕ retour</div>
      </div>
    </div>
  );
}

/* ══ PAGE PRINCIPALE ════════════════════════════════════════ */
export default function Joueurs() {
  useScrollReveal();

  const [activeTeam, setActiveTeam] = useState("A");
  const [activePos,  setActivePos]  = useState("Tous");
  const [search,     setSearch]     = useState("");
  const [view,       setView]       = useState("grid"); // "grid" | "list"

  const teamPlayers = PLAYERS.filter(p => p.team === activeTeam);
  const teamGoals   = teamPlayers.reduce((s,p)=>s+p.goals,0);
  const teamAssists = teamPlayers.reduce((s,p)=>s+p.assists,0);

  const filtered = PLAYERS.filter(p => {
    const okTeam   = p.team === activeTeam;
    const okPos    = activePos === "Tous" || p.position === activePos;
    const okSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return okTeam && okPos && okSearch;
  });

  const positionsInTeam = ["Tous", ...new Set(teamPlayers.map(p=>p.position))];

  const spotlight = filtered[0];
  const rest      = filtered.slice(1);

  return (
    <>
      {/* ── HERO CINÉMATIQUE ── */}
      <HeroCinema />

      {/* ── BANDE STATS VERTE ── */}
      <div className="relative overflow-hidden" style={{ background: "var(--g)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg,rgba(0,0,0,.15) 0%,transparent 50%)" }}/>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {[
              { n: teamPlayers.length, l: "Joueurs", icon: "👥" },
              { n: teamGoals,          l: "Buts",    icon: "⚽" },
              { n: teamAssists,        l: "Passes",  icon: "🎯" },
              { n: "2025–26",          l: "Saison",  icon: "📅" },
            ].map((s,i)=>(
              <div key={i} className="reveal scale-in" data-delay={i*60}>
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-display leading-none mb-0.5" style={{ fontSize: 44, color: "var(--gold)" }}>{s.n}</div>
                <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,.6)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION PRINCIPALE ── */}
      <section style={{ background: "#0D1A10" }} className="pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14">

          {/* Titre + filtres */}
          <div className="flex flex-wrap items-end justify-between gap-5 mb-10 reveal">
            <div>
              <SectionLabel>Effectif</SectionLabel>
              <h2 className="font-display text-white leading-none mt-2" style={{ fontSize: "clamp(40px,5vw,68px)" }}>
                NOS JOUEURS
              </h2>
            </div>

            {/* Switcher équipe */}
            <div className="flex items-center gap-3">
              <div className="flex rounded-xl overflow-hidden" style={{ border: "1.5px solid rgba(255,255,255,.1)" }}>
                {["A","B"].map(team=>(
                  <button key={team} onClick={()=>{setActiveTeam(team);setActivePos("Tous");setSearch("");}}
                    className="px-6 py-2.5 font-bold text-sm transition-all duration-200"
                    style={{
                      background: activeTeam===team ? "var(--g)" : "rgba(255,255,255,.04)",
                      color:      activeTeam===team ? "white"    : "rgba(255,255,255,.45)",
                      boxShadow:  activeTeam===team ? "0 0 20px rgba(11,143,58,.5)" : "none",
                    }}>
                    Équipe {team}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filtres secondaires */}
          <div className="flex flex-wrap gap-3 mb-12 items-center reveal" data-delay="80">

            {/* Positions */}
            <div className="flex flex-wrap gap-2">
              {positionsInTeam.map(pos=>(
                <button key={pos} onClick={()=>setActivePos(pos)}
                  className="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
                  style={{
                    background: activePos===pos ? "var(--g)"              : "rgba(255,255,255,.06)",
                    color:      activePos===pos ? "white"                  : "rgba(255,255,255,.5)",
                    border:     activePos===pos ? "none"                   : "1px solid rgba(255,255,255,.1)",
                    boxShadow:  activePos===pos ? "0 4px 14px rgba(11,143,58,.4)" : "none",
                    letterSpacing: ".06em",
                  }}>
                  {pos === "Tous" ? "ALL" : POS_CONFIG[pos]?.short || pos}
                </button>
              ))}
            </div>

            {/* Recherche */}
            <div className="relative ml-auto">
              <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,.3)", fontSize: 14 }}>🔍</span>
              <input type="text" placeholder="Rechercher un joueur..." value={search} onChange={e=>setSearch(e.target.value)}
                className="pl-9 pr-4 py-2.5 rounded-xl text-sm font-medium outline-none"
                style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", color: "white", fontFamily: "'Outfit',sans-serif", minWidth: 200 }}
                onFocus={e=>e.target.style.borderColor="var(--g)"}
                onBlur={e=>e.target.style.borderColor="rgba(255,255,255,.1)"}
              />
            </div>

            {/* Compteur */}
            <span className="text-xs font-semibold px-3 py-2 rounded-xl" style={{ background: "rgba(255,255,255,.06)", color: "rgba(255,255,255,.4)", letterSpacing: ".08em" }}>
              {filtered.length} JOUEUR{filtered.length>1?"S":""}
            </span>
          </div>

          {/* ── VIDE ── */}
          {filtered.length === 0 && (
            <div className="text-center py-24 rounded-3xl" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
              <div className="text-5xl mb-3">🔍</div>
              <p className="font-display text-white text-2xl mb-2">AUCUN JOUEUR TROUVÉ</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,.4)" }}>Essaie un autre filtre</p>
              <button onClick={()=>{setSearch("");setActivePos("Tous");}} className="btn-outline mt-5 text-sm">
                Réinitialiser
              </button>
            </div>
          )}

          {/* ── SPOTLIGHT + GRILLE ── */}
          {filtered.length > 0 && (
            <>
              {/* Ligne spotlight + 3 cartes */}
              <div className="grid lg:grid-cols-4 gap-5 mb-5">
                {/* Joueur spotlight — prend 1 col mais plus grand */}
                {spotlight && (
                  <div className="lg:col-span-1">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="font-display text-xs tracking-widest" style={{ color: "var(--gold)", letterSpacing: ".18em" }}>⭐ SPOTLIGHT</span>
                    </div>
                    <PlayerCard player={spotlight} index={0} isSpotlight />
                  </div>
                )}

                {/* 3 cartes normales */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {rest.slice(0, 3).map((player, i) => (
                    <PlayerCard key={player.id} player={player} index={i + 1} />
                  ))}
                </div>
              </div>

              {/* Reste en grille 4 colonnes */}
              {rest.length > 3 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {rest.slice(3).map((player, i) => (
                    <PlayerCard key={player.id} player={player} index={i + 4} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── TOP BUTEURS ── */}
      <section className="py-20 px-5 sm:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Top buteurs */}
            <div className="reveal from-left">
              <SectionLabel>Palmarès</SectionLabel>
              <h3 className="font-display text-white leading-none mt-2 mb-8" style={{ fontSize: "clamp(32px,4vw,54px)" }}>
                TOP<br/><span style={{ color: "var(--gold)" }}>BUTEURS</span>
              </h3>

              <div className="space-y-3">
                {[...PLAYERS.filter(p=>p.team===activeTeam)].sort((a,b)=>b.goals-a.goals).slice(0,5).map((p,i)=>{
                  const pos = POS_CONFIG[p.position] || DEFAULT_POS;
                  return (
                    <div key={p.id} className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 hover:scale-[1.02]"
                      style={{ background: i===0?"rgba(240,180,41,.1)":"rgba(255,255,255,.04)", border: i===0?"1px solid rgba(240,180,41,.2)":"1px solid rgba(255,255,255,.07)" }}>

                      {/* Rang */}
                      <div className="font-display text-center flex-shrink-0" style={{
                        width: 36, height: 36, borderRadius: "50%",
                        background: i===0?"var(--gold)":i===1?"rgba(255,255,255,.15)":i===2?"rgba(255,255,255,.08)":"transparent",
                        color: i===0?"black":"rgba(255,255,255,.5)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: i===0?18:14,
                      }}>
                        {i===0?"👑":i+1}
                      </div>

                      {/* Photo mini */}
                      <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0" style={{ border: `2px solid ${pos.accent}55` }}>
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover object-top"
                          onError={e=>{e.target.style.display="none";e.target.parentElement.innerHTML="<span style='font-size:22px;display:flex;align-items:center;justify-content:center;height:100%'>👤</span>";}}
                        />
                      </div>

                      {/* Nom */}
                      <div className="flex-1">
                        <div className="font-bold text-sm text-white">{p.name}</div>
                        <div className="text-xs font-medium" style={{ color: pos.accent }}>{p.position}</div>
                      </div>

                      {/* Buts + barre */}
                      <div className="text-right flex-shrink-0">
                        <div className="font-display leading-none" style={{ fontSize: 32, color: i===0?"var(--gold)":"white" }}>{p.goals}</div>
                        <div className="text-xs" style={{ color: "rgba(255,255,255,.35)" }}>buts</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top passeurs */}
            <div className="reveal from-right">
              <SectionLabel>Palmarès</SectionLabel>
              <h3 className="font-display text-white leading-none mt-2 mb-8" style={{ fontSize: "clamp(32px,4vw,54px)" }}>
                TOP<br/><span style={{ color: "var(--g)" }}>PASSEURS</span>
              </h3>

              <div className="space-y-3">
                {[...PLAYERS.filter(p=>p.team===activeTeam)].sort((a,b)=>b.assists-a.assists).slice(0,5).map((p,i)=>{
                  const pos = POS_CONFIG[p.position] || DEFAULT_POS;
                  return (
                    <div key={p.id} className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 hover:scale-[1.02]"
                      style={{ background: i===0?"rgba(11,143,58,.12)":"rgba(255,255,255,.04)", border: i===0?"1px solid rgba(11,143,58,.3)":"1px solid rgba(255,255,255,.07)" }}>

                      <div className="font-display text-center flex-shrink-0" style={{
                        width: 36, height: 36, borderRadius: "50%",
                        background: i===0?"var(--g)":i===1?"rgba(255,255,255,.15)":"rgba(255,255,255,.08)",
                        color: i===0?"white":"rgba(255,255,255,.5)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: i===0?18:14,
                      }}>
                        {i===0?"👑":i+1}
                      </div>

                      <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0" style={{ border: `2px solid ${pos.accent}55` }}>
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover object-top"
                          onError={e=>{e.target.style.display="none";e.target.parentElement.innerHTML="<span style='font-size:22px;display:flex;align-items:center;justify-content:center;height:100%'>👤</span>";}}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="font-bold text-sm text-white">{p.name}</div>
                        <div className="text-xs font-medium" style={{ color: pos.accent }}>{p.position}</div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <div className="font-display leading-none" style={{ fontSize: 32, color: i===0?"var(--g)":"white" }}>{p.assists}</div>
                        <div className="text-xs" style={{ color: "rgba(255,255,255,.35)" }}>passes</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-5 sm:px-8 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,var(--g3) 0%,var(--g) 55%,var(--gl) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}/>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display text-white leading-none" style={{ fontSize: "clamp(80px,18vw,200px)", opacity: .04 }}>JOIN</span>
        </div>
        <div className="relative z-10 max-w-xl mx-auto reveal">
          <div className="text-5xl mb-4">🦁</div>
          <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(36px,5vw,58px)" }}>
            TU VEUX REJOINDRE<br/><span style={{ color: "var(--gold)" }}>LES LIONS ?</span>
          </h2>
          <p className="font-normal mb-7" style={{ fontSize: 15, color: "rgba(255,255,255,.68)", lineHeight: 1.8 }}>
            Venez vous faire remarquer lors de nos prochaines séances de détection. Une séance d'essai gratuite t'attend.
          </p>
          <Link to="/contact" className="btn-primary" style={{ background: "var(--gold)", color: "var(--ink)", fontWeight: 800, fontSize: 15, padding: "15px 36px" }}>
            Candidater maintenant →
          </Link>
        </div>
      </section>
    </>
  );
}
