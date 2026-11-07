import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/archivo-latin-var.woff2",
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const title = "Gioacchino Di Nardo, full stack engineer";
const description =
  "Full stack engineer in Barcelona with seven years of experience in React, Next.js, TypeScript and Node.js.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_GB" },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={archivo.variable} suppressHydrationWarning>
      <head>
        {/* Runs before first paint, so reveal states only apply when scripts are on. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
