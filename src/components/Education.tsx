import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, ArrowRight } from "lucide-react";

const Education = () => {
  const courses = {
    bsc: [
      { code: "CSE2310", name: "Computer Networks", credits: "5 EC" },
      { code: "CSE2425", name: "Operating Systems", credits: "5 EC" }
    ],
    msc: [
      { code: "CS4545", name: "Blockchain Engineering", credits: "5 EC" },
      { code: "CS4510", name: "Cloud Computing", credits: "5 EC" },
      { code: "CS4480", name: "Distributed Algorithms", credits: "5 EC" },
      { code: "CS4405", name: "Distributed Systems", credits: "5 EC" },
      { code: "CS4200", name: "Performance Analysis of Computer Systems", credits: "5 EC" }
    ]
  };

  const stats = [
    { icon: BookOpen, value: "7+", label: "Courses Offered" },
    { icon: Users, value: "500+", label: "Students Annually" },
    { icon: Award, value: "Excellence", label: "Teaching Quality" }
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Education & Learning
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Teaching Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preparing the next generation of computer scientists with cutting-edge courses 
            in distributed systems, blockchain technology, and high-performance computing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Teaching Philosophy */}
          <div className="lg:col-span-1 animate-slide-up">
            <Card className="h-full bg-gradient-hero text-white shadow-glow">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Teaching Philosophy</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  We combine theoretical foundations with hands-on experience, 
                  ensuring students understand both the principles and practical 
                  applications of distributed systems.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Theory meets practice</li>
                  <li>• Real-world case studies</li>
                  <li>• Industry collaboration</li>
                  <li>• Research-driven curriculum</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Courses */}
          <div className="lg:col-span-2 space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            {/* Bachelor Courses */}
            <Card className="border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-academic">Bachelor Courses</h3>
                  <Badge className="bg-primary/10 text-primary border-primary/20">BSc</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Foundational courses introducing students to network programming and system-level concepts.
                </p>
                <div className="space-y-3">
                  {courses.bsc.map((course) => (
                    <div key={course.code} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div>
                        <span className="font-semibold text-primary">{course.code}</span>
                        <span className="ml-3 text-foreground">{course.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">{course.credits}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Master Courses */}
            <Card className="border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-academic">Master Courses</h3>
                  <Badge className="bg-accent/10 text-accent border-accent/20">MSc</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Advanced courses covering cutting-edge topics in distributed systems, blockchain, and cloud computing.
                </p>
                <div className="space-y-3">
                  {courses.msc.map((course) => (
                    <div key={course.code} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div>
                        <span className="font-semibold text-primary">{course.code}</span>
                        <span className="ml-3 text-foreground">{course.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">{course.credits}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="text-center group hover:shadow-elegant transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <div className="text-3xl font-bold text-academic mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '800ms' }}>
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-academic">
                Join Our Educational Journey
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Interested in our courses or pursuing research in distributed systems? 
                Explore our educational offerings and research opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
                  View Course Catalog
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                  Student Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;