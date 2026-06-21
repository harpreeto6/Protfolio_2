import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpenText,
  BrainCircuit,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Network,
  Orbit,
  PackageCheck,
  Satellite,
  Search,
  Sparkles,
  Workflow,
  TerminalSquare,
} from "lucide-react";

const links = {
  github: "https://github.com/harpreeto6",
  linkedin: "https://linkedin.com/in/harpreet-singh-4523661a0",
  email: "mailto:hs3732065@gmail.com",
};

const lenses = {
  software: {
    label: "Software",
    title: "Backend / full-stack software",
    line: "Production-minded developer building durable APIs, useful product loops, and interfaces that feel calmly handled.",
    skills: ["Java", "Spring Boot", "TypeScript", "React", "PostgreSQL", "Docker"],
  },
  ai: {
    label: "AI + ML",
    title: "AI engineering + retrieval systems",
    line: "Curious about grounded AI: retrieval, embeddings, agents, model evaluation, and tools that make answers traceable.",
    skills: ["Python", "PyTorch", "FAISS", "Embeddings", "MCP", "Google ADK"],
  },
  systems: {
    label: "Systems",
    title: "Computer engineering + systems",
    line: "Comfortable moving down the stack: FPGA logic, RISC-V style datapaths, networking, and reliability habits.",
    skills: ["C/C++", "SystemVerilog", "RISC-V", "FPGA", "Networking", "Debugging"],
  },
};

const resumes = [
  {
    label: "Software resume",
    href: "/resumes/Harpreet-Singh-Software-Resume.pdf",
  },
  {
    label: "AI/ML resume",
    href: "/resumes/Harpreet-Singh-AI-ML-Resume.pdf",
  },
  {
    label: "Systems resume",
    href: "/resumes/Harpreet-Singh-Systems-Resume.pdf",
  },
];

