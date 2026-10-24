"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Sparkles,
  Code2,
  Layers3,
  Terminal,
  ExternalLink,
  Send,
  MousePointer2,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  color: string;
  type: string;
  repo: string;
  demo: string;
  visual: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Student Management",
    category: "Full-stack platform",
    description:
      "A role-aware student workspace for managing records, profiles and student data with a clean, focused interface.",
    stack: ["Next.js", "TypeScript", "MUI", "MongoDB"],
    color: "violet",
    type: "Platform",
    repo: "https://github.com/",
    demo: "#contact",
    visual: "students",
  },
  {
    number: "02",
    title: "Labor & Payroll",
    category: "Operations software",
    description:
      "A workforce management concept for labor records, payroll workflows, plant assignments and admin access.",
    stack: ["Next.js", "NestJS", "MongoDB", "JWT"],
    color: "lime",
    type: "Dashboard",
    repo: "https://github.com/",
    demo: "#contact",
    visual: "payroll",
  },
  {
    number: "03",
    title: "Fitness Workout Logger",
    category: "Health & productivity",
    description:
      "A workout tracking experience for logging exercises, reviewing progress and keeping routines organized.",
    stack: ["React", "NestJS", "REST API", "Swagger"],
    color: "orange",
    type: "Web app",
    repo: "https://github.com/",
    demo: "#contact",
    visual: "fitness",
  },
];

