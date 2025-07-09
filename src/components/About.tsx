import { Code, Palette, Zap, Users, Terminal, Cpu, Layers, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Terminal,
      title: "Full Stack Development",
      description: "Building end-to-end applications with modern JavaScript, TypeScript, and cutting-edge frameworks.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Crafting lightning-fast applications with advanced optimization techniques and best practices.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Layers,
      title: "System Architecture",
      description: "Designing scalable, maintainable architectures that grow with your business needs.",
      gradient: "bg-gradient-neon"
    },
    {
      icon: Cpu,
      title: "Modern Tech Stack",
      description: "Leveraging the latest technologies and tools to deliver exceptional user experiences.",
      gradient: "bg-neon-cyan"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with expertise in React.js and Next.js.
            I love creating digital experiences that are not only visually appealing but also
            highly functional and user-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With several years of experience in frontend development, I've had the opportunity
              to work on diverse projects ranging from small business websites to large-scale
              web applications. My expertise lies in modern JavaScript frameworks, particularly
              React.js and Next.js.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm constantly learning and staying up-to-date with the latest technologies and
              best practices in web development. I believe in writing clean, maintainable code
              and creating user experiences that make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group relative bg-gradient-card neon-border card-hover overflow-hidden">
                <div className={`absolute inset-0 opacity-10 ${feature.gradient} blur-xl transition-all duration-500 group-hover:opacity-20`}></div>
                <CardContent className="relative z-10 p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.gradient} rounded-xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-neon`}>
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 font-mono">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-xs text-muted-foreground font-mono">stats.js</span>
            </div>
          </div>
          <div className="p-8">
            <div className="font-mono text-terminal-green mb-4">
              <div>$ node stats.js</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold font-mono mb-2 bg-gradient-primary bg-clip-text text-transparent neon-pulse-animation">3+</div>
                <div className="text-muted-foreground font-mono">Years Experience</div>
                <div className="text-xs text-terminal-green mt-1 opacity-0 group-hover:opacity-100 transition-opacity">console.log('experience++');</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold font-mono mb-2 bg-gradient-secondary bg-clip-text text-transparent neon-pulse-animation">25+</div>
                <div className="text-muted-foreground font-mono">Projects Built</div>
                <div className="text-xs text-terminal-green mt-1 opacity-0 group-hover:opacity-100 transition-opacity">git commit -m "shipped"</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold font-mono mb-2 bg-gradient-neon bg-clip-text text-transparent neon-pulse-animation">24/7</div>
                <div className="text-muted-foreground font-mono">Code Passion</div>
                <div className="text-xs text-terminal-green mt-1 opacity-0 group-hover:opacity-100 transition-opacity">while(alive) {'{ code(); }'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;