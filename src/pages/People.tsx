import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ExternalLink, MapPin, GraduationCap, ArrowLeft, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import personPlaceholder from "@/assets/person-placeholder.jpg";

// Real team member photos
import epemaPhoto from "@/assets/people/epema.webp";
import atasuPhoto from "@/assets/people/atasu.jpg";
import pouvelsePhoto from "@/assets/people/pouwelse.webp";
import ychenPhoto from "@/assets/people/ychen.jpg";
import decouchantPhoto from "@/assets/people/decouchant.jpg";
import katsifodimosPhoto from "@/assets/people/katsifodimos.jpg";
import christodoulouPhoto from "@/assets/people/christodoulou.jpeg";
import jhuangPhoto from "@/assets/people/jhuang.png";
import stokkinkPhoto from "@/assets/people/stokkink.jpg";
import akyildizPhoto from "@/assets/people/akyildiz.jpg";
import bilgiPhoto from "@/assets/people/cbilgi.jpg";
import chotkanPhoto from "@/assets/people/chotkan.jpg";
import coxPhoto from "@/assets/people/cox.png";
import gregoriadisPhoto from "@/assets/people/gregoriadis.jpg";
import psarakisPhoto from "@/assets/people/psarakis.webp";
import jmgaljaard from "@/assets/people/jmgaljaard.jpg";
import mrazPhoto from "@/assets/people/mraz.jpg";
import nasrulinPhoto from "@/assets/people/nasrulin.jpg";
import shankarPhoto from "@/assets/people/shankar.jpg";
import zhuPhoto from "@/assets/people/zhu.jpg";
import boumanPhoto from "@/assets/people/bouman.jpg";
import degraafPhoto from "@/assets/people/degraaf.jpg";
import kboudewijnPhoto from "@/assets/people/kboudewijn.png";

