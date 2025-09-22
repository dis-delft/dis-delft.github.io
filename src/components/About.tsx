import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Lightbulb, Users2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Department",
      description: "Software Technology (ST), Faculty EEMCS, TU Delft"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "BSc & MSc courses in database systems, Distributed systems, Graph Neural Networks, blockchain, and cloud computing"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leading cutting-edge research in data-intensive systems"
    },
    {
      icon: Users2,
      title: "Legacy",
      description: "Formerly the Distributed Systems (DS) group until 2023"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              About Our Group
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              Leading Research in Data Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Data-Intensive Systems (DIS) group pushes the boundaries of data-intensive computing, 
              combining theoretical foundations with real-world applications.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={item.title} 
                  className="group hover:shadow-elegant transition-all duration-300 animate-slide-up border-border/50"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-academic">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;