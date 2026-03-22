// src/data/clubData.js
import logoImg from "./images/logo.jpeg";
// ─────────────────────────────────────────
// Données du SFC Tenakourou + vraies images
// ─────────────────────────────────────────

/* ── Images (vraies URLs du site sfctenakourou.com) ── */
export const ASSETS = {
  logo:       logoImg,
  heroBg: [
  "https://sfctenakourou.com/wp-content/uploads/2024/04/DSC_0409.jpg",
  "https://sfctenakourou.com/wp-content/uploads/2024/02/JOUR-FINAL-115-scaled.jpg",
  "https://sfctenakourou.com/wp-content/uploads/2024/04/FINALE-TIT-1ERE-EDITION-7-scaled.jpg",
  "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-344-111-scaled.jpg",
  "https://sfctenakourou.com/wp-content/uploads/2024/04/FINALE-TIT-3-30-scaled.jpg",
  "https://sfctenakourou.com/wp-content/uploads/2021/07/JOUR-FINAL-36-scaled.jpg",
],
  pageHeader: "https://sfctenakourou.com/wp-content/uploads/2024/04/01page-header-default.jpg",
  players: {
    p1: "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-58-scaled.jpg",
    p2: "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-67-scaled.jpg",
    p3: "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-72.jpg",
    p4: "https://sfctenakourou.com/wp-content/uploads/2024/02/JOUR-FINAL-108-scaled.jpg",
  },
  news: {
    n1: "https://sfctenakourou.com/wp-content/uploads/2024/02/JOUR-FINAL-56-scaled.jpg",
    n2: "https://sfctenakourou.com/wp-content/uploads/2021/07/JOUR-FINAL-36-scaled.jpg",
  },
  gallery: [
    "https://sfctenakourou.com/wp-content/uploads/2024/02/JOUR-FINAL-108-scaled.jpg",
    "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-58-scaled.jpg",
    "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-67-scaled.jpg",
    "https://sfctenakourou.com/wp-content/uploads/2024/04/DSC_0409.jpg",
    "https://sfctenakourou.com/wp-content/uploads/2024/02/JOUR-FINAL-56-scaled.jpg",
    "https://sfctenakourou.com/wp-content/uploads/2021/07/JOUR-FINAL-36-scaled.jpg",
  ],
};

/* ── Club info ── */
export const CLUB = {
  name:      "SFC Tenakourou",
  shortName: "TKR",
  city:      "Bobo-Dioulasso",
  country:   "Burkina Faso",
  email:     "sfctenakourou@gmail.com",
  phone:     "+226 00 00 00 00",
  address:   "Secteur 00 rue 00.00",
};

/* ── Navigation ── */
export const NAV_LINKS = [
  { label: "Accueil",    path: "/"          },
  { label: "Formation",  path: "/formation"  },
  { label: "Joueurs",    path: "/joueurs"    },
  { label: "À propos",   path: "/apropos"    },
  { label: "Actualité",  path: "/actualite"  },
  { label: "Galerie",    path: "/galerie"    },
  { label: "Contact",    path: "/contact"    },
];

/* ── Matchs ── */
// status: "done" | "live" | "soon"
export const MATCHES = [
  {
    home: "SFC Tenakourou",
    away: "AS Koudougou",
    homeScore: 2,
    awayScore: 0,
    date:  "12 Jan",
    time:  "16h00",
    status: "done",
    competition: "Championnat Régional",
  },
  {
    home: "SFC Tenakourou",
    away: "RC Bobo",
    homeScore: 0,
    awayScore: 0,
    date:  "Aujourd'hui",
    time:  "EN DIRECT",
    status: "live",
    competition: "Coupe Régionale",
  },
  {
    home: "FC Houet",
    away: "SFC Tenakourou",
    homeScore: null,
    awayScore: null,
    date:  "26 Jan",
    time:  "15h00",
    status: "soon",
    competition: "Championnat Régional",
  },
  {
    home: "SFC Tenakourou",
    away: "ASF Bobo",
    homeScore: null,
    awayScore: null,
    date:  "2 Fév",
    time:  "16h30",
    status: "soon",
    competition: "Championnat Régional",
  },
];

