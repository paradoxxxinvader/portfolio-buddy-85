import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Wrench, Trophy, GraduationCap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "C++", "JavaScript", "TypeScript"],
      color: "primary"
    },
    {
      title: "Frontend Development",
      icon: Server,
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js", "Next.js", "SEO"],
      color: "accent"
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Node.js", "Express.js", "Flask", "MongoDB", "PostgreSQL", "MySQL", "REST APIs"],
      color: "primary"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Linux/Ubuntu", "Git", "Postman", "VS Code", "Vercel", "Netlify", "Clerk"],
      color: "accent"
    },
    {
      title: "Machine Learning",
      icon: GraduationCap,
      skills: ["NumPy", "pandas", "scikit-learn", "TensorFlow", "Data Analysis"],
      color: "primary"
    },
    {
      title: "Core Expertise",
      icon: Trophy,
      skills: ["Data Structures & Algorithms", "OOP", "Agile Development", "Secure Systems", "Performance Optimization"],
      color: "accent"
    }
  ];

  const competitiveProgramming = {
    title: "Competitive Programming",
    achievements: [
      "200+ problems solved across LeetCode, CodeChef, and Codeforces",
      "CodeChef: ★★ (Rating 1500)",
      "Codeforces: Active Participant",
      "Focus on complexity optimization and algorithmic thinking"
    ]
  };

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 card-space shadow-nebula border border-primary/10 transition-smooth hover:shadow-stellar hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${category.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant={category.color === 'primary' ? 'default' : 'secondary'}
                    className="text-xs transition-smooth hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Competitive Programming Highlight */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 card-space shadow-cosmic border border-accent/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {competitiveProgramming.title}
              </h3>
              <p className="text-muted-foreground">
                Proven problem-solving skills through competitive programming
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {competitiveProgramming.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0" />
                  <p className="text-foreground/90">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Ready to Build</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With expertise spanning from frontend frameworks to backend systems, machine learning to competitive programming, 
            I'm equipped to tackle complex challenges and deliver high-quality solutions that scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;