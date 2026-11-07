import { stack } from "@/content/site";
import { delay } from "@/lib/style";
import { Shell } from "./shell";

export function StackSection() {
  return (
    <section className="section" id="stack" aria-labelledby="stack-title" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2 id="stack-title" className="reveal">
            Stack
          </h2>
        </div>
        <div className="plates">
          {stack.map((group, i) => (
            <Shell
              key={group.title}
              className={`spec${group.accent ? " ai" : ""} reveal`}
              style={i > 0 ? delay(i * 90) : undefined}
              rim
            >
              <div className="core">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Shell>
          ))}
        </div>
      </div>
    </section>
  );
}
