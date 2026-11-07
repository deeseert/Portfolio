import { Fragment } from "react";
import { images } from "@/content/images";
import { earlierProjects, featuredProjects, links, type EarlierProject, type FeaturedProject } from "@/content/site";
import { cssVar, delay } from "@/lib/style";
import { ButtonLink } from "./button-link";
import { ResponsiveImage } from "./responsive-image";
import { Shell } from "./shell";

const DEVHUB_STACK = ["Next.js", "TypeScript", "Prisma", "Postgres", "Stripe", "OpenAI"];

function DevHubCard() {
  return (
    <article className="card c1 c-devhub" style={cssVar("--cx", 0)} aria-labelledby="p-devhub">
      <div className="card-wrap">
        <Shell className="reveal" rim>
          <div className="core split">
            <div className="card-text">
              <p className="label">In development, 2026</p>
              <h3 className="card-title big" id="p-devhub">
                devHub
              </h3>
              <p>
                One place for code snippets, AI prompts, terminal commands, notes, links and files. Search it, organise
                it into collections and let AI help with tags and summaries. Built feature by feature, each with a short
                written spec.
              </p>
              <ul className="chips" aria-label="Stack">
                {DEVHUB_STACK.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="card-links">
                <ButtonLink href={links.devhub} small magnetic>
                  View on GitHub
                </ButtonLink>
              </div>
            </div>
            <a className="dh" href={links.devhub} tabIndex={-1} aria-hidden="true">
              <span className="dh-glow" />
              <ResponsiveImage
                className="dh-a"
                image={images.devhubDashboard}
                sizes="(min-width: 768px) 75vw, 150vw"
                alt=""
                loading="lazy"
              />
              <ResponsiveImage className="dh-b" image={images.devhubCode} sizes="24vw" alt="" loading="lazy" />
            </a>
          </div>
        </Shell>
        <span className="dim" aria-hidden="true" />
      </div>
    </article>
  );
}

function FeatureCard({ project, index, position }: { project: FeaturedProject; index: number; position: string }) {
  return (
    <article className={`card ${position}`} style={cssVar("--cx", index)} aria-labelledby={project.id}>
      <div className="card-wrap">
        <Shell className="reveal" rim>
          <div className="core split">
            <a className="card-shot" href={project.href} tabIndex={-1} aria-hidden="true">
              <ResponsiveImage
                image={project.image}
                sizes="(min-width: 768px) 58vw, 100vw"
                alt=""
                loading="lazy"
                style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
              />
            </a>
            <div className="card-text">
              <p className="label">{project.label}</p>
              <h3 className="card-title mid" id={project.id}>
                {project.title}
              </h3>
              <p>{project.description}</p>
              <div className="card-links">
                <ButtonLink href={project.href} small ghost magnetic>
                  {project.linkLabel}
                </ButtonLink>
                <span className="priv">Private code</span>
              </div>
            </div>
          </div>
        </Shell>
        <span className="dim" aria-hidden="true" />
      </div>
    </article>
  );
}

function EarlierCard({ project }: { project: EarlierProject }) {
  return (
    <Shell
      as="article"
      className={`small-card ${project.className} reveal`}
      style={project.revealDelay ? delay(project.revealDelay) : undefined}
      rim
      aria-labelledby={project.id}
    >
      <div className="core">
        <a className="card-shot" href={project.imageHref} tabIndex={-1} aria-hidden="true">
          <ResponsiveImage image={project.image} alt="" loading="lazy" />
        </a>
        <div className="card-text">
          <p className="label">2019</p>
          <h3 id={project.id}>{project.title}</h3>
          <p>{project.description}</p>
          <div className="card-links">
            {project.links.map((link) => (
              <ButtonLink key={link.label} href={link.href} small ghost magnetic={project.magnetic}>
                {link.label}
              </ButtonLink>
            ))}
            {project.privateCode && <span className="priv">Private code</span>}
          </div>
        </div>
      </div>
    </Shell>
  );
}

export function WorkSection() {
  // Each sentinel drives the recede animation of the card before it, in globals.css.
  const stacked: { position: string; sentinel: string }[] = [
    { position: "c2 c-left", sentinel: "s2" },
    { position: "c3 c-right", sentinel: "s3" },
  ];

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head split">
          <h2 id="work-title" className="reveal">
            Selected work
          </h2>
          <p className="reveal soft" style={delay(120)}>
            Newest first. Most client work is private, so I link to the live product when there is one.
          </p>
        </div>

        <div className="cards">
          <DevHubCard />
          {featuredProjects.map((project, i) => (
            <Fragment key={project.id}>
              <div className={`sentinel ${stacked[i].sentinel}`} aria-hidden="true" />
              <FeatureCard project={project} index={i + 1} position={stacked[i].position} />
            </Fragment>
          ))}
        </div>

        <div className="earlier">
          {earlierProjects.map((project) => (
            <EarlierCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
