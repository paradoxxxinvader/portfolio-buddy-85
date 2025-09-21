import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "PAPERTECHY PVT. LTD.",
    role: "Web Developer",
    type: "Hybrid",
    duration: "September 2025 - Present",
    location: "India",
    achievements: [
      "Developing and optimizing a full-stack e-commerce platform for handmade products, improving load speed by 35% and enhancing navigation to reduce user drop-off",
      "Implementing secure authentication and checkout workflows, increasing successful transactions by 20%",
      "Integrating new features (wishlist, order tracking, search optimization) that boosted customer engagement and retention"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"]
  };

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building impactful solutions in professional environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 card-space shadow-cosmic border border-primary/20">
            {/* Company and role header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {experience.company}
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {experience.role}
                </h4>
                <Badge variant="secondary" className="mb-4 md:mb-0">
                  {experience.type}
                </Badge>
              </div>
              
              <div className="flex flex-col items-start md:items-end space-y-2">
                <div className="flex items-center text-muted-foreground">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  <span className="text-sm">{experience.duration}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Key achievements */}
            <div className="mb-8">
              <h5 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-accent" />
                Key Achievements
              </h5>
              <ul className="space-y-4">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                    <p className="text-foreground/90 leading-relaxed">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies used */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Technologies & Tools</h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Interested in working together?
          </p>
          <a 
            href="mailto:ayushsinghal304@gmail.com" 
            className="text-primary hover:text-accent transition-smooth font-semibold text-lg"
          >
            Let's connect and discuss opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;