import { useState, useEffect } from "react";

const skills = {
  technical: [
    { name: "Python", level: 85 },
    { name: "Pandas", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Data Cleaning", level: 85 },
    { name: "Data Analysis", level: 80 },
    { name: "React", level: 55 },
    { name: "Git", level: 65 },
    { name: "Power BI", level: 70 },
  ],
  strengths: ["Analytical Thinking", "Problem Solving", "Communication"],
};

const projects = [
  {
    title: "Cereal Data Analysis",
    status: "completed",
    tag: "Data Analysis",
    description:
      "Cleaned and analyzed a cereal dataset using Pandas. Handled missing values, explored correlations, and identified trends — including the impact of sugar and fiber on product ratings.",
    link: "https://github.com/rahuldwivedy",
    liveLink: null,
    tech: ["Python", "Pandas", "EDA"],
  },
  {
    title: "Drug Dataset Analysis",
    status: "completed",
    tag: "Data Analysis",
    description:
      "Analyzed a drug dataset using Python (Pandas) to uncover trends in treatment outcomes. Created an interactive Power BI dashboard and presented insights using a structured presentation.",
    link: "https://github.com/rahuldwivedy/Drug-Dataset-Analysis",
    liveLink: "https://github.com/rahuldwivedy/Drug-Dataset-Analysis",
    tech: ["Python", "Visualization", "Pandas"],
  },
  {
    title: "Communion App",
    status: "completed",
    tag: "Web Dev",
    description:
      "Built a responsive web app using React with event listing functionality. Focused on UI structure and component-based development.",
    link: "https://github.com/rahuldwivedy/communion-app",
    liveLink: "https://rahuldwivedy.github.io/communion-app/",
    tech: ["React", "CSS", "Components"],
  },
  {
    title: "Todo List App",
    status: "completed",
    tag: "Web Dev",
    description:
      "A responsive To-Do List web app built with HTML, CSS, and JavaScript. Supports adding, completing, and deleting tasks with local storage persistence.",
    link: "https://github.com/rahuldwivedy/todo-list",
    liveLink: "https://rahuldwivedy.github.io/todo-list/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #f5f0e8; }

  .portfolio {
    min-height: 100vh;
    background: #f5f0e8;
    font-family: 'DM Sans', sans-serif;
    color: #1a1a2e;
  }

  .nav {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
    background: #f5f0e8;
    border-bottom: 1px solid rgba(26,26,46,0.08);
  }
  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 20px;
    color: #1a1a2e;
    font-weight: 400;
  }
  .nav-links { display: flex; gap: 24px; }
  .nav-links a {
    color: #1a1a2e;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.6;
    transition: opacity 0.2s;
  }
  .nav-links a:hover { opacity: 1; }

  .hero {
    max-width: 960px;
    margin: 0 auto;
    padding: 60px 24px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }
  .hero-tag {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #4a4580;
    margin-bottom: 14px;
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1;
    color: #1a1a2e;
    margin-bottom: 20px;
  }
  .hero-desc {
    font-size: 15px;
    line-height: 1.7;
    color: rgba(26,26,46,0.65);
    margin-bottom: 32px;
  }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-primary {
    padding: 11px 24px;
    background: #1a1a2e;
    color: #f5f0e8;
    border-radius: 4px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: background 0.2s;
  }
  .btn-primary:hover { background: #4a4580; }
  .btn-secondary {
    padding: 11px 24px;
    background: transparent;
    color: #1a1a2e;
    border-radius: 4px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid rgba(26,26,46,0.25);
  }
  .stats { display: flex; flex-direction: column; gap: 12px; }
  .stat-card {
    padding: 18px 20px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .stat-label { font-size: 12px; font-weight: 400; }
  .stat-value {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 700;
  }

  .divider { max-width: 960px; margin: 0 auto; padding: 0 24px; }
  .divider-line { height: 1px; background: rgba(26,26,46,0.1); }

  .section-wrap { max-width: 960px; margin: 0 auto; padding: 64px 24px; }
  .section-grid {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 40px;
  }
  .section-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(26,26,46,0.4);
    padding-top: 6px;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 20px;
    line-height: 1.2;
  }
  .section-text { font-size: 15px; line-height: 1.8; color: rgba(26,26,46,0.65); }

  .projects-section { background: #1a1a2e; padding: 64px 0; }
  .projects-inner { max-width: 960px; margin: 0 auto; padding: 0 24px; }
  .projects-header {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }
  .projects-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(245,240,232,0.35);
    padding-top: 6px;
  }
  .projects-title {
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    font-weight: 700;
    color: #f5f0e8;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  .project-card {
    padding: 24px 20px;
    background: rgba(245,240,232,0.06);
    border: 1px solid rgba(245,240,232,0.1);
    border-radius: 8px;
    transition: background 0.25s;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .project-card:hover { background: #4a4580; }
  .project-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }
  .project-tag {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 99px;
  }
  .project-links { display: flex; gap: 10px; }
  .project-link { font-size: 11px; text-decoration: none; font-weight: 500; letter-spacing: 0.06em; }
  .project-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    color: #f5f0e8;
    line-height: 1.2;
  }
  .project-desc { font-size: 13px; line-height: 1.7; color: rgba(245,240,232,0.55); flex: 1; }
  .project-techs { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 4px; }
  .tech-tag {
    font-size: 10px;
    color: rgba(245,240,232,0.4);
    padding: 2px 7px;
    border: 1px solid rgba(245,240,232,0.12);
    border-radius: 4px;
  }

  .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 8px; }
  .skills-sublabel {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(26,26,46,0.4);
    margin-bottom: 20px;
  }
  .skill-row { margin-bottom: 16px; }
  .skill-row-top { display: flex; justify-content: space-between; margin-bottom: 7px; font-size: 13px; color: #1a1a2e; }
  .skill-pct { color: rgba(26,26,46,0.35); font-size: 11px; }
  .bar-bg { height: 4px; background: #e8e3da; border-radius: 99px; overflow: hidden; }
  .bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #1a1a2e, #4a4580);
    border-radius: 99px;
    transition: width 0.8s cubic-bezier(0.4,0,0.2,1);
  }
  .strength-item {
    padding: 16px 18px;
    background: #ede8df;
    border-radius: 8px;
    font-size: 14px;
    color: #1a1a2e;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .strength-dot { width: 6px; height: 6px; background: #4a4580; border-radius: 50%; flex-shrink: 0; }

  .contact-section { background: #ede8df; padding: 64px 0; }
  .contact-inner { max-width: 960px; margin: 0 auto; padding: 0 24px; }
  .contact-grid { display: grid; grid-template-columns: 160px 1fr; gap: 40px; }
  .contact-subtitle { font-size: 14px; color: rgba(26,26,46,0.55); margin-bottom: 32px; }
  .contact-link {
    padding: 16px 20px;
    background: #f5f0e8;
    border-radius: 8px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s;
    margin-bottom: 10px;
    gap: 12px;
  }
  .contact-link:hover { background: #fff; }
  .contact-link-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(26,26,46,0.4);
    min-width: 56px;
    flex-shrink: 0;
  }
  .contact-link-value { font-size: 13px; color: #1a1a2e; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .contact-arrow { color: rgba(26,26,46,0.3); font-size: 14px; flex-shrink: 0; }

  .footer {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(26,26,46,0.08);
    flex-wrap: wrap;
    gap: 8px;
  }
  .footer-logo { font-family: 'Playfair Display', serif; font-style: italic; font-size: 15px; color: rgba(26,26,46,0.4); }
  .footer-copy { font-size: 11px; color: rgba(26,26,46,0.35); }

  /* TABLET */
  @media (max-width: 768px) {
    .nav-links { gap: 16px; }
    .nav-links a { font-size: 11px; }

    .hero { grid-template-columns: 1fr; padding: 40px 20px 32px; gap: 32px; }
    .hero-title { font-size: 36px; }
    .stats { flex-direction: row; flex-wrap: wrap; }
    .stat-card { flex: 1; min-width: 120px; }

    .section-grid { grid-template-columns: 1fr; gap: 16px; }
    .section-label { padding-top: 0; }
    .section-wrap { padding: 48px 20px; }

    .projects-header { grid-template-columns: 1fr; gap: 12px; }
    .projects-grid { grid-template-columns: 1fr; }
    .projects-inner { padding: 0 20px; }
    .projects-section { padding: 48px 0; }

    .skills-grid { grid-template-columns: 1fr; gap: 32px; }

    .contact-grid { grid-template-columns: 1fr; gap: 16px; }
    .contact-section { padding: 48px 0; }
    .contact-inner { padding: 0 20px; }

    .divider { padding: 0 20px; }
  }

  /* MOBILE */
  @media (max-width: 480px) {
    .nav { padding: 16px 20px; }
    .nav-links { gap: 10px; }
    .nav-links a { font-size: 10px; letter-spacing: 0.02em; }
    .hero-title { font-size: 30px; }
    .hero-btns { flex-direction: column; }
    .btn-primary, .btn-secondary { text-align: center; }
    .stats { flex-direction: column; }
    .section-title { font-size: 24px; }
    .projects-title { font-size: 24px; }
    .contact-link-value { font-size: 11px; }
  }
`;

function AnimatedBar({ level, delay }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(level), 300 + delay);
    return () => clearTimeout(t);
  }, [level, delay]);
  return (
    <div className="bar-bg">
      <div className="bar-fill" style={{ width: `${width}%` }} />
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="portfolio">
      <style>{styles}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Navbar */}
      <nav className="nav">
        <span className="nav-logo">Riteendra</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div>
          {/* ✏️ CHANGED: added Power BI to the tag line */}
          <p className="hero-tag">Data Analyst · Python · SQL · Power BI</p>
          <h1 className="hero-title">
            Hi, I'm<br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>Riteendra</em>
          </h1>
          {/* ✏️ CHANGED: more confident, specific description */}
          <p className="hero-desc">
            Data analyst with hands-on experience in Python, SQL, and Power BI.
            I turn raw data into clear insights — through clean analysis,
            visual storytelling, and a sharp eye for patterns that matter.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="stats">
          {[
            // ✏️ CHANGED: 4+ projects (you have 4 completed), 8 tools (added Power BI)
            { label: "Projects Completed", value: "4+", dark: true },
            { label: "Tools & Languages", value: "8", dark: false },
            { label: "Focus Area", value: "Data", dark: false },
          ].map((s, i) => (
            <div key={i} className="stat-card"
              style={{ background: s.dark ? "#1a1a2e" : "#ede8df" }}>
              <span className="stat-label"
                style={{ color: s.dark ? "rgba(245,240,232,0.6)" : "rgba(26,26,46,0.5)" }}>
                {s.label}
              </span>
              <span className="stat-value"
                style={{ color: s.dark ? "#f5f0e8" : "#1a1a2e" }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"><div className="divider-line" /></div>

      {/* About */}
      <section id="about" className="section-wrap">
        <div className="section-grid">
          <p className="section-label">About Me</p>
          <div>
            <h2 className="section-title">
              Data-driven thinker,<br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>problem solver at heart</em>
            </h2>
            <p className="section-text">
              I focus on analyzing data to uncover patterns, trends, and insights.
              I enjoy working with Python, Pandas, and SQL to clean data, perform
              analysis, and present meaningful results. My goal is to solve
              real-world problems through data-driven thinking — turning raw
              numbers into clear, actionable stories.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="projects-inner">
          <div className="projects-header">
            <p className="projects-label">Projects</p>
            <h2 className="projects-title">Selected Work</h2>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-card-top">
                  <span className="project-tag" style={{
                    color: p.status === "upcoming" ? "#c9a85c" : "#7ecfb3",
                    background: p.status === "upcoming" ? "rgba(201,168,92,0.15)" : "rgba(126,207,179,0.12)",
                  }}>
                    {p.tag}
                  </span>
                  <div className="project-links">
                    {p.link !== "#" && (
                      <a href={p.link} target="_blank" rel="noreferrer"
                        className="project-link" style={{ color: "rgba(245,240,232,0.4)" }}>
                        GitHub →
                      </a>
                    )}
                    {p.liveLink && (
                      <a href={p.liveLink} target="_blank" rel="noreferrer"
                        className="project-link" style={{ color: "#7ecfb3" }}>
                        Live →
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-techs">
                  {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-wrap">
        <div className="section-grid">
          <p className="section-label">Skills</p>
          <div>
            <h2 className="section-title">Tools & Strengths</h2>
            <div className="skills-grid">
              <div>
                <p className="skills-sublabel">Technical</p>
                {skills.technical.map((s, i) => (
                  <div key={s.name} className="skill-row">
                    <div className="skill-row-top">
                      <span>{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    <AnimatedBar level={s.level} delay={i * 80} />
                  </div>
                ))}
              </div>
              <div>
                <p className="skills-sublabel">Core Strengths</p>
                {skills.strengths.map(s => (
                  <div key={s} className="strength-item">
                    <span className="strength-dot" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-grid">
            <p className="section-label">Contact</p>
            <div>
              <h2 className="section-title">Let's connect</h2>
              <p className="contact-subtitle">Open to opportunities, collaborations, and conversations.</p>
              {[
                { label: "Email", value: "dwivedy.riteendra220303@gmail.com", href: "mailto:dwivedy.riteendra220303@gmail.com" },
                { label: "GitHub", value: "github.com/rahuldwivedy", href: "https://github.com/rahuldwivedy" },
                { label: "LinkedIn", value: "linkedin.com/in/riteendradwivedy2003", href: "https://www.linkedin.com/in/riteendradwivedy2003/" },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-link-label">{c.label}</span>
                  <span className="contact-link-value">{c.value}</span>
                  <span className="contact-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span className="footer-logo">Riteendra</span>
        <span className="footer-copy">© 2026 — All rights reserved</span>
      </footer>
    </div>
  );
}