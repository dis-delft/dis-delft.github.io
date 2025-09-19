import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, ExternalLink, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Van Mourik Broekmanweg 6, 2628 XE Delft, The Netherlands"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info-st@tudelft.nl"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+31 15 278 9111"
    }
  ];

  const quickLinks = [
    { name: "Research Publications", href: "/publications" },
    { name: "Team Members", href: "/people" },
    { name: "Course Information", href: "/teaching" },
    { name: "Delft Blockchain Lab", href: "#blockchain-lab", external: true },
    { name: "TU Delft", href: "https://tudelft.nl", external: true },
    { name: "Software Technology Dept", href: "#department", external: true }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/dis-delft", label: "GitHub" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: ExternalLink, href: "https://tudelft.nl", label: "TU Delft" }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-slide-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, research opportunities, or have questions about our work? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card 
                key={item.title}
                className="group hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-academic mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
              <Mail className="mr-2 w-4 h-4" />
              Send Us an Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DIS</span>
                </div>
                <div>
                  <h3 className="font-bold text-gradient-primary">Data-Intensive Systems</h3>
                  <p className="text-sm text-muted-foreground">TU Delft</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
                Advancing distributed systems research through innovative algorithms, 
                machine learning infrastructure, and blockchain technology.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-primary/10 hover:border-primary/30"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-academic mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center"
                    >
                      {link.name}
                      {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-academic mb-4">Resources</h4>
              <ul className="space-y-2">
                {quickLinks.slice(3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center"
                    >
                      {link.name}
                      {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 Data-Intensive Systems Group, TU Delft. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Part of the <strong>Software Technology Department</strong>, Faculty EEMCS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;