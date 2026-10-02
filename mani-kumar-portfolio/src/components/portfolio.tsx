import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Server,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import resumeAsset from "@/assets/Mani_Resume.pdf.asset.json";
import {
  architecture,
  experience,
  focusAreas,
  interests,
  primarySkills,
  projects,
  skillGroups,
} from "@/lib/portfolio-data";

const navItems = ["About", "Experience", "Projects", "Skills", "Architecture", "Contact"];
const socialLinks = [
  { label: "Email", value: "kmani3307@gmail.com", href: "mailto:kmani3307@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "mani-kumar-a977661a4", href: "https://www.linkedin.com/in/mani-kumar-a977661a4/", icon: Linkedin },
  { label: "GitHub", value: "Mani70K", href: "https://github.com/Mani70K", icon: Github },
];

function SectionHeading({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mb-12 grid gap-5 border-t border-border pt-5 md:grid-cols-[1fr_2fr] md:mb-16">
      <p className="font-mono text-xs uppercase text-muted-foreground">{index} / {eyebrow}</p>
      <div>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h2>
        {copy ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{copy}</p> : null}
      </div>
    </div>
  );
}

function ResumeButton({ compact = false }: { compact?: boolean }) {
  return (
    <Button variant="outline" size={compact ? "sm" : "lg"} asChild>
      <a href={resumeAsset.url} download="Mani_Kumar_Resume.pdf" aria-label="Download resume (PDF)">
        <Download /> Download Resume
      </a>
    </Button>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const shouldUseDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label={dark ? "Use light theme" : "Use dark theme"}>
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3 font-semibold" aria-label="Mani Kumar, home">
          <span className="grid size-8 place-items-center bg-primary font-mono text-xs font-bold text-primary-foreground">MK</span>
          <span>Mani Kumar</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item}</a>)}
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <span className="hidden sm:block"><ResumeButton compact /></span>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm">{item}</a>)}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function FlowDiagram({ nodes }: { nodes: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label={`Architecture flow: ${nodes.join(" to ")}`}>
      {nodes.map((node, index) => (
        <div key={node} className="contents">
          <span className="border border-border bg-background px-3 py-2 font-mono text-[11px] text-foreground">{node}</span>
          {index < nodes.length - 1 ? <ArrowRight className="size-3 text-primary" aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,.55fr)] lg:px-8 lg:py-24">
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase text-muted-foreground">
            <span className="flex items-center gap-2"><span className="size-2 bg-primary" />Available for opportunities</span>
            <span className="flex items-center gap-2"><MapPin className="size-3" />Bengaluru, India</span>
          </div>
          <p className="mb-4 text-lg font-medium text-primary">.NET Full Stack Software Engineer</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-8xl">Building scalable software systems<span className="text-primary">.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">Full Stack Software Engineer specializing in .NET, React, AWS, distributed systems, and event-driven architecture.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#projects">View My Work <ArrowDownRight /></a></Button>
            <ResumeButton />
            <Button variant="ghost" size="lg" asChild><a href="#contact">Let's Connect <ArrowRight /></a></Button>
          </div>
          <div className="mt-10 flex max-w-4xl flex-wrap gap-2">
            {primarySkills.map((skill) => <span key={skill} className="border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground">{skill}</span>)}
          </div>
        </div>
        <aside className="self-end border-l border-border pl-6 lg:mb-2">
          <p className="font-mono text-xs uppercase text-muted-foreground">Engineering profile</p>
          <div className="mt-6 grid grid-cols-2 gap-px bg-border">
            <div className="bg-background p-4"><strong className="block text-2xl">4+</strong><span className="text-xs text-muted-foreground">Years building</span></div>
            <div className="bg-background p-4"><strong className="block text-2xl">AWS</strong><span className="text-xs text-muted-foreground">Cloud systems</span></div>
            <div className="col-span-2 bg-background p-4"><span className="text-xs text-muted-foreground">Production applications · Backend services · AI-powered workflows</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="01" eyebrow="About" title="Engineering systems that stay clear as they scale." />
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <p className="font-mono text-xs uppercase text-muted-foreground">About me</p>
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
            <p>I'm a Full Stack Software Engineer with 4+ years of experience building scalable applications and backend services using C#, .NET, ASP.NET Core, React, and AWS.</p>
            <p>My primary focus is backend engineering, distributed systems, event-driven architecture, and cloud-native application development. I enjoy solving complex engineering problems and designing software that is scalable, maintainable, reliable, and easy to evolve.</p>
            <p>In my current role at Greenway Health, I've worked on healthcare applications involving AI-powered workflows, event-driven architectures, AWS services, distributed systems, and modern full-stack development.</p>
          </div>
        </div>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {focusAreas.map((item, index) => {
            const Icon = index === 0 ? Server : index === 1 ? Network : Code2;
            return <article key={item.title} className="group bg-background p-7 transition-colors hover:bg-secondary"><div className="flex items-center justify-between"><Icon className="size-5 text-primary" /><span className="font-mono text-xs text-muted-foreground">{item.number}</span></div><h3 className="mt-12 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-secondary px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="02" eyebrow="Experience" title="Production work, grounded in real systems." />
        <div className="md:ml-[33.333%]">
          {experience.map((job, jobIndex) => <article key={job.company} className="relative border-l border-border pb-16 pl-8 last:pb-0"><span className="absolute -left-[5px] top-1 size-[9px] bg-primary" /><div className="grid gap-4 lg:grid-cols-[1fr_2fr]"><div><p className="font-mono text-xs text-primary">{job.period}</p><h3 className="mt-3 text-2xl font-semibold">{job.company}</h3><p className="mt-1 text-sm text-muted-foreground">{job.role}</p><p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="size-3" />{job.location}</p></div><ul className="space-y-3 pt-1">{job.highlights.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground"><ChevronRight className="mt-1 size-4 shrink-0 text-primary" />{point}</li>)}</ul></div>{jobIndex === 0 ? <div className="mt-10 h-px bg-border" /> : null}</article>)}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" eyebrow="Featured work" title="Selected systems & workflows." copy="A closer look at the architecture, tradeoffs, and engineering contributions behind my work." />
        <div className="space-y-8">
          {projects.map((project) => <article key={project.name} className="group border border-border bg-card transition-shadow hover:shadow-[8px_8px_0_var(--primary)]"><div className="grid lg:grid-cols-[.8fr_1.2fr]"><div className="border-b border-border p-7 lg:border-b-0 lg:border-r lg:p-9"><div className="flex items-center justify-between font-mono text-xs uppercase text-muted-foreground"><span>Project {project.number}</span><span>{project.label}</span></div><h3 className="mt-10 text-3xl font-semibold leading-tight md:text-4xl">{project.name}</h3><p className="mt-5 leading-7 text-muted-foreground">{project.description}</p><div className="mt-8 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="bg-secondary px-2.5 py-1 font-mono text-[11px]">{tech}</span>)}</div></div><div className="grid content-between gap-10 p-7 lg:p-9"><div><p className="mb-4 font-mono text-xs uppercase text-muted-foreground">System flow</p><div className="border border-border bg-secondary/50 p-5"><FlowDiagram nodes={project.flow} /></div></div><div><p className="mb-4 font-mono text-xs uppercase text-muted-foreground">Key contributions</p><div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">{project.contributions.map((item) => <p key={item} className="flex gap-2 text-sm leading-6 text-muted-foreground"><Check className="mt-1 size-3.5 shrink-0 text-primary" />{item}</p>)}</div></div></div></div></article>)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-foreground px-5 py-24 text-background lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-5 border-t border-background/20 pt-5 md:grid-cols-[1fr_2fr]"><p className="font-mono text-xs uppercase text-background/60">04 / Technical skills</p><h2 className="text-3xl font-semibold md:text-5xl">A practical toolkit for full-stack systems.</h2></div>
        <div className="grid gap-px bg-background/20 md:grid-cols-2">{skillGroups.map((group, index) => <article key={group.title} className="bg-foreground p-7 md:p-9"><div className="flex justify-between"><h3 className="text-xl font-semibold">{group.title}</h3><span className="font-mono text-xs text-primary">0{index + 1}</span></div><div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">{group.skills.map((skill) => <span key={skill} className="border-b border-background/30 pb-1 text-sm text-background/70">{skill}</span>)}</div></article>)}</div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="scroll-mt-20 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="05" eyebrow="System thinking" title="How I think about systems." copy="Good architecture creates clear boundaries, absorbs failure, and gives teams room to evolve." />
        <div className="grid gap-5 md:grid-cols-2">{architecture.map((item, index) => <article key={item.title} className="border border-border p-7 md:p-8"><div className="flex items-center justify-between"><h3 className="text-xl font-semibold">{item.title}</h3><span className="font-mono text-xs text-primary">0{index + 1}</span></div><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{item.copy}</p><div className="mt-8 border-t border-border pt-5"><FlowDiagram nodes={item.flow} /></div></article>)}</div>
        <div className="mt-20 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_2fr]"><div><p className="font-mono text-xs uppercase text-muted-foreground">Currently exploring</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Areas I’m actively studying—not claims of professional experience.</p></div><div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{interests.map((interest, index) => <div key={interest} className="flex items-center justify-between bg-background p-4 text-sm"><span>{interest}</span><span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span></div>)}</div></div>
      </div>
    </section>
  );
}

function Contact() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    window.location.href = `mailto:kmani3307@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
  };
  return (
    <>
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="font-mono text-xs uppercase opacity-70">Open to opportunities</p><h2 className="mt-3 text-3xl font-semibold md:text-5xl">Interested in working together?</h2><p className="mt-4 max-w-2xl text-sm leading-6 opacity-80">I'm currently exploring opportunities where I can contribute to scalable .NET applications, backend systems, cloud architecture, and distributed systems.</p></div><div className="flex shrink-0 flex-wrap gap-3"><ResumeButton /><Button size="lg" variant="secondary" asChild><a href="https://www.linkedin.com/in/mani-kumar-a977661a4/" target="_blank" rel="noreferrer">View LinkedIn <ExternalLink /></a></Button></div></div></section>
      <section id="contact" className="scroll-mt-20 bg-secondary px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading index="06" eyebrow="Contact" title="Let’s connect." copy="Have an interesting opportunity, technical discussion, or project idea? I'd be happy to connect." /><div className="grid gap-12 md:grid-cols-[1fr_2fr]"><div className="space-y-3">{socialLinks.map(({ label, value, href, icon: Icon }) => <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"} className="group flex items-center gap-4 border-b border-border py-4"><Icon className="size-4 text-primary" /><span><span className="block font-mono text-[10px] uppercase text-muted-foreground">{label}</span><span className="text-sm">{value}</span></span><ArrowRight className="ml-auto size-4 transition-transform group-hover:translate-x-1" /></a>)}</div><form onSubmit={submit} className="grid gap-5"><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm">Name<input required name="name" autoComplete="name" className="h-11 border border-input bg-background px-3 outline-none transition-shadow focus:ring-2 focus:ring-ring" /></label><label className="grid gap-2 text-sm">Email<input required name="email" type="email" autoComplete="email" className="h-11 border border-input bg-background px-3 outline-none transition-shadow focus:ring-2 focus:ring-ring" /></label></div><label className="grid gap-2 text-sm">Message<textarea required name="message" rows={6} className="resize-y border border-input bg-background p-3 outline-none transition-shadow focus:ring-2 focus:ring-ring" /></label><div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"><Button size="lg" type="submit">Send Message <ArrowRight /></Button><p className="text-xs text-muted-foreground">Opens your email app with this message ready to send.</p></div></form></div></div></section>
    </>
  );
}

export function Portfolio() {
  return (
    <TooltipProvider delayDuration={200}>
      <Navbar />
      <main><Hero /><About /><Experience /><Projects /><Skills /><Architecture /><Contact /></main>
      <footer className="border-t border-border bg-secondary px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-muted-foreground sm:flex-row"><p>© 2026 Mani Kumar</p><p>Built around systems, clarity, and craft.</p></div></footer>
    </TooltipProvider>
  );
}