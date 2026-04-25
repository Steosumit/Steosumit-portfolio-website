import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Sumit | AI Security & Automation </title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style dangerouslySetInnerHTML={{__html: `
          /* Base state: invisible and shifted down */
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 1.5s cubic-bezier(0.5, 0, 0, 1);
          }
          /* Active state: fully visible and in original position */
          .reveal.reveal-active {
            opacity: 1;
            transform: translateY(0);
          }
          /* Stagger delays for the experience items */
          .delay-100 { transition-delay: 300ms; }
          .delay-200 { transition-delay: 500ms; }
          .delay-300 { transition-delay: 700ms; }
          
          @keyframes blink-animation {
            0% { background-color: white; }
            100% { background-color: yellow; }
          }
          
          .blink {
            animation: blink-animation 1.5s 1;
          }
          
          @keyframes bounceAnimation {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          
          .bounce {
            animation-name: bounceAnimation;
            animation-duration: 1s;
            animation-timing-function: ease;
            animation-iteration-count: 2;
            animation-direction: normal;
            animation-fill-mode: both;
          }
          
          /* Animation stagger delays */
          .anim-delay-100 { animation-delay: 150ms; }
          .anim-delay-200 { animation-delay: 300ms; }
          .anim-delay-300 { animation-delay: 450ms; }

        `}} />
      </head>
      {/* Swapped slate for warm, paper-like stone colors. Selection highlight is an editorial rose. */}
      <body class="bg-stone-100 text-stone-800 font-sans antialiased py-8 md:py-12 selection:bg-rose-200 selection:text-rose-900">
        <main class="max-w-4xl mx-auto bg-[#faf8f5] p-8 md:p-16 rounded-sm shadow-sm border border-stone-300">
          <header class="mb-10 reveal">
            {/* Name uses a classic serif font */}
            <h1 class="text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight mb-2">
              Sumit Gupta
            </h1>
            {/* Subtitle is italicized like a journal entry */}
            <pre class="text-xl font-serif italic text-rose-800 mb-4">
              Cybersecurity Student
            </pre>
          </header>
          
          <section class="mb-10 reveal delay-100">
            <h2 class="text-xl font-serif font-semibold text-stone-800">Follow My Journey</h2>
            
            <div class="flex flex-wrap gap-4 text-sm font-medium text-stone-500 mb-6 mt-6 uppercase tracking-wider lg:w-max">
              <a
                href="https://github.com/Steosumit/Steosumit/blob/main/Resume.pdf"
                target="_blank"
                class="hover:text-rose-700 transition-colors flex items-center gap-1 border-b border-transparent hover:border-rose-700 pb-0.5 bounce anim-delay-100"
              >
                📄 Resume
              </a>
              <span class="text-stone-300">•</span>
              <a
                href="https://www.linkedin.com/in/steosumit"
                target="_blank"
                class="hover:text-rose-700 transition-colors flex items-center gap-1 border-b border-transparent hover:border-rose-700 pb-0.5 bounce anim-delay-200"
              >
                💼 LinkedIn
              </a>
              <span class="text-stone-300">•</span>
              <a
                href="https://medium.com/@steosumit"
                target="_blank"
                class="hover:text-rose-700 transition-colors flex items-center gap-1 border-b border-transparent hover:border-rose-700 pb-0.5 bounce anim-delay-300"
              >
                ✍️ Medium
              </a>
            </div>
          </section>
          
          <section class="mb-10 reveal delay-200 relative group overflow-hidden rounded-sm border border-stone-300">
            <img 
              src="/mypic.jpeg" 
              alt="Sumit Gupta" 
              class="size-full object-cover object-top"
            />
            {/* The Overlay - Always visible initially */}
            <div id="scroll-overlay" class="absolute inset-0 bg-stone-900/60 flex flex-col items-center transition-opacity duration-700 z-10 pointer-events-none">
              
              <div class="absolute top-5 w-full px-4 flex justify-between items-start gap-4 text-stone-100 font-mono text-sm">
                
                {/* Left Flex Box */}
                <div class="text-left max-w-[45%]">
                  <b>What are my life updates?</b>
                  <ul>
                    <li>- Published 4+ software</li>
                    <li>- Featured on 1 Platform</li>
                  </ul>
                </div>
                
                {/* Right Flex Box */}
                <div class="text-right max-w-[45%]">
                  <b class="">What am I doing now?</b>
                  <ul>
                    <li> - Learning AI Security</li>
                    <li> - Developing AI workflow solutions</li>
                  </ul>
                </div>
              </div>
              
              <div class="absolute bottom-1/3 flex flex-col items-center">
                <p class="text-stone-100 font-mono text-xl uppercase">
                  Scroll Down
                </p> 
                <svg class="w-8 h-8 text-stone-100 mt-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>                
              </div>
            </div>
          </section>
          
          <section class="mb-10 reveal">
            <h2 class="text-2xl font-serif font-bold text-stone-900 border-b-2 border-stone-300 pb-2 mb-6">
              My Projects
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project cards look like index cards or neat dossier entries */}
              <a
                href="http://github.com/Steosumit/open-multi-agent"
                target="_blank"
                class="block group p-5 rounded-sm border border-stone-300 hover:border-rose-400 hover:bg-white transition-all bg-[#faf8f5] reveal delay-100"
              >
                <h3 class="font-serif font-bold text-stone-900 group-hover:text-rose-800 mb-2 flex items-center gap-2">
                  open-multi-agent{" "}
                  <span class="text-xs font-sans font-medium px-2 py-0.5 border border-stone-200 text-stone-600 rounded">
                    AI Agents/Security
                  </span>
                </h3>
                <p class="text-sm text-stone-600 leading-relaxed">
                  Multi-agent orchestration framwork from scratch leveraging FastAPI,
                  LangGraph, and local FastMCP. Features Redis-backed memory,
                  security controls, and end-to-end traceability.
                </p>
              </a>

              <a
                href="http://github.com/Steosumit/GenericNoobAI"
                target="_blank"
                class="block group p-5 rounded-sm border border-stone-300 hover:border-rose-400 hover:bg-white transition-all bg-[#faf8f5] reveal delay-200"
              >
                <h3 class="font-serif font-bold text-stone-900 group-hover:text-rose-800 mb-2 flex items-center gap-2">
                  GenericNoobAI{" "}
                  <span class="text-xs font-sans font-medium px-2 py-0.5 border border-stone-200 text-stone-600 rounded">
                    AI Agents
                  </span>
                </h3>
                <p class="text-sm text-stone-600 leading-relaxed">
                  Multi-modal agent with custom tool integration for web search,
                  audio analysis, and file I/O, achieving 30% on the GAIA
                  benchmark test.
                </p>
              </a>

              <a
                href="http://github.com/Steosumit/llm-compare-hub"
                target="_blank"
                class="block group p-5 rounded-sm border border-stone-300 hover:border-rose-400 hover:bg-white transition-all bg-[#faf8f5] reveal delay-300"
              >
                <h3 class="font-serif font-bold text-stone-900 group-hover:text-rose-800 mb-2 flex items-center gap-2">
                  llm-compare-hub{" "}
                  <span class="text-xs font-sans font-medium px-2 py-0.5 border border-stone-200 text-stone-600 rounded">
                    Prompt Eng
                  </span>
                </h3>
                <p class="text-sm text-stone-600 leading-relaxed">
                  Flexible playground for prompt engineering. Features
                  drag-and-drop prompt patterns, sequence management, and
                  response matrix evaluation.
                </p>
              </a>

              <a
                href="http://github.com/Steosumit/loc-based-attendance"
                target="_blank"
                class="block group p-5 rounded-sm border border-stone-300 hover:border-rose-400 hover:bg-white transition-all bg-[#faf8f5] reveal delay-100"
              >
                <h3 class="font-serif font-bold text-stone-900 group-hover:text-rose-800 mb-2 flex items-center gap-2">
                  loc-based-attendance{" "}
                  <span class="text-xs font-sans font-medium px-2 py-0.5 border border-stone-200 text-stone-600 rounded">
                    Web Dev
                  </span>
                </h3>
                <p class="text-sm text-stone-600 leading-relaxed">
                  Geolocation validation attendance application designed for
                  accurate and reliable college attendance tracking.
                </p>
              </a>
            </div>
          </section>
          
          <section class="mb-10 reveal">
            <h2 class="text-2xl font-serif font-bold text-stone-900 border-b-2 border-stone-300 pb-2 mb-6">
              My Experience
            </h2>

            <div class="space-y-8 border-l-2 border-stone-200 pl-4 ml-2">
              <article class="relative reveal delay-100">
                <div class="absolute -left-[23px] top-1.5 w-3 h-3 bg-rose-700 rounded-full border-2 border-[#faf8f5]"></div>
                <div class="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 class="text-xl font-serif font-bold text-stone-900">
                    Data Analyst Intern
                  </h3>
                  <span class="text-rose-800 font-medium text-sm italic">
                    NFSU, Gandhinagar
                  </span>
                </div>
                <ul class="list-disc pl-5 space-y-2 text-stone-700 leading-relaxed marker:text-stone-400">
                  <li>
                    Analyzed 50GB+ Gujarat Government supply chain dataset using Pandas, performing exploratory data analysis to
                    identify 15 location-driven features and 10 data inconsistent fields impacting downstream processing
                  </li>
                  <li>
                    Engineered 5 new temporal features (distance, transit time, location dependency) and standardized coordinate
                    formats, improving data quality for anomaly detection workflows
                  </li>
                  <li>
                    Designed anomaly detection pipeline using rolling average, visualized through Matplotlib line charts to detect 10+
                    abnormal weight shifts in truck sensor data
                  </li>
                </ul>
              </article>
              
              <article class="relative reveal delay-200">
                <div class="absolute -left-[23px] top-1.5 w-3 h-3 bg-stone-300 rounded-full border-2 border-[#faf8f5]"></div>
                <div class="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 class="text-xl font-serif font-bold text-stone-900">
                    Development Intern
                  </h3>
                  <span class="text-rose-800 font-medium text-sm italic">
                    NCBitz Technologies Pvt Ltd, Gandhinagar
                  </span>
                </div>
                <ul class="list-disc pl-5 space-y-2 text-stone-700 leading-relaxed marker:text-stone-400">
                  <li>
                    Engineered user and vehicle monitoring modules using React and TypeScript for WhiteCarbon ride management
                    dashboard, developed dynamic form components for user, vehicle, and booking workflows delivered within a 3-week
                    sprint
                  </li>
                  <li>
                    Integrated Node.js RESTful APIs with React frontend using asynchronous data fetching, reducing data
                    synchronization latency for search queries to under 10 seconds
                  </li>
                  <li>
                    Conducted end-to-end testing of the ride management dashboard, identifying and resolving 5–10 bugs and
                    client-requested changes per week
                  </li>
                </ul>
              </article>
              
              <article class="relative reveal delay-300">
                <div class="absolute -left-[23px] top-1.5 w-3 h-3 bg-stone-300 rounded-full border-2 border-[#faf8f5]"></div>
                <div class="flex flex-col md:flex-row md:items-baseline mb-2">
                  
                  <div class="flex items-baseline gap-2">
                    <h3 class="text-xl font-serif font-bold text-stone-900">
                      Genomic Research Tech Lead
                    </h3>
                    <i class="text-stone-500 text-sm">(Ongoing)</i>
                  </div>
                
                  <span class="text-rose-800 font-medium text-sm italic md:ml-auto">
                    NFSU, Gandhinagar
                  </span>
                </div>
                
                <ul class="list-disc pl-5 space-y-2 text-stone-700 leading-relaxed marker:text-stone-400">
                  <li>
                    Preprocessed over 250GB of genomic data (1000 Genome Project, T2T) to extract Y Chromosomes records using BCFTool and EmEditor
                  </li>
                  <li>
                    Developed python notebooks for VCF to CSV conversion, clustering SNPs as per research requirements, and Linkage Disequilibrium (LD) analysis
                  </li>
                  <li>
                    Implemented genomic matrix calculations and feature selection for downstream analysis
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section class="reveal">
            <h2 class="text-2xl font-serif font-bold text-stone-900 border-b-2 border-stone-300 pb-2 mb-4">
              Certifications & Fun Facts
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-700">
              <div class="bg-white p-5 rounded-sm border border-stone-200 shadow-sm reveal delay-100">
                <h3 class="font-serif font-bold text-stone-900 mb-3 border-b border-stone-100 pb-2">
                  Certifications
                </h3>
                <ul class="list-disc pl-4 space-y-1.5 marker:text-rose-700">
                  <li>Oracle Certified 2025 GenAI Professional</li>
                  <li>Oracle Certified 2025 Data Science Professional</li>
                  <li>ISC2 Certified in Cybersecurity (Passed)</li>
                  <li>Leadership as a Practice by <a class="text-rose-700 hover:text-rose-900 underline decoration-rose-200 underline-offset-4" href="https://tiltingfutures.org/global-citizen-year-fellowship/">Tilting Futures</a>(Fellowship)</li>
                </ul>
              </div>
              <div class="bg-white p-5 rounded-sm border border-stone-200 shadow-sm reveal delay-200">
                <h3 class="font-serif font-bold text-stone-900 mb-3 border-b border-stone-100 pb-2">
                  Beyond the Code
                </h3>
                <ul class="list-disc pl-4 space-y-1.5 marker:text-rose-700">
                  <li>Active VATSIM pilot (real-life flight sim network)</li>
                  <li>Journaling for 15+ years (book publishing soon)</li>
                  <li>Weekend CTF player and Medium blogger</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <script dangerouslySetInnerHTML={{__html: `
          document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('reveal-active');
                  // Stop observing once revealed so it doesn't re-animate on scroll up
                  observer.unobserve(entry.target); 
                }
              });
            }, {
              threshold: 0.1, // Triggers when 10% of the element is visible
              rootMargin: "0px 0px -50px 0px" // Adds a slight buffer before triggering
            });

            document.querySelectorAll('.reveal').forEach((el) => {
              observer.observe(el);
            });

            // Vanish overlay on scroll
            const overlay = document.getElementById('scroll-overlay');
            if (overlay) {
              window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                  overlay.style.opacity = '0';
                } else {
                  overlay.style.opacity = '1';
                }
              });
            }
          });
        `}} />
      </body>
    </html>,
  );
});

export default app;