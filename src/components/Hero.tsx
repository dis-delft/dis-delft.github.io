import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroSystemsBg from "@/assets/hero-systems-final-bg.jpg";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSystemsBg}
          alt="Network visualization background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-academic/80 to-primary/70" />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Floating Network Nodes Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-accent rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-pulse-soft opacity-40" />
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-accent-light rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-white rounded-full animate-pulse-soft opacity-30" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Data-Intensive
            <span className="block text-gradient-accent">Systems</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Advancing the frontiers of distributed systems, machine learning infrastructure, 
            and blockchain technology at <strong>TU Delft</strong>
          </p>

          {/* Mission Statement */}
          <div className="glass-card p-6 md:p-8 mb-12 max-w-2xl mx-auto">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Our mission is to <strong>model, design, implement, and analyze</strong> distributed 
              systems and algorithms for the next generation of data-intensive applications.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground shadow-glow">
              Explore Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Meet Our Team
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;