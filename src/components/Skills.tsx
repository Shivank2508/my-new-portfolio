import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Wrench, Server, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: Code2,
      skills: ["React.js", "Next.js", "TypeScript", "Axios", "Formik"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Languages & Core",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Styling & UI",
      icon: Palette,
      skills: ["Tailwind CSS", "Styled Components", "SASS/SCSS", "Bootstrap", "React Bootstrap",],
      gradient: "bg-gradient-neon"
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      skills: ["Git", "Chrome Developer Tool", "ESLint", "Jest"],
      gradient: "bg-neon-cyan"
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB",],
      gradient: "bg-neon-purple"
    },
    {
      title: "Performance & Optimization",
      icon: Zap,
      skills: ["Code Splitting", "Lazy Loading", "Debounce", "Optimize Re-renders"],
      gradient: "bg-neon-orange"
    }
  ];

  const getSkillColor = (index: number) => {
    const colors = [
      "bg-gradient-primary",
      "bg-gradient-secondary",
      "bg-purple-accent",
      "bg-blue-accent",
      "bg-accent",
      "bg-orange-accent"
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I work with modern technologies and frameworks to build scalable,
            performant web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group relative bg-gradient-card backdrop-blur-sm rounded-xl p-6 border neon-border card-hover overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 opacity-10 ${category.gradient} blur-xl transition-all duration-500 group-hover:opacity-20`}></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-lg ${category.gradient} shadow-neon`}>
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-6 text-center font-mono">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default neon-border hover:shadow-glow bg-card/80 backdrop-blur-sm font-mono"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="terminal-window max-w-4xl mx-auto">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">developer@portfolio:~$</span>
              </div>
            </div>
            <div className="p-8">
              <div className="font-mono text-terminal-green">
                <div className="mb-2">$ cat philosophy.txt</div>
                <div className="text-foreground mt-4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Always Learning, Always Building
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Technology evolves rapidly, and I thrive on continuous learning.
                    Every project is an opportunity to explore new frameworks, optimize performance,
                    and craft better user experiences. Code is my canvas, and innovation is my drive.
                  </p>
                </div>
                <div className="mt-4 text-terminal-green">
                  <span className="animate-pulse">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;