/* ── Joueurs ── */
export const PLAYERS = [
  {
    id: 1,
    name:     "Ali KY",
    position: "Attaquant",
    number:   9,
    goals:    8,
    assists:  3,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-58-scaled.jpg",
    cardGradient: "linear-gradient(160deg,#043018 0%,#0B8F3A 60%,#15C44F 100%)",
    team: "A",
  },
  {
    id: 2,
    name:     "Issouf TRAORÉ",
    position: "Milieu offensif",
    number:   10,
    goals:    5,
    assists:  7,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-72.jpg",
    cardGradient: "linear-gradient(160deg,#1a2e10 0%,#2d7a20 60%,#3aA030 100%)",
    team: "A",
  },
  {
    id: 3,
    name:     "Moussa SAWADOGO",
    position: "Défenseur central",
    number:   5,
    goals:    1,
    assists:  2,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-67-scaled.jpg",
    cardGradient: "linear-gradient(160deg,#0a1830 0%,#1a4a82 60%,#2876CC 100%)",
    team: "A",
  },
  {
    id: 4,
    name:     "Seydou COMPAORÉ",
    position: "Gardien de but",
    number:   1,
    goals:    0,
    assists:  0,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/02/JOUR-FINAL-108-scaled.jpg",
    cardGradient: "linear-gradient(160deg,#2a0808 0%,#8B2020 60%,#C03030 100%)",
    team: "A",
  },
  {
    id: 5,
    name:     "Ibrahim KONÉ",
    position: "Ailier droit",
    number:   7,
    goals:    4,
    assists:  5,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-67-scaled.jpg",
    cardGradient: "linear-gradient(160deg,#2a1a00 0%,#7A4800 60%,#B87000 100%)",
    team: "A",
  },
  {
    id: 6,
    name:     "Daouda OUÉDRAOGO",
    position: "Défenseur gauche",
    number:   3,
    goals:    0,
    assists:  4,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-72.jpg",
    cardGradient: "linear-gradient(160deg,#1a0a2a 0%,#4A1A8A 60%,#6C34A0 100%)",
    team: "A",
  },
  {
    id: 7,
    name:     "Hamidou BARRY",
    position: "Attaquant",
    number:   11,
    goals:    6,
    assists:  2,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-58-scaled.jpg",
    cardGradient: "linear-gradient(160deg,#043018 0%,#0B8F3A 60%,#15C44F 100%)",
    team: "B",
  },
  {
    id: 8,
    name:     "Saidou OUATTARA",
    position: "Milieu défensif",
    number:   6,
    goals:    2,
    assists:  3,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/02/JOUR-FINAL-108-scaled.jpg",
    cardGradient: "linear-gradient(160deg,#1a2e10 0%,#2d7a20 60%,#3aA030 100%)",
    team: "B",
  },
];

/* ── Formation steps ── */
export const FORMATION_STEPS = [
  {
    number: "01",
    title:  "Détection des Talents",
    desc:   "Nous scrutons les terrains locaux à la recherche des jeunes talents qui brilleront sur la scène du football burkinabè.",
    icon:   "🔍",
    link:   "/formation",
  },
  {
    number: "02",
    title:  "Analyse des Compétences",
    desc:   "Sur le terrain, les joueurs testent leurs capacités techniques et tactiques sous l'œil attentif de nos recruteurs.",
    icon:   "📊",
    link:   "/formation",
  },
  {
    number: "03",
    title:  "Au-delà du Terrain",
    desc:   "Nous cherchons des individus dotés d'une mentalité forte et d'une éthique de travail irréprochable.",
    icon:   "🧠",
    link:   "/formation",
  },
  {
    number: "04",
    title:  "Accompagnement Personnalisé",
    desc:   "Les joueurs sélectionnés bénéficient d'un encadrement sur mesure pour atteindre l'excellence.",
    icon:   "🏆",
    link:   "/formation",
  },
];

