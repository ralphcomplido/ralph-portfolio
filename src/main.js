import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen bg-stone-50 text-neutral-900">
    <header class="sticky top-0 z-40 border-b border-neutral-200 bg-stone-50/90 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
        <a href="#home" class="text-[13px] font-medium uppercase tracking-[0.22em] text-neutral-700">
          Ralph Complido
        </a>

        <nav class="hidden gap-8 text-[15px] text-neutral-700 md:flex">
          <a href="#home" class="hover:text-black">Home</a>
          <a href="#work" class="hover:text-black">My Work</a>
          <a href="#resume" class="hover:text-black">My Résumé</a>
        </nav>

        <button
          id="menu-button"
          type="button"
          class="text-sm text-neutral-700 md:hidden"
        >
          Menu
        </button>
      </div>
    </header>

    <div
      id="mobile-menu"
      class="fixed inset-0 z-50 hidden bg-black/20"
    >
      <div class="ml-auto flex h-full w-80 max-w-[85vw] flex-col bg-neutral-100 px-8 py-8 shadow-xl">
        <div class="flex justify-end">
          <button
            id="close-menu-button"
            type="button"
            class="text-4xl leading-none text-indigo-600"
          >
            ×
          </button>
        </div>

        <nav class="mt-10 flex flex-col gap-7 text-3xl text-indigo-600">
          <a href="#home" class="mobile-link">Home</a>
          <a href="#work" class="mobile-link">My Work</a>
          <a href="#resume" class="mobile-link">My Résumé</a>
        </nav>

        <div class="mt-16">
          <p class="text-sm uppercase tracking-[0.3em] text-indigo-200">Say Hello</p>
          <div class="mt-6 flex flex-col gap-4 text-lg text-indigo-600">
            <a href="mailto:rcomplido.la.usa@gmail.com">rcomplido.la.usa@gmail.com</a>
            <a href="https://github.com/ralphcomplido">GitHub</a>
            <a href="https://www.linkedin.com/in/rcomplido/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>

    <main>
      <section id="home" class="mx-auto max-w-5xl px-6 py-20 sm:px-8 md:py-28 lg:px-10">
        <div class="grid gap-16 md:grid-cols-[1.45fr_0.85fr]">
          <div>
            <p class="text-[13px] uppercase tracking-[0.26em] text-neutral-500">
              Software Engineer
            </p>

            <h1 class="mt-5 text-5xl font-medium tracking-[-0.03em] text-neutral-950 sm:text-6xl md:text-7xl">
              Hey, I’m Ralph
            </h1>

            <div class="mt-8 max-w-xl space-y-5 text-[17px] leading-8 text-neutral-700">
              <p>
                I build full-stack web applications using C#, ASP.NET Core, Angular,
                SQL Server, and Azure.
              </p>

              <p>
                I enjoy turning business requirements into practical, secure,
                and user-friendly software that supports real workflows.
              </p>

              <p>
                This portfolio highlights my work, technical background, and experience
                building end-to-end solutions.
              </p>
            </div>
          </div>

          <aside class="space-y-10">
            <div>
              <p class="text-[13px] uppercase tracking-[0.26em] text-neutral-500">Say Hello</p>
              <div class="mt-5 space-y-3 text-[17px] text-neutral-700">
                <a class="block hover:text-black" href="mailto:rcomplido.la.usa@gmail.com">
                  rcomplido.la.usa@gmail.com
                </a>
                <a class="block hover:text-black" href="https://github.com/ralphcomplido">GitHub</a>
                <a class="block hover:text-black" href="https://github.com/ralphcomplido">LinkedIn</a>
              </div>
            </div>

            <div>
              <p class="text-[13px] uppercase tracking-[0.26em] text-neutral-500">Core Stack</p>
              <ul class="mt-5 space-y-3 text-[17px] text-neutral-700">
                <li>C# / ASP.NET Core</li>
                <li>Angular / TypeScript</li>
                <li>SQL Server / Azure SQL</li>
                <li>Azure / REST APIs</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="work" class="mx-auto max-w-5xl border-t border-neutral-200 px-6 py-20 sm:px-8 md:py-28 lg:px-10">
        <p class="text-sm uppercase tracking-[0.28em] text-neutral-500">Selected Work</p>
        <h2 class="mt-4 text-4xl font-medium tracking-[-0.03em] text-neutral-950 sm:text-5xl">My Work</h2>

        <div class="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <a
            href="https://bookwise-web.agreeablebay-fda76882.westus2.azurecontainerapps.io/"
            target="_blank"
            rel="noreferrer"
            class="block overflow-hidden rounded-sm bg-transparent transition hover:-translate-y-1 hover:opacity-95"
          >
            <div class="flex h-[220px] items-center justify-center bg-[#f3f3f1] px-6">
              <img
                src="/accounting-app.png"
                alt="Accounting Web Application screenshot"
                class="max-h-[140px] max-w-full object-contain"
              >
            </div>

            <div class="bg-white px-8 py-8">
              <h3 class="text-[28px] font-medium tracking-[-0.02em] text-neutral-950">Accounting Web Application</h3>
              <p class="mt-3 text-neutral-700 leading-7">
                A full-stack accounting application focused on secure workflows,
                role-based access control, backend APIs, and database-driven operations.
              </p>
            </div>
          </a>

          <a
            href="https://github.com/ralphcomplido/.NET-MAUI-Mobile-App-Term-Course-Assessment"
            target="_blank"
            rel="noreferrer"
            class="block overflow-hidden rounded-sm bg-transparent transition hover:-translate-y-1 hover:opacity-95"
          >
            <div class="flex h-[220px] items-center justify-center bg-[#f3f3f1] px-6">
              <img
                src="/student-tracker.png"
                alt="Student Tracker App screenshot"
                class="max-h-[140px] max-w-full object-contain"
              >
            </div>

            <div class="bg-white px-8 py-8">
              <h3 class="text-2xl font-medium tracking-tight">Student Tracker App</h3>
              <p class="mt-3 text-neutral-700 leading-7">
                An academic management application for tracking terms, courses,
                assessments, and student progress through a structured workflow.
              </p>
            </div>
          </a>

          <a
            href="#home"
            target="_blank"
            rel="noreferrer"
            class="block overflow-hidden rounded-sm bg-transparent transition hover:-translate-y-1 hover:opacity-95"
          >
            <div class="flex h-[220px] items-center justify-center bg-[#f3f3f1] px-6">
              <img
                src="/portfolio.png"
                alt="RC Portfolio logo"
                class="max-h-[140px] max-w-full object-contain"
              >
            </div>

            <div class="bg-white px-8 py-8">
              <h3 class="text-2xl font-medium tracking-tight">RC Portfolio</h3>
              <p class="mt-3 text-neutral-700 leading-7">
                A modern personal portfolio website built to showcase my software engineering
                projects, technical background, and professional experience through a clean,
                minimal, and recruiter-focused design.
              </p>
            </div>
          </a>
        </div>

         
        </div>
      </section>

      <section id="resume" class="mx-auto max-w-5xl border-t border-neutral-200 px-6 py-20 sm:px-8 md:py-28 lg:px-10">
        <p class="text-[13px] uppercase tracking-[0.26em] text-neutral-500">Résumé</p>
        <h2 class="mt-4 text-4xl font-medium tracking-[-0.03em] text-neutral-950 sm:text-5xl">
          My Résumé
        </h2>

        <div class="mt-6">
          <a
            href="/ralph-complido-resume.pdf"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-sm text-neutral-700 transition hover:border-neutral-500 hover:text-black"
          >
            Download Résumé
          </a>
        </div>

        <!-- PROFILE -->
        <div class="mt-10 max-w-3xl text-[17px] leading-8 text-neutral-700">
          <p>
            Results-driven Software Engineer with hands-on experience building and
            deploying full-stack web applications using C#, ASP.NET Core (.NET 8),
            Angular, and SQL Server/Azure SQL. Skilled in designing RESTful APIs,
            implementing authentication and RBAC security, and delivering complete
            features from database to UI in Agile environments.
          </p>
        </div>

        <div class="mt-12 grid gap-16 lg:grid-cols-[0.9fr_1.5fr]">

          <!-- LEFT COLUMN -->
          <div class="space-y-12">

            <div>
              <h3 class="text-[13px] uppercase tracking-[0.26em] text-neutral-500">
                Languages
              </h3>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
                <li>C#</li>
                <li>TypeScript</li>
                <li>SQL</li>
                <li>Python</li>
                <li>HTML / CSS</li>
              </ul>
            </div>

            <div>
              <h3 class="text-[13px] uppercase tracking-[0.26em] text-neutral-500">
                Frameworks
              </h3>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
                <li>ASP.NET Core</li>
                <li>Entity Framework Core</li>
                <li>Angular</li>
              </ul>
            </div>

            <div>
              <h3 class="text-[13px] uppercase tracking-[0.26em] text-neutral-500">
                Cloud / DevOps
              </h3>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
                <li>Azure</li>
                <li>Docker</li>
                <li>Azure Container Registry</li>
                <li>Azure Container Apps</li>
                <li>Git</li>
              </ul>
            </div>

            <div>
              <h3 class="text-[13px] uppercase tracking-[0.26em] text-neutral-500">
                Concepts
              </h3>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
                <li>REST APIs</li>
                <li>OOP</li>
                <li>RBAC</li>
                <li>Authentication & Authorization</li>
                <li>Agile / Scrum</li>
                <li>SDLC</li>
                <li>Layered Architecture</li>
              </ul>
            </div>

            <div>
              <h3 class="text-[13px] uppercase tracking-[0.26em] text-neutral-500">
                Certifications
              </h3>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
                <li>ITIL 4</li>
                <li>CompTIA Project+</li>
                <li>AWS Certified Cloud Practitioner</li>
              </ul>
            </div>

            <div>
              <h3 class="text-[13px] uppercase tracking-[0.26em] text-neutral-500">
                Education
              </h3>

              <div class="mt-4 space-y-4 text-sm leading-7 text-neutral-700">
                <p>
                  Bachelor of Science in Software Engineering<br>
                  Western Governors University
                </p>

                <p>
                  Full Stack Web Developer Program<br>
                  UCLA Extension
                </p>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN -->
          <div class="space-y-12">

            <article>
              <h4 class="text-[22px] font-medium tracking-[-0.02em] text-neutral-950">
                Software Engineer
              </h4>
              <p class="mt-1 text-sm text-neutral-500">
                CodeLogix · Oct 2025 – Present
              </p>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
                <li>• Developing a secure cloud-based accounting web application using ASP.NET Core Web API (.NET 8), Angular, SQL Server/Azure SQL, Docker, and Azure.</li>
                <li>• Implemented authentication and RBAC authorization using ASP.NET Core Identity and bearer tokens.</li>
                <li>• Built secured APIs, Angular route guards, and core accounting workflows.</li>
                <li>• Implemented double-entry accounting with balanced debit/credit validation.</li>
                <li>• Deployed the full-stack solution using Docker, Azure Container Registry, Azure Container Apps, and Azure SQL.</li>
              </ul>
            </article>

            <article>
              <h4 class="text-[22px] font-medium tracking-[-0.02em] text-neutral-950">
                Software Engineer
              </h4>
              <p class="mt-1 text-sm text-neutral-500">
                MCGI Hub · Apr 2025 – Oct 2025
              </p>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
                <li>• Contributed to an enterprise platform supporting international users and virtual services.</li>
                <li>• Developed microservices for Identity, Attendance, Profile, Location, Privacy, and Metadata.</li>
                <li>• Applied Clean Architecture and REST API best practices.</li>
                <li>• Built database, API, and Angular/Metronic UI components for configuration management.</li>
                <li>• Collaborated in Agile Scrum teams with sprint planning and standups.</li>
              </ul>
            </article>

            <article>
              <h4 class="text-[22px] font-medium tracking-[-0.02em] text-neutral-950">
                Automation Engineer / Senior Accounting Specialist
              </h4>
              <p class="mt-1 text-sm text-neutral-500">
                Strength United · Jul 2019 – Apr 2025
              </p>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
                <li>• Built automation systems for accounting, payroll, reporting, and grant management workflows.</li>
                <li>• Automated financial analysis, forecasting, timesheets, and approval workflows.</li>
                <li>• Created cost allocation automation across multiple grant programs.</li>
                <li>• Improved operational efficiency by replacing manual processes with automated solutions.</li>
              </ul>
            </article>

            <article>
              <h4 class="text-[22px] font-medium tracking-[-0.02em] text-neutral-950">
                Operations Manager
              </h4>
              <p class="mt-1 text-sm text-neutral-500">
                Dazzlingrock.com · Oct 2012 – Jul 2019
              </p>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
                <li>• Automated high-volume order fulfillment workflows for thousands of weekly orders.</li>
                <li>• Built systems for automated shipping label generation and tracking updates.</li>
                <li>• Developed batch processes for barcode generation and inventory workflows.</li>
                <li>• Reduced operational errors and increased efficiency through automation.</li>
              </ul>
            </article>

          </div>
        </div>
      </section>
    </main>
  </div>
`;

const mobileMenu = document.querySelector("#mobile-menu");
const menuButton = document.querySelector("#menu-button");
const closeMenuButton = document.querySelector("#close-menu-button");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuButton?.addEventListener("click", () => {
  mobileMenu?.classList.remove("hidden");
});

closeMenuButton?.addEventListener("click", () => {
  mobileMenu?.classList.add("hidden");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu?.classList.add("hidden");
  });
});
