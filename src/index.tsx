import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sumit| AI Security & Automation</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-zinc-900 text-stone-200 font-sans p-6 md:p-12 lg:max-w-4xl mx-auto">
        <header class="mb-10">
          <h1 class="text-4xl font-bold text-white mb-2">👋 Sumit Gupta</h1>
          <p class="text-lg text-zinc-400">
            AI Agentic Systems, Automation, and Web Security
          </p>
          <hr class="bg-neutral mt-3 mb-3"></hr>
          <p class="md:font-semibold">
            Minimalizing my work life... I enjoy gasping things at low pace to give top level directions to complex problems
          </p>


        </header>

        <section class="mb-10">
          <ul class="space-y-3">
            <li>🔭 <strong>Currently working on:</strong> AI agentic systems, automation, and web security</li>
            <li>👯 <strong>Looking to collaborate on:</strong> Anything that involves connecting complex dots</li>
            <li>🤝 <strong>Looking for help with:</strong> Exploring AI security, automation gaps, risk management, and compliance</li>
            <li>🌱 <strong>Currently learning:</strong> AI and Web Security, forensics, blue team tools</li>
            <li>💬 <strong>Ask me about:</strong> Implementing AI/LLM workflow integrations</li>
          </ul>
        </section>

        <section class="mb-10 bg-zinc-800 p-6 rounded-lg border border-zinc-700">
          <h2 class="text-2xl font-semibold text-blue-400 mb-4">⚡ 3 Fun Facts</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>I am a VATSIM pilot—real life flight sim network</li>
            <li>Been journaling for 15+ years now -&gt; book publishing soon</li>
            <li>On weekends, I'm in CTFs, writing Medium blogs, or chilling</li>
          </ul>
        </section>

        <section class="mb-10 flex flex-wrap gap-4">
          <a href="https://github.com/Steosumit/Steosumit/blob/main/Resume.pdf" target="_blank"><img src="https://img.shields.io/badge/Resume-latest-green?style=for-the-badge" alt="Resume" /></a>
          <a href="https://medium.com/@steosumit" target="_blank"><img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium" /></a>
          <a href="https://www.linkedin.com/in/steosumit" target="_blank"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <section>
            <h3 class="text-xl font-semibold mb-4 text-white">🔠 Programming Languages</h3>
            <div class="flex flex-wrap gap-2">
              <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
              <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
              <img src="https://img.shields.io/badge/-Python-306998?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
              <img src="https://img.shields.io/badge/-C%20%2F%20C%2B%2B-0574fc?style=for-the-badge&logo=c%2b%2b&logoColor=white" alt="C/C++" />
            </div>
          </section>

          <section>
            <h3 class="text-xl font-semibold mb-4 text-white">💻 Cloud Experience</h3>
            <div class="flex flex-wrap gap-2">
              <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
              <img src="https://img.shields.io/badge/OCI-F80000?style=for-the-badge&logo=oracle&logoColor=white" alt="Oracle Cloud" />
            </div>
          </section>
        </div>

        <section class="mb-10">

          <h2 class="text-2xl font-semibold border-b border-zinc-700 pb-2 mb-4 text-white">📽️ Projects</h2>
          <div class="space-y-4">
            <div>
              <a href='http://github.com/Steosumit/open-multi-agent'>
                <h3 class="font-semibold text-blue-400">open-multi-agent</h3>
              </a>
              <p class="text-sm text-zinc-400">multi-agent orchestration platform leveraging FastAPI (gateway), LangGraph, and local MCP (FastMCP) featuring
protocol-agnostic clients, Redis-backed short-term and RAG-based long-term memory, security controls, and
end-to-end traceability with security first AI orchestration added A2A extension support for OpenClaw
              </p>
            </div>

            <div>
              <a href='http://github.com/Steosumit/GenericNoobAI'>
                <h3 class="font-semibold text-blue-400">GenericNoobAI</h3>
              </a>
              <p class="text-sm text-zinc-400">Multi-modal agent with custom tool integration for web search, audio analysis, read/write, performing 30% on GAIA benchmark test.</p>
            </div>

            <div>
              <a href='http://github.com/Steosumit/llm-compare-hub'>
                <h3 class="font-semibold text-blue-400">llm-compare-hub</h3>
              </a>
              <p class="text-sm text-zinc-400">Flexible prompt playground for prompt engineering, drag drop prompt patterns, change prompt sequence, evaluate response matrices.</p>
            </div>

            <div>
              <a href='http://github.com/Steosumit/loc-based-attendance'>
                <h3 class="font-semibold text-blue-400">loc-based-attendance</h3>
              </a>
              <p class="text-sm text-zinc-400">Geolocation validation attendance app for college attendance tracking.</p>
            </div>

          </div>
        </section>

        <section class="mb-10">
          <h2 class="text-2xl font-semibold border-b border-zinc-700 pb-2 mb-4 text-white">💼 Experience</h2>
          <div class="space-y-6">
            <div>
              <h3 class="font-semibold text-blue-400 text-lg">Development Intern</h3>
              <h4><i>NCBitz Technologies Pvt Ltd, Gandhinagar</i></h4>
              <p class="text-sm text-zinc-300">Designed and refactored Admin dashboard components, integrated served backend data with frontend components, created vehicle, bookings, users, forms, and monitoring pages.</p>
            </div>
            <div>
              <h3 class="font-semibold text-blue-400 text-lg">Data Analyst Intern</h3>
              <h4><i>NFSU, Gandhinagar</i></h4>
              <p class="text-sm text-zinc-300">Exploratory data analysis and preprocessing of Gujarat gov. truck supply chain data (50GB). Developed anomaly detection python notebooks, identified 100+ anomalous transactions using graph modeling of weight shifts.</p>
            </div>
            <div>
              <h3 class="font-semibold text-blue-400 text-lg">Genomic Research Tech Lead</h3>
              <h4><i>NFSU, Gandhinagar</i></h4>
              <p class="text-sm text-zinc-300">Preprocessed 250GB+ genomic data (1000 Genome Project, T2T) to extract Y Chromosomes; developed notebooks for handling VCF to CSV conversion, clustering SNPs, genomic matrix calculation, and feature selection.</p>
            </div>
          </div>
        </section>

        <section class="mb-10">
          <h2 class="text-2xl font-semibold border-b border-zinc-700 pb-2 mb-4 text-white">🏅 Certificates</h2>
          <ul class="list-disc list-inside space-y-1 text-zinc-300">
            <li>Oracle Certified 2025 GenAI Professional</li>
            <li>Oracle Certified 2025 Data Science Professional</li>
            <li>ISC2 Certified in Cybersecurity (Passed)</li>
          </ul>
        </section>

      </body>
    </html>
  )
})

export default app