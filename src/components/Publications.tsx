import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Publications = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://filelist.tudelft.nl/Admin/pure-converter/js/iframeResizer.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.iFrameResize) {
        // @ts-ignore
        window.iFrameResize({}, "#pure-iframe");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          <iframe
            id="pure-iframe"
            src="https://purexml.ewi.tudelft.nl/direct/tu/group/bae30032-1ecb-46c4-8efb-ed9e7251d281"
            scrolling="no"
            aria-label="ad for publications Data Intensive Systems"
            className="w-full border-none min-h-[800px]"
          ></iframe>
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