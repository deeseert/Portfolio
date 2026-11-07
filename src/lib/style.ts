import type { CSSProperties } from "react";

/** Reveal delay, read by `.reveal` in globals.css. */
export function delay(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}

/** Sets a CSS custom property, for values the stylesheet reads per element. */
export function cssVar(name: `--${string}`, value: string | number): CSSProperties {
  return { [name]: value } as CSSProperties;
}
