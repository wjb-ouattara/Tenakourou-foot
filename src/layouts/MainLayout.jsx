// src/layouts/MainLayout.jsx
// ─────────────────────────────────────────────
// Layout principal — encadre toutes les pages
// Contient : Navbar + ScrollProgressBar + page content + Footer + LiveTicker
// ─────────────────────────────────────────────

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar                           from "../components/Navbar";
import Footer                           from "../components/Footer";
import { LiveTicker, ScrollProgressBar } from "../components/ui";
import { useScrollProgress, useScrollReveal } from "../hooks";

/* ── Scroll to top on route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/* ── MainLayout ── */
export default function MainLayout() {
  // Barre de progression de lecture
  useScrollProgress();

  // Re-run des animations reveal à chaque rendu (nouvelle page)
  useScrollReveal();

  return (
    <>
      {/* Barre de progression top de page */}
      <ScrollProgressBar />

      {/* Scroll to top à chaque navigation */}
      <ScrollToTop />

      {/* Navigation fixe */}
      <Navbar />

      {/* Contenu de la page courante (injecté par React Router) */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Ticker match live (affiché globalement) */}
      <LiveTicker />
    </>
  );
}
