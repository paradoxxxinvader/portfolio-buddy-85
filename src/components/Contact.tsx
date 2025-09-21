import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ayushsinghal304@gmail.com",
      href: "mailto:ayushsinghal304@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9027346749",
      href: "tel:+919027346749"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ghaziabad, Uttar Pradesh",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ayushsinghal304",
      description: "Check out my code and projects"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/ayushsinghal304",
      description: "Connect with me professionally"
    },
    {
      name: "Portfolio",
      icon: ExternalLink,
      href: "#",
      description: "View my complete portfolio"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a tech conversation? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 card-space shadow-nebula border border-primary/10 transition-smooth hover:shadow-stellar">
                  <a 
                    href={info.href}
                    className="flex items-center group"
                    aria-label={`${info.label}: ${info.value}`}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-smooth">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-smooth">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <Card className="p-6 card-space shadow-cosmic border border-primary/20">
              <h4 className="text-lg font-semibold mb-3 text-foreground">Ready to Start a Conversation?</h4>
              <p className="text-muted-foreground mb-4">
                Whether you're looking for a developer, have a project idea, or want to discuss technology, 
                I'm always open to new opportunities and connections.
              </p>
              <Button className="cosmic-gradient space-glow transition-bounce hover:scale-105 w-full">
                <Mail className="w-4 h-4 mr-2" />
                Send Me an Email
              </Button>
            </Card>
          </div>

          {/* Social Links & Additional Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Connect Online</h3>
            
            <div className="space-y-4 mb-8">
              {socialLinks.map((social, index) => (
                <Card key={index} className="p-6 card-space shadow-nebula border border-accent/10 transition-smooth hover:shadow-stellar hover:scale-105">
                  <a 
                    href={social.href}
                    className="flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-smooth">
                      <social.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover:text-accent transition-smooth">
                        {social.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{social.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-smooth" />
                  </a>
                </Card>
              ))}
            </div>

            {/* Additional Information */}
            <Card className="p-6 card-space shadow-nebula border border-accent/20">
              <h4 className="text-lg font-semibold mb-3 text-foreground">Current Status</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <span className="text-sm text-foreground">Available for new opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                  <span className="text-sm text-foreground">Currently at PaperTechy Pvt. Ltd.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3" />
                  <span className="text-sm text-foreground">Studying at IIIT Ranchi</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS • Designed with attention to detail
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;