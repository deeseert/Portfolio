import { images } from "@/content/images";
import { links } from "@/content/site";
import { delay } from "@/lib/style";
import { ButtonLink } from "./button-link";
import { ResponsiveImage } from "./responsive-image";

export function Hero() {
  return (
    <div className="hero" id="top">
      <div className="wrap">
        <div className="name-box">
          <h1 className="name">
            <span className="ln">
              <span>Gioacchino</span>
            </span>{" "}
            <span className="ln sur">
              <span>Di Nardo</span>
            </span>
          </h1>
        </div>

        <div className="hero-body">
          <div className="hero-copy">
            <p className="label tag reveal soft" style={delay(500)}>
              Full stack engineer, Barcelona
            </p>
            <p className="lede reveal soft" style={delay(620)}>
              I build web products used by millions. Seven years of React, Next.js, TypeScript and Node.js, from
              checkout and payments at eDreams to account systems at the UK&apos;s largest news publisher.
            </p>
            <div className="cta reveal soft" style={delay(740)}>
              <ButtonLink href="#work" magnetic>
                See my work
              </ButtonLink>
              <ButtonLink href={links.cv} ghost magnetic download>
                Download CV
              </ButtonLink>
            </div>
          </div>

          <div className="stage" id="stage">
            <div className="stage-in">
              <div className="stack">
                <div className="plate back">
                  <ResponsiveImage
                    image={images.devhubHome}
                    sizes="(min-width: 1000px) 40vw, 68vw"
                    alt="The devHub homepage, with the headline Stop Losing Your Developer Knowledge."
                    fetchPriority="high"
                  />
                </div>
                <div className="plate mid">
                  <ResponsiveImage
                    image={images.devhubDashboard}
                    sizes="(min-width: 1000px) 52vw, (min-width: 768px) 84vw, 100vw"
                    alt="The devHub dashboard: a sidebar of item types and collections, next to cards for each collection."
                    fetchPriority="high"
                  />
                </div>
                <div className="plate front">
                  <ResponsiveImage
                    image={images.devhubCode}
                    sizes="(min-width: 1000px) 19vw, (min-width: 768px) 29vw, 100vw"
                    alt="A devHub item panel showing a saved useAuth React hook, with its tags and collection."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
