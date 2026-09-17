// Single source of truth for everything the page renders.
// Mirrors ralph-complido-resume.pdf — update here when the résumé changes.

export const PROFILE = {
  name: "Ralph Miguel Complido",
  shortName: "Ralph Complido",
  title: "Agentic AI Developer & Software Engineer",
  location: "Los Angeles, CA · Willing to relocate",
  email: "rcomplido.la.usa@gmail.com",
  phone: "(323) 286-5412",
  github: "https://github.com/ralphcomplido",
  linkedin: "https://www.linkedin.com/in/rcomplido/",
  resume: "/ralph-complido-resume.pdf",
  roles: [
    "multi-agent workflows.",
    "RAG over real evidence.",
    "Python APIs on Azure.",
    "agents that cite their sources.",
  ],
  summary: [
    "I build agentic AI systems in Python — multi-agent orchestration, retrieval-augmented generation, tool calling, and MCP services deployed on Azure.",
    "My work leans on deterministic rules and human-in-the-loop review, so every conclusion stays traceable back to a cited source rather than a confident guess.",
    "Before AI, I spent a decade automating accounting, payroll, and fulfillment operations — which is why I tend to build for the workflow, not the demo.",
  ],
};

export const STATS = [
  { value: "7", label: "Certifications" },
  { value: "13+", label: "Years automating workflows" },
  { value: "5", label: "Engineering & ops roles" },
  { value: "BS", label: "Software Engineering, WGU" },
];

export const MARQUEE = [
  "Python", "Microsoft Agent Framework", "RAG", "MCP", "Tool Calling",
  "Pydantic", "Azure AI Foundry", "Azure AI Search", "Document Intelligence",
  "Content Safety", "PostgreSQL", "pgvector", "Docker", "GitHub Actions",
  "C#", "ASP.NET Core", "Angular", "TypeScript", "SQL Server", "Azure SQL",
];

