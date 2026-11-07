"use client";

import { useEffect } from "react";

/**
 * The page is server rendered and fully readable without scripts.
 * This adds the motion on top: scroll reveals, the hero fallback, the quiet glow,
 * the cursor light on card rims and the magnetic buttons.
 */
export function SiteEffects() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");

    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controller = new AbortController();
    const { signal } = controller;
    const observers: IntersectionObserver[] = [];

    function observe(callback: IntersectionObserverCallback, options: IntersectionObserverInit, targets: Element[]) {
      const observer = new IntersectionObserver(callback, options);
      targets.forEach((target) => observer.observe(target));
      observers.push(observer);
      return observer;
    }

    // Scroll reveals.
    const revealObserver = observe(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
      [...document.querySelectorAll(".reveal")],
    );

    // No green glow behind the Experience text: it fades out while that section is on screen.
    const ambient = document.querySelector(".ambient");
    const experience = document.getElementById("experience");
    if (ambient && experience) {
      observe(
        ([entry]) => ambient.classList.toggle("quiet", entry.isIntersecting),
        { rootMargin: "0px 0px -8% 0px" },
        [experience],
      );
    }

    // Hero flatten for browsers without scroll timelines.
    const stage = document.getElementById("stage");
    const nameBox = document.querySelector(".name-box");
    if (!CSS.supports("animation-timeline: scroll()") && !reduceMotion && stage && nameBox) {
      observe(
        ([entry]) => stage.classList.toggle("flat", entry.intersectionRatio < 0.5),
        { threshold: [0, 0.5, 1] },
        [nameBox],
      );
    }

    // Tabbing backwards must not leave focus hidden under the next sticky card.
    for (const card of document.querySelectorAll(".card")) {
      card.addEventListener(
        "focusin",
        () => {
          const next = card.nextElementSibling;
          if (!next?.classList.contains("sentinel") || getComputedStyle(card).position !== "sticky") return;
          const y = next.getBoundingClientRect().top + scrollY - innerHeight;
          if (scrollY > y) window.scrollTo({ top: y, behavior: "instant" });
        },
        { signal },
      );
    }

    if (!reduceMotion && matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)").matches) {
      // Cursor light on card rims.
      for (const shell of document.querySelectorAll<HTMLElement>("[data-rim]")) {
        const light = shell.querySelector<HTMLElement>(":scope > .rim > i");
        if (!light) continue;
        let queued = false;
        let x = 0;
        let y = 0;
        shell.addEventListener(
          "pointermove",
          (event) => {
            x = event.clientX;
            y = event.clientY;
            if (queued) return;
            queued = true;
            requestAnimationFrame(() => {
              queued = false;
              const box = shell.getBoundingClientRect();
              light.style.transform = `translate3d(${x - box.left}px, ${y - box.top}px, 0)`;
            });
          },
          { passive: true, signal },
        );
      }

      // Slightly magnetic buttons.
      for (const button of document.querySelectorAll<HTMLElement>("[data-magnetic]")) {
        let queued = false;
        let dx = 0;
        let dy = 0;
        button.addEventListener(
          "pointermove",
          (event) => {
            const box = button.getBoundingClientRect();
            dx = (event.clientX - box.left - box.width / 2) * 0.12;
            dy = (event.clientY - box.top - box.height / 2) * 0.22;
            if (queued) return;
            queued = true;
            requestAnimationFrame(() => {
              queued = false;
              button.style.transitionDuration = "300ms";
              button.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
            });
          },
          { passive: true, signal },
        );
        button.addEventListener(
          "pointerleave",
          () => {
            button.style.transitionDuration = "";
            button.style.transform = "";
          },
          { signal },
        );
      }
    }

    return () => {
      controller.abort();
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return null;
}
