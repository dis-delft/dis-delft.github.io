import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchAreas from "@/components/ResearchAreas";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ResearchAreas />
      <Footer />
    </div>
  );
};

export default Index;
