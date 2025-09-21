import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Users, Zap, Shield, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Campus Cove",
      description: "A centralized campus portal serving students, faculty, and admins, reducing information retrieval time by 40% across academics, placements, and clubs. Built with modular role-based access control for scalability.",
      longDescription: "Architected a comprehensive campus management system with secure operations supporting 500+ users. The platform streamlines academic processes, placement activities, and club management through an intuitive interface.",
      technologies: ["Python", "React.js", "Express.js", "PostgreSQL", "JWT"],
      github: "#",
      live: "#",
      icon: Users,
      highlights: ["40% faster information retrieval", "500+ active users", "Role-based access control"]
    },
    {
      title: "Quick AI",
      description: "A full-stack AI-powered content generation platform with secure role management and authentication. Features optimized APIs and database queries achieving 2x faster response times.",
      longDescription: "Designed and deployed a comprehensive AI content generation platform with enterprise-grade security. The system handles complex user roles while maintaining optimal performance for content creation workflows.",
      technologies: ["React.js", "Tailwind CSS", "Clerk", "Node.js", "Express.js", "PostgreSQL"],
      github: "#",
      live: "#",
      icon: Zap,
      highlights: ["2x faster response times", "500+ active users", "Enterprise security"]
    }
  ];

  const additionalProjects = [
    {
      title: "MatriPoshan (Hack4Bihar 2025)",
      description: "AI-driven SMS reminder system for maternal nutrition using predictive modeling and data pipelines",
      technologies: ["Python", "Machine Learning", "Data Pipelines", "SMS API"],
      icon: Shield
    },
    {
      title: "E-commerce Platform Optimization",
      description: "Enhanced full-stack e-commerce platform achieving 35% performance improvement and 20% increase in successful transactions",
      technologies: ["React.js", "Node.js", "MongoDB", "Performance Optimization"],
      icon: Database
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that demonstrate technical expertise and real-world impact
          </p>
        </div>

        {/* Main Projects */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 card-space shadow-cosmic border border-primary/10 transition-smooth hover:shadow-stellar">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  </div>
                  
                  <p className="text-foreground/90 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="transition-bounce hover:scale-105">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button size="sm" className="cosmic-gradient space-glow transition-bounce hover:scale-105">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <project.icon className="w-20 h-20 text-primary/60" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="p-6 card-space shadow-nebula border border-accent/10 transition-smooth hover:shadow-stellar hover:scale-105">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <project.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;