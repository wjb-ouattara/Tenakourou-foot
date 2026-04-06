// src/data/clubData.js
import logo     from "/images/players/logo.png";
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
import hero15   from "/images/blog/tournoi-tit-affiche.jpeg";
import hero16   from "/images/blog/tournoi-tit-academies.jpeg";
import hero17   from "/images/blog/tournoi-tit-conditions.jpeg";
import hero21   from "/images/players/21.jpg"
import hero28   from "/images/players/28.jpg"
import hero25   from "/images/players/25.jpg"
// ─────────────────────────────────────────
// Données du SFC Tenakourou + vraies images
// ─────────────────────────────────────────

/* ── Assets globaux ── */
export const ASSETS = {
  logo: logo,
  heroBg: [hero1, hero2, hero3, hero5, hero15],
  pageHeader:
    hero21,
  gallery: [
   hero4,hero7,hero13, hero6, hero10, hero11
  ],
};

/* ── Infos club ── */
export const CLUB = {
  name:      "Sporting Football Club Tenakourou",
  shortName: "SFC Tenakourou",
  city:      "Bobo-Dioulasso",
  country:   "Burkina Faso",
  email:     "sfctenakourou@gmail.com",
  phone:     "+226 00 00 00 00",
  address:   "Bobo-Dioulasso, Burkina Faso",
  founded:   2018,
};

/* ── Navigation ── */
export const NAV_LINKS = [
  { label: "Accueil",    path: "/"          },
  { label: "Formation",  path: "/formation" },
  { label: "Joueurs",    path: "/joueurs"   },
  { label: "À propos",   path: "/apropos"   },
  { label: "Actualité",  path: "/actualite" },
  { label: "Galerie",    path: "/galerie"   },
  { label: "Contact",    path: "/contact"   },
];

/* ══ TEXTES OFFICIELS DU CLUB ════════════════════════════════ */

/* Texte 1 — Histoire (À propos + Home) */
export const TEXT_HISTOIRE = {
  accroche: "La passion du football comme point commun",
  intro:
    "Le projet TENAKOUROU est le fruit de la rencontre entre des personnes ayant un point commun : la passion du football.",
  corps:
    "Un projet réfléchi, conçu depuis les années 2012 à Bruxelles par deux hommes : Dr Kassoum TRAORE et Monsieur Dany Mohamed SIDIBE. Il a finalement été porté sur les fonts baptismaux en janvier 2018 avec l'ouverture de l'Académie de football TENAKOUROU à Gouanghin. Suivra en 2020 l'ouverture de l'annexe à Niangoloko. Ces deux structures ont pour mission d'associer aux études scolaires, la pratique du football.",
  clubs:
    "De ces deux académies naissent deux clubs de football masculin : le Sporting Football des Cascades (aujourd'hui Sporting Football des Tannounyan), club de Ligue 1 du Faso Foot, et le Sporting Football Club (aujourd'hui TENAKOUROU Académie), club de Ligue 2 du Faso Foot.",
  fondateurs: [
    { nom: "Dr Kassoum TRAORE",      role: "Co-fondateur" },
    { nom: "Dany Mohamed SIDIBE",    role: "Co-fondateur" },
  ],
};

/* Texte 2 — Tournoi 2026 (Actualité — article featured) */
export const TEXT_TOURNOI = {
  titre:      "Tournoi International Tenakourou 2026 : la jeunesse au rendez-vous",
  edition:    "2ᵉ édition",
  dates:      "21 – 24 Mai 2026",
  lieu:       "Ouagadougou",
  categories: "U15 / U17 · Générations 2008–2010",
  intro:
    "La 2ᵉ édition du Tournoi International Tenakourou se tiendra du 21 au 24 mai 2026 à Ouagadougou. Une compétition U15/U17 (générations 2008–2010) qui promet du spectacle et la révélation de nouveaux talents du football africain.",
  conclusion:
    "Un tournoi court, intense et prometteur, où chaque match comptera pour atteindre le sommet.",
  poules: [
    {
      nom:    "Poule A",
      emoji:  "🔴",
      color:  "#E53E3E",
      desc:   "Une poule très relevée avec des académies ambitieuses :",
      equipes: [
        "Sporting Football des Tannounyan",
        "Real du Faso",
        "Basga Jo",
        "Académie Traoré Massé",
      ],
    },
    {
      nom:    "Poule B",
      emoji:  "🟡",
      color:  "#F0B429",
      desc:   "Une autre poule tout aussi compétitive :",
      equipes: [
        "Tenakourou Académie",
        "Rahimo Football Club",
        "Étoile du Mandé",
        "News Stars",
      ],
    },
  ],
};

