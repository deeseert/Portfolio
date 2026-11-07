"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { links } from "@/content/site";
import { cssVar } from "@/lib/style";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback((refocus: boolean) => {
    setOpen(false);
    if (refocus) burgerRef.current?.focus({ preventScroll: true });
  }, []);

  // Marks the section in the middle of the screen as current.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) setCurrent(id);
          else setCurrent((value) => (value === id ? null : value));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of SECTIONS) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  // While the menu is open the page behind it is locked and out of the tab order.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    for (const element of document.querySelectorAll<HTMLElement>(".skip, main, footer")) {
      element.inert = open;
    }
    if (open) firstLinkRef.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
    };
    const desktop = matchMedia("(min-width: 768px)");
    const onResize = (event: MediaQueryListEvent) => {
      if (event.matches) close(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open, close]);

  return (
    <header>
      <nav className="nav" aria-label="Main">
        <a className="mark" href="#top" aria-label="Gio, back to top">
          Gio<span>.</span>
        </a>
        {SECTIONS.map(({ id, label }) => (
          <a className="nav-link" href={`#${id}`} aria-current={current === id ? "true" : undefined} key={id}>
            {label}
          </a>
        ))}
        <button
          ref={burgerRef}
          className="burger"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => (open ? close(true) : setOpen(true))}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={open ? "menu open" : "menu"} id="menu">
        {SECTIONS.map(({ id, label }, i) => (
          <a
            ref={i === 0 ? firstLinkRef : undefined}
            style={cssVar("--i", i)}
            href={`#${id}`}
            onClick={() => close(false)}
            key={id}
          >
            {label}
          </a>
        ))}
        <a style={cssVar("--i", SECTIONS.length)} href={links.cv} onClick={() => close(false)}>
          CV
        </a>
      </div>
    </header>
  );
}
