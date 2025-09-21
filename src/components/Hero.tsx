import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Ayush Singhal</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Software Development Engineer
          </p>
          
          {/* Professional summary */}
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Building scalable, secure, and high-performance applications with expertise in full-stack development, 
            system optimization, and competitive programming. Currently enhancing e-commerce platforms at PaperTechy.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="hero-gradient shadow-glow transition-bounce hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="transition-bounce hover:scale-105">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://github.com/ayushsinghal304" 
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://linkedin.com/in/ayushsinghal304" 
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="mailto:ayushsinghal304@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;