const caseStudies = [
  {
    title: "Sensum",
    eyebrow: "Full-stack product",
    lens: "software",
    mapsTo: "Shows full-stack product engineering: auth, APIs, browser extension, and feedback loops.",
    diagram: "sensum",
    summary:
      "A wellbeing and productivity app with browser nudges, offline quests, social loops, and progress tracking.",
    proof: [
      "Built a monorepo with Spring Boot, PostgreSQL, Next.js, and a Chrome MV3 extension.",
      "Implemented BCrypt password hashing, HttpOnly JWT auth, quests, events, stats, friends, buddy sessions, and settings APIs.",
      "Designed explainable recommendation loops using complete/skip/snooze outcomes, XP, levels, and streaks.",
    ],
    stack: ["Java 17", "Spring Boot", "PostgreSQL", "Next.js", "TypeScript", "Chrome MV3"],
    link: "https://github.com/harpreeto6/sensum",
  },
  {
    title: "RAG Retrieval Pipeline",
    eyebrow: "AI systems",
    lens: "ai",
    mapsTo: "Shows AI engineering: chunking, embeddings, retrieval, evaluation, and grounded answers.",
    diagram: "rag",
    summary:
      "A local RAG pipeline for answering computer-systems questions from textbook PDFs with traceable evidence.",
    proof: [
      "Chunked 8 source documents into 11,890 MiniLM-ready chunks.",
      "Built a normalized 384-dimensional FAISS inner-product index with source/page metadata.",
      "Added query-time retrieval, unit tests, and evaluation across baseline, RAG, improved RAG, and Gemini-backed runs.",
    ],
    stack: ["Python", "PyMuPDF", "all-MiniLM-L6-v2", "FAISS", "JSONL", "Unit tests"],
    link: "https://github.com/harpreeto6/Retrieval-Augmented-Generation-RAG-",
  },
  {
    title: "QuestBoard",
    eyebrow: "Agents + cloud",
    lens: "software",
    mapsTo: "Shows backend architecture: REST/MCP boundaries, Docker workflows, and AWS deployment planning.",
    diagram: "questboard",
    summary:
      "A quest-generation service connecting a Spring Boot API to a TypeScript MCP tool server.",
    proof: [
      "Built REST/MCP service boundaries around goal, mood, and available-time inputs.",
      "Prepared AWS CDK infrastructure with VPC, ECS/Fargate, service discovery, load balancing, and CloudWatch logs.",
      "Used the project to explore tool-based agent workflows and deployable backend architecture.",
    ],
    stack: ["Java", "Spring Boot", "TypeScript", "MCP", "Docker", "AWS CDK"],
    link: "https://github.com/harpreeto6/QuestBoard",
  },
  {
    title: "AI Course Advisor",
    eyebrow: "Team project",
    lens: "ai",
    mapsTo: "Shows team backend work: validation, auth, document Q&A, citations, and regression checks.",
    diagram: "advisor",
    summary:
      "A UBC course assistant that answers questions from uploaded syllabi and documents with citations.",
    proof: [
      "Contributed backend testing, functional validation, bug resolution, and team documentation.",
      "System used Spring Boot, React/Vite, PostgreSQL via Supabase, Supabase Auth, and Gemini.",
      "Focused on reliable citation behavior, regression checks, and verification of user-facing flows.",
    ],
    stack: ["Spring Boot", "React", "PostgreSQL", "Supabase", "Gemini", "Docker"],
    link: "https://github.com/CPEN-221-2025/project-willow",
  },
  {
    title: "FPGA + RISC-V Labs",
    eyebrow: "Systems depth",
    lens: "systems",
    mapsTo: "Shows computer engineering fundamentals: datapaths, memory-mapped I/O, FSMs, and debugging.",
    diagram: "fpga",
    summary:
      "Computer engineering labs covering processor datapaths, memory-mapped I/O, FSMs, and input interfaces.",
    proof: [
      "Implemented a RISC-V style single-cycle processor with instruction/data memories, controller/datapath wiring, branching, ALU control, and loads/stores.",
      "Added memory-mapped I/O for DE10-Lite switches, LEDs, and seven-segment displays.",
      "Designed a digital safe, keypad scanner, synchronizers, debounce logic, and seven-segment display behavior.",
    ],
    stack: ["SystemVerilog", "RISC-V", "Quartus", "Questa", "DE10-Lite", "FSMs"],
  },
];

const labs = [
  {
    title: "Verified Connections",
    text: "Reference verification prototype with applicant/employer dashboards, on-chain proof status, and AI reference summaries.",
    tags: ["React", "TanStack", "AWS Bedrock", "Cloudflare"],
    link: "https://github.com/harpreeto6/verified-connections",
  },
  {
    title: "AI Agents + MCP Exploration",
    text: "Hands-on experiments with tool-calling agents, MCP servers, Agent-to-Agent patterns, and external tool access.",
    tags: ["Google ADK", "MCP", "A2A", "Tool Calling"],
  },
  {
    title: "Canvas Assistant",
    text: "Hackathon chatbot prototype for course support using Dialogflow-style intents and Canvas-like data flows.",
    tags: ["Node.js", "Dialogflow", "APIs", "Hackathon"],
  },
];

const lensIcons = {
  software: Code2,
  ai: BrainCircuit,
  systems: Cpu,
};