/* Texte 3 — Progression saison (À propos — section Stats) */
export const TEXT_PROGRESSION = {
  titre:  "Progression de l'équipe",
  intro:
    "Grâce au travail rigoureux de l'entraîneur et à l'engagement de tout son staff, l'équipe a connu une progression remarquable.",
  ligue1:
    "Lors de la saison 2024/2025 en Ligue 1 du FasoFoot, le groupe a su franchir un cap important, tant sur le plan du jeu que des résultats. Cette évolution s'est concrétisée par une belle 7ᵉ place au classement, témoignant de la régularité et de la solidité de l'équipe tout au long de la saison.",
  coupe:
    "Par ailleurs, le parcours en Coupe du Faso a été tout aussi impressionnant, avec une qualification jusqu'en finale, disputée face au Rahimo FC.",
  bilan:
    "Ces performances reflètent le sérieux du travail accompli, la cohésion du groupe et la vision portée par le staff technique.",
  chiffres: [
    { n: "7ᵉ",  label: "Place Ligue 1 FasoFoot" },
    { n: "2024/25", label: "Saison de référence" },
    { n: "Finale", label: "Coupe du Faso" },
    { n: "Rahimo FC", label: "Adversaire en finale" },
  ],
};

/* ══ STAFF DIRIGEANTS ════════════════════════════════════════
   Photos → public/images/staff/president.jpg etc.
   Si photo absente → icône affichée automatiquement
══════════════════════════════════════════════════════════════ */
export const STAFF = [
  /* ── Direction ── */
  {
    id:    1,
    name:  "Aboudramane HEMA",
    role:  "Président",
    dept:  "Direction",
    photo: "/images/staff/president.jpeg",
    icon:  "👑",
    color: "linear-gradient(135deg,#054D20,#0B8F3A)",
    accent: "#0B8F3A",
  },
  {
    id:    2,
    name:  "Serge KARAMA",
    role:  "Vice-Président",
    dept:  "Direction",
    photo: "/images/staff/vice-president.jpeg",
    icon:  "🤝",
    color: "linear-gradient(135deg,#0a1830,#1a4a82)",
    accent: "#1a4a82",
  },
  {
    id:    3,
    name:  "Karamogo TRAORE",
    role:  "Responsable Trésorerie",
    dept:  "Administration",
    photo: "/images/staff/tresorier.jpeg",
    icon:  "💼",
    color: "linear-gradient(135deg,#2a1800,#8A5200)",
    accent: "#C8920A",
  },
  {
    id:    4,
    name:  "Drissa SAKO",
    role:  "Directeur Sportif",
    dept:  "Administration",
    photo: "/images/staff/directeur-sportif.jpeg",
    icon:  "📋",
    color: "linear-gradient(135deg,#1a0830,#5A1A9A)",
    accent: "#8B30CC",
  },
  /* ── Staff technique ── */
  {
    id:    5,
    name:  "Nambé Idriss SITIONON",
    role:  "Coach Principal",
    dept:  "Staff Technique",
    photo: "/images/staff/coach-principal.jpeg",
    icon:  "🎯",
    color: "linear-gradient(135deg,#043018,#0B8F3A)",
    accent: "#15C44F",
  },
  {
    id:    6,
    name:  "Lingani Jean Noël",
    role:  "Coach Adjoint",
    dept:  "Staff Technique",
    photo: "/images/staff/coach-adjoint.jpeg",
    icon:  "⚽",
    color: "linear-gradient(135deg,#1a2e10,#2d7a20)",
    accent: "#3aA030",
  },
  {
    id:    7,
    name:  "Fofana BAKARY",
    role:  "Coach des Gardiens",
    dept:  "Staff Technique",
    photo: "/images/staff/coach-gardiens.jpeg",
    icon:  "🧤",
    color: "linear-gradient(135deg,#2a0808,#8B2020)",
    accent: "#CC4040",
  },
  {
    id:    8,
    name:  "Ouedraogo EULOGE",
    role:  "Préparateur Physique",
    dept:  "Staff Technique",
    photo: "/images/staff/preparateur.jpeg",
    icon:  "💪",
    color: "linear-gradient(135deg,#2a1a00,#7A4800)",
    accent: "#B87000",
  },
];

/* ══ MATCHS ══════════════════════════════════════════════════ */
export const MATCHES = [
  {
    home: "SFC Tenakourou", away: "AS Koudougou",
    homeScore: 2, awayScore: 0,
    date: "12 Jan", time: "16h00", status: "done",
    competition: "Championnat Régional",
  },
  {
    home: "SFC Tenakourou", away: "RC Bobo",
    homeScore: 0, awayScore: 0,
    date: "Aujourd'hui", time: "EN DIRECT", status: "live",
    competition: "Coupe Régionale",
  },
  {
    home: "FC Houet", away: "SFC Tenakourou",
    homeScore: null, awayScore: null,
    date: "26 Jan", time: "15h00", status: "soon",
    competition: "Championnat Régional",
  },
  {
    home: "SFC Tenakourou", away: "ASF Bobo",
    homeScore: null, awayScore: null,
    date: "2 Fév", time: "16h30", status: "soon",
    competition: "Championnat Régional",
  },
];

