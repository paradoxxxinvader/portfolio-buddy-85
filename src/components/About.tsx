import { Card } from "@/components/ui/card";
import { Code, Database, Brain, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in React.js, Node.js, Python, and modern web technologies"
    },
    {
      icon: Database,
      title: "System Architecture",
      description: "Building scalable systems with optimized performance and security"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "200+ competitive programming challenges solved across platforms"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Delivered solutions improving performance by 35% and user engagement by 20%"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating efficient, scalable solutions that make a real impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Building Tomorrow's Software Today
            </h3>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              As a Software Development Engineer with a strong foundation in algorithms and distributed systems, 
              I specialize in creating high-performance applications that scale. Currently pursuing Computer Science 
              at IIIT Ranchi with a stellar 9.43 CGPA, I combine academic excellence with real-world experience.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey spans from optimizing e-commerce platforms to building AI-powered content generation systems, 
              always focusing on user experience and system efficiency. I thrive on solving complex challenges and 
              delivering solutions that matter.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 card-space shadow-cosmic border border-primary/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-stellar">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Current Role</h4>
              </div>
              <p className="text-muted-foreground">
                Web Developer at PaperTechy Pvt. Ltd., developing full-stack e-commerce solutions 
                with 35% performance improvements
              </p>
            </Card>

            <Card className="p-6 card-space shadow-cosmic border border-accent/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4 shadow-stellar">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-semibold">Education</h4>
              </div>
              <p className="text-muted-foreground">
                Computer Science & Engineering at IIIT Ranchi (2023-2027) with 9.43 CGPA, 
                focusing on algorithms and system design
              </p>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="p-6 card-space shadow-nebula border border-primary/10 transition-smooth hover:shadow-stellar hover:scale-105"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <highlight.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-center">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground text-center">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;