const diagrams = {
  sensum: {
    title: "Product system loop",
    icon: Sparkles,
    accent: "#20bca5",
    lanes: ["User experience", "Backend feedback loop"],
    nodes: [
      { x: 42, y: 96, w: 190, h: 76, label: "Next.js app", sub: "quests / stats / friends" },
      { x: 285, y: 96, w: 200, h: 76, label: "Chrome extension", sub: "nudges + focus events" },
      { x: 538, y: 96, w: 190, h: 76, label: "User actions", sub: "complete / skip / snooze" },
      { x: 52, y: 292, w: 205, h: 76, label: "Spring Boot API", sub: "auth + domain routes" },
      { x: 308, y: 292, w: 185, h: 76, label: "PostgreSQL", sub: "users / quests / events" },
      { x: 545, y: 292, w: 180, h: 76, label: "Stats engine", sub: "XP / streaks / levels" },
      { x: 255, y: 424, w: 255, h: 92, label: ["Recommendation", "loop"], sub: "explainable next quest" },
    ],
    edges: [
      [0, 2],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 0],
      [6, 1],
    ],
  },
  rag: {
    title: "Retrieval pipeline",
    icon: Search,
    accent: "#ff6b5b",
    lanes: ["Build index", "Answer query"],
    nodes: [
      { x: 42, y: 90, w: 185, h: 74, label: "PDF sources", sub: "8 docs" },
      { x: 280, y: 90, w: 205, h: 74, label: "Extract + clean", sub: "page JSONL" },
      { x: 535, y: 90, w: 185, h: 74, label: "Chunk", sub: "11,890 chunks" },
      { x: 120, y: 232, w: 210, h: 74, label: "MiniLM embed", sub: "384-d vectors" },
      { x: 430, y: 232, w: 205, h: 74, label: "FAISS index", sub: "metadata rows" },
      { x: 42, y: 380, w: 195, h: 74, label: "Question", sub: "rewrite variants" },
      { x: 285, y: 380, w: 195, h: 74, label: "Retrieve", sub: "top-k search" },
      { x: 528, y: 380, w: 210, h: 74, label: "Rerank + verify", sub: "grounded answer" },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [5, 6],
      [6, 7],
      [4, 6],
    ],
  },
  questboard: {
    title: "REST to MCP flow",
    icon: Workflow,
    accent: "#20bca5",
    lanes: ["Spring Boot orchestrator", "TypeScript MCP server"],
    nodes: [
      { x: 38, y: 98, w: 200, h: 78, label: "Client request", sub: "goal / hours / mood" },
      { x: 286, y: 98, w: 205, h: 78, label: "QuestController", sub: "POST /quest/generate" },
      { x: 540, y: 98, w: 185, h: 78, label: "QuestService", sub: "delegates" },
      { x: 118, y: 294, w: 225, h: 78, label: "McpClient", sub: "JSON-RPC tools/call" },
      { x: 410, y: 294, w: 245, h: 78, label: ["generateQuest", "tool"], sub: "structured content" },
      { x: 262, y: 424, w: 245, h: 78, label: "QuestResponse", sub: "title / steps / difficulty" },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
  },
  advisor: {
    title: "Document Q&A path",
    icon: BrainCircuit,
    accent: "#5078ff",
    lanes: ["User flow", "Backend services"],
    nodes: [
      { x: 42, y: 96, w: 190, h: 76, label: "React UI", sub: "upload + ask" },
      { x: 285, y: 96, w: 205, h: 76, label: "Supabase Auth", sub: "JWT guard" },
      { x: 540, y: 96, w: 185, h: 76, label: "AskController", sub: "/api/ask" },
      { x: 52, y: 292, w: 220, h: 76, label: "AIQueryService", sub: "doc ownership" },
      { x: 315, y: 292, w: 190, h: 76, label: "Storage", sub: "download PDF" },
      { x: 548, y: 292, w: 175, h: 76, label: "AI engine", sub: "Gemini" },
      { x: 252, y: 424, w: 260, h: 76, label: "QueryResponse", sub: "answer + citations" },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 0],
    ],
  },
  fpga: {
    title: "Processor + I/O map",
    icon: Cpu,
    accent: "#f5c84c",
    lanes: ["Datapath", "Board I/O"],
    nodes: [
      { x: 42, y: 100, w: 205, h: 78, label: "Instruction mem", sub: "fetch" },
      { x: 292, y: 100, w: 185, h: 78, label: "Controller", sub: "branch / ALU ctrl" },
      { x: 522, y: 100, w: 205, h: 78, label: "Register file", sub: "read / write" },
      { x: 140, y: 292, w: 185, h: 78, label: "ALU", sub: "execute" },
      { x: 385, y: 292, w: 205, h: 78, label: "Data memory", sub: "load / store" },
      { x: 72, y: 424, w: 235, h: 78, label: ["Memory-mapped", "I/O"], sub: "address decode" },
      { x: 405, y: 424, w: 245, h: 78, label: "DE10-Lite I/O", sub: "LED / 7-seg / switches" },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 1],
    ],
  },
};

