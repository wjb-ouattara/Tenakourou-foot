// Fragment à intégrer dans Apropos.jsx
// Importe STAFF depuis clubData et ajoute <StaffSection /> dans le return

import { useState } from "react";
import { STAFF } from "../data/clubData";
import { SectionLabel } from "../components/ui";

function StaffCard({ member, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="reveal"
      data-delay={index * 60}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        cursor: "default",
        background: hov ? member.color : "rgba(255,255,255,.04)",
        border: hov ? `1px solid ${member.accent}55` : "1px solid rgba(255,255,255,.07)",
        transform: hov ? "translateY(-8px)" : "none",
        boxShadow: hov ? `0 24px 60px rgba(0,0,0,.5), 0 0 0 1px ${member.accent}30` : "none",
        transition: "all .35s cubic-bezier(.4,0,.2,1)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          style={{ transform: hov ? "scale(1.07)" : "scale(1)", transition: "transform .55s" }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML = `
              <div style="
                width:100%;height:100%;
                display:flex;align-items:center;justify-content:center;
                background:linear-gradient(135deg,rgba(11,143,58,.15),rgba(11,143,58,.04));
                font-size:64px;
              ">${member.icon}</div>`;
          }}
        />
        {/* Gradient bas */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,.7),transparent 50%)" }}/>
        {/* Icône coin haut droit */}
        <div className="absolute top-3 right-3 text-2xl">{member.icon}</div>
        {/* Dept badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 rounded-lg text-xs font-bold text-white"
            style={{ background: "rgba(0,0,0,.4)", backdropFilter: "blur(8px)", fontSize: 9, letterSpacing: ".1em" }}>
            {member.dept.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="font-display text-white leading-tight mb-1" style={{ fontSize: 16, letterSpacing: ".04em" }}>
          {member.name.toUpperCase()}
        </div>
        <div className="font-bold text-xs tracking-widest" style={{ color: member.accent, letterSpacing: ".1em" }}>
          {member.role.toUpperCase()}
        </div>
        {/* Ligne déco hover */}
        <div className="mt-3 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,.07)" }}>
          <div className="h-full rounded-full transition-all duration-500"
            style={{ width: hov ? "100%" : "0%", background: member.accent }}
          />
        </div>
      </div>
    </div>
  );
}

export function StaffSection() {
  const direction  = STAFF.filter(s => s.dept === "Direction" || s.dept === "Administration");
  const technique  = STAFF.filter(s => s.dept === "Staff Technique");

  return (
    <section className="py-24 px-5 sm:px-8" style={{ background: "#071A0B" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-5 mb-14">
          <div className="reveal">
            <SectionLabel>Les hommes du club</SectionLabel>
            <h2 className="font-display text-white leading-none mt-3" style={{ fontSize: "clamp(40px,5.5vw,70px)" }}>
              DIRECTION &<br/>
              <span style={{ color: "var(--gold)" }}>STAFF TECHNIQUE</span>
            </h2>
          </div>
          <p className="text-sm font-normal max-w-xs reveal" style={{ color: "rgba(255,255,255,.35)", lineHeight: 1.8 }}>
            Les hommes et femmes qui œuvrent chaque jour pour hisser le SFC Tenakourou au sommet.
          </p>
        </div>

        {/* Direction */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6 reveal">
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,.07)" }}/>
            <span className="font-display text-xs tracking-widest px-4 py-2 rounded-full"
              style={{ color: "var(--gold)", border: "1px solid rgba(240,180,41,.2)", letterSpacing: ".2em" }}>
              DIRECTION
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,.07)" }}/>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {direction.map((member, i) => <StaffCard key={member.id} member={member} index={i} />)}
          </div>
        </div>

        {/* Staff Technique */}
        <div>
          <div className="flex items-center gap-4 mb-6 reveal">
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,.07)" }}/>
            <span className="font-display text-xs tracking-widest px-4 py-2 rounded-full"
              style={{ color: "var(--g)", border: "1px solid rgba(11,143,58,.25)", letterSpacing: ".2em" }}>
              STAFF TECHNIQUE
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,.07)" }}/>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technique.map((member, i) => <StaffCard key={member.id} member={member} index={i} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