const skillGroups = [
  {
    id: "frontend",
    label: "01 / INTERFACE",
    title: "Frontend",
    subtitle: "Turning pixels into experiences.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Material UI"],
    icon: "◈",
  },
  {
    id: "backend",
    label: "02 / SYSTEMS",
    title: "Backend",
    subtitle: "Building reliable application logic.",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "JWT Auth", "Swagger"],
    icon: "⌘",
  },
  {
    id: "data",
    label: "03 / STORAGE",
    title: "Data",
    subtitle: "Working with structured information.",
    skills: ["MongoDB", "Mongoose", "MySQL", "SQL", "Data modeling", "CRUD"],
    icon: "▦",
  },
  {
    id: "tools",
    label: "04 / WORKFLOW",
    title: "Tools",
    subtitle: "Shipping, testing and collaboration.",
    skills: ["Git & GitHub", "Postman", "VS Code", "Vercel", "Netlify", "Swagger"],
    icon: "↗",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Work", "#work"],
    ["Toolkit", "#toolkit"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Adarsh Kumar home">
        <span className="brand-mark">A<span>.</span></span>
        <span className="brand-name">
          ADARSH KUMAR <small>DEVELOPER PORTFOLIO</small>
        </span>
      </a>
      <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function OrbitVisual() {
  return (
    <div className="orbit-visual" aria-label="Decorative developer workspace illustration">
      <div className="orbit-grid" />
      <motion.div
        className="orbit-ring ring-one"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="orbit-ring ring-two"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="orbit-core"
        animate={{ y: [0, -9, 0], rotate: [0, 1.3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="core-top">
          <span /><span /><span /><small>workspace.tsx</small>
        </div>
        <div className="core-code">
          <p><i>01</i> <b>const</b> creator = {"{"}</p>
          <p><i>02</i> &nbsp; name: <em>&quot;Adarsh&quot;</em>,</p>
          <p><i>03</i> &nbsp; focus: <em>&quot;Full stack&quot;</em>,</p>
          <p><i>04</i> &nbsp; status: <strong>&quot;Building&quot;</strong></p>
          <p><i>05</i> {"}"};</p>
          <div className="code-cursor" />
        </div>
        <div className="core-footer"><span className="pulse-dot" /> READY TO BUILD <span>↗</span></div>
      </motion.div>
      <motion.div className="float-chip chip-top" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <span className="chip-icon"><Code2 size={16} /></span>
        <span><b>Clean code</b><small>Built with intent</small></span>
      </motion.div>
      <motion.div className="float-chip chip-bottom" animate={{ y: [0, 7, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
        <span className="chip-icon lime-chip"><Sparkles size={16} /></span>
        <span><b>Curious by default</b><small>Always learning</small></span>
      </motion.div>
      <div className="orbit-cross cross-one">+</div>
      <div className="orbit-cross cross-two">+</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <Reveal>
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line" /></div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1>Building digital<br />things with <span className="text-gradient">purpose.</span></h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="hero-description">
            I&apos;m Adarsh — a full stack developer who enjoys turning complex problems into thoughtful, useful web experiences.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="hero-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <span className="social-divider" />
            <span className="social-caption">BASED IN INDIA · OPEN TO WHAT&apos;S NEXT</span>
          </div>
        </Reveal>
      </div>
      <Reveal className="hero-art"><OrbitVisual /></Reveal>
      <div className="hero-bottom-note"><span>SCROLL TO EXPLORE</span><span className="note-line" /><span>01 — 05</span></div>
    </section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual visual-${project.visual}`}>
      <div className="mock-window">
        <div className="mock-bar"><span /><span /><span /><div>{project.visual}.app</div><b>•••</b></div>
        {project.visual === "students" && (
          <div className="mock-dashboard">
            <aside><strong>◈</strong><i /><i /><i /><i /><i /></aside>
            <div className="mock-main">
              <small>OVERVIEW / 2026</small><h4>Student dashboard</h4>
              <div className="mock-stats">
                <span><small>Students</small><b>1,248</b></span>
                <span><small>Active</small><b>86.4%</b></span>
                <span><small>Courses</small><b>24</b></span>
              </div>
              <div className="mock-chart">{[28, 50, 37, 68, 45, 83, 57, 72, 42, 90, 63].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
              <div className="mock-list"><i /><i /><i /></div>
            </div>
          </div>
        )}
        {project.visual === "payroll" && (
          <div className="payroll-screen">
            <small>WORKFORCE / OVERVIEW</small><h4>Team operations</h4>
            <div className="payroll-total"><span>Monthly payroll</span><b>₹ 8,42,500</b><em>↑ 8.2%</em></div>
            <div className="payroll-bars">{[45, 66, 37, 75, 54, 88, 63, 79, 47, 68, 84, 57].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
            <div className="payroll-row"><span /><b /><em /></div><div className="payroll-row"><span /><b /><em /></div><div className="payroll-row"><span /><b /><em /></div>
          </div>
        )}
        {project.visual === "fitness" && (
          <div className="fitness-screen">
            <div className="fitness-head"><span><small>YOUR ACTIVITY</small><h4>Keep your pace.</h4></span><b>↗</b></div>
            <div className="fitness-metric"><strong>04<span> / week</span></strong><small>Workouts completed</small></div>
            <div className="fitness-chart">{[36, 55, 42, 75, 49, 88, 64].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
            <div className="fitness-bottom"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
          </div>
        )}
      </div>
      <span className="visual-orb" />
      <span className="visual-index">PROJECT / {project.number}</span>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Platform", "Dashboard", "Web app"];
  const visible = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section className="work-section section-wrap" id="work">
      <Reveal className="section-heading">
        <div><div className="eyebrow">SELECTED WORK <span className="eyebrow-line" /></div><h2>Ideas made <span className="serif-italic">real.</span></h2></div>
        <p>A few projects that reflect how I think, build, and solve problems.</p>
      </Reveal>
      <Reveal className="project-toolbar">
        <span className="mono-label">PROJECT INDEX <b>({String(visible.length).padStart(2, "0")})</b></span>
        <div className="filter-list" role="group" aria-label="Filter projects">
          {filters.map((f) => <button key={f} className={filter === f ? "filter active" : "filter"} onClick={() => setFilter(f)}>{f}</button>)}
        </div>
      </Reveal>
      <div className="project-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.article className={`project-card project-${project.color}`} key={project.number} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.35, delay: index * 0.05 }}>
              <ProjectVisual project={project} />
              <div className="project-info">
                <div className="project-meta"><span>{project.category}</span><span>{project.number} / 03</span></div>
                <h3>{project.title}<ArrowUpRight size={20} /></h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links"><a href={project.demo}>Explore project <ArrowRight size={15} /></a><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={17} /></a></div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      <div className="work-foot"><span>BUILT WITH CURIOSITY, NOT JUST CODE</span><span className="note-line" /><span>↘</span></div>
    </section>
  );
}

function Toolkit() {
  const [active, setActive] = useState("frontend");
  const current = skillGroups.find((group) => group.id === active) ?? skillGroups[0];

  return (
    <section className="toolkit-section" id="toolkit">
      <div className="section-wrap toolkit-inner">
        <Reveal className="toolkit-intro">
          <div className="eyebrow">THE TOOLBOX <span className="eyebrow-line" /></div>
          <h2>My stack is a<br /><span className="serif-italic">work in progress.</span></h2>
          <p>I choose tools for the problem, not just the trend. Here&apos;s what I use to take an idea from sketch to shipping.</p>
          <div className="toolkit-footnote"><Layers3 size={17} /><span>LEARNING. BUILDING. REPEATING.</span></div>
        </Reveal>
        <Reveal className="toolkit-explorer" delay={0.1}>
          <div className="tool-tabs" role="tablist" aria-label="Technology categories">
            {skillGroups.map((group) => (
              <button key={group.id} className={active === group.id ? "tool-tab selected" : "tool-tab"} onClick={() => setActive(group.id)} role="tab" aria-selected={active === group.id}>
                <span>{group.icon}</span><small>{group.label}</small><b>{group.title}</b><ArrowUpRight size={15} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div className="tool-detail" key={current.id} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }}>
              <div className="tool-detail-top"><span className="mono-label">CURRENT FOCUS / {current.label}</span><span className="tool-symbol">{current.icon}</span></div>
              <h3>{current.title}<br /><span>{current.subtitle}</span></h3>
              <div className="skill-cloud">{current.skills.map((skill, i) => <motion.span key={skill} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.055 }}>{skill}<i>↗</i></motion.span>)}</div>
              <div className="tool-detail-bottom"><span>SELECT A CATEGORY TO EXPLORE</span><MousePointer2 size={15} /></div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const principles = [
    ["01", "Build with intent", "Every feature should solve a real problem."],
    ["02", "Keep learning", "Stay curious, stay adaptable, keep improving."],
    ["03", "Sweat the details", "Small decisions make a product feel considered."],
  ];

  return (
    <section className="about-section section-wrap" id="about">
      <Reveal className="about-heading">
        <div className="eyebrow">A LITTLE ABOUT ME <span className="eyebrow-line" /></div>
        <h2>Developer by craft.<br /><span className="serif-italic">Problem solver by nature.</span></h2>
      </Reveal>
      <div className="about-layout">
        <Reveal className="about-statement">
          <span className="quote-mark">“</span>
          <p>I enjoy the space where thoughtful design meets practical engineering — building web apps that feel clear, work reliably, and make someone&apos;s day a little easier.</p>
          <div className="about-signature"><span className="signature-mark">A.</span><span>ADARSH KUMAR<small>FULL STACK DEVELOPER</small></span></div>
        </Reveal>
        <Reveal className="about-details" delay={0.08}>
          <div className="about-body">
            <p>I work across the stack, from shaping interfaces with React and Next.js to building APIs with Node.js and NestJS. I like breaking down messy problems, learning how systems fit together, and iterating until the experience feels right.</p>
            <p>Outside the code, I&apos;m focused on getting better at the fundamentals: clean architecture, accessible interfaces, and shipping useful work.</p>
          </div>
          <div className="principles">
            {principles.map(([number, title, description]) => (
              <div className="principle" key={number}><span>{number}</span><div><h4>{title}</h4><p>{description}</p></div><ArrowUpRight size={16} /></div>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="about-stats">
        <div><strong>03<span>+</span></strong><small>PROJECTS IN PROGRESS</small></div>
        <div><strong>04</strong><small>CORE TOOL CATEGORIES</small></div>
        <div><strong>∞</strong><small>THINGS LEFT TO LEARN</small></div>
        <div className="stats-note"><Sparkles size={17} /><span>Good work is a practice, not a finish line.</span></div>
      </div>
    </section>
  );
}


function Experience() {
  const experiences = [
    {
      date: "OCT 2026 — PRESENT",
      type: "EXPERIENCE / 01",
      role: "Associate Software Developer",
      company: "Infinite Computer Solutions",
      description:
        "Contributing to software development and building reliable web application features while collaborating with the team.",
      skills: ["React", "Next.js", "Node.js"],
    },
    {
      date: "AUG 2026 — OCT 2026",
      type: "EXPERIENCE / 02",
      role: "Software Developer Intern",
      company: "Omnie Solution",
      description:
        "Worked on software development tasks, strengthened full-stack development skills, and gained practical project experience.",
      skills: ["JavaScript", "React", "APIs"],
    },
    {
      date: "MAY 2025 — JUL 2025",
      type: "EXPERIENCE / 03",
      role: "Frontend Developer Intern",
      company: "Codealphaa",
      description:
        "Worked on frontend development, building user interfaces and improving web experiences with modern frontend technologies.",
      skills: ["HTML & CSS", "JavaScript", "React"],
    },
    {
      date: "MAR 2024 — JUL 2024",
      type: "EXPERIENCE / 04",
      role: "Software Developer",
      company: "Railworld India Pvt. Ltd.",
      location: "Gurgaon",
      description:
        "Worked on web application development and practical software features while building a strong foundation in full-stack development.",
      skills: ["React", "Next.js", "Node.js"],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="section-wrap experience-inner">
        <Reveal className="experience-title">
          <div className="eyebrow">
            THE JOURNEY <span className="eyebrow-line" />
          </div>

          <h2>
            Still becoming.
            <br />
            <span className="serif-italic">Always building.</span>
          </h2>

          <p>
            Every role, every challenge, every new concept —
            one more step forward.
          </p>
        </Reveal>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <Reveal
              className="timeline-item"
              key={experience.company}
              delay={index * 0.08}
            >
              <div className="timeline-marker">
                <span />
              </div>

              <div className="timeline-date">
                {experience.date}
              </div>

              <div className="timeline-card">
                <div className="timeline-card-head">
                  <span>{experience.type}</span>
                  <ArrowUpRight size={16} />
                </div>

                <h3>{experience.role}</h3>

                <p className="timeline-place">
                  {experience.company}
                  {experience.location
                    ? ` · ${experience.location}`
                    : ""}
                </p>

                <p>{experience.description}</p>

                <div className="tag-list">
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "adarshkumar@example.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-orbit" />
      <Reveal className="contact-copy">
        <div className="eyebrow"><span className="status-dot" /> YOUR NEXT IDEA STARTS HERE</div>
        <h2>Have a good one<br />in <span className="serif-italic">mind?</span></h2>
        <p>I&apos;m always up for talking about thoughtful products, interesting problems, and opportunities to build something useful.</p>
        <button className="button button-primary" onClick={copyEmail}><Mail size={16} /> {copied ? "Email copied!" : "Copy my email"} <ArrowUpRight size={16} /></button>
      </Reveal>
      <Reveal className="contact-side" delay={0.1}>
        <div className="contact-note"><span className="note-star">✳</span><p>Have a project, a role, or just want to say hello?</p><span>MY INBOX IS OPEN</span></div>
        <a className="contact-link" href={`mailto:${email}`}><span><Mail size={18} /></span><div><small>EMAIL</small><b>{email}</b></div><ArrowUpRight size={18} /></a>
        <a className="contact-link" href="https://linkedin.com/" target="_blank" rel="noreferrer"><span><Linkedin size={18} /></span><div><small>CONNECT</small><b>LinkedIn</b></div><ArrowUpRight size={18} /></a>
        <a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer"><span><Github size={18} /></span><div><small>SEE THE CODE</small><b>GitHub</b></div><ArrowUpRight size={18} /></a>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <a className="brand footer-brand" href="#home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ADARSH KUMAR <small>MADE WITH CURIOSITY</small></span></a>
      <span>© {new Date().getFullYear()} · BUILT TO KEEP EVOLVING</span>
      <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main>
      <div className="top-glow" />
      <Header />
      <Hero />
      <div className="ticker" aria-label="Areas of focus">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <span key={index}>DESIGN WITH INTENT <i>✳</i> BUILD FOR PEOPLE <i>✳</i> FULL STACK DEVELOPMENT <i>✳</i> KEEP EXPLORING <i>✳</i></span>
          ))}
        </div>
      </div>
      <Projects />
      <Toolkit />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
