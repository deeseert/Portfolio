import { experience } from "@/content/site";

export function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="experience-title" className="reveal">
            Experience
          </h2>
        </div>
        <div className="ledger">
          {experience.map((entry) => (
            <article className="row reveal" key={entry.title}>
              <p className="label when">{entry.when}</p>
              <h3>{entry.title}</h3>
              <div className="detail">
                {entry.role && <p className="role">{entry.role}</p>}
                <ul>
                  {entry.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
