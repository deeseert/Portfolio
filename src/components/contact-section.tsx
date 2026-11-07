import { links } from "@/content/site";
import { delay } from "@/lib/style";
import { ButtonLink } from "./button-link";

export function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title" className="reveal">
          Building something? Let&apos;s talk.
        </h2>
        <p className="note reveal soft" style={delay(100)}>
          Email is the quickest way to reach me. Write in English, Italian or Spanish.
        </p>
        <div className="mail-box reveal" style={delay(160)}>
          <a className="mail" href={links.email}>
            {links.emailAddress}
          </a>
        </div>
        <div className="cta reveal soft" style={delay(220)}>
          <ButtonLink href={links.email} magnetic>
            Email me
          </ButtonLink>
          <ButtonLink href={links.linkedin} ghost magnetic>
            LinkedIn
          </ButtonLink>
          <ButtonLink href={links.github} ghost magnetic>
            GitHub
          </ButtonLink>
          <ButtonLink href={links.cv} ghost magnetic download>
            CV
          </ButtonLink>
        </div>
      </div>
      <div className="horizon" aria-hidden="true">
        <span className="glow" />
        <span className="disc" />
      </div>
    </section>
  );
}
