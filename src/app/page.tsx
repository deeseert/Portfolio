import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { SiteEffects } from "@/components/site-effects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StackSection } from "@/components/stack-section";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <div className="ambient" aria-hidden="true">
        <i className="a" />
        <i className="b" />
        <i className="c" />
      </div>
      <div className="grain" aria-hidden="true" />

      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <Hero />
        <WorkSection />
        <ExperienceSection />
        <StackSection />
        <AboutSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <SiteEffects />
    </>
  );
}
