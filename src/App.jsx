// src/App.jsx
// ─────────────────────────────────────────────
// Router principal — React Router DOM v7
// Toutes les routes sont enveloppées par MainLayout
// ─────────────────────────────────────────────

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout   from "./layouts/MainLayout";
import Home         from "./pages/Home";
import Formation    from "./pages/Formation";
import Joueurs      from "./pages/Joueurs";
import Apropos      from "./pages/Apropos";
import Actualite    from "./pages/Actualite";
import Galerie      from "./pages/Galerie";
import Contact      from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          MainLayout est le layout parent :
          il contient Navbar + Footer + LiveTicker
          Toutes les pages sont rendues dans <Outlet />
        */}
        <Route element={<MainLayout />}>
          <Route index         element={<Home />}       />
          <Route path="formation" element={<Formation />} />
          <Route path="joueurs"   element={<Joueurs />}   />
          <Route path="apropos"   element={<Apropos />}   />
          <Route path="actualite" element={<Actualite />} />
          <Route path="galerie"   element={<Galerie />}   />
          <Route path="contact"   element={<Contact />}   />

          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
                <div className="font-display text-8xl" style={{ color: "var(--g)" }}>
                  404
                </div>
                <p className="text-lg font-semibold" style={{ color: "var(--muted)" }}>
                  Page introuvable
                </p>
                <a href="/" className="btn-primary">
                  Retour à l'accueil
                </a>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
