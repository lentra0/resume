import type { ResumeData, Variant } from "@/content/types";

const PDF_HREF: Record<ResumeData["lang"], string> = {
  ru: "/resume/StaforkinGR_DevOps.pdf",
  en: "/resume/StaforkinGR_DevOps_EN.pdf",
};

export default function Resume({
  data,
  variant = "web",
}: {
  data: ResumeData;
  variant?: Variant;
}) {
  const { ui } = data;
  const contacts = data.contacts.filter((c) => variant === "pdf" || !c.pdfOnly);

  return (
    <>
      {variant === "web" ? (
        <nav className="toolbar no-print" aria-label={ui.langLabel}>
          <div className="toolbar-inner">
            <div className="lang-switch">
              <a href="/resume/ru/" aria-current={data.lang === "ru" ? "page" : undefined}>
                RU
              </a>
              <a href="/resume/en/" aria-current={data.lang === "en" ? "page" : undefined}>
                EN
              </a>
            </div>
            <a className="btn btn-primary" href={PDF_HREF[data.lang]} download>
              {ui.downloadPdf}
            </a>
          </div>
        </nav>
      ) : null}

      <main className="sheet">
        <header className="header">
          <h1 className="name">{data.name}</h1>
          <p className="role">{data.title}</p>
          <p className="location">{data.location}</p>
          <ul className="contacts">
            {contacts.map((c) => (
              <li key={c.label}>
                <span className="k">{c.label}:</span>
                {c.href ? <a href={c.href}>{c.value}</a> : <span>{c.value}</span>}
              </li>
            ))}
          </ul>
        </header>

        <section className="section">
          <h2>{ui.sections.summary}</h2>
          <p className="summary">{data.summary}</p>
        </section>

        <section className="section">
          <h2>{ui.sections.experience}</h2>
          {data.experience.map((job) => (
            <article className="item" key={`${job.company}-${job.period}`}>
              <div className="item-head">
                <div>
                  <h3 className="item-title">{job.role}</h3>
                  <p className="item-org">{job.company}</p>
                </div>
                <span className="item-period">{job.period}</span>
              </div>
              {(Array.isArray(job.context) ? job.context : job.context ? [job.context] : []).map(
                (line) => (
                  <p className="item-context" key={line}>
                    {line}
                  </p>
                )
              )}
              <ul className="bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="section">
          <h2>{ui.sections.skills}</h2>
          <div className="skills">
            {data.skills.map((g) => (
              <div className="skill-group" key={g.group}>
                <h3>{g.group}</h3>
                <p className="skill-list">{g.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>{ui.sections.projects}</h2>
          {data.projects.map((p) => (
            <p className="project" key={p.name}>
              <span className="project-name">
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noreferrer">
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </span>
              {p.meta ? <span className="meta">{p.meta}</span> : null}
              <span className="project-desc">{p.description}</span>
            </p>
          ))}
        </section>

        <section className="section">
          <h2>{ui.sections.education}</h2>
          {data.education.map((e) => (
            <article className="item item-tight" key={e.org}>
              <div className="item-head">
                <div>
                  <h3 className="item-title">{e.org}</h3>
                  <p className="item-org">{e.degree}</p>
                </div>
                <span className="item-period">{e.period}</span>
              </div>
              {e.note ? <p className="item-context">{e.note}</p> : null}
            </article>
          ))}
        </section>

        {data.extras?.length ? (
          <section className="section">
            <h2>{ui.sections.extras}</h2>
            <div className="extras">
              {data.extras.map((x) => (
                <div key={x.label}>
                  <span className="k">{x.label}:</span>
                  <span>{x.value}</span>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