export const SKILLS = [
  {
    group: "Agentic AI",
    items: [
      "Microsoft Agent Framework",
      "Multi-agent orchestration",
      "RAG",
      "Tool calling",
      "MCP",
      "Structured outputs",
      "Human-in-the-loop workflows",
      "AI guardrails",
    ],
  },
  {
    group: "Languages & Frameworks",
    items: [
      "Python",
      "Pydantic",
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "Angular",
      "TypeScript",
      "SQL",
      "HTML / CSS",
    ],
  },
  {
    group: "Azure AI",
    items: [
      "Azure AI Foundry",
      "Azure AI Search",
      "Document Intelligence",
      "Content Safety",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "Azure",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Azure Container Registry",
      "Azure Container Apps",
      "Git",
    ],
  },
  {
    group: "Data & Engineering",
    items: [
      "PostgreSQL",
      "pgvector",
      "SQL Server",
      "Azure SQL",
      "REST APIs",
      "Async programming",
      "Automated testing",
      "AuthN / AuthZ",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: "Azure AI Apps and Agents Developer Associate",
    issuer: "Microsoft",
    code: "AI-103",
    accent: "from-indigo-400/30 to-violet-500/10",
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    code: "AI-901",
    accent: "from-sky-400/30 to-cyan-500/10",
  },
  {
    name: "Claude Certified Developer — Foundations",
    issuer: "Anthropic",
    code: "",
    accent: "from-orange-400/30 to-amber-500/10",
  },
  {
    name: "Certified Cloud Practitioner",
    issuer: "AWS",
    code: "CCP",
    accent: "from-amber-400/30 to-orange-500/10",
  },
  {
    name: "Project+",
    issuer: "CompTIA",
    code: "",
    accent: "from-rose-400/30 to-pink-500/10",
  },
  {
    name: "ITIL 4 Foundation",
    issuer: "Axelos",
    code: "",
    accent: "from-emerald-400/30 to-teal-500/10",
  },
  {
    name: "IT Support Professional Certificate",
    issuer: "Google",
    code: "",
    accent: "from-blue-400/30 to-indigo-500/10",
  },
];

export const PROJECTS = [
  {
    title: "StraightTime",
    subtitle: "Multi-agent payroll analysis",
    art: "agents",
    status: "Private repo",
    href: null,
    blurb:
      "A multi-agent system that analyzes payroll records against federal wage-and-hour sources and produces evidence-backed findings for human review. Specialized agents plan, retrieve, and independently review each other's work, with conditional routing and concurrent execution to resolve incomplete or conflicting findings.",
    bullets: [
      "Azure Document Intelligence extraction and Azure AI Search RAG paired with deterministic Python rules, so every conclusion resolves to a numbered citation.",
      "Escalated records route to an analyst review queue — the system is decision support, never an autonomous decision maker.",
      "Dockerized MCP server deployed by immutable digest to Azure Container Apps on a managed identity, with no API keys anywhere.",
      "CI runs ruff, mypy strict, pytest, and a secret scan on every push.",
    ],
    tags: ["Python", "Microsoft Agent Framework", "Azure AI", "MCP", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    title: "Coffee Loyalty Platform",
    subtitle: "AI-enriched loyalty backend",
    art: "coffee",
    status: "Private repo",
    href: null,
    blurb:
      "A RESTful Flask backend for a coffee shop loyalty program — customers, orders, point accrual, and reward redemption — with Azure OpenAI wired into the write path to generate a personalized drink recommendation from each customer's order history.",
    bullets: [
      "Loyalty points award automatically on purchase and recalculate whenever an order is edited or deleted.",
      "Redemptions are rejected when the balance is short, and every successful redemption is recorded.",
      "AI responses are validated with Pydantic before they touch the database; if the model call fails, the order still succeeds and the enrichment is recorded as failed.",
      "Application-factory pattern with blueprints, structured JSON logging, rate limiting, and a pytest suite.",
    ],
    tags: ["Python", "Flask", "Pydantic", "Azure OpenAI", "SQLite", "Docker", "pytest"],
  },
  {
    title: "BookWise Accounting",
    subtitle: "Full-stack accounting platform",
    art: "ledger",
    status: "Source",
    href: "https://github.com/ralphcomplido/bookwise",
    blurb:
      "A cloud-based double-entry accounting application: chart of accounts, journal entries, balanced debit/credit validation, and reporting, secured with ASP.NET Core Identity, bearer tokens, and role-based authorization.",
    bullets: [
      "ASP.NET Core Web API (.NET 8) backend with Entity Framework Core over SQL Server / Azure SQL.",
      "Angular front end with route guards mapped to server-side roles.",
      "Shipped through Azure Container Registry into Azure Container Apps.",
    ],
    tags: ["C#", "ASP.NET Core", "Angular", "Azure SQL", "Docker", "Azure"],
  },
  {
    title: "Student Tracker",
    subtitle: ".NET MAUI mobile app",
    art: "tracker",
    status: "Source",
    href: "https://github.com/ralphcomplido/.NET-MAUI-Mobile-App-Term-Course-Assessment",
    blurb:
      "A cross-platform academic management app for tracking terms, courses, and assessments, with local persistence, validation, and notification scheduling through a structured student workflow.",
    bullets: [
      "Term → course → assessment hierarchy with date validation and conflict checks.",
      "Local SQLite persistence and scheduled reminders for upcoming assessments.",
    ],
    tags: [".NET MAUI", "C#", "SQLite", "XAML"],
  },
  {
    title: "RC Portfolio",
    subtitle: "This site",
    art: "browser",
    status: "Source",
    href: "https://github.com/ralphcomplido/ralph-portfolio",
    blurb:
      "A hand-built portfolio with no UI framework — Vite and Tailwind CSS v4, data-driven rendering, scroll-linked animation, and a reduced-motion path. Deployed continuously on Vercel.",
    bullets: [
      "Content renders from a single data module, so a résumé change is a one-file edit.",
      "IntersectionObserver reveals, cursor-tracking card glow, and scroll-spy navigation, all without a dependency.",
    ],
    tags: ["Vite", "Tailwind CSS v4", "JavaScript", "Vercel"],
  },
];

export const EXPERIENCE = [
  {
    role: "Agentic AI Developer (Apprenticeship)",
    company: "SkillStorm",
    period: "Jul 2026 — Present",
    location: "",
    current: true,
    bullets: [
      "Develop Python applications and agentic AI workflows through applied training and collaborative software projects.",
      "Build agents that retrieve evidence, use specialized tools, and coordinate tasks through structured workflows with validation and human review.",
      "Apply Python API development, database integration, asynchronous programming, and automated testing to build maintainable applications.",
      "Implement CI/CD pipelines and deploy containerized services to Azure; earned Microsoft AI-103 and AI-901 credentials.",
    ],
  },
  {
    role: "Software Engineer",
    company: "CodeLogix",
    period: "Oct 2025 — Jun 2026",
    location: "Los Angeles, CA",
    current: false,
    bullets: [
      "Developed a cloud-based accounting application using ASP.NET Core Web API, Angular, SQL Server / Azure SQL, Docker, and Azure.",
      "Implemented ASP.NET Core Identity, bearer-token authentication, and role-based authorization for accounting users.",
      "Built chart of accounts, journal entries, debit/credit validation, and reporting; deployed through Azure Container Registry and Azure Container Apps.",
    ],
  },
  {
    role: "Software Engineer",
    company: "MCGI Hub",
    period: "Apr 2025 — Oct 2025",
    location: "Remote",
    current: false,
    bullets: [
      "Contributed to an enterprise platform delivering virtual meetings and services to an international user base.",
      "Developed backend services with ASP.NET Core, Entity Framework, SQL Server, Clean Architecture, and REST API practices.",
      "Built database, API, and Angular UI components for the Configuration Management Service.",
      "Collaborated with a distributed Agile team through sprint planning, issue tracking, and cross-browser testing.",
    ],
  },
  {
    role: "Automation Engineer / Senior Accounting Specialist",
    company: "Strength United",
    period: "Jul 2019 — Apr 2025",
    location: "Northridge, CA",
    current: false,
    bullets: [
      "Built Python automation to streamline accounting, payroll, reporting, and grant management processes.",
      "Automated financial analysis, forecasting, employee timesheet preparation, and signature request workflows.",
      "Developed cost allocation processes for operating expenses and personnel costs across multiple grants.",
      "Supported finance operations and IT needs while replacing repetitive manual tasks with automated workflows.",
    ],
  },
  {
    role: "Operations Manager",
    company: "Dazzlingrock.com",
    period: "Oct 2012 — Jul 2019",
    location: "Los Angeles, CA",
    current: false,
    bullets: [
      "Automated order fulfillment workflows supporting thousands of weekly e-commerce orders.",
      "Streamlined shipping label generation, tracking updates across marketplaces, and batch barcode printing.",
      "Improved inventory and order management processes through workflow automation.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Western Governors University",
    credential: "B.S. Software Engineering",
    period: "Jul 2024 — Jan 2026",
  },
  {
    school: "UCLA Extension",
    credential: "Full Stack Web Development Program",
    period: "Jan 2017 — Jan 2018",
  },
];
