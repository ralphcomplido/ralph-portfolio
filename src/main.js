import "./style.css";
import {
  PROFILE,
  STATS,
  MARQUEE,
  SKILLS,
  CERTIFICATIONS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
} from "./data.js";

/* ---------------------------------------------------------------
   Icons
   --------------------------------------------------------------- */
const icon = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor" class="h-[18px] w-[18px]"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" class="h-[18px] w-[18px]"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="h-[18px] w-[18px]"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 7 8.1 5.4a1.6 1.6 0 0 0 1.8 0L21 7"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="h-[17px] w-[17px]"><path d="M12 3v12"/><path d="m7.5 11 4.5 4.5 4.5-4.5"/><path d="M4 20h16"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="h-[17px] w-[17px]"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" class="h-4 w-4"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m4 12.5 5 5L20 6.5"/></svg>`,
  verified: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-[15px] w-[15px]"><path d="m12 2.5 2.6 1.9 3.2-.1.9 3.1 2.6 1.9-1.2 3 1.2 3-2.6 1.9-.9 3.1-3.2-.1L12 21.5l-2.6-1.9-3.2.1-.9-3.1L2.7 14.7l1.2-3-1.2-3 2.6-1.9.9-3.1 3.2.1L12 2.5Z"/><path d="m8.8 12.2 2.2 2.2 4.2-4.4"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" class="h-5 w-5"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" class="h-6 w-6"><path d="m6 6 12 12"/><path d="M18 6 6 18"/></svg>`,
};

/* Generated cover art for projects without a screenshot. */
const art = {
  agents: `
    <svg viewBox="0 0 340 180" class="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#7c6cff"/>
          <stop offset="100%" stop-color="#22d3ee"/>
        </linearGradient>
      </defs>
      <g stroke="url(#ag)" stroke-width="1.1" opacity="0.55" fill="none">
        <path d="M170 42 L92 96"/><path d="M170 42 L170 96"/><path d="M170 42 L248 96"/>
        <path d="M92 96 L170 146"/><path d="M170 96 L170 146"/><path d="M248 96 L170 146"/>
      </g>
      <g fill="#0b0b14" stroke="url(#ag)" stroke-width="1.4">
        <circle cx="170" cy="42" r="15"/>
        <circle cx="92" cy="96" r="12"/>
        <circle cx="170" cy="96" r="12"/>
        <circle cx="248" cy="96" r="12"/>
        <circle cx="170" cy="146" r="15"/>
      </g>
      <g fill="#c9c4ff" font-size="8" font-family="ui-monospace, monospace" text-anchor="middle">
        <text x="170" y="45">plan</text>
        <text x="92" y="99">rag</text>
        <text x="170" y="99">calc</text>
        <text x="248" y="99">rev</text>
        <text x="170" y="149">cite</text>
      </g>
    </svg>`,
  coffee: `
    <svg viewBox="0 0 340 180" class="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="cf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#7c6cff"/>
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#cf)" stroke-width="1.6" stroke-linecap="round">
        <path d="M126 70h74v38a24 24 0 0 1-24 24h-26a24 24 0 0 1-24-24V70Z"/>
        <path d="M200 80h13a13 13 0 0 1 0 26h-13"/>
        <path d="M143 56c0-8 8-8 8-16M163 56c0-8 8-8 8-16M183 56c0-8 8-8 8-16" opacity="0.65"/>
        <path d="M118 146h90"/>
      </g>
      <g fill="url(#cf)" opacity="0.9">
        <circle cx="236" cy="52" r="3"/><circle cx="252" cy="66" r="2"/><circle cx="222" cy="40" r="2"/>
      </g>
      <g fill="#c9c4ff" font-size="9" font-family="ui-monospace, monospace">
        <text x="230" y="120">+25 pts</text>
      </g>
    </svg>`,
};

/* ---------------------------------------------------------------
   Partials
   --------------------------------------------------------------- */
const navItems = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const statusPill = (project) => {
  if (project.status === "Live") {
    return `<span class="chip"><span class="live-dot"></span>Live</span>`;
  }
  if (project.status === "Private repo") {
    return `<span class="chip">${icon.lock}Private repo</span>`;
  }
  return `<span class="chip">${icon.github}Source</span>`;
};

