import {
  profile, stats, projects, skills,
  experience, education, leadership, certifications, languages,
} from './data.js'

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  )
}

const mailIcon = <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></>
const githubIcon = <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
const linkedinIcon = <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>
const appleIcon = <><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 4a4.69 4.69 0 0 0-5 2 4.69 4.69 0 0 0-5-2 4.91 4.91 0 0 0-5 5.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" /><path d="M10 2c1 .5 2 2 2 5" /></>
const cvIcon = <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" /></>
const starIcon = <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />

export default function App() {
  return (
    <div className="page">
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-glow two" aria-hidden="true" />

      <header className="nav">
        <span className="logo">Z<span>MD</span></span>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="nav-cv" href={profile.cv} target="_blank" rel="noreferrer">Resume ↗</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <span className="pill"><span className="dot" /> Available for roles & collaborations</span>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
          <p className="loc">📍 {profile.location}</p>
          <div className="cta">
            <a className="btn primary" href="#work">View my work</a>
            <a className="btn ghost" href={profile.cv} target="_blank" rel="noreferrer">
              <Icon path={cvIcon} /> Download CV
            </a>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <h2 className="section-title">Selected Work</h2>
          <p className="section-sub">Shipped apps and games — most of them live on the App Store and Google Play.</p>
          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.name} style={{ '--accent': p.accent }}>
                <div className="card-top">
                  <h3>{p.name}</h3>
                  <span className="badge">{p.tag}</span>
                </div>
                <p className="card-desc">{p.description}</p>
                <div className="chips">
                  {p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
                {p.links.length > 0 && (
                  <div className="card-links">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                        {l.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          <p className="apple-line">
            See everything I've shipped on my{' '}
            <a href={profile.appleDeveloper} target="_blank" rel="noreferrer">Apple Developer profile ↗</a>
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2 className="section-title">Skills & Tools</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-block" key={s.group}>
                <h4>{s.group}</h4>
                <div className="chips">
                  {s.items.map((i) => <span className="chip" key={i}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT — experience + education */}
        <section id="about" className="section">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map((t) => (
              <div className="tl-item" key={t.title + t.when}>
                <span className="tl-when">{t.when}</span>
                <div className="tl-body">
                  <h4>{t.title}</h4>
                  <p className="tl-place">{t.place}</p>
                  <p className="tl-detail">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title sub-gap">Education</h2>
          <div className="timeline">
            {education.map((t) => (
              <div className="tl-item" key={t.title}>
                <span className="tl-when">{t.when}</span>
                <div className="tl-body">
                  <h4>{t.title}</h4>
                  <p className="tl-place">{t.place}</p>
                </div>
              </div>
            ))}
          </div>

          {/* three small cards */}
          <div className="mini-grid">
            <div className="mini-card">
              <h4><Icon path={starIcon} /> Leadership & Community</h4>
              <ul>
                {leadership.map((l) => (
                  <li key={l.title}><strong>{l.title}</strong><span>{l.place}</span></li>
                ))}
              </ul>
            </div>
            <div className="mini-card">
              <h4><Icon path={starIcon} /> Certifications</h4>
              <ul>
                {certifications.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="mini-card">
              <h4><Icon path={starIcon} /> Languages</h4>
              <ul className="lang-list">
                {languages.map((l) => (
                  <li key={l.name}><strong>{l.name}</strong><span>{l.level}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <h2 className="section-title">Let's build something</h2>
          <p className="section-sub">
            Open to game, mobile and full-stack roles, internships and collaborations across Europe.
          </p>
          <div className="contact-links">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <Icon path={mailIcon} /> {profile.email}
            </a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Icon path={linkedinIcon} /> LinkedIn
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
              <Icon path={githubIcon} /> GitHub
            </a>
            <a className="contact-link" href={profile.appleDeveloper} target="_blank" rel="noreferrer">
              <Icon path={appleIcon} /> App Store
            </a>
            <a className="contact-link" href={profile.cv} target="_blank" rel="noreferrer">
              <Icon path={cvIcon} /> Resume (PDF)
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed & built by Zeynep Maide Demir</span>
      </footer>
    </div>
  )
}