/* ── Actualités ── */
export const NEWS_ITEMS = [
  {
    id:       1,
    category: "TOURNOI",
    title:    "Vibrations Footballistiques : Retour sur le Tournoi Tenakourou",
    date:     "8 Avril 2024",
    readTime: "4 min",
    featured: true,
    image:    "https://sfctenakourou.com/wp-content/uploads/2021/07/JOUR-FINAL-36-scaled.jpg",
    summary:  "Un tournoi mémorable qui a réuni les meilleurs clubs de la région dans une ambiance festive et compétitive au cœur de Bobo-Dioulasso.",
    slug:     "tournoi-tenakourou",
  },
  {
    id:       2,
    category: "FORMATION",
    title:    "Maîtriser l'Art du Pressing : Comment Améliorer Votre Jeu",
    date:     "8 Fév 2024",
    readTime: "3 min",
    featured: false,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/02/JOUR-FINAL-56-scaled.jpg",
    summary:  "Notre staff technique partage les secrets d'un pressing efficace pour dominer l'adversaire sur tous les secteurs du terrain.",
    slug:     "comment-ameliorer-votre-jeu-au-football",
  },
  {
    id:       3,
    category: "RECRUTEMENT",
    title:    "Ouverture des inscriptions pour la saison 2025–2026",
    date:     "1 Jan 2025",
    readTime: "2 min",
    featured: false,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/04/DSC_0409.jpg",
    summary:  "Le SFC Tenakourou ouvre ses portes aux jeunes talents de la région. Rejoignez la famille verte !",
    slug:     "inscriptions-2025-2026",
  },
  {
    id:       4,
    category: "ACADÉMIE",
    title:    "Trois talents de l'académie brillent en sélection régionale",
    date:     "15 Mar 2025",
    readTime: "3 min",
    featured: false,
    image:    "https://sfctenakourou.com/wp-content/uploads/2024/04/JOUR-FINAL-67-scaled.jpg",
    summary:  "La politique de formation intensive porte ses fruits avec trois jeunes formés au club retenus pour représenter la région.",
    slug:     "talents-academie-selection",
  },
];

/* ── Classement ── */
export const STANDINGS = [
  { pos:1, team:"SFC Tenakourou",  p:14, w:10, d:2, l:2, gf:28, ga:10, pts:32, isUs:true,  form:["V","V","N","V","V"] },
  { pos:2, team:"FC Houet",        p:14, w:9,  d:2, l:3, gf:24, ga:13, pts:29, isUs:false, form:["V","D","V","V","N"] },
  { pos:3, team:"AS Koudougou",    p:14, w:8,  d:3, l:3, gf:21, ga:14, pts:27, isUs:false, form:["D","V","V","N","V"] },
  { pos:4, team:"RC Bobo",         p:14, w:7,  d:2, l:5, gf:19, ga:16, pts:23, isUs:false, form:["N","D","V","V","D"] },
  { pos:5, team:"ASF Bobo",        p:14, w:5,  d:4, l:5, gf:17, ga:18, pts:19, isUs:false, form:["V","D","N","D","V"] },
  { pos:6, team:"Étoile de l'Ouest",p:14,w:3, d:3, l:8, gf:13, ga:23, pts:12, isUs:false, form:["D","N","D","D","V"] },
  { pos:7, team:"AS Dédougou",     p:14, w:2,  d:2, l:10,gf:9,  ga:30, pts:8,  isUs:false, form:["D","D","D","N","D"] },
];

/* ── Stats équipe ── */
export const TEAM_STATS = {
  played:        14,
  wins:          10,
  draws:         2,
  losses:        2,
  goalsFor:      28,
  goalsAgainst:  10,
  points:        32,
  cleanSheets:   7,
  possession:    61,
  passAccuracy:  84,
  recentForm:    ["V","V","N","V","V"],
};