const projectCard = (project, index) => {
  const media = project.image
    ? `<img src="${project.image}" alt="${project.title} preview" loading="lazy">`
    : `<div class="h-full w-full p-4">${art[project.art] ?? ""}</div>`;

  const link = project.href
    ? `<span class="mt-6 inline-flex items-center gap-2 text-sm text-white/90">
         ${project.status === "Live" ? "Visit the app" : "View the code"} ${icon.external}
       </span>`
    : "";

  const Wrapper = project.href ? "a" : "div";
  const attrs = project.href
    ? `href="${project.href}" target="_blank" rel="noreferrer"`
    : "";

  return `
    <${Wrapper} ${attrs} class="card glass reveal" style="transition-delay:${index * 70}ms">
      <div class="card-media">${media}</div>
      <div class="p-7 sm:p-8">
        <div class="flex flex-wrap items-center gap-3">
          ${statusPill(project)}
          <span class="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-white/40">${project.subtitle}</span>
        </div>

        <h3 class="mt-4 text-2xl font-medium tracking-[-0.02em] text-white">${project.title}</h3>
        <p class="mt-3 text-[15px] leading-7 text-white/60">${project.blurb}</p>

        <ul class="mt-5 space-y-2.5">
          ${project.bullets
            .map(
              (b) => `
            <li class="flex gap-3 text-[14px] leading-6 text-white/55">
              <span class="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#7c6cff]"></span>
              <span>${b}</span>
            </li>`
            )
            .join("")}
        </ul>

        <div class="mt-6 flex flex-wrap gap-2">
          ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>

        ${link}
      </div>
    </${Wrapper}>`;
};

const experienceItem = (job) => `
  <article class="timeline-item ${job.current ? "current" : ""} reveal pb-12 last:pb-0">
    <span class="timeline-dot"></span>
    <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 class="text-xl font-medium tracking-[-0.02em] text-white">${job.role}</h3>
      ${job.current ? `<span class="chip text-[11px]"><span class="live-dot"></span>Current</span>` : ""}
    </div>
    <p class="mt-1.5 font-mono-ui text-[12px] tracking-[0.05em] text-[#a79dff]">
      ${job.company}${job.location ? ` · ${job.location}` : ""}
    </p>
    <p class="mt-1 font-mono-ui text-[11.5px] tracking-[0.1em] text-white/35">${job.period}</p>
    <ul class="mt-4 space-y-2.5">
      ${job.bullets
        .map(
          (b) => `
        <li class="flex gap-3 text-[14.5px] leading-7 text-white/60">
          <span class="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-white/30"></span>
          <span>${b}</span>
        </li>`
        )
        .join("")}
    </ul>
  </article>`;

const certCard = (cert, index) => `
  <div class="badge glass bg-gradient-to-br ${cert.accent} reveal" style="transition-delay:${index * 55}ms">
    <div class="flex items-center justify-between gap-3">
      <span class="font-mono-ui text-[10.5px] uppercase tracking-[0.18em] text-white/45">${cert.issuer}</span>
      <span class="text-[#a79dff]">${icon.verified}</span>
    </div>
    <p class="text-[15px] font-medium leading-snug text-white">${cert.name}</p>
    ${cert.code ? `<span class="font-mono-ui text-[11px] tracking-[0.12em] text-white/40">${cert.code}</span>` : ""}
  </div>`;

const skillGroup = (group, index) => `
  <div class="reveal" style="transition-delay:${index * 60}ms">
    <h3 class="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-[#a79dff]">${group.group}</h3>
    <div class="mt-4 flex flex-wrap gap-2">
      ${group.items.map((i) => `<span class="chip">${i}</span>`).join("")}
    </div>
  </div>`;

/* ---------------------------------------------------------------
   Page
   --------------------------------------------------------------- */