/* ════════════════════════════ JOUEURS ═════════════════════════════════════════════════ */
export const PLAYERS = [
  {
    id: 1,
    name: "Ali",
    position: "Attaquant",
    number: 9,
    goals: 8,
    assists: 3,
    image: hero4,
    cardGradient: "linear-gradient(160deg,#043018 0%,#0B8F3A 60%,#15C44F 100%)",
    team: "A",
    stats: { PAC: 88, TIR: 85, PAS: 70, DRI: 87, DEF: 40, PHY: 76 },
  },
  {
    id: 2,
    name: "Issouf",
    position: "Milieu offensif",
    number: 10,
    goals: 5,
    assists: 7,
    image: hero10,
    cardGradient: "linear-gradient(160deg,#1a2e10 0%,#2d7a20 60%,#3aA030 100%)",
    team: "A",
    stats: { PAC: 80, TIR: 75, PAS: 88, DRI: 84, DEF: 62, PHY: 73 },
  },
  {
    id: 3,
    name: "Moussa",
    position: "Défenseur central",
    number: 5,
    goals: 1,
    assists: 2,
    image: hero11,
    cardGradient: "linear-gradient(160deg,#0a1830 0%,#1a4a82 60%,#2876CC 100%)",
    team: "A",
    stats: { PAC: 74, TIR: 52, PAS: 68, DRI: 69, DEF: 91, PHY: 88 },
  },
  {
    id: 4,
    name: "Seydou",
    position: "Gardien de but",
    number: 1,
    goals: 0,
    assists: 0,
    image: hero6,
    cardGradient: "linear-gradient(160deg,#2a0808 0%,#8B2020 60%,#C03030 100%)",
    team: "A",
    stats: { PAC: 58, TIR: 44, PAS: 60, DRI: 48, DEF: 76, PHY: 86 },
  },
  {
    id: 5,
    name: "Ibrahim",
    position: "Ailier droit",
    number: 7,
    goals: 4,
    assists: 5,
    image: hero7,
    cardGradient: "linear-gradient(160deg,#2a1a00 0%,#7A4800 60%,#B87000 100%)",
    team: "A",
    stats: { PAC: 91, TIR: 78, PAS: 74, DRI: 86, DEF: 48, PHY: 70 },
  },
  {
    id: 6,
    name: "Daouda",
    position: "Défenseur gauche",
    number: 3,
    goals: 0,
    assists: 4,
    image: hero12,
    cardGradient: "linear-gradient(160deg,#1a0a2a 0%,#4A1A8A 60%,#6C34A0 100%)",
    team: "A",
    stats: { PAC: 82, TIR: 50, PAS: 76, DRI: 78, DEF: 85, PHY: 80 },
  },
  {
    id: 7,
    name: "Hamidou",
    position: "Attaquant",
    number: 11,
    goals: 6,
    assists: 2,
    image: hero4,
    cardGradient: "linear-gradient(160deg,#043018 0%,#0B8F3A 60%,#15C44F 100%)",
    team: "B",
    stats: { PAC: 86, TIR: 80, PAS: 68, DRI: 82, DEF: 42, PHY: 74 },
  },
  {
    id: 8,
    name: "Saidou",
    position: "Milieu défensif",
    number: 6,
    goals: 2,
    assists: 3,
    image:hero4,
    cardGradient: "linear-gradient(160deg,#1a2e10 0%,#2d7a20 60%,#3aA030 100%)",
    team: "B",
    stats: { PAC: 76, TIR: 65, PAS: 82, DRI: 74, DEF: 84, PHY: 82 },
  },
];

/* ══ FORMATION STEPS ════════════════════════════════════════ */
export const FORMATION_STEPS = [
  { number: "01", title: "Détection des Talents",       desc: "Nous scrutons les terrains locaux à la recherche des jeunes talents qui brilleront sur la scène du football burkinabè.", icon: "🔍" },
  { number: "02", title: "Analyse des Compétences",     desc: "Sur le terrain, les joueurs testent leurs capacités techniques et tactiques sous l'œil attentif de nos recruteurs.",     icon: "📊" },
  { number: "03", title: "Au-delà du Terrain",          desc: "Nous cherchons des individus dotés d'une mentalité forte et d'une éthique de travail irréprochable.",                    icon: "🧠" },
  { number: "04", title: "Accompagnement Personnalisé", desc: "Les joueurs sélectionnés bénéficient d'un encadrement sur mesure pour atteindre l'excellence.",                          icon: "🏆" },
];

