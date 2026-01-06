import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";

const GITHUB_URL = "https://github.com";

const Projects = () => {
  const projects = [
    {
      title: "Sensum",
      description: "A focused wellbeing + productivity app that helps you become more intentional about time online by pairing gentle browser nudges with quick 2–10 minute offline quests (Calm, Fitness, Study, Music, Friends, Outdoors). Built as a monorepo with a web app, backend API, and a Manifest V3 browser extension.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "JWT (HttpOnly)",
        "MV3 Extension",
      ],
      period: "Personal Project",
      type: "Personal Project",
      highlights: [
        "Monorepo architecture: Next.js web app + Spring Boot API + MV3 browser extension",
        "Secure auth with BCrypt password hashing and an HttpOnly JWT cookie",
        "Quest loop with recommendations, XP/levels, and streak tracking (plus telemetry batching from the extension)",
      ],
    },
    {
      title: "Fitness Tracker",
      description: "A Java Swing desktop app for tracking daily nutrition. Users can add/remove foods, track calories consumed vs. calories burned, and review previous days. Data is persisted to JSON with save/load support.",
      technologies: ["Java", "Swing", "JSON Persistence", "OOP"],
      period: "September 2024 – December 2024",
      type: "Academic Project",
      highlights: [
        "Built a full desktop GUI workflow (add/remove foods, daily totals, history view)",
        "Implemented JSON save/load so users can persist and restore tracker records",
        "Added an event logging system to record key user actions for debugging and traceability"
      ]
    },
    {
      title: "Data Science & AI Training",
      description: "Analyzed Minecraft player engagement patterns using statistical modeling to optimize server resource planning. Applied K-Nearest Neighbors and Regression techniques for predictive analysis.",
      technologies: ["R", "Statistical Modeling", "KNN", "Regression"],
      period: "September 2024 – December 2024",
      type: "Academic Project",
      highlights: [
        "Player engagement pattern analysis",
        "Server resource optimization strategies",
        "Comprehensive exploratory data analysis (EDA)"
      ]
    },
    {
      title: "Canvas Assistant AI Chatbot",
      description: "Developed an AI-powered chatbot for students using Google Dialogflow, integrated with university Canvas system for real-time data access. Built during GDSC hackathon using modern AI development tools.",
      technologies: ["Node.js", "Google Dialogflow", "Canvas API", "AI"],
      period: "March 2025",
      type: "Hackathon Project",
      highlights: [
        "AI-powered student assistance",
        "Real-time Canvas integration",
        "Rapid prototyping with AI tools"
      ]
    },
    
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Academic Project": return "bg-skill-java/20 text-skill-java border-skill-java/30";
      case "Hackathon Project": return "bg-skill-ai/20 text-skill-ai border-skill-ai/30";
      default: return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning AI, game development, 
            data science, and web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card p-8 group hover:scale-105 transition-all duration-300">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className={`mb-3 ${getTypeColor(project.type)}`}>
                    {project.type}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="bg-background/50 border-primary/30 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button asChild variant="hero" size="lg">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;