function ArchitectureDiagram({ type }) {
  const diagram = diagrams[type] ?? diagrams.rag;
  const DiagramIcon = diagram.icon;
  const toLines = (value) => (Array.isArray(value) ? value : [value]);

  const nodeByIndex = (index) => diagram.nodes[index];
  const edgePath = ([fromIndex, toIndex]) => {
    const from = nodeByIndex(fromIndex);
    const to = nodeByIndex(toIndex);
    const x1 = from.x + from.w;
    const y1 = from.y + from.h / 2;
    const x2 = to.x;
    const y2 = to.y + to.h / 2;
    const midX = (x1 + x2) / 2;
    if (Math.abs(y1 - y2) < 20 && x2 > x1) {
      return `M ${x1} ${y1} L ${x2 - 12} ${y2}`;
    }
    return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2 - 12} ${y2}`;
  };
  const renderTextLines = (lines, className, x, y, lineHeight) =>
    toLines(lines).map((line, lineIndex) => (
      <tspan className={className} x={x} y={y + lineIndex * lineHeight} key={`${line}-${lineIndex}`}>
        {line}
      </tspan>
    ));

  return (
    <div className={`architecture-diagram ${type}`}>
      <div className="diagram-topline">
        <span>
          <DiagramIcon size={18} />
          {diagram.title}
        </span>
        <i>from code</i>
      </div>
      <svg className="diagram-svg" viewBox="0 0 760 540" role="img" aria-label={`${diagram.title} diagram`}>
        <defs>
          <marker id={`arrow-${type}`} markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0,0 L8,4 L0,8 Z" fill="#251d17" opacity="0.48" />
          </marker>
        </defs>
        <rect className="diagram-lane top" x="24" y="70" width="712" height="132" rx="10" />
        <rect className="diagram-lane bottom" x="24" y="258" width="712" height="260" rx="10" />
        <text className="diagram-lane-label" x="44" y="58">
          {diagram.lanes[0]}
        </text>
        <text className="diagram-lane-label" x="44" y="246">
          {diagram.lanes[1]}
        </text>
        {diagram.edges.map((edge) => (
          <path className="diagram-edge" d={edgePath(edge)} key={edge.join("-")} markerEnd={`url(#arrow-${type})`} />
        ))}
        {diagram.nodes.map((node, index) => (
          <g className="diagram-node-svg" key={node.label}>
            <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="9" />
            <text className="diagram-node-index" x={node.x + 14} y={node.y + 22}>
              {String(index + 1).padStart(2, "0")}
            </text>
            <text x={node.x + 14} y={node.y + 44}>
              {renderTextLines(node.label, "diagram-node-label", node.x + 14, node.y + 44, 18)}
            </text>
            <text x={node.x + 14} y={node.y + node.h - 14}>
              {renderTextLines(node.sub, "diagram-node-sub", node.x + 14, node.y + node.h - 14, 15)}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Harpreet home">
        HS
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#notes">Notes</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function HeroStudio({ activeLens }) {
  return (
    <div className="hero-studio" aria-label="Portfolio engineering studio visual">
      <div className="studio-map">
        <span className="map-node node-one">AI</span>
        <span className="map-node node-two">API</span>
        <span className="map-node node-three">FPGA</span>
        <span className="map-node node-four">UX</span>
        <svg viewBox="0 0 460 360" aria-hidden="true">
          <path d="M88 96 C180 52 256 82 362 124" />
          <path d="M105 248 C176 180 255 216 350 250" />
          <path d="M230 78 C196 152 215 220 260 300" />
        </svg>
      </div>
      <div className="terminal-card">
        <div className="terminal-top">
          <span />
          <span />
          <span />
        </div>
        <p>
          <b>{lenses[activeLens].label.toLowerCase()}</b> lens active
        </p>
        <code>build --warm --useful --traceable</code>
      </div>
      <div className="satellite-chip">
        <Satellite size={18} />
        ORBIT MOps
      </div>
      <div className="spark-chip">
        <Sparkles size={18} />
        playful systems
      </div>
    </div>
  );
}

function Hero({ activeLens, setActiveLens }) {
  const lens = lenses[activeLens];

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <Orbit size={16} />
          UBC Computer Engineering - Vancouver
        </p>
        <h1>Harpreet</h1>
        <p className="hero-role">AI + Computer Engineer</p>
        <p className="intro">
          I build across AI, software, and systems: backend services, retrieval
          pipelines, mission-operations tools, hardware-minded projects, and
          product experiences with human edges.
        </p>

        <div className="lens-switcher" aria-label="Portfolio lens selector">
          {Object.entries(lenses).map(([key, item]) => (
            <button
              className={activeLens === key ? "active" : ""}
              key={key}
              onClick={() => setActiveLens(key)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="lens-card">
          <h2>{lens.title}</h2>
          <p>{lens.line}</p>
          <div className="skill-row">
            {lens.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="hero-actions">
          <a className="primary-action" href="#work">
            See the work
            <ArrowUpRight size={18} />
          </a>
          <a className="secondary-action" href="/resumes/Harpreet-Singh-Software-Resume.pdf">
            <Download size={18} />
            Resume
          </a>
        </div>
      </div>
      <HeroStudio activeLens={activeLens} />
    </section>
  );
}

function SignalBar() {
  return (
    <section className="signal-bar" aria-label="Career highlights">
      <div>
        <span className="experience-icon amazon" aria-hidden="true">
          <PackageCheck size={22} />
        </span>
        <div className="signal-copy">
          <strong>Amazon</strong>
          <span>SDE Intern - 2026</span>
        </div>
      </div>
      <div>
        <span className="experience-icon orbit-team" aria-hidden="true">
          <Satellite size={22} />
        </span>
        <div className="signal-copy">
          <strong>UBC ORBIT</strong>
          <span>Mission operations software</span>
        </div>
      </div>
      <div>
        <span className="experience-icon ubc" aria-hidden="true">
          <GraduationCap size={22} />
        </span>
        <div className="signal-copy">
          <strong>UBC BASc</strong>
          <span>Computer Engineering - 2027</span>
        </div>
      </div>
    </section>
  );
}

function CaseStudy({ project, featured }) {
  const LensIcon = lensIcons[project.lens] ?? TerminalSquare;

  return (
    <article className={featured ? "case-study featured" : "case-study"}>
      {project.image ? (
        <div className="case-image">
          <img src={project.image} alt={`${project.title} interface screenshot`} />
        </div>
      ) : (
        <div className={`case-visual ${project.lens} diagram-visual`}>
          <ArchitectureDiagram type={project.diagram} />
        </div>
      )}
      <div className="case-copy">
        <div className="case-meta">
          <p className="eyebrow">{project.eyebrow}</p>
          <span>
            <LensIcon size={16} />
            {lenses[project.lens].label}
          </span>
        </div>
        <h3>{project.title}</h3>
        <div className="map-callout">
          <Network size={17} />
          <span>{project.mapsTo}</span>
        </div>
        <p>{project.summary}</p>
        <ul>
          {project.proof.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="case-footer">
          <div className="skill-row">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
              <Github size={18} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Work({ activeLens }) {
  const visibleProjects = useMemo(() => {
    const prioritized = caseStudies.filter((project) => project.lens === activeLens);
    const rest = caseStudies.filter((project) => project.lens !== activeLens);
    return [...prioritized, ...rest];
  }, [activeLens]);

  return (
    <section className="work-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">01 / Work</p>
        <h2>Projects and systems.</h2>
      </div>
      <div className="case-grid">
        {visibleProjects.map((project, index) => (
          <CaseStudy featured={index === 0} key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">02 / Experience</p>
        <h2>Learning in real codebases and engineering teams.</h2>
      </div>
      <div className="timeline">
        <article>
          <div className="experience-date">May 2026 - Jul 2026</div>
          <div className="experience-title">
            <span className="experience-icon amazon" aria-hidden="true">
              <PackageCheck size={22} />
            </span>
            <h3>SDE I Intern - Amazon</h3>
          </div>
          <p>
            Developing production software while contributing to implementation,
            testing, debugging, and code review workflows in a large-scale codebase.
          </p>
        </article>
        <article>
          <div className="experience-date">Jan 2026 - Present</div>
          <div className="experience-title">
            <span className="experience-icon orbit-team" aria-hidden="true">
              <Satellite size={22} />
            </span>
            <h3>MOps Software Developer - UBC ORBIT</h3>
          </div>
          <p>
            Building mission-operations software across frontend, backend, deployment,
            and testing workstreams for a satellite engineering team.
          </p>
        </article>
        <article>
          <div className="experience-date">Sept 2024 - Dec 2027</div>
          <div className="experience-title">
            <span className="experience-icon ubc" aria-hidden="true">
              <GraduationCap size={22} />
            </span>
            <h3>BASc Computer Engineering - UBC</h3>
          </div>
          <p>
            Studying software, systems, hardware, networking, machine learning, and
            the places where those layers argue with each other.
          </p>
        </article>
      </div>
    </section>
  );
}

function Labs() {
  return (
    <section className="labs-section">
      <div className="section-heading compact">
        <p className="eyebrow">03 / Lab Bench</p>
        <h2>Useful experiments and prototypes.</h2>
      </div>
      <div className="lab-grid">
        {labs.map((lab) => (
          <article className="lab-card" key={lab.title}>
            <h3>{lab.title}</h3>
            <p>{lab.text}</p>
            <div className="skill-row">
              {lab.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {lab.link ? (
              <a href={lab.link} target="_blank" rel="noreferrer">
                Open repo <ArrowUpRight size={16} />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section className="blog-section" id="notes">
      <div className="blog-intro">
        <p className="eyebrow">
          <BookOpenText size={16} />
          04 / Blog
        </p>
        <h2>Writing will live here.</h2>
        <p>
          Reserved for future build logs, AI notes, systems notes, and project retrospectives.
        </p>
      </div>
      <div className="blog-empty">
        <div className="blog-icon-stack">
          <BookOpenText size={28} />
          <Sparkles size={18} />
        </div>
        <h3>No posts yet.</h3>
        <p>Coming soon when there is real writing to publish.</p>
        <div className="blog-topics" aria-label="Future blog categories">
          <span>Build logs</span>
          <span>AI notes</span>
          <span>Systems thinking</span>
        </div>
      </div>
    </section>
  );
}

function ResumeShelf() {
  return (
    <section className="resume-section">
      <div>
        <p className="eyebrow">05 / Role-ready resumes</p>
        <h2>One portfolio, three recruiting angles.</h2>
      </div>
      <div className="resume-grid">
        {resumes.map((resume) => (
          <a href={resume.href} key={resume.href}>
            <Download size={18} />
            {resume.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="footer" id="contact">
      <div>
        <p className="eyebrow">06 / Contact</p>
        <h2>Open to software, AI engineering, and systems-flavored internships.</h2>
      </div>
      <div className="footer-actions">
        <a href={links.email}>
          <Mail size={18} />
          Email
        </a>
        <a href={links.github} target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

function App() {
  const [activeLens, setActiveLens] = useState("software");

  return (
    <main>
      <Nav />
      <Hero activeLens={activeLens} setActiveLens={setActiveLens} />
      <SignalBar />
      <Work activeLens={activeLens} />
      <Experience />
      <Labs />
      <Notes />
      <ResumeShelf />
      <Contact />
    </main>
  );
}

export default App;
