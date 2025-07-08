import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Code, Terminal, Zap } from "lucide-react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Frontend Developer", "React.js Specialist", "TypeScript Expert", "Full Stack Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText("");
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < texts[currentIndex].length) {
        setCurrentText(texts[currentIndex].slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating neon orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary opacity-20 rounded-full blur-3xl float-animation shadow-neon"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-secondary opacity-20 rounded-full blur-3xl float-animation shadow-purple" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan opacity-10 rounded-full blur-3xl float-animation shadow-cyan" style={{ animationDelay: "4s" }}></div>
        
        {/* Code-like floating elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="code-block p-4 text-sm font-mono text-neon-green">
            <div>&lt;Developer /&gt;</div>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="code-block p-4 text-sm font-mono text-code-blue">
            <div>const passion = true;</div>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-20 opacity-20">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-4 text-sm font-mono text-terminal-green">
              <div>$ npm run create-awesome</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">
              Your Name
            </span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-light">
              <span className="typing-animation">{currentText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly web experiences
            with modern technologies and clean code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="neon-pulse-animation bg-gradient-primary hover:scale-105 transition-all duration-300 px-8 py-4 text-lg shadow-neon neon-border"
              onClick={() => scrollToSection("projects")}
            >
              <Code className="mr-2 w-5 h-5" />
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 text-lg neon-border"
              onClick={() => scrollToSection("contact")}
            >
              <Terminal className="mr-2 w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          {/* Enhanced social links with tech theme */}
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="group relative text-muted-foreground hover:text-neon-green transition-all duration-300 hover:scale-110 transform">
              <Github className="w-8 h-8" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="group relative text-muted-foreground hover:text-neon-cyan transition-all duration-300 hover:scale-110 transform">
              <Linkedin className="w-8 h-8" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </div>
            </a>
            <a href="mailto:your.email@example.com"
               className="group relative text-muted-foreground hover:text-neon-purple transition-all duration-300 hover:scale-110 transform">
              <Mail className="w-8 h-8" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Email
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;