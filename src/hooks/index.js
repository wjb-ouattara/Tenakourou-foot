// src/hooks/index.js
import { useEffect, useRef, useState } from "react";

/**
 * Anime les éléments .reveal au scroll (IntersectionObserver)
 * Doit être appelé dans chaque page/composant qui contient des .reveal
 *
 * Classes disponibles sur l'élément :
 *   .reveal            → fade + slide up (défaut)
 *   .reveal.from-left  → slide depuis gauche
 *   .reveal.from-right → slide depuis droite
 *   .reveal.scale-in   → zoom in
 *
 * Attribut data :
 *   data-delay="150"   → délai en ms
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.dataset.delay) || 0;
            setTimeout(() => entry.target.classList.add("visible"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    // Observer tous les éléments .reveal dans le DOM actuel
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }); // pas de deps → re-run à chaque rendu pour capter les nouveaux éléments
}

/**
 * Barre de progression de lecture
 * Nécessite un élément avec id="scroll-progress" dans le DOM
 */
export function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;

    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      bar.style.width = (window.scrollY / max) * 100 + "%";
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
}

/**
 * Ajoute la classe "solid" au nav#main-navbar
 * quand on dépasse scrollThreshold px
 */
export function useNavSolid(scrollThreshold = 70) {
  useEffect(() => {
    const nav = document.getElementById("main-navbar");
    if (!nav) return;

    const update = () =>
      nav.classList.toggle("solid", window.scrollY > scrollThreshold);

    window.addEventListener("scroll", update, { passive: true });
    update(); // check initial state
    return () => window.removeEventListener("scroll", update);
  }, [scrollThreshold]);
}

/**
 * Détecte quand un élément entre dans le viewport
 * Utile pour déclencher les animations de barres/anneaux SVG
 *
 * Usage :
 *   const { ref, triggered } = useIntersection();
 *   <section ref={ref}>
 *     <div style={{ width: triggered ? "75%" : "0%" }} />
 *   </section>
 */
export function useIntersection(threshold = 0.2) {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, triggered };
}


