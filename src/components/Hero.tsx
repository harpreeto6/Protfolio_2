import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const GITHUB_URL = "https://github.com";
const LINKEDIN_URL = "https://linkedin.com/in/harpreet-singh-4523661a0";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">
              Hello, I'm
            </p>
          </div>

          {/* Name */}
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gradient">Harpreet</span>
              <br />
              <span className="text-foreground">Singh</span>
            </h1>
          </div>

          {/* Title */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Computer Engineering Student & Developer
            </h2>
          </div>

          {/* Description */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Passionate about creating innovative solutions through code. 
              Currently pursuing Computer Engineering at UBC while building 
              projects that make a difference.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild variant="hero" size="lg" className="group">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                View My Work
              </a>
            </Button>
            <a
              href="/Harpreet_Singh_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="glass" size="lg" className="group">
                <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={20} />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;