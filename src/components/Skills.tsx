import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      skills: ["React.js", "Next.js", "Vue.js", "Angular"]
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "Styling & UI",
      skills: ["Tailwind CSS", "Styled Components", "SASS/SCSS", "Material-UI", "Chakra UI"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Webpack", "Vite", "npm/yarn", "ESLint", "Prettier"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "Supabase"]
    },
    {
      title: "Other Skills",
      skills: ["Responsive Design", "API Integration", "Testing", "Performance Optimization"]
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
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border card-hover"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className={`
                      px-3 py-1 text-sm font-medium transition-all duration-300 
                      hover:scale-105 cursor-default border-border
                      ${categoryIndex % 2 === 0 ? 'hover:bg-primary hover:text-primary-foreground' : 'hover:bg-accent hover:text-accent-foreground'}
                    `}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-primary rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Always Learning
            </h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              I regularly explore new frameworks, tools, and best practices to stay 
              at the forefront of frontend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;