document.querySelector("#app").innerHTML = `
  <div class="ambient">
    <div class="aurora aurora-a"></div>
    <div class="aurora aurora-b"></div>
    <div class="aurora aurora-c"></div>
    <div class="grid-overlay"></div>
  </div>
  <div class="spotlight" id="spotlight"></div>
  <div class="progress-bar" id="progress"></div>

  <div class="relative z-10">
    <!-- ============================ NAV ============================ -->
    <header id="site-header" class="sticky top-0 z-50 border-b border-transparent transition-all duration-300">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#top" class="group flex items-center gap-2.5">
          <span class="grid h-8 w-8 place-items-center rounded-lg border border-white/15 bg-white/5 font-mono-ui text-[12px] tracking-tight text-white transition group-hover:border-[#7c6cff]/60">RC</span>
          <span class="font-mono-ui text-[12px] uppercase tracking-[0.2em] text-white/70 transition group-hover:text-white">
            ${PROFILE.shortName}
          </span>
        </a>

        <nav class="hidden items-center gap-8 text-[14.5px] md:flex">
          ${navItems.map((n) => `<a href="${n.href}" class="nav-link" data-nav>${n.label}</a>`).join("")}
        </nav>

        <div class="flex items-center gap-3">
          <a href="${PROFILE.resume}" target="_blank" rel="noreferrer" class="btn btn-ghost hidden !px-4 !py-2 !text-[13px] sm:inline-flex">
            ${icon.download} Résumé
          </a>
          <button id="menu-open" type="button" aria-label="Open menu" class="grid h-9 w-9 place-items-center rounded-lg border border-white/12 text-white/80 md:hidden">
            ${icon.menu}
          </button>
        </div>
      </div>
    </header>

    <!-- ======================= MOBILE DRAWER ======================= -->
    <div id="scrim" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm"></div>
    <aside id="drawer" class="drawer fixed right-0 top-0 z-50 h-full w-80 max-w-[86vw] border-l border-white/10 bg-[#0a0a12] px-7 py-6">
      <div class="flex justify-end">
        <button id="menu-close" type="button" aria-label="Close menu" class="text-white/70">${icon.close}</button>
      </div>
      <nav class="mt-8 flex flex-col gap-5 text-2xl tracking-[-0.02em] text-white">
        ${navItems.map((n) => `<a href="${n.href}" class="drawer-link transition hover:text-[#a79dff]">${n.label}</a>`).join("")}
      </nav>
      <div class="mt-12 border-t border-white/10 pt-8">
        <p class="eyebrow">Say hello</p>
        <div class="mt-5 flex flex-col gap-4 text-[15px] text-white/70">
          <a href="mailto:${PROFILE.email}" class="hover:text-white">${PROFILE.email}</a>
          <a href="${PROFILE.github}" target="_blank" rel="noreferrer" class="hover:text-white">GitHub</a>
          <a href="${PROFILE.linkedin}" target="_blank" rel="noreferrer" class="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </aside>

    <main id="top">
      <!-- =========================== HERO =========================== -->
      <section class="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-24 md:pt-24 lg:px-8">
        <div class="grid gap-14 lg:grid-cols-[1.35fr_0.75fr] lg:gap-16">
          <div>
            <div class="rise chip" style="animation-delay:60ms">
              <span class="live-dot"></span>
              Open to Agentic AI &amp; Software Engineering roles
            </div>

            <h1 class="rise mt-7 text-[clamp(2.75rem,8vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.045em] text-white" style="animation-delay:140ms">
              Hey, I'm Ralph.
            </h1>

            <p class="rise typed-line mt-5 text-[clamp(1.25rem,3.2vw,1.9rem)] font-light tracking-[-0.02em] text-white/70" style="animation-delay:190ms">
              I build <span id="typed" class="gradient-text"></span><span class="caret"></span>
            </p>

            <div class="rise mt-8 max-w-2xl space-y-5 text-[16.5px] leading-8 text-white/60" style="animation-delay:220ms">
              ${PROFILE.summary.map((p) => `<p>${p}</p>`).join("")}
            </div>

            <div class="rise mt-10 flex flex-wrap items-center gap-3" style="animation-delay:300ms">
              <a href="#work" class="btn btn-primary">View my work ${icon.arrow}</a>
              <a href="${PROFILE.resume}" target="_blank" rel="noreferrer" class="btn btn-ghost">
                ${icon.download} Download résumé
              </a>
            </div>
          </div>

          <aside class="rise space-y-8" style="animation-delay:380ms">
            <div class="glass rounded-2xl p-6">
              <p class="eyebrow">Currently</p>
              <p class="mt-4 text-[15px] leading-7 text-white/75">
                Agentic AI Developer at <span class="text-white">SkillStorm</span> — building Python agents,
                RAG pipelines, and MCP services on Azure.
              </p>
              <div class="mt-6 grid grid-cols-2 gap-5 border-t border-white/10 pt-6">
                ${STATS.map(
                  (s) => `
                  <div>
                    <p class="text-2xl font-medium tracking-[-0.02em] text-white">${s.value}</p>
                    <p class="mt-1 text-[12px] leading-5 text-white/45">${s.label}</p>
                  </div>`
                ).join("")}
              </div>
            </div>

            <div class="glass rounded-2xl p-6">
              <p class="eyebrow">Say hello</p>
              <div class="mt-4 flex flex-col gap-3 text-[15px]">
                <button id="copy-email" type="button" class="group flex items-center justify-between gap-3 text-left text-white/70 transition hover:text-white">
                  <span class="truncate">${PROFILE.email}</span>
                  <span id="copy-icon" class="shrink-0 text-white/35 transition group-hover:text-[#a79dff]">${icon.copy}</span>
                </button>
                <a href="${PROFILE.github}" target="_blank" rel="noreferrer" class="flex items-center gap-3 text-white/70 transition hover:text-white">${icon.github} GitHub</a>
                <a href="${PROFILE.linkedin}" target="_blank" rel="noreferrer" class="flex items-center gap-3 text-white/70 transition hover:text-white">${icon.linkedin} LinkedIn</a>
              </div>
              <p class="mt-5 border-t border-white/10 pt-4 text-[12.5px] text-white/40">${PROFILE.location}</p>
            </div>
          </aside>
        </div>
      </section>

      <!-- ========================= MARQUEE ========================= -->
      <section class="border-y border-white/8 py-5">
        <div class="marquee">
          <div class="marquee-track">
            ${[...MARQUEE, ...MARQUEE]
              .map(
                (t) => `<span class="font-mono-ui whitespace-nowrap text-[12px] uppercase tracking-[0.16em] text-white/35">${t}<span class="px-4 text-[#7c6cff]/60">/</span></span>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <!-- ========================== WORK ========================== -->
      <section id="work" class="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
        <div class="reveal">
          <p class="eyebrow">01 — Selected work</p>
          <h2 class="section-title mt-4 text-white">Things I've built</h2>
          <p class="mt-5 max-w-2xl text-[16px] leading-8 text-white/55">
            Agentic systems, production backends, and the full-stack apps that came before them.
          </p>
        </div>

        <div class="mt-12 grid gap-7 lg:grid-cols-2">
          ${PROJECTS.slice(0, 2).map((p, i) => projectCard(p, i)).join("")}
        </div>

        <div class="mt-7 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          ${PROJECTS.slice(2).map((p, i) => projectCard(p, i)).join("")}
        </div>
      </section>

      <!-- ========================= STACK ========================= -->
      <section id="stack" class="border-t border-white/8">
        <div class="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <div class="reveal">
            <p class="eyebrow">02 — Stack</p>
            <h2 class="section-title mt-4 text-white">What I work with</h2>
          </div>
          <div class="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            ${SKILLS.map((g, i) => skillGroup(g, i)).join("")}
          </div>
        </div>
      </section>

      <!-- ======================= EXPERIENCE ======================= -->
      <section id="experience" class="border-t border-white/8">
        <div class="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <div class="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <p class="eyebrow">03 — Experience</p>
              <h2 class="section-title mt-4 text-white">Where I've worked</h2>
            </div>
            <a href="${PROFILE.resume}" target="_blank" rel="noreferrer" class="btn btn-ghost !px-5 !py-2.5 !text-[13.5px]">
              ${icon.download} Full résumé (PDF)
            </a>
          </div>

          <div class="mt-14 grid gap-16 lg:grid-cols-[1.6fr_0.8fr]">
            <div class="timeline">
              ${EXPERIENCE.map(experienceItem).join("")}
            </div>

            <aside class="space-y-10">
              <div class="reveal glass rounded-2xl p-6">
                <p class="eyebrow">Education</p>
                <div class="mt-5 space-y-6">
                  ${EDUCATION.map(
                    (e) => `
                    <div>
                      <p class="text-[15px] font-medium text-white">${e.credential}</p>
                      <p class="mt-1 text-[13.5px] text-white/55">${e.school}</p>
                      <p class="mt-1 font-mono-ui text-[11.5px] tracking-[0.1em] text-white/35">${e.period}</p>
                    </div>`
                  ).join("")}
                </div>
              </div>

              <div class="reveal glass rounded-2xl p-6">
                <p class="eyebrow">Profile</p>
                <p class="mt-4 text-[14.5px] leading-7 text-white/60">
                  Agentic AI Developer and Software Engineer specializing in Python applications,
                  multi-agent workflows, and AI solutions deployed on Azure — with a supporting
                  background in C#, ASP.NET Core, and full-stack development, and years of business
                  process automation behind both.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- ===================== CERTIFICATIONS ===================== -->
      <section id="certifications" class="border-t border-white/8">
        <div class="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <div class="reveal">
            <p class="eyebrow">04 — Certifications</p>
            <h2 class="section-title mt-4 text-white">Credentials</h2>
          </div>
          <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            ${CERTIFICATIONS.map((c, i) => certCard(c, i)).join("")}
          </div>
        </div>
      </section>

      <!-- ========================= CONTACT ========================= -->
      <section id="contact" class="border-t border-white/8">
        <div class="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
          <div class="reveal text-center">
            <p class="eyebrow">05 — Contact</p>
            <h2 class="mt-5 text-[clamp(2.25rem,6.5vw,4.25rem)] font-medium leading-[1] tracking-[-0.045em]">
              <span class="gradient-text">Let's build something</span>
            </h2>
            <p class="mx-auto mt-6 max-w-xl text-[16px] leading-8 text-white/55">
              I'm open to Agentic AI and Software Engineering roles, and happy to talk through
              anything you're building with agents, RAG, or Azure.
            </p>

            <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:${PROFILE.email}" class="btn btn-primary">${icon.mail} Email me</a>
              <a href="${PROFILE.linkedin}" target="_blank" rel="noreferrer" class="btn btn-ghost">${icon.linkedin} LinkedIn</a>
              <a href="${PROFILE.github}" target="_blank" rel="noreferrer" class="btn btn-ghost">${icon.github} GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-white/8">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-[12.5px] text-white/35 sm:flex-row lg:px-8">
        <p>© ${new Date().getFullYear()} ${PROFILE.name}</p>
        <p class="font-mono-ui tracking-[0.1em]">Built with Vite + Tailwind CSS</p>
      </div>
    </footer>
  </div>
