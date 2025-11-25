
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";


const Publications = () => {
  const [publicationsHtml, setPublicationsHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const link = "https://purexml.ewi.tudelft.nl/direct/tu/group/bae30032-1ecb-46c4-8efb-ed9e7251d281/";
        const page = window.location.search;

        const response = await fetch(link + page);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} `);
        }

        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        // Create a temporary container to build the structure
        const container = document.createElement("div");
        const all_p = doc.getElementsByTagName("p");
        const u_list = document.createElement("ul");
        u_list.className = "publication-items space-y-4";

        // Iterate over HTMLCollection
        Array.from(all_p).forEach((p) => {
          if (p.innerHTML) {
            const d = document.createElement("li");
            d.innerHTML = p.innerHTML;
            d.className = "publication p-4 bg-card rounded-lg border border-border/50 shadow-sm";
            u_list.appendChild(d);
          }
        });

        container.appendChild(u_list);

        const nav_items = doc.getElementsByClassName("pagination-block")[0];
        if (nav_items) {
          container.appendChild(nav_items.cloneNode(true));
        }

        setPublicationsHtml(container.innerHTML);
      } catch (err) {
        console.error("Failed to fetch publications:", err);
        setError("Failed to load publications. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
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
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading publications...</p>
            </div>
          )}



          {error && (
            <div className="text-center py-12 text-destructive">
              <p>{error}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
            </div>
          )}

          {!loading && !error && (
            <div
              id="publicationlist"
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: publicationsHtml }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;