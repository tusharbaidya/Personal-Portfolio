import { ArrowBigDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient opacity-0 animate-fade-in">
              Hi,I'm
            </span>
            {/* <span className="opacity-0 animate-fade-in-delay-1">I'm</span> */}
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">
              {""}
              Tushar
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {""}
              Baidya
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            As a passionate and results-driven Full Stack Developer and UI/UX
            Designer, I aim to leverage my expertise in both frontend and
            backend technologies to build scalable, intuitive, and user-centered
            digital solutions. With a strong foundation in HTML, CSS,
            JavaScript, React, Node.js, MongoDB, and Express, coupled with a
            deep understanding of user interface design principles and user
            experience strategies, I seek to contribute to innovative projects
            that bridge the gap between functionality and aesthetics.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#about" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowBigDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