`;

/* ---------------------------------------------------------------
   Behavior
   --------------------------------------------------------------- */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Mobile drawer */
const drawer = document.querySelector("#drawer");
const scrim = document.querySelector("#scrim");

const openDrawer = () => {
  scrim.classList.remove("hidden");
  requestAnimationFrame(() => drawer.classList.add("open"));
  document.body.style.overflow = "hidden";
};

const closeDrawer = () => {
  drawer.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => scrim.classList.add("hidden"), 380);
};

document.querySelector("#menu-open")?.addEventListener("click", openDrawer);
document.querySelector("#menu-close")?.addEventListener("click", closeDrawer);
scrim?.addEventListener("click", closeDrawer);
document.querySelectorAll(".drawer-link").forEach((link) =>
  link.addEventListener("click", closeDrawer)
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
});

/* Header state + scroll progress */
const header = document.querySelector("#site-header");
const progress = document.querySelector("#progress");

const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle("header-scrolled", y > 8);

  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Scroll reveal */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* Scroll spy */
const sections = navItems
  .map((n) => document.querySelector(n.href))
  .filter(Boolean);
const navLinks = document.querySelectorAll("[data-nav]");

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) =>
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => spy.observe(section));

/* Cursor spotlight + per-card glow */
const spotlight = document.querySelector("#spotlight");
const cards = document.querySelectorAll(".card");

if (!prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener(
    "pointermove",
    (e) => {
      spotlight.style.opacity = "1";
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    },
    { passive: true }
  );

  cards.forEach((card) => {
    card.addEventListener(
      "pointermove",
      (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      },
      { passive: true }
    );
  });
}

/* Hero type-through */
const typed = document.querySelector("#typed");

if (typed) {
  if (prefersReducedMotion) {
    typed.textContent = PROFILE.roles[0];
  } else {
    let phrase = 0;
    let char = 0;
    let deleting = false;

    const tick = () => {
      const current = PROFILE.roles[phrase];
      typed.textContent = current.slice(0, char);

      if (!deleting && char < current.length) {
        char += 1;
        setTimeout(tick, 55);
      } else if (!deleting) {
        deleting = true;
        setTimeout(tick, 2100);
      } else if (char > 0) {
        char -= 1;
        setTimeout(tick, 26);
      } else {
        deleting = false;
        phrase = (phrase + 1) % PROFILE.roles.length;
        setTimeout(tick, 320);
      }
    };

    tick();
  }
}

/* Copy email */
const copyButton = document.querySelector("#copy-email");
const copyIcon = document.querySelector("#copy-icon");

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(PROFILE.email);
    copyIcon.innerHTML = icon.check;
    copyIcon.classList.add("text-emerald-400");
    setTimeout(() => {
      copyIcon.innerHTML = icon.copy;
      copyIcon.classList.remove("text-emerald-400");
    }, 1600);
  } catch {
    window.location.href = `mailto:${PROFILE.email}`;
  }
});
