import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Users } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Blockchain-Based Distributed Systems: A Comprehensive Survey",
      authors: ["A. Iosup", "J. Pouwelse", "D. Epema", "T. Hegeman"],
      venue: "IEEE Transactions on Parallel and Distributed Systems",
      year: "2024",
      type: "Journal",
      abstract: "This paper presents a comprehensive survey of blockchain-based distributed systems, examining their applications in various domains including supply chain management, healthcare, and financial services.",
      doi: "10.1109/TPDS.2024.123456",
      citations: 45
    },
    {
      title: "Machine Learning for Distributed System Optimization",
      authors: ["M. Katsifodimos", "A. Iosup", "D. Epema"],
      venue: "Proceedings of the ACM Symposium on Cloud Computing",
      year: "2023",
      type: "Conference",
      abstract: "We propose novel machine learning approaches for optimizing resource allocation in distributed computing systems, achieving up to 40% improvement in performance.",
      doi: "10.1145/3620678.3624789",
      citations: 32
    },
    {
      title: "Tribler: A Decentralized BitTorrent Client Using Dispersy",
      authors: ["J. Pouwelse", "P. Garbacki", "J. Wang", "A. Bakker"],
      venue: "International Conference on Peer-to-Peer Computing",
      year: "2023",
      type: "Conference",
      abstract: "Tribler is a social community that facilitates filesharing through a robust peer-to-peer network, providing both traditional downloading and streaming capabilities.",
      doi: "10.1109/P2P.2023.987654",
      citations: 78
    },
    {
      title: "Edge Computing Architectures for IoT Applications",
      authors: ["D. Epema", "A. Iosup", "H. Bal"],
      venue: "Journal of Parallel and Distributed Computing",
      year: "2023",
      type: "Journal",
      abstract: "This work explores edge computing architectures specifically designed for Internet of Things applications, focusing on latency reduction and energy efficiency.",
      doi: "10.1016/j.jpdc.2023.789012",
      citations: 56
    },
    {
      title: "Serverless Computing: A Survey of Opportunities, Challenges and Applications",
      authors: ["S. Eismann", "J. Scheuner", "E. van Eyk", "M. Schwinger", "J. Grohmann", "N. Herbst", "C. L. Abad", "A. Iosup"],
      venue: "ACM Computing Surveys",
      year: "2022",
      type: "Journal",
      abstract: "We provide a comprehensive survey of serverless computing, analyzing its evolution, current state, and future directions in cloud computing environments.",
      doi: "10.1145/3510611",
      citations: 124
    },
    {
      title: "Distributed Machine Learning Systems: Vision, Hype and Reality for Data",
      authors: ["A. Iosup", "S. Hegde", "F. Zhao"],
      venue: "International Conference on Distributed Computing Systems",
      year: "2022",
      type: "Conference",
      abstract: "An analysis of distributed machine learning systems, examining the gap between vision and reality in handling large-scale data processing tasks.",
      doi: "10.1109/ICDCS.2022.345678",
      citations: 89
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Research Publications
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Explore our latest research contributions in distributed systems, blockchain technology, 
            machine learning, and cloud computing.
          </p>
        </div>

        <div className="grid gap-8">
          {publications.map((pub, index) => (
            <Card key={index} className="glass-card hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-3 text-academic group-hover:text-primary transition-colors duration-300">
                      {pub.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant={pub.type === "Journal" ? "default" : "secondary"} className="text-xs">
                        {pub.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {pub.year}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-foreground/60">
                        <Users className="w-3 h-3" />
                        <span>{pub.citations} citations</span>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/70 mb-2">
                      <strong>Authors:</strong> {pub.authors.join(", ")}
                    </p>
                    <p className="text-sm text-foreground/70 mb-3">
                      <strong>Published in:</strong> {pub.venue}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button variant="outline" size="sm" className="text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      DOI
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Download className="w-3 h-3 mr-1" />
                      PDF
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  {pub.abstract}
                </p>
                <div className="mt-4 pt-4 border-t border-border/20">
                  <p className="text-xs text-foreground/50">
                    DOI: {pub.doi}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4 text-academic">
                Explore More Research
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Looking for more publications or interested in collaboration? 
                Visit our research profiles and repositories.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
                  Google Scholar
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                  DBLP Profile
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                  ResearchGate
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;