const People = () => {
  // Actual team data from dis-delft.github.io
  const faculty = [
    {
      name: "Asterios Katsifodimos",
      role: "Assistant Professor & Group Head", 
      image: katsifodimosPhoto,
      research: ["Stream Processing", "Big Data Systems", "Distributed Analytics"],
      email: "a.katsifodimos@tudelft.nl",
      profileUrl: "https://dis-delft.github.io/katsifodimos",
      linkedin: "https://www.linkedin.com/in/asteriosk/",
      github: "https://github.com/asteriosk",
      bio: "Assistant Professor and Group Head leading research in stream processing and big data systems."
    },
    {
      name: "Dick Epema",
      role: "Emeritus Professor",
      image: epemaPhoto,
      research: ["Distributed Systems", "Performance Analysis", "Grid Computing"],
      email: "d.h.j.epema@tudelft.nl",
      office: "060 East 1st floor",
      profileUrl: "https://dis-delft.github.io/epema",
      bio: "Emeritus Professor with extensive expertise in distributed systems and performance analysis."
    },
    {
      name: "Kubilay Atasu", 
      role: "Associate Professor",
      image: atasuPhoto,
      research: ["Computer Architecture", "FPGA Computing", "Hardware Acceleration"],
      email: "k.atasu@tudelft.nl",
      office: "1.E180",
      profileUrl: "https://dis-delft.github.io/atasu",
      linkedin: "https://www.linkedin.com/in/kubilay-atasu-bb28a03",
      bio: "Associate Professor specializing in computer architecture and FPGA-based acceleration."
    },
    {
      name: "Johan Pouwelse",
      role: "Associate Professor", 
      image: pouvelsePhoto,
      research: ["Blockchain Technology", "Peer-to-Peer Systems", "Decentralized Systems"],
      email: "j.a.pouwelse@tudelft.nl",
      office: "340 East 1st Floor",
      profileUrl: "https://dis-delft.github.io/pouwelse",
      bio: "Associate Professor leading research in blockchain and peer-to-peer systems."
    },
    {
      name: "Lydia Chen",
      role: "Associate Professor", 
      image: ychenPhoto,
      research: ["Machine Learning Systems", "Cloud Computing", "Performance Modeling"],
      email: "lydiay.chen@tudelft.nl",
      office: "1.E.080",
      profileUrl: "https://dis-delft.github.io/ychen",
      linkedin: "https://www.linkedin.com/in/lydia-y-chen-65b7136/",
      bio: "Associate Professor focusing on machine learning systems and cloud performance."
    },
    {
      name: "Jérémie Decouchant",
      role: "Assistant Professor", 
      image: decouchantPhoto,
      research: ["Distributed Algorithms", "Fault Tolerance", "Byzantine Systems"],
      email: "j.decouchant@tudelft.nl",
      office: "1.E.280",
      profileUrl: "https://dis-delft.github.io/decouchant",
      linkedin: "https://www.linkedin.com/in/jeremie-decouchant",
      github: "https://github.com/jdecouchant",
      bio: "Assistant Professor specializing in distributed algorithms and fault-tolerant systems."
    }
  ];

  const researchers = [
    {
      name: "George Christodoulou",
      role: "Postdoctoral Researcher",
      image: christodoulouPhoto,
      research: ["Distributed Systems", "Performance Analysis", "Cloud Computing"],
      email: "g.christodoulou@tudelft.nl",
      office: "1.E.240",
      profileUrl: "https://dis-delft.github.io/christodoulou",
      linkedin: "https://www.linkedin.com/in/george-ch/",
      github: "https://github.com/GiorgosChristodoulou"
    },
    {
      name: "Jiyue (Gill) Huang",
      role: "Postdoctoral Researcher",
      image: jhuangPhoto,
      research: ["Machine Learning", "Distributed AI", "Federated Learning"],
      email: "j.huang-6@tudelft.nl", 
      office: "1.E.200",
      profileUrl: "https://dis-delft.github.io/jhuang",
      linkedin: "https://www.linkedin.com/in/jiyue-gill-huang-ab5531281/",
      github: "https://github.com/GillHuang-Xtler"
    },
    {
      name: "Quinten Stokkink",
      role: "Postdoctoral Researcher",
      image: stokkinkPhoto,
      research: ["Blockchain", "Peer-to-Peer Networks", "Decentralized Systems"],
      email: "q.stokkink@tudelft.nl",
      office: "420 East 1st floor",
      profileUrl: "https://dis-delft.github.io/stokkink",
      github: "https://github.com/qstokkink"
    }
  ];

  const phd_students = [
    {
      name: "Taha Atahan Akyildiz",
      role: "PhD Candidate",
      image: akyildizPhoto,
      research: ["Distributed Systems", "Performance Analysis"],
      email: "t.a.akyildiz@tudelft.nl",
      office: "1.E.060",
      profileUrl: "https://dis-delft.github.io/akyildiz",
      linkedin: "https://www.linkedin.com/in/taha-atahan-aky%C4%B1ld%C4%B1z-8b2321123/",
      github: "https://github.com/Atahanak/"
    },
    {
      name: "Halil Cagri Bilgi",
      role: "PhD Candidate", 
      image: bilgiPhoto,
      research: ["Machine Learning Systems", "Distributed Computing"],
      email: "h.c.bilgi@tudelft.nl",
      office: "1.E.060",
      profileUrl: "https://dis-delft.github.io/bilgi",
      linkedin: "https://www.linkedin.com/in/cagribilgi",
      github: "https://github.com/hcagri/"
    },
    {
      name: "Rowdy Chotkan",
      role: "PhD Candidate",
      image: chotkanPhoto,
      research: ["Blockchain Technology", "Decentralized Systems"],
      email: "r.chotkan@tudelft.nl",
      office: "400 West 1st floor",
      profileUrl: "https://dis-delft.github.io/chotkan",
      linkedin: "https://www.linkedin.com/in/rowdy-chotkan/",
      github: "https://github.com/InvictusRMC"
    },
    {
      name: "Bart Cox",
      role: "PhD Candidate",
      image: coxPhoto,
      research: ["Data Science", "Machine Learning"],
      email: "b.cox@tudelft.nl", 
      office: "1.E.200",
      profileUrl: "https://dis-delft.github.io/cox",
      linkedin: "https://www.linkedin.com/in/bart-cox/",
      github: "https://github.com/bacox"
    },
    {
      name: "Marcel Gregoriadis",
      role: "PhD Candidate",
      image: gregoriadisPhoto,
      research: ["Blockchain", "Distributed Ledger Technology"],
      email: "m.gregoriadis@tudelft.nl",
      office: "420 East 1st floor",
      profileUrl: "https://dis-delft.github.io/gregoriadis",
      linkedin: "https://www.linkedin.com/in/marcel-gregoriadis",
      github: "https://github.com/mg98"
    },
    {
      name: "Jeroen Martijn Galjaard",
      role: "PhD Candidate",
      image: jmgaljaard,
      research: ["Machine Learning", "Distributed Systems"],
      email: "j.m.galjaard@tudelft.nl",
      profileUrl: "https://dis-delft.github.io/jmgaljaard",
      linkedin: "https://www.linkedin.com/in/jmgaljaard",
      github: "https://github.com/JMGaljaard"
    },
    {
      name: "Oto Mráz",
      role: "PhD Candidate",
      image: mrazPhoto,
      research: ["Distributed Computing", "Performance Analysis"],
      email: "o.mraz@tudelft.nl",
      office: "240 East 1st floor",
      profileUrl: "https://dis-delft.github.io/mraz",
      linkedin: "https://www.linkedin.com/in/oto-mraz-643270192/",
      github: "https://github.com/omrazCZ"
    },
    {
      name: "Bulat Nasrulin",
      role: "PhD Candidate",
      image: nasrulinPhoto,
      research: ["Peer-to-Peer Systems", "Distributed Networks"],
      email: "b.nasrulin@tudelft.nl",
      office: "400 East 1st floor",
      profileUrl: "https://dis-delft.github.io/nasrulin",
      github: "https://github.com/grimadas"
    },
    {
      name: "Petru Mihai Neague",
      role: "PhD Candidate",
      image: personPlaceholder,
      research: ["Distributed Systems", "Cloud Computing"],
      email: "p.m.neague@tudelft.nl",
      profileUrl: "https://dis-delft.github.io/neague",
      linkedin: "https://www.linkedin.com/in/petru-neague/",
      github: "https://github.com/pneague"
    },
    {
      name: "Kyriakos Psarakis",
      role: "PhD Candidate",
      image: psarakisPhoto,
      research: ["Stream Processing", "Big Data Systems"],
      email: "k.psarakis@tudelft.nl",
      office: "1.E.240",
      profileUrl: "https://dis-delft.github.io/psarakis",
      linkedin: "https://www.linkedin.com/in/kyriakos-psarakis-699843147/",
      github: "https://github.com/kPsarakis"
    },
    {
      name: "Aditya Shankar",
      role: "PhD Candidate",
      image: shankarPhoto,
      research: ["Cloud Computing", "Distributed Systems"],
      email: "a.shankar@tudelft.nl",
      office: "3.W.920 or 1.E.040",
      profileUrl: "https://dis-delft.github.io/shankar",
      linkedin: "https://www.linkedin.com/in/aashankar/",
      github: "https://github.com/adis98"
    },
    {
      name: "Chaoyi Zhu",
      role: "PhD Candidate",
      image: zhuPhoto,
      research: ["Machine Learning", "Data Analytics"],
      email: "c.zhu@tudelft.nl",
      office: "1.E.040",
      profileUrl: "https://dis-delft.github.io/zhu",
      linkedin: "https://www.linkedin.com/in/chaoyizhu/",
      github: "https://github.com/chaoyitud"
    }
  ];

  const supportStaff = [
    {
      name: "Egbert Bouman",
      role: "Developer",
      image: boumanPhoto,
      research: ["Software Development", "System Administration"],
      email: "e.bouman@tudelft.nl",
      office: "1.E.320",
      profileUrl: "https://dis-delft.github.io/bouman",
      github: "https://github.com/egbertbouman"
    },
    {
      name: "Marja de Graaf",
      role: "Secretary",
      image: degraafPhoto,
      research: ["Administrative Support"],
      email: "m.degraaf@tudelft.nl",
      office: "3.E.320"
    },
    {
      name: "Kim Boudewijn",
      role: "Secretary",
      image: kboudewijnPhoto,
      research: ["Administrative Support"],
      email: "k.boudewijn@tudelft.nl", 
      office: "1.W.640"
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
              <Button size="sm" variant="secondary" className="bg-white/90 text-foreground hover:bg-white" asChild>
                <a href={`mailto:${person.email}`}>
                  <Mail className="w-4 h-4 mr-1" />
                  Email
                </a>
              </Button>
              {person.profileUrl && (
                <Button size="sm" variant="secondary" className="bg-white/90 text-foreground hover:bg-white" asChild>
                  <a href={person.profileUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
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
              <a href={`mailto:${person.email}`} className="truncate hover:text-primary transition-colors">
                {person.email}
              </a>
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
            
            {/* Social Links */}
            {(person.linkedin || person.github) && (
              <div className="flex items-center space-x-3 pt-2">
                {person.linkedin && (
                  <a 
                    href={person.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/70 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-1" />
                    <span className="text-xs">LinkedIn</span>
                  </a>
                )}
                {person.github && (
                  <a 
                    href={person.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/70 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="text-xs">GitHub</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24">
        <div className="container mx-auto px-6">
          {/* Back Navigation */}
          <div className="mb-8 animate-slide-up">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              Meet Our Researchers
            </h1>
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
                <h2 className="text-2xl font-bold text-academic">Faculty Members</h2>
                <p className="text-muted-foreground">Leading researchers and educators</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {faculty.map((person, index) => (
                <div 
                  key={person.name}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <PersonCard person={person} />
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
                <h2 className="text-2xl font-bold text-academic">Research Staff</h2>
                <p className="text-muted-foreground">Postdocs and senior researchers</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {researchers.map((person, index) => (
                <div 
                  key={person.name}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <PersonCard person={person} />
                </div>
              ))}
            </div>
          </div>

          {/* PhD Students Section */}
          <div className="mb-20">
            <div className="flex items-center mb-8 animate-slide-up">
              <div className="w-12 h-12 bg-gradient-card border-2 border-primary rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-academic">PhD Students</h2>
                <p className="text-muted-foreground">The next generation of researchers</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {phd_students.map((person, index) => (
                <div 
                  key={person.name}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <PersonCard person={person} />
                </div>
              ))}
            </div>
          </div>

          {/* Support Staff Section */}
          <div className="mb-12">
            <div className="flex items-center mb-8 animate-slide-up">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mr-4">
                <Users2 className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-academic">Support Staff</h2>
                <p className="text-muted-foreground">Essential team members</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {supportStaff.map((person, index) => (
                <div 
                  key={person.name}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <PersonCard person={person} />
                </div>
              ))}
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="text-center mb-20 animate-slide-up" style={{ animationDelay: '800ms' }}>
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
      </main>

      <Footer />
    </div>
  );
};

export default People;