/* ══ ACTUALITÉS ═════════════════════════════════════════════ */
export const NEWS_ITEMS = [
  {
    id: 1,
    category: "TOURNOI",
    title: "Tournoi International Tenakourou 2026 : la jeunesse au rendez-vous",
    date: "1 Avr 2026",
    readTime: "3 min",
    featured: true,
    image: hero15,
    summary: "La 2ᵉ édition du Tournoi International Tenakourou se tiendra du 21 au 24 mai 2026 à Ouagadougou. Une compétition U15/U17 qui promet du spectacle et la révélation de nouveaux talents.",
  },
  {
    id: 2,
    category: "RÉSULTAT",
    title: "7ᵉ place en Ligue 1 FasoFoot : une saison de progression remarquable",
    date: "15 Mar 2026",
    readTime: "4 min",
    featured: false,
    image: hero16,
    summary: "Grâce au travail rigoureux du staff, l'équipe a connu une progression remarquable lors de la saison 2024/2025, terminant à une belle 7ᵉ place.",
  },
  {
    id: 3,
    category: "COUPE",
    title: "Finale de la Coupe du Faso : un parcours historique face à Rahimo FC",
    date: "10 Mar 2026",
    readTime: "3 min",
    featured: false,
    image: hero17,
    summary: "Le parcours en Coupe du Faso a été impressionnant avec une qualification jusqu'en finale, disputée face au Rahimo FC. Un exploit historique.",
  },
  {
    id: 4,
    category: "ACADÉMIE",
    title: "L'histoire du projet Tenakourou : de Bruxelles à Bobo-Dioulasso",
    date: "8 Avr 2024",
    readTime: "5 min",
    featured: false,
    image: hero11,
    summary: "De sa conception à Bruxelles en 2012 à son ouverture en 2018, le projet TENAKOUROU incarne la passion du football associée à l'excellence académique.",
  },
  {
    id: 5,
    category: "FORMATION",
    title: "Maîtriser l'Art du Pressing : Améliorer Votre Jeu",
    date: "8 Fév 2024",
    readTime: "3 min",
    featured: false,
    image: hero28,
    summary: "Notre staff technique partage les secrets d'un pressing efficace pour dominer l'adversaire sur tous les secteurs du terrain.",
  },
  {
    id: 6,
    category: "RECRUTEMENT",
    title: "Ouverture des inscriptions — Académie Tenakourou 2025–2026",
    date: "1 Jan 2025",
    readTime: "2 min",
    featured: false,
    image: hero25,
    summary: "Le SFC Tenakourou ouvre ses portes aux jeunes talents de la région. Rejoignez la famille verte pour la saison 2025–2026 !",
  },
];

/* ══ CLASSEMENT ═════════════════════════════════════════════ */
export const STANDINGS = [
  { pos:1, team:"SFC Tenakourou",    p:14, w:10, d:2, l:2,  gf:28, ga:10, pts:32, isUs:true,  form:["V","V","N","V","V"] },
  { pos:2, team:"FC Houet",          p:14, w:9,  d:2, l:3,  gf:24, ga:13, pts:29, isUs:false, form:["V","D","V","V","N"] },
  { pos:3, team:"AS Koudougou",      p:14, w:8,  d:3, l:3,  gf:21, ga:14, pts:27, isUs:false, form:["D","V","V","N","V"] },
  { pos:4, team:"RC Bobo",           p:14, w:7,  d:2, l:5,  gf:19, ga:16, pts:23, isUs:false, form:["N","D","V","V","D"] },
  { pos:5, team:"ASF Bobo",          p:14, w:5,  d:4, l:5,  gf:17, ga:18, pts:19, isUs:false, form:["V","D","N","D","V"] },
  { pos:6, team:"Étoile de l'Ouest", p:14, w:3,  d:3, l:8,  gf:13, ga:23, pts:12, isUs:false, form:["D","N","D","D","V"] },
  { pos:7, team:"AS Dédougou",       p:14, w:2,  d:2, l:10, gf:9,  ga:30, pts:8,  isUs:false, form:["D","D","D","N","D"] },
];

/* ══ STATS ÉQUIPE ════════════════════════════════════════════ */
export const TEAM_STATS = {
  played:       14,
  wins:         10,
  draws:        2,
  losses:       2,
  goalsFor:     28,
  goalsAgainst: 10,
  points:       32,
  cleanSheets:  7,
  possession:   61,
  passAccuracy: 84,
  ranking:      7,
  recentForm:   ["V","V","N","V","V"],
};
