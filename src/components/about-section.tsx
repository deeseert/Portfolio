import { images } from "@/content/images";
import { languages, story } from "@/content/site";
import { delay } from "@/lib/style";
import { ResponsiveImage } from "./responsive-image";
import { Shell } from "./shell";

export function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-title" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2 id="about-title" className="reveal">
            I started in law.
          </h2>
        </div>
        <div className="about-grid">
          <div className="prints">
            <Shell className="print photo reveal">
              <ResponsiveImage image={images.portrait} alt="Portrait of Gioacchino Di Nardo in a suit." loading="lazy" />
            </Shell>
            <Shell className="print langs reveal" style={delay(120)}>
              <div className="core">
                <h3 className="label">Languages</h3>
                <ul>
                  {languages.map((language) => (
                    <li key={language.name}>
                      {language.name} <span>{language.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Shell>
          </div>
          <div className="story">
            <p className="big reveal">{story.lead}</p>
            {story.paragraphs.map((paragraph, i) => (
              <p className="reveal soft" style={delay(80 + i * 60)} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
