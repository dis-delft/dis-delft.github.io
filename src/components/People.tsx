import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ExternalLink, MapPin, GraduationCap } from "lucide-react";
import personPlaceholder from "@/assets/person-placeholder.jpg";

const People = () => {
  // Sample team data - replace with actual team information
  const faculty = [
    {
      name: "Prof. Dr. Jan Smith",
      role: "Professor & Group Leader",
      image: personPlaceholder,
      research: ["Distributed Systems", "Blockchain Technology", "Consensus Algorithms"],
      email: "j.smith@tudelft.nl",
      office: "HB 08.230",
      bio: "Leading research in distributed systems and blockchain technology. 15+ years experience in system design and implementation."
    },
    {
      name: "Dr. Sarah Johnson", 
      role: "Associate Professor",
      image: personPlaceholder,
      research: ["Machine Learning Systems", "Federated Learning", "AI Infrastructure"],
      email: "s.johnson@tudelft.nl",
      office: "HB 08.240",
      bio: "Expert in large-scale machine learning systems and distributed AI architectures."
    },
    {
      name: "Dr. Michael Chen",
      role: "Assistant Professor", 
      image: personPlaceholder,
      research: ["Data Management", "Cloud Computing", "Performance Analysis"],
      email: "m.chen@tudelft.nl",
      office: "HB 08.250",
      bio: "Specializing in data-intensive systems and cloud infrastructure optimization."
    }
  ];

  const researchers = [
    {
      name: "Dr. Emily Rodriguez",
      role: "Postdoctoral Researcher",
      image: personPlaceholder,
      research: ["Resilient Systems", "Fault Tolerance", "Distributed Consensus"],
      email: "e.rodriguez@tudelft.nl",
      office: "HB 08.120"
    },
    {
      name: "Dr. Alex Kim",
      role: "Senior Researcher",
      image: personPlaceholder,
      research: ["Blockchain Security", "Cryptocurrency Systems", "Privacy"],
      email: "a.kim@tudelft.nl", 
      office: "HB 08.130"
    }
  ];

  const phd_students = [
    {
      name: "Lisa Zhang",
      role: "PhD Candidate",
      image: personPlaceholder,
      research: ["Federated Learning", "Privacy-Preserving ML"],
      email: "l.zhang@student.tudelft.nl",
      year: "4th Year"
    },
    {
      name: "David Wilson",
      role: "PhD Candidate", 
      image: personPlaceholder,
      research: ["Blockchain Scalability", "Layer 2 Solutions"],
      email: "d.wilson@student.tudelft.nl",
      year: "3rd Year"
    },
    {
      name: "Anna Kowalski",
      role: "PhD Candidate",
      image: personPlaceholder,
      research: ["Data Stream Processing", "Real-time Systems"],
      email: "a.kowalski@student.tudelft.nl",
      year: "2nd Year"
    },
    {
      name: "Roberto Silva",
      role: "PhD Candidate",
      image: personPlaceholder,
      research: ["Distributed Databases", "Query Optimization"],
      email: "r.silva@student.tudelft.nl", 
      year: "1st Year"
    }
  ];

  const PersonCard = ({ person, showBio = false }: { person: any, showBio?: boolean }) => (
    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 border-border/50">
      <CardContent className="p-0">
        {/* Photo */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              <Button size="sm" variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </Button>
              <Button size="sm" variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-academic group-hover:text-primary transition-colors duration-200">
              {person.name}
            </h3>
            <p className="text-muted-foreground font-medium">{person.role}</p>
          </div>

          {/* Research Areas */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Research Interests
            </h4>
            <div className="flex flex-wrap gap-1">
              {person.research.map((area: string) => (
                <Badge key={area} variant="secondary" className="text-xs">
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bio for faculty */}
          {showBio && person.bio && (
            <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
              {person.bio}
            </p>
          )}

          {/* Contact Info */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-primary" />
              <span className="truncate">{person.email}</span>
            </div>
            {person.office && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>Office: {person.office}</span>
              </div>
            )}
            {person.year && (
              <div className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                <span>{person.year}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="people" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Meet Our Researchers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse team of world-class researchers, educators, and students working together 
            to advance the frontiers of data-intensive systems and distributed computing.
          </p>
        </div>

        {/* Faculty Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8 animate-slide-up">
            <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mr-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-academic">Faculty Members</h3>
              <p className="text-muted-foreground">Leading researchers and educators</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {faculty.map((person, index) => (
              <div 
                key={person.name}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PersonCard person={person} showBio={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Researchers Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8 animate-slide-up">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-academic">Research Staff</h3>
              <p className="text-muted-foreground">Postdocs and senior researchers</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {researchers.map((person, index) => (
              <div 
                key={person.name}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PersonCard person={person} />
              </div>
            ))}
          </div>
        </div>

        {/* PhD Students Section */}
        <div className="mb-12">
          <div className="flex items-center mb-8 animate-slide-up">
            <div className="w-12 h-12 bg-gradient-card border-2 border-primary rounded-xl flex items-center justify-center mr-4">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-academic">PhD Students</h3>
              <p className="text-muted-foreground">The next generation of researchers</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phd_students.map((person, index) => (
              <div 
                key={person.name}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PersonCard person={person} />
              </div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '800ms' }}>
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-academic">
                Join Our Research Group
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Interested in pursuing a PhD or postdoctoral research in distributed systems? 
                We're always looking for talented researchers to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
                  <Mail className="mr-2 w-4 h-4" />
                  Contact Us About Positions
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                  View Current